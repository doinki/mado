import { useEffect, useRef } from 'react';

export function useIsUnmountedRef() {
  const isUnmountedRef = useRef(false);

  useEffect(
    () => () => {
      isUnmountedRef.current = true;
    },
    [],
  );

  return isUnmountedRef;
}
