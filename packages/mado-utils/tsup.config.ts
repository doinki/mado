import { extension } from 'esbuild-plugin-extension';
import { defineConfig } from 'tsup';

export default defineConfig({
  bundle: true,
  clean: true,
  dts: true,
  entry: ['src/**/*.ts'],
  env: { NODE_ENV: 'production' },
  esbuildPlugins: [extension()],
  format: ['cjs', 'esm'],
  sourcemap: true,
  target: ['chrome80', 'edge80', 'safari13.1', 'firefox74', 'opera67'],
  treeshake: true,
});
