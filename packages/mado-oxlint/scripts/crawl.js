import { mkdir, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const upstream = join(import.meta.dirname, '..', 'upstream');
const url = 'https://raw.githubusercontent.com/oxc-project/website/main/.vitepress/data/rules.json';
const response = await fetch(url, { signal: AbortSignal.timeout(30_000) });
if (!response.ok) throw new Error(`HTTP ${response.status}: ${url}`);

const rules = await response.json();
if (!rules.length) throw new Error('Expected a non-empty upstream rule list.');

const scopes = Map.groupBy(rules, ({ scope }) => scope);
await rm(upstream, { force: true, recursive: true });
await mkdir(upstream);
for (const [scope, entries] of scopes) {
  entries.sort((a, b) => a.value.localeCompare(b.value, 'en'));
  await writeFile(join(upstream, `${scope}.json`), `${JSON.stringify(entries, null, 2)}\n`);
}
console.log(`Collected ${rules.length} rules from ${scopes.size} plugins.`);
