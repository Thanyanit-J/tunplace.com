import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://tunplace.com',
  base: '/tunplace.com',
  integrations: [svelte()]
});