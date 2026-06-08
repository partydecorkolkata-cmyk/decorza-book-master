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
import birthdayGalleryGreenThree from "@/assets/birthday-gallery-green-3.png.asset.json";
import birthdayGalleryPinkEleven from "@/assets/birthday-gallery-pink-11.png.asset.json";
import birthdayGalleryBlueTwo from "@/assets/birthday-gallery-blue-2.png.asset.json";
import birthdayGalleryFirstBirthday from "@/assets/birthday-gallery-first-birthday.webp.asset.json";
import birthdayGalleryBeigeTwentyThree from "@/assets/birthday-gallery-beige-23.jpeg.asset.json";
import birthdayGalleryRoseGoldFortyThree from "@/assets/birthday-gallery-rosegold-43.jpeg.asset.json";
import birthdayGalleryPinkMehakThree from "@/assets/birthday-gallery-pink-mehak-3.png.asset.json";
import birthdayGalleryRoseGoldFive from "@/assets/birthday-gallery-rosegold-5.png.asset.json";
import birthdayGalleryPurpleFifteen from "@/assets/birthday-gallery-purple-15.png.asset.json";
import birthdayGalleryNavyTwelve from "@/assets/birthday-gallery-navy-12.png.asset.json";
import pkgLethanPastel from "@/assets/birthday-pkg-lethan-pastel.jpg.asset.json";
import pkgJungleParv from "@/assets/birthday-pkg-jungle-parv.webp.asset.json";
import pkg7thMahitha from "@/assets/birthday-pkg-7th-mahitha.webp.asset.json";
import pkg50thGold from "@/assets/birthday-pkg-50th-gold.webp.asset.json";
import pkg75thDaddy from "@/assets/birthday-pkg-75th-daddy.jpg.asset.json";
import pkg27thSahiba from "@/assets/birthday-pkg-27th-sahiba.png.asset.json";
import pkgCandlePalm from "@/assets/birthday-pkg-candle-palm.png.asset.json";
import pkgRingGoldWhite from "@/assets/birthday-pkg-ring-goldwhite.jpg.asset.json";
import pkg40LookGood from "@/assets/birthday-pkg-40-look-good.jpg.asset.json";
import pkg40GoldBlack from "@/assets/birthday-pkg-40-goldblack.jpg.asset.json";
import pkg70thBlackSilver from "@/assets/bday-70th-black-silver.webp.asset.json";
import pkg18thMarquee from "@/assets/bday-18th-marquee.jpg.asset.json";
import pkgCheers23 from "@/assets/bday-cheers-23.jpg.asset.json";
import pkg60thMumma from "@/assets/bday-60th-mumma.jpg.asset.json";
import pkgGoldNeonRing from "@/assets/bday-gold-neon-ring.jpg.asset.json";
import pkgRoseGoldButterfly from "@/assets/bday-rosegold-butterfly.jpg.asset.json";
import pkgBedroomPurple from "@/assets/bday-bedroom-purple.jpg.asset.json";
import pkgGoldSequinPink from "@/assets/bday-gold-sequin-pink.jpg.asset.json";
import pkgCarsVedaansh from "@/assets/bday-cars-vedaansh.jpg.asset.json";
import pkgBlueSilverMoon from "@/assets/bday-blue-silver-moon.jpg.asset.json";
import pkgCocomelonAarna from "@/assets/bday-cocomelon-aarna.jpg.asset.json";
import pkg50thPinkGold from "@/assets/bday-50th-pink-gold.jpg.asset.json";
import pkg26thBowBlack from "@/assets/bday-26th-bow-black.jpg.asset.json";
import pkgHanvikaButterfly from "@/assets/bday-hanvika-butterfly.jpg.asset.json";
import pkgMishantCocomelonBlue from "@/assets/bday-mishant-cocomelon-blue.jpg.asset.json";
import pkgBlueChromeButterfly from "@/assets/bday-blue-chrome-butterfly.jpg.asset.json";
import pkg18thPastelRoseGold from "@/assets/bday-18th-pastel-rosegold.jpg.asset.json";
import pkg22ndWifeGold from "@/assets/bday-22nd-wife-gold.jpg.asset.json";
import pkgZianSpace from "@/assets/bday-zian-space.jpg.asset.json";
import pkgFrozenFaizaZara from "@/assets/bday-frozen-faiza-zara.jpg.asset.json";

