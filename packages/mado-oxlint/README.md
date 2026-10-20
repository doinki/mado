# @mado/oxlint

Shared Oxlint configuration with import and code sorting rules.

## Installation

```sh
pnpm add -D oxlint @mado/oxlint
```

## Usage

Create an `oxlint.config.ts` file in your project root:

```ts
import base from '@mado/oxlint';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [base],
});
```

Run Oxlint:

```sh
pnpm exec oxlint .
```

## Plugin Configurations

Import plugin configurations separately and add them to `extends`.
Plugin configurations start with rules disabled, so enable the rules you need:

```ts
import base from '@mado/oxlint';
import react from '@mado/oxlint/react';
import typescript from '@mado/oxlint/typescript';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [base, typescript, react],
  rules: {
    'no-debugger': 'error',
    'react/jsx-key': 'error',
    'typescript/no-explicit-any': 'warn',
  },
});
```
