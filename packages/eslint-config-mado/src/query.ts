import type { ConfigWithExtends } from '@eslint/config-helpers';
import eslintPluginQuery from '@tanstack/eslint-plugin-query';

export function defineConfig(): ConfigWithExtends[] {
  return [
    ...eslintPluginQuery.configs['flat/recommended'],
    {
      rules: {
        '@tanstack/query/infinite-query-property-order': 'off',
        '@tanstack/query/mutation-property-order': 'off',
      },
    },
  ];
}
