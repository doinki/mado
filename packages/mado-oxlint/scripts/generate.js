import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { glob, rm, writeFile } from 'node:fs/promises';
import { basename, join } from 'node:path';
import { pathToFileURL } from 'node:url';

import { format } from 'oxfmt';

import formatConfig from '../../../oxfmt.config.ts';

const upstream = join(import.meta.dirname, '..', 'upstream');
const src = join(import.meta.dirname, '..', 'src');
const snapshotFiles = await Array.fromAsync(glob('*.json', { cwd: upstream }));
const retired = getPresetPathsFromHead();

for (const snapshotFile of snapshotFiles) {
  const preset = presetFor(snapshotFile);
  retired.delete(preset.path);

  const { default: upstreamRules } = await import(pathToFileURL(join(upstream, snapshotFile)), {
    with: { type: 'json' },
  });
  const { default: config } = existsSync(preset.path)
    ? await import(pathToFileURL(preset.path))
    : { default: { plugins: [preset.plugin] } };

  const content = await renderPreset(upstreamRules, config, preset.plugin);

  await writeFile(preset.path, content);
}

for (const path of retired) await rm(path, { force: true });
console.log(`Synced ${snapshotFiles.length} plugin presets.`);

function presetFor(snapshotFile) {
  const plugin = basename(snapshotFile, '.json').replaceAll('_', '-');

  return { path: join(src, `${plugin}.ts`), plugin };
}

function getPresetPathsFromHead() {
  const tracked = execFileSync('git', ['ls-tree', '--name-only', 'HEAD'], { cwd: upstream, encoding: 'utf8' });
  const snapshots = tracked.split('\n').filter((file) => file.endsWith('.json'));

  return new Set(snapshots.map((file) => presetFor(file).path));
}

async function renderPreset(upstreamRules, { rules = {}, ...config }, plugin) {
  const entries = upstreamRules.map(({ docs_url, value }) => {
    const fullKey = `${plugin}/${value}`;
    const key = plugin === 'eslint' ? value : fullKey;
    const setting = Object.hasOwn(rules, key) ? rules[key] : (rules[fullKey] ?? 'off');
    return `// ${new URL(docs_url).href}\n${JSON.stringify(key)}: ${JSON.stringify(setting)}`;
  });
  const properties = Object.entries(config).map(([key, value]) => `${JSON.stringify(key)}: ${JSON.stringify(value)},`);

  const source = `import type { OxlintConfig } from 'oxlint';

const rules: OxlintConfig['rules'] = {
${entries.join(',\n')}
};

export default {
${properties.join('\n')}
  rules,
} satisfies OxlintConfig;
`;

  const { code, errors } = await format(`${plugin}.ts`, source, formatConfig);
  if (errors.length) throw new Error(errors[0].message);

  return code;
}
