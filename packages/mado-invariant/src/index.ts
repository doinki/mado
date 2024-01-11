export class InvariantError extends Error {
  constructor(message: string) {
    super(message);

    this.name = 'InvariantError';

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InvariantError);
    }
  }
}

export function isInvariantError(error: unknown): error is InvariantError {
  return error instanceof InvariantError;
}

/**
 * @throws {InvariantError}
 */
export function invariant(
  condition: unknown,
  message: string | (() => string),
): asserts condition {
  if (!condition) {
    throw new InvariantError(
      typeof message === 'function' ? message() : message,
    );
  }
}

/**
 * @throws {Response}
 */
export function invariantResponse(
  condition: unknown,
  message: string | (() => string),
  responseInit?: ResponseInit,
): asserts condition {
  if (!condition) {
    throw new Response(typeof message === 'function' ? message() : message, {
      status: 400,
      ...responseInit,
    });
  }
}
