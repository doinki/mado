# @mado/invariant

## Installation

```bash
npm install @mado/invariant
# or
yarn add @mado/invariant
# or
pnpm add @mado/invariant
```

## Usage

### invariant

#### Basic Usage

```js
import { invariant } from '@mado/invariant';

const creature = { name: 'Dragon', type: 'Fire' };

invariant(creature.name === 'Dragon', 'Creature must be a Dragon');
```

#### Using Callback for Error Message

```js
import { invariant } from '@mado/invariant';

const creature = { name: 'Elf', type: 'Forest' };

invariant(creature.type === 'Water', () => 'Creature must be of type Water');
```

### invariantResponse

#### Basic Usage

```js
import { invariantResponse } from '@mado/invariant';

const creature = { name: 'Phoenix', type: 'Fire' };

invariantResponse(creature.type === 'Fire', 'Creature must be of type Fire');
```

#### Using Callback for Response Message

```js
import { invariantResponse } from '@mado/invariant';

const creature = { name: 'Mermaid', type: 'Water' };

invariantResponse(
  creature.type === 'Land',
  () => `Expected a Land creature, but got a ${creature.type} creature`,
);
```

#### Throwing a Response with Additional Options

```js
import { invariantResponse } from '@mado/invariant';

const creature = { name: 'Cerberus', type: 'Underworld' };

invariantResponse(
  creature.type === 'Sky',
  JSON.stringify({ error: 'Creature must be of type Sky' }),
  { status: 500, headers: { 'Content-Type': 'text/json' } },
);
```
