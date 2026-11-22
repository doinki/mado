---
'@mado/oxlint': minor
---

Enable the Vitest preset in the default Oxlint configuration. Focused tests, duplicate test titles, and unhandled asynchronous assertions now produce lint errors.

The preset prefers `.for` for parameterized tests, `it` inside `describe`, and `test` at the top level. It also warns about explicit imports of Vitest globals. To use global test APIs, set `test.globals` to `true` in Vitest and include `vitest/globals` in your TypeScript `types` list.
