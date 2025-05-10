import type { ConfigWithExtends } from '@eslint/config-helpers';
import eslintPluginQuery from '@tanstack/eslint-plugin-query';

export function generateConfig(): ConfigWithExtends[] {
  return [
    ...eslintPluginQuery.configs['flat/recommended'],
    {
      rules: {
        '@tanstack/query/infinite-query-property-order': 'off',
      },
    },
  ];
}
