import { afterEach, describe, expect, test, vi } from 'vitest';

import { storageAvailable } from '../src';

const originalLocalStorage = window.localStorage;
const originalSessionStorage = window.sessionStorage;

describe('storageAvailable', () => {
  afterEach(() => {
    window.localStorage = originalLocalStorage;
    window.sessionStorage = originalSessionStorage;
  });

  test('should return true if storage is available', () => {
    expect(storageAvailable('localStorage')).toBe(true);
    expect(storageAvailable('sessionStorage')).toBe(true);
  });

  test('should return false if storage is not available', () => {
    // @ts-ignore
    window.localStorage = undefined;
    // @ts-ignore
    window.sessionStorage = undefined;

    expect(storageAvailable('localStorage')).toBe(false);
    expect(storageAvailable('sessionStorage')).toBe(false);
  });

  test('should return true for storageAvailable even when storage quota is exceeded', () => {
    const storage = {
      length: 1,
      removeItem: vi.fn(),
      setItem: vi.fn(),
    };

    // @ts-ignore
    window.localStorage = storage;
    // @ts-ignore
    window.sessionStorage = storage;

    storage.setItem.mockImplementation(() => {
      throw new DOMException('NS_ERROR_DOM_QUOTA_REACHED', 'NS_ERROR_DOM_QUOTA_REACHED');
    });
    expect(storageAvailable('localStorage')).toBe(true);
    expect(storageAvailable('sessionStorage')).toBe(true);
  });
});
