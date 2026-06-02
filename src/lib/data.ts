// Curated Unsplash photo IDs of REAL event decoration setups.
// Hand-picked from photographer portfolios shooting actual decorated events
// — balloon arches, candle rooms, mandap stages, marigold haldi setups,
// baby shower backdrops, kids theme parties. No generic cakes, banquet
// tables, abstract roses or stock food photos.
const img = (id: string, w = 1200) =>
  id.startsWith("/") || id.startsWith("http") ? id : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

// Birthday balloon decoration — arches, garlands, ring backdrops
const BALLOON_DECOR = [
  "/images/balloon-decoration-hero-v2.jpg", // balloon arch backdrop (custom upload)
  "/birthday-1.jpg", // custom premium birthday upload
  "/birthday-2.jpg", // luxury birthday upload
  "/birthday-4.png", // navy + gold arch

  "/birthday-5.jpg", // boho pink arch
  "photo-1583244532610-2a234ba29bee", // organic balloon garland
  "/birthday-6.jpg", // white + gold ring
  "/birthday-7.jpg", // rose gold theme
];

// Romantic / anniversary / proposal / bedroom surprise
const ROMANTIC_DECOR = [
  "/anniversary-1.jpg", // custom anniversary upload
  "/anniversary-2.webp", // custom anniversary upload 2
  "/anniversary-3.webp", // custom anniversary upload 3
  "/anniversary-gallery-1.jpg", // proposal candle ring
  "/anniversary-gallery-2.jpg", // romantic mood lighting room
  "/anniversary-gallery-3.webp", // string lights ambient bedroom
  "/anniversary-gallery-4.jpg", // fairy lights canopy bed
  "/anniversary-gallery-5.jpg", // candles & roses surprise
];

// Baby shower + welcome baby (pastel arches, cradle decor)
const BABY_DECOR = [
  "/baby-shower-1.jpg", // custom baby shower upload
  "/gender-reveal-1.jpg", // custom gender reveal upload
  "/baby-shower-3.jpg", // baby shower backdrop setup (custom upload)
  "/birthday-decoration.webp", // pink baby decor wall
  "/maternity-decoration.jpg", // baby balloon installation
  "/baby-bloom.jpg", // welcome baby balloons
  "/gender-reveal.jpg", // baby shower table styling
];

// Traditional Indian — haldi, mehendi, rice ceremony, housewarming
const TRADITIONAL_DECOR = [
  "/bd0376ae-9b5b-4709-b15a-e12b400d023d.png", // marigold flower installation
  "/942d57ec-d885-471e-bd0d-3bae09b3ea63.jpg", // traditional Indian ceremony decor
  "/092f68ee-d169-404c-97de-a830bbd7c3e2.jpg", // engagement decor 1
  "/ddbbe21d-b302-41b1-b540-d96886f6934a.jpg", // Indian floral mandap decor
  "/f3443506-ae43-4c2b-a1b0-8bf5c9cfa542.jpg", // yellow haldi marigold setup
  "/3b9eaec6-1f96-432f-af2d-1c0c14a2be84.jpg", // floral seating / jhoola
  "/dac76f89-052b-49b0-bb30-830bf52781b7.jpg", // mehendi boho cushion seating
];

// Engagement / wedding stage / mandap
const STAGE_DECOR = [
  "/floral-stage.jpg", // floral engagement stage
  "/mandap-stage.jpg", // mandap-style stage decor
  "/stage-floral-arch.png", // floral arch with drapes (custom upload)
  "/092f68ee-d169-404c-97de-a830bbd7c3e2.jpg", // engagement decor 1
  "/images/engagement-decor-2.jpg", // engagement decor 2
  "/images/engagement-decor-3.jpg", // engagement decor 3
];

// Kids theme — themed birthday parties
const KIDS_THEME = [
  "/birthday-1.jpg", // kids balloon party
  "/birthday-2.jpg", // birthday party kids
  "/birthday-3.webp", // confetti kids backdrop
  "/kids-theme-4.jpg", // colourful party decor
  "/kids-theme-5.webp", // balloon arch kids
  "/kids-theme-6.jpg", // pastel party setup
  "/kids-theme-7.jpg", // number balloons kids
];

