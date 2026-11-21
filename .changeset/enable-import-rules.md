---
'@mado/oxlint': minor
---

The default `@mado/oxlint` configuration now includes the import preset. It reports runtime import cycles as errors and allows cycles formed only by type imports.

The preset warns about duplicate imports, imports placed after other statements, missing blank lines after imports, and empty named import blocks. It prefers top-level `import type` declarations, grouped named exports, named values for default exports, and default imports written as `import value from './module'`. Duplicate import checks treat different query strings as distinct module requests.
