export interface Cancelable {
  cancel: () => void;
}

export function debounce<T extends (...args: any[]) => any>(func: T, wait = 166): Cancelable & T {
  let timeout: ReturnType<typeof setTimeout>;

  function debounced(...args: Parameters<T>) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      // @ts-ignore
      func.apply(this, args);
    }, wait);
  }

  debounced.cancel = () => {
    clearTimeout(timeout);
  };

  return debounced as Cancelable & T;
}
