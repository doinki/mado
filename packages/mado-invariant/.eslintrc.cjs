/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['mado/base'],
  ignorePatterns: ['dist'],
  parserOptions: {
    project: require.resolve('./tsconfig.json'),
  },
  root: true,
};
