/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#feature-detecting_localstorage MDN}
 */
export function storageAvailable(type: 'localStorage' | 'sessionStorage'): boolean {
  let storage;

  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);

    return true;
  } catch (e) {
    return e instanceof DOMException && e.name === 'QuotaExceededError' && !!storage && storage.length !== 0;
  }
}
