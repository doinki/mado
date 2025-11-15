import type { ConfigWithExtends } from '@eslint/config-helpers';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export function defineConfig(): ConfigWithExtends[] {
  return [eslintPluginPrettierRecommended, { rules: { 'prettier/prettier': 'warn' } }];
}
