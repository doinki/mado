import { act, renderHook } from '@testing-library/react';

import { useEvent } from '../src';

describe(useEvent, () => {
  it('should initialize and update the function reference correctly', () => {
    let value = 0;

    function initialFunction() {
      value = 1;
    }

    function updatedFunction() {
      value = 2;
    }

    const { rerender, result } = renderHook((fn) => useEvent(fn), {
      initialProps: initialFunction,
    });

    expect(value).toBe(0);

    act(() => {
      result.current();
    });

    expect(value).toBe(1);

    rerender(updatedFunction);

    act(() => {
      result.current();
    });

    expect(value).toBe(2);
  });

  it('should maintain the same reference across re-renders', () => {
    function initialFunction() {}
    function updatedFunction() {}

    const { rerender, result } = renderHook((fn) => useEvent(fn), {
      initialProps: initialFunction,
    });
    const firstRef = result.current;

    rerender(updatedFunction);

    expect(result.current).toBe(firstRef);
    expect(result.current).not.toBe(initialFunction);
    expect(result.current).not.toBe(updatedFunction);
  });
});