// Bachelorette — neon, glam, balloon clouds
const BACHELORETTE_DECOR = [
  "photo-1535378620166-273708d44e4c", // gold balloon glam decor
  "photo-1583244532610-2a234ba29bee", // balloon garland glam
  "/kids-theme-6.jpg", // pastel bachelorette
  "/kids-theme-7.jpg", // bridal number balloons
  "/kids-theme-5.webp", // balloon arch backdrop
];

// Corporate — branded backdrops, stage lighting for launches
const CORPORATE_DECOR = [
  "photo-1511578314322-379afb476865", // event stage with lighting
  "photo-1505373877841-8d25f7d46678", // conference stage backdrop
  "photo-1540575467063-178a50c2df87", // event lighting setup
  "photo-1531058020387-3be344556be6", // corporate event lights
];

const pick = (pool: string[]) => pool.map((id) => img(id));

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
  longDescription: string;
  includes: string[];
  image: string;
  gallery: string[];
  rating: number;
  reviews: number;
  original: number;
  offer: number;
  duration: string;
  setupTime: string;
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
  { slug: "birthday-decoration", name: "Birthday Decoration", short: "Beautiful birthday setups for every age",
    description: "Premium balloon arches, ring decorations, LED backdrops and themed birthday surprises designed to make the day unforgettable.",
    hero: img(BALLOON_DECOR[0]), gallery: pick(BALLOON_DECOR),
    rating: 4.9, reviews: 2148, startsAt: 1499, popular: true, trending: true, bestSeller: true,
    faqs: baseFaqs("Birthday Decoration") },
  { slug: "anniversary-decoration", name: "Anniversary Decoration", short: "Romantic anniversary surprises",
    description: "Candle paths, rose petal beds, balloon canopies and personalised photo decor for unforgettable anniversaries.",
    hero: img(ROMANTIC_DECOR[0]), gallery: pick(ROMANTIC_DECOR),
    rating: 4.9, reviews: 1820, startsAt: 1499, popular: true, bestSeller: true,
    faqs: baseFaqs("Anniversary Decoration") },
  { slug: "theme-birthday-decoration", name: "Theme Birthday Decoration", short: "Custom themed parties kids & adults love",
    description: "From jungle and unicorn to football, princess and superhero themes — fully styled with props, balloons and themed backdrops.",
    hero: img(KIDS_THEME[0]), gallery: pick(KIDS_THEME),
    rating: 4.8, reviews: 1340, startsAt: 2499, popular: true, trending: true,
    faqs: baseFaqs("Theme Birthday Decoration") },
  { slug: "proposal-decoration", name: "Proposal Decoration", short: "Say it with a magical surprise",
    description: "Romantic proposal decor with candles, rose paths, ring props, LED \u201CMarry Me\u201D lights and dreamy ambient setups.",
    hero: img(ROMANTIC_DECOR[3]), gallery: pick(ROMANTIC_DECOR),
    rating: 5.0, reviews: 962, startsAt: 2499, trending: true,
    faqs: baseFaqs("Proposal Decoration") },
  { slug: "baby-shower-decoration", name: "Baby Shower Decoration", short: "Soft, dreamy baby shower setups",
    description: "Pastel balloon arches, floral backdrops and elegant baby shower setups for the mommy-to-be.",
    hero: img(BABY_DECOR[0]), gallery: pick(BABY_DECOR),
    rating: 4.9, reviews: 870, startsAt: 1999, popular: true, bestSeller: true,
    faqs: baseFaqs("Baby Shower Decoration") },
  { slug: "welcome-baby-decoration", name: "Welcome Baby Decoration", short: "Welcome the little one home in style",
    description: "Cradle decor, balloon hoops and welcome-home signage to celebrate the newborn\u2019s arrival.",
    hero: img(BABY_DECOR[1]), gallery: pick(BABY_DECOR),
    rating: 4.8, reviews: 540, startsAt: 1999,
    faqs: baseFaqs("Welcome Baby Decoration") },
  { slug: "romantic-bedroom-decoration", name: "Romantic Bedroom Decoration", short: "First night & surprise room setups",
    description: "Rose petal beds, candle paths, balloons and fairy lights \u2014 perfect for honeymoons, anniversaries and surprises.",
    hero: img(ROMANTIC_DECOR[1]), gallery: pick(ROMANTIC_DECOR),
    rating: 4.9, reviews: 1450, startsAt: 2999, bestSeller: true, trending: true,
    faqs: baseFaqs("Romantic Bedroom Decoration") },
  { slug: "car-boot-decoration", name: "Car Boot Decoration", short: "Surprise her with a car-boot proposal",
    description: "Roses, balloons, candles and LED setups inside your car boot \u2014 the most-loved surprise of the year.",
    hero: img(ROMANTIC_DECOR[3]), gallery: pick(ROMANTIC_DECOR),
    rating: 4.9, reviews: 780, startsAt: 1999, trending: true,
    faqs: baseFaqs("Car Boot Decoration") },
  { slug: "rice-ceremony-decoration", name: "Rice Ceremony Decoration", short: "Traditional Annaprashan setups",
    description: "Beautiful traditional Annaprashan decor with flowers, drapes, name boards and themed props for your baby\u2019s first rice ceremony.",
    hero: img(TRADITIONAL_DECOR[1]), gallery: pick(TRADITIONAL_DECOR),
    rating: 4.8, reviews: 410, startsAt: 3499,
    faqs: baseFaqs("Rice Ceremony Decoration") },
  { slug: "engagement-decoration", name: "Engagement Decoration", short: "Elegant engagement stages & backdrops",
    description: "Premium engagement stage decor, ring exchange backdrops, floral arches and lounge seating arrangements.",
    hero: img(STAGE_DECOR[0]), gallery: pick(STAGE_DECOR),
    rating: 4.9, reviews: 690, startsAt: 4999, popular: true,
    faqs: baseFaqs("Engagement Decoration") },
  { slug: "haldi-decoration", name: "Haldi Decoration", short: "Vibrant yellow haldi ceremony decor",
    description: "Marigold florals, yellow drapes, swing decor and traditional props for a picture-perfect haldi function.",
    hero: img(TRADITIONAL_DECOR[0]), gallery: pick(TRADITIONAL_DECOR),
    rating: 4.9, reviews: 560, startsAt: 3999, popular: true,
    faqs: baseFaqs("Haldi Decoration") },
  { slug: "mehendi-decoration", name: "Mehendi Decoration", short: "Boho mehendi backdrops & seating",
    description: "Bohemian umbrellas, jhoolas, floral installations and Rajasthani-style mehendi decor.",
    hero: img(TRADITIONAL_DECOR[3]), gallery: pick(TRADITIONAL_DECOR),
    rating: 4.8, reviews: 430, startsAt: 4499,
    faqs: baseFaqs("Mehendi Decoration") },
  { slug: "bachelorette-decoration", name: "Bachelorette Decoration", short: "Glam bachelorette & bridal showers",
    description: "Neon signs, sash backdrops, balloon clouds and Insta-worthy bachelorette setups for the bride squad.",
    hero: img(BACHELORETTE_DECOR[0]), gallery: pick(BACHELORETTE_DECOR),
    rating: 4.9, reviews: 380, startsAt: 3999, trending: true,
    faqs: baseFaqs("Bachelorette Decoration") },
  { slug: "corporate-event-decoration", name: "Corporate Event Decoration", short: "Conferences, launches & office parties",
    description: "Branded backdrops, stage decor, registration setups and lighting for corporate events and product launches.",
    hero: img(CORPORATE_DECOR[0]), gallery: pick(CORPORATE_DECOR),
    rating: 4.8, reviews: 320, startsAt: 9999,
    faqs: baseFaqs("Corporate Event Decoration") },
  { slug: "kids-theme-decoration", name: "Kids Theme Decoration", short: "Cartoon, jungle & fantasy themes",
    description: "Frozen, Minions, Spiderman, Unicorn, Jungle, Cocomelon \u2014 themed kids parties with all the props and balloons.",
    hero: img(KIDS_THEME[1]), gallery: pick(KIDS_THEME),
    rating: 4.9, reviews: 720, startsAt: 3499, popular: true,
    faqs: baseFaqs("Kids Theme Decoration") },
  { slug: "housewarming-decoration", name: "Housewarming Decoration", short: "Griha pravesh decor done right",
    description: "Traditional rangoli, floral entrances, mango leaf torans and lamp setups for housewarming ceremonies.",
    hero: img(TRADITIONAL_DECOR[2]), gallery: pick(TRADITIONAL_DECOR),
    rating: 4.8, reviews: 290, startsAt: 2999,
    faqs: baseFaqs("Housewarming Decoration") },
];

