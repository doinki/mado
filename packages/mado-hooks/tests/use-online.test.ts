import { renderHook } from '@testing-library/react';

import { useOnline } from '../src';

describe(useOnline, () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('returns true when the browser is online', () => {
    vi.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(true);

    const { result } = renderHook(() => useOnline());

    expect(result.current).toBe(true);
  });

  it('returns false when the browser is offline', () => {
    vi.spyOn(navigator, 'onLine', 'get').mockReturnValue(false);

    const { result } = renderHook(() => useOnline());

    expect(result.current).toBe(false);
  });
});
