// @vitest-environment node

import { useEffect } from 'react';

import { useIsomorphicLayoutEffect } from '../src';

describe(useIsomorphicLayoutEffect, () => {
  it('should be useEffect', () => {
    expect(useIsomorphicLayoutEffect).toBe(useEffect);
  });
});
