import { useRef } from 'react';

import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export function useEvent<T extends unknown[], U>(fn: (...args: T) => U): (...args: T) => U {
  const ref = useRef(fn);

  useIsomorphicLayoutEffect(() => {
    ref.current = fn;
  });

  return useRef((...args: T) => (0, ref.current)(...args)).current;
}
