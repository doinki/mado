import type { OxlintConfig } from 'oxlint';

export default {
  jsPlugins: ['eslint-plugin-perfectionist', 'eslint-plugin-simple-import-sort'],
  rules: {
    'perfectionist/sort-heritage-clauses': 'warn',
    'perfectionist/sort-interfaces': 'warn',
    'perfectionist/sort-intersection-types': 'warn',
    'perfectionist/sort-object-types': 'warn',
    'perfectionist/sort-objects': 'warn',
    'perfectionist/sort-switch-case': 'warn',
    'perfectionist/sort-union-types': 'warn',
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'warn',
  },
} satisfies OxlintConfig;
