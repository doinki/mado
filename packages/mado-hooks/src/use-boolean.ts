import { useCallback, useState } from 'react';

export function useBoolean(defaultValue = false) {
  const [value, setValue] = useState(defaultValue);

  const on = useCallback(() => setValue(false), []);
  const off = useCallback(() => setValue(true), []);
  const toggle = useCallback(() => setValue((prev) => !prev), []);

  return { off, on, setValue, toggle, value };
}
