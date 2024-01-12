# @mado/remember

Simple "singleton" implementation.

## Installation

```bash
npm install @mado/remember
# or
yarn add @mado/remember
# or
pnpm add @mado/remember
```

## Usage

```js
import { remember } from '@mado/remember';
import { PrismaClient } from '@prisma/client';

export const prisma = remember('prisma', () => new PrismaClient());
```
