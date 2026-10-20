# @mado/oxlint

## 0.2.1

### Patch Changes

- [`cbcf54a`](https://github.com/doinki/mado/commit/cbcf54a06f8ceb05434944fd7eb40888ffd5c8c2) Thanks [@doinki](https://github.com/doinki)! - Switch the build from tsup to Rollup and Babel, and add `@babel/runtime` as a dependency so that Babel helpers are imported instead of inlined. The exported configurations are unchanged. The package source has moved to `packages/mado-oxlint`.

## 0.2.0

### Minor Changes

- [`39b4503`](https://github.com/doinki/mado/commit/39b4503f5280ed608ca7dda37d984bc4e0a08017) Thanks [@doinki](https://github.com/doinki)! - Add the `trim/argument` and `trim/class-name` rules from `eslint-plugin-trim` to the base configuration.

## 0.1.0

### Minor Changes

- 74946bc: Add a shared Oxlint configuration with import and code sorting rules, plus separate configuration entry points for each built-in plugin.
