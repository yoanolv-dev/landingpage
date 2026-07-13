# Vermillon — studio de landing pages sur mesure

Site vitrine + écosystème éditorial d'un service premium de création de
landing pages. Conçu comme sa propre démonstration : rapide, indexable,
accessible, sans template.

La stratégie complète (positionnement, SEO, roadmap) est documentée dans
[`docs/STRATEGIE.md`](docs/STRATEGIE.md).

## Stack

- **[Astro 5](https://astro.build)** — génération statique : HTML complet au
  premier octet, zéro JavaScript par défaut (les seuls scripts sont de petits
  îlots vanilla : menu, démonstration, checklist, formulaire, mode coulisses).
- **CSS vanilla** avec design tokens (`src/styles/global.css`) — pas de
  framework CSS. Identité « Chambre noire » : noirs neutres profonds, blanc
  argentique, un seul accent froid, bandes argent pour les zones de
  conversion.
- **Instrument Serif + Instrument Sans** auto-hébergées (3 fichiers,
  ~73 Ko en tout), seules polices chargées.
- **MDX** pour les articles du guide (collection `src/content/guide/`).
- **@astrojs/sitemap** + robots.txt généré + données structurées JSON-LD.

## Démarrer

```bash
npm install
npm run dev        # http://localhost:4321
```

## Vérifier et construire

```bash
npm run check      # typage + diagnostics Astro
npm run build      # build de production dans dist/
npm run preview    # sert dist/ en local
```

L'image Open Graph et l'icône se régénèrent avec `node scripts/generate-og.mjs`
(fichiers commités dans `public/`).

## Déployer

Sortie 100 % statique (`dist/`) : déployable sur n'importe quel hébergement
statique (Netlify, Vercel, Cloudflare Pages, nginx…).

1. Définir `SITE_URL` (URL canonique de production) dans l'environnement de
   build — elle alimente canonicals, sitemap, OG et robots.txt.
2. `npm run build`
3. Servir `dist/` (page 404 : `dist/404.html`).

En-têtes de sécurité recommandés côté hébergeur (exemple) :
`Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'`,
`X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`.

## Configuration — à compléter avant mise en production

### 1. Identité et contenus : `src/config/site.ts`

Fichier unique regroupant : nom de marque, positionnement, email, téléphone,
ville, lien calendrier, réseaux, informations légales (SIRET, statut,
hébergeur…), engagements (délais), fourchettes tarifaires, navigation. Les
valeurs `null` masquent proprement les modules concernés.

### 2. Variables d'environnement : voir `.env.example`

| Variable | Rôle | Si absente |
|---|---|---|
| `SITE_URL` | URL canonique de production | placeholder `votre-domaine.fr` |
| `PUBLIC_FORM_ENDPOINT` | Endpoint POST JSON du formulaire (Formspree, worker…) | repli propre en mailto pré-rempli |
| `PUBLIC_ANALYTICS_HOST` / `PUBLIC_ANALYTICS_DOMAIN` | Mesure sans cookie (API compatible Plausible) | aucun script de mesure chargé |
| `PUBLIC_GSC_VERIFICATION` | Meta de vérification Search Console | balise absente |

### 3. Pages légales

`/mentions-legales/` et `/confidentialite/` contiennent des placeholders
explicites `[À compléter…]` — à renseigner via `site.ts` puis **faire valider
juridiquement**. Elles sont en `noindex` et exclues du sitemap tant que le
projet le juge utile.

### 4. Emplacements prévus pour les preuves réelles

- Études de cas clients : ajouter des pages dans `src/pages/realisations/`
  (modèle : `ce-site.astro`).
- Témoignages : aucun composant de faux témoignages n'existe — en créer un
  seulement avec des témoignages authentiques.
- Identité du fondateur : `site.founder` (nom, bio, réseaux) — les pages
  s'adaptent automatiquement quand les champs sont renseignés.

## Structure

```
src/
├── config/site.ts          ← LE fichier de configuration à éditer
├── content/guide/*.mdx     ← articles du guide (frontmatter typé)
├── content.config.ts       ← schéma des collections
├── data/checklist.ts       ← grille d'audit 40 points (checklist + audit)
├── layouts/Base.astro      ← <head> SEO complet, analytics, révélations
├── lib/jsonld.ts           ← générateurs de données structurées
├── components/             ← Header, Footer, CompareDemo, ContactForm,
│                              BackstageToggle (mode coulisses), Faq…
├── pages/                  ← 17 routes (voir docs/STRATEGIE.md §5)
└── styles/global.css       ← design tokens + système
```

## Principes de contribution

- **Jamais de preuve inventée** : ni faux clients, ni faux chiffres, ni faux
  avis — y compris dans les données structurées.
- 1 URL = 1 intention de recherche (vérifier la carte dans la stratégie avant
  d'ajouter une page).
- Tout contenu essentiel doit être dans le HTML initial (pas de contenu
  injecté côté client).
- Budget performance : pas de dépendance front lourde, images dimensionnées,
  animations respectant `prefers-reduced-motion`.
