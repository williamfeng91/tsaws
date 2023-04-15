import { defineConfig } from 'vitest/config';

export default defineConfig({
  root: './',
  clearScreen: false,
  test: {
    environment: 'node',
    globals: true,
    mockReset: true,
    snapshotFormat: {
      printBasicPrototype: true,
    },
    coverage: {
      provider: 'istanbul',
      include: ['src/**/*.{ts,js}'],
    },
  },
});
