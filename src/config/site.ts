/**
 * Configuration centrale du site.
 *
 * Toutes les informations d'identité, de contact et de paramétrage
 * sont regroupées ici. C'est LE fichier à éditer avant la mise en production.
 *
 * Règle : une valeur `null` ou vide signifie « information non disponible ».
 * Les composants masquent alors proprement les modules concernés —
 * aucun placeholder technique n'est jamais affiché aux visiteurs.
 */

export const site = {
  /** Nom de marque de travail. Remplaçable en un seul endroit. */
  brand: 'Vermillon',

  /** Signature courte affichée à côté du logo et dans les métadonnées. */
  tagline: 'Studio de landing pages sur mesure',

  /**
   * Positionnement en une phrase — utilisé dans les métadonnées
   * et les données structurées.
   */
  positioning:
    'Studio indépendant de conception de landing pages sur mesure : stratégie, copywriting, design et développement, pensés pour convertir.',

  /** URL canonique (surchargée par SITE_URL au build). */
  url: import.meta.env.SITE ?? 'https://www.votre-domaine.fr',

  /** Langue et zone. */
  locale: 'fr-FR',
  language: 'fr',

  /**
   * Identité du créateur. Laisser `null` tant que l'information
   * n'est pas fournie : les pages s'adaptent automatiquement.
   */
  founder: {
    name: null as string | null, // ex. « Camille Dupont »
    role: 'Fondateur du studio',
    bioShort: null as string | null,
    linkedin: null as string | null,
    github: null as string | null,
    instagram: null as string | null,
  },

  /** Coordonnées. `null` = module masqué. */
  contact: {
    email: 'contact@votre-domaine.fr', // à remplacer
    phone: null as string | null, // ex. « +33 6 00 00 00 00 »
    city: null as string | null, // ex. « Lyon »
    area: 'France entière, à distance', // zone d'intervention affichée
    calendarUrl: null as string | null, // ex. lien Cal.com / Calendly
  },

  /**
   * Informations légales — à compléter avant mise en production.
   * Affichées uniquement sur les pages légales, avec mention
   * explicite « à compléter » tant qu'elles sont nulles.
   */
  legal: {
    legalName: null as string | null, // raison sociale ou nom
    legalForm: null as string | null, // ex. « EI », « SASU »
    siret: null as string | null,
    address: null as string | null,
    host: null as string | null, // ex. « Vercel Inc., Walnut, CA (USA) »
    publicationDirector: null as string | null,
  },

  /**
   * Engagements de service affichés sur le site.
   * Ce sont des promesses réelles du prestataire, pas des statistiques :
   * les ajuster si elles ne peuvent pas être tenues.
   */
  commitments: {
    responseTime: 'réponse sous 24 h ouvrées',
    projectLeadTime: 'de 3 à 5 semaines selon le périmètre',
    auditLeadTime: 'sous 5 jours ouvrés',
  },

  /**
   * Fourchettes tarifaires indicatives affichées sur /tarifs/.
   * `null` = la page affiche la pédagogie de prix sans fourchette chiffrée.
   */
  pricing: {
    creation: { from: 3200, to: 6500 } as { from: number; to: number } | null,
    refonte: { from: 2400, to: 5000 } as { from: number; to: number } | null,
    audit: { from: 590, to: 590 } as { from: number; to: number } | null,
  },

  /** Navigation principale. */
  nav: [
    { label: 'Méthode', href: '/methode/' },
    { label: 'Réalisations', href: '/realisations/' },
    { label: 'Tarifs', href: '/tarifs/' },
    { label: 'Guide', href: '/guide/' },
  ],

  /** Action principale du site. */
  cta: {
    label: 'Présenter votre projet',
    href: '/contact/',
  },
} as const;

/** Adresse email affichable (anti-scrape léger côté rendu). */
export const emailParts = site.contact.email.split('@') as [string, string];

/** Formate une fourchette de prix en français. */
export function formatPriceRange(range: { from: number; to: number } | null): string | null {
  if (!range) return null;
  const fmt = (n: number) => n.toLocaleString('fr-FR').replace(/ /g, ' ');
  if (range.from === range.to) return `${fmt(range.from)} € HT`;
  return `${fmt(range.from)} € à ${fmt(range.to)} € HT`;
}