// Generate 3 packages per category — Essential / Premium / Luxury
export const PACKAGES: Package[] = CATEGORIES.flatMap((c) => {
  const tiers = [
    { tier: "Essential", multOrig: 1, multOffer: 1.5,
      includes: ["✓\n Designer backdrop  ", "Themed props & signage", "Standard lighting setup", "On-time setup & cleanup"],
      duration: "2-3 hours of celebration", setupTime: "45-60 min setup" },
    { tier: "Premium", multOrig: 1.9, multOffer: 1.3,
      includes: [" \nPremium artificial flower ", "✓\nPremium cloth & light setup", "Fresh flower accents", "Personalised name signage", "Fairy lights & ambient mood lighting"],
      duration: "3-4 hours of celebration", setupTime: "60-90 min setup" },
    { tier: "Luxury", multOrig: 3.2, multOffer: 2.2,
      includes: ["Luxury floral installation", "Customised stage / sweetheart corner", "✓\nLight and props", "Premium props, lights & drapes", "Photographer-ready lounge styling", "Dedicated decor manager"],
      duration: "Full event styling", setupTime: "90-150 min setup" },

  ];
  return tiers.map((t, i) => ({
    id: `${c.slug}-${t.tier.toLowerCase()}`,
    categorySlug: c.slug,
    name: `${t.tier} ${c.name}`,
    description: i === 0
      ? `A clean, photo-ready ${c.name.toLowerCase()} setup with a designer backdrop, themed props and warm lighting — exactly as shown in the picture.`
      : i === 1
      ? `An upgraded ${c.name.toLowerCase()} with a premium artificial flower arch, draped cloth backdrop, fresh floral accents and ambient fairy lights — styled like the reference photo.`
      : `A full luxury ${c.name.toLowerCase()} experience with a grand floral installation, sweetheart lounge seating, drapes and props — recreated to match the photo.`,
    longDescription: `Our ${t.tier} ${c.name} is one of our most-booked setups, recreated faithfully to match the photo on this card. Designed end-to-end by Decorza Events' in-house team, this package brings together premium balloons, fresh and artificial florals, draped backdrops, designer lighting and themed props to create a celebration moment your guests will remember and your phone camera will love. Every element is handpicked and installed on-site by trained decorators.`,
    includes: t.includes,
    image: c.gallery[i % c.gallery.length],
    gallery: c.gallery,
    rating: Math.min(5, c.rating + (i === 1 ? 0 : -0.1)),
    reviews: Math.round(c.reviews / (3 - i + 0.5)),
    original: Math.round(
      i === 0 ? (c.slug === "birthday-decoration" || c.slug === "romantic-bedroom-decoration" ? 10499 : 10499) :
      i === 1 ? (
        (c.slug === "birthday-decoration" || c.slug === "theme-birthday-decoration") ? 10499 :
        c.slug === "anniversary-decoration" ? 10329 :
        12500
      ) :
      i === 2 ? (
        c.slug === "birthday-decoration" ? 53029 :
        (c.slug === "theme-birthday-decoration" || c.slug === "proposal-decoration") ? 34481 : 
        c.slug === "anniversary-decoration" ? 22726 :
        (c.slug === "baby-shower-decoration" || c.slug === "welcome-baby-decoration" || c.slug === "car-boot-decoration") ? 18999 :
        c.startsAt === 3999 ? 18999 : // New: Original for Haldi/Bachelorette Luxury
        (c.startsAt * t.multOffer) / 0.66
      ) : (c.startsAt * t.multOffer) / 0.66
    ),
    offer: (
      i === 0 ? (
        c.slug === "baby-shower-decoration" ? 2499 :
        (c.slug === "birthday-decoration" || c.slug === "romantic-bedroom-decoration" ? 3999 : 3999)
      ) :
      i === 1 ? (
        c.slug === "baby-shower-decoration" ? 5999 :
        ((c.slug === "birthday-decoration" || c.slug === "theme-birthday-decoration") ? 7999 :
        c.slug === "anniversary-decoration" ? 4499 :
        7999) // Changed from 12500 to 7999
      ) :
      i === 2 ? (
        c.slug === "birthday-decoration" ? 34999 :
        (c.slug === "theme-birthday-decoration" || c.slug === "proposal-decoration") ? 19999 :
        c.slug === "anniversary-decoration" ? 9999 :
        (c.slug === "baby-shower-decoration" || c.slug === "welcome-baby-decoration" || c.slug === "car-boot-decoration") ? 18999 :
        c.startsAt === 3999 ? 12999 : // New: Offer for Haldi/Bachelorette Luxury (from 8798)
        Math.round(c.startsAt * t.multOffer)
      ) : Math.round(c.startsAt * t.multOffer)
    ),






    duration: t.duration,
    setupTime: t.setupTime,
    trending: i === 1 && c.trending,
    bestSeller: i === 1 && c.bestSeller,
  }));
});

