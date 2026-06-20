"use client";

import { Container, Section } from "@/components/layout/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeading } from "@/components/ui/typography";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const BEFORE = [
  "Téléchargement CSV du REQ (2h / semaine)",
  "Recherche des numéros sur Google Maps (3h / semaine)",
  "Liste aléatoire dans Excel",
  "Rappels sur post-its ou oubliés",
  "Aucune donnée sur les secteurs qui convertissent",
  "Estimation du temps perdu en fin de semaine",
];

const AFTER = [
  "Sync automatique lundi 08h00",
  "Google Places enrichit automatiquement chaque fiche",
  "Queue triée par score avec raisons visibles",
  "Onglet Rappels — triés par date, jamais oubliés",
  "Tableau de bord : secteurs × régions × semaines",
  "15 appels/jour. Objectif visible. Série mesurée.",
];

function ComparisonColumn({
  variant,
  title,
  items,
  stat,
}: {
  variant: "before" | "after";
  title: string;
  items: string[];
  stat: string;
}) {
  const isAfter = variant === "after";
  return (
    <div
      className={cn(
        "rounded-2xl border p-6 md:p-8",
        isAfter
          ? "border-[var(--border-accent)] bg-[var(--bg-surface)] shadow-[var(--shadow-card-accent)] md:-translate-y-1"
          : "border-[var(--border-default)] bg-[var(--bg-surface-raised)] opacity-90",
      )}
    >
      <div className="mb-6 flex items-center gap-2">
        {isAfter ? (
          <Check className="size-5 text-[var(--color-success-500)]" aria-hidden="true" />
        ) : (
          <X className="size-5 text-[var(--color-danger-500)]" aria-hidden="true" />
        )}
        <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
            {isAfter ? (
              <Check className="mt-0.5 size-4 shrink-0 text-[var(--accent-brand)]" aria-hidden="true" />
            ) : (
              <X className="mt-0.5 size-4 shrink-0 text-[var(--color-danger-500)]" aria-hidden="true" />
            )}
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-6 font-mono text-sm text-[var(--text-muted)]">{stat}</p>
    </div>
  );
}

export function BeforeAfterSection() {
  return (
    <Section id="avant-apres" className="bg-[var(--bg-surface-raised)]" ariaLabelledBy="ba-heading">
      <Container>
        <SectionHeading id="ba-heading" className="mb-10 text-center">
          Excel + REQ manuel vs RadarCRM
        </SectionHeading>

        <div className="hidden gap-6 md:grid md:grid-cols-2">
          <ComparisonColumn variant="before" title="Sans RadarCRM" items={BEFORE} stat="≈ 3h recherche / sem." />
          <ComparisonColumn variant="after" title="Avec RadarCRM" items={AFTER} stat="0 minute de recherche" />
        </div>

        <div className="md:hidden">
          <Tabs defaultValue="avant">
            <TabsList className="grid w-full grid-cols-2 bg-[var(--bg-inset)]">
              <TabsTrigger value="avant">Avant</TabsTrigger>
              <TabsTrigger value="apres">Après</TabsTrigger>
            </TabsList>
            <TabsContent value="avant" className="mt-4">
              <ComparisonColumn variant="before" title="Sans RadarCRM" items={BEFORE} stat="≈ 3h recherche / sem." />
            </TabsContent>
            <TabsContent value="apres" className="mt-4">
              <ComparisonColumn variant="after" title="Avec RadarCRM" items={AFTER} stat="0 minute de recherche" />
            </TabsContent>
          </Tabs>
        </div>

        <p className="mt-10 text-center font-display text-lg italic text-[var(--text-primary)]">
          De l&apos;immatriculation au rendez-vous. Sans Excel.
        </p>
      </Container>
    </Section>
  );
}
