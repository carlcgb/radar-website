import { Container, Section } from "@/components/layout/container";
import { CtaButton } from "@/components/ui/cta-button";
import { Eyebrow, SectionHeading } from "@/components/ui/typography";

export function FinalCtaSection() {
  return (
    <Section
      id="cta-final"
      className="relative border-t border-[var(--border-accent)] bg-[var(--bg-surface)]"
      ariaLabelledBy="final-cta-heading"
    >
      {/* Multi-layer atmospheric glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_55%,rgba(164,198,57,0.09),transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-border)] to-transparent opacity-60"
        aria-hidden="true"
      />
      <Container className="relative max-w-2xl text-center">
        <Eyebrow>Prêt à commencer</Eyebrow>
        <SectionHeading id="final-cta-heading" className="mt-4 text-balance">
          Lundi prochain, votre queue pourrait être prête.
        </SectionHeading>
        <p className="mx-auto mt-6 max-w-lg text-lg text-[var(--text-secondary)] leading-relaxed">
          Un appel de 20 minutes. On vous montre les nouvelles immatriculations de votre
          région — enrichies, priorisées, avec l&apos;angle d&apos;approche pour chaque secteur.
        </p>
        <div className="mt-10 flex justify-center">
          <CtaButton label="Voir une démo →" location="final-cta" size="xl" />
        </div>
        <p className="mt-6 text-sm text-[var(--text-muted)]">
          Aucune carte de crédit. Aucun engagement. Déploiement en 48 h si vous êtes convaincu.
        </p>
      </Container>
    </Section>
  );
}
