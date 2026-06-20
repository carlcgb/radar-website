import { Container, Section } from "@/components/layout/container";
import { CtaButton } from "@/components/ui/cta-button";
import { SectionHeading } from "@/components/ui/typography";
import { Lock, Scale, Server, Zap } from "lucide-react";

const CELLS = [
  {
    icon: Scale,
    title: "Conformité Loi 25",
    body: "REQ et RBQ : données gouvernementales ouvertes. Vous gérez la DNCL et la vie privée comme avec tout appel sortant.",
  },
  {
    icon: Server,
    title: "Instance privée",
    body: "Vos données ne sont jamais partagées. Déploiement dédié à votre équipe. Journal d'audit complet.",
  },
  {
    icon: Lock,
    title: "Données REQ non revendues",
    body: "Nous ne revendons pas vos données et ne les utilisons pas pour entraîner des modèles tiers.",
  },
  {
    icon: Zap,
    title: "Déploiement 48 h",
    body: "Un appel de configuration. Vos connecteurs REQ et Google Places activés. Lundi prochain, votre première queue enrichie.",
  },
];

export function TrustSecuritySection() {
  return (
    <Section id="securite" className="bg-[var(--bg-base)]" ariaLabelledBy="trust-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[40%_60%] lg:items-start">
          <div>
            <SectionHeading id="trust-heading">
              Conçu pour le contexte réglementaire québécois.
            </SectionHeading>
            <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
              Instance privée. Hébergement configurable. Données chiffrées au repos.
              RadarCRM est pensé pour les équipes de protection financière qui doivent
              justifier leurs outils auprès de leur MGA.
            </p>
            <div className="mt-6">
              <CtaButton
                label="Parler à l'équipe →"
                location="trust"
                variant="secondary"
                size="lg"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {CELLS.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-card)] transition-all duration-200 hover:border-[var(--accent-border)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5 cursor-default"
              >
                <div className="flex size-9 items-center justify-center rounded-lg bg-[var(--accent-subtle)] ring-1 ring-[var(--accent-border)]">
                  <c.icon className="size-4 text-[var(--text-accent)]" aria-hidden="true" />
                </div>
                <h3 className="mt-3 font-semibold text-[var(--text-primary)]">{c.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
