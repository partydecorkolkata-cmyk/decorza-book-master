// Real, royalty-free photography via Unsplash source URLs.
const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export type Category = {
  slug: string;
  name: string;
  short: string;
  description: string;
  hero: string;
  gallery: string[];
  rating: number;
  reviews: number;
  startsAt: number;
  popular?: boolean;
  trending?: boolean;
  bestSeller?: boolean;
  faqs: { q: string; a: string }[];
};

export type Package = {
  id: string;
  categorySlug: string;
  name: string;
  description: string;
  includes: string[];
  image: string;
  rating: number;
  reviews: number;
  original: number;
  offer: number;
  trending?: boolean;
  bestSeller?: boolean;
};

const baseFaqs = (name: string) => [
  {
    q: `How much does a ${name.toLowerCase()} cost?`,
    a: `Our ${name.toLowerCase()} packages start affordably and scale up to premium luxury setups. You can pick by budget on this page, or message us on WhatsApp for a custom quote.`,
  },
  {
    q: `How early should I book a ${name.toLowerCase()}?`,
    a: `We recommend booking at least 24–48 hours in advance. Same-day setups are available in most cities subject to slot availability.`,
  },
  {
    q: `Do you set up at home, banquet halls and hotels?`,
    a: `Yes. Our team sets up at homes, terraces, banquet halls, hotels, farmhouses, restaurants and offices across all our service cities.`,
  },
  {
    q: `Will the decorations look exactly like the photos?`,
    a: `Yes. Every Decorza Events setup is recreated faithfully by our experienced decor team using premium balloons, fresh florals, lights and props.`,
  },
];

