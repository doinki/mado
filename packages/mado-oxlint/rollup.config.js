import { globSync } from 'node:fs';
import { basename } from 'node:path';

import { defineConfig } from '../../rollup.base.js';

export default defineConfig({
  babel: { presets: ['@babel/preset-typescript'] },
  input: Object.fromEntries(globSync('src/*.ts').map((file) => [basename(file, '.ts'), file])),
  sourcemap: false,
});
