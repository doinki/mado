import { invariant, InvariantError, invariantResponse, isInvariantError } from '../src/invariant';

function getThrownResponse(run: () => void): Response {
  try {
    run();
  } catch (error) {
    if (error instanceof Response) return error;
    throw error;
  }

  throw new Error('Expected a Response to be thrown');
}

describe(InvariantError, () => {
  it('should be an instance of Error', () => {
    expect(new InvariantError('')).toBeInstanceOf(Error);
  });

  it('should be an instance of InvariantError', () => {
    expect(new InvariantError('')).toBeInstanceOf(InvariantError);
  });

  it('should have a name', () => {
    expect(new InvariantError('')).toHaveProperty('name', 'InvariantError');
  });

  it('should have a message', () => {
    expect(new InvariantError('')).toHaveProperty('message', '');
  });

  it('should have a stack trace', () => {
    expect(new InvariantError('')).toHaveProperty('stack');
  });
});

describe(isInvariantError, () => {
  it('should return true if error is an InvariantError', () => {
    expect(isInvariantError(new InvariantError(''))).toBe(true);
  });

  it.for([new Error('ordinary error'), 0, false, '', Symbol(''), null, undefined, {}, () => {}])(
    'should return false if error is not an InvariantError',
    (a) => {
      expect(isInvariantError(a)).toBe(false);
    },
  );
});

describe(invariant, () => {
  it('should not throw if condition is truthy', () => {
    expect(() => {
      invariant(true, '');
    }).not.toThrow();
  });

  it('should throw if condition is falsy', () => {
    expect(() => {
      invariant(false, '');
    }).toThrow(InvariantError);
  });

  it('should throw with the given message', () => {
    expect(() => {
      invariant(false, 'message');
    }).toThrow('message');
  });

  it('should throw with the given message function', () => {
    expect(() => {
      invariant(false, () => 'message');
    }).toThrow('message');
  });
});

describe(invariantResponse, () => {
  it('should not throw if condition is truthy', () => {
    expect(() => {
      invariantResponse(true, '');
    }).not.toThrow();
  });

  it('should throw if condition is falsy', () => {
    expect(() => {
      invariantResponse(false, '');
    }).toThrow(Response);
  });

  it('should throw with the given message', async () => {
    const response = getThrownResponse(() => invariantResponse(false, 'message'));

    expect(response.ok).toBe(false);
    expect(response.status).toBe(400);
    await expect(response.text()).resolves.toBe('message');
  });

  it('should throw with the given message function', async () => {
    const response = getThrownResponse(() => invariantResponse(false, () => 'message'));

    expect(response.ok).toBe(false);
    expect(response.status).toBe(400);
    await expect(response.text()).resolves.toBe('message');
  });

  it('should throw with the given responseInit', () => {
    const response = getThrownResponse(() => invariantResponse(false, '', { status: 500 }));

    expect(response.ok).toBe(false);
    expect(response.status).toBe(500);
  });
});