export const TRENDING_PACKAGES = PACKAGES.filter((p) => p.trending).slice(0, 8);
export const BEST_SELLERS = PACKAGES.filter((p) => p.bestSeller).slice(0, 8);

export const BUDGET_BUCKETS = [
  { label: "Under \u20B92,999", max: 2999, slug: "under-2999" },
  { label: "\u20B93,000 \u2013 \u20B95,999", min: 3000, max: 5999, slug: "3000-5999" },
  { label: "\u20B96,000 \u2013 \u20B99,999", min: 6000, max: 9999, slug: "6000-9999" },
  { label: "\u20B910,000 & above", min: 10000, slug: "10000-plus" },
];

export const REVIEWS = [
  ["Aarav Sharma", "Mumbai", "Birthday Decoration", "The setup was absolutely magical. Worth every rupee.", 5],
  ["Priya Banerjee", "Kolkata", "Anniversary Decoration", "Punctual, premium quality balloons and gorgeous flowers. Highly recommended.", 5],
  ["Rohan Mehta", "Delhi", "Proposal Decoration", "She said yes! The car boot decoration was beyond what I imagined.", 5],
  ["Sneha Iyer", "Bengaluru", "Baby Shower Decoration", "Pastel theme was dreamy. The team set up everything in 90 minutes.", 5],
  ["Aditya Rao", "Hyderabad", "Theme Birthday Decoration", "Booked the jungle theme for my son. Absolute showstopper at the party.", 5],
  ["Kavya Nair", "Pune", "Romantic Bedroom Decoration", "Surprised my husband on our anniversary. The room looked like a fairytale.", 5],
  ["Ishita Sen", "Siliguri", "Welcome Baby Decoration", "Cradle decoration with name signage was beautiful. Got so many compliments.", 5],
  ["Vikram Singh", "Delhi", "Engagement Decoration", "Engagement decor was perfect as we expected and beautifully crafted by the team, Top class service. Highly recommended.", 5],
  ["Neha Kapoor", "Mumbai", "Bachelorette Decoration", "Neon signs and balloon cloud were Insta gold. Loved every minute.", 5],
  ["Arjun Das", "Kolkata", "Rice Ceremony Decoration", "Traditional yet modern. Our baby\u2019s annaprashan looked stunning.", 5],
  ["Riya Ghosh", "Kolkata", "Haldi Decoration", "Best decoration, highly professional team, haldi decoration was so beautifully crafted by them. Thank you.", 5],
  ["Karan Malhotra", "Pune", "Mehendi Decoration", "Bohemian umbrellas and floral setup made our function feel premium.", 5],
  ["Ananya Pillai", "Bengaluru", "Birthday Decoration", "Same-day booking, still arrived early and set up perfectly. Impressed.", 5],
  ["Saurabh Joshi", "Hyderabad", "Corporate Event Decoration", "Our product launch backdrop and branding were on point. Professional team.", 5],
  ["Meera Patel", "Mumbai", "Anniversary Decoration", "Rose petal bed and candle path \u2014 it was like a movie scene.", 4],
  ["Devansh Roy", "Siliguri", "Kids Theme Decoration", "Spiderman theme came out exactly like the photos. Son was over the moon.", 5],
  ["Tanvi Shah", "Pune", "Housewarming Decoration", "Beautiful traditional griha pravesh decor. Everyone asked who did it.", 5],
  ["Yash Verma", "Delhi", "Romantic Bedroom Decoration", "Surprised my girlfriend \u2014 she was speechless. Setup was flawless.", 5],
  ["Pooja Reddy", "Hyderabad", "Baby Shower Decoration", "Lovely pastel pink theme. Coordinator was super responsive on WhatsApp.", 5],
  ["Ritika Bose", "Kolkata", "Birthday Decoration", "Booked at midnight, setup done by noon. Truly 24/7 service.", 5],
  ["Harsh Agarwal", "Mumbai", "Proposal Decoration", "The candle path and LED Marry Me sign were stunning. She loved it.", 5],
  ["Simran Kaur", "Delhi", "Haldi Decoration", "Marigold and yellow drapes were so vibrant. Family loved it. Highly recommended.", 5],
  ["Anirban Saha", "Siliguri", "Anniversary Decoration", "Booked last minute, team still pulled off a magical setup. 10/10.", 5],
  ["Lakshmi Menon", "Bengaluru", "Engagement Decoration", "Stage decor was elegant and floral arrangements were fresh. Highly recommended.", 5],
  ["Rahul Bhattacharya", "Pune", "Birthday Decoration", "Best birthday surprise for my mom's 60th. Professional team, beautiful work.", 5],
] as const;

