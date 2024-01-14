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

### React

#### TypeScript

```js
/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['mado'],
  parserOptions: {
    project: require.resolve('./tsconfig.json'),
  },
};
```

### Node

#### TypeScript

```js
/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['mado/base'],
  parserOptions: {
    project: require.resolve('./tsconfig.json'),
  },
};
```
