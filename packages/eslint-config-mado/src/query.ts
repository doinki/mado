import eslintPluginQuery from '@tanstack/eslint-plugin-query';
import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint';

export function generateConfig(): InfiniteDepthConfigWithExtends {
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
