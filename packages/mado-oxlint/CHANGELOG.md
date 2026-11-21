# @mado/oxlint

## 0.4.0

### Minor Changes

- [`9a26b93`](https://github.com/doinki/mado/commit/9a26b93eceefaf05a19f7932913b8927685e4577) Thanks [@doinki](https://github.com/doinki)! - The `@mado/oxlint/promise` preset now reports errors when the same execution path calls `resolve` or `reject` more than once, when `new` is used on a static Promise method, or when a Promise method receives the wrong number of arguments.

  The preset also warns about missing returns in `.then()` callbacks, chains that are neither caught nor returned, callbacks invoked inside Promise handlers, redundant `Promise.resolve()` or `Promise.reject()` wrappers, and nonstandard Promise executor parameter names. A final `.then()` callback may omit its return when the chain's result is unused.

## 0.3.0

### Minor Changes

- [`97b254c`](https://github.com/doinki/mado/commit/97b254c4771bfa1e4f2a695ea89ff9a01e23b088) Thanks [@doinki](https://github.com/doinki)! - The shared `@mado/oxlint` configuration now includes the Oxc preset, which flags missing `throw` statements and chained comparisons as errors.

## 0.2.1

### Patch Changes

- [`cbcf54a`](https://github.com/doinki/mado/commit/cbcf54a06f8ceb05434944fd7eb40888ffd5c8c2) Thanks [@doinki](https://github.com/doinki)! - Switch the build from tsup to Rollup and Babel, and add `@babel/runtime` as a dependency so that Babel helpers are imported instead of inlined. The exported configurations are unchanged. The package source has moved to `packages/mado-oxlint`.

## 0.2.0

### Minor Changes

- [`39b4503`](https://github.com/doinki/mado/commit/39b4503f5280ed608ca7dda37d984bc4e0a08017) Thanks [@doinki](https://github.com/doinki)! - Add the `trim/argument` and `trim/class-name` rules from `eslint-plugin-trim` to the base configuration.

## 0.1.0

### Minor Changes

- 74946bc: Add a shared Oxlint configuration with import and code sorting rules, plus separate configuration entry points for each built-in plugin.
