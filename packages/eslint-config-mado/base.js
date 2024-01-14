require('@rushstack/eslint-patch/modern-module-resolution');

const rules = {
  'import/no-extraneous-dependencies': 'off',
  'import/order': 'off',
  'import/prefer-default-export': 'off',
  'no-underscore-dangle': 'off',
  'no-var': 'off',
  'salt/react-hook-dependencies': 'warn',
  'simple-import-sort/exports': 'warn',
  'simple-import-sort/imports': 'warn',
  'sort-destructure-keys/sort-destructure-keys': 'warn',
  'sort-keys-fix/sort-keys-fix': 'warn',
  'vars-on-top': 'off',
};

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:prettier/recommended',
      ],
      files: '**/*.ts',
      parserOptions: {
        ecmaVersion: 'latest',
      },
      plugins: ['typescript-sort-keys'],
      rules: {
        ...rules,
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        'typescript-sort-keys/interface': 'warn',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    'import',
    'salt',
    'simple-import-sort',
    'sort-destructure-keys',
    'sort-keys-fix',
  ],
  rules,
};
