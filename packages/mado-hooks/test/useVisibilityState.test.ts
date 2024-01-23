import { renderHook } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { useVisibilityState } from '../src';

describe('useVisibilityState', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('', () => {
    vi.spyOn(document, 'visibilityState', 'get').mockReturnValueOnce('visible');

    const { result } = renderHook(() => useVisibilityState());

    expect(result.current).toBe('visible');
  });

  test('', () => {
    vi.spyOn(document, 'visibilityState', 'get').mockReturnValue('hidden');

    const { result } = renderHook(() => useVisibilityState());

    expect(result.current).toBe('hidden');
  });
});
