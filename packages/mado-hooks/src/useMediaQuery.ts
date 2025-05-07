import { useMemo } from 'react';
import { useSyncExternalStore } from 'use-sync-external-store/shim';

export function useMediaQuery(query: string, defaultMatches = false): boolean {
  const [subscribe, getSnapshot, getServerSnapshot] = useMemo(() => {
    const matchMedia = typeof window !== 'undefined' && window.matchMedia;

    const getDefaultSnapshot = () => {
      return defaultMatches;
    };

    if (!matchMedia) {
      return [() => () => {}, getDefaultSnapshot, getDefaultSnapshot];
    }

    const mediaQueryList = matchMedia(query);

    return [
      (onStoreChange: VoidFunction) => {
        mediaQueryList.addListener(onStoreChange);

        return () => {
          mediaQueryList.removeListener(onStoreChange);
        };
      },
      () => {
        return mediaQueryList.matches;
      },
      getDefaultSnapshot,
    ];
  }, [defaultMatches, query]);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
