import type { ConfigWithExtends } from '@eslint/config-helpers';
import turbo from 'eslint-plugin-turbo';

export function defineConfig(): ConfigWithExtends {
  return turbo.configs['flat/recommended'];
}
