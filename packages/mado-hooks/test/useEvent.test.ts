import { act, renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { useEvent } from '../src';

describe('useEvent', () => {
  test('should initialize and update the function reference correctly', () => {
    let value = 0;
    const initialFunction = () => {
      value = 1;
    };
    const updatedFunction = () => {
      value = 2;
    };

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

  test('should maintain the same reference across re-renders', () => {
    const initialFunction = () => {};
    const updatedFunction = () => {};

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
