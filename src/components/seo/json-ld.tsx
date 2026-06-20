import { FAQ_ITEMS } from "@/lib/content/faq";
import { SITE } from "@/lib/content/site";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RadarCRM",
    url: SITE.url,
    description:
      "Plateforme d'intelligence de prospection REQ pour les équipes de protection financière du Québec.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "QC",
      addressCountry: "CA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: SITE.demoEmail,
    },
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: SITE.tagline,
    url: SITE.url,
    inLanguage: "fr-CA",
    isPartOf: { "@type": "WebSite", name: "RadarCRM", url: SITE.url },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
