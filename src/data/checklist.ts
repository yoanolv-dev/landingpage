/**
 * La grille d'audit en 40 points — même référentiel que l'audit professionnel.
 * Utilisée par la checklist interactive (/checklist-landing-page/)
 * et référencée par la page d'audit (/audit-landing-page/).
 */

export interface ChecklistAxis {
  id: string;
  name: string;
  intro: string;
  items: string[];
}

export const checklist: ChecklistAxis[] = [
  {
    id: 'message',
    name: 'Message & positionnement',
    intro:
      'La question de fond : un visiteur qui découvre la page comprend-il en dix secondes ce qui est vendu, pour qui, et pourquoi c’est crédible ?',
    items: [
      'Le titre nomme un résultat concret pour un client identifiable — il ne survivrait pas tel quel chez un concurrent.',
      'La première ligne (ou presque) indique clairement à qui s’adresse l’offre.',
      'Le sous-titre apporte une information nouvelle — comment, en combien de temps, avec quelle preuve — au lieu de reformuler le titre.',
      'Le vocabulaire est celui des clients ; aucun « écosystème », « solutions innovantes » ou « accompagnement 360 ».',
      'Une seule promesse structure la page ; pas trois messages en concurrence.',
      'Le prix, son ordre de grandeur ou la façon de l’obtenir est traité quelque part — le silence total sur le prix est une friction.',
      'Chaque section répond à une question réelle du visiteur ; aucune section purement décorative.',
      'La page dit ce qui la distingue des alternatives : concurrents, statu quo, faire soi-même.',
    ],
  },
  {
    id: 'structure',
    name: 'Structure & friction',
    intro:
      'La question de fond : combien d’efforts, de doutes et de détours entre l’arrivée sur la page et l’action ?',
    items: [
      'Une seule action principale, répétée aux bons endroits ; les actions secondaires sont visuellement subordonnées.',
      'Le libellé du bouton décrit ce qu’on reçoit (« Recevoir mon estimation ») plutôt qu’une commande vague (« Envoyer », « En savoir plus »).',
      'Une microcopie près de l’action précise la suite : délai de réponse, absence d’engagement, prochaine étape.',
      'Le formulaire ne demande que les champs nécessaires à la première réponse — chaque champ en plus se paie en abandons.',
      'La navigation est réduite : pas de menu complet offrant dix portes de sortie avant le premier argument.',
      'L’information essentielle est lisible sans interaction — pas enfouie dans des carrousels ou des onglets.',
      'La page a été vérifiée sur un vrai téléphone : lisible, complète, actionnable au pouce.',
      'Un lecteur pressé qui ne lit que les titres des sections reconstitue l’argumentaire entier.',
    ],
  },
  {
    id: 'confiance',
    name: 'Confiance & preuve',
    intro:
      'La question de fond : qu’est-ce qui permet à un inconnu de croire ce que la page affirme ?',
    items: [
      'Toutes les preuves affichées sont réelles, précises et vérifiables — aucun chiffre invérifiable, aucun avis fabriqué.',
      'Les témoignages ont un nom et un contexte ; pas de « Marie D. ★★★★★ » anonyme.',
      'Les éléments de réassurance apparaissent au moment du doute : près du prix, près du formulaire.',
      'L’identité du prestataire est limpide : qui est derrière l’offre, où, comment le joindre.',
      'La page montre le travail, le produit ou la méthode — elle ne se contente pas d’adjectifs.',
      'Les engagements sont concrets — délais, garanties, conditions — plutôt que superlatifs.',
      'Mentions légales et politique de confidentialité existent et sont accessibles depuis la page.',
      'Rien ne « sent » le stock : pas d’images génériques de poignées de main, de compteurs suspects, de logos décoratifs.',
    ],
  },
  {
    id: 'technique',
    name: 'Performance & technique',
    intro:
      'La question de fond : la technique sert-elle l’argumentaire, ou le sabote-t-elle avant qu’il commence ?',
    items: [
      'La page s’affiche vite sur un mobile de milieu de gamme en 4G — pas seulement sur votre fibre.',
      'Rien ne saute au chargement : les espaces des images et médias sont réservés.',
      'Les images sont dimensionnées, compressées, servies en formats modernes.',
      'La page est utilisable entièrement au clavier et les contrastes de texte sont suffisants.',
      'Le contenu essentiel est présent dans le HTML — il ne dépend pas d’un JavaScript qui peut échouer.',
      'Le title et la meta description sont uniques, fidèles au contenu, écrits pour un humain.',
      'La page tient sur toutes les tailles d’écran courantes sans casse ni défilement horizontal.',
      'Aucune pop-up n’interrompt la lecture dans les premières secondes.',
    ],
  },
  {
    id: 'mesure',
    name: 'Mesure & suite',
    intro:
      'La question de fond : saurez-vous, dans un mois, ce qui fonctionne et quoi améliorer en premier ?',
    items: [
      'Les clics sur l’action principale sont mesurés.',
      'Les envois de formulaire — réussites et erreurs — sont mesurés.',
      'La provenance du trafic est identifiable : campagnes taguées, référents lisibles.',
      'Pour chaque source payante, la promesse de l’annonce se retrouve mot pour mot en haut de la page.',
      'Un objectif chiffré existe : volume de demandes attendu, taux de conversion visé.',
      'La collecte respecte le RGPD : minimisation des données, consentement quand il est requis.',
      'Quelqu’un lit les chiffres à intervalle régulier — et en tire des décisions.',
      'La page peut être modifiée sous quelques jours : accès, propriété et documentation le permettent.',
    ],
  },
];

export const checklistTotal = checklist.reduce((n, axis) => n + axis.items.length, 0);