const birthdayGalleryImages = [
  { src: birthdayGalleryGreenThree.url, alt: "Green and gold birthday balloon frame setup" },
  { src: birthdayGalleryPinkEleven.url, alt: "Pink chrome birthday decoration with personalised name setup" },
  { src: birthdayGalleryBlueTwo.url, alt: "Blue and gold second birthday balloon backdrop" },
  { src: birthdayGalleryFirstBirthday.url, alt: "Pastel first birthday backdrop with elephant theme" },
  { src: birthdayGalleryBeigeTwentyThree.url, alt: "Beige birthday backdrop with neon sign and marquee numbers" },
  { src: birthdayGalleryRoseGoldFortyThree.url, alt: "Rose gold birthday balloon arch with neon sign and number balloons" },
  { src: birthdayGalleryPinkMehakThree.url, alt: "Pink and gold third birthday personalised backdrop" },
  { src: birthdayGalleryRoseGoldFive.url, alt: "Rose gold fifth birthday home decoration setup" },
  { src: birthdayGalleryPurpleFifteen.url, alt: "Purple birthday decoration with foil name balloons and number setup" },
  { src: birthdayGalleryNavyTwelve.url, alt: "Navy blue and gold twelfth birthday decoration setup" },
  { src: pkgLethanPastel.url, alt: "Pastel balloon ring backdrop with LETHAN marquee letters and Happy Birthday neon sign" },
  { src: pkgJungleParv.url, alt: "Jungle theme first birthday balloon arch with animal foil balloons" },
  { src: pkg7thMahitha.url, alt: "Seventh birthday backdrop with mustard, ivory and silver chrome balloons" },
  { src: pkg50thGold.url, alt: "50th birthday gold and white balloon arch with foil 50 number balloons" },
  { src: pkg75thDaddy.url, alt: "75th birthday outdoor backdrop with gold, silver and ivory balloon garland" },
  { src: pkg27thSahiba.url, alt: "Beige arch backdrop with gold balloon garland and marquee 27 letters" },
  { src: pkgCandlePalm.url, alt: "Romantic candle and palm leaf birthday setup with fairy light curtain" },
  { src: pkgRingGoldWhite.url, alt: "White and gold ring balloon arch with Happy Birthday neon sign" },
  { src: pkg40LookGood.url, alt: "Damn I Make 40 Look Good pink arch backdrop with pastel balloon garland" },
  { src: pkg40GoldBlack.url, alt: "40th birthday gold, black and silver balloon arch with Happy Birthday neon" },
  { src: pkg70thBlackSilver.url, alt: "70th birthday black, white and silver chrome balloon garland backdrop" },
  { src: pkg18thMarquee.url, alt: "18th birthday outdoor arch with white and gold balloons and giant marquee 18 numbers" },
  { src: pkgCheers23.url, alt: "Cheers to 23 navy, ivory and rose gold balloon garland arch with pampas" },
  { src: pkg60thMumma.url, alt: "Happy 60th Birthday Mumma pink arch with gold balloon garland and marquee 60" },
  { src: pkgGoldNeonRing.url, alt: "Gold and ivory balloon ring backdrop with Happy Birthday neon and bamboo wall" },
  { src: pkgRoseGoldButterfly.url, alt: "Rose gold and white balloon ring backdrop with butterflies and Happy Birthday neon" },
  { src: pkgBedroomPurple.url, alt: "Romantic bedroom birthday surprise with purple and pink balloon canopy and neon" },
  { src: pkgGoldSequinPink.url, alt: "Gold sequin shimmer wall with pink and gold balloon arch and Happy Birthday neon" },
  { src: pkgCarsVedaansh.url, alt: "Cars Lightning McQueen theme sixth birthday arch backdrop with checkered balloons" },
  { src: pkgBlueSilverMoon.url, alt: "Blue, white and silver balloon moon ring backdrop with Happy Birthday neon" },
];

export const Route = createFileRoute("/service/birthday-decoration")({
  loader: () => {
    const c = categoryBySlug("birthday-decoration");
    if (!c) throw notFound();
    return { category: c };
  },
  head: () => ({
    meta: [
      { title: `Birthday Decoration in India | From ₹1,499 | Decorza Events` },
      { name: "description", content: `Premium balloon arches, ring decorations, LED backdrops and themed birthday surprises designed to make the day unforgettable. Book on WhatsApp.` },
      { property: "og:title", content: `Birthday Decoration | Decorza Events` },
      { property: "og:image", content: "/5619dd16-b57c-4707-9f6b-b37ae79bb3de.jpg" },
    ],
    links: [{ rel: "canonical", href: "/service/birthday-decoration" }],
  }),
  component: ServicePage,
});