export const GALLERY = Array.from(
  new Set(CATEGORIES.flatMap((c) => c.gallery))
).slice(0, 18);

export const HOMEPAGE_FAQS = [
  { q: "Which cities does Decorza Events operate in?", a: "We provide premium event decoration services in Kolkata, Siliguri, Delhi, Mumbai, Bengaluru, Hyderabad and Pune \u2014 at homes, banquet halls, hotels, farmhouses and offices." },
  { q: "How do I book a decoration?", a: "The fastest way is to message us on WhatsApp at +91 86378 70742. You can also use the Book Online form on this site and our team will confirm within minutes." },
  { q: "Do you offer same-day decoration setups?", a: "Yes. Subject to slot availability, we offer same-day setups across most of our service cities." },
  { q: "Can I customise a package?", a: "Absolutely. Share your idea, theme, colour palette or reference photos on WhatsApp and our decor team will design a custom quote." },
  { q: "Is an advance payment required?", a: "A small advance is required to block your slot and procure materials. The balance is paid on the day of the event." },
  { q: "Do you handle balloons, flowers and lighting in-house?", a: "Yes. We use premium imported balloons, fresh florals, fairy lights, LED neon and high-quality props \u2014 all sourced and styled by our own team." },
];

export const WHY_CHOOSE = [
  { title: "12,500+ Happy Celebrations", desc: "A decade of memorable moments delivered across India." },
  { title: "Same Day Setup", desc: "Last-minute plans? Our team mobilises within hours." },
  { title: "Professional Decor Team", desc: "Trained, in-house decorators \u2014 never random freelancers." },
  { title: "Affordable Packages", desc: "Transparent pricing from \u20B92,999 \u2014 no hidden charges." },
  { title: "Multi-City Service", desc: "Live in 7 cities \u2014 Kolkata to Mumbai, Delhi to Pune." },
  { title: "WhatsApp Booking Support", desc: "Instant quotes, real photos, 24/7 fast confirmations." },
  { title: "Premium Decoration Materials", desc: "Imported balloons, fresh florals, LED neon, designer props." },
  { title: "Trusted Event Experts", desc: "Featured on hundreds of celebrations every single month." },
];

