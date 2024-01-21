/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
  },
  extends: ['mado'],
  ignorePatterns: ['dist'],
  parserOptions: {
    project: require.resolve('./tsconfig.json'),
  },
  root: true,
};
