import type { ConfigWithExtends } from '@eslint/config-helpers';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export function generateConfig(): ConfigWithExtends {
  return {
    ...eslintPluginPrettierRecommended,
    name: 'eslint-config-blog/prettier',
    rules: {
      ...eslintPluginPrettierRecommended.rules,
      'prettier/prettier': ['error', { printWidth: 120, singleQuote: true }],
    },
  };
}
