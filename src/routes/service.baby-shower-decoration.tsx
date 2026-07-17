import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Phone, CalendarCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ReviewCard } from "@/components/site/ReviewCard";
import { Faq } from "@/components/site/Faq";
import { StaticPackageCard } from "@/components/site/StaticPackageCard";
import { BRAND, waLink, waBookingMessage } from "@/lib/brand";
import { categoryBySlug, REVIEWS } from "@/lib/data";
import babyB1 from "@/assets/baby-b1.jpg.asset.json";
import babyB2 from "@/assets/baby-b2.jpg.asset.json";
import babyB3 from "@/assets/baby-b3.jpg.asset.json";
import babyB4 from "@/assets/baby-b4.jpg.asset.json";
import babyB5 from "@/assets/baby-b5.jpg.asset.json";
import babyB6 from "@/assets/baby-b6.jpg.asset.json";
import babyB7 from "@/assets/baby-b7.jpg.asset.json";
import babyB8 from "@/assets/baby-b8.jpg.asset.json";
import babyB9 from "@/assets/baby-b9.jpg.asset.json";
import babyB10 from "@/assets/baby-b10.jpg.asset.json";
import babyC1 from "@/assets/baby-c1.jpg.asset.json";
import babyC2 from "@/assets/baby-c2.jpg.asset.json";
import babyC3 from "@/assets/baby-c3.jpg.asset.json";
import babyC4 from "@/assets/baby-c4.jpg.asset.json";
import babyC5 from "@/assets/baby-c5.jpg.asset.json";
import babyC6 from "@/assets/baby-c6.jpg.asset.json";
import babyC7 from "@/assets/baby-c7.jpg.asset.json";
import babyC8 from "@/assets/baby-c8.jpg.asset.json";
import babyC9 from "@/assets/baby-c9.jpg.asset.json";
import babyC10 from "@/assets/baby-c10.jpg.asset.json";
import babyD1 from "@/assets/baby-d1.jpg.asset.json";
import babyD2 from "@/assets/baby-d2.jpg.asset.json";
import babyD3 from "@/assets/baby-d3.jpg.asset.json";
import babyD4 from "@/assets/baby-d4.jpg.asset.json";
import babyD5 from "@/assets/baby-d5.jpg.asset.json";
import babyE1 from "@/assets/baby-e1.jpg.asset.json";
import babyE2 from "@/assets/baby-e2.jpg.asset.json";
import babyE3 from "@/assets/baby-e3.jpg.asset.json";
import babyE4 from "@/assets/baby-e4.jpg.asset.json";
import babyE5 from "@/assets/baby-e5.jpg.asset.json";
import babyE6 from "@/assets/baby-e6.jpg.asset.json";
import babyE7 from "@/assets/baby-e7.jpg.asset.json";
import babyE8 from "@/assets/baby-e8.jpg.asset.json";
import babyE9 from "@/assets/baby-e9.jpg.asset.json";
import babyE10 from "@/assets/baby-e10.jpg.asset.json";
import babyF1 from "@/assets/baby-f1.jpg.asset.json";
import babyF2 from "@/assets/baby-f2.jpg.asset.json";
import babyF3 from "@/assets/baby-f3.jpg.asset.json";
import babyF4 from "@/assets/baby-f4.jpg.asset.json";
import babyF5 from "@/assets/baby-f5.jpg.asset.json";
import babyG1 from "@/assets/baby-g1.png.asset.json";
import babyG2 from "@/assets/baby-g2.webp.asset.json";
import babyG3 from "@/assets/baby-g3.png.asset.json";
import babyG4 from "@/assets/baby-g4.jpg.asset.json";
import babyG5 from "@/assets/baby-g5.jpg.asset.json";
import babyG6 from "@/assets/baby-g6.jpg.asset.json";
import babyG7 from "@/assets/baby-g7.png.asset.json";
import babyG8 from "@/assets/baby-g8.png.asset.json";
import babyG9 from "@/assets/baby-g9.png.asset.json";
import babyG10 from "@/assets/baby-g10.png.asset.json";
import babyH1 from "@/assets/baby-h1.png.asset.json";
import babyH2 from "@/assets/baby-h2.jpeg.asset.json";
import babyH3 from "@/assets/baby-h3.png.asset.json";
import babyI1 from "@/assets/baby-i1.jpg.asset.json";
import babyI2 from "@/assets/baby-i2.jpg.asset.json";
import babyI3 from "@/assets/baby-i3.jpg.asset.json";
import babyI4 from "@/assets/baby-i4.jpg.asset.json";
import babyI5 from "@/assets/baby-i5.jpg.asset.json";
import babyI6 from "@/assets/baby-i6.jpg.asset.json";
import babyI7 from "@/assets/baby-i7.jpg.asset.json";
import babyI8 from "@/assets/baby-i8.jpg.asset.json";
import babyI9 from "@/assets/baby-i9.jpg.asset.json";
import babyI10 from "@/assets/baby-i10.jpg.asset.json";
import babyJ1 from "@/assets/baby-j1.jpeg.asset.json";
import babyJ2 from "@/assets/baby-j2.jpeg.asset.json";
import babyJ3 from "@/assets/baby-j3.jpeg.asset.json";
import babyJ4 from "@/assets/baby-j4.jpeg.asset.json";
import babyJ5 from "@/assets/baby-j5.jpeg.asset.json";
import babyJ6 from "@/assets/baby-j6.jpeg.asset.json";
import babyJ7 from "@/assets/baby-j7.jpeg.asset.json";
import babyJ8 from "@/assets/baby-j8.jpeg.asset.json";
import babyJ9 from "@/assets/baby-j9.jpeg.asset.json";
import babyJ10 from "@/assets/baby-j10.jpeg.asset.json";
import babyK1 from "@/assets/baby-k1.jpeg.asset.json";
import babyK2 from "@/assets/baby-k2.jpeg.asset.json";
import babyK3 from "@/assets/baby-k3.jpeg.asset.json";
import babyK4 from "@/assets/baby-k4.jpeg.asset.json";
import babyK5 from "@/assets/baby-k5.jpeg.asset.json";
import babyK6 from "@/assets/baby-k6.jpeg.asset.json";
import babyK7 from "@/assets/baby-k7.jpeg.asset.json";
import babyK8 from "@/assets/baby-k8.png.asset.json";
import babyK9 from "@/assets/baby-k9.jpeg.asset.json";
import babyK10 from "@/assets/baby-k10.jpeg.asset.json";

