import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';

import { storageAvailable } from '../src';

let originalLocalStorage: Storage;
let originalSessionStorage: Storage;

describe('storageAvailable', () => {
  beforeAll(() => {
    originalLocalStorage = window.localStorage;
    originalSessionStorage = window.sessionStorage;
  });

  afterEach(() => {
    window.localStorage = originalLocalStorage;
    window.sessionStorage = originalSessionStorage;
  });

  it('should return true if storage is available', () => {
    expect(storageAvailable('localStorage')).toBe(true);
    expect(storageAvailable('sessionStorage')).toBe(true);
  });

  it('should return false if storage is not available', () => {
    // @ts-expect-error
    window.localStorage = undefined;
    // @ts-expect-error
    window.sessionStorage = undefined;

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
    window.localStorage = storage;
    // @ts-expect-error
    window.sessionStorage = storage;

    storage.setItem.mockImplementation(() => {
      throw new DOMException('', 'QuotaExceededError');
    });

    expect(storageAvailable('localStorage')).toBe(true);
    expect(storageAvailable('sessionStorage')).toBe(true);
  });
});
