require('@rushstack/eslint-patch/modern-module-resolution');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: { browser: true },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react/jsx-runtime'],
  overrides: [
    {
      extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/jsx-runtime',
      ],
      files: '**/*.{ts,tsx}',
      parserOptions: { ecmaVersion: 'latest' },
    },
  ],
  parserOptions: { ecmaVersion: 'latest' },
};
