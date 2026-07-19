// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import { defineConfig, fontProviders } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://theriskanalyst.com',
  integrations: [mdx(), sitemap(), react()],

  redirects: {
    '/blog': '/projects',
  },

  fonts: [
      {
          provider: fontProviders.google(),
          name: 'Inter',
          cssVariable: '--font-inter',
          fallbacks: ['system-ui', 'sans-serif'],
          weights: [400, 500, 600, 700, 800],
          styles: ['normal'],
      },
      {
          provider: fontProviders.google(),
          name: 'IBM Plex Mono',
          cssVariable: '--font-plex-mono',
          fallbacks: ['ui-monospace', 'monospace'],
          weights: [400, 500, 600],
          styles: ['normal'],
      },
    ],

  adapter: cloudflare({
      platformProxy: {
          enabled: true
      },

      imageService: "cloudflare"
  }),

  vite: {
    plugins: [tailwindcss()],
  },
});