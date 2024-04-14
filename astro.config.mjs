import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import { build } from 'esbuild';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  devToolbar: {
    enabled: false
  },
});