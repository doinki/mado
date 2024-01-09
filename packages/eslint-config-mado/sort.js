require('@rushstack/eslint-patch/modern-module-resolution');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  overrides: [
    {
      files: '**/*.{ts,tsx}',
      plugins: ['typescript-sort-keys'],
      rules: { 'typescript-sort-keys/interface': 'warn' },
    },
  ],
  plugins: [
    'import',
    'salt',
    'simple-import-sort',
    'sort-destructure-keys',
    'sort-keys-fix',
  ],
  rules: {
    'import/order': 'off',
    'salt/react-hook-dependencies': 'warn',
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'warn',
    'sort-destructure-keys/sort-destructure-keys': 'warn',
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
};
