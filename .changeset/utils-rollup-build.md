---
'@mado/utils': patch
---

Switch the build from tsup to Rollup and Babel, and add `@babel/runtime` as a dependency so that Babel helpers are imported instead of inlined. The public API is unchanged.
