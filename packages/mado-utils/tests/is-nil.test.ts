import { describe, expect, it } from 'vitest';

import { isNil } from '../src';

describe('isNil', () => {
  it.each([null, undefined])('should return true', (a) => {
    expect(isNil(a)).toBe(true);
  });

  it.each([0, 0n, Number.NaN, '', false, Symbol(''), {}, [], () => {}])('should return false', (a) => {
    expect(isNil(a)).toBe(false);
  });
});
