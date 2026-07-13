import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Le guide — articles de référence sur la création de landing pages.
 * Chaque article vise UNE intention de recherche distincte (voir docs/STRATEGIE.md).
 */
const guide = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/guide' }),
  schema: z.object({
    title: z.string(),
    /** Title SEO si différent du H1. */
    seoTitle: z.string().optional(),
    description: z.string().min(80).max(200),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date(),
    /** Intention de recherche principale ciblée. */
    intent: z.string(),
    /** Question à laquelle l'article répond — affichée dans le hub. */
    question: z.string(),
    /** Ordre d'affichage dans le hub. */
    order: z.number().default(99),
  }),
});

export const collections = { guide };
