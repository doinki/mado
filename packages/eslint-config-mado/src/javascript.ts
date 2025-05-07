import type { ConfigWithExtends } from '@eslint/config-helpers';
import js from '@eslint/js';

export function generateConfig(): ConfigWithExtends {
  return {
    files: ['**/*.?(c|m)js?(x)'],
    name: 'eslint-config-blog/js',
    plugins: {
      js,
    },
    rules: js.configs.recommended.rules,
  };
}
