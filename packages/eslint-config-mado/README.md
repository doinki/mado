# eslint-config-mado

## Installation

```bash
npm install -D eslint-config-mado
# or
yarn add -D eslint-config-mado
# or
pnpm add -D eslint-config-mado
```

## Usage

```js
/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['mado/airbnb-base', 'mado/prettier'],
  parserOptions: {
    project: require.resolve('./tsconfig.json'),
  },
};
```
