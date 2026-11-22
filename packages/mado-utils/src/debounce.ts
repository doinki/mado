export interface Cancelable {
  cancel: () => void;
}

export function debounce<T extends (...args: any[]) => any>(func: T, wait = 166): Cancelable & T {
  let timeout: ReturnType<typeof setTimeout>;

  function debounced(this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  }

  debounced.cancel = () => {
    clearTimeout(timeout);
  };

  return debounced as Cancelable & T;
}
