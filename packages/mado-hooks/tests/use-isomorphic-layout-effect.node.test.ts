// @vitest-environment node

import { useEffect } from 'react';
import { describe, expect, test } from 'vitest';

import { useIsomorphicLayoutEffect } from '../src';

describe('useIsomorphicLayoutEffect', () => {
  test('should be useEffect', () => {
    expect(useIsomorphicLayoutEffect).toBe(useEffect);
  });
});
