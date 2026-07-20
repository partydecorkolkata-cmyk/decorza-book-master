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
import riceR1 from "@/assets/rice-r1.jpg.asset.json";
import riceR2 from "@/assets/rice-r2.jpg.asset.json";
import riceR3 from "@/assets/rice-r3.jpg.asset.json";
import riceR4 from "@/assets/rice-r4.png.asset.json";
import riceR5 from "@/assets/rice-r5.jpg.asset.json";
import riceR6 from "@/assets/rice-r6.jpg.asset.json";
import riceR7 from "@/assets/rice-r7.jpg.asset.json";
import riceR8 from "@/assets/rice-r8.jpg.asset.json";
import riceR9 from "@/assets/rice-r9.jpg.asset.json";
import riceR10 from "@/assets/rice-r10.jpg.asset.json";
import riceR11 from "@/assets/rice-r11.jpg.asset.json";
import riceR12 from "@/assets/rice-r12.jpg.asset.json";
import riceR13 from "@/assets/rice-r13.jpg.asset.json";
import riceR14 from "@/assets/rice-r14.jpg.asset.json";
import riceR15 from "@/assets/rice-r15.jpg.asset.json";
import riceR16 from "@/assets/rice-r16.jpg.asset.json";
import riceR17 from "@/assets/rice-r17.jpg.asset.json";
import riceR18 from "@/assets/rice-r18.jpg.asset.json";
import riceR19 from "@/assets/rice-r19.jpg.asset.json";
import riceR20 from "@/assets/rice-r20.jpg.asset.json";
import riceR21 from "@/assets/rice-r21.jpg.asset.json";
import riceR22 from "@/assets/rice-r22.jpg.asset.json";
import riceR23 from "@/assets/rice-r23.jpg.asset.json";
import riceR24 from "@/assets/rice-r24.jpg.asset.json";
import riceR25 from "@/assets/rice-r25.jpg.asset.json";
import riceR26 from "@/assets/rice-r26.jpg.asset.json";
import riceR27 from "@/assets/rice-r27.jpg.asset.json";
import riceR28 from "@/assets/rice-r28.jpg.asset.json";
import riceR29 from "@/assets/rice-r29.jpg.asset.json";
import riceR30 from "@/assets/rice-r30.jpg.asset.json";


