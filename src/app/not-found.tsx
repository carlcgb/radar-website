import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--bg-base)] px-4 text-center">
      <h1 className="font-display text-3xl font-bold text-[var(--text-primary)]">
        Cette page n&apos;existe pas.
      </h1>
      <Link
        href="/"
        className="mt-6 text-[var(--text-accent)] underline-offset-4 hover:underline"
      >
        ← Retourner à l&apos;accueil
      </Link>
    </main>
  );
}
