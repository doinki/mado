import { describe, expect, test } from 'vitest';

import { isObjectLike } from '../src';

describe('isObjectLike', () => {
  test.each([{}, { a: 1 }, Object.create(null), new Date(), []])('should return true', (a) => {
    expect(isObjectLike(a)).toBe(true);
  });

  test.each([null, undefined, false, 0, NaN, '', () => {}, Symbol('')])('should return false', (a) => {
    expect(isObjectLike(a)).toBe(false);
  });
});
