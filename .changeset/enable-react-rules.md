---
'@mado/oxlint': minor
---

The default `@mado/oxlint` configuration now includes the React preset. Conditional Hook calls, direct mutation of props or state, unconditional state updates during render, and missing list keys are reported as errors.

The preset also warns about incomplete Hook dependencies, ref access during render, and unused `useMemo` results. It prefers function declarations for named components and requires braces around JSX elements passed as props.

Import `@mado/oxlint/sort` to use the import, export, object, and type sorting rules on their own.

The import preset now allows separate named export declarations in the same module.
