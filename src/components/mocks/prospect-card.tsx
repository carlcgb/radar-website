import { cn } from "@/lib/utils";

type ProspectCardProps = {
  className?: string;
  showOutcomes?: boolean;
  compact?: boolean;
};

export function ProspectCard({
  className,
  showOutcomes = false,
  compact = false,
}: ProspectCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 shadow-[var(--shadow-card-accent)] sm:p-6",
        className,
      )}
      role="img"
      aria-label="Fiche prospect RadarCRM : Élise Tremblay, salon de coiffure, Rive-Sud, score 84 sur 100, téléphone (450) 555-0142"
    >
      {!compact && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--text-accent)]">
          Nouveaux cette semaine · Rive-Sud · 31 prospects appelables
        </p>
      )}
      <div className="space-y-1">
        <p className="text-lg font-semibold text-[var(--text-primary)]">
          Élise Tremblay — Salon de coiffure
        </p>
        <p className="text-sm text-[var(--text-secondary)]">
          Rive-Sud · Immatriculée il y a 6 jours · IND
        </p>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-md bg-[var(--accent-brand)] px-2.5 py-1 font-mono text-sm font-medium text-[var(--text-inverse)]">
          Score 84 / 100
        </span>
        <span className="text-xs text-[var(--text-muted)]" aria-hidden="true">
          ●●●●○
        </span>
      </div>
      <p className="mt-2 font-mono text-xs text-[var(--text-secondary)]">
        Immatriculée ce mois-ci · Rive-Sud · Revenu variable
      </p>
      <div className="mt-4 rounded-lg border border-[var(--accent-border)] bg-[var(--accent-muted)] p-3 shadow-[inset_0_1px_0_rgba(164,198,57,0.08)]">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
          Angle d&apos;approche
        </p>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          Revenu variable, travail debout. Abordez la couverture invalidité avant
          de parler épargne. Fenêtre optimale : entre clients, 11h–13h.
        </p>
      </div>
      <p className="mt-4 font-mono text-lg font-medium text-[var(--text-primary)]">
        (450) 555-0142
      </p>
      {showOutcomes && (
        <div className="mt-4 flex flex-wrap gap-2">
          {["Pas répondu", "Conversation", "RDV booké"].map((label, i) => (
            <span
              key={label}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-medium",
                i === 2
                  ? "bg-[var(--accent-brand)] text-[var(--text-inverse)]"
                  : "border border-[var(--border-default)] text-[var(--text-secondary)]",
              )}
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
