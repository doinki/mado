import type { ConfigWithExtends } from '@eslint/config-helpers';
import js from '@eslint/js';

import { allFiles } from './constant';

export function defineConfig({ files = allFiles }: { files?: Array<string | string[]> } = {}): ConfigWithExtends {
  return {
    files,
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
