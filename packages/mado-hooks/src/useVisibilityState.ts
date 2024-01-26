// eslint-disable-next-line import/extensions
import { useSyncExternalStore } from 'use-sync-external-store/shim/index.js';

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

/* istanbul ignore next -- @preserve */
function getServerSnapshot(): DocumentVisibilityState {
  return 'visible';
}

export function useVisibilityState(): DocumentVisibilityState {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
