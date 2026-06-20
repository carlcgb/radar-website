import { Nav } from "@/components/nav/nav";
import { AhaMomentSection } from "@/components/sections/aha-moment-section";
import { BeforeAfterSection } from "@/components/sections/before-after-section";
import { ChaptersSection } from "@/components/sections/chapters-section";
import { DemoFormSection } from "@/components/sections/demo-form-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { IntegrationsSection } from "@/components/sections/integrations-section";
import { SectorIntelSection } from "@/components/sections/sector-intel-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustSecuritySection } from "@/components/sections/trust-security-section";
import { TrustStripSection } from "@/components/sections/trust-strip-section";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="contenu-principal">
        <HeroSection />
        <TrustStripSection />
        <AhaMomentSection />
        <ChaptersSection />
        <BeforeAfterSection />
        <TestimonialsSection />
        <SectorIntelSection />
        <IntegrationsSection />
        <TrustSecuritySection />
        <FaqSection />
        <FinalCtaSection />
        <DemoFormSection />
      </main>
      <FooterSection />
    </>
  );
}
