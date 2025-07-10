import { describe, expect, it } from 'vitest';

import { remember } from '../src';

describe('remember', () => {
  it('should retain the initial value for a key even after the value generator changes', () => {
    const rose = Symbol('rose');

    let returnValue = rose;
    const getValue = () => returnValue;

    remember('what is in a name', getValue);

    returnValue = Symbol('bud');

    expect(remember('what is in a name', getValue)).toBe(rose);
  });
});