export const CATEGORIES: Category[] = [
  {
    slug: "birthday-decoration",
    name: "Birthday Decoration",
    short: "Beautiful birthday setups for every age",
    description:
      "Premium balloon arches, ring decorations, LED backdrops and themed birthday surprises designed to make the day unforgettable.",
    hero: img("photo-1530103862676-de8c9debad1d"),
    gallery: [
      img("photo-1530103862676-de8c9debad1d"),
      img("photo-1513151233558-d860c5398176"),
      img("photo-1464349095431-e9a21285b5f3"),
      img("photo-1602631985686-1bb0e6a8696e"),
      img("photo-1527529482837-4698179dc6ce"),
      img("photo-1517457373958-b7bdd4587205"),
    ],
    rating: 4.9,
    reviews: 2148,
    startsAt: 1499,
    popular: true,
    trending: true,
    bestSeller: true,
    faqs: baseFaqs("Birthday Decoration"),
  },
  {
    slug: "anniversary-decoration",
    name: "Anniversary Decoration",
    short: "Romantic anniversary surprises",
    description:
      "Candle paths, rose petal beds, balloon canopies and personalised photo decor for unforgettable anniversaries.",
    hero: img("photo-1519225421980-715cb0215aed"),
    gallery: [
      img("photo-1519225421980-715cb0215aed"),
      img("photo-1522673607200-164d1b6ce486"),
      img("photo-1518621736915-f3b1c41bfd00"),
      img("photo-1525772764200-be829a350797"),
      img("photo-1529636798458-92182e662485"),
      img("photo-1492684223066-81342ee5ff30"),
    ],
    rating: 4.9,
    reviews: 1820,
    startsAt: 1799,
    popular: true,
    bestSeller: true,
    faqs: baseFaqs("Anniversary Decoration"),
  },
  {
    slug: "theme-birthday-decoration",
    name: "Theme Birthday Decoration",
    short: "Custom themed parties kids & adults love",
    description:
      "From jungle and unicorn to football, princess and superhero themes — fully styled with props, balloons and themed backdrops.",
    hero: img("photo-1464349095431-e9a21285b5f3"),
    gallery: [
      img("photo-1464349095431-e9a21285b5f3"),
      img("photo-1527529482837-4698179dc6ce"),
      img("photo-1513151233558-d860c5398176"),
      img("photo-1602631985686-1bb0e6a8696e"),
      img("photo-1517457373958-b7bdd4587205"),
      img("photo-1530103862676-de8c9debad1d"),
    ],
    rating: 4.8,
    reviews: 1340,
    startsAt: 2499,
    popular: true,
    trending: true,
    faqs: baseFaqs("Theme Birthday Decoration"),
  },
  {
    slug: "proposal-decoration",
    name: "Proposal Decoration",
    short: "Say it with a magical surprise",
    description:
      "Romantic proposal decor with candles, rose paths, ring props, LED “Marry Me” lights and dreamy ambient setups.",
    hero: img("photo-1518621736915-f3b1c41bfd00"),
    gallery: [
      img("photo-1518621736915-f3b1c41bfd00"),
      img("photo-1519225421980-715cb0215aed"),
      img("photo-1522673607200-164d1b6ce486"),
      img("photo-1525772764200-be829a350797"),
      img("photo-1529636798458-92182e662485"),
      img("photo-1492684223066-81342ee5ff30"),
    ],
    rating: 5.0,
    reviews: 962,
    startsAt: 2499,
    trending: true,
    faqs: baseFaqs("Proposal Decoration"),
  },
  {
    slug: "baby-shower-decoration",
    name: "Baby Shower Decoration",
    short: "Soft, dreamy baby shower setups",
    description:
      "Pastel balloon arches, floral backdrops and elegant baby shower setups for the mommy-to-be.",
    hero: img("photo-1518895949257-7621c3c786d7"),
    gallery: [
      img("photo-1518895949257-7621c3c786d7"),
      img("photo-1519689680058-324335c77eba"),
      img("photo-1530103862676-de8c9debad1d"),
      img("photo-1543201072-cf81db5d7d80"),
      img("photo-1522673607200-164d1b6ce486"),
      img("photo-1527529482837-4698179dc6ce"),
    ],
    rating: 4.9,
    reviews: 870,
    startsAt: 2999,
    popular: true,
    bestSeller: true,
    faqs: baseFaqs("Baby Shower Decoration"),
  },
  {
    slug: "welcome-baby-decoration",
    name: "Welcome Baby Decoration",
    short: "Welcome the little one home in style",
    description:
      "Cradle decor, balloon hoops and welcome-home signage to celebrate the newborn’s arrival.",
    hero: img("photo-1519689680058-324335c77eba"),
    gallery: [
      img("photo-1519689680058-324335c77eba"),
      img("photo-1518895949257-7621c3c786d7"),
      img("photo-1543201072-cf81db5d7d80"),
      img("photo-1530103862676-de8c9debad1d"),
      img("photo-1527529482837-4698179dc6ce"),
      img("photo-1522673607200-164d1b6ce486"),
    ],
    rating: 4.8,
    reviews: 540,
    startsAt: 1999,
    faqs: baseFaqs("Welcome Baby Decoration"),
  },
  {
    slug: "romantic-bedroom-decoration",
    name: "Romantic Bedroom Decoration",
    short: "First night & surprise room setups",
    description:
      "Rose petal beds, candle paths, balloons and fairy lights — perfect for honeymoons, anniversaries and surprises.",
    hero: img("photo-1522673607200-164d1b6ce486"),
    gallery: [
      img("photo-1522673607200-164d1b6ce486"),
      img("photo-1519225421980-715cb0215aed"),
      img("photo-1518621736915-f3b1c41bfd00"),
      img("photo-1525772764200-be829a350797"),
      img("photo-1529636798458-92182e662485"),
      img("photo-1492684223066-81342ee5ff30"),
    ],
    rating: 4.9,
    reviews: 1450,
    startsAt: 1499,
    bestSeller: true,
    trending: true,
    faqs: baseFaqs("Romantic Bedroom Decoration"),
  },
  {
    slug: "car-boot-decoration",
    name: "Car Boot Decoration",
    short: "Surprise her with a car-boot proposal",
    description:
      "Roses, balloons, candles and LED setups inside your car boot — the most-loved surprise of the year.",
    hero: img("photo-1525772764200-be829a350797"),
    gallery: [
      img("photo-1525772764200-be829a350797"),
      img("photo-1518621736915-f3b1c41bfd00"),
      img("photo-1519225421980-715cb0215aed"),
      img("photo-1522673607200-164d1b6ce486"),
      img("photo-1529636798458-92182e662485"),
      img("photo-1492684223066-81342ee5ff30"),
    ],
    rating: 4.9,
    reviews: 780,
    startsAt: 1999,
    trending: true,
    faqs: baseFaqs("Car Boot Decoration"),
  },
  {
    slug: "rice-ceremony-decoration",
    name: "Rice Ceremony Decoration",
    short: "Traditional Annaprashan setups",
    description:
      "Beautiful traditional Annaprashan decor with flowers, drapes, name boards and themed props for your baby’s first rice ceremony.",
    hero: img("photo-1604017011826-d3b4c23f8914"),
    gallery: [
      img("photo-1604017011826-d3b4c23f8914"),
      img("photo-1519741497674-611481863552"),
      img("photo-1530103862676-de8c9debad1d"),
      img("photo-1518895949257-7621c3c786d7"),
      img("photo-1543201072-cf81db5d7d80"),
      img("photo-1519689680058-324335c77eba"),
    ],
    rating: 4.8,
    reviews: 410,
    startsAt: 3499,
    faqs: baseFaqs("Rice Ceremony Decoration"),
  },
  {
    slug: "engagement-decoration",
    name: "Engagement Decoration",
    short: "Elegant engagement stages & backdrops",
    description:
      "Premium engagement stage decor, ring exchange backdrops, floral arches and lounge seating arrangements.",
    hero: img("photo-1519741497674-611481863552"),
    gallery: [
      img("photo-1519741497674-611481863552"),
      img("photo-1606216794074-735e91aa2c92"),
      img("photo-1511795409834-ef04bbd61622"),
      img("photo-1519225421980-715cb0215aed"),
      img("photo-1522673607200-164d1b6ce486"),
      img("photo-1529636798458-92182e662485"),
    ],
    rating: 4.9,
    reviews: 690,
    startsAt: 4999,
    popular: true,
    faqs: baseFaqs("Engagement Decoration"),
  },
  {
    slug: "haldi-decoration",
    name: "Haldi Decoration",
    short: "Vibrant yellow haldi ceremony decor",
    description:
      "Marigold florals, yellow drapes, swing decor and traditional props for a picture-perfect haldi function.",
    hero: img("photo-1606216794074-735e91aa2c92"),
    gallery: [
      img("photo-1606216794074-735e91aa2c92"),
      img("photo-1519741497674-611481863552"),
      img("photo-1604017011826-d3b4c23f8914"),
      img("photo-1511795409834-ef04bbd61622"),
      img("photo-1530103862676-de8c9debad1d"),
      img("photo-1543201072-cf81db5d7d80"),
    ],
    rating: 4.9,
    reviews: 560,
    startsAt: 3999,
    popular: true,
    faqs: baseFaqs("Haldi Decoration"),
  },
  {
    slug: "mehendi-decoration",
    name: "Mehendi Decoration",
    short: "Boho mehendi backdrops & seating",
    description:
      "Bohemian umbrellas, jhoolas, floral installations and Rajasthani-style mehendi decor.",
    hero: img("photo-1511795409834-ef04bbd61622"),
    gallery: [
      img("photo-1511795409834-ef04bbd61622"),
      img("photo-1606216794074-735e91aa2c92"),
      img("photo-1519741497674-611481863552"),
      img("photo-1604017011826-d3b4c23f8914"),
      img("photo-1530103862676-de8c9debad1d"),
      img("photo-1527529482837-4698179dc6ce"),
    ],
    rating: 4.8,
    reviews: 430,
    startsAt: 4499,
    faqs: baseFaqs("Mehendi Decoration"),
  },
  {
    slug: "bachelorette-decoration",
    name: "Bachelorette Decoration",
    short: "Glam bachelorette & bridal showers",
    description:
      "Neon signs, sash backdrops, balloon clouds and Insta-worthy bachelorette setups for the bride squad.",
    hero: img("photo-1492684223066-81342ee5ff30"),
    gallery: [
      img("photo-1492684223066-81342ee5ff30"),
      img("photo-1529636798458-92182e662485"),
      img("photo-1525772764200-be829a350797"),
      img("photo-1518621736915-f3b1c41bfd00"),
      img("photo-1519225421980-715cb0215aed"),
      img("photo-1522673607200-164d1b6ce486"),
    ],
    rating: 4.9,
    reviews: 380,
    startsAt: 3999,
    trending: true,
    faqs: baseFaqs("Bachelorette Decoration"),
  },
  {
    slug: "corporate-event-decoration",
    name: "Corporate Event Decoration",
    short: "Conferences, launches & office parties",
    description:
      "Branded backdrops, stage decor, registration setups and lighting for corporate events and product launches.",
    hero: img("photo-1540575467063-178a50c2df87"),
    gallery: [
      img("photo-1540575467063-178a50c2df87"),
      img("photo-1505373877841-8d25f7d46678"),
      img("photo-1511578314322-379afb476865"),
      img("photo-1531058020387-3be344556be6"),
      img("photo-1519741497674-611481863552"),
      img("photo-1606216794074-735e91aa2c92"),
    ],
    rating: 4.8,
    reviews: 320,
    startsAt: 9999,
    faqs: baseFaqs("Corporate Event Decoration"),
  },
  {
    slug: "kids-theme-decoration",
    name: "Kids Theme Decoration",
    short: "Cartoon, jungle & fantasy themes",
    description:
      "Frozen, Minions, Spiderman, Unicorn, Jungle, Cocomelon — themed kids parties with all the props and balloons.",
    hero: img("photo-1517457373958-b7bdd4587205"),
    gallery: [
      img("photo-1517457373958-b7bdd4587205"),
      img("photo-1464349095431-e9a21285b5f3"),
      img("photo-1527529482837-4698179dc6ce"),
      img("photo-1513151233558-d860c5398176"),
      img("photo-1602631985686-1bb0e6a8696e"),
      img("photo-1530103862676-de8c9debad1d"),
    ],
    rating: 4.9,
    reviews: 720,
    startsAt: 3499,
    popular: true,
    faqs: baseFaqs("Kids Theme Decoration"),
  },
  {
    slug: "housewarming-decoration",
    name: "Housewarming Decoration",
    short: "Griha pravesh decor done right",
    description:
      "Traditional rangoli, floral entrances, mango leaf torans and lamp setups for housewarming ceremonies.",
    hero: img("photo-1505373877841-8d25f7d46678"),
    gallery: [
      img("photo-1505373877841-8d25f7d46678"),
      img("photo-1540575467063-178a50c2df87"),
      img("photo-1531058020387-3be344556be6"),
      img("photo-1511578314322-379afb476865"),
      img("photo-1604017011826-d3b4c23f8914"),
      img("photo-1519741497674-611481863552"),
    ],
    rating: 4.8,
    reviews: 290,
    startsAt: 2999,
    faqs: baseFaqs("Housewarming Decoration"),
  },
];

