/**
 * Générateurs de données structurées (JSON-LD).
 * Règle absolue : ne décrire que des informations visibles et exactes.
 */
import { site } from '@/config/site';

type JsonLd = Record<string, unknown>;

const url = (path: string) => new URL(path, site.url).href;

/** Identité de l'entité — référencée par @id sur toutes les pages. */
export function organization(): JsonLd {
  const org: JsonLd = {
    '@type': 'ProfessionalService',
    '@id': url('/#organisation'),
    name: site.brand,
    description: site.positioning,
    url: url('/'),
    email: site.contact.email,
    areaServed: 'FR',
    knowsAbout: [
      'Landing page',
      'Conversion',
      'Copywriting',
      'Design web',
      'Référencement naturel',
    ],
  };
  if (site.founder.name) {
    org.founder = {
      '@type': 'Person',
      name: site.founder.name,
      jobTitle: site.founder.role,
    };
  }
  if (site.contact.city) {
    org.address = {
      '@type': 'PostalAddress',
      addressLocality: site.contact.city,
      addressCountry: 'FR',
    };
  }
  return org;
}

export function webSite(): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': url('/#site'),
    name: site.brand,
    url: url('/'),
    inLanguage: site.locale,
    publisher: { '@id': url('/#organisation') },
  };
}

export function webPage(opts: {
  path: string;
  title: string;
  description: string;
  type?: string;
  datePublished?: string;
  dateModified?: string;
}): JsonLd {
  const page: JsonLd = {
    '@type': opts.type ?? 'WebPage',
    '@id': url(opts.path) + '#page',
    url: url(opts.path),
    name: opts.title,
    description: opts.description,
    inLanguage: site.locale,
    isPartOf: { '@id': url('/#site') },
  };
  if (opts.datePublished) page.datePublished = opts.datePublished;
  if (opts.dateModified) page.dateModified = opts.dateModified;
  return page;
}

export function service(opts: {
  path: string;
  name: string;
  description: string;
}): JsonLd {
  return {
    '@type': 'Service',
    '@id': url(opts.path) + '#service',
    name: opts.name,
    description: opts.description,
    provider: { '@id': url('/#organisation') },
    areaServed: 'FR',
    serviceType: 'Création de landing page',
  };
}

export function breadcrumbs(items: { name: string; path: string }[]): JsonLd {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: url(item.path),
    })),
  };
}

export function article(opts: {
  path: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
}): JsonLd {
  const a: JsonLd = {
    '@type': 'Article',
    '@id': url(opts.path) + '#article',
    headline: opts.title,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    inLanguage: site.locale,
    mainEntityOfPage: url(opts.path),
    publisher: { '@id': url('/#organisation') },
    author: site.founder.name
      ? { '@type': 'Person', name: site.founder.name }
      : { '@id': url('/#organisation') },
  };
  return a;
}

export function faqPage(questions: { q: string; a: string }[]): JsonLd {
  return {
    '@type': 'FAQPage',
    mainEntity: questions.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

/** Assemble le graphe final injecté dans la page. */
export function graph(...nodes: JsonLd[]): string {
  return JSON.stringify(
    { '@context': 'https://schema.org', '@graph': [organization(), webSite(), ...nodes] },
    null,
    0
  );
}
