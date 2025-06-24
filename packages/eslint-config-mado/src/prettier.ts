import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint';

export function generateConfig(): InfiniteDepthConfigWithExtends {
  return {
    ...eslintPluginPrettierRecommended,
    name: 'mado/prettier',
    rules: {
      ...eslintPluginPrettierRecommended.rules,
      'prettier/prettier': 'warn',
    },
  };
}
