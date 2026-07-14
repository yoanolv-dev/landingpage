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

**Concept : « Nuit cinématique »** (piste validée par le commanditaire,
référence de finition : Apple) — noir profond, halos froids discrets,
la lumière dirige le regard vers ce qui doit convaincre.

- Palette : noir `#07080A`, surfaces `#101114`, verre dépoli
  (`rgba(238,240,243,.05)` + blur), lumière `#EEF0F3`, accent glacier
  `#7FB6D8` (graphique) / `#9FD0E8` (texte, 12:1). Halos réservés au hero
  et aux bandes « projecteur » (CtaBand, footer, « Pour qui ») via le token
  `--aurora`. Tokens dans `src/styles/global.css` (noms historiques
  conservés comme API : `--paper` = fond, `--ink` = premier plan,
  `--vermillon` = accent).
- Typographie : une seule famille, **Instrument Sans variable** (~30 Ko
  auto-hébergés) — titres serrés (-0.045em) avec dégradé lumineux
  (blanc → gris), accent en dégradé glacier ; mono système pour les
  étiquettes.
- Système : hero centré (pilule kicker, H1 lumineux, CTA blanc à contraste
  maximal 18:1, chips de mission en verre), cartes en verre dépoli,
  filets 1 px, rayons 14 px, ombres profondes.
- **Signature interactive : le mode coulisses** — un calque d'annotations
  révèle les décisions de conception à même la page.
- Motion : entrée séquencée du hero et révélations discrètes, gouvernées
  par `prefers-reduced-motion` et `.js` (aucun contenu masqué sans
  JavaScript). CTA collant sur mobile.
- Anti-modèles bannis : dégradés violets, bandeaux défilants, compteurs
  animés, bento grids gratuites, mockups génériques.

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
