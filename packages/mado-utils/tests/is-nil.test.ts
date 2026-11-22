import { isNil } from '../src';

describe(isNil, () => {
  it.for([null, undefined])('should return true', (a) => {
    expect(isNil(a)).toBe(true);
  });

  it.for([0, 0n, Number.NaN, '', false, Symbol(''), {}, [], () => {}])('should return false', (a) => {
    expect(isNil(a)).toBe(false);
  });
});