export const Route = createFileRoute("/service/rice-ceremony-decoration")({
  loader: () => {
    const c = categoryBySlug("rice-ceremony-decoration");
    if (!c) throw notFound();
    return { category: c };
  },
  head: () => ({
    meta: [
      { title: `Rice Ceremony Decoration in India | From ₹1999 | Decorza Events` },
      { name: "description", content: `Beautiful traditional Annaprashan decor with flowers, drapes, name boards and themed props for your baby's first rice ceremony. Book on WhatsApp.` },
      { property: "og:title", content: `Rice Ceremony Decoration | Decorza Events` },
      { property: "og:image", content: riceR2.url },
    ],
    links: [{ rel: "canonical", href: "/service/rice-ceremony-decoration" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  const { category: c } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({ packageName: "Rice Ceremony Decoration" }));
  const reviews = REVIEWS.filter(([, , s]) => (s as string) === "Rice Ceremony Decoration").slice(0, 6);
  const displayReviews = reviews.length ? reviews : REVIEWS.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={riceR2.url} alt="Rice Ceremony Decoration" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.08_305)]/90 to-[oklch(0.32_0.13_5)]/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <Badge className="bg-white/10 backdrop-blur border border-white/20 text-white">
            <Star className="mr-1 h-3 w-3 fill-gold text-gold" /> 4.8 · 410 reviews
          </Badge>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">Rice Ceremony Decoration</h1>
          <p className="mt-4 max-w-2xl text-white/85">Beautiful traditional Annaprashan decor with flowers, drapes, name boards and themed props for your baby's first rice ceremony.</p>
          <p className="mt-4 font-display text-2xl text-gold">Starting from ₹1999</p>
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
        <SectionHeader eyebrow="Packages" title="Rice Ceremony Decoration Packages" subtitle="Pick from Essential, Premium and Luxury — or customise on WhatsApp." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <StaticPackageCard
            id="rice-ceremony-decoration-essential"
            name="Essential Pastel Balloon Rice Ceremony"
            description="A cheerful pastel balloon garland arch with a shimmering silver foil curtain backdrop, 'Rice Ceremony' bunting banner and cute Annaprashan themed cutouts — perfect for a home celebration."
            image={riceR1.url}
            includes={["Pastel balloon garland arch","Silver foil curtain backdrop","'Rice Ceremony' bunting & themed cutouts"]}
            rating={4.6}
            reviews={128}
            offer={<>₹2,499</>}
            original={<>₹3,499</>}
            discountPct={29}
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-premium"
            name="Premium Annaprashan Red & Gold Arch"
            description="An elegant red, white and gold chrome balloon arch with white drape backdrop, glitter 'Annaprashan' banner, foil stars and traditional themed cutouts for a photo-perfect ceremony."
            image={riceR2.url}
            includes={["Red, white & gold chrome balloon arch","White drape backdrop with gold stars","Glitter 'Annaprashan' banner & cutouts"]}
            rating={4.8}
            reviews={186}
            offer={<>₹3,499</>}
            original={<>₹4,999</>}
            discountPct={30}
            bestSeller
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-luxury"
            name="Luxury Rice Ceremony Grass Wall Setup"
            description="A grand multicolour pastel & chrome balloon garland framing a lush green grass wall with a 'Rice Ceremony' neon sign and glowing BABY blocks — a statement backdrop for your baby's first rice."
            image={riceR3.url}
            includes={["Lush green grass wall backdrop","'Rice Ceremony' neon sign","Multicolour pastel & chrome balloon garland","Glowing BABY letter blocks"]}
            rating={4.9}
            reviews={241}
            offer={<>₹4,999</>}
            original={<>₹6,999</>}
            discountPct={29}
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-vansh-ring"
            name="Personalised Annaprashan Ring Backdrop"
            description="A round white & gold chrome balloon ring with a custom 'Welcome to the Annaprashan Ceremony of [Baby's Name]' flex, twin baby cutouts and a matching welcome easel board."
            image={riceR4.url}
            includes={["Round balloon ring backdrop","Custom name flex with baby photo","Twin baby cutout pillars","Matching welcome easel board"]}
            rating={4.7}
            reviews={152}
            offer={<>₹4,999</>}
            original={<>₹6,999</>}
            discountPct={29}
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-name-ceremony-blue"
            name="Baby Boy Name Ceremony Blue Arch"
            description="A blue, silver & white balloon arch with a shimmering blue foil curtain, gold 'NAME CEREMONY' foil letters, cute baby-boy foil balloons and a milk-bottle foil — ideal for a naming ceremony for boys."
            image={riceR5.url}
            includes={["Blue, silver & white balloon arch","Blue foil curtain backdrop","Gold 'NAME CEREMONY' foil letters","Baby boy & milk bottle foil balloons"]}
            rating={4.6}
            reviews={109}
            offer={<>₹2,499</>}
            original={<>₹3,499</>}
            discountPct={29}
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-boho-naming"
            name="Boho Naming Ceremony Pink Arch"
            description="A dreamy pink arched backdrop with 'Our Baby's Naming Ceremony' script, a boho garland of rust, white, green & rose-gold chrome balloons, dry palm leaves, pampas and BABY boxes."
            image={riceR6.url}
            includes={["Pink arched backdrop with script text","Boho balloon garland (rust, green, chrome)","Dry palm leaves & pampas grass","BABY letter boxes"]}
            rating={4.8}
            reviews={174}
            offer={<>₹4,999</>}
            original={<>₹6,999</>}
            discountPct={29}
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-krishav-pastel"
            name="Pastel Annaprashan Stage with Baby Pillars"
            description="A soft pastel Annaprashan stage with a personalised round backdrop, cascading blue-yellow-green balloon garland, star foil pillars and a dainty gold cake table — styled beautifully for a banquet stage."
            image={riceR7.url}
            includes={["Personalised round Annaprashan backdrop","Pastel balloon garland (blue, yellow, green)","Twin star foil balloon pillars","Gold cake / puja table"]}
            rating={4.9}
            reviews={198}
            offer={<>₹5,499</>}
            original={<>₹7,999</>}
            discountPct={31}
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-floral-jasmine"
            name="Traditional Floral Jasmine Annaprasan"
            description="A classic Annaprasan backdrop with a lush top row of pastel roses, hanging jasmine floral strings, a round 'Annaprasan' name plaque and traditional themed cutouts — an elegant, traditional pick."
            image={riceR8.url}
            includes={["Pastel rose top floral runner","Hanging jasmine floral strings","Round 'Annaprasan' name plaque","Traditional Annaprashan cutouts"]}
            rating={4.9}
            reviews={216}
            offer={<>₹6,499</>}
            original={<>₹9,999</>}
            discountPct={35}
            bestSeller
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-divyanshi-pink-gold"
            name="Personalised Pink & Gold Annaprashan"
            description="A gorgeous pink & gold Annaprashan backdrop with your baby's photo flex, chrome pink-rose-gold-white balloon garland, silver star foils and pink-yellow side drapes for a princess-worthy setup."
            image={riceR9.url}
            includes={["Personalised baby photo flex backdrop","Pink, rose-gold & white chrome garland","Silver star foil accents","Pink & yellow side drapes"]}
            rating={4.8}
            reviews={167}
            offer={<>₹4,999</>}
            original={<>₹6,999</>}
            discountPct={29}
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-mishka-neon-ring"
            name="Neon Name Ring Annaprashan Backdrop"
            description="A luxe round ring backdrop on a soft white drape with pink & silver chrome balloon garland, personalised pink neon name sign, butterflies, florals and heart & star foil accents."
            image={riceR10.url}
            includes={["Round ring on white drape backdrop","Pink & silver chrome balloon garland","Personalised pink neon name sign","Butterflies, florals & foil accents"]}
            rating={4.9}
            reviews={203}
            offer={<>₹4,999</>}
            original={<>₹6,999</>}
            discountPct={29}
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-pink-floral-krishna-ring"
            name="Pink Floral Ring Rice Ceremony with Krishna"
            description="A dreamy round pink & white floral ring backdrop with a glowing 'Rice Ceremony' neon sign, hanging jasmine strings, cute Bal Krishna & Radha cutouts and pastel BABY blocks with balloon clusters."
            image={riceR11.url}
            includes={["Pink & white floral ring backdrop","'Rice Ceremony' neon sign","Bal Krishna & Radha themed cutouts","Pastel BABY letter blocks with balloons"]}
            rating={4.9}
            reviews={224}
            offer={<>₹6,499</>}
            original={<>₹9,999</>}
            discountPct={35}
            bestSeller
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-marigold-greenery"
            name="Traditional Marigold & Greenery Rice Ceremony"
            description="A grand traditional backdrop with a lush greenery & floral top valance, hanging marigold & mogra strings on cream drapes, a 'Rice Ceremony' neon and elegant white-gold-copper chrome balloon pillars."
            image={riceR12.url}
            includes={["Greenery & floral top valance","Hanging marigold & mogra strings","'Rice Ceremony' neon sign","White, gold & copper chrome balloon pillars"]}
            rating={4.9}
            reviews={192}
            offer={<>₹6,499</>}
            original={<>₹9,999</>}
            discountPct={35}
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-radha-krishna-stage"
            name="Luxury Radha Krishna Annaprashan Stage"
            description="A luxurious stage setup with a big Radha-Krishna backdrop panel, floral top runner, pastel pink-yellow-gold-white balloon arch and Bal Krishna & Radha cutouts framing a plush couch — statement decor for banquets."
            image={riceR13.url}
            includes={["Radha-Krishna backdrop panel","Floral top runner with jasmine","Pastel & gold chrome balloon arch","Bal Krishna & Radha cutouts + couch"]}
            rating={4.9}
            reviews={268}
            offer={<>₹14,999</>}
            original={<>₹19,999</>}
            discountPct={25}
            bestSeller
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-triple-arch-peacock"
            name="Grand Triple Arch Krishna Peacock Setup"
            description="A grand triple arched panel setup featuring Yashoda & baby Krishna centre panel with peacock and garden side arches, sky-blue & yellow balloon clusters, marigold hangings and dry floral accents."
            image={riceR14.url}
            includes={["Triple arched panel backdrop","Yashoda & baby Krishna centre panel","Sky-blue & yellow balloon clusters","Marigold hangings & dry floral accents"]}
            rating={4.9}
            reviews={214}
            offer={<>₹13,999</>}
            original={<>₹19,999</>}
            discountPct={30}
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-aqeeqah-name-arch"
            name="Personalised Aqeeqah Ceremony Name Arch"
            description="An elegant Aqeeqah ceremony arched backdrop with the baby's full name in bold navy, an 'Oh Baby' neon accent panel, blue-white-silver chrome balloon garland and a cute teddy bear cutout."
            image={riceR15.url}
            includes={["Personalised name arched backdrop","'Oh Baby' neon accent panel","Blue, white & silver chrome garland","Teddy bear themed cutout"]}
            rating={4.8}
            reviews={176}
            offer={<>₹13,999</>}
            original={<>₹18,999</>}
            discountPct={26}
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-swastik-floral-pooja"
            name="Traditional Swastik Floral Pooja Backdrop"
            description="A pure traditional pooja backdrop with red rose swastik centrepiece on ivory drapes, gold-yellow-white floral top valance, hanging mogra bell strings and matching flower pillars with a red rangoli mat."
            image={riceR16.url}
            includes={["Red rose swastik centrepiece","Ivory drape backdrop with floral top","Hanging mogra & bell strings","Flower pillars + red rangoli mat"]}
            rating={4.8}
            reviews={158}
            offer={<>₹9,999</>}
            original={<>₹12,999</>}
            discountPct={23}
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-rudra-purple-annaprashan"
            name="Purple Personalised Annaprashan Backdrop"
            description="A luxurious personalised Annaprashan setup with baby Krishna photo panel on purple drapes, a dreamy 'He's a little piece of magic' quote panel and a lush white-purple-silver chrome balloon garland."
            image={riceR17.url}
            includes={["Personalised baby Krishna photo panel","'He's a little piece of magic' quote panel","White, purple & silver chrome garland","Fairy-light purple drape backdrop"]}
            rating={4.9}
            reviews={231}
            offer={<>₹11,999</>}
            original={<>₹17,999</>}
            discountPct={33}
            bestSeller
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-mom-krishna-round-ring"
            name="Mom & Baby Krishna Round Ring Setup"
            description="A joyful round ring backdrop featuring a Yashoda & baby Krishna panel framed with purple, pink & white chrome balloons, colourful butterflies and matching balloon pillars with Bal Krishna & Radha cutouts."
            image={riceR18.url}
            includes={["Yashoda & baby Krishna round backdrop","Purple, pink & white chrome balloons","Butterfly accents & fairy lights","Balloon pillars with themed cutouts"]}
            rating={4.7}
            reviews={142}
            offer={<>₹5,999</>}
            original={<>₹7,999</>}
            discountPct={25}
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-dual-arch-krishna-peacock"
            name="Grand Dual Arch Krishna Peacock Banquet"
            description="A grand banquet-style dual arch setup with Yashoda-Krishna big panel and peacock-garden side arch, luxe blue-gold-silver chrome garlands, a peacock feather cylinder plinth and Bal Krishna cutouts."
            image={riceR19.url}
            includes={["Dual arched panel backdrop","Yashoda-Krishna & peacock panels","Blue, gold & silver chrome garlands","Peacock feather plinth + cutouts"]}
            rating={4.9}
            reviews={246}
            offer={<>₹14,999</>}
            original={<>₹19,999</>}
            discountPct={25}
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-chatti-poojan-pink"
            name="Chatti Poojan Pink Teddy Home Setup"
            description="A cute Chatti Poojan / 6th day naming home setup with pink & white balloon half-arch, gold 'Chatti Poojan' name plaque, cream shimmer drape backdrop, dry palm leaf fans, floral pillars and teddy bear props."
            image={riceR20.url}
            includes={["Pink & white balloon half-arch","Gold 'Chatti Poojan' name plaque","Cream shimmer drape + palm leaf fans","Floral pillars & teddy bear props"]}
            rating={4.7}
            reviews={134}
            offer={<>₹5,999</>}
            original={<>₹7,999</>}
            discountPct={25}
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-annaprashan-pastel-ring"
            name="Pastel Blue & Yellow Annaprashan Ring Arch"
            description="A cheerful pastel Annaprashan ring arch in soft blue, mint, yellow, white and silver chrome balloons with a red 'Annaprashan Ceremony' bunting, star foils, milk-to-rice themed cutouts and a cute baby foil balloon inside the ring."
            image={riceR21.url}
            includes={["Pastel blue, yellow & silver ring arch","Red 'Annaprashan Ceremony' bunting","Gold star foils & Annaprashan cutouts","Baby foil balloon centrepiece"]}
            rating={4.7}
            reviews={148}
            offer={<>₹3,499</>}
            original={<>₹4,999</>}
            discountPct={30}
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-swayambhi-butterfly-ring"
            name="Purple & Pink Butterfly Rice Ceremony Ring"
            description="A dreamy round backdrop with a personalised '[Baby's Name] Rice Ceremony' floral flex, purple-pink-white-gold chrome balloon garland, giant fairy butterflies on the sides and matching balloon pillars on a stage."
            image={riceR22.url}
            includes={["Personalised floral name ring backdrop","Purple, pink & gold chrome garland","Giant fairy butterfly side props","Matching balloon pillars on stage"]}
            rating={4.8}
            reviews={172}
            offer={<>₹4,999</>}
            original={<>₹6,999</>}
            discountPct={29}
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-vaani-cream-pink-ring"
            name="Cream, Pink & Silver Annaprashan Ring"
            description="An elegant Annaprashan ring backdrop with a personalised floral photo flex, lush cream, blush pink and silver chrome balloon garland and twin silver star foil balloon pillars — perfectly styled for a chic home ceremony."
            image={riceR23.url}
            includes={["Personalised floral photo flex","Cream, pink & silver chrome garland","Twin silver star foil pillars","Balloon runner on floor"]}
            rating={4.8}
            reviews={165}
            offer={<>₹4,499</>}
            original={<>₹5,999</>}
            discountPct={25}
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-radha-krishna-peacock-panels"
            name="Grand Radha-Krishna Peacock Panel Stage"
            description="A grand banquet stage with a hand-painted Yashoda & baby Krishna centre panel, peacock feather and Mughal-floral side arches, lush greenery & floral top runners, mini Bal Krishna cutouts and a green skirted pooja platform."
            image={riceR24.url}
            includes={["Yashoda & baby Krishna centre panel","Peacock & Mughal-floral side arches","Greenery & floral top runners","Bal Krishna cutouts + green pooja platform"]}
            rating={4.9}
            reviews={287}
            offer={<>₹19,999</>}
            original={<>₹24,999</>}
            discountPct={20}
            bestSeller
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-nidhiya-frozen-ring"
            name="Frozen Elsa Rice Ceremony Ring Backdrop"
            description="A magical Frozen-themed round backdrop with personalised snowflake '[Baby's Name] Rice Ceremony' flex, blue-purple-white-silver chrome & confetti balloon garland, a giant silver starburst foil and a cute Elsa foil balloon."
            image={riceR25.url}
            includes={["Personalised Frozen snowflake ring flex","Blue, purple & silver chrome garland","Giant silver starburst foil","Elsa foil balloon accent"]}
            rating={4.8}
            reviews={181}
            offer={<>₹4,999</>}
            original={<>₹6,999</>}
            discountPct={29}
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-unicorn-rainbow-stage"
            name="Luxury Unicorn Rainbow Rice Ceremony Stage"
            description="A grand unicorn rainbow themed stage with a large rainbow-cloud personalised backdrop, pastel candy balloon arch, tall unicorn cutouts on white crate pillars, gold candelabras and a carved beige couch — statement decor for a princess Annaprashan."
            image={riceR26.url}
            includes={["Rainbow-cloud personalised backdrop","Pastel candy balloon arch","Tall unicorn cutouts on crate pillars","Gold candelabras + carved couch"]}
            rating={4.9}
            reviews={296}
            offer={<>₹19,999</>}
            original={<>₹29,999</>}
            discountPct={33}
            bestSeller
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-radha-krishna-purple-ring"
            name="Radha-Krishna Purple Chrome Ring Backdrop"
            description="A divine round Radha-Krishna backdrop panel framed with a lush purple, lilac, white and gold chrome balloon garland and matching Bal Krishna & Radha themed cutouts on the sides — a rich, traditional ring setup for Annaprashan."
            image={riceR27.url}
            includes={["Radha-Krishna round backdrop panel","Purple, lilac & gold chrome garland","Bal Krishna & Radha themed cutouts","Balloon base runner"]}
            rating={4.8}
            reviews={193}
            offer={<>₹4,999</>}
            original={<>₹6,999</>}
            discountPct={29}
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-vani-pram-pink-arch"
            name="'Meet Our Baby' Pink Pram Naming Arch"
            description="A soft pink 'Meet Our Baby [Name]' arched backdrop with vintage pram artwork, pink-white-clear confetti balloon garland, rose-gold heart foils, cloud cutouts, ABC baby blocks and a cute pink butterfly & teddy hot-air balloon."
            image={riceR28.url}
            includes={["'Meet Our Baby' personalised pram arch","Pink, white & confetti balloon garland","Rose-gold heart foils & cloud cutouts","ABC blocks + butterfly & teddy props"]}
            rating={4.8}
            reviews={176}
            offer={<>₹5,999</>}
            original={<>₹7,999</>}
            discountPct={25}
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-rattan-arch-grey-pink"
            name="Boho Rattan 'Rice Ceremony' Arch Backdrop"
            description="A trendy boho backdrop pairing a natural rattan arched panel with a soft 'Rice Ceremony' script panel, a lush organic garland of grey, silver chrome, cream, blush pink and dusty blue balloons and delicate blue florals."
            image={riceR29.url}
            includes={["Rattan arched panel backdrop","'Rice Ceremony' script side panel","Grey, silver, cream & pink organic garland","Blue floral & foliage accents"]}
            rating={4.9}
            reviews={214}
            offer={<>₹9,999</>}
            original={<>₹14,999</>}
            discountPct={33}
          />
          <StaticPackageCard
            id="rice-ceremony-decoration-yashoda-krishna-blue-panel"
            name="Yashoda-Krishna Blue Rice Ceremony Stage"
            description="A vibrant Yashoda & baby Krishna panel backdrop framed by a blue-white balloon arch with silver disco balls, flanked by six Bal Krishna & Radha themed cutouts on blue balloon pillars — a grand Krishna themed rice ceremony setup."
            image={riceR30.url}
            includes={["Yashoda-Krishna centre panel backdrop","Blue & white balloon arch with disco foils","Six Bal Krishna & Radha themed cutouts","Blue balloon pillars on stage"]}
            rating={4.9}
            reviews={232}
            offer={<>₹7,999</>}
            original={<>₹11,999</>}
            discountPct={33}
            bestSeller
          />
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Gallery" title="Rice Ceremony Decoration Gallery" subtitle="Real setups by our decor team." />
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
            {[riceR1, riceR2, riceR3, riceR4, riceR5, riceR6, riceR7, riceR8, riceR9, riceR10, riceR11, riceR12, riceR13, riceR14, riceR15, riceR16, riceR17, riceR18, riceR19, riceR20, riceR21, riceR22, riceR23, riceR24, riceR25, riceR26, riceR27, riceR28, riceR29, riceR30].map((a, i) => (

              <img key={i} src={a.url} alt={`Rice Ceremony Decoration ${i + 1}`} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            ))}
            <img src="/75e0da81-49b9-4d14-b41f-16c2c0751359.jpg" alt="Rice Ceremony Decoration 11" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/1e631830-5a03-4c62-9230-c36bba689802.png" alt="Rice Ceremony Decoration 12" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
            <img src="/6633b342-e24c-4d6b-9ea0-7bef49f66141.jpg" alt="Rice Ceremony Decoration 13" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]" />
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
          <SectionHeader eyebrow="FAQs" title="Rice Ceremony Decoration FAQs" />
          <div className="mt-8"><Faq items={c.faqs} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Available In" title="Rice Ceremony Decoration in Your City" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {BRAND.cities.map((city) => (
            <Link
              key={city}
              to="/city/$slug"
              params={{ slug: city.toLowerCase() }}
              className="rounded-xl border bg-card p-3 text-center text-sm hover:border-primary hover:text-primary"
            >
              Rice in {city}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
