/** Designed testimonials — replace with verbatim pilot quotes before public launch. */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  region: string;
  featured?: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Avant RadarCRM, mes producteurs passaient des heures chaque semaine à chercher des numéros dans Google Maps. Maintenant, la queue est prête le lundi matin. Ils appellent au lieu de chercher.",
    name: "M.B.",
    role: "Directeur régional · Protection financière",
    region: "Rive-Sud",
  },
  {
    quote:
      "J'ai booké un rendez-vous avec une coiffeuse à Brossard que je n'aurais jamais trouvée sans RadarCRM. Elle s'était immatriculée 4 jours avant mon appel.",
    name: "A.T.",
    role: "Producteur principal · Grand Montréal",
    region: "Protection invalidité",
    featured: true,
  },
  {
    quote:
      "Pour la première fois, je peux voir quels secteurs convertissent dans ma région — avec mes propres chiffres, pas une étude nationale.",
    name: "S.L.",
    role: "Principale d'agence · MGA",
    region: "Québec ville",
  },
];
