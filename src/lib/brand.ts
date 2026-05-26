export const BRAND = {
  name: "Decorza Events",
  tagline: "Crafting Memorable Celebrations",
  whatsapp: "918637870742", // +91 86378 70742
  whatsappDisplay: "+91 86378 70742",
  email: "hello@decorzaevents.com",
  cities: [
    "Kolkata",
    "Siliguri",
    "Delhi",
    "Mumbai",
    "Bengaluru",
    "Hyderabad",
    "Pune",
  ] as const,
};

export type City = (typeof BRAND.cities)[number];

export function waLink(message: string) {
  return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function waBookingMessage(opts: {
  packageName?: string;
  city?: string;
  date?: string;
  budget?: string;
}) {
  const lines = [
    `Hello ${BRAND.name},`,
    opts.packageName
      ? `I would like to book ${opts.packageName}${opts.city ? ` in ${opts.city}` : ""}.`
      : `I would like to enquire about a decoration${opts.city ? ` in ${opts.city}` : ""}.`,
    "",
    `Event Date: ${opts.date ?? ""}`,
    `Budget: ${opts.budget ?? ""}`,
    "",
    "Please share package details.",
  ];
  return lines.join("\n");
}
