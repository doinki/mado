import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul',
    },
    environment: 'jsdom',
    setupFiles: 'vitest.setup.ts',
  },
});
