# @mado/oxlint

## 0.8.0

### Minor Changes

- [`82e60d7`](https://github.com/doinki/mado/commit/82e60d7a3d16f754af9a835c32469e8fcf9e683a) Thanks [@doinki](https://github.com/doinki)! - Include the Unicorn preset in the default Oxlint configuration. It reports errors for recursive getters and setters, filling an array with a shared object, sending a request body with GET or HEAD, and removing an event listener with a new callback. Timer calls must specify a delay, and lint suppression comments must name the rules they disable.

  The preset also warns about array callbacks that receive unintended arguments, errors created without a message, and Node.js built-in imports that omit the `node:` prefix.

## 0.7.0

### Minor Changes

- [`a4d3971`](https://github.com/doinki/mado/commit/a4d39712c99a5be8711cce46e4e34232f7947fb7) Thanks [@doinki](https://github.com/doinki)! - Enable the Vitest preset in the default Oxlint configuration. Focused tests, duplicate test titles, and unhandled asynchronous assertions now produce lint errors.

  The preset prefers `.for` for parameterized tests, `it` inside `describe`, and `test` at the top level. It also warns about explicit imports of Vitest globals. To use global test APIs, set `test.globals` to `true` in Vitest and include `vitest/globals` in your TypeScript `types` list.

## 0.6.0

### Minor Changes

- [`7574efe`](https://github.com/doinki/mado/commit/7574efe19fad9368006b9c2edaf8ab5abc2417ee) Thanks [@doinki](https://github.com/doinki)! - The default `@mado/oxlint` configuration now includes the React preset. Conditional Hook calls, direct mutation of props or state, unconditional state updates during render, and missing list keys are reported as errors.

  The preset also warns about incomplete Hook dependencies, ref access during render, and unused `useMemo` results. It prefers function declarations for named components and requires braces around JSX elements passed as props.

  Import `@mado/oxlint/sort` to use the import, export, object, and type sorting rules on their own.

  The import preset now allows separate named export declarations in the same module.

## 0.5.0

### Minor Changes

- [`a7644fb`](https://github.com/doinki/mado/commit/a7644fb91bdb547d1a5c9148386fc4ab986cfc9e) Thanks [@doinki](https://github.com/doinki)! - The default `@mado/oxlint` configuration now includes the import preset. It reports runtime import cycles as errors and allows cycles formed only by type imports.

  The preset warns about duplicate imports, imports placed after other statements, missing blank lines after imports, and empty named import blocks. It prefers top-level `import type` declarations, grouped named exports, named values for default exports, and default imports written as `import value from './module'`. Duplicate import checks treat different query strings as distinct module requests.

- [`f7826d4`](https://github.com/doinki/mado/commit/f7826d4860895d8b6ecf19a3f48c1802a8d5aa03) Thanks [@doinki](https://github.com/doinki)! - The default `@mado/oxlint` configuration now includes the Node.js and Promise presets.

  The Node.js preset reports errors for reassigning `exports` or calling `new` on `require`. It warns about ignored callback errors, callback calls that may let execution continue, use of `exports` in place of `module.exports`, and paths built by concatenating strings with `__dirname` or `__filename`.

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
