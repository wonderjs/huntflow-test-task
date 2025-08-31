import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  publicDir: 'public',
  base: '/huntflow-test-task/',
  root: './',
  plugins: [
    eslint({
      cache: false,
      fix: true,
    }),
  ],
});
