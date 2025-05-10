import type { ConfigWithExtends } from '@eslint/config-helpers';
import js from '@eslint/js';

export function generateConfig(): ConfigWithExtends {
  return {
    files: ['**/*.?(c|m)@(j|t)sx?'],
    name: 'eslint-config-blog/javascript',
    plugins: {
      js,
    },
    rules: {
      ...js.configs.recommended.rules,
      'object-shorthand': 'warn',
    },
  };
}
