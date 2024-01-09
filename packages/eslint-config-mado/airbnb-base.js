require('@rushstack/eslint-patch/modern-module-resolution');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['airbnb-base'],
  overrides: [
    {
      extends: ['airbnb-base', 'airbnb-typescript/base'],
      files: '**/*.ts',
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
