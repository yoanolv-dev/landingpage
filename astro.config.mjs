// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// URL canonique du site en production.
// À définir via la variable d'environnement SITE_URL avant le build de production.
const SITE_URL = process.env.SITE_URL ?? 'https://www.votre-domaine.fr';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  output: 'static',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes('/merci/') &&
        !page.includes('/mentions-legales/') &&
        !page.includes('/confidentialite/'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
