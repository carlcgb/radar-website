import { CHAPTERS } from "@/lib/content/chapters";
import { Container, Section } from "@/components/layout/container";
import { ChapterMock } from "@/components/mocks/chapter-mocks";
import { CtaButton } from "@/components/ui/cta-button";
import { Eyebrow } from "@/components/ui/typography";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function ChaptersSection() {
  return (
    <>
      <Section id="comment-ca-marche" className="bg-[var(--bg-surface)] py-12">
        <Container className="text-center">
          <Eyebrow>Comment ça marche</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
            De l&apos;immatriculation au rendez-vous.
            <br />
            Cinq étapes. Aucune intervention manuelle.
          </h2>
        </Container>
      </Section>

      {CHAPTERS.map((chapter, index) => {
        const isEven = index % 2 === 1;
        return (
          <Section
            key={chapter.id}
            id={chapter.id}
            className={cn(
              "border-t border-[var(--border-default)]",
              index % 2 === 0 ? "bg-[var(--bg-base)]" : "bg-[var(--bg-surface-raised)]",
            )}
            ariaLabelledBy={`chapter-${chapter.id}-title`}
          >
            <Container>
              <div
                className={cn(
                  "grid items-center gap-10 lg:gap-16",
                  "lg:grid-cols-2",
                  isEven && "lg:[&>*:first-child]:order-2",
                )}
              >
                <div className="space-y-5">
                  <span className="inline-flex h-7 items-center rounded-md border border-[var(--accent-border)] bg-[var(--accent-muted)] px-2.5 font-mono text-xs font-medium text-[var(--text-accent)]">
                    [{chapter.number}]
                  </span>
                  <h2
                    id={`chapter-${chapter.id}-title`}
                    className="font-display text-2xl font-bold text-[var(--text-primary)] md:text-4xl"
                  >
                    {chapter.title}
                  </h2>
                  <p className="text-lg font-semibold text-[var(--text-primary)]">
                    {chapter.subtitle}
                  </p>
                  <p className="max-w-lg text-[var(--text-secondary)] leading-relaxed">
                    {chapter.body}
                  </p>
                  <ul className="space-y-2">
                    {chapter.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-[var(--accent-brand)]" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <ChapterMock chapterId={chapter.id} />
              </div>
            </Container>
          </Section>
        );
      })}

      <div
        id="demo-cta"
        className="border-y border-[var(--accent-border)] bg-[var(--accent-muted)] py-10 md:py-12"
      >
        <Container className="text-center">
          <p className="font-display text-xl font-bold text-[var(--text-primary)] md:text-2xl">
            Votre queue intelligente commence lundi.
          </p>
          <div className="mt-6 flex justify-center">
            <CtaButton label="Voir une démo →" location="mid-cta" size="lg" />
          </div>
        </Container>
      </div>
    </>
  );
}