// Generate ~3 packages per category
export const PACKAGES: Package[] = CATEGORIES.flatMap((c) => {
  const tiers = [
    {
      tier: "Essential",
      multOrig: 1,
      multOffer: 0.7,
      includes: [
        "Balloon backdrop / arch",
        "Themed props & signage",
        "Standard lighting setup",
        "On-time setup & cleanup",
      ],
    },
    {
      tier: "Premium",
      multOrig: 1.9,
      multOffer: 1.3,
      includes: [
        "Designer backdrop with LED",
        "Premium balloon cloud + arch",
        "Fresh flower accents",
        "Personalised name signage",
        "Fairy lights & ambient mood lighting",
      ],
    },
    {
      tier: "Luxury",
      multOrig: 3.2,
      multOffer: 2.2,
      includes: [
        "Luxury floral installation",
        "Customised stage / sweetheart corner",
        "LED neon name sign",
        "Premium props, lights & drapes",
        "Photographer-ready lounge styling",
        "Dedicated decor manager",
      ],
    },
  ];
  return tiers.map((t, i) => ({
    id: `${c.slug}-${t.tier.toLowerCase()}`,
    categorySlug: c.slug,
    name: `${t.tier} ${c.name}`,
    description: `${t.tier} ${c.name.toLowerCase()} package designed by our expert decor team.`,
    includes: t.includes,
    image: c.gallery[i % c.gallery.length],
    rating: Math.min(5, c.rating + (i === 1 ? 0 : -0.1)),
    reviews: Math.round(c.reviews / (3 - i + 0.5)),
    original: Math.round(c.startsAt * t.multOrig * 1.6),
    offer: Math.round(c.startsAt * t.multOffer),
    trending: i === 1 && c.trending,
    bestSeller: i === 1 && c.bestSeller,
  }));
});

