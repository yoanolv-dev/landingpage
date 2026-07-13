# Stratégie — Vermillon, studio de landing pages sur mesure

Document de référence : positionnement, décisions de conception, stratégie SEO
et roadmap. À relire avant toute évolution du site.

---

## 1. Positionnement

**Proposition de valeur** : transformer une offre en un argumentaire digital —
une landing page traitée comme un actif commercial (stratégie, message,
design, code, mesure), pas comme une décoration.

**Angle différenciant** : sur un marché où tous les prestataires promettent
des pages « qui convertissent » et « sur mesure », Vermillon déplace le
terrain vers **la méthode démontrée** :

- le site *montre* son travail (mode coulisses, démonstration avant/après,
  étude de cas de lui-même) au lieu de l'affirmer ;
- la transparence est systématique : fourchettes de prix publiées, grille
  d'audit publiée en entier, absence de preuves fabriquées assumée
  frontalement.

**Perception recherchée** : un interlocuteur direct avec l'exigence d'un
studio, la méthode d'un consultant et la rigueur d'un développeur senior.
Ni agence impersonnelle, ni exécutant low-cost.

**Nom de travail** : « Vermillon » (la couleur du stylo de correction —
cohérent avec le concept d'annotation). Remplaçable en un point :
`src/config/site.ts`.

## 2. Cible

Priorité aux profils pour qui **chaque client vaut cher** ou qui **achètent du
trafic** : consultants et cabinets, SaaS B2B, organismes de formation,
services premium, entreprises préparant un lancement ou une campagne. La page
d'accueil segmente par *situation* (lancement / page qui déçoit / campagne /
image en retard) plutôt que par secteur — plusieurs profils s'y reconnaissent
sans diluer le discours.

## 3. Direction artistique

**Concept : « Signal »** — dans le bruit des pages identiques (la nuit
d'encre), votre page est le signal (le faisceau vermillon).

- Palette : nuit d'encre `#0C0B09`, surfaces `#16130F`, lumière `#F4F1EA`,
  vermillon électrique `#FF4A1F` (graphique/CTA) / `#FF6B3D` (texte accent,
  6.9:1). Bandes claires inversées pour les zones de conversion (CtaBand,
  footer) et la section « Pour qui ». Tokens dans `src/styles/global.css`
  (noms historiques conservés comme API : `--paper` = fond, `--ink` =
  premier plan).
- Typographie : une seule famille, **Bricolage Grotesque variable**
  (auto-hébergée, ~77 Ko), du display monumental (750) au corps de texte ;
  mono système pour les étiquettes techniques façon relevé d'instrument.
- Système : halos réservés aux éléments de conversion (CTA incandescents),
  faisceau lumineux des kickers, cartouche « fiche de mission », astérisque
  signature ✳ (ambiant en rotation lente dans le hero), bandeau défilant,
  barre de progression de lecture, entrée séquencée du hero (CSS pur).
- **Signature interactive : le mode coulisses** — un calque d'annotations
  lumineuses révèle les décisions de conception à même la page.
- Motion : tout est gouverné par `prefers-reduced-motion` et par la classe
  `.js` (aucun contenu masqué sans JavaScript).
- Anti-modèles bannis : dégradés violets, glassmorphism, bento grids,
  mockups génériques, animations de texte à la mode. Le noir n'est pas un
  fond par défaut : il est le concept (le bruit) que le vermillon perce.

## 4. Parcours de conversion

- **Action principale** : « Présenter votre projet » → formulaire de
  qualification (`/contact/`). Microcopie d'engagement partout : « réponse
  sous 24 h ouvrées, avis honnête même si c'est non ».
- **Actions secondaires** : demande d'audit (`/audit-landing-page/`) pour les
  visiteurs en phase de doute ; checklist gratuite pour les non-mûrs
  (nurturing sans email — la confiance d'abord).
- **Échelle d'engagement** : checklist gratuite → audit payant (déduit de la
  refonte) → refonte/création. Chaque niveau de maturité a un chemin.
- Le formulaire ne demande que le nécessaire (nom, email, besoin, projet) ;
  budget et URL facultatifs. Anti-spam : honeypot + délai minimal, sans
  captcha.

## 5. Architecture SEO

### Carte des pages et intentions (1 URL = 1 intention)

| URL | Intention | Requêtes visées |
|---|---|---|
| `/` | Transactionnelle | création landing page, landing page sur mesure, studio/freelance landing page |
| `/methode/` | Commerciale (réassurance) | comment se déroule la création d'une landing page |
| `/tarifs/` | Commerciale | prix landing page, tarif landing page, coût page de vente |
| `/audit-landing-page/` | Transactionnelle | audit landing page, refonte landing page, page qui ne convertit pas |
| `/guide/` | Hub informationnel | guide landing page |
| `/guide/quest-ce-quune-landing-page/` | Informationnelle | qu'est-ce qu'une landing page, définition |
| `/guide/anatomie-landing-page/` | Informationnelle | structure landing page, landing page qui convertit |
| `/guide/erreurs-landing-page/` | Informationnelle | erreurs landing page, landing page ne convertit pas |
| `/guide/template-ou-sur-mesure/` | Commerciale-info | template ou sur mesure, webflow ou développement |
| `/checklist-landing-page/` | Actif d'autorité | checklist landing page, audit landing page gratuit |
| `/realisations/` + `/realisations/ce-site/` | Preuve | — (soutien E-E-A-T) |
| `/a-propos/`, `/contact/` | Support | — |

### Risques de cannibalisation surveillés

- **`/tarifs/` vs futur article « combien coûte une landing page »** : ne PAS
  créer l'article — `/tarifs/` couvre les deux intentions (commerciale et
  informationnelle prix). C'est un choix délibéré.
