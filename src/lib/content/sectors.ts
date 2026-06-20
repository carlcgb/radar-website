export type SectorCard = {
  icon: string;
  name: string;
  angle: string;
  timing: string;
};

/** Sector playbooks — aligned with product domain knowledge (standalone copy, not imported from REQ). */
export const SECTOR_CARDS: SectorCard[] = [
  {
    icon: "💇",
    name: "Coiffure",
    angle:
      "Revenu variable, travail debout. Abordez la couverture invalidité avant de parler épargne.",
    timing: "11h–13h",
  },
  {
    icon: "🔧",
    name: "Entrepreneur RBQ",
    angle:
      "Aucune couverture CNESST pour le patron — invalidité et accident de travail prioritaires.",
    timing: "Tôt le matin",
  },
  {
    icon: "🚛",
    name: "Transport",
    angle:
      "Sur la route = risque accident. Invalidité + vie. Pas de protection employeur.",
    timing: "9h30–11h",
  },
  {
    icon: "🏢",
    name: "Société incorporée",
    angle: "Salaire fixe — protection clé-homme et REER.",
    timing: "Après 9h",
  },
  {
    icon: "🏗️",
    name: "Construction GC",
    angle: "Métier physique = risque élevé. CNESST ne couvre pas le TA lui-même.",
    timing: "16h30–18h30",
  },
  {
    icon: "🏠",
    name: "Courtier immobilier",
    angle: "Revenu 100 % commission → maladie grave + REER.",
    timing: "10h–12h",
  },
  {
    icon: "🧹",
    name: "Nettoyage",
    angle: "Revenu saisonnier → REER/CELI pour lisser + invalidité.",
    timing: "7h–8h30",
  },
  {
    icon: "⚡",
    name: "Électricité",
    angle: "Travail physique, risque élevé. Invalidité prioritaire.",
    timing: "Après le chantier",
  },
  {
    icon: "🔩",
    name: "Plomberie",
    angle: "Revenu variable, métier physique. Protection invalidité essentielle.",
    timing: "Fin de journée",
  },
  {
    icon: "🪑",
    name: "Ébénisterie",
    angle: "Leurs mains = leur revenu. Invalidité avant épargne.",
    timing: "Entre clients",
  },
  {
    icon: "💆",
    name: "Massothérapie",
    angle: "Revenu variable, travail physique. Invalidité essentielle.",
    timing: "11h45–13h",
  },
  {
    icon: "🎨",
    name: "Tatouage",
    angle: "Artiste indépendant, revenu variable. Invalidité (mains!) + épargne.",
    timing: "13h–16h",
  },
];
