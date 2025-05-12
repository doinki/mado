import type { ConfigWithExtends } from '@eslint/config-helpers';
import js from '@eslint/js';

export function generateConfig(options?: { files?: Array<string | string[]> }): ConfigWithExtends {
  return {
    files: options?.files || ['**/*.?(c|m)@(j|t)s?(x)'],
    name: 'mado/javascript',
    plugins: {
      js,
    },
    rules: {
      ...js.configs.recommended.rules,
      'object-shorthand': 'warn',
    },
  };
}
