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
  target: ['chrome67', 'edge79', 'safari14', 'firefox68'],
  treeshake: true,
});
