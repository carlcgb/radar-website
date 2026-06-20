import { SECTOR_CARDS } from "@/lib/content/sectors";
import { Container, Section } from "@/components/layout/container";
import { Eyebrow, DataText, SectionHeading } from "@/components/ui/typography";

export function SectorIntelSection() {
  return (
    <Section id="secteurs" className="bg-[var(--bg-surface)]" ariaLabelledBy="sectors-heading">
      <Container>
        <div className="mb-10 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <Eyebrow>Secteurs connus — pas de scripts génériques</Eyebrow>
            <SectionHeading id="sectors-heading" className="mt-4">
              Chaque secteur a sa réalité financière. RadarCRM vous la donne avant de décrocher.
            </SectionHeading>
          </div>
          <div className="rounded-xl border border-[var(--accent-border)] bg-[var(--bg-surface-raised)] p-6 text-center lg:text-left shadow-[var(--shadow-card-accent)]">
            <DataText className="text-4xl font-medium">12 secteurs</DataText>
            <p className="mt-1 text-sm text-[var(--text-muted)]">couverts nativement</p>
          </div>
        </div>

        <div className="relative">
          <div
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [-webkit-overflow-scrolling:touch]"
            role="list"
            aria-label="Secteurs couverts"
          >
            {SECTOR_CARDS.map((s) => (
              <article
                key={s.name}
                role="listitem"
                className="min-w-[280px] max-w-[85vw] shrink-0 snap-start rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface-raised)] p-5 sm:min-w-[280px] shadow-[var(--shadow-card)] transition-all duration-200 hover:border-[var(--accent-border)] hover:shadow-[var(--shadow-card-hover)] cursor-default"
              >
                <p className="text-2xl" aria-hidden="true">
                  {s.icon}
                </p>
                <h3 className="mt-2 font-semibold text-[var(--text-primary)]">{s.name}</h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{s.angle}</p>
                <p className="mt-3 font-mono text-sm text-[var(--text-accent)]">{s.timing}</p>
              </article>
            ))}
          </div>
          <div
            className="pointer-events-none absolute right-0 top-0 hidden h-full w-28 bg-gradient-to-l from-[var(--bg-surface)] to-transparent md:block"
            aria-hidden="true"
          />
        </div>
        <p className="mt-4 text-center text-sm text-[var(--text-muted)]">
          → Glissez pour voir tous les secteurs
        </p>
      </Container>
    </Section>
  );
}
