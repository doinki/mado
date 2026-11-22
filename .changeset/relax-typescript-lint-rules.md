---
'@mado/oxlint': patch
---

Limit warnings for unsafe arguments, assignments, calls, member access, and return values to `.ts`, `.tsx`, `.mts`, and `.cts` files. Disable `typescript/no-unsafe-type-assertion` for all files.

Allow concise arrow functions to return a `void` expression. Functions explicitly typed to return `void` and callbacks with a contextual `void` return type can also use `return` with a `void` expression.
