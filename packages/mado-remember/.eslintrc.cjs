/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    'mado/typescript',
    'mado/airbnb-base',
    'mado/sort',
    'mado/prettier',
  ],
  ignorePatterns: ['dist'],
  parserOptions: {
    project: require.resolve('./tsconfig.json'),
  },
  root: true,
};
