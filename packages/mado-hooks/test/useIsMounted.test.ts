import { renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { useIsMounted } from '../src';

describe('useIsMounted', () => {
  test('should indicate that the component is currently mounted', () => {
    const { result } = renderHook(() => useIsMounted());

    expect(result.current).toBe(true);
  });
});
