import { renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { useDebounce } from '../src';

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  test('should debounce multiple function calls into a single one over a specified interval', () => {
    let counter = 0;
    const increment = () => {
      counter += 1;
    };

    const { result } = renderHook((props) => useDebounce(props), {
      initialProps: increment,
    });

    result.current();
    result.current();
    result.current();

    expect(counter).toBe(0);

    vi.advanceTimersByTime(166);

    expect(counter).toBe(1);
  });

  test('should ensure no function is executed if the debounced function is cancelled before the delay', () => {
    let counter = 0;
    const increment = () => {
      counter += 1;
    };

    const { result } = renderHook((props) => useDebounce(props), {
      initialProps: increment,
    });

    result.current();
    result.current();
    result.current();

    result.current.cancel();

    vi.advanceTimersByTime(166);

    expect(counter).toBe(0);
  });

  test('should verify debounced function does not execute after the component unmounts', () => {
    let counter = 0;
    const increment = () => {
      counter += 1;
    };

    const { result, unmount } = renderHook((props) => useDebounce(props), {
      initialProps: increment,
    });

    result.current();
    result.current();
    result.current();

    unmount();

    vi.advanceTimersByTime(166);

    expect(counter).toBe(0);
  });

  test('should check if the debounced function works correctly with component rerender', () => {
    let counter = 0;
    const increment = () => {
      counter += 1;
    };

    const { rerender, result } = renderHook((props) => useDebounce(props), {
      initialProps: increment,
    });

    result.current();
    result.current();

    vi.advanceTimersByTime(166);

    rerender(() => {
      counter = 100;
    });

    result.current();

    vi.advanceTimersByTime(166);

    expect(counter).toBe(100);
  });

  test('should execute the debounced function only once after the specified delay', () => {
    let counter = 0;
    const increment = () => {
      counter += 1;
    };

    const { result } = renderHook((props) => useDebounce(props, 300), {
      initialProps: increment,
    });

    result.current();
    result.current();

    vi.advanceTimersByTime(166);

    expect(counter).toBe(0);

    vi.advanceTimersByTime(300);

    expect(counter).toBe(1);
  });
});
