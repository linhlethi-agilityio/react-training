import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineWorkspace } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), EnvironmentPlugin('all')],
  publicDir: 'public',

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['test-utils/setup.ts'],
  },
});
