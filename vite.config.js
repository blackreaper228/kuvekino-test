import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import simpleHtmlPlugin from 'vite-plugin-simple-html';

export default defineConfig({
  base: '/kuvekino-test/',
  plugins: [tailwindcss()],
});
