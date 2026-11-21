import { glob, mkdir, readFile, writeFile } from 'node:fs/promises';
import { basename, join } from 'node:path';

import ts from 'typescript';

const upstreamDirectory = join(import.meta.dirname, '..', 'upstream');
const sourceDirectory = join(import.meta.dirname, '..', 'src');
const files = (await Array.fromAsync(glob('*.json', { cwd: upstreamDirectory }))).sort();
let addedRules = 0;

await mkdir(sourceDirectory, { recursive: true });

for (const file of files) {
  const scope = basename(file, '.json');
  const plugin = scope.replaceAll('_', '-');
  const rules = JSON.parse(await readFile(join(upstreamDirectory, file), 'utf8'));
  const path = join(sourceDirectory, `${plugin}.ts`);
  const existing = await readFile(path, 'utf8').catch((error) => {
    if (error.code !== 'ENOENT') throw error;
    return null;
  });
  const { added, content } = updateRules(path, existing ?? createConfig(plugin), plugin, rules);
  if (content === existing) continue;

  await writeFile(path, content);
  addedRules += added;
}

console.log(`Processed ${files.length} scopes and added ${addedRules} new rules.`);

function createConfig(plugin) {
  return `import type { OxlintConfig } from 'oxlint';

const rules: OxlintConfig['rules'] = {};

export default {
  plugins: ['${plugin}'],
  rules,
} satisfies OxlintConfig;
`;
}

function updateRules(path, content, plugin, upstreamRules) {
  const { rulesObject, source } = parseRules(path, content);
  const existingRules = new Map(
    rulesObject.properties.values().map((property) => {
      const name = property.name.text;
      return [plugin === 'eslint' ? name.replace(/^eslint\//, '') : name, property];
    }),
  );
  const additions = [];
  const edits = [];
  for (const { docs_url, value } of upstreamRules) {
    const name = plugin === 'eslint' ? value : `${plugin}/${value}`;
    const property = existingRules.get(name);
    if (!property) {
      additions.push(`  // ${docs_url}\n  '${name}': 'off',`);
      continue;
    }

    const comments = ts.getLeadingCommentRanges(content, property.pos) ?? [];
    if (comments.some(({ end, pos }) => content.slice(pos, end).includes(docs_url))) continue;

    const position = property.getStart(source);
    const linePrefix = content.slice(content.lastIndexOf('\n', position - 1) + 1, position);
    const inline = linePrefix.trim().length > 0;
    const indent = inline ? '  ' : linePrefix;
    const commentPrefix = inline ? `\n${indent}` : '';
    edits.push({ end: position, start: position, text: `${commentPrefix}// ${docs_url}\n${indent}` });
  }

  if (additions.length > 0) {
    const end = rulesObject.end - 1;
    const start = content.slice(0, end).trimEnd().length;
    const lastRule = rulesObject.properties.at(-1);
    if (lastRule && !rulesObject.properties.hasTrailingComma) {
      edits.push({ end: lastRule.end, start: lastRule.end, text: ',' });
    }
    edits.push({ end, start, text: `\n${additions.join('\n')}\n` });
  }

  return {
    added: additions.length,
    content: applyEdits(content, edits),
  };
}

function parseRules(path, content) {
  const source = ts.createSourceFile(path, content, ts.ScriptTarget.Latest);
  const declaration = source.statements
    .values()
    .filter(ts.isVariableStatement)
    .flatMap((statement) => statement.declarationList.declarations)
    .find(({ name }) => name.text === 'rules');

  return { rulesObject: declaration.initializer, source };
}

function applyEdits(content, edits) {
  if (edits.length === 0) return content;

  const chunks = [];
  let cursor = 0;
  for (const { end, start, text } of edits.toSorted((a, b) => a.start - b.start || a.end - b.end)) {
    chunks.push(content.slice(cursor, start), text);
    cursor = end;
  }
  chunks.push(content.slice(cursor));
  return chunks.join('');
}
