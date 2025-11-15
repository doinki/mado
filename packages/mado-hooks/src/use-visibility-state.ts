import { useSyncExternalStore } from 'react';

function subscribe(onStoreChange: VoidFunction): VoidFunction {
  document.addEventListener('visibilitychange', onStoreChange, {
    passive: true,
  });

  return () => {
    document.removeEventListener('visibilitychange', onStoreChange);
  };
}

function getSnapshot(): DocumentVisibilityState {
  return document.visibilityState;
}

export function useVisibilityState(
  defaultVisibilityState: DocumentVisibilityState = 'visible',
): DocumentVisibilityState {
  return useSyncExternalStore(subscribe, getSnapshot, () => defaultVisibilityState);
}
