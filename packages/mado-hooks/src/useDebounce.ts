import { type Cancelable, debounce } from '@mado/utils';
import { useEffect, useMemo } from 'react';

import { useEvent } from './useEvent';

export function useDebounce<T extends any[], U>(
  fn: (...args: T) => U,
  wait?: number,
): ((...args: T) => U) & Cancelable {
  const callback = useEvent(fn);

  const debounced = useMemo(() => debounce(callback, wait), [callback, wait]);

  useEffect(() => {
    return () => {
      debounced.cancel();
    };
  }, [debounced]);

  return debounced;
}
