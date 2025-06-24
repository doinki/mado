import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
// @ts-expect-error
import eslintPluginSortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
// @ts-expect-error
import eslintPluginSortKeysFix from 'eslint-plugin-sort-keys-fix';
// @ts-expect-error
import eslintPluginTypescriptSortKeys from 'eslint-plugin-typescript-sort-keys';
import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint';

export function generateConfig(options?: {
  files?: Array<string | string[]>;
  tsFiles?: Array<string | string[]>;
}): InfiniteDepthConfigWithExtends {
  return [
    {
      files: options?.files || ['**/*.?(c|m)@(j|t)s?(x)'],
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
      files: options?.tsFiles || ['**/*.?(c|m)ts?(x)'],
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
