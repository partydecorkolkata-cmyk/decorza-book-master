import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { BookingForm } from "@/components/site/BookingForm";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ShieldCheck, Clock, Sparkles } from "lucide-react";

const search = z.object({ pkg: z.string().optional() });

export const Route = createFileRoute("/book")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "Book Online | Decorza Events" },
      { name: "description", content: "Book your event decoration online with Decorza Events. We confirm via WhatsApp within minutes." },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

function BookPage() {
  const { pkg } = Route.useSearch();
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Book Online"
        title="Tell Us About Your Celebration"
        subtitle="Fill the form below — we’ll confirm availability and share the final quote on WhatsApp."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <BookingForm defaultPackageId={pkg} />
        </div>
        <aside className="space-y-4">
          {[
            { i: ShieldCheck, t: "100% Setup Guarantee", d: "Premium materials. Setup completed on time, every time." },
            { i: Clock, t: "Same-Day Booking", d: "Available across all our cities, subject to slot availability." },
            { i: Sparkles, t: "Custom Packages", d: "Share your theme, colour palette or reference — we’ll design for you." },
          ].map(({ i: I, t, d }) => (
            <div key={t} className="rounded-2xl border bg-card p-5">
              <I className="h-5 w-5 text-gold" />
              <p className="mt-2 font-display text-lg">{t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
