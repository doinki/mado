import { useLayoutEffect } from 'react';

import { useIsomorphicLayoutEffect } from '../src';

describe(useIsomorphicLayoutEffect, () => {
  it('should be useLayoutEffect', () => {
    expect(useIsomorphicLayoutEffect).toBe(useLayoutEffect);
  });
});
