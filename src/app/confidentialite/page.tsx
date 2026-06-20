import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SITE } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité — RadarCRM",
  description: "Politique de confidentialité et conformité Loi 25 pour RadarCRM.",
};

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-[var(--bg-base)] py-16">
      <Container className="prose prose-invert max-w-3xl">
        <Link href="/" className="text-sm text-[var(--text-accent)]">
          ← Retour à l&apos;accueil
        </Link>
        <h1 className="mt-8 font-display text-4xl font-bold text-[var(--text-primary)]">
          Politique de confidentialité
        </h1>
        <p className="text-[var(--text-secondary)]">
          RadarCRM ({SITE.url}) respecte la Loi 25 sur la protection des renseignements personnels
          dans le secteur privé au Québec.
        </p>

        <h2 id="loi25" className="mt-10 font-display text-2xl text-[var(--text-primary)]">
          Conformité Loi 25
        </h2>
        <p className="text-[var(--text-secondary)]">
          Nous collectons uniquement les renseignements nécessaires pour répondre à votre demande
          de démonstration. Vos données organisationnelles sont hébergées dans une instance privée
          dédiée lors du déploiement du produit.
        </p>

        <h2 id="donnees" className="mt-10 font-display text-2xl text-[var(--text-primary)]">
          Données et attribution REQ
        </h2>
        <p className="text-[var(--text-secondary)]">
          RadarCRM utilise les données du Registre des entreprises du Québec et de la Régie du
          bâtiment du Québec (Données Québec, licence ouverte RLRQ). Nous ne revendons pas vos
          données, ne les partageons pas avec d&apos;autres organisations, et ne les utilisons pas
          pour entraîner des modèles tiers.
        </p>

        <h2 className="mt-10 font-display text-2xl text-[var(--text-primary)]">
          Contact
        </h2>
        <p className="text-[var(--text-secondary)]">
          Pour toute question :{" "}
          <a href={`mailto:${SITE.demoEmail}`} className="text-[var(--text-accent)]">
            {SITE.demoEmail}
          </a>
        </p>
      </Container>
    </main>
  );
}
