import { defineConfig } from 'oxlint';

export default defineConfig({
  env: {
    builtin: true,
    node: true,
  },
  jsPlugins: ['eslint-plugin-perfectionist', 'eslint-plugin-simple-import-sort'],
  options: {
    typeAware: true,
  },
  plugins: [],
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
});
