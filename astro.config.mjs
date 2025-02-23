import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  experimental: {
    responsiveImages: true,
  },
  image: {
    experimentalLayout: 'responsive',
  },
  devToolbar: {
    enabled: false
  },
});