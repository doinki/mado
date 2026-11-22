import { debounce } from '../src';

describe(debounce, () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should delay execution and maintain the correct context and arguments', () => {
    const expectedContext = { foo: 'bar' };
    const handler = vi.fn(function (this: typeof expectedContext, first: string, second: string) {
      return this.foo + first + second;
    });

    const debounced = debounce(handler);
    expectTypeOf(debounced).returns.toBeVoid();
    debounced.apply(expectedContext, ['a', 'b']);

    expect(handler).toHaveBeenCalledTimes(0);

    vi.advanceTimersByTime(166);

    expect(handler).toHaveBeenCalledExactlyOnceWith('a', 'b');
    expect(handler.mock.contexts[0]).toBe(expectedContext);
  });

  it('should cancel the delayed execution when cancel is called', () => {
    const handler = vi.fn();
    const debounced = debounce(handler);

    debounced();

    expect(handler).toHaveBeenCalledTimes(0);

    debounced.cancel();

    vi.advanceTimersByTime(166);

    expect(handler).toHaveBeenCalledTimes(0);
  });
});
