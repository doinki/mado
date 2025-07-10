import { describe, expect, it } from 'vitest';

import { capitalize } from '../src';

describe('capitalize', () => {
  it('should capitalize the first letter of a lowercase string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('should return an empty string when given an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  it('should not modify a string that already starts with an uppercase letter', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  it('should not modify a string that starts with a number', () => {
    expect(capitalize('123hello')).toBe('123hello');
  });

  it('should not modify a string that starts with a special character', () => {
    expect(capitalize('!hello')).toBe('!hello');
  });

  it('should not modify a string that starts with emoji characters', () => {
    expect(capitalize('🦇 man')).toBe('🦇 man');
  });

  it('should not modify a string that starts with a Korean character', () => {
    expect(capitalize('안녕하세요.')).toBe('안녕하세요.');
  });

  it('should capitalize the first letter if it is a lowercase accented character', () => {
    expect(capitalize('àpple')).toBe('Àpple');
  });
});
