import { useSyncExternalStore } from 'react';

function subscribe(onStoreChange: VoidFunction): VoidFunction {
  window.addEventListener('online', onStoreChange, {
    passive: true,
  });
  window.addEventListener('offline', onStoreChange, {
    passive: true,
  });

  return () => {
    window.removeEventListener('online', onStoreChange);
    window.removeEventListener('offline', onStoreChange);
  };
}

function getSnapshot(): boolean {
  return navigator.onLine;
}

/* istanbul ignore next -- @preserve */
function getServerSnapshot(): boolean {
  return true;
}

export function useOnline(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
