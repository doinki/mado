import { describe, expect, test } from 'vitest';

import { invariant, InvariantError, invariantResponse, isInvariantError } from '../src';

describe('InvariantError', () => {
  test('should be an instance of Error', () => {
    expect(new InvariantError('')).toBeInstanceOf(Error);
  });

  test('should be an instance of InvariantError', () => {
    expect(new InvariantError('')).toBeInstanceOf(InvariantError);
  });

  test('should have a name', () => {
    expect(new InvariantError('')).toHaveProperty('name', 'InvariantError');
  });

  test('should have a message', () => {
    expect(new InvariantError('')).toHaveProperty('message', '');
  });

  test('should have a stack trace', () => {
    expect(new InvariantError('')).toHaveProperty('stack');
  });
});

describe('isInvariantError', () => {
  test('should return true if error is an InvariantError', () => {
    expect(isInvariantError(new InvariantError(''))).toBe(true);
  });

  test.each([new Error(), 0, false, '', Symbol(''), null, undefined, {}, () => {}])(
    'should return false if error is not an InvariantError',
    (a) => {
      expect(isInvariantError(a)).toBe(false);
    },
  );
});

describe('invariant', () => {
  test('should not throw if condition is truthy', () => {
    expect(() => {
      invariant(true, '');
    }).not.toThrow();
  });

  test('should throw if condition is falsy', () => {
    expect(() => {
      invariant(false, '');
    }).toThrow(InvariantError);
  });

  test('should throw with the given message', () => {
    expect(() => {
      invariant(false, 'message');
    }).toThrow('message');
  });

  test('should throw with the given message function', () => {
    expect(() => {
      invariant(false, () => 'message');
    }).toThrow('message');
  });
});

describe('invariantResponse', () => {
  test('should not throw if condition is truthy', () => {
    expect(() => {
      invariantResponse(true, '');
    }).not.toThrow();
  });

  test('should throw if condition is falsy', () => {
    expect(() => {
      invariantResponse(false, '');
    }).toThrow(Response);
  });

  test('should throw with the given message', async () => {
    try {
      invariantResponse(false, 'message');

      expect.fail('should not be called');
    } catch (error) {
      invariant(error instanceof Response, 'should be a Response');

      expect(error.ok).toBe(false);
      expect(error.status).toBe(400);
      expect(await error.text()).toBe('message');
    }
  });

  test('should throw with the given message function', async () => {
    try {
      invariantResponse(false, () => 'message');

      expect.fail('should not be called');
    } catch (error) {
      invariant(error instanceof Response, 'should be a Response');

      expect(error.ok).toBe(false);
      expect(error.status).toBe(400);
      expect(await error.text()).toBe('message');
    }
  });

  test('should throw with the given responseInit', () => {
    try {
      invariantResponse(false, '', { status: 500 });

      expect.fail('should not be called');
    } catch (error) {
      invariant(error instanceof Response, 'should be a Response');

      expect(error.ok).toBe(false);
      expect(error.status).toBe(500);
    }
  });
});
