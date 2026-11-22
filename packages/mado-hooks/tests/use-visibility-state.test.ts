import { renderHook } from '@testing-library/react';

import { useVisibilityState } from '../src';

describe(useVisibilityState, () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('returns "visible" when the document visibility state is visible', () => {
    vi.spyOn(document, 'visibilityState', 'get').mockReturnValueOnce('visible');

    const { result } = renderHook(() => useVisibilityState());

    expect(result.current).toBe('visible');
  });

  it('returns "hidden" when the document visibility state is hidden', () => {
    vi.spyOn(document, 'visibilityState', 'get').mockReturnValue('hidden');

    const { result } = renderHook(() => useVisibilityState());

    expect(result.current).toBe('hidden');
  });
});
