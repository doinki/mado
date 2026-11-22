---
'@mado/oxlint': minor
---

Include the TypeScript preset in the default Oxlint configuration. Duplicate enum values and optional chains followed by a non-null assertion now produce errors. The preset also requires a reason for `@ts-expect-error` and warns about inconsistent type imports and exports.

With type-aware linting enabled, the preset reports errors for deleting array elements and warns about unsafe uses of `any`, unhandled cases in union switches, and methods used without their `this` binding. Enable these checks with `oxlint --type-aware` or `options.typeAware: true` in your root Oxlint configuration.
