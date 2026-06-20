import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-6 shrink-0", className)}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="2" fill="#A4C639" />
      <path
        d="M12 12 L20 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-[var(--text-secondary)]"
      />
      <path
        d="M12 12 A8 8 0 0 1 20 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        className="text-[var(--text-muted)]"
      />
      <path
        d="M12 12 A12 12 0 0 1 22 12"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        className="text-[var(--text-muted)] opacity-60"
      />
    </svg>
  );
}

export function LogoWordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-display text-lg font-bold tracking-tight", className)}>
      <span className="text-[var(--text-primary)]">Radar</span>
      <span className="text-[var(--text-muted)]">CRM</span>
    </span>
  );
}
