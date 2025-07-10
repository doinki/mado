import { describe, expect, it } from 'vitest';

import { isPlainObject } from '../src';

describe('isPlainObject', () => {
  it.each([{}, { foo: true }, { valueOf: 0 }, Object.create(null), new Object()])('should return true', (a) => {
    expect(isPlainObject(a)).toBe(true);
  });

  it.each([
    0,
    0n,
    Number.NaN,
    '',
    false,
    Symbol(''),
    null,
    undefined,
    ['foo', 'bar'],
    () => {},
    Error,
    Math,
    JSON,
    Atomics,
    /./,
    Object.create({}),
    (function () {
      // eslint-disable-next-line prefer-rest-params
      return arguments;
    })(),
  ])('should return false', (a) => {
    expect(isPlainObject(a)).toBe(false);
  });
});
