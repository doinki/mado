export interface Cancelable {
  cancel: () => void;
}

export type Debounced<T extends (...args: never[]) => unknown> = Cancelable &
  ((this: ThisParameterType<T>, ...args: Parameters<T>) => void);

export function debounce<T extends (...args: never[]) => unknown>(func: T, wait = 166): Debounced<T> {
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

  return debounced;
}
