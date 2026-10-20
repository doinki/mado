import { afterEach, describe, expect, it, vi } from 'vitest';

import { storageAvailable } from '../src';

describe('storageAvailable', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return true if storage is available', () => {
    expect(storageAvailable('localStorage')).toBe(true);
    expect(storageAvailable('sessionStorage')).toBe(true);
  });

  it('should return false if storage is not available', () => {
    // @ts-expect-error
    vi.spyOn(window, 'localStorage', 'get').mockReturnValue(undefined);
    // @ts-expect-error
    vi.spyOn(window, 'sessionStorage', 'get').mockReturnValue(undefined);

    expect(storageAvailable('localStorage')).toBe(false);
    expect(storageAvailable('sessionStorage')).toBe(false);
  });

  it('should return true for storageAvailable even when storage quota is exceeded', () => {
    const storage = {
      length: 1,
      removeItem: vi.fn(),
      setItem: vi.fn(),
    };

    // @ts-expect-error
    vi.spyOn(window, 'localStorage', 'get').mockReturnValue(storage);
    // @ts-expect-error
    vi.spyOn(window, 'sessionStorage', 'get').mockReturnValue(storage);

    storage.setItem.mockImplementation(() => {
      throw new DOMException('', 'QuotaExceededError');
    });

    expect(storageAvailable('localStorage')).toBe(true);
    expect(storageAvailable('sessionStorage')).toBe(true);
  });
});
