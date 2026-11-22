---
'@mado/hooks': minor
'@mado/utils': minor
---

The functions returned by `debounce` and `useDebounce` now have a `void` return type. Calling them schedules the callback for later. If you need the callback's result, consume it inside the callback.

`@mado/utils` now exports `Debounced<T>` for a debounced function with a `cancel()` method. For an overloaded callback, `debounce` infers the parameters of its last overload.
