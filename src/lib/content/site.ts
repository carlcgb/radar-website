export const SITE = {
  name: "RadarCRM",
  domain: "radarcrm.ca",
  url: "https://radarcrm.ca",
  appUrl: "https://app.radarcrm.ca",
  locale: "fr-CA",
  tagline: "Le REQ, transformé en rendez-vous.",
  demoEmail: "demo@radarcrm.ca",
  noreplyEmail: "noreply@radarcrm.ca",
} as const;

/** Outbound email sender for website forms (Resend). */
export const EMAIL_FROM = `${SITE.name} <${SITE.noreplyEmail}>`;

export const NAV_LINKS = [
  { href: "#detection", label: "Comment ça marche" },
  { href: "#secteurs", label: "Secteurs" },
  { href: "#securite", label: "Sécurité" },
] as const;

export const PRIMARY_CTA = "Voir une démo →";
