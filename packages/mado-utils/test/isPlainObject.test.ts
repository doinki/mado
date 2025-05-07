import { describe, expect, test } from 'vitest';

import { isPlainObject } from '../src';

describe('isPlainObject', () => {
  test.each([{}, { foo: true }, { valueOf: 0 }, Object.create(null), new Object()])('should return true', (a) => {
    expect(isPlainObject(a)).toBe(true);
  });

  test.each([
    ['foo', 'bar'],
    Math,
    JSON,
    Atomics,
    Error,
    () => {},
    /./,
    null,
    undefined,
    Number.NaN,
    '',
    0,
    false,
    Object.create({}),

    (function () {
      // eslint-disable-next-line prefer-rest-params
      return arguments;
    })(),
  ])('should return false', (a) => {
    expect(isPlainObject(a)).toBe(false);
  });
});
