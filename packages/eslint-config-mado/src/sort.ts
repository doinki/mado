import type { ConfigWithExtends } from '@eslint/config-helpers';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
// @ts-expect-error
import eslintPluginSortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
// @ts-expect-error
import eslintPluginSortKeysFix from 'eslint-plugin-sort-keys-fix';
// @ts-expect-error
import eslintPluginTypescriptSortKeys from 'eslint-plugin-typescript-sort-keys';

import { allFiles, allTsFiles } from './constant';

export function defineConfig({
  files = allFiles,
  tsFiles = allTsFiles,
}: {
  files?: Array<string | string[]>;
  tsFiles?: Array<string | string[]>;
} = {}): ConfigWithExtends[] {
  return [
    {
      files,
      name: 'mado/sort-js',
      plugins: {
        'simple-import-sort': eslintPluginSimpleImportSort,
        'sort-destructure-keys': eslintPluginSortDestructureKeys,
        'sort-keys-fix': eslintPluginSortKeysFix,
      },
      rules: {
        'simple-import-sort/exports': 'warn',
        'simple-import-sort/imports': 'warn',
        'sort-destructure-keys/sort-destructure-keys': 'warn',
        'sort-keys-fix/sort-keys-fix': 'warn',
      },
    },
    {
      files: tsFiles,
      name: 'mado/sort-ts',
      plugins: {
        'typescript-sort-keys': eslintPluginTypescriptSortKeys,
      },
      rules: {
        'typescript-sort-keys/interface': 'warn',
        'typescript-sort-keys/string-enum': 'warn',
      },
    },
  ];
}
