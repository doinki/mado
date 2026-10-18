import { mkdir, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const repository = 'oxc-project/website';
const outputDirectory = join(import.meta.dirname, '..', 'upstream');

const rules = await fetchJson(`https://raw.githubusercontent.com/${repository}/main/.vitepress/data/rules.json`);
const scopes = Map.groupBy(rules, ({ scope }) => scope);
await saveRules(scopes);

console.log(`Collected ${rules.length} rules from ${scopes.size} plugins.`);

async function fetchJson(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(30_000) });
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${url}`);
  return response.json();
}

async function saveRules(scopes) {
  await rm(outputDirectory, { recursive: true, force: true });
  await mkdir(outputDirectory);

  await Promise.all(
    scopes
      .entries()
      .map(([scope, rules]) =>
        writeFile(join(outputDirectory, `${scope}.json`), `${JSON.stringify(rules, null, 2)}\n`),
      ),
  );
}