export const Route = createFileRoute("/service/baby-shower-decoration")({
  loader: () => {
    const c = categoryBySlug("baby-shower-decoration");
    if (!c) throw notFound();
    return { category: c };
  },
  head: () => ({
    meta: [
      { title: `Baby Shower Decoration in India | From ₹1,999 | Decorza Events` },
      { name: "description", content: `Pastel balloon arches, floral backdrops and elegant baby shower setups for the mommy-to-be. Book on WhatsApp.` },
      { property: "og:title", content: `Baby Shower Decoration | Decorza Events` },
      { property: "og:image", content: "/2f34d637-44bd-46dd-8753-d31930cc31b6.jpg" },
    ],
    links: [{ rel: "canonical", href: "/service/baby-shower-decoration" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  const { category: c } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({ packageName: "Baby Shower Decoration" }));
  const reviews = REVIEWS.filter(([, , s]) => (s as string) === "Baby Shower Decoration").slice(0, 6);
  const displayReviews = reviews.length ? reviews : REVIEWS.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/2f34d637-44bd-46dd-8753-d31930cc31b6.jpg" alt="Baby Shower Decoration" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.08_305)]/90 to-[oklch(0.32_0.13_5)]/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <Badge className="bg-white/10 backdrop-blur border border-white/20 text-white">
            <Star className="mr-1 h-3 w-3 fill-gold text-gold" /> 4.9 · 870 reviews
          </Badge>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">Baby Shower Decoration</h1>
          <p className="mt-4 max-w-2xl text-white/85">Pastel balloon arches, floral backdrops and elegant baby shower setups for the mommy-to-be.</p>
          <p className="mt-4 font-display text-2xl text-gold">Starting from ₹1,999</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-whatsapp hover:opacity-90 text-white">
              <a href={wa} target="_blank" rel="noopener"><Phone className="mr-2 h-4 w-4" />Book on WhatsApp</a>
            </Button>
            <Button asChild size="lg" className="bg-gold text-[oklch(0.18_0.05_305)] hover:opacity-90">
              <Link to="/book"><CalendarCheck className="mr-2 h-4 w-4" />Book Online</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Packages" title="Baby Shower Decoration Packages" subtitle="Pick from Essential, Premium and Luxury — or customise on WhatsApp." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <StaticPackageCard
            id="baby-shower-decoration-essential"
            name="Essential Baby Shower Decoration"
            description="A clean, photo-ready baby shower decoration setup with a designer backdrop, themed props and warm lighting — exactly as shown in the picture."
            image="/2f34d637-44bd-46dd-8753-d31930cc31b6.jpg"
            includes={["✓\n Designer backdrop  ","Themed props & signage","Standard lighting setup"]}
            rating={4.800000000000001}
            reviews={249}
            offer={<>₹3499</>}
            original={<>₹4999</>}
            discountPct={30}
            bestSeller={false}
          />
          <StaticPackageCard
            id="baby-shower-decoration-premium"
            name="Premium Baby Shower Decoration"
            description="An upgraded baby shower decoration with a premium artificial flower arch, draped cloth backdrop, fresh floral accents and ambient fairy lights — styled like the reference photo."
            image="/38135b41-25f2-4c2f-a08f-cac6575c3b12.jpg"
            includes={[" \nPremium artificial flower ","✓\nPremium cloth & light setup","Fresh flower accents"]}
            rating={4.9}
            reviews={348}
            offer={<>₹7,999</>}
            original={<>₹14999</>}
            discountPct={47}
            bestSeller={true}
          />
          <StaticPackageCard
            id="baby-shower-decoration-luxury"
            name="Luxury Baby Shower Decoration"
            description="A full luxury baby shower decoration experience with a grand floral installation, sweetheart lounge seating, drapes and props — recreated to match the photo."
            image="/6fec18e9-7b78-42b6-9764-cbb3037878e1.jpg"
            includes={["Luxury floral installation","Customised stage / sweetheart corner","✓\nLight and props"]}
            rating={4.800000000000001}
            reviews={580}
            offer={<>₹11999</>}
            original={<>15999</>}
            discountPct={25}
            bestSeller={false}
          />
          <StaticPackageCard
            id="baby-b1"
            name="Pastel Pampas Ring Baby Shower"
            description="A dreamy circular baby shower ring in pastel pink, lilac and baby blue balloons, accented with pampas grass, gold dried palms and a shimmering 'Baby Shower' signage — recreated as shown."
            image={babyB1.url}
            includes={["Pastel pink, lilac & blue balloon ring","Pampas & dried palm florals","'Baby Shower' gold cutout signage"]}
            rating={4.9}
            reviews={214}
            offer={<>₹3,499</>}
            original={<>₹4,999</>}
            discountPct={30}
            bestSeller={false}
          />
          <StaticPackageCard
            id="baby-b2"
            name="Boy or Girl Neon Ring Baby Shower"
            description="A gender-neutral round backdrop with pink & baby-blue balloon garland, chrome copper accents, foil baby figures, neon 'Baby Shower' sign, 'Baby' blocks and 'It's a Boy/Girl' bottle balloons."
            image={babyB2.url}
            includes={["Pink & blue balloon ring backdrop","Neon 'Baby Shower' sign","Foil baby & bottle balloons + BABY blocks"]}
            rating={4.9}
            reviews={302}
            offer={<>₹3,499</>}
            original={<>₹4,999</>}
            discountPct={30}
            bestSeller={true}
          />
          <StaticPackageCard
            id="baby-b3"
            name="Blush Pink Arch Custom Name Baby Shower"
            description="An elegant white arched backdrop personalised with the mommy-to-be's name in gold, dressed with a lush blush & nude organic balloon garland and fresh-look pink roses & hydrangeas."
            image={babyB3.url}
            includes={["Personalised name on white arch","Blush & nude organic balloon garland","Rose & hydrangea floral clusters"]}
            rating={4.9}
            reviews={188}
            offer={<>₹4,999</>}
            original={<>₹6,999</>}
            discountPct={29}
            bestSeller={false}
          />
          <StaticPackageCard
            id="baby-b4"
            name="Baby in Bloom Floral Garden Baby Shower"
            description="A luxury 'Baby in Bloom' twin-arch setup with a floral wall, pastel rainbow balloon garland and grand floral bases in pink, sage, yellow and lilac — a full garden-themed baby shower experience."
            image={babyB4.url}
            includes={["Twin white arches with 'Baby in Bloom' signage","Floral wall + pastel balloon garland","Grand ground floral bases"]}
            rating={5.0}
            reviews={126}
            offer={<>₹11,999</>}
            original={<>₹14,999</>}
            discountPct={20}
            bestSeller={true}
          />
          <StaticPackageCard
            id="baby-b5"
            name="Neon 'Baby Shower' Pink & White Ring"
            description="A round ring backdrop with pastel pink & white balloons, gold chrome cluster accents, foil baby boy/girl balloons, 'It's a Boy' & 'It's a Girl' props and a warm-glow neon 'Baby Shower' centrepiece."
            image={babyB5.url}
            includes={["Pink, white & gold chrome balloon ring","Foil baby + 'It's a Boy/Girl' props","Neon 'Baby Shower' sign"]}
            rating={4.9}
            reviews={264}
            offer={<>₹3,499</>}
            original={<>₹4,999</>}
            discountPct={30}
            bestSeller={false}
          />
          <StaticPackageCard
            id="baby-b6"
            name="Mommy-to-Be 'Cuter' Banquet Baby Shower"
            description="A grand hotel-style baby shower with twin white arched panels showing a mommy-to-be silhouette and 'Our Family is About to Get Even Cuter' — dressed with gold chrome, mauve, ivory & peach balloons and floral accents."
            image={babyB6.url}
            includes={["Twin custom arched panels","Gold, mauve & peach organic balloon garland","Floral accents + pillar"]}
            rating={5.0}
            reviews={148}
            offer={<>₹9,999</>}
            original={<>₹14,999</>}
            discountPct={33}
            bestSeller={true}
          />
          <StaticPackageCard
            id="baby-b7"
            name="Oh Baby Foil & Tassel Baby Shower"
            description="A quick, budget-friendly baby shower setup with pink & blue balloon garland, pink & blue tassel curtains, silver 'OH BABY' foil letters, bottle & moon-baby foil balloons and fairy-light backdrop."
            image={babyB7.url}
            includes={["Pink & blue balloon garland with foil stars","Silver 'OH BABY' foil letters","Tassel curtain + fairy lights"]}
            rating={4.8}
            reviews={412}
            offer={<>₹1,999</>}
            original={<>₹2,999</>}
            discountPct={33}
            bestSeller={false}
          />
          <StaticPackageCard
            id="baby-b8"
            name="Baby in Bloom Nude Arch Outdoor"
            description="An outdoor-ready 'Baby in Bloom' setup with a white arched backdrop, nude, blush & white organic balloon garland, greenery & pink florals and a transparent BABY block tower on the side."
            image={babyB8.url}
            includes={["'Baby in Bloom' white arch backdrop","Nude & blush organic balloon garland","BABY transparent block tower"]}
            rating={4.9}
            reviews={176}
            offer={<>₹4,999</>}
            original={<>₹6,999</>}
            discountPct={29}
            bestSeller={false}
          />
          <StaticPackageCard
            id="baby-b9"
            name="Sage & Gold 'Oh Baby' Balloon Wreath"
            description="A stunning full-round balloon wreath in sage green, ivory white and mirror-gold chrome with tropical monstera & palm leaves, centred by a glowing 'Oh Baby' neon sign — nature meets luxury."
            image={babyB9.url}
            includes={["Sage, ivory & chrome-gold balloon wreath","Monstera & palm leaf accents","'Oh Baby' neon centrepiece"]}
            rating={5.0}
            reviews={132}
            offer={<>₹3,499</>}
            original={<>₹4,999</>}
            discountPct={30}
            bestSeller={false}
          />
          <StaticPackageCard
            id="baby-b10"
            name="'Bearly Wait' Teddy Baby Shower Grand"
            description="A grand luxury 'We Can Bearly Wait / Baby in Bloom' teddy-themed baby shower with dual custom prints, rainbow pastel & gold chrome balloon arch, giant teddy bear, BABY box tower and floral wall backdrop."
            image={babyB10.url}
            includes={["Dual custom 'Bearly Wait / Baby in Bloom' prints","Pastel rainbow + gold chrome balloon arch","Giant teddy + BABY block tower + floral wall"]}
            rating={5.0}
            reviews={98}
            offer={<>₹12,999</>}
            original={<>₹17,999</>}
            discountPct={28}
            bestSeller={true}
          />
          <StaticPackageCard
            id="baby-c1"
            name="Lilac, Pink & Rose-Gold 'Little Miss' Arch"
            description="A dreamy pastel lilac, blush pink and rose-gold chrome balloon garland cascading over a curved lilac arch with custom name print, floral accents and a matching cake pedestal setup."
            image={babyC1.url}
            includes={["Custom lilac curved arch with name print","Lilac, pink & rose-gold chrome balloon garland","Floral accents + acrylic cake pedestal"]}
            rating={4.9} reviews={132}
            offer={<>₹4,999</>} original={<>₹6,999</>} discountPct={29}
          />
          <StaticPackageCard
            id="baby-c2"
            name="'Baby in Bloom' Peach & Cream Rooftop Arch"
            description="An elegant outdoor 'Baby in Bloom' arch in peach, cream and ivory pastels with fresh floral tucks, a curved ivory backdrop and BABY box tower — perfect for a rooftop or garden baby shower."
            image={babyC2.url}
            includes={["Curved ivory 'Baby in Bloom' backdrop","Peach, nude & white organic garland","Fresh floral tucks + BABY block tower"]}
            rating={4.9} reviews={118}
            offer={<>₹4,499</>} original={<>₹5,999</>} discountPct={25}
          />
          <StaticPackageCard
            id="baby-c3"
            name="'Boy or Girl' Gender Reveal Grand Banquet Stage"
            description="A grand banquet-hall gender reveal setup with dual blue & pink foot-print backdrops, gold-pink-blue balloon arches, shimmer wall, 'It's a Boy/Girl' bottle pillars, foil baby figures and neon 'Baby Shower' sign."
            image={babyC3.url}
            includes={["Dual blue & pink 'Boy or Girl' arch backdrops","Shimmer wall + neon 'Baby Shower' sign","'It's a Boy/Girl' bottle pillars + foil baby cutouts"]}
            rating={5.0} reviews={104}
            offer={<>₹14,999</>} original={<>₹24,999</>} discountPct={40}
            bestSeller
          />
          <StaticPackageCard
            id="baby-c4"
            name="'Oh Baby' Pink, Blue & Gold Balloon Ring"
            description="A cheerful pastel pink, baby blue and gold chrome balloon ring with a neon 'Oh Baby' sign, twin baby foil balloons and a light-up BABY block tower — ideal for restaurant or hall baby showers."
            image={babyC4.url}
            includes={["Pink, blue & gold balloon ring backdrop","Neon 'Oh Baby' sign + twin baby foil balloons","Light-up BABY block tower"]}
            rating={4.8} reviews={96}
            offer={<>₹3,499</>} original={<>₹4,999</>} discountPct={30}
          />
          <StaticPackageCard
            id="baby-c5"
            name="'Oh Baby' Nude, White & Gold Butterfly Ring"
            description="A soft nude, white and gold chrome balloon ring on a wall panel with a neon 'Oh Baby' sign, delicate gold butterflies and two baby foil pillars for a boutique in-home baby shower look."
            image={babyC5.url}
            includes={["Nude, white & gold chrome balloon ring","Neon 'Oh Baby' sign + gold butterfly accents","Twin baby foil balloon pillars"]}
            rating={4.9} reviews={87}
            offer={<>₹3,499</>} original={<>₹4,999</>} discountPct={30}
          />
          <StaticPackageCard
            id="baby-c6"
            name="Mauve, Rose & Blush Custom Name Baby Shower"
            description="A luxurious dusty rose, mauve chrome and blush pastel balloon garland framing a fluted white arch with custom 'Baby Shower' name print, lush pink & mauve florals and matching side column."
            image={babyC6.url}
            includes={["Fluted white arch with custom name print","Mauve, dusty rose & blush balloon garland","Fresh rose & eucalyptus floral cluster"]}
            rating={4.9} reviews={128}
            offer={<>₹4,999</>} original={<>₹6,999</>} discountPct={29}
          />
          <StaticPackageCard
            id="baby-c7"
            name="'Oh Baby' Boho Nude, Brown & Pampas Arch"
            description="A boho baby shower with a nude ivory curved arch, chocolate brown, cream and white organic balloon garland, dry pampas plumes and matching floor cluster — earthy, minimal and photo-perfect."
            image={babyC7.url}
            includes={["Nude ivory curved 'Oh Baby' arch","Brown, cream & white organic garland","Dry pampas plumes + floor cluster"]}
            rating={4.9} reviews={102}
            offer={<>₹4,499</>} original={<>₹5,999</>} discountPct={25}
          />
          <StaticPackageCard
            id="baby-c8"
            name="'Twinkle Twinkle Little Star' Gold & Ivory Arch"
            description="A warm 'Twinkle Twinkle Little Star' baby shower featuring a blush arch with custom quote print, gold chrome, ivory and mocha balloon garland, giant teddy bear and cozy chair styling."
            image={babyC8.url}
            includes={["Blush arch with 'Twinkle Twinkle' print","Gold chrome, ivory & mocha balloon garland","Giant teddy bear + chair styling"]}
            rating={4.9} reviews={116}
            offer={<>₹4,499</>} original={<>₹5,999</>} discountPct={25}
          />
          <StaticPackageCard
            id="baby-c9"
            name="'Our Little Bundle of Joy' Rose-Gold Luxury Arch"
            description="An outdoor luxury baby shower with dual lilac & white arches, ivory, nude and rose-gold chrome balloon garland, giant teddy bear, BABY block tower and fluted white pedestal under fairy lights."
            image={babyC9.url}
            includes={["Dual lilac & white 'Bundle of Joy' arches","Rose-gold, ivory & nude balloon garland","Giant teddy + BABY tower + fluted pedestal"]}
            rating={5.0} reviews={94}
            offer={<>₹8,999</>} original={<>₹14,999</>} discountPct={40}
            bestSeller
          />
          <StaticPackageCard
            id="baby-c10"
            name="'A Little Butterfly is on Her Way' Pastel Arch"
            description="A whimsical pastel pink and lilac butterfly-theme baby shower with custom quote arch, daisy foil flowers, neon butterfly light, bubble balloons, elephant cutout and BABY block tower."
            image={babyC10.url}
            includes={["Custom 'A Little Butterfly' quote arch","Pastel pink & lilac garland with daisy foils","Neon butterfly + BABY tower + elephant cutout"]}
            rating={5.0} reviews={109}
            offer={<>₹5,999</>} original={<>₹8,999</>} discountPct={33}
          />
          <StaticPackageCard
            id="baby-d1" name="Bundle of Joy Blue & Gold Baby Boy Arch"
            description="Elegant white arch with blue, ivory and chrome-gold balloon garland, palm spear leaves, giant teddy and BABY blocks — perfect for a baby boy shower."
            image={babyD1.url}
            includes={["Custom 'Bundle of Joy' printed arch backdrop","Blue, ivory & chrome-gold organic garland","Palm-spear leaves + BABY blocks + teddy prop"]}
            rating={5.0} reviews={132}
            offer={<>₹5,999</>} original={<>₹7,999</>} discountPct={25}
          />
          <StaticPackageCard
            id="baby-d2" name="Oh Baby Gender Reveal Pink & Blue Setup"
            description="Playful 'OH BABY' gold foil wall with pink & blue pastel garland, daisy foils, BOY/GIRL blocks and It's a Boy/Girl foot balloons — ideal for a gender reveal."
            image={babyD2.url}
            includes={["Gold 'OH BABY' foil letters with star balloons","Pink & blue pastel garland + gold confetti balloons","BOY & GIRL blocks + feet foil balloons"]}
            rating={4.9} reviews={98}
            offer={<>₹2,499</>} original={<>₹3,499</>} discountPct={29}
          />
          <StaticPackageCard
            id="baby-d3" name="Oh Baby Blue Neon Ring with Teddy Bears"
            description="Dreamy round ring backdrop in dusty blue, nude and chrome gold with pampas grass, big teddy bears and glowing 'Oh Baby' neon sign."
            image={babyD3.url}
            includes={["White ring stand with 'Oh Baby' neon sign","Dusty blue, nude & chrome gold balloon garland","Pampas grass + jumbo teddy bear props"]}
            rating={5.0} reviews={121}
            offer={<>₹4,499</>} original={<>₹5,999</>} discountPct={25}
          />
          <StaticPackageCard
            id="baby-d4" name="Oh Baby Pastel Rainbow Ring Baby Shower"
            description="Sage, blush, peach and silver chrome balloon garland on a white round backdrop with 'Oh Baby' gold script, floral accents and teddy prop."
            image={babyD4.url}
            includes={["Round white backdrop with 'Oh Baby' gold script","Sage, blush, peach & silver chrome garland","Pink fillers + gold table + teddy prop"]}
            rating={4.9} reviews={104}
            offer={<>₹4,999</>} original={<>₹6,999</>} discountPct={29}
          />
          <StaticPackageCard
            id="baby-d5" name="A Little Butterfly Purple Grand Baby Shower"
            description="Luxury triple arch backdrop in lilac & purple with 'A Little Butterfly Is On The Way' and 'Boy? or Girl?' printed panels, silver butterflies and BABY blocks."
            image={babyD5.url}
            includes={["3-panel 'Little Butterfly' printed arch backdrop","Lilac, purple, white & silver chrome garland","Silver butterfly cutouts + BABY block boxes + carpet"]}
            rating={5.0} reviews={87} bestSeller
            offer={<>₹16,999</>} original={<>₹24,999</>} discountPct={32}
          />
          <StaticPackageCard
            id="baby-e1" name="Black & Gold 'Baby Shower' Balloon Arch"
            description="Bold black, gold and silver balloon arch with silver foil curtain, gold 'BABY SHOWER' foil letters, It's a Boy / It's a Girl feet balloons and baby foil — a classy statement setup for home."
            image={babyE1.url}
            includes={["Black, gold & silver double balloon arch","Silver foil curtain backdrop with gold 'BABY SHOWER' letters","Baby, bottle & 'It's a Boy/Girl' foot foils"]}
            rating={4.9} reviews={72}
            offer={<>₹1,999</>} original={<>₹2,999</>} discountPct={33}
          />
          <StaticPackageCard
            id="baby-e2" name="Oh Baby Pink, Blue & Gold Teddy Baby Shower"
            description="Dreamy 'Oh Baby' neon backdrop with soft tulle curtain fairy lights, pink & blue balloon garland, gold moon & star foils, jumbo teddy bear and BABY letter blocks."
            image={babyE2.url}
            includes={["White tulle drape with fairy lights & 'Oh Baby' neon","Pink, blue & chrome-gold organic balloon garland","Moon & star foils + BABY letter boxes + jumbo teddy"]}
            rating={5.0} reviews={118}
            offer={<>₹3,499</>} original={<>₹4,999</>} discountPct={30}
          />
          <StaticPackageCard
            id="baby-e3" name="'A Little Cutie is on the Way' Round Baby Shower"
            description="Elegant white round backdrop with 'A Little Cutie is on the Way' quote, pink & blue organic garland, palm spears, 'Oh Baby' neon light, BABY blocks and family photo frame."
            image={babyE3.url}
            includes={["Custom 'A Little Cutie' round quote backdrop","Pink, blue, white & gold chrome organic garland","Palm spears + BABY blocks + 'Oh Baby' neon + photo frame"]}
            rating={5.0} reviews={94}
            offer={<>₹4,999</>} original={<>₹6,999</>} discountPct={29}
          />
          <StaticPackageCard
            id="baby-e4" name="'Boy or Girl' Twin Arch Gender Reveal Grand"
            description="Grand banquet-style twin arch backdrop with 'Boy' in blue and 'girl' in pink, chrome-silver metallic balloon accents and a gold pedestal — the perfect gender reveal centrepiece."
            image={babyE4.url}
            includes={["Twin fabric arch backdrops with 'Boy' & 'girl' print","Blue & pink pastel garland with chrome-silver highlights","Gold pedestal + floral fillers + carpet setup"]}
            rating={5.0} reviews={81} bestSeller
            offer={<>₹7,999</>} original={<>₹11,999</>} discountPct={33}
          />
          <StaticPackageCard
            id="baby-e5" name="Purple 'Boy or Girl' Custom Name Baby Shower"
            description="Luxury lilac backdrop with 'Boy? or Girl?' and 'Our Little (Name) is on the way' custom panels, lilac-silver-white garland, baby-carriage foils and BABY block tower."
            image={babyE5.url}
            includes={["Custom 2-panel 'Boy or Girl' printed backdrop","Lilac, white & chrome-silver balloon garland","Baby carriage foils + BABY blocks + baby foil props"]}
            rating={5.0} reviews={76} bestSeller
            offer={<>₹7,999</>} original={<>₹11,999</>} discountPct={33}
          />
          <StaticPackageCard
            id="baby-e6" name="Pastel Rainbow 'Baby Shower' Arch Setup"
            description="Cheerful arched backdrop with 'Baby Shower' script, pastel mint, lilac, peach and silver garland, butterfly foils, flower clusters and It's a Boy / It's a Girl bottles."
            image={babyE6.url}
            includes={["Arch fabric backdrop with 'Baby Shower' script","Mint, lilac, peach & silver pastel balloon garland","Butterfly foils + flower clusters + bottle & feet foils"]}
            rating={4.9} reviews={88}
            offer={<>₹4,499</>} original={<>₹5,999</>} discountPct={25}
          />
          <StaticPackageCard
            id="baby-e7" name="Gold 'BABY SHOWER' Black Curtain Wall Setup"
            description="Compact wall setup with black tassel curtain, gold 'BABY SHOWER' foil letters, pastel blue-pink cloud garland, star foils, moon & baby-bottle foils."
            image={babyE7.url}
            includes={["Black shimmer tassel backdrop with gold 'BABY SHOWER' letters","Pastel blue & pink cloud garland with gold star foils","Moon, baby, bottle & feet foil balloons"]}
            rating={4.9} reviews={65}
            offer={<>₹2,199</>} original={<>₹3,499</>} discountPct={37}
          />
          <StaticPackageCard
            id="baby-e8" name="'Baby (Name) On The Way' Boho Banquet Arch"
            description="Elegant boho banquet arch with 'Baby (Name) On The Way' custom print, peach-white-gold chrome garland, daisy balloon flowers, giant clear bubble balloon and wooden BABY blocks."
            image={babyE8.url}
            includes={["Custom 'Baby Name On The Way' printed arch","Peach, white & chrome gold organic garland","Daisy fillers + BABY blocks + giant clear bubble prop"]}
            rating={5.0} reviews={102}
            offer={<>₹4,999</>} original={<>₹6,999</>} discountPct={29}
          />
          <StaticPackageCard
            id="baby-e9" name="'Welcoming Baby' Sage Green Luxury Arch"
            description="Boutique sage green, ivory and chrome-gold organic balloon garland on a fluted arch with custom 'Welcoming Baby (Name)' script, teddy bears, BABY crate blocks and hot-air balloon prop."
            image={babyE9.url}
            includes={["Fluted arch with 'Welcoming Baby Name' custom script","Sage green, ivory & chrome-gold organic garland","BABY wooden crates + teddy bears + hot-air balloon prop"]}
            rating={5.0} reviews={89} bestSeller
            offer={<>₹7,499</>} original={<>₹9,999</>} discountPct={25}
          />
          <StaticPackageCard
            id="baby-e10" name="'Mom to Be' Terracotta Outdoor Baby Shower"
            description="Outdoor round backdrop with 'Mom to Be' script and Boy/Girl feet print, rust terracotta, ivory, silver and gold chrome garland with gold palm spears — perfect for garden/lawn events."
            image={babyE10.url}
            includes={["Round backdrop with 'Mom to Be' custom print","Terracotta, ivory, silver & gold chrome garland","Gold palm spears + floral fillers + outdoor lighting"]}
            rating={4.9} reviews={78}
            offer={<>₹3,999</>} original={<>₹5,999</>} discountPct={33}
          />
          <StaticPackageCard
            id="baby-f1" name="'Oh Baby' Mint, Sky Blue & Gold Garden Arch"
            description="Fresh outdoor baby shower arch in mint, sky blue, white and chrome-gold balloons with an 'Oh Baby' neon sign, gold palm leaves and BABY letter boxes filled with pastel balloons — as shown in the picture."
            image={babyF1.url}
            includes={["Mint, sky blue, white & chrome-gold organic garland","'Oh Baby' neon sign + gold palm leaf accents","BABY letter blocks + cylinder pedestal styling"]}
            rating={4.9} reviews={112}
            offer={<>₹3,499</>} original={<>₹5,499</>} discountPct={36}
          />
          <StaticPackageCard
            id="baby-f2" name="'A Berry Sweet Baby is On The Way' Navy Arch"
            description="Elegant white chiara arch with 'A Berry Sweet Baby is On The Way' custom quote, navy, dusty blue, ivory & cream organic balloon garland and eucalyptus greenery — perfect indoor baby boy shower styling."
            image={babyF2.url}
            includes={["White chiara arch with custom 'Berry Sweet Baby' quote","Navy, dusty blue, ivory & cream organic garland","Eucalyptus greenery fillers + side balloon cluster"]}
            rating={5.0} reviews={96} bestSeller
            offer={<>₹4,499</>} original={<>₹5,999</>} discountPct={25}
          />
          <StaticPackageCard
            id="baby-f3" name="Pink & Blue 'Baby Shower' Foil Home Setup"
            description="Traditional home baby shower with a split pink & blue curtain wall, gold 'BABY SHOWER' foil letters, foil hearts and stars, and baby boy / baby girl foil pillars — recreated exactly like the reference."
            image={babyF3.url}
            includes={["Pink & blue split curtain backdrop","Gold 'BABY SHOWER' foil letters + heart & star foils","Baby boy + baby girl foil pillars with balloon columns"]}
            rating={4.8} reviews={148}
            offer={<>₹2,499</>} original={<>₹3,499</>} discountPct={29}
          />
          <StaticPackageCard
            id="baby-f4" name="Custom Name 'Babyshower' Blush Teddy Arch"
            description="Boutique blush pink arched backdrop with personalised '(Name)'s Babyshower' script in gold, blush, ivory, nude & taupe organic garland, cherry blossom branch and a giant teddy bear cut-out with cake pedestal."
            image={babyF4.url}
            includes={["Blush chiara arch with custom name in gold","Blush, ivory, nude & taupe organic balloon garland","Giant teddy bear cut-out + cake pedestal + cherry blossom"]}
            rating={5.0} reviews={132} bestSeller
            offer={<>₹4,999</>} original={<>₹6,999</>} discountPct={29}
          />
          <StaticPackageCard
            id="baby-f5" name="'Oh Baby' Pastel Rainbow Ring Teddy Setup"
            description="Dreamy pastel rainbow balloon ring with an 'Oh Baby' neon sign, giant teddy bear cut-out, pampas grass cluster and BABY letter boxes on a round jute rug — perfect for indoor lounge baby showers."
            image={babyF5.url}
            includes={["Pastel rainbow balloon ring with 'Oh Baby' neon","Giant teddy bear cut-out + BABY letter boxes","Pampas grass cluster + jute rug + pedestal styling"]}
            rating={4.9} reviews={104}
            offer={<>₹4,499</>} original={<>₹5,999</>} discountPct={25}
          />
          <StaticPackageCard
            id="baby-g1" name="'Baby in Bloom' Pastel Floral Arch"
            description="Charming pastel arched backdrop with 'Baby in Bloom' script, an organic garland of pink, sage green, butter yellow, mint and rose-gold chrome balloons, fresh floral tulip clusters and a matching pillar centrepiece."
            image={babyG1.url}
            includes={["Pink chiara arch with 'Baby in Bloom' script","Pastel + sage + rose-gold organic balloon garland","Floral tulip clusters + pedestal styling"]}
            rating={5.0} reviews={148} bestSeller
            offer={<>₹4,499</>} original={<>₹6,999</>} discountPct={36}
          />
          <StaticPackageCard
            id="baby-g2" name="'A Little Cutie is on the Way' Gender Reveal Arch"
            description="Elegant round pastel-gold backdrop with 'A Little Cutie is on the Way' script, pink & blue foot print decal, half-ring garland of pink, blue and rose-gold chrome balloons, BABY letter blocks and hanging photo memory strip."
            image={babyG2.url}
            includes={["Round pastel backdrop with custom script","Pink, blue & rose-gold chrome half-ring garland","BABY letter blocks + hanging photo memory strip"]}
            rating={4.9} reviews={126}
            offer={<>₹4,499</>} original={<>₹6,999</>} discountPct={36}
          />
          <StaticPackageCard
            id="baby-g3" name="'Oh Baby' Sage Green & Gold Baby Shower Ring"
            description="Statement ring backdrop wrapped in olive green, ivory and chrome gold balloons around an 'Oh Baby' neon sign with pram, bottle and footprint cutouts, twin baby foil pillars and a BABY letter block tower."
            image={babyG3.url}
            includes={["Ring backdrop with 'Oh Baby' neon + prop cluster","Olive, ivory & gold chrome garland with baby foils","Twin baby foil pillars + BABY letter blocks"]}
            rating={4.8} reviews={112}
            offer={<>₹3,999</>} original={<>₹5,999</>} discountPct={33}
          />
          <StaticPackageCard
            id="baby-g4" name="Classic 'Baby Shower' Pink & Blue Home Arch"
            description="Affordable home-style baby shower arch in pastel pink & baby blue balloons, gold 'BABY SHOWER' foil letters, 'Boy or Girl?' foil topper and 'It's a Boy' / 'It's a Girl' bottle foils with a decorated couch corner."
            image={babyG4.url}
            includes={["Pastel pink & blue balloon arch","'BABY SHOWER' gold foil letters","'Boy or Girl?' foil topper + boy/girl bottle foils"]}
            rating={4.7} reviews={168}
            offer={<>₹1,999</>} original={<>₹3,499</>} discountPct={43}
          />
          <StaticPackageCard
            id="baby-g5" name="'Baby Shower' Pastel Arch with Curtain Backdrop"
            description="Warm home baby shower arch with pink & blue pastel balloons, gold 'BABY SHOWER' foil, pink & blue tassel curtain wall, twin baby foils on top and matching 'It's a Boy' & 'It's a Girl' bottle foils on the pillars."
            image={babyG5.url}
            includes={["Pastel pink & blue balloon arch","'BABY SHOWER' gold foil + pink/blue tassel curtain","Twin baby foils + boy/girl bottle foils on pillars"]}
            rating={4.8} reviews={192}
            offer={<>₹2,199</>} original={<>₹3,499</>} discountPct={37}
          />
          <StaticPackageCard
            id="baby-g6" name="Pink & Blue Ring Baby Shower with 'Baby Shower' Neon"
            description="Trendy ring backdrop with pink & blue balloons and chrome gold cluster accents around a 'Baby Shower' neon sign, fairy-light net drape, 'It's a Girl' and 'Baby Boy' foils and a mint BABY letter block tower."
            image={babyG6.url}
            includes={["Pink & blue ring with gold chrome accents","'Baby Shower' neon + fairy-light net drape","'It's a Girl' + 'Baby Boy' foils + BABY blocks"]}
            rating={4.9} reviews={210} bestSeller
            offer={<>₹3,499</>} original={<>₹4,999</>} discountPct={30}
          />
          <StaticPackageCard
            id="baby-g7" name="'Oh Baby' Pink, White & Silver Chrome Ring"
            description="Photo-ready pink, white and silver chrome balloon ring around a warm 'Oh Baby' neon sign, twin baby foil pillars on pink & white balloon columns and a shimmering BABY letter block tower."
            image={babyG7.url}
            includes={["Pink, white & silver chrome ring backdrop","'Oh Baby' neon sign","Twin baby foil pillars + BABY letter blocks"]}
            rating={4.8} reviews={144}
            offer={<>₹2,999</>} original={<>₹4,999</>} discountPct={40}
          />
          <StaticPackageCard
            id="baby-g8" name="Teddy Bear Brown & Gold 'Baby Shower' Arch"
            description="Rustic 'Baby Shower' arch in brown, mustard yellow and chrome gold balloons with a giant teddy bear foil, gold foil 'BABY SHOWER' letters, rose-gold tassel curtain and adorable teddy prop accents."
            image={babyG8.url}
            includes={["Brown, mustard & chrome gold organic garland","Giant teddy bear foil + rose-gold tassel curtain","Gold 'BABY SHOWER' foil letters + teddy props"]}
            rating={4.9} reviews={176}
            offer={<>₹2,999</>} original={<>₹3,999</>} discountPct={25}
          />
          <StaticPackageCard
            id="baby-g9" name="'Oh Baby' Blush Pink, White & Gold Ring with Giant Teddy"
            description="Dreamy blush pink, white and chrome gold balloon ring with an 'Oh Baby' neon sign, giant plush teddy bear, silver BABY letter blocks and floor balloon spill — an elegant lounge-style baby shower setup."
            image={babyG9.url}
            includes={["Blush, white & gold chrome balloon ring","'Oh Baby' neon + giant plush teddy bear","Silver BABY letter blocks + floor balloon styling"]}
            rating={5.0} reviews={158} bestSeller
            offer={<>₹4,999</>} original={<>₹7,499</>} discountPct={33}
          />
          <StaticPackageCard
            id="baby-g10" name="Luxury 'Oh Baby' Purple Butterfly Triple Arch"
            description="Grand luxury baby shower with a triple chiara arched backdrop in lilac, 'Oh Baby' script, laser-cut butterfly panels, purple & yellow organic garland, butterfly decals and up-lights — a full banquet-style installation."
            image={babyG10.url}
            includes={["Triple chiara arched backdrop with 'Oh Baby' script","Laser-cut butterfly panels + butterfly decals","Purple & yellow organic garland + up-lighting"]}
            rating={5.0} reviews={98} bestSeller
            offer={<>₹19,999</>} original={<>₹29,999</>} discountPct={33}
          />
          <StaticPackageCard
            id="baby-h1" name="Luxury 'Oh Baby' Blue & Purple Moon Cloud Arch"
            description="Grand luxury baby shower with a crescent moon prop, blue-purple-white balloon garland arch, cloud-and-hot-air-balloon printed backdrop, 'Oh Baby' neon on a pastel blue chiara panel, plush teddy bears and a lilac hot-air-balloon side prop — a dreamy sky-themed banquet setup."
            image={babyH1.url}
            includes={["Crescent moon prop + cloud printed backdrop","Blue, purple & white balloon garland arch","'Oh Baby' neon on chiara + plush teddy bears"]}
            rating={5.0} reviews={72} bestSeller
            offer={<>₹14,999</>} original={<>₹24,999</>} discountPct={40}
          />
          <StaticPackageCard
            id="baby-h2" name="'Oh Baby' Pastel Pink, Blue & Gold Floral Curtain Arch"
            description="Elegant indoor baby shower with a pastel pink, blue, peach and chrome gold balloon garland running along the top, sheer white curtain backdrop with warm fairy lights, hanging rose florals and an 'Oh Baby' neon script — perfect for cosy home setups."
            image={babyH2.url}
            includes={["Pastel pink, blue, peach & gold balloon garland","White sheer curtain + warm fairy lights","'Oh Baby' neon + hanging rose floral strings"]}
            rating={4.9} reviews={128}
            offer={<>₹3,499</>} original={<>₹4,999</>} discountPct={30}
          />
          <StaticPackageCard
            id="baby-i1" name="Girl or Boy Pastel Pink & Teal Curtain Arch"
            description="Cosy home baby shower with a pink 'girl' and teal 'boy' foil script over a white shimmer curtain backdrop with fairy lights, a pastel pink, mint and white balloon arch, 'Baby Shower' bunting, an 'It's a Boy' bottle and 'It's a Girl' foot foil column and a baby-boy carriage — a lovely gender-neutral setup."
            image={babyI1.url}
            includes={["White shimmer curtain + fairy light backdrop","Pastel pink, mint & white balloon arch","'girl' & 'boy' foil scripts + carriage & foot foil columns"]}
            rating={4.9} reviews={182}
            offer={<>₹3,499</>} original={<>₹4,999</>} discountPct={30}
          />
          <StaticPackageCard
            id="baby-i2" name="'Boy or Girl' Pink, Blue & Chrome Gold Gender Reveal Arch"
            description="Bold gender-reveal photo arch with a chic pink and sky-blue organic balloon garland accented with chrome gold clusters, framing a white chiara backdrop featuring an elegant 'Boy or Girl' gold script — perfect for reveal parties and studio shoots."
            image={babyI2.url}
            includes={["White chiara panel with 'Boy or Girl' gold script","Pink & blue organic balloon garland arch","Chrome gold accent clusters + floor styling"]}
            rating={5.0} reviews={144} bestSeller
            offer={<>₹4,499</>} original={<>₹5,999</>} discountPct={25}
          />
          <StaticPackageCard
            id="baby-i3" name="'Oh Baby' Blue, White & Gold Ring Arch with BABY Blocks"
            description="Banquet-style baby shower with a full circular ring covered in blue, white, pink and chrome gold balloons around a warm 'Oh Baby' neon on a white curtain backdrop, boy and girl cartoon cut-outs on the sides and BABY letter blocks with a hidden balloon reveal."
            image={babyI3.url}
            includes={["Circular ring arch with blue, white & gold balloons","'Oh Baby' neon on white shimmer curtain","BABY letter blocks + boy & girl cut-outs"]}
            rating={4.9} reviews={168}
            offer={<>₹3,999</>} original={<>₹4,999</>} discountPct={20}
          />
          <StaticPackageCard
            id="baby-i4" name="Twin 'Girl' & 'Boy' Balloon Columns with Tassel Bunting"
            description="Compact gender-reveal setup with a tall pastel pink 'GIRL' balloon column and a matching pastel blue 'BOY' column, gold 'OR' foil letters overhead, a pink-blue-gold tassel bunting and cute baby foil balloons on each side — great for small home celebrations."
            image={babyI4.url}
            includes={["Pastel pink 'GIRL' & blue 'BOY' balloon columns","Gold 'OR' foil letters + tassel bunting","Baby boy & baby girl foil accents"]}
            rating={4.8} reviews={126}
            offer={<>₹2,999</>} original={<>₹4,999</>} discountPct={40}
          />
          <StaticPackageCard
            id="baby-i5" name="'boy' & 'girl' Foil Silver Fringe Curtain Arch"
            description="Sweet home baby shower with a blue and pink balloon garland arch featuring gold butterfly accents, framing a silver fringe curtain wall with pastel 'boy' and 'girl' foil scripts and cute baby boy/girl cartoon cut-outs at the base — perfect for photo booths."
            image={babyI5.url}
            includes={["Silver fringe curtain wall backdrop","Blue & pink balloon arch with gold butterflies","'boy' & 'girl' foil scripts + baby cut-outs"]}
            rating={4.8} reviews={139}
            offer={<>₹2,999</>} original={<>₹4,999</>} discountPct={40}
          />
          <StaticPackageCard
            id="baby-i6" name="'Boy or Girl' Pink, Blue & Gold Floral Grand Arch"
            description="Luxury indoor gender-reveal arch with a chunky pink, sky-blue and chrome gold balloon garland climbing a white chiara backdrop, an elegant 'Boy or Girl' script and a pastel floral fan corner accent — premium finish for banquet or home setups."
            image={babyI6.url}
            includes={["White chiara backdrop with 'Boy or Girl' script","Pink, blue & chrome gold organic balloon garland","Pastel floral fan accent + column bases"]}
            rating={5.0} reviews={110} bestSeller
            offer={<>₹4,999</>} original={<>₹6,999</>} discountPct={29}
          />
          <StaticPackageCard
            id="baby-i7" name="'GIRL' & 'BOY' Foil Tinsel Curtain Gender Reveal"
            description="Fun and affordable gender-reveal setup with pink 'GIRL' and blue 'BOY' foil letters over blue and pink tinsel fringe curtains, a pastel confetti balloon top garland with 'It's a Boy' and 'It's a Girl' printed balloons — ideal for small parties."
            image={babyI7.url}
            includes={["Blue & pink tinsel fringe curtain wall","'GIRL' & 'BOY' foil letters","Pastel confetti balloon top garland"]}
            rating={4.7} reviews={98}
            offer={<>₹1,999</>} original={<>₹3,499</>} discountPct={43}
          />
          <StaticPackageCard
            id="baby-i8" name="Grand 'BABY SHOWER' Pink & Blue Ceiling Arch with Silver Backdrop"
            description="Full-room baby shower with a lush pink and blue balloon arch running along the ceiling and around the seating area, a silver shimmer wall backdrop with 'BABY SHOWER' foil letters, unicorn and baby foil accents and hanging balloon strings — a complete celebration setup."
            image={babyI8.url}
            includes={["Silver shimmer wall + 'BABY SHOWER' foil letters","Pink & blue ceiling balloon arch around seating","Unicorn, baby & pram foil accents + hanging balloons"]}
            rating={4.9} reviews={156}
            offer={<>₹2,499</>} original={<>₹4,999</>} discountPct={50}
          />
          <StaticPackageCard
            id="baby-i9" name="Custom Name 'Baby Shower' Pink & Blue Moon Backdrop"
            description="Premium banquet baby shower with a personalised round pink-and-blue moon backdrop featuring the mommy-to-be's name, a pink balloon arch across the top, a blue balloon garland base with gold chrome accents, boy & girl cartoon stands, BABY letter blocks and a red carpet stage."
            image={babyI9.url}
            includes={["Custom name round moon backdrop","Pink top arch + blue & gold base garland","BABY blocks, boy/girl stands & red carpet stage"]}
            rating={5.0} reviews={132} bestSeller
            offer={<>₹4,999</>} original={<>₹6,999</>} discountPct={29}
          />
          <StaticPackageCard
            id="baby-i10" name="'GIRL or BOY' Pink & Blue Twin Column Entry Arch"
            description="Charming entry-way baby shower with a pink and blue balloon top arch, twin balloon columns wrapped in pink and blue with gold star accents, pink and blue tassel curtains and cute foot foil balloons — 'GIRL or BOY' bunting completes the look."
            image={babyI10.url}
            includes={["Pink & blue balloon top arch entry","Twin balloon columns with gold star accents","Pink & blue tassel curtains + foot foils & bunting"]}
            rating={4.7} reviews={88}
            offer={<>₹1,999</>} original={<>₹2,999</>} discountPct={33}
          />
          <StaticPackageCard
            id="baby-h3" name="Luxury 'Oh Baby' White & Copper Chiara Arch with BABY Blocks"
            description="Premium outdoor baby shower with a white chiara arch featuring 'Oh Baby' script and fresh floral corner, secondary white arched panel, ivory-copper-white balloon garlands, cake pedestals, plush teddy, welcome easel and BABY letter blocks — a complete photo-ready installation."
            image={babyH3.url}
            includes={["Twin chiara arch backdrop with floral accent","Ivory, white & copper chrome balloon garlands","Cake pedestals, BABY blocks, teddy & welcome easel"]}
            rating={5.0} reviews={91} bestSeller
            offer={<>₹9,999</>} original={<>₹14,999</>} discountPct={33}
          />
          <StaticPackageCard
            id="baby-j1" name="Custom Name Pastel Rainbow Ring Baby Shower with Baby Cartoon Cutouts"
            description="Playful indoor baby shower featuring a pastel rainbow balloon ring backdrop with a personalised 'Oh… Baby [Name]'s Baby Shower' print, twin pastel balloon columns with cartoon baby cutouts on either side and BABY blocks — a bright, family-friendly setup."
            image={babyJ1.url}
            includes={["Pastel rainbow ring + custom name backdrop","Twin pastel balloon columns with baby cutouts","BABY letter blocks + floor balloon accents"]}
            rating={4.9} reviews={142} bestSeller
            offer={<>₹4,499</>} original={<>₹6,999</>} discountPct={36}
          />
          <StaticPackageCard
            id="baby-j2" name="'Oh Baby' Neon Boy or Girl Purple Fairy Outdoor Arch"
            description="Dreamy outdoor gender reveal with a purple printed backdrop featuring a fairy mommy illustration, glowing 'Oh baby' neon, pink and blue balloon garlands with gold chrome and confetti balloons, silver foil stars and a 'Boy or Girl' heart accent."
            image={babyJ2.url}
            includes={["Purple fairy backdrop + 'Oh baby' neon sign","Pink & blue garlands with gold & silver accents","Boy or Girl foil heart + red carpet base"]}
            rating={5.0} reviews={118} bestSeller
            offer={<>₹4,499</>} original={<>₹6,999</>} discountPct={36}
          />
          <StaticPackageCard
            id="baby-j3" name="'Baby Shower' Neon Pink & Blue Ring with BABY Blocks & Bottles"
            description="Elegant indoor baby shower with a pink and blue balloon ring backdrop, 'Baby Shower' neon sign in the centre, teddy bear foil accents, 'It's A Boy' & 'It's A Girl' bottle foils on pink and blue balloon columns and BABY letter blocks."
            image={babyJ3.url}
            includes={["Pink & blue balloon ring + 'Baby Shower' neon","Twin bottle foils on pink & blue columns","BABY letter blocks + teddy foil accents"]}
            rating={4.9} reviews={126}
            offer={<>₹3,499</>} original={<>₹4,999</>} discountPct={30}
          />
          <StaticPackageCard
            id="baby-j4" name="Grand 'BABY SHOWER' Multicolour Balloon Arch Room Setup"
            description="Full-room baby shower with a vibrant multicolour balloon arch framing a sofa seating, gold 'BABY SHOWER' foil letters with a blue heart, baby bottle & teddy foils, cartoon baby stickers and warm cove lighting — a lively home celebration setup."
            image={babyJ4.url}
            includes={["Gold 'BABY SHOWER' foil letters + blue heart","Multicolour balloon arch around seating","Baby bottle, teddy & cartoon sticker accents"]}
            rating={4.8} reviews={97}
            offer={<>₹2,999</>} original={<>₹4,999</>} discountPct={40}
          />
          <StaticPackageCard
            id="baby-j5" name="Simple 'BABY SHOWER' Gold Foil Letters with Pink & Blue Columns"
            description="Sweet budget-friendly baby shower with 'BABY SHOWER' gold foil letters on a clean wall, 'It's a Boy' & 'It's a Girl' bottle foils on pink and blue balloon columns, a cute themed bunting and gold star accent — perfect for intimate home celebrations."
            image={babyJ5.url}
            includes={["'BABY SHOWER' gold foil letter set","Pink & blue balloon columns with bottle foils","Baby shower themed bunting + gold star"]}
            rating={4.7} reviews={84}
            offer={<>₹1,999</>} original={<>₹2,999</>} discountPct={33}
          />
          <StaticPackageCard
            id="baby-j6" name="'He or She' Pastel Rainbow Gender Reveal Arch with Baby Foils"
            description="Charming indoor gender reveal with a pastel rainbow balloon arch, silver moon and star foils on top, 'He or She' foil balloon in the centre, boy & girl baby foils, 'Baby Boy' & 'Baby Girl' round foils and pastel balloon garland at the base."
            image={babyJ6.url}
            includes={["Pastel rainbow balloon arch + moon & stars","'He or She' + boy & girl baby foils","Base garland with pastel balloon scatter"]}
            rating={4.8} reviews={101}
            offer={<>₹2,199</>} original={<>₹3,499</>} discountPct={37}
          />
          <StaticPackageCard
            id="baby-j7" name="Luxury 'Baby Shower' Pastel Cocomelon Ring with Baby Cartoons"
            description="Premium banquet baby shower with a pastel balloon ring backdrop framing a marble panel with 'Baby Shower' neon sign, Cocomelon baby cartoon cutouts, angel and toddler cutouts and matching pastel balloon columns — an adorable photo-ready installation."
            image={babyJ7.url}
            includes={["Pastel balloon ring + marble panel with neon","Cocomelon, angel & toddler cutouts","Matching pastel balloon columns"]}
            rating={5.0} reviews={138} bestSeller
            offer={<>₹4,499</>} original={<>₹6,999</>} discountPct={36}
          />
          <StaticPackageCard
            id="baby-j8" name="'Baby Shower' Purple, Pink & Blue Ring with Gold Chrome Accents"
            description="Elegant mall-style baby shower with a purple, pink and blue balloon ring backdrop with gold chrome accents, 'Baby Shower' script inside, boy & girl cartoon cutouts on pastel columns and floating balloon clusters overhead."
            image={babyJ8.url}
            includes={["Purple, pink & blue ring + gold chrome accents","'Baby Shower' script inside the ring","Boy & girl cutouts on pastel columns + ceiling clusters"]}
            rating={4.9} reviews={112}
            offer={<>₹3,499</>} original={<>₹4,999</>} discountPct={30}
          />
          <StaticPackageCard
            id="baby-j9" name="Custom Couple Name 'Baby Shower' Pink Blush Banquet Arch"
            description="Premium banquet baby shower with a personalised pink blush arched backdrop featuring the couple's names and 'Baby Shower' script, a lush pink and peach balloon garland with lit-up focal balloons, teddy accents, cute baby girl cutout and BABY letter blocks."
            image={babyJ9.url}
            includes={["Custom couple name arched backdrop","Pink & peach balloon garland with lit focals","Teddy accents, baby cutout + BABY blocks"]}
            rating={5.0} reviews={129} bestSeller
            offer={<>₹4,499</>} original={<>₹5,999</>} discountPct={25}
          />
          <StaticPackageCard
            id="baby-j10" name="'Baby Shower' Neon Purple, Pink & Gold Ring with Twin Baby Cutouts"
            description="Stylish baby shower with a purple, pink, white and gold chrome balloon ring backdrop, glowing 'Baby Shower' neon sign, twin baby (boy & girl) foil cutouts on matching balloon columns and BABY letter blocks on a carpeted stage."
            image={babyJ10.url}
            includes={["Purple, pink, white & gold chrome ring","'Baby Shower' neon + twin baby cutouts","Matching balloon columns + BABY blocks"]}
            rating={4.9} reviews={121}
            offer={<>₹3,499</>} original={<>₹4,999</>} discountPct={30}
          />
          <StaticPackageCard
            id="baby-k1" name="Pastel Pink, Blue, Yellow & Gold 'Baby Shower' Neon Arch"
            description="Charming indoor baby shower with a pastel pink, blue, yellow and gold chrome balloon arch framing a soft white sheer curtain, glowing pink & blue 'Baby Shower' neon sign and matching balloon pillars on either side."
            image={babyK1.url}
            includes={["Pastel + gold chrome balloon arch","'Baby Shower' pink & blue neon sign","Sheer white curtain + twin balloon columns"]}
            rating={4.9} reviews={138} bestSeller
            offer={<>₹3,499</>} original={<>₹4,999</>} discountPct={30}
          />
          <StaticPackageCard
            id="baby-k2" name="'Oh Baby' Round Ring Pastel & Butterfly Backdrop with BABY Blocks"
            description="Elegant indoor round ring backdrop in pastel peach, blue, gold & silver chrome balloons with silver butterfly accents, glowing 'Oh Baby' neon sign in the centre and a stack of transparent BABY letter blocks on the side."
            image={babyK2.url}
            includes={["Peach, blue, gold & silver chrome ring","'Oh Baby' neon + silver butterfly cutouts","Transparent BABY letter blocks stack"]}
            rating={5.0} reviews={162} bestSeller
            offer={<>₹3,999</>} original={<>₹4,999</>} discountPct={20}
          />
          <StaticPackageCard
            id="baby-k3" name="Boy or Girl Foil Curtain Arch with Baby Cutouts & BABY Blocks"
            description="Playful gender-reveal setup with a pink, blue, white & gold chrome balloon arch, blue & pink foil curtains, 'boy' and 'girl' foil script, baby boy/girl cutouts, a Baby Boy pram foil and transparent BABY letter blocks."
            image={babyK3.url}
            includes={["Pink, blue & gold arch + foil curtains","'boy' & 'girl' foils + baby cutouts","Baby pram foil + BABY letter blocks"]}
            rating={4.8} reviews={124}
            offer={<>₹2,999</>} original={<>₹4,999</>} discountPct={40}
          />
          <StaticPackageCard
            id="baby-k4" name="Rose Gold Curtain 'Baby Shower' Foil Arch with Red Couch"
            description="Banquet-style baby shower entry with a pink & blue pastel balloon arch, shimmering rose-gold foil curtain backdrop, 'BOY' & 'BABY SHOWER' foil letters, feeding bottle foils, star balloons and a red velvet couch for the mom-to-be."
            image={babyK4.url}
            includes={["Pastel pink & blue balloon arch","Rose-gold foil curtain + 'Baby Shower' letters","Star & bottle foil accents"]}
            rating={4.7} reviews={109}
            offer={<>₹2,999</>} original={<>₹4,999</>} discountPct={40}
          />
          <StaticPackageCard
            id="baby-k5" name="Custom Name Round Backdrop with Moon & Baby Cutouts Pillars"
            description="Premium banquet baby shower with a custom-printed round white backdrop (e.g. 'Nikky's Baby Shower'), soft pastel pink/blue/gold balloon garland, gold moon foil and two matching pastel balloon columns topped with adorable baby cutouts."
            image={babyK5.url}
            includes={["Custom-name round white backdrop","Pastel pink/blue/gold garland + gold moon","Twin balloon pillars with baby cutouts"]}
            rating={4.9} reviews={148} bestSeller
            offer={<>₹3,999</>} original={<>₹5,999</>} discountPct={33}
          />
          <StaticPackageCard
            id="baby-k6" name="Gold 'BABY SHOWER' Foil Letters with Pink & Blue Tinsel Arch"
            description="Simple banquet baby shower with a pink & blue pastel balloon arch, blue & pink tinsel foil curtain, big gold 'BABY SHOWER' foil letters, gold star balloons and baby boy/girl foil cutouts on either side."
            image={babyK6.url}
            includes={["Pastel pink & blue balloon arch","Gold 'BABY SHOWER' foil letters","Tinsel foil curtain + star & baby cutouts"]}
            rating={4.6} reviews={97}
            offer={<>₹2,199</>} original={<>₹3,499</>} discountPct={37}
          />
          <StaticPackageCard
            id="baby-k7" name="Multicolour Balloon Entry Arch with 'Baby Shower' Banner"
            description="Bright, budget-friendly baby shower entry arch in pink, blue, white, yellow & gold balloons with a lace curtain backdrop, gold 'Baby Shower' cursive banner and bottle, baby & butterfly foil balloon accents."
            image={babyK7.url}
            includes={["Pink, blue, white, yellow & gold arch","Lace curtain + 'Baby Shower' banner","Bottle, baby & butterfly foil accents"]}
            rating={4.5} reviews={86}
            offer={<>₹1,999</>} original={<>₹2,999</>} discountPct={33}
          />
          <StaticPackageCard
            id="baby-k8" name="Custom Name Pastel Arch Backdrop with Floral & Palm Accents"
            description="Luxury pastel baby shower with a personalised pink acrylic-style arched panel (e.g. 'Tasneem's Baby Shower') set on a wooden wall, framed by an oversized pink, blue & yellow balloon garland with a dried palm leaf and rose floral cluster."
            image={babyK8.url}
            includes={["Custom-name pink arched acrylic panel","Pink, blue & yellow pastel balloon garland","Dried palm leaf + rose floral cluster"]}
            rating={5.0} reviews={176} bestSeller
            offer={<>₹4,999</>} original={<>₹6,999</>} discountPct={29}
          />
          <StaticPackageCard
            id="baby-k9" name="'Oh Baby Loading' Outdoor Arch with Teddy & BABY Blocks"
            description="Dreamy outdoor baby shower with a tall white arched panel featuring glowing 'Oh Baby' neon, baby-feet 'Loading…' print, a pink, white & gold balloon garland with dried palm, a giant pink teddy bear and BABY letter blocks."
            image={babyK9.url}
            includes={["'Oh Baby' neon + baby-feet 'Loading' panel","Pink, gold & white balloon garland","Giant teddy bear + BABY letter blocks"]}
            rating={4.9} reviews={154} bestSeller
            offer={<>₹4,999</>} original={<>₹6,999</>} discountPct={29}
          />
          <StaticPackageCard
            id="baby-k10" name="'Boy or Girl?' Pastel Gender Reveal Arch with Moon & Stars"
            description="Outdoor gender reveal arch with a white sheer curtain backdrop, 'Boy or Girl?' cutout letters, pastel pink & blue balloon garland with silver star foils on top and a big silver crescent moon nested in a pastel balloon cluster."
            image={babyK10.url}
            includes={["White sheer curtain + 'Boy or Girl?' cutout","Pastel pink & blue balloon arch","Silver star foils + crescent moon cluster"]}
            rating={4.8} reviews={131}
            offer={<>₹4,499</>} original={<>₹5,999</>} discountPct={25}
          />
        </div>
      </section>



      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <SectionHeader eyebrow="Gallery" title="Baby Shower Decoration Gallery" subtitle="Real setups by our decor team." />
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">

            <img src="/2f34d637-44bd-46dd-8753-d31930cc31b6.jpg" alt="Baby Shower Decoration 1" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/38135b41-25f2-4c2f-a08f-cac6575c3b12.jpg" alt="Baby Shower Decoration 2" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/6fec18e9-7b78-42b6-9764-cbb3037878e1.jpg" alt="Baby Shower Decoration 3" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/cefa309d-aa34-467c-aa1d-a6503bc509a8.webp" alt="Baby Shower Decoration 4" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/611a101e-21ad-44d4-b9df-2995798cd982.jpg" alt="Baby Shower Decoration 5" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/3e650746-51ce-4c70-bbab-c733c2f8b532.jpg" alt="Baby Shower Decoration 6" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/b3318de7-5a76-4dad-b0f6-4f752365071d.jpg" alt="Baby Shower Decoration 7" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyB1.url} alt="Pastel Pampas Ring Baby Shower" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyB2.url} alt="Boy or Girl Neon Ring Baby Shower" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyB3.url} alt="Blush Pink Custom Name Baby Shower" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyB4.url} alt="Baby in Bloom Floral Baby Shower" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyB5.url} alt="Neon Baby Shower Pink & White Ring" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyB6.url} alt="Mommy-to-Be Cuter Banquet Baby Shower" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyB7.url} alt="Oh Baby Foil & Tassel Baby Shower" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyB8.url} alt="Baby in Bloom Nude Arch Outdoor" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyB9.url} alt="Sage & Gold Oh Baby Balloon Wreath" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyB10.url} alt="Bearly Wait Teddy Baby Shower Grand" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyC1.url} alt="Lilac Pink Rose-Gold Baby Shower" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyC2.url} alt="Baby in Bloom Peach Rooftop" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyC3.url} alt="Boy or Girl Gender Reveal Stage" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyC4.url} alt="Oh Baby Pink Blue Gold Ring" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyC5.url} alt="Oh Baby Nude Gold Butterfly Ring" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyC6.url} alt="Mauve Rose Blush Baby Shower Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyC7.url} alt="Oh Baby Boho Nude Pampas Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyC8.url} alt="Twinkle Twinkle Little Star Baby Shower" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyC9.url} alt="Bundle of Joy Rose-Gold Luxury Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyC10.url} alt="A Little Butterfly Baby Shower" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyD1.url} alt="Bundle of Joy Blue Gold Baby Boy Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyD2.url} alt="Oh Baby Gender Reveal Pink Blue" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyD3.url} alt="Oh Baby Blue Neon Ring Teddy Bears" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyD4.url} alt="Oh Baby Pastel Rainbow Ring" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyD5.url} alt="A Little Butterfly Purple Grand Baby Shower" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyE1.url} alt="Black & Gold Baby Shower Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyE2.url} alt="Oh Baby Pink Blue Gold Teddy" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyE3.url} alt="A Little Cutie is on the Way" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyE4.url} alt="Boy or Girl Twin Arch Gender Reveal" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyE5.url} alt="Purple Boy or Girl Custom Name Baby Shower" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyE6.url} alt="Pastel Rainbow Baby Shower Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyE7.url} alt="Gold Baby Shower Black Curtain Wall" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyE8.url} alt="Baby Name On The Way Boho Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyE9.url} alt="Welcoming Baby Sage Green Luxury Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyE10.url} alt="Mom to Be Terracotta Outdoor Baby Shower" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyF1.url} alt="Oh Baby Mint Sky Blue Gold Garden Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyF2.url} alt="A Berry Sweet Baby is On The Way Navy Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyF3.url} alt="Pink & Blue Baby Shower Foil Home Setup" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyF4.url} alt="Custom Name Babyshower Blush Teddy Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyF5.url} alt="Oh Baby Pastel Rainbow Ring Teddy Setup" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyG1.url} alt="Baby in Bloom Pastel Floral Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyG2.url} alt="A Little Cutie is on the Way Gender Reveal Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyG3.url} alt="Oh Baby Sage Green Gold Ring Baby Shower" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyG4.url} alt="Classic Baby Shower Pink Blue Home Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyG5.url} alt="Baby Shower Pastel Arch with Curtain Backdrop" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyG6.url} alt="Pink Blue Ring Baby Shower Neon" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyG7.url} alt="Oh Baby Pink White Silver Chrome Ring" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyG8.url} alt="Teddy Bear Brown Gold Baby Shower Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyG9.url} alt="Oh Baby Blush Pink White Gold Ring with Teddy" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyG10.url} alt="Luxury Oh Baby Purple Butterfly Triple Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyH1.url} alt="Luxury Oh Baby Blue Purple Moon Cloud Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyH2.url} alt="Oh Baby Pastel Pink Blue Gold Floral Curtain Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyH3.url} alt="Luxury Oh Baby White Copper Chiara Arch with BABY Blocks" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyI1.url} alt="Girl or Boy Pastel Pink Teal Curtain Arch Baby Shower" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyI2.url} alt="Boy or Girl Pink Blue Gold Gender Reveal Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyI3.url} alt="Oh Baby Blue White Gold Ring Arch BABY Blocks" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyI4.url} alt="Girl Boy Twin Balloon Columns Baby Shower" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyI5.url} alt="boy girl Silver Fringe Curtain Baby Shower Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyI6.url} alt="Boy or Girl Pink Blue Gold Floral Grand Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyI7.url} alt="GIRL BOY Foil Tinsel Curtain Gender Reveal" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyI8.url} alt="Grand BABY SHOWER Pink Blue Ceiling Arch Silver Backdrop" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyI9.url} alt="Custom Name Baby Shower Pink Blue Moon Backdrop" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyI10.url} alt="GIRL or BOY Pink Blue Twin Column Entry Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyJ1.url} alt="Custom Name Pastel Rainbow Ring Baby Shower" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyJ2.url} alt="Oh Baby Neon Boy or Girl Purple Fairy Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyJ3.url} alt="Baby Shower Neon Pink Blue Ring with BABY Blocks" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyJ4.url} alt="Grand BABY SHOWER Multicolour Balloon Arch Room" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyJ5.url} alt="BABY SHOWER Gold Foil Letters Pink Blue Columns" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyJ6.url} alt="He or She Pastel Rainbow Gender Reveal Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyJ7.url} alt="Baby Shower Pastel Cocomelon Ring" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyJ8.url} alt="Baby Shower Purple Pink Blue Ring Gold Chrome" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyJ9.url} alt="Custom Couple Name Baby Shower Pink Blush Arch" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src={babyJ10.url} alt="Baby Shower Neon Purple Pink Gold Ring Twin Cutouts" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Reviews" title="Customer Reviews" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayReviews.map(([name, city, service, text, rating], i) => (
            <ReviewCard key={i} name={name} city={city} service={service} text={text} rating={rating as number} />
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQs" title="Baby Shower Decoration FAQs" />
          <div className="mt-8"><Faq items={c.faqs} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Available In" title="Baby Shower Decoration in Your City" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {BRAND.cities.map((city) => (
            <Link
              key={city}
              to="/city/$slug"
              params={{ slug: city.toLowerCase() }}
              className="rounded-xl border bg-card p-3 text-center text-sm hover:border-primary hover:text-primary"
            >
              Baby in {city}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
