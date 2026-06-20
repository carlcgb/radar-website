"use client";

import { useEffect, useRef } from "react";
import { Container, Section } from "@/components/layout/container";
import { ProspectCard } from "@/components/mocks/prospect-card";
import { CtaButton } from "@/components/ui/cta-button";
import { Eyebrow } from "@/components/ui/typography";
import { trackSectionView } from "@/lib/analytics";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) trackSectionView("hero", "Hero");
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Section
      id="hero"
      className="relative bg-[var(--bg-base)] pb-12 pt-8 md:pb-20 md:pt-12"
      ariaLabelledBy="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Atmospheric top glow */}
        <div className="absolute inset-x-0 top-0 h-64 bg-[var(--glow-hero-top)]" />
        {/* Dot grid — fades to bottom */}
        <div className="absolute inset-0 bg-dot-grid opacity-30 [mask-image:linear-gradient(to_bottom,black_0%,transparent_75%)]" />
        {/* Right accent orb */}
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[var(--accent-brand)] opacity-[0.05] blur-3xl" />
        {/* Left depth orb */}
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[var(--color-navy-600)] opacity-40 blur-3xl" />
      </div>
      <Container>
        <div
          ref={ref}
          className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20"
        >
          <div className="relative z-10 min-w-0 space-y-6">
            <Eyebrow>Intelligence de prospection · Québec · Protection financière</Eyebrow>
            <h1
              id="hero-heading"
              className="text-balance font-sans text-4xl font-bold leading-[1.12] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[2.75rem] lg:leading-[1.1] xl:text-6xl"
            >
              Le REQ, transformé
              <br />
              en rendez-vous.
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              RadarCRM synchronise chaque semaine les nouvelles immatriculations du
              Québec, résout les numéros de téléphone, et livre votre queue
              d&apos;appels priorisée le lundi matin — pour les équipes de protection
              financière qui prospectent par téléphone.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaButton label="Voir une démo →" location="hero" size="xl" fullWidth className="sm:w-auto" />
              <CtaButton
                label="Comment ça marche"
                location="hero-secondary"
                href="#detection"
                variant="secondary"
                size="xl"
                fullWidth
                className="sm:w-auto"
              />
            </div>
            <p className="font-mono text-sm text-[var(--text-muted)]">
              <span className="inline-block size-2 animate-pulse rounded-full bg-[var(--accent-brand)] align-middle" aria-hidden="true" />{" "}
              1 500+ nouvelles immatriculations / semaine au Québec
            </p>
          </div>
          <div className="relative z-0 min-w-0 lg:justify-self-end">
            <ProspectCard className="mx-auto w-full max-w-lg lg:max-w-[min(100%,28rem)]" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
