import { BRAND } from "@/lib/brand";

export const SITE_URL = "https://decorzaevents.com";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export type FaqItem = { q: string; a: string };

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: BRAND.name,
  url: SITE_URL,
  telephone: BRAND.whatsappDisplay,
  email: BRAND.email,
  description:
    "Premium event decoration for birthdays, anniversaries, proposals, baby showers, haldi, mehendi, engagements and special celebrations.",
  image: absoluteUrl("/images/balloon-decoration-hero-v2.jpg"),
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer",
  areaServed: BRAND.cities.map((name) => ({
    "@type": "City",
    name,
  })),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: BRAND.whatsappDisplay,
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi", "Bengali"],
  },
};
export function localBusinessForArea(opts: { cityName: string; area?: string; path: string; description: string }) {
  const place = opts.area ? `${opts.area}, ${opts.cityName}` : opts.cityName;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${absoluteUrl(opts.path)}#localbusiness`,
    parentOrganization: { "@id": `${SITE_URL}/#localbusiness` },
    name: `${BRAND.name} — ${place}`,
    url: absoluteUrl(opts.path),
    description: opts.description,
    telephone: BRAND.whatsappDisplay,
    email: BRAND.email,
    image: absoluteUrl("/images/balloon-decoration-hero-v2.jpg"),
    priceRange: "₹₹",
    address: { "@type": "PostalAddress", addressLocality: opts.cityName, addressCountry: "IN" },
    areaServed: opts.area
      ? [{ "@type": "Place", name: place }, { "@type": "City", name: opts.cityName }]
      : { "@type": "City", name: opts.cityName },
    openingHours: "Mo-Su 08:00-22:00",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: absoluteUrl(it.path) })),
  };
}
