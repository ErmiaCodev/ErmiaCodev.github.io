import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs(), sitemap()],
  site: 'https://ErmiaCodev.github.io',
  output: 'static',
  outDir: 'docs',
  build: {
    assets: 'astro'
  }
});