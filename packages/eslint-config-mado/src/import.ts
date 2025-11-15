import type { ConfigWithExtends } from '@eslint/config-helpers';
import eslintPluginImport from 'eslint-plugin-import';

import { allFiles } from './constant';

const typeScriptExtensions = ['.ts', '.cts', '.mts', '.tsx', '.ctsx', '.mtsx'];
const javaScriptExtensions = ['.js', '.cjs', '.mjs', '.jsx', '.cjsx', '.mjsx'];
const allExtensions = [...typeScriptExtensions, ...javaScriptExtensions];

export function defineConfig({
  files = allFiles,
  project,
}: {
  files?: Array<string | string[]>;
  project?: string[] | string;
} = {}): ConfigWithExtends {
  return {
    files,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    name: 'mado/import',
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import/export': 'warn',
      'import/first': 'warn',
      'import/newline-after-import': 'warn',
      'import/no-cycle': 'error',
      'import/no-duplicates': 'warn',
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
          project,
        },
      },
    },
  };
}
