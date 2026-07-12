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
