import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="mx-auto w-full max-w-3xl">
      {items.map((f, i) => (
        <AccordionItem key={i} value={`f-${i}`}>
          <AccordionTrigger className="text-left font-display text-base">{f.q}</AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
