import type { Debounced } from '@mado/utils';
import { debounce } from '@mado/utils';
import { useEffect, useMemo } from 'react';

import { useEvent } from './use-event';

export function useDebounce<T extends unknown[], U>(
  fn: (...args: T) => U,
  wait?: number,
): Debounced<(...args: T) => U> {
  const callback = useEvent(fn);

  const debounced = useMemo(() => debounce(callback, wait), [callback, wait]);

  useEffect(() => {
    return () => {
      debounced.cancel();
    };
  }, [debounced]);

  return debounced;
}
