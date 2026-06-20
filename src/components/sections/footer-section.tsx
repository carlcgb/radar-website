import Link from "next/link";
import { LogoMark, LogoWordmark } from "@/components/icons/logo";
import { Container } from "@/components/layout/container";
import { SITE } from "@/lib/content/site";

const FOOTER_COLUMNS = [
  {
    title: "Produit",
    links: [
      { href: "#detection", label: "Comment ça marche" },
      { href: "#secteurs", label: "Secteurs" },
      { href: "#integrations", label: "Intégrations" },
      { href: "#demo", label: "Tarifs" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { href: "#securite", label: "Sécurité" },
      { href: "#demo", label: "Contact" },
      { href: SITE.appUrl, label: "Connexion", external: true },
    ],
  },
  {
    title: "Conformité",
    links: [
      { href: "/confidentialite", label: "Confidentialité" },
      { href: "/confidentialite#donnees", label: "Données" },
      { href: "/confidentialite#loi25", label: "Loi 25" },
    ],
  },
] as const;

export function FooterSection() {
  return (
    <footer id="pied-de-page" className="border-t border-[var(--border-default)] bg-[var(--bg-surface)]">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <LogoMark />
              <LogoWordmark />
            </div>
            <p className="mt-4 text-sm text-[var(--text-muted)]">{SITE.tagline}</p>
            <a
              href="https://www.donneesquebec.ca"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-xs text-[var(--text-muted)] hover:text-[var(--text-accent)]"
            >
              donneesquebec.ca
            </a>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-accent)]"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-accent)]"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-[var(--border-muted)] pt-6">
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            Données issues du Registre des entreprises du Québec (Données Québec, RLRQ) et de la
            Régie du bâtiment du Québec (RBQ). Utilisées conformément à la licence ouverte.
          </p>
          <p className="mt-4 text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} PRIM Nordic Inc. Québec, Canada. CAD.
          </p>
        </div>
      </Container>
    </footer>
  );
}
