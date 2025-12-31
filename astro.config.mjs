// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  site: 'https://masseater.github.io',
  output: 'static',
  server: {
    port: 14000,
  },
  build: {
    format: 'directory',
  },
  integrations: [
    expressiveCode(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});