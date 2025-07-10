import { describe, expect, it } from 'vitest';

import { isObjectLike } from '../src';

describe('isObjectLike', () => {
  it.each([{}, { a: 1 }, Object.create(null), new Date(), []])('should return true', (a) => {
    expect(isObjectLike(a)).toBe(true);
  });

  it.each([0, 0n, Number.NaN, '', false, Symbol(''), null, undefined, () => {}])('should return false', (a) => {
    expect(isObjectLike(a)).toBe(false);
  });
});
