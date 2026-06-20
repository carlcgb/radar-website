export type Chapter = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  body: string;
  bullets: string[];
};

export const CHAPTERS: Chapter[] = [
  {
    id: "detection",
    number: "01",
    title: "DÉTECTION",
    subtitle:
      "Les nouvelles immatriculations du Québec. Automatiquement. Chaque lundi.",
    body: "À 08h00 chaque lundi, RadarCRM synchronise le Registre des entreprises du Québec et les licences actives de la Régie du bâtiment. Nouvelles entreprises individuelles (IND). Sociétés incorporées (CIE). Les secteurs concurrents sont exclus automatiquement.",
    bullets: [
      "Fenêtre de synchronisation : 7 derniers jours",
      "13 régions du Québec couvertes",
      "Source : Données Québec (RLRQ) — licence ouverte",
    ],
  },
  {
    id: "enrichissement",
    number: "02",
    title: "ENRICHISSEMENT",
    subtitle: "Des numéros de téléphone vérifiés. Pas des approximations.",
    body: "Google Places Text Search résout le numéro de téléphone de chaque nouvelle immatriculation. Un algorithme de similarité (seuil 0,75) rejette les correspondances douteuses. Les fiches sans numéro vérifié n'entrent pas dans la queue.",
    bullets: [
      "Taux d'enrichissement typique : 70–85 %",
      "Seuil de similarité : 0,75",
      "Fiches sans numéro : exclues de la queue",
    ],
  },
  {
    id: "priorisation",
    number: "03",
    title: "PRIORISATION",
    subtitle:
      "Votre prochain appel n'est pas le suivant sur une liste. C'est le meilleur.",
    body: "Chaque prospect reçoit un score entre 0 et 100. Quatre facteurs : ancienneté de l'immatriculation, région, type d'entité, et taux de conversion historique de son secteur. La queue apprend après trois appels par secteur.",
    bullets: [
      "Score visible avec raisons lisibles",
      "Adaptatif à vos résultats réels",
      "Priorité par récence, région et secteur",
    ],
  },
  {
    id: "appel",
    number: "04",
    title: "APPEL",
    subtitle: "L'angle d'approche est là avant de décrocher.",
    body: "Avant chaque appel, votre producteur voit l'angle sectoriel : ce qu'il faut aborder, le meilleur moment pour appeler. Après l'appel, un clic suffit. Les rappels remontent automatiquement dans l'onglet Rappels.",
    bullets: [
      "Playbook sectoriel avant chaque appel",
      "Logger : Pas répondu · Conversation · RDV booké",
      "Rappels triés par date d'échéance",
    ],
  },
  {
    id: "mesure",
    number: "05",
    title: "MESURE",
    subtitle: "Pour la première fois, vous saurez combien d'appels mènent à une vente.",
    body: "Le tableau de bord présente votre entonnoir complet — taux de réponse, conversations, RDV, ventes — par semaine, par région, par secteur. Vos chiffres. Dans votre réalité.",
    bullets: [
      "Entonnoir Appels → RDV → Vente",
      "Performance par secteur et région",
      "Données de votre déploiement, pas des moyennes nationales",
    ],
  },
];

export const REGIONS = [
  "Montréal",
  "Laval",
  "Rive-Sud",
  "Québec ville",
  "Laurentides",
  "Estrie",
  "+ 7 régions",
] as const;
