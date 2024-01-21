import { useLayoutEffect } from 'react';
import { describe, expect, test } from 'vitest';

import { useIsomorphicLayoutEffect } from '../src';

describe('useIsomorphicLayoutEffect', () => {
  test('should be useLayoutEffect', () => {
    expect(useIsomorphicLayoutEffect).toBe(useLayoutEffect);
  });
});