export const TRENDING_PACKAGES = PACKAGES.filter((p) => p.trending).slice(0, 8);
export const BEST_SELLERS = PACKAGES.filter((p) => p.bestSeller).slice(0, 8);

export const BUDGET_BUCKETS = [
  { label: "Under ₹2,999", max: 2999, slug: "under-2999" },
  { label: "₹3,000 – ₹5,999", min: 3000, max: 5999, slug: "3000-5999" },
  { label: "₹6,000 – ₹9,999", min: 6000, max: 9999, slug: "6000-9999" },
  { label: "₹10,000 & above", min: 10000, slug: "10000-plus" },
];

export const REVIEWS = [
  ["Aarav Sharma", "Mumbai", "Birthday Decoration", "The setup was absolutely magical. My wife cried happy tears. Worth every rupee.", 5],
  ["Priya Banerjee", "Kolkata", "Anniversary Decoration", "Punctual, premium quality balloons and gorgeous flowers. Highly recommended.", 5],
  ["Rohan Mehta", "Delhi", "Proposal Decoration", "She said yes! The car boot decoration was beyond what I imagined.", 5],
  ["Sneha Iyer", "Bengaluru", "Baby Shower Decoration", "Pastel theme was dreamy. The team set up everything in 90 minutes.", 5],
  ["Aditya Rao", "Hyderabad", "Theme Birthday Decoration", "Booked the jungle theme for my son. Absolute showstopper at the party.", 5],
  ["Kavya Nair", "Pune", "Romantic Bedroom Decoration", "Surprised my husband on our anniversary. The room looked like a fairytale.", 5],
  ["Ishita Sen", "Siliguri", "Welcome Baby Decoration", "Cradle decoration with name signage was beautiful. Got so many compliments.", 5],
  ["Vikram Singh", "Delhi", "Engagement Decoration", "Stage decor was elegant, the florals were super fresh. Top class service.", 5],
  ["Neha Kapoor", "Mumbai", "Bachelorette Decoration", "Neon signs and balloon cloud were Insta gold. Loved every minute.", 5],
  ["Arjun Das", "Kolkata", "Rice Ceremony Decoration", "Traditional yet modern. Our baby’s annaprashan looked stunning.", 5],
  ["Riya Ghosh", "Kolkata", "Haldi Decoration", "Marigold setup and jhoola was breathtaking. Family loved it.", 5],
  ["Karan Malhotra", "Pune", "Mehendi Decoration", "Bohemian umbrellas and floral setup made our function feel premium.", 5],
  ["Ananya Pillai", "Bengaluru", "Birthday Decoration", "Same-day booking, still arrived early and set up perfectly. Impressed.", 5],
  ["Saurabh Joshi", "Hyderabad", "Corporate Event Decoration", "Our product launch backdrop and branding were on point. Professional team.", 5],
  ["Meera Patel", "Mumbai", "Anniversary Decoration", "Rose petal bed and candle path — it was like a movie scene.", 4],
  ["Devansh Roy", "Siliguri", "Kids Theme Decoration", "Spiderman theme came out exactly like the photos. Son was over the moon.", 5],
  ["Tanvi Shah", "Pune", "Housewarming Decoration", "Beautiful traditional griha pravesh decor. Everyone asked who did it.", 5],
  ["Yash Verma", "Delhi", "Romantic Bedroom Decoration", "Surprised my girlfriend — she was speechless. Setup was flawless.", 5],
  ["Pooja Reddy", "Hyderabad", "Baby Shower Decoration", "Lovely pastel pink theme. Coordinator was super responsive on WhatsApp.", 5],
  ["Ritika Bose", "Kolkata", "Birthday Decoration", "Booked at midnight, setup done by noon. Truly 24/7 service.", 5],
] as const;

