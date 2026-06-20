import { REGIONS } from "@/lib/content/chapters";
import { cn } from "@/lib/utils";

export function ChapterMock({ chapterId }: { chapterId: string }) {
  return (
    <div
      className="w-full max-w-lg rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 shadow-md lg:max-w-none lg:justify-self-end"
      aria-hidden="true"
    >
      {chapterId === "detection" && <DetectionMock />}
      {chapterId === "enrichissement" && <EnrichmentMock />}
      {chapterId === "priorisation" && <PriorisationMock />}
      {chapterId === "appel" && <AppelMock />}
      {chapterId === "mesure" && <MesureMock />}
    </div>
  );
}

function DetectionMock() {
  const rows = [
    { region: "Montréal", count: 487, enriched: 421 },
    { region: "Rive-Sud ◀", count: 98, enriched: 84, highlight: true },
    { region: "Laval", count: 124, enriched: 107 },
  ];
  return (
    <div className="space-y-3 text-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
        Synchronisation REQ · Lundi 08:00
      </p>
      {rows.map((r) => (
        <div key={r.region} className="flex items-center justify-between gap-2 font-mono text-xs">
          <span className={cn(r.highlight && "text-[var(--text-accent)]")}>{r.region}</span>
          <span className="text-[var(--text-secondary)]">{r.count}</span>
          <div className="h-1.5 w-24 overflow-hidden rounded-full bg-[var(--bg-inset)]">
            <div
              className="h-full rounded-full bg-[var(--accent-brand)]"
              style={{ width: `${(r.enriched / r.count) * 100}%` }}
            />
          </div>
        </div>
      ))}
      <div className="flex flex-wrap gap-2 pt-2">
        {REGIONS.slice(0, 5).map((r) => (
          <span
            key={r}
            className="rounded border border-[var(--border-default)] px-2 py-0.5 text-xs text-[var(--text-muted)]"
          >
            {r}
          </span>
        ))}
      </div>
      <p className="font-mono text-sm text-[var(--text-accent)]">
        13 régions · 2 registres · 1 sync automatique
      </p>
    </div>
  );
}

function EnrichmentMock() {
  return (
    <div className="space-y-3 text-sm">
      <p className="text-[var(--text-secondary)]">Benoît Larivière · Ébénisterie · Laval</p>
      <div className="h-2 overflow-hidden rounded-full bg-[var(--bg-inset)]">
        <div className="h-full w-[87%] rounded-full bg-[var(--accent-brand)]" />
      </div>
      <p className="font-mono text-[var(--text-accent)]">✓ (450) 555-0187 · confiance 0,91</p>
      <p className="font-mono text-lg text-[var(--text-accent)]">87,3 % enrichis</p>
    </div>
  );
}

function PriorisationMock() {
  const factors = [
    { label: "Récence", pct: 90, pts: 32 },
    { label: "Secteur", pct: 75, pts: 28 },
    { label: "Région", pct: 55, pts: 20 },
  ];
  return (
    <div className="space-y-3">
      <p className="font-semibold text-[var(--text-primary)]">Martine Gosselin · Laval</p>
      <p className="font-mono text-4xl font-medium text-[var(--text-accent)]">91 / 100</p>
      {factors.map((f) => (
        <div key={f.label} className="space-y-1">
          <div className="flex justify-between font-mono text-xs text-[var(--text-muted)]">
            <span>{f.label}</span>
            <span>+{f.pts}</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-[var(--bg-inset)]">
            <div
              className="h-full rounded-full bg-[var(--accent-brand)]"
              style={{ width: `${f.pct}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function AppelMock() {
  return (
    <div className="space-y-3 text-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-danger-500)]">
        ● Appel en cours
      </p>
      <p className="font-semibold">Martine Gosselin · Agence immobilière</p>
      <p className="font-mono text-lg">(450) 555-0109</p>
      <div className="rounded-lg border border-[var(--accent-border)] bg-[var(--accent-muted)] p-3 text-[var(--text-secondary)]">
        Secteur immobilier : parlez protection invalidité dès le premier appel.
      </div>
      <div className="flex flex-wrap gap-2">
        {["RDV", "Conversation", "Rappel"].map((l, i) => (
          <span
            key={l}
            className={cn(
              "rounded px-3 py-1 text-xs font-medium",
              i === 0
                ? "bg-[var(--accent-brand)] text-[var(--text-inverse)]"
                : "border border-[var(--border-default)]",
            )}
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}

function MesureMock() {
  const kpis = [
    ["142", "Appels"],
    ["38", "Conversations"],
    ["11", "RDV"],
    ["2", "Ventes"],
  ];
  return (
    <div className="space-y-4">
      <p className="text-xs text-[var(--text-muted)]">Tableau de bord · Semaine du 16 juin</p>
      <div className="grid grid-cols-4 gap-2 text-center">
        {kpis.map(([val, label]) => (
          <div key={label}>
            <p className="font-mono text-2xl font-medium text-[var(--text-primary)]">{val}</p>
            <p className="text-[10px] uppercase text-[var(--text-muted)]">{label}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-[var(--text-secondary)]">
        Top secteur : <span className="font-mono text-[var(--text-accent)]">Coiffure 44 %</span> taux RDV
      </p>
    </div>
  );
}
