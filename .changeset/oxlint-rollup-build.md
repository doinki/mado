---
'@mado/oxlint': patch
---

Switch the build from tsup to Rollup and Babel, and add `@babel/runtime` as a dependency so that Babel helpers are imported instead of inlined. The exported configurations are unchanged. The package source has moved to `packages/mado-oxlint`.