export const GALLERY = Array.from(
  new Set(CATEGORIES.flatMap((c) => c.gallery))
).slice(0, 18);

export const HOMEPAGE_FAQS = [
  {
    q: "Which cities does Decorza Events operate in?",
    a: "We provide premium event decoration services in Kolkata, Siliguri, Delhi, Mumbai, Bengaluru, Hyderabad and Pune — at homes, banquet halls, hotels, farmhouses and offices.",
  },
  {
    q: "How do I book a decoration?",
    a: "The fastest way is to message us on WhatsApp at +91 86378 70742. You can also use the Book Online form on this site and our team will confirm within minutes.",
  },
  {
    q: "Do you offer same-day decoration setups?",
    a: "Yes. Subject to slot availability, we offer same-day setups across most of our service cities.",
  },
  {
    q: "Can I customise a package?",
    a: "Absolutely. Share your idea, theme, colour palette or reference photos on WhatsApp and our decor team will design a custom quote.",
  },
  {
    q: "Is an advance payment required?",
    a: "A small advance is required to block your slot and procure materials. The balance is paid on the day of the event.",
  },
  {
    q: "Do you handle balloons, flowers and lighting in-house?",
    a: "Yes. We use premium imported balloons, fresh florals, fairy lights, LED neon and high-quality props — all sourced and styled by our own team.",
  },
];

export const WHY_CHOOSE = [
  { title: "Same Day Setup", desc: "Last-minute plans? We deliver same-day decoration setups across all our cities." },
  { title: "Affordable Packages", desc: "Transparent pricing from budget-friendly to luxury — no hidden fees." },
  { title: "Experienced Decor Team", desc: "Hundreds of celebrations delivered by trained, in-house decor artists." },
  { title: "Premium Decorations", desc: "Imported balloons, fresh flowers, neon signs and designer backdrops." },
  { title: "Multi-City Service", desc: "Live in 7 cities including Kolkata, Mumbai, Delhi, Bengaluru and more." },
  { title: "24/7 WhatsApp Support", desc: "Quick replies, instant quotes — chat with us any time, day or night." },
];

export function packagesForCategory(slug: string) {
  return PACKAGES.filter((p) => p.categorySlug === slug);
}

export function categoryBySlug(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
