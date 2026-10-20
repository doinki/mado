import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/*.ts'],
  format: ['cjs', 'esm'],
  target: 'node22',
});
