import type { ConfigWithExtends } from '@eslint/config-helpers';
// @ts-expect-error
import eslintPluginImport from 'eslint-plugin-import';

const typeScriptExtensions = ['.ts', '.cts', '.mts', '.tsx', '.ctsx', '.mtsx'];
const javaScriptExtensions = ['.js', '.cjs', '.mjs', '.jsx', '.cjsx', '.mjsx'];
const allExtensions = [...typeScriptExtensions, ...javaScriptExtensions];

export function generateConfig(options?: { project?: string[] | string }): ConfigWithExtends {
  return {
    files: ['**/*.?(c|m)@(j|t)s?(x)'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    name: 'eslint-config-blog/import',
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import/no-cycle': 'error',
      'import/no-unresolved': 'warn',
    },
    settings: {
      'import/extensions': allExtensions,
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
      'import/parsers': {
        '@typescript-eslint/parser': typeScriptExtensions,
      },
      'import/resolver': {
        node: {
          extensions: allExtensions,
        },
        typescript: {
          alwaysTryTypes: true,
          ...options,
        },
      },
    },
  };
}