- **`/audit-landing-page/` vs `/checklist-landing-page/`** : la checklist vise
  l'autodiagnostic gratuit, l'audit la prestation. Maillage croisé explicite
  pour clarifier la relation aux moteurs.
- **`/guide/anatomie-landing-page/` vs `/guide/erreurs-landing-page/`** :
  angles distincts (construire vs corriger) ; ne pas les faire converger lors
  des mises à jour.

### Maillage interne (règles)

- Chaque article du guide pointe vers 1 page commerciale minimum + la
  checklist.
- Les pages commerciales pointent vers le guide pour approfondir (jamais
  l'inverse en masse).
- La checklist est liée depuis : accueil, guide, audit, footer (c'est l'actif
  à faire circuler).
- Pas de page orpheline : vérifier à chaque ajout.

### Données structurées

`ProfessionalService` + `WebSite` (toutes pages), `Service` (accueil, audit),
`FAQPage` (accueil, tarifs — FAQ réellement visibles), `Article` (guide,
étude de cas), `BreadcrumbList` (toutes pages internes). Aucune note, aucun
avis, aucun prix caché dans le balisage. Générateurs : `src/lib/jsonld.ts`.

## 6. Contenus futurs recommandés (par priorité)

1. **Études de cas clients réelles** — le levier n°1 (preuve + longue traîne).
2. `/guide/landing-page-saas/` puis déclinaisons sectorielles (consultants,
   formation) — uniquement avec exemples réels par secteur.
3. `/guide/copywriting-landing-page/` — approfondissement du pilier anatomie.
4. `/guide/taux-de-conversion-landing-page/` — attention aux chiffres : ne
   citer que des sources attribuées ou des données propres.
5. Benchmark annuel commenté de landing pages françaises — actif à liens
   (fort potentiel de citations).
6. Version téléchargeable/imprimable enrichie de la checklist.

## 7. Actifs d'autorité envisagés (non construits)

- Calculateur de rentabilité de landing page (valeur client × trafic × taux).
- Bibliothèque d'exemples français commentés (dimension juridique des
  captures à valider).
- Modèle de brief téléchargeable.

## 8. Mesure post-lancement

Événements en place (via `data-track`) : `cta-header`, `cta-hero`,
`cta-bande`, `cta-footer`, `cta-audit`, `formulaire-envoi`,
`formulaire-succes`, `mode-coulisses`, `demo-avant/apres`, `clic-email`.

À suivre après mise en ligne :

1. Taux de demande de contact (visiteurs → formulaires envoyés).
2. Engagement démonstration + mode coulisses (validation du concept).
3. Search Console : impressions/positions sur les requêtes de la carte
   sémantique ; pages d'entrée organiques.
4. Core Web Vitals terrain (CrUX) après trafic réel.

## 9. Recherches externes restant à réaliser

L'analyse SERP menée pendant la conception (juillet 2026) a confirmé :
concurrents à discours interchangeables, contenus prix superficiels de type
listicle, aucune démonstration de méthode. À compléter après lancement :

- Analyse fine des SERP françaises page par page (volumes, features) avec un
  outil dédié (Search Console + Semrush/Ahrefs).
- Veille sur les 3-4 concurrents directs les mieux positionnés.
- Étude des questions « People Also Ask » pour enrichir les FAQ.
