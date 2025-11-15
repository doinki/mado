import { useEffect, useRef } from 'react';

export function useIsUnmountedRef() {
  const isUnmountedRef = useRef(false);

  useEffect(() => {
    return () => {
      isUnmountedRef.current = true;
    };
  }, []);

  return isUnmountedRef;
}
