import { Container, Section } from "@/components/layout/container";
import { ProspectCard } from "@/components/mocks/prospect-card";
import { CtaButton } from "@/components/ui/cta-button";
import { Eyebrow, SectionHeading } from "@/components/ui/typography";

const PILLARS = [
  {
    eyebrow: "TEMPS PERDU EN RECHERCHE",
    title: "3 heures par producteur. Chaque semaine.",
    body: "Télécharger le CSV du REQ. Filtrer les doublons. Chercher les numéros sur Google Maps. Ce n'est pas de la prospection — c'est de l'administration non facturée.",
  },
  {
    eyebrow: "AUCUNE PRIORITÉ",
    title: "Qui appeler en premier? Personne ne sait.",
    body: "Vos producteurs appellent dans l'ordre où les fiches apparaissent — pas dans l'ordre où les ventes se font.",
  },
  {
    eyebrow: "DES RAPPELS PERDUS",
    title: "Un post-it. Un email à soi-même. Un rappel oublié.",
    body: "En protection financière, le premier conseiller qui appelle convertit 3 fois plus souvent que le deuxième.",
  },
];

const TIMELINE = [
  {
    time: "08:00",
    title: "Synchronisation automatique.",
    body: "47 nouvelles immatriculations dans votre région. 31 ont un numéro vérifié. Chacune a reçu un score.",
  },
  {
    time: "08:03",
    title: "Premier appel.",
    body: "Élise Tremblay. Salon de coiffure. Score 84. Le numéro est là. Il décroche.",
  },
  {
    time: "08:47",
    title: "RDV booké.",
    body: "Un clic. La fiche bascule dans l'onglet RDV. Le rappel d'hier est le prochain sur la liste.",
  },
];

export function AhaMomentSection() {
  return (
    <Section id="aha" className="bg-[var(--bg-base)]" ariaLabelledBy="aha-heading">
      <Container className="space-y-16">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-4">Le problème</Eyebrow>
          <SectionHeading id="aha-heading" className="text-balance">
            Votre équipe cherche des numéros de téléphone au lieu de vendre.
          </SectionHeading>
          <p className="mt-6 text-[var(--text-secondary)]">
            Chaque semaine, le REQ publie les nouvelles immatriculations du Québec.
            La question n&apos;est pas qui prospecte — c&apos;est qui appelle en premier.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div
              key={p.eyebrow}
              className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:border-[var(--accent-border)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5 cursor-default"
            >
              <Eyebrow className="mb-3 text-[10px]">{p.eyebrow}</Eyebrow>
              <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center font-display text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
          Ce n&apos;est pas un problème de motivation. C&apos;est un problème de système.
        </p>

        <div className="border-t border-[var(--border-default)] pt-16">
          <Eyebrow className="mb-4 text-center">Lundi matin — avec RadarCRM</Eyebrow>
          <SectionHeading className="mx-auto max-w-2xl text-center text-balance">
            Le REQ se synchronise pendant la nuit. À 08h00, votre queue est prête.
          </SectionHeading>

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="space-y-8">
              {TIMELINE.map((step) => (
                <div key={step.time} className="relative pl-8">
                  <span className="absolute left-0 font-mono text-sm font-medium text-[var(--text-accent)]">
                    {step.time}
                  </span>
                  <h3 className="font-semibold text-[var(--text-primary)]">{step.title}</h3>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">{step.body}</p>
                </div>
              ))}
              <p className="font-display text-3xl font-bold italic text-[var(--text-primary)]">
                C&apos;est ça, RadarCRM.
              </p>
              <CtaButton label="Voir une démo →" location="aha" />
            </div>
            <ProspectCard showOutcomes className="w-full" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
