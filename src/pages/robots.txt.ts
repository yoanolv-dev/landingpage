import type { APIRoute } from 'astro';

/**
 * robots.txt généré au build pour référencer le sitemap
 * avec l'URL canonique configurée (SITE_URL).
 */
export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site).href;

  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${sitemapURL}`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
