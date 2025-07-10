import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { debounce } from '../src';

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('should delay execution and maintain the correct context and arguments', () => {
    const handler = vi.fn();
    const expectedContext = { foo: 'bar' };

    let actualContext;
    function collectContext(...args: any[]) {
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      actualContext = this;
      handler(...args);
    }

    const debounced = debounce(collectContext);
    debounced.apply(expectedContext, ['a', 'b']);

    expect(handler).toBeCalledTimes(0);

    vi.advanceTimersByTime(166);

    expect(handler).toBeCalledTimes(1);
    expect(handler).toBeCalledWith('a', 'b');
    expect(actualContext).toBe(expectedContext);
  });

  test('should cancel the delayed execution when cancel is called', () => {
    const handler = vi.fn();
    const debounced = debounce(handler);

    debounced();

    expect(handler).toBeCalledTimes(0);

    debounced.cancel();

    vi.advanceTimersByTime(166);

    expect(handler).toBeCalledTimes(0);
  });
});
