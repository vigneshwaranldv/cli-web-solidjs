import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig(({ command }) => ({
  plugins: [solid()],
  build: {
    outDir: 'dist',
  },
  base: command === 'build' ? '/cli-web-solidjs/' : '/',
}));