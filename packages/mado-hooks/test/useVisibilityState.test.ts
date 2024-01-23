import { renderHook } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { useVisibilityState } from '../src';

describe('useVisibilityState', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('returns "visible" when the document visibility state is visible', () => {
    vi.spyOn(document, 'visibilityState', 'get').mockReturnValueOnce('visible');

    const { result } = renderHook(() => useVisibilityState());

    expect(result.current).toBe('visible');
  });

  test('returns "hidden" when the document visibility state is hidden', () => {
    vi.spyOn(document, 'visibilityState', 'get').mockReturnValue('hidden');

    const { result } = renderHook(() => useVisibilityState());

    expect(result.current).toBe('hidden');
  });
});
