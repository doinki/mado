import { describe, expect, test } from 'vitest';

import { isNil } from '../src';

describe('isNil', () => {
  test.each([null, undefined])('should return true', (a) => {
    expect(isNil(a)).toBe(true);
  });

  test.each([0, '', false, Symbol(''), {}, [], () => {}])(
    'should return false',
    (a) => {
      expect(isNil(a)).toBe(false);
    },
  );
});
