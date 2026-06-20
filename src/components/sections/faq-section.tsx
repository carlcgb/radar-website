import { FAQ_ITEMS } from "@/lib/content/faq";
import { Container, Section } from "@/components/layout/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Eyebrow, SectionHeading } from "@/components/ui/typography";

export function FaqSection() {
  return (
    <Section id="faq" className="bg-[var(--bg-surface)]" ariaLabelledBy="faq-heading">
      <Container className="max-w-3xl">
        <Eyebrow>Questions fréquentes</Eyebrow>
        <SectionHeading id="faq-heading" className="mt-4">
          Ce que chaque principal nous demande avant de réserver une démo.
        </SectionHeading>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="mt-10 hidden md:block"
        >
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={item.question} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-lg font-semibold text-[var(--text-primary)] hover:text-[var(--text-accent)]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[var(--text-secondary)] leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 space-y-2 md:hidden">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface-raised)]"
            >
              <summary className="cursor-pointer list-none px-4 py-4 font-semibold text-[var(--text-primary)] marker:content-none [&::-webkit-details-marker]:hidden">
                {item.question}
              </summary>
              <p className="border-t border-[var(--border-muted)] px-4 py-4 text-sm text-[var(--text-secondary)]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
