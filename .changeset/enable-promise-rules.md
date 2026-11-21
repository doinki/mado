---
'@mado/oxlint': minor
---

The `@mado/oxlint/promise` preset now reports errors when the same execution path calls `resolve` or `reject` more than once, when `new` is used on a static Promise method, or when a Promise method receives the wrong number of arguments.

The preset also warns about missing returns in `.then()` callbacks, chains that are neither caught nor returned, callbacks invoked inside Promise handlers, redundant `Promise.resolve()` or `Promise.reject()` wrappers, and nonstandard Promise executor parameter names. A final `.then()` callback may omit its return when the chain's result is unused.
