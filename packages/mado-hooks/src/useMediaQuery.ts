import { useMemo } from 'react';
// eslint-disable-next-line import/extensions
import { useSyncExternalStore } from 'use-sync-external-store/shim/index.js';

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
