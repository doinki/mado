import type { ConfigWithExtends } from '@eslint/config-helpers';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export function generateConfig(): ConfigWithExtends {
  return {
    ...eslintPluginPrettierRecommended,
    name: 'mado/prettier',
    rules: {
      ...eslintPluginPrettierRecommended.rules,
      'prettier/prettier': 'warn',
    },
  };
}
