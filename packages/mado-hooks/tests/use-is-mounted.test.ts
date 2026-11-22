import { renderHook } from '@testing-library/react';

import { useIsMounted } from '../src';

describe(useIsMounted, () => {
  it('should indicate that the component is currently mounted', () => {
    const { result } = renderHook(() => useIsMounted());

    expect(result.current).toBe(true);
  });
});
