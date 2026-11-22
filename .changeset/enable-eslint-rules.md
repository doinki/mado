---
'@mado/oxlint': minor
---

Enable the ESLint preset by default. JavaScript and TypeScript files now report errors for dynamic `Function` construction and async Promise executors. The preset prefers function declarations for named functions and arrow functions for anonymous React components.

Use separate JavaScript and TypeScript rules for thrown values, Promise rejection reasons, and async functions without `await`. Remove duplicate warnings for type imports and wrapped Promise returns. Enable type-aware linting to check for unnecessary `await` and opportunities to use `find`, `includes`, `startsWith`, or `endsWith`.
