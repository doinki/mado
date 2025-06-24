import js from '@eslint/js';
import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint';

export function generateConfig(options?: { files?: Array<string | string[]> }): InfiniteDepthConfigWithExtends {
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
