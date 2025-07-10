import { describe, expect, test } from 'vitest';

import { capitalize } from '../src';

describe('capitalize', () => {
  test('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('should return an empty string if provided an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('should not modify a string that starts with a number', () => {
    expect(capitalize('123hello')).toBe('123hello');
  });

  test('should not modify a string that starts with an uppercase letter', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  test('should not modify a string that starts with a special character', () => {
    expect(capitalize('!hello')).toBe('!hello');
  });
});
