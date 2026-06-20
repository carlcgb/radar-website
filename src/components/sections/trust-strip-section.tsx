import { Container, Section } from "@/components/layout/container";
import { DataText } from "@/components/ui/typography";

const SOURCES = [
  { abbr: "REQ", label: "Registre des entreprises du Québec" },
  { abbr: "RBQ", label: "Régie du bâtiment du Québec" },
  { abbr: "DQ", label: "Données Québec · Licence ouverte RLRQ" },
];

export function TrustStripSection() {
  return (
    <Section
      id="confiance"
      className="border-y border-[var(--border-default)] bg-[var(--bg-surface)] py-8 md:py-10"
      ariaLabelledBy="trust-heading"
    >
      <Container>
        <p id="trust-heading" className="sr-only">
          Sources de données officielles
        </p>
        <div className="flex flex-col items-center gap-6 text-center md:gap-8">
          <p className="text-sm font-medium text-[var(--text-muted)]">
            Données officielles :
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {SOURCES.map((s) => (
              <div
                key={s.abbr}
                className="rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface-raised)] px-4 py-2"
              >
                <span className="font-mono text-sm font-medium text-[var(--text-accent)]">
                  {s.abbr}
                </span>
                <span className="ml-2 hidden text-xs text-[var(--text-secondary)] sm:inline">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          <p className="max-w-2xl text-sm text-[var(--text-secondary)]">
            Données gouvernementales ouvertes — pas une base achetée, pas un scrape.
          </p>
          <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ["1 500+", "Nouvelles immatriculations / semaine"],
              ["70–85 %", "Fiches enrichies avec numéro vérifié"],
              ["48 h", "Délai de déploiement"],
            ].map(([val, label]) => (
              <div key={val} className="text-center">
                <DataText className="text-2xl font-medium md:text-3xl">{val}</DataText>
                <p className="mt-1 text-xs text-[var(--text-muted)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
