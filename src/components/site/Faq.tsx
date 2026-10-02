import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqPageSchema, type FaqItem } from "@/lib/seo";

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(items)) }} />
      <Accordion type="single" collapsible className="mx-auto w-full max-w-3xl">
        {items.map((f, i) => (
          <AccordionItem key={i} value={`f-${i}`}>
            <AccordionTrigger className="text-left font-display text-base">{f.q}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