export const TRUST_BADGES = [
  { label: "12,500+ Setups Done", icon: "Award" },
  { label: "4.9\u2605 Average Rating", icon: "Star" },
  { label: "100% On-Time Guarantee", icon: "ShieldCheck" },
  { label: "Same-Day Booking", icon: "Clock" },
  { label: "Premium Materials Only", icon: "Sparkles" },
  { label: "7 Cities, Pan India", icon: "MapPin" },
];

export type CityInfo = {
  name: string;
  slug: string;
  intro: string;
  areas: string[];
  venues: string[];
  popular: string[];
  startingPrice: number;
};

export const CITY_DATA: Record<string, CityInfo> = {
  kolkata: {
    name: "Kolkata", slug: "kolkata",
    intro: "Kolkata's most-booked decorators for birthdays, anniversaries, annaprashan and proposal surprises. Same-day setup across South Kolkata, Salt Lake and Howrah.",
    areas: ["Salt Lake", "New Town", "Park Street", "Ballygunge", "Behala", "Jadavpur", "Howrah", "Garia", "Lake Town", "Tollygunge"],
    venues: ["The Park Kolkata", "ITC Sonar", "Taj Bengal", "Westin Rajarhat", "Novotel Kolkata", "Banquet halls across Salt Lake & EM Bypass"],
    popular: ["birthday-decoration", "anniversary-decoration", "rice-ceremony-decoration", "romantic-bedroom-decoration"],
    startingPrice: 2999,
  },
  siliguri: {
    name: "Siliguri", slug: "siliguri",
    intro: "North Bengal's most-loved decoration brand. We cover Siliguri, Sevoke Road, Matigara and nearby hotels and banquet halls.",
    areas: ["Sevoke Road", "Hill Cart Road", "Matigara", "Pradhan Nagar", "Bagdogra", "Salugara", "Champasari"],
    venues: ["Mainak Tourist Lodge", "Sinclairs Siliguri", "Cygnett Park Asia", "Sourav Banquet", "Vishal Banquet"],
    popular: ["birthday-decoration", "welcome-baby-decoration", "anniversary-decoration", "haldi-decoration"],
    startingPrice: 2999,
  },
  delhi: {
    name: "Delhi", slug: "delhi",
    intro: "Premium decorators in Delhi NCR. We set up across South Delhi, Gurgaon, Noida, Dwarka and Greater Noida \u2014 with same-day delivery in most pin codes.",
    areas: ["South Delhi", "Saket", "Dwarka", "Rohini", "Karol Bagh", "Pitampura", "Gurgaon", "Noida", "Greater Noida", "Faridabad"],
    venues: ["The Lalit", "Taj Palace Delhi", "JW Marriott Aerocity", "Roseate House", "Banquets across Gurgaon Sector 29"],
    popular: ["proposal-decoration", "anniversary-decoration", "birthday-decoration", "engagement-decoration"],
    startingPrice: 2999,
  },
  mumbai: {
    name: "Mumbai", slug: "mumbai",
    intro: "Mumbai's go-to decorators for surprise proposals, anniversary room decor and themed birthday parties. We cover the entire MMR.",
    areas: ["Andheri", "Bandra", "Juhu", "Powai", "Worli", "Lower Parel", "Thane", "Navi Mumbai", "Borivali", "Malad"],
    venues: ["The Taj Mahal Palace", "Sofitel BKC", "JW Marriott Juhu", "The St. Regis", "Banquets across Andheri & Powai"],
    popular: ["proposal-decoration", "romantic-bedroom-decoration", "bachelorette-decoration", "birthday-decoration"],
    startingPrice: 2999,
  },
  bengaluru: {
    name: "Bengaluru", slug: "bengaluru",
    intro: "Bengaluru's premium decoration partner for birthdays, anniversaries and baby showers. Coverage across all major tech corridors.",
    areas: ["Indiranagar", "Koramangala", "HSR Layout", "Whitefield", "Marathahalli", "Electronic City", "Jayanagar", "JP Nagar", "Hebbal", "Sarjapur Road"],
    venues: ["The Leela Palace", "ITC Gardenia", "JW Marriott Bengaluru", "Sheraton Grand Whitefield", "Banquets across ORR"],
    popular: ["birthday-decoration", "baby-shower-decoration", "anniversary-decoration", "kids-theme-decoration"],
    startingPrice: 2999,
  },
  hyderabad: {
    name: "Hyderabad", slug: "hyderabad",
    intro: "Premium decorators in Hyderabad and Secunderabad. We deliver birthday, baby shower, haldi and proposal setups across Gachibowli, Hitech City and beyond.",
    areas: ["Gachibowli", "Hitech City", "Madhapur", "Kondapur", "Banjara Hills", "Jubilee Hills", "Secunderabad", "Kukatpally", "Begumpet", "Manikonda"],
    venues: ["Park Hyatt", "ITC Kohenur", "Trident Hyderabad", "Marriott Hyderabad", "Banquets across Banjara Hills"],
    popular: ["baby-shower-decoration", "haldi-decoration", "engagement-decoration", "birthday-decoration"],
    startingPrice: 2999,
  },
  pune: {
    name: "Pune", slug: "pune",
    intro: "Pune's trusted decorators for celebrations across Kothrud, Baner, Wakad, Hinjewadi and Koregaon Park. Premium decor, same-day setup.",
    areas: ["Koregaon Park", "Baner", "Wakad", "Hinjewadi", "Kothrud", "Aundh", "Viman Nagar", "Magarpatta", "Kharadi", "Hadapsar"],
    venues: ["JW Marriott Pune", "The Westin", "Conrad Pune", "Hyatt Regency", "Banquets across Baner & Kharadi"],
    popular: ["romantic-bedroom-decoration", "mehendi-decoration", "anniversary-decoration", "birthday-decoration"],
    startingPrice: 2999,
  },
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  readTime: string;
  category: string;
  content: { heading?: string; body: string }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "best-birthday-decoration-ideas-2026",
    title: "12 Best Birthday Decoration Ideas at Home in 2026",
    excerpt: "Balloon arches, LED backdrops, themed photo corners and more \u2014 the most-loved birthday decoration ideas this year.",
    cover: img(BALLOON_DECOR[0], 1600),
    date: "2026-04-12", readTime: "6 min read", category: "Birthday",
    content: [
      { body: "Planning a birthday celebration in 2026? The biggest shift this year is away from disposable streamers and toward photo-first installations that look incredible on camera. Here are the 12 birthday decoration ideas our Decorza Events team has booked most often this season." },
      { heading: "1. Pastel balloon arches with chrome accents", body: "Soft pinks, mints and lilacs paired with metallic gold or rose-gold create a luxury look without crossing into kitsch. Perfect for milestone birthdays from 18 to 50." },
      { heading: "2. LED neon name signs", body: "Custom LED neon with the birthday person's name has become a Decorza signature. Pairs beautifully with a balloon cloud backdrop and works for adults and kids alike." },
      { heading: "3. Themed photo corners", body: "Instead of decorating the entire room, invest in one Instagram-worthy corner with fresh florals, fairy lights and a custom backdrop. Your guests' phones will do the marketing for you." },
      { heading: "Same-day booking", body: "All of these setups are available across Kolkata, Mumbai, Delhi, Bengaluru, Hyderabad, Pune and Siliguri \u2014 with same-day booking subject to slot availability. WhatsApp our team on +91 86378 70742 for instant quotes." },
    ],
  },
  {
    slug: "anniversary-surprise-decoration-guide",
    title: "The Complete Anniversary Surprise Decoration Guide",
    excerpt: "Rose petal beds, candle paths, balloon canopies — how to plan an anniversary surprise that actually feels magical.",
    cover: img(ROMANTIC_DECOR[0], 1600),
    date: "2026-03-28", readTime: "5 min read", category: "Anniversary",
    content: [
      { body: "An anniversary surprise lives or dies in the first ten seconds \u2014 the moment your partner opens the door. Here's how our team plans setups that land that moment every time." },
      { heading: "Lead with lighting", body: "Switch off the main lights. Use only fairy lights, candles and ambient LED. The drop in brightness instantly signals 'this is special'." },
      { heading: "Build a clear focal point", body: "A balloon canopy over the bed, a candle path leading to a sweetheart corner, or a personalised photo wall \u2014 pick ONE hero element and let everything else support it." },
      { heading: "Personalise it", body: "Custom name signs, photos from your relationship and song lyrics on the wall transform a generic setup into a moment that's unmistakably yours." },
    ],
  },
  {
    slug: "how-to-plan-baby-shower-at-home",
    title: "How to Plan a Beautiful Baby Shower at Home",
    excerpt: "From pastel themes to floral installations \u2014 a step-by-step planning checklist for the perfect baby shower.",
    cover: img(BABY_DECOR[0], 1600),
    date: "2026-03-15", readTime: "7 min read", category: "Baby Shower",
    content: [
      { body: "Home baby showers have officially overtaken banquet halls as the format of choice. They're more intimate, more photogenic, and far easier on the mommy-to-be. Here's the Decorza Events playbook." },
      { heading: "Pick a soft, cohesive palette", body: "Pastel pinks, sage greens, peach and dusty blue all photograph beautifully. Avoid pure white \u2014 it washes out in indoor lighting." },
      { heading: "Plan one feature wall", body: "A balloon arch with fresh florals against one wall is the centerpiece. Everything else \u2014 dessert table, gift corner \u2014 plays a supporting role." },
      { heading: "Don't forget the cradle / belly corner", body: "A dedicated photo corner for the mom-to-be with personalised signage is the single most-requested element in 2026." },
    ],
  },
];

export function packagesForCategory(slug: string) {
  return PACKAGES.filter((p) => p.categorySlug === slug);
}

export function categoryBySlug(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function packageById(id: string) {
  return PACKAGES.find((p) => p.id === id);
}

export function blogBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function cityBySlug(slug: string): CityInfo | undefined {
  return CITY_DATA[slug.toLowerCase()];
}
