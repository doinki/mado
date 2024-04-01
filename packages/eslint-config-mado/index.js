require('@rushstack/eslint-patch/modern-module-resolution');

const rules = {
  'import/no-extraneous-dependencies': 'off',
  'import/order': 'off',
  'import/prefer-default-export': 'off',
  'no-underscore-dangle': 'off',
  'no-var': 'off',
  'react-hooks/exhaustive-deps': [
    'error',
    { additionalHooks: 'useIsomorphicLayoutEffect' },
  ],
  'react/function-component-definition': [
    'warn',
    { namedComponents: ['function-declaration'] },
  ],
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-sort-props': [
    'warn',
    { callbacksLast: true, reservedFirst: true, shorthandLast: true },
  ],
  'react/no-array-index-key': 'off',
  'react/no-danger': 'off',
  'react/prop-types': 'off',
  'react/require-default-props': 'off',
  'vars-on-top': 'off',
};

const settings = {
  'jsx-a11y': {
    components: {
      Button: 'button',
      Image: 'img',
      Input: 'input',
      Link: 'a',
      NavLink: 'a',
      TextField: 'input',
    },
  },
};

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/jsx-runtime',
        'plugin:prettier/recommended',
      ],
      files: '**/*.{ts,tsx}',
      parserOptions: {
        ecmaVersion: 'latest',
      },
      plugins: ['typescript-sort-keys'],
      rules: {
        ...rules,
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { fixStyle: 'inline-type-imports' },
        ],
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
        'import/no-duplicates': ['error', { 'prefer-inline': true }],
        'typescript-sort-keys/interface': 'warn',
      },
      settings,
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
    'trim',
  ],
  rules: {
    ...rules,
    'salt/react-hook-dependencies': 'warn',
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'warn',
    'sort-destructure-keys/sort-destructure-keys': 'warn',
    'sort-keys-fix/sort-keys-fix': 'warn',
    'trim/argument': 'warn',
    'trim/class-name': 'warn',
  },
  settings,
};
