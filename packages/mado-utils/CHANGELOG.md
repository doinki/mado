# @mado/utils

## 0.5.0

### Minor Changes

- [`d1145bc`](https://github.com/doinki/mado/commit/d1145bc2f8958602297c64bf1347e9afbbe770eb) Thanks [@doinki](https://github.com/doinki)! - The functions returned by `debounce` and `useDebounce` now have a `void` return type. Calling them schedules the callback for later. If you need the callback's result, consume it inside the callback.

  `@mado/utils` now exports `Debounced<T>` for a debounced function with a `cancel()` method. For an overloaded callback, `debounce` infers the parameters of its last overload.

## 0.4.1

### Patch Changes

- [`cbcf54a`](https://github.com/doinki/mado/commit/cbcf54a06f8ceb05434944fd7eb40888ffd5c8c2) Thanks [@doinki](https://github.com/doinki)! - Switch the build from tsup to Rollup and Babel, and add `@babel/runtime` as a dependency so that Babel helpers are imported instead of inlined. The public API is unchanged.

## 0.4.0

### Minor Changes

- f2fd1b8: refactor: mado-invariant와 mado-remember를 mado-utils로 통합

## 0.3.0

### Minor Changes

- 7da15aa: Add isObjectLike and isPlainObject functions

## 0.2.0

### Minor Changes

- ce252f2: - Add capitalize function
  - Add isNil function

## 0.1.0

### Minor Changes

- 2fcb4c0: feat(utils): Add storageAvailable function

## 0.0.1

### Patch Changes

- d2e133c: feat(utils): 🎉
