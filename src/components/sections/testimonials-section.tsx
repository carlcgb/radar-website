import { TESTIMONIALS } from "@/lib/content/testimonials";
import { Container, Section } from "@/components/layout/container";
import { Eyebrow, SectionHeading } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  return (
    <Section id="temoignages" className="bg-[var(--bg-base)]" ariaLabelledBy="testimonials-heading">
      <Container>
        <div className="mb-10 text-center">
          <Eyebrow>Ce que dit le terrain</Eyebrow>
          <SectionHeading id="testimonials-heading" className="mt-4">
            Des résultats, pas des promesses.
          </SectionHeading>
          <p className="mt-2 text-xs text-[var(--text-muted)]">
            Témoignages illustratifs — remplacer par des citations pilotes avant diffusion publique.
          </p>
        </div>

        <div
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0"
          role="region"
          aria-label="Témoignages"
          aria-roledescription="carrousel"
        >
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className={cn(
                "relative min-w-[calc(100vw-2rem)] shrink-0 snap-start rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 md:min-w-0 shadow-[var(--shadow-card)] transition-all duration-200 hover:border-[var(--accent-border)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5",
                t.featured &&
                  "border-[var(--border-accent)] shadow-[var(--shadow-card-accent)] md:-translate-y-2 hover:md:-translate-y-2.5",
              )}
            >
              <span
                className="pointer-events-none absolute right-5 top-3 select-none font-serif text-6xl leading-none text-[var(--accent-brand)] opacity-15"
                aria-hidden="true"
              >
                &rdquo;
              </span>
              <p className="text-[var(--text-secondary)] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4 border-t border-[var(--border-muted)] pt-4">
                <p className="font-semibold text-[var(--text-primary)]">— {t.name}</p>
                <p className="text-sm text-[var(--text-muted)]">
                  {t.role} · {t.region}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </Section>
  );
}
