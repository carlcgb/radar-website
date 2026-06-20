import { Container, Section } from "@/components/layout/container";
import { Eyebrow, SectionHeading } from "@/components/ui/typography";

const INTEGRATIONS = [
  {
    name: "REQ — Registre des entreprises du Québec",
    desc: "Nouvelles immatriculations IND et CIE. Source : Données Québec (RLRQ).",
  },
  {
    name: "RBQ — Régie du bâtiment du Québec",
    desc: "Licences d'entrepreneur actives — construction, électricité, plomberie.",
  },
  {
    name: "Google Places",
    desc: "Enrichissement téléphonique · Seuil similarité 0,75 · 70–85 % de taux typique.",
  },
];

export function IntegrationsSection() {
  return (
    <Section
      id="integrations"
      className="border-y border-[var(--border-default)] bg-[var(--bg-surface-raised)]"
      ariaLabelledBy="integrations-heading"
    >
      <Container>
        <Eyebrow className="text-center">Sources de données</Eyebrow>
        <SectionHeading id="integrations-heading" className="mx-auto mt-4 max-w-2xl text-center">
          Conçu autour du Registre des entreprises du Québec. Pas adapté après coup.
        </SectionHeading>
        <p className="mx-auto mt-4 max-w-xl text-center font-display text-xl text-[var(--text-primary)]">
          Un outil américain ne sait pas ce qu&apos;est un NEQ. RadarCRM, oui.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {INTEGRATIONS.map((i) => (
            <div
              key={i.name}
              className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:border-[var(--accent-border)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5 cursor-default"
            >
              <h3 className="font-semibold text-[var(--text-primary)]">{i.name}</h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{i.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-[var(--text-muted)]">
          Données issues du Registre des entreprises du Québec et de la Régie du bâtiment du Québec,
          publiées par Données Québec sous licence ouverte (RLRQ).
        </p>
      </Container>
    </Section>
  );
}
