import { renderHook } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { useOnline } from '../src';

describe('useOnline', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('', () => {
    vi.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(true);

    const { result } = renderHook(() => useOnline());

    expect(result.current).toBe(true);
  });

  test('', () => {
    vi.spyOn(navigator, 'onLine', 'get').mockReturnValue(false);

    const { result } = renderHook(() => useOnline());

    expect(result.current).toBe(false);
  });
});