function ServicePage() {
  const { category: c } = Route.useLoaderData();
  const wa = waLink(waBookingMessage({ packageName: "Birthday Decoration" }));
  const reviews = REVIEWS.filter(([, , s]) => (s as string) === "Birthday Decoration").slice(0, 6);
  const displayReviews = reviews.length ? reviews : REVIEWS.slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/5619dd16-b57c-4707-9f6b-b37ae79bb3de.jpg" alt="Birthday Decoration" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.2_0.08_305)]/90 to-[oklch(0.32_0.13_5)]/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <Badge className="bg-white/10 backdrop-blur border border-white/20 text-white">
            <Star className="mr-1 h-3 w-3 fill-gold text-gold" /> 4.9 · 2,148 reviews
          </Badge>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl">Birthday Decoration</h1>
          <p className="mt-4 max-w-2xl text-white/85">Premium balloon arches, ring decorations, LED backdrops and themed birthday surprises designed to make the day unforgettable.</p>
          <p className="mt-4 font-display text-2xl text-gold">Starting from ₹1,499</p>
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
        <SectionHeader eyebrow="Packages" title="Birthday Decoration Packages" subtitle="Pick from Essential, Premium and Luxury — or customise on WhatsApp." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <StaticPackageCard
            id="birthday-decoration-essential"
            name="Essential Birthday Decoration"
            description="A stunning blue, white and silver balloon frame backdrop with shimmer curtain, personalised name & age foil balloons and a 'Happy Birthday' bunting — perfect for an in-home birthday surprise as shown in the picture."
            image="/birthday-essential-vivan.png"
            includes={["Blue, white & silver balloon frame", "Personalised name & age foil balloons", "Shimmer curtain + Happy Birthday bunting"]}
            rating={4.800000000000001}
            reviews={614}
            offer={<>₹1,999</>}
            original={<>₹3,999</>}
            discountPct={50}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-premium"
            name="Premium Birthday Decoration"
            description="A premium chrome blue & white balloon ring arch with a 'Happy Birthday' neon sign, marquee light-up number and confetti balloon accents — styled exactly like the reference photo."
            image="/birthday-premium-arch.webp"
            includes={["Chrome blue & white ring balloon arch", "Happy Birthday neon sign", "Light-up marquee number + confetti balloons"]}
            rating={4.9}
            reviews={859}
            offer={<>₹3,499</>}
            original={<>₹4,999</>}
            discountPct={30}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-luxury"
            name="Luxury Birthday Decoration"
            description="A full luxury Cocomelon theme birthday setup with a shimmer sequin wall, neon 'Happy Birthday' sign, pastel balloon arch with gold chrome accents, character cutouts and a glowing marquee number — recreated to match the photo."
            image="/birthday-luxury-cocomelon.jpg"
            includes={["Shimmer sequin wall + neon sign", "Pastel + gold chrome balloon arch", "Cocomelon character cutouts & marquee number"]}
            rating={4.800000000000001}
            reviews={1432}
            offer={<>₹5,999</>}
            original={<>₹8,999</>}
            discountPct={33}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-pastel-ring-marquee"
            name="Pastel Ring Backdrop with Marquee Name"
            description="Soft pastel balloon ring backdrop in blue, blush, beige and brown with pink rose accents, palm leaves, a 'Happy Birthday' neon sign, shimmer curtain and personalised LED marquee name letters — recreated from the reference photo."
            image={pkgLethanPastel.url}
            includes={["Pastel ring balloon garland with rose & palm accents", "Shimmer curtain + Happy Birthday neon sign", "Personalised LED marquee name letters"]}
            rating={4.9}
            reviews={412}
            offer={<>₹4,999</>}
            original={<>₹7,999</>}
            discountPct={38}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-jungle-theme"
            name="Jungle Theme First Birthday"
            description="A vibrant jungle theme balloon arch with chrome gold, mint, peach and olive balloons, animal foil balloons (lion, tiger, giraffe, monkey, zebra), tropical leaves, a personalised banner and a gold foil number column — perfect for a first birthday."
            image={pkgJungleParv.url}
            includes={["Jungle balloon arch with animal foil balloons", "Personalised name banner backdrop", "Gold foil number column with cylinder pedestal"]}
            rating={4.9}
            reviews={528}
            offer={<>₹3,999</>}
            original={<>₹6,999</>}
            discountPct={43}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-7th-mustard-silver"
            name="7th Birthday Mustard & Silver Setup"
            description="An elegant 7th birthday setup with a striped arch backdrop, mustard, ivory, orange and silver chrome balloon garland, golden palm spear fans, pampas floral accents, clear bobo balloons and a glowing marquee '7' on cylinder pedestals."
            image={pkg7thMahitha.url}
            includes={["Striped arch + mustard/silver balloon garland", "Golden palm fans & pampas floral cluster", "Marquee number 7 with twin cylinder pedestals"]}
            rating={4.800000000000001}
            reviews={367}
            offer={<>₹4,499</>}
            original={<>₹6,999</>}
            discountPct={36}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-50th-gold-white"
            name="50th Birthday Gold & White Arch"
            description="A grand 50th birthday backdrop with a chrome gold, white and clear confetti balloon arch on a black panel with gold 'Happy Birthday' lettering, giant gold foil '50' number balloons on balloon plinths, and matching balloon columns with star toppers."
            image={pkg50thGold.url}
            includes={["Chrome gold + white balloon arch on black panel", "Giant gold foil 50 number balloons", "Matching balloon columns with star toppers"]}
            rating={4.9}
            reviews={289}
            offer={<>₹4,499</>}
            original={<>₹7,999</>}
            discountPct={44}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-75th-daddy"
            name="75th Birthday Outdoor Celebration"
            description="A heartfelt 75th birthday outdoor setup with a custom 'Happy 75th Birthday Daddy!' banner, lush gold, silver and ivory balloon garland framing the backdrop, gold star foil balloons, fresh floral vases and warm fairy lights overhead."
            image={pkg75thDaddy.url}
            includes={["Custom Happy 75th Birthday banner", "Gold, silver & ivory balloon garland frame", "Star foil balloons + fairy lights & floral vases"]}
            rating={5}
            reviews={194}
            offer={<>₹5,999</>}
            original={<>₹8,999</>}
            discountPct={33}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-27th-sahiba-arch"
            name="Personalised Beige Arch with Marquee Age"
            description="A chic beige arch panel with personalised 'Happy Birthday' calligraphy, a luxe chrome gold, ivory and white balloon garland with pampas grass, a gold metallic pedestal stand with cascading balloons and giant LED marquee age numbers."
            image={pkg27thSahiba.url}
            includes={["Personalised beige arch + chrome gold garland", "Pampas grass + gold metallic pedestal", "Giant LED marquee age numbers"]}
            rating={4.9}
            reviews={341}
            offer={<>₹4,499</>}
            original={<>₹6,999</>}
            discountPct={36}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-candle-palm-romantic"
            name="Romantic Candle & Palm Leaf Setup"
            description="A romantic birthday setup with a warm fairy light curtain backdrop, dried palm spear fans, draped white chiffon, blush & ivory floral cluster and a row of glowing LED pillar candles with rose-filled vases — ideal for an intimate balcony or rooftop birthday."
            image={pkgCandlePalm.url}
            includes={["Fairy light curtain + draped chiffon backdrop", "Dried palm spear fans + blush floral cluster", "LED pillar candles & rose-filled glass vases"]}
            rating={4.9}
            reviews={258}
            offer={<>₹4,999</>}
            original={<>₹7,999</>}
            discountPct={38}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-ring-gold-white"
            name="Classic Gold & White Ring Backdrop"
            description="A classic round ring backdrop with chrome gold, white and grey pastel balloon garland, a 'Happy Birthday' neon sign in the centre, a silver star foil accent and scattered floor balloons — perfect for an in-home birthday surprise."
            image={pkgRingGoldWhite.url}
            includes={["Round ring frame with gold & white balloon garland", "Happy Birthday neon sign + silver star foil", "Scattered floor balloons accent"]}
            rating={4.800000000000001}
            reviews={476}
            offer={<>₹3,499</>}
            original={<>₹4,999</>}
            discountPct={30}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-40-look-good"
            name="Damn I Make 40 Look Good Setup"
            description="A statement 40th birthday outdoor setup with a pink arch panel printed 'Damn I Make 40 Look Good', a luxe ivory, sage and beige balloon garland with golden palm fans, pampas grass floral cluster and blush cylinder pedestals on lawn turf."
            image={pkg40LookGood.url}
            includes={["Custom 40 Look Good printed arch panel", "Ivory, sage & beige luxe balloon garland", "Pampas floral cluster + blush cylinder pedestals"]}
            rating={5}
            reviews={163}
            offer={<>₹6,999</>}
            original={<>₹9,999</>}
            discountPct={30}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-40-gold-black-silver"
            name="40th Birthday Gold, Black & Silver Arch"
            description="A bold 40th birthday in-home setup with a chrome gold, black and silver balloon ring arch, confetti balloon accents, a 'Happy Birthday' neon sign, giant gold foil '40' number balloons on balloon columns and a gold pedestal stand for the cake."
            image={pkg40GoldBlack.url}
            includes={["Gold, black & silver ring balloon arch", "Happy Birthday neon sign + confetti balloons", "Gold foil 40 number balloons + cake pedestal"]}
            rating={4.9}
            reviews={387}
            offer={<>₹2,999</>}
            original={<>₹4,999</>}
            discountPct={40}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-70th-black-silver"
            name="70th Birthday Black, White & Silver Setup"
            description="An elegant 70th birthday in-home setup with a 'Happy 70th Birthday' calligraphy backdrop, lush black, white, silver chrome and clear bobo balloon garland framing the panel and a delicate black bow motif on the backdrop."
            image={pkg70thBlackSilver.url}
            includes={["Happy 70th Birthday calligraphy backdrop", "Black, white, silver chrome & bobo balloon garland", "Designer black bow motif accent"]}
            rating={4.9}
            reviews={216}
            offer={<>₹3,999</>}
            original={<>₹5,999</>}
            discountPct={33}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-18th-marquee-outdoor"
            name="18th Birthday Outdoor Arch with Marquee 18"
            description="A stunning 18th birthday outdoor night setup with a white arched backdrop, 'Happy Birthday' neon sign, a luxe white, ivory and chrome gold organic balloon garland with twinkle fairy lights, giant LED marquee '18' numbers and gold pedestal pillars for sweet jars and bottles."
            image={pkg18thMarquee.url}
            includes={["White arched backdrop + Happy Birthday neon", "Organic white, ivory & chrome gold balloon garland", "Giant LED marquee 18 + gold pedestal pillars"]}
            rating={5}
            reviews={324}
            offer={<>₹4,499</>}
            original={<>₹5,999</>}
            discountPct={25}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-cheers-23"
            name="Cheers to 23 Arch Backdrop"
            description="A trendy 'Cheers To 23' white arched backdrop with a dramatic navy, ivory and rose gold chrome balloon garland, pampas grass spray accents and a matching mini balloon cluster on a side cylinder pedestal — perfect for a classy 23rd birthday."
            image={pkgCheers23.url}
            includes={["Cheers To 23 white arch backdrop", "Navy, ivory & rose gold chrome balloon garland", "Pampas grass + matching side pedestal cluster"]}
            rating={4.9}
            reviews={278}
            offer={<>₹4,299</>}
            original={<>₹5,999</>}
            discountPct={28}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-60th-mumma"
            name="Happy 60th Birthday Mumma Setup"
            description="A warm 60th birthday setup with a personalised 'Happy 60th Birthday Mumma!!' blush arch backdrop, lush ivory, white, gold chrome and blush balloon garland with tropical leaf accents, giant LED marquee '60' numbers and a matching balloon cluster on the side."
            image={pkg60thMumma.url}
            includes={["Personalised Happy 60th Birthday arch backdrop", "Ivory, white, gold & blush balloon garland with leaves", "Giant LED marquee 60 numbers"]}
            rating={4.9}
            reviews={241}
            offer={<>₹4,499</>}
            original={<>₹5,999</>}
            discountPct={25}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-gold-neon-bamboo"
            name="Gold Neon Ring with Bamboo Backdrop"
            description="A boho gold and ivory balloon ring backdrop set against a bamboo wall with a 'Happy Birthday' warm neon sign in the centre, dried palm fans, fresh pink and white floral cluster, a centre table and matching gold balloon columns on either side."
            image={pkgGoldNeonRing.url}
            includes={["Gold & ivory balloon ring on bamboo wall", "Happy Birthday warm neon sign + palm fans", "Floral cluster + balloon columns and centre table"]}
            rating={4.800000000000001}
            reviews={302}
            offer={<>₹3,499</>}
            original={<>₹4,999</>}
            discountPct={30}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-rosegold-butterfly"
            name="Rose Gold Butterfly Ring Backdrop"
            description="A glam rose gold, white and chrome balloon ring backdrop with rose gold butterfly cutouts, a 'Happy Birthday' neon sign, a champagne bottle foil balloon, a gold pedestal table with marble top and a cascade of floor balloons — perfect for a 21st or 25th birthday."
            image={pkgRoseGoldButterfly.url}
            includes={["Rose gold & white ring balloon arch", "Butterfly cutouts + Happy Birthday neon", "Champagne foil + gold marble pedestal table"]}
            rating={4.9}
            reviews={418}
            offer={<>₹3,299</>}
            original={<>₹4,999</>}
            discountPct={34}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-bedroom-purple-surprise"
            name="Romantic Bedroom Birthday Surprise"
            description="A complete bedroom birthday surprise with a lavender, blush, peach and chrome silver balloon arch, a 'Happy Birthday' neon sign, helium balloons with ribbon curls covering the ceiling, a fairy-light canopy over the bed and rose petals — perfect for a partner's birthday."
            image={pkgBedroomPurple.url}
            includes={["Lavender, blush & chrome silver balloon arch", "Happy Birthday neon + helium ceiling balloons", "Fairy-light bed canopy + rose petal styling"]}
            rating={4.9}
            reviews={534}
            offer={<>₹4,999</>}
            original={<>₹7,999</>}
            discountPct={38}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-gold-sequin-pink"
            name="Gold Sequin Wall with Pink Arch"
            description="A premium gold shimmer sequin wall with a 'Happy Birthday' neon sign, a lush hot pink, blush, white and chrome gold organic balloon arch, gold 4D foil orb balloons, dried palm spear fans and a giant gold cone star foil — a true showstopper setup."
            image={pkgGoldSequinPink.url}
            includes={["Gold sequin shimmer wall + Happy Birthday neon", "Hot pink, blush, white & gold organic balloon arch", "4D gold orb balloons + cone star foil & palm fans"]}
            rating={4.9}
            reviews={612}
            offer={<>₹6,499</>}
            original={<>₹9,999</>}
            discountPct={35}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-cars-vedaansh"
            name="Cars Lightning McQueen 6th Birthday"
            description="A racing-themed 6th birthday setup with a personalised 'Happy Birthday Vedaansh' Cars arched backdrop, a red, baby blue and black checkered balloon garland with checkered foil balloons, a Lightning McQueen foil balloon, a tyre foil balloon, a checkered cylinder pedestal and a LED marquee '6'."
            image={pkgCarsVedaansh.url}
            includes={["Personalised Cars themed arched backdrop", "Red, baby blue, black & checkered balloon garland", "Lightning McQueen + tyre foil + LED marquee 6"]}
            rating={4.9}
            reviews={289}
            offer={<>₹3,999</>}
            original={<>₹5,999</>}
            discountPct={33}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-blue-silver-moon"
            name="Blue & Silver Moon Ring Backdrop"
            description="A serene blue, white and chrome silver balloon moon ring backdrop with a 'Happy Birthday' warm neon sign, a teal chiffon drape cascade, dried gold palm spear fans and a pink and ivory floral garland — ideal for an in-home birthday surprise."
            image={pkgBlueSilverMoon.url}
            includes={["Blue, white & chrome silver moon ring arch", "Happy Birthday neon + teal chiffon drape", "Gold palm fans + pink & ivory floral garland"]}
            rating={4.800000000000001}
            reviews={356}
            offer={<>₹3,499</>}
            original={<>₹4,999</>}
            discountPct={30}
            bestSeller={false}
          />
        </div>

      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Gallery" title="Birthday Decoration Gallery" subtitle="All uploaded birthday setups are now shown here." />
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {birthdayGalleryImages.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt || `Birthday Decoration Gallery ${index + 1}`}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-xl object-cover transition-transform hover:scale-[1.02]"
              />
            ))}
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
          <SectionHeader eyebrow="FAQs" title="Birthday Decoration FAQs" />
          <div className="mt-8"><Faq items={c.faqs} /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Available In" title="Birthday Decoration in Your City" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {BRAND.cities.map((city) => (
            <Link
              key={city}
              to="/city/$slug"
              params={{ slug: city.toLowerCase() }}
              className="rounded-xl border bg-card p-3 text-center text-sm hover:border-primary hover:text-primary"
            >
              Birthday in {city}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

