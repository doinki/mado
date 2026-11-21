---
'@mado/oxlint': minor
---

The default `@mado/oxlint` configuration now includes the Node.js and Promise presets.

The Node.js preset reports errors for reassigning `exports` or calling `new` on `require`. It warns about ignored callback errors, callback calls that may let execution continue, use of `exports` in place of `module.exports`, and paths built by concatenating strings with `__dirname` or `__filename`.
