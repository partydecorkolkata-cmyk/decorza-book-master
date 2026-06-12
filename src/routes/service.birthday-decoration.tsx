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
import pkgBeige23Rooftop from "@/assets/bday-beige-23-rooftop.jpeg.asset.json";
import pkgSilverSequinDisco from "@/assets/bday-silver-sequin-disco.jpg.asset.json";
import pkg32ndAnuja from "@/assets/bday-32nd-anuja-yellow-silver.jpg.asset.json";
import pkgGoldSequinBW from "@/assets/bday-gold-sequin-black-white.jpg.asset.json";
import pkgNyeSilverCheers from "@/assets/bday-nye-silver-cheers.jpg.asset.json";
import pkg30thGoldSequin from "@/assets/bday-30th-gold-sequin-marquee.jpg.asset.json";
import pkg1stCocomelonJerry from "@/assets/bday-1st-cocomelon-jerry.jpg.asset.json";
import pkg24thPinkFloating from "@/assets/bday-24th-pink-floating.jpg.asset.json";
import pkg27thGoldSequinBW from "@/assets/bday-27th-gold-sequin-bw.jpg.asset.json";
import pkg37thBlackGold from "@/assets/bday-37th-black-gold-pampas.webp.asset.json";
import pkgNewPinkRosegold43 from "@/assets/bday-new-pink-rosegold-43.jpeg.asset.json";
import pkgNewBlackSilverArch from "@/assets/bday-new-black-silver-arch.jpg.asset.json";
import pkgNewDikshaGoldPampas from "@/assets/bday-new-diksha-gold-pampas.webp.asset.json";
import pkgNewCocomelonRainbow1st from "@/assets/bday-new-cocomelon-rainbow-1st.jpg.asset.json";
import pkgNewAgastyaCocomelonBus from "@/assets/bday-new-agastya-cocomelon-bus.jpg.asset.json";
import pkgNewOmanshCars8th from "@/assets/bday-new-omansh-cars-8th.jpg.asset.json";
import pkgNewEdhaBerryFirst from "@/assets/bday-new-edha-berry-first.jpg.asset.json";
import pkgNewAahsviButterfly2nd from "@/assets/bday-new-aahsvi-butterfly-2nd.jpg.asset.json";
import pkgNewNyeCheersBlackSilver from "@/assets/bday-new-nye-cheers-black-silver.jpg.asset.json";
import pkgNew60thPinkGold from "@/assets/bday-new-60th-pink-gold.jpg.asset.json";
import pkgB1Mehak3rd from "@/assets/bday-b1-mehak-3rd-pink.jpeg.asset.json";
import pkgB2FifthRosegold from "@/assets/bday-b2-5th-rosegold.jpeg.asset.json";
import pkgB3SeventhPurple from "@/assets/bday-b3-7th-purple-frame.jpeg.asset.json";
import pkgB4Vivaan2nd from "@/assets/bday-b4-vivaan-2nd-blue.jpeg.asset.json";
import pkgB5Manav15th from "@/assets/bday-b5-manav-15th-purple.jpeg.asset.json";
import pkgB6ThirdGreen from "@/assets/bday-b6-3rd-green-frame.jpeg.asset.json";
import pkgB7Saanvi11th from "@/assets/bday-b7-saanvi-11th-rosegold.jpeg.asset.json";
import pkgB8Eighteenth from "@/assets/bday-b8-18th-purple-silver.jpeg.asset.json";
import pkgB9Armaan8th from "@/assets/bday-b9-armaan-8th-green.jpeg.asset.json";
import pkgB10Twelfth from "@/assets/bday-b10-12th-navy-gold.jpeg.asset.json";
import pkgC1NavyGoldArch from "@/assets/bday-c1-navy-gold-arch.jpeg.asset.json";
import pkgC2Blue15th from "@/assets/bday-c2-blue-15th.jpeg.asset.json";
import pkgC3PurpleGold from "@/assets/bday-c3-purple-gold.jpeg.asset.json";
import pkgC4AnanyaPink8 from "@/assets/bday-c4-ananya-pink-8.jpeg.asset.json";
import pkgC5RahulNavy25 from "@/assets/bday-c5-rahul-navy-25.jpeg.asset.json";
import pkgC6RoseGold21 from "@/assets/bday-c6-rosegold-21.jpeg.asset.json";
import pkgC7OliveWhite1st from "@/assets/bday-c7-olive-white-1st.jpeg.asset.json";
import pkgC8Blue1st from "@/assets/bday-c8-blue-1st.jpeg.asset.json";
import pkgC9NavySageResto from "@/assets/bday-c9-navy-sage-resto.jpeg.asset.json";
import pkgC10PurplePinkResto from "@/assets/bday-c10-purple-pink-resto.jpeg.asset.json";

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
  { src: pkgCocomelonAarna.url, alt: "CoComelon theme 4th birthday rainbow balloon arch with JJ and watermelon cutouts" },
  { src: pkg50thPinkGold.url, alt: "50th birthday elegant pink, white and gold balloon arch with marquee 50 numbers" },
  { src: pkg26thBowBlack.url, alt: "26th birthday black and pink balloon ring backdrop with giant satin bow and marquee 26" },
  { src: pkgHanvikaButterfly.url, alt: "Hanvika's 1st birthday pink and lilac butterfly balloon arch with floral backdrop" },
  { src: pkgMishantCocomelonBlue.url, alt: "Mishant 1st birthday CoComelon blue and beige cloud theme balloon backdrop" },
  { src: pkgBlueChromeButterfly.url, alt: "Royal blue chrome and white 1st birthday balloon ring with butterflies and marquee 1" },
  { src: pkg18thPastelRoseGold.url, alt: "18th birthday pastel blue, white and rose gold balloon arch with neon and foil 18" },
  { src: pkg22ndWifeGold.url, alt: "22nd birthday white and gold balloon ring backdrop with marquee 22 numbers and florals" },
  { src: pkgZianSpace.url, alt: "Zian's space and astronaut theme 5th birthday twin arch backdrop with planet props" },
  { src: pkgFrozenFaizaZara.url, alt: "Frozen Elsa and Anna theme birthday decoration for Faiza and Zara with pastel balloons" },
  { src: pkgBeige23Rooftop.url, alt: "Rooftop 23rd birthday beige arch with peach and brown balloon garland and marquee 23" },
  { src: pkgSilverSequinDisco.url, alt: "Silver sequin shimmer wall with white and chrome balloon arch and disco ball" },
  { src: pkg32ndAnuja.url, alt: "32nd birthday silver and yellow balloon ring backdrop with floral top and personalised name" },
  { src: pkgGoldSequinBW.url, alt: "Outdoor gold sequin wall with black, white and gold balloon garland and Happy Birthday neon" },
  { src: pkgNyeSilverCheers.url, alt: "New Year Cheers silver and black chrome balloon arch with champagne foil and neon" },
  { src: pkg30thGoldSequin.url, alt: "30th birthday gold sequin wall with white and gold balloon arch and marquee 30 numbers" },
  { src: pkg1stCocomelonJerry.url, alt: "1st birthday CoComelon and Tom & Jerry pastel arch with gold sequin centre panel" },
  { src: pkg24thPinkFloating.url, alt: "24th birthday pink sequin wall with chrome balloon arch and floating helium balloons" },
  { src: pkg27thGoldSequinBW.url, alt: "27th birthday gold sequin wall with black, white and gold balloon arch and foil 27" },
  { src: pkg37thBlackGold.url, alt: "37th birthday black, gold and white balloon arch with pampas grass and marquee 37" },
  { src: pkgNewPinkRosegold43.url, alt: "43rd birthday pastel pink and rose gold balloon ring with Happy Birthday neon and foil 43" },
  { src: pkgNewBlackSilverArch.url, alt: "Luxury black and silver chrome balloon arch with disco balls, starburst foils and white bows" },
  { src: pkgNewDikshaGoldPampas.url, alt: "Outdoor ivory arch with gold, black and white balloon garland and pampas grass for Diksha" },
  { src: pkgNewCocomelonRainbow1st.url, alt: "CoComelon rainbow 1st birthday pastel balloon arch with JJ cutouts and marquee 1" },
  { src: pkgNewAgastyaCocomelonBus.url, alt: "Agastya turns 3 CoComelon bus theme balloon column with blue, yellow and orange balloons" },
  { src: pkgNewOmanshCars8th.url, alt: "Omansh 8th birthday Cars Lightning McQueen sequin wall with red, blue and black balloon arch" },
  { src: pkgNewEdhaBerryFirst.url, alt: "Edha's Berry First 1st birthday strawberry theme pink and red balloon arch with marquee 1" },
  { src: pkgNewAahsviButterfly2nd.url, alt: "Aahsvi 2nd birthday purple and gold butterfly theme balloon arch with marquee 2" },
  { src: pkgNewNyeCheersBlackSilver.url, alt: "New Year Cheers black and silver chrome balloon ring with champagne foil and Happy Birthday neon" },
  { src: pkgNew60thPinkGold.url, alt: "60th birthday pink and gold balloon ring with veil drape, Happy Birthday neon and marquee 60" },
  { src: pkgB1Mehak3rd.url, alt: "Mehak 3rd birthday pink, white and gold balloon frame with silver foil curtain and rose gold MEHAK name balloons" },
  { src: pkgB2FifthRosegold.url, alt: "5th birthday rose gold Happy Birthday balloon arch with pink, peach and chrome gold garland and foil 5" },
  { src: pkgB3SeventhPurple.url, alt: "7th birthday purple, lilac and white balloon frame with silver foil curtain, Happy Birthday banner and foil 7" },
  { src: pkgB4Vivaan2nd.url, alt: "Vivaan 2nd birthday royal blue, white and gold balloon frame with gold foil curtain and VIVAAN name balloons" },
  { src: pkgB5Manav15th.url, alt: "Manav 15th birthday purple, lilac and silver chrome balloon arch with star foils and MANAV 15 name balloons" },
  { src: pkgB6ThirdGreen.url, alt: "3rd birthday emerald green, sage and gold balloon frame with silver foil curtain and foil 3" },
  { src: pkgB7Saanvi11th.url, alt: "Saanvi 11th birthday pink and rose gold balloon arch with star foils, rose gold curtain and SAANVI 11 name balloons" },
  { src: pkgB8Eighteenth.url, alt: "18th birthday purple, lilac, silver and white balloon arch with Happy Birthday foil text and giant foil 18" },
  { src: pkgB9Armaan8th.url, alt: "Armaan 8th birthday green, gold and white balloon frame with gold foil curtain and ARMAAN name balloons" },
  { src: pkgB10Twelfth.url, alt: "12th birthday navy blue, white and gold balloon arch with silver foil curtain, star foils and gold foil 12" },
  { src: pkgC1NavyGoldArch.url, alt: "Luxury navy blue, gold and white balloon arch with gold Happy Birthday foil and ceiling balloon bouquets" },
  { src: pkgC2Blue15th.url, alt: "15th birthday royal blue, sky blue and silver chrome balloon arch with silver foil curtain and giant blue foil 15" },
  { src: pkgC3PurpleGold.url, alt: "Purple, lilac, gold and silver chrome balloon arch with silver foil curtain and gold Happy Birthday foil text" },
  { src: pkgC4AnanyaPink8.url, alt: "Ananya 8th birthday pink, hot pink, white and silver chrome balloon frame with foil curtain and ANANYA 8 name balloons" },
  { src: pkgC5RahulNavy25.url, alt: "Rahul 25th birthday navy blue, gold, silver and white balloon frame with silver foil curtain and RAHUL 25 name balloons" },
  { src: pkgC6RoseGold21.url, alt: "21st birthday rose gold, pearl and gold chrome balloon arch with silver foil curtain and rose gold Happy Birthday 21 foil" },
  { src: pkgC7OliveWhite1st.url, alt: "1st birthday olive, white and cream balloon arch with daisy balloon, gold foil curtain and sage Happy Birthday foil and gold 1" },
  { src: pkgC8Blue1st.url, alt: "1st birthday royal blue, white and silver chrome balloon arch with silver foil curtain and blue Happy Birthday 1 foil" },
  { src: pkgC9NavySageResto.url, alt: "Restaurant celebration navy, sage green and gold confetti balloon arch with Happy Birthday cursive banner and star foil column" },
  { src: pkgC10PurplePinkResto.url, alt: "Restaurant celebration purple, pink and rose chrome balloon arch with confetti balloons and Happy Birthday cursive banner" },
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
          <StaticPackageCard
            id="birthday-decoration-cocomelon-aarna"
            name="CoComelon Rainbow Theme Birthday"
            description="A vibrant CoComelon-themed birthday arch with a multicolour rainbow balloon garland, JJ baby cutouts, watermelon and ladybug props, a star foil balloon and a personalised 'Name is 4' rainbow backdrop with a glowing marquee number — perfect for toddler birthdays."
            image={pkgCocomelonAarna.url}
            includes={["Rainbow balloon arch + JJ & watermelon cutouts", "Personalised CoComelon name backdrop", "Marquee number + star foil balloon"]}
            rating={4.9}
            reviews={412}
            offer={<>₹3,999</>}
            original={<>₹5,999</>}
            discountPct={33}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-50th-pink-gold"
            name="Elegant 50th Birthday Pink & Gold"
            description="An elegant 50th birthday decor with a tall ivory arch backdrop, a 'Happy Birthday' calligraphy print, a lush pink, white and chrome gold balloon garland, dried palm fans, fresh florals and giant light-up marquee '50' numbers — designed for banquet celebrations."
            image={pkg50thPinkGold.url}
            includes={["Ivory arch + Happy Birthday calligraphy", "Pink, white & gold balloon garland with palm fans", "Marquee '50' light-up numbers"]}
            rating={4.9}
            reviews={287}
            offer={<>₹4,499</>}
            original={<>₹5,999</>}
            discountPct={25}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-26th-bow-black"
            name="26th Birthday Black & Pink Bow Decor"
            description="A trendy outdoor 26th birthday setup with a silver pleated arch backdrop, dramatic black and pink balloon garland, a giant pink satin bow, a 'Happy Birthday' neon sign and a glowing marquee '26' on grass — perfect for farmhouse and lawn celebrations."
            image={pkg26thBowBlack.url}
            includes={["Silver arch + giant pink satin bow", "Black & pink balloon garland with mini bow accents", "Happy Birthday neon + marquee '26' numbers"]}
            rating={4.9}
            reviews={198}
            offer={<>₹4,499</>}
            original={<>₹5,999</>}
            discountPct={25}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-hanvika-butterfly"
            name="Butterfly Garden 1st Birthday Arch"
            description="A whimsical first birthday decor with a pink, lilac and clear balloon arch covered in butterfly cutouts, cherry-blossom branches, a personalised 'Hanvika's 1st Birthday' floral backdrop, butterfly cut-out side props, blush pedestals and a marquee '1'."
            image={pkgHanvikaButterfly.url}
            includes={["Pink, lilac & clear butterfly balloon arch", "Personalised floral name backdrop + cherry blossoms", "Butterfly side props + marquee '1' + 3 pedestals"]}
            rating={4.9}
            reviews={264}
            offer={<>₹8,499</>}
            original={<>₹11,999</>}
            discountPct={29}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-mishant-cocomelon"
            name="CoComelon Cloud Theme 1st Birthday"
            description="A premium CoComelon cloud-theme first birthday with a 'Name is in a Melon 1' arched backdrop, blue, ivory and sand balloon garland, JJ baby standee, rainbow side prop, cloud cutouts, bunting flags and clear bobo balloons — a complete in-melon nursery setup."
            image={pkgMishantCocomelonBlue.url}
            includes={["Personalised CoComelon arched backdrop", "Blue, ivory & sand balloon garland + bobo balloons", "JJ standee + cloud cutouts + rainbow side prop"]}
            rating={4.9}
            reviews={321}
            offer={<>₹8,999</>}
            original={<>₹12,999</>}
            discountPct={31}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-blue-chrome-butterfly"
            name="Royal Blue Chrome Butterfly 1st"
            description="A first birthday balloon ring backdrop with royal blue chrome and pearl white balloons, silver and rose gold butterfly cutouts, a 'Happy Birthday' warm neon sign and a glowing marquee '1' — ideal for restaurant and cafe birthday celebrations."
            image={pkgBlueChromeButterfly.url}
            includes={["Royal blue chrome & white balloon ring arch", "Silver & rose gold butterfly cutouts", "Happy Birthday neon + marquee '1'"]}
            rating={4.8}
            reviews={176}
            offer={<>₹3,499</>}
            original={<>₹4,999</>}
            discountPct={30}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-18th-pastel-rosegold"
            name="18th Birthday Pastel & Rose Gold"
            description="An 18th birthday setup with a pastel blue, white and rose gold chrome balloon ring backdrop, fresh palm fronds, a 'Happy Birthday' warm neon, a celebrate champagne foil, a balloon-filled floor and silver foil '18' number balloons."
            image={pkg18thPastelRoseGold.url}
            includes={["Pastel blue, white & rose gold balloon ring", "Happy Birthday neon + palm fronds", "Champagne foil + silver foil '18' numbers + floor balloons"]}
            rating={4.8}
            reviews={213}
            offer={<>₹3,499</>}
            original={<>₹4,999</>}
            discountPct={30}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-22nd-wife-gold"
            name="22nd Birthday Gold & White Ring"
            description="A romantic outdoor 22nd birthday surprise with a gold and white balloon ring backdrop, fresh pink and yellow rose accents, a 'Happy Birthday' warm neon sign, a personalised 'Wife' neon side prop, a gold balloon pillar and giant marquee '22' light-up numbers."
            image={pkg22ndWifeGold.url}
            includes={["Gold & white balloon ring arch + fresh rose accents", "Happy Birthday neon + 'Wife' neon side prop", "Gold balloon pillar + marquee '22' numbers"]}
            rating={4.9}
            reviews={189}
            offer={<>₹3,499</>}
            original={<>₹5,999</>}
            discountPct={42}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-zian-space"
            name="Astronaut & Space Theme 5th Birthday"
            description="An out-of-this-world space and astronaut theme 5th birthday with a twin arch backdrop ('Name' galaxy panel + starry 'Happy Birthday' panel), navy, orange, silver and ivory balloon garland, astronaut and planet cutouts, rocket pedestals and a marquee number '5' with a personalised name strip."
            image={pkgZianSpace.url}
            includes={["Twin galaxy & starry arched backdrop with name", "Navy, orange, silver & ivory balloon garland", "Astronaut + planet cutouts, rocket pedestals & marquee '5'"]}
            rating={4.9}
            reviews={241}
            offer={<>₹8,499</>}
            original={<>₹9,999</>}
            discountPct={15}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-frozen-faiza-zara"
            name="Frozen Elsa Theme Twin Birthday"
            description="A Frozen-themed twin birthday decor with an Elsa printed round backdrop, a 'Happy Birthday' calligraphy, a pastel blue, lilac, white and chrome balloon arch, life-size Elsa and Anna cutouts, an Olaf-print pedestal and personalised light-up name letters for the birthday twins."
            image={pkgFrozenFaizaZara.url}
            includes={["Elsa printed round backdrop + balloon arch", "Life-size Elsa & Anna cutouts + Olaf pedestal", "Pastel balloon pillars + personalised marquee name letters"]}
            rating={4.9}
            reviews={304}
            offer={<>₹4,999</>}
            original={<>₹8,999</>}
            discountPct={44}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-beige-23-rooftop"
            name="Rooftop 23rd Birthday Beige & Peach"
            description="A warm rooftop 23rd birthday surprise with a beige arch backdrop, organic peach, ivory and rose gold balloon garland, a 'Happy Birthday' yellow neon sign, a draped cocktail table and a glowing marquee '23' light-up number."
            image={pkgBeige23Rooftop.url}
            includes={["Beige arch backdrop + Happy Birthday neon sign", "Peach, ivory & rose gold organic balloon garland", "Draped cocktail table + marquee '23' light-up numbers"]}
            rating={4.8}
            reviews={156}
            offer={<>₹4,499</>}
            original={<>₹5,999</>}
            discountPct={25}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-silver-sequin-disco"
            name="Silver Sequin Shimmer Wall Birthday"
            description="A glamorous silver sequin shimmer wall backdrop with a 'Happy Birthday' rose gold neon sign, a chrome silver and white organic balloon garland, hanging disco balls and a silver starburst foil — perfect for a sparkly indoor celebration."
            image={pkgSilverSequinDisco.url}
            includes={["8x8 silver sequin shimmer wall + Happy Birthday neon", "Chrome silver, white & pearl balloon garland", "Hanging disco balls + silver starburst foil props"]}
            rating={4.9}
            reviews={212}
            offer={<>₹6,499</>}
            original={<>₹9,999</>}
            discountPct={35}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-32nd-anuja"
            name="32nd Birthday Silver & Yellow Ring"
            description="An elegant 32nd birthday home setup with a circular ring backdrop, a personalised 'Happy 32nd Birthday' name plaque, a silver chrome and pastel yellow balloon garland, a fresh white floral top accent and a draped cake table."
            image={pkg32ndAnuja.url}
            includes={["Round ring backdrop + personalised name plaque", "Silver chrome & pastel yellow balloon garland", "Fresh white floral accent + draped cake table"]}
            rating={4.8}
            reviews={143}
            offer={<>₹3,499</>}
            original={<>₹4,999</>}
            discountPct={30}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-gold-sequin-bw"
            name="Outdoor Gold Sequin Black & White Birthday"
            description="A premium outdoor gold sequin shimmer wall backdrop with a 'Happy Birthday' white neon sign, a dramatic black, white and gold chrome balloon garland, foil orbz balloons, warm fairy light layer and a draped cake table on grass."
            image={pkgGoldSequinBW.url}
            includes={["Gold sequin shimmer wall + Happy Birthday neon", "Black, white & gold balloon garland with foil orbz", "Warm fairy lights + draped cake table setup"]}
            rating={4.9}
            reviews={278}
            offer={<>₹6,499</>}
            original={<>₹9,999</>}
            discountPct={35}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-nye-silver-cheers"
            name="New Year Cheers Silver & Black Birthday"
            description="A bold silver and black chrome balloon arch backdrop with a 'Happy Birthday' neon sign, a giant champagne 'POP Cheers' foil balloon, organic balloon clusters and a black cake pedestal — styled for a New-Year-meets-birthday celebration."
            image={pkgNyeSilverCheers.url}
            includes={["Silver & black chrome balloon arch + neon", "Giant champagne POP Cheers foil balloon", "Organic balloon clusters + black cake pedestal"]}
            rating={4.7}
            reviews={134}
            offer={<>₹3,499</>}
            original={<>₹4,999</>}
            discountPct={30}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-30th-gold-sequin"
            name="30th Birthday Gold Sequin & Marquee"
            description="A glamorous 30th birthday gold sequin shimmer wall with a 'Happy Birthday' white neon sign, a white and gold chrome organic balloon arch, a pampas and white rose floral accent, a draped cake table and giant marquee '30' light-up numbers."
            image={pkg30thGoldSequin.url}
            includes={["Gold sequin wall + Happy Birthday neon sign", "White & gold chrome organic balloon arch", "Pampas floral accent + marquee '30' numbers"]}
            rating={4.9}
            reviews={246}
            offer={<>₹6,499</>}
            original={<>₹9,999</>}
            discountPct={35}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-1st-cocomelon-jerry"
            name="1st Birthday CoComelon & Tom-Jerry"
            description="A vibrant 1st birthday decor featuring a gold sequin centre panel with a glowing '1 Happy Birthday' neon sign, a sunshine prop on top, life-size CoComelon family and Tom & Jerry cutouts and a pastel blue, lilac, mint and gold balloon arch."
            image={pkg1stCocomelonJerry.url}
            includes={["Gold sequin panel + '1 Happy Birthday' neon", "CoComelon family + Tom & Jerry cutouts", "Pastel & gold balloon arch with sunshine prop"]}
            rating={4.9}
            reviews={289}
            offer={<>₹6,999</>}
            original={<>₹9,999</>}
            discountPct={30}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-24th-pink-floating"
            name="24th Birthday Pink Sequin & Floating Balloons"
            description="A dreamy 24th birthday surprise with a pink and gold sequin wall, a 'Happy Birthday' yellow neon sign, a hot pink, blush and silver chrome balloon arch, hanging helium balloons from the ceiling, a velvet cake table with candles and giant silver '24' foil numbers."
            image={pkg24thPinkFloating.url}
            includes={["Pink & gold sequin wall + Happy Birthday neon", "Pink, blush & silver chrome balloon arch", "Ceiling helium balloons + silver '24' foil numbers"]}
            rating={4.9}
            reviews={221}
            offer={<>₹6,799</>}
            original={<>₹9,999</>}
            discountPct={32}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-27th-gold-sequin-bw"
            name="27th Birthday Gold Sequin Black & Gold"
            description="A premium 27th birthday gold sequin shimmer wall with a 'Happy Birthday' white neon sign, a black, white and gold chrome organic balloon garland, gold foil starburst and orbz props, a draped cake table and giant gold '27' foil number balloons."
            image={pkg27thGoldSequinBW.url}
            includes={["Gold sequin wall + Happy Birthday neon sign", "Black, white & gold chrome balloon garland", "Gold starburst props + '27' foil number balloons"]}
            rating={4.9}
            reviews={198}
            offer={<>₹6,799</>}
            original={<>₹9,999</>}
            discountPct={32}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-37th-black-gold"
            name="37th Birthday Black, Gold & Pampas"
            description="An elegant 37th birthday indoor decor with an ivory backdrop, a 'Happy Birthday' white neon sign, a dramatic black, gold chrome and white balloon arch, pampas grass and dried palm leaf accents, a wooden cake stool and a glowing marquee '37' light-up number."
            image={pkg37thBlackGold.url}
            includes={["Ivory backdrop + Happy Birthday neon sign", "Black, gold & white organic balloon arch", "Pampas accents + wooden cake stool & marquee '37'"]}
            rating={4.9}
            reviews={167}
            offer={<>₹4,999</>}
            original={<>₹6,999</>}
            discountPct={29}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-new-pink-rosegold-43"
            name="Pink & Rose Gold 43rd Birthday Ring"
            description="A dreamy 43rd birthday surprise with a blush pink and rose gold chrome balloon ring backdrop, a glowing 'Happy Birthday' white neon sign, rose gold heart foil balloons, a clear acrylic cake pedestal and giant rose gold '43' foil number balloons cascading onto the floor."
            image={pkgNewPinkRosegold43.url}
            includes={["Pink & rose gold balloon ring backdrop", "Happy Birthday neon sign + heart foils", "Acrylic pedestal + rose gold '43' foil numbers"]}
            rating={4.9}
            reviews={184}
            offer={<>₹3,199</>}
            original={<>₹4,999</>}
            discountPct={36}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-new-black-silver-arch"
            name="Luxury Black & Silver Chrome Arch"
            description="A classy black, silver and white chrome balloon arch on a black arch backdrop with a yellow 'Happy Birthday' neon sign, silver starburst foil props, mirror disco ball balloons and elegant white satin bow accents — perfect for a premium evening celebration."
            image={pkgNewBlackSilverArch.url}
            includes={["Black arch + Happy Birthday yellow neon", "Black, silver & white chrome balloon garland", "Disco ball balloons + starburst foils & satin bows"]}
            rating={4.9}
            reviews={241}
            offer={<>₹4,499</>}
            original={<>₹5,999</>}
            discountPct={25}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-new-diksha-gold-pampas"
            name="Outdoor Gold, Black & Pampas Birthday"
            description="An elegant outdoor 'Happy Birthday Diksha' ivory printed arch backdrop with a gold, black and white organic balloon garland, dramatic pampas grass accents, gold balloon columns on either side and a centre cake table — ideal for garden and lawn birthdays."
            image={pkgNewDikshaGoldPampas.url}
            includes={["Ivory personalised arch backdrop", "Gold, black & white balloon garland + pampas", "Twin gold balloon columns + cake table"]}
            rating={4.9}
            reviews={156}
            offer={<>₹4,499</>}
            original={<>₹5,999</>}
            discountPct={25}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-new-cocomelon-rainbow-1st"
            name="CoComelon Rainbow 1st Birthday"
            description="A cheerful CoComelon rainbow themed 1st birthday backdrop with a printed JJ rainbow panel, pastel and silver chrome balloon arch, watermelon and JJ standee cutouts, a glowing 'Happy Birthday' neon and a giant marquee '1' light-up number."
            image={pkgNewCocomelonRainbow1st.url}
            includes={["CoComelon rainbow printed backdrop + standees", "Pastel & silver chrome balloon arch", "Happy Birthday neon + marquee '1' number"]}
            rating={4.9}
            reviews={267}
            offer={<>₹3,999</>}
            original={<>₹5,999</>}
            discountPct={33}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-new-agastya-cocomelon-bus"
            name="CoComelon Bus 3rd Birthday — Agastya"
            description="A personalised 'Agastya turns 3' CoComelon school bus theme decoration with a printed arch backdrop, a tall blue, yellow and orange balloon column with clear bobo accents, a school bus cutout, a red car prop and a glowing marquee '3' number."
            image={pkgNewAgastyaCocomelonBus.url}
            includes={["Personalised CoComelon bus arch backdrop", "Blue, yellow & orange balloon column + bobos", "Bus & car cutouts + marquee '3' light-up number"]}
            rating={4.9}
            reviews={148}
            offer={<>₹4,499</>}
            original={<>₹5,999</>}
            discountPct={25}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-new-omansh-cars-8th"
            name="Cars Lightning McQueen 8th — Omansh"
            description="A bold Cars Lightning McQueen theme 8th birthday for Omansh with a silver sequin shimmer wall, a 'Happy Birthday Omansh' yellow neon, a red, blue, black and silver balloon arch, McQueen foil and standee props and a glowing gold foil '8' number balloon."
            image={pkgNewOmanshCars8th.url}
            includes={["Silver sequin wall + personalised neon name", "Red, blue, black & silver balloon arch", "Lightning McQueen props + gold '8' foil number"]}
            rating={4.9}
            reviews={193}
            offer={<>₹3,999</>}
            original={<>₹5,999</>}
            discountPct={33}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-new-edha-berry-first"
            name="Berry First Strawberry 1st — Edha"
            description="A sweet 'Edha's Berry First Birthday' strawberry theme 1st birthday arch backdrop with red and blush pink balloon garland, strawberry foil balloons, green leafy vines, soft pink rose accents and a glowing marquee '1' light-up number."
            image={pkgNewEdhaBerryFirst.url}
            includes={["Personalised Berry First arch backdrop", "Red & pink balloon garland + strawberry foils", "Leafy vines + rose accents & marquee '1'"]}
            rating={4.9}
            reviews={176}
            offer={<>₹4,499</>}
            original={<>₹5,999</>}
            discountPct={25}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-new-aahsvi-butterfly-2nd"
            name="Butterfly 2nd Birthday — Aahsvi"
            description="A magical butterfly theme 2nd birthday for Aahsvi with a printed butterfly backdrop, a purple, lilac and gold chrome balloon garland, 3D butterfly cutouts on the walls, ceiling balloon clusters, a draped cake table and a glowing marquee '2' number with name letters."
            image={pkgNewAahsviButterfly2nd.url}
            includes={["Printed butterfly backdrop + 3D butterflies", "Purple, lilac & gold balloon garland", "Ceiling clusters + draped cake table & marquee '2'"]}
            rating={4.9}
            reviews={214}
            offer={<>₹4,999</>}
            original={<>₹6,999</>}
            discountPct={29}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-new-nye-cheers-black-silver"
            name="Cheers Black & Silver Birthday Ring"
            description="A party-ready black and silver chrome balloon ring backdrop with a 'Happy Birthday' white neon sign, a giant 'Cheers' champagne bottle foil balloon, a black pedestal cake table and a cascade of chrome floor balloons — perfect for NYE birthdays and adult parties."
            image={pkgNewNyeCheersBlackSilver.url}
            includes={["Black & silver chrome balloon ring backdrop", "Happy Birthday neon + Cheers champagne foil", "Black pedestal table + cascading floor balloons"]}
            rating={4.8}
            reviews={132}
            offer={<>₹2,999</>}
            original={<>₹4,999</>}
            discountPct={40}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-new-60th-pink-gold"
            name="Elegant 60th Pink & Gold Birthday"
            description="A grand 60th birthday setup with a balloon ring backdrop draped with a soft beige veil, a glowing 'Happy Birthday' white neon sign, a hot pink, blush and gold chrome organic balloon garland, scattered floor balloons and giant warm-white marquee '60' light-up numbers."
            image={pkgNew60thPinkGold.url}
            includes={["Balloon ring + veil drape backdrop", "Hot pink, blush & gold chrome garland", "Happy Birthday neon + marquee '60' numbers"]}
            rating={4.9}
            reviews={205}
            offer={<>₹3,499</>}
            original={<>₹4,999</>}
            discountPct={30}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-mehak-3rd-pink-rosegold"
            name="Mehak 3rd Pink & Rose Gold Birthday"
            description="A sweet pink, white and chrome gold balloon frame backdrop with a silver foil curtain, a pink-on-white Happy Birthday banner, a rose gold foil '3' on top and big rose gold MEHAK name balloons in the centre — finished with two Happy Birthday bubble balloons on the sides. Personalised name included."
            image={pkgB1Mehak3rd.url}
            includes={["Pink, white & chrome gold balloon frame", "Silver foil curtain + Happy Birthday banner", "Rose gold name balloons + foil age number"]}
            rating={4.9}
            reviews={188}
            offer={<>₹1,999</>}
            original={<>₹2,999</>}
            discountPct={33}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-5th-rosegold-happy-birthday"
            name="5th Rose Gold Happy Birthday Setup"
            description="A dreamy rose gold 5th birthday setup with a silver foil curtain backdrop, a chunky pink, peach, ivory and chrome gold balloon garland on top, big rose gold 'HAPPY BIRTHDAY' foil letters and a giant rose gold foil '5' standing on a matching balloon column, plus 3 helium balloon bunches on the ceiling."
            image={pkgB2FifthRosegold.url}
            includes={["Silver foil curtain backdrop", "Rose gold HAPPY BIRTHDAY foil letters", "Giant rose gold foil '5' + balloon column"]}
            rating={4.9}
            reviews={176}
            offer={<>₹1,999</>}
            original={<>₹2,999</>}
            discountPct={33}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-7th-purple-frame"
            name="7th Purple & Silver Birthday Frame"
            description="A regal 7th birthday balloon frame in purple, lilac, white and silver chrome around a silver foil curtain backdrop, with a white 'HAPPY BIRTHDAY' bunting, silver cluster accents and a chrome purple foil '7' on the side column. Great for a princess or unicorn themed party."
            image={pkgB3SeventhPurple.url}
            includes={["Purple, lilac, white & silver chrome frame", "Silver foil curtain + Happy Birthday bunting", "Chrome purple foil '7' side column"]}
            rating={4.8}
            reviews={142}
            offer={<>₹1,999</>}
            original={<>₹2,999</>}
            discountPct={33}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-vivaan-2nd-blue-gold"
            name="Vivaan 2nd Royal Blue & Gold Birthday"
            description="A handsome 2nd birthday balloon frame in royal blue, white and chrome gold around a gold foil curtain backdrop, with a blue-on-white Happy Birthday bunting, a royal blue foil '2' on top, big blue VIVAAN name balloons and two Happy Birthday bubble balloons. Personalised name included."
            image={pkgB4Vivaan2nd.url}
            includes={["Royal blue, white & gold balloon frame", "Gold foil curtain + Happy Birthday bunting", "Blue name balloons + foil age number"]}
            rating={4.9}
            reviews={164}
            offer={<>₹1,999</>}
            original={<>₹2,999</>}
            discountPct={33}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-manav-15th-purple-chrome"
            name="Manav 15th Purple Chrome Birthday"
            description="A bold 15th birthday backdrop with a silver foil curtain, a lush purple, lilac, white and silver chrome organic balloon garland with purple star foil balloons, a Happy Birthday bunting and giant chrome purple MANAV 15 name + number balloons standing on twin balloon columns. Personalised name included."
            image={pkgB5Manav15th.url}
            includes={["Silver foil curtain + organic balloon garland", "Purple star foils + Happy Birthday bunting", "Chrome purple MANAV 15 name & number balloons"]}
            rating={4.9}
            reviews={198}
            offer={<>₹2,199</>}
            original={<>₹3,499</>}
            discountPct={37}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-3rd-green-frame"
            name="3rd Emerald Green & Sage Birthday Frame"
            description="A fresh 3rd birthday balloon frame in emerald green, sage, white and gold chrome around a silver foil curtain backdrop, with a Happy Birthday bunting and a chrome green foil '3' on the side column — a clean, jungle-inspired palette perfect for nature and dinosaur themed birthdays."
            image={pkgB6ThirdGreen.url}
            includes={["Emerald, sage, white & gold balloon frame", "Silver foil curtain + Happy Birthday bunting", "Chrome green foil '3' side column"]}
            rating={4.8}
            reviews={151}
            offer={<>₹1,999</>}
            original={<>₹2,999</>}
            discountPct={33}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-saanvi-11th-rosegold-chrome"
            name="Saanvi 11th Rose Gold Chrome Birthday"
            description="A sparkling 11th birthday setup with a rose gold foil curtain backdrop, a lavish pink, white, hot pink and silver chrome balloon arch with rose gold star foils, a Happy Birthday banner and big rose gold SAANVI 11 name + number balloons on twin balloon columns. Personalised name included."
            image={pkgB7Saanvi11th.url}
            includes={["Rose gold foil curtain + chrome balloon arch", "Rose gold star foils + Happy Birthday banner", "Rose gold SAANVI 11 name & number balloons"]}
            rating={4.9}
            reviews={211}
            offer={<>₹2,199</>}
            original={<>₹3,499</>}
            discountPct={37}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-18th-purple-silver-chrome"
            name="18th Purple & Silver Chrome Birthday"
            description="A grown-up 18th birthday setup with a silver foil curtain backdrop, a chunky purple, lilac, silver chrome and white balloon arch, chrome purple 'HAPPY BIRTHDAY' foil letters and a giant chrome purple foil '18' standing on a matching balloon column, plus 3 helium balloon bunches on the ceiling."
            image={pkgB8Eighteenth.url}
            includes={["Silver foil curtain backdrop", "Purple, lilac, silver chrome & white arch", "Chrome HAPPY BIRTHDAY foil + giant '18'"]}
            rating={4.9}
            reviews={183}
            offer={<>₹1,999</>}
            original={<>₹2,999</>}
            discountPct={33}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-armaan-8th-green-gold"
            name="Armaan 8th Green & Gold Birthday"
            description="A vibrant 8th birthday balloon frame in metallic green, chrome gold and white around a gold foil curtain backdrop, with a green-on-white Happy Birthday bunting, a chrome green foil '8' on top and giant chrome green ARMAAN name balloons in the centre, finished with two Happy Birthday bubble balloons. Personalised name included."
            image={pkgB9Armaan8th.url}
            includes={["Metallic green, gold & white balloon frame", "Gold foil curtain + Happy Birthday bunting", "Chrome green ARMAAN name + foil '8'"]}
            rating={4.9}
            reviews={172}
            offer={<>₹1,999</>}
            original={<>₹2,999</>}
            discountPct={33}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-12th-navy-gold-chrome"
            name="12th Navy Blue & Gold Chrome Birthday"
            description="A sophisticated 12th birthday setup with a silver foil curtain backdrop, a lush navy blue, white and chrome gold organic balloon arch with gold star foils, a Happy Birthday bunting and giant chrome gold '12' number balloons on twin navy balloon columns with Happy Birthday bubble balloons on top."
            image={pkgB10Twelfth.url}
            includes={["Silver foil curtain + organic balloon arch", "Navy, white & chrome gold + star foils", "Gold foil '12' on twin balloon columns"]}
            rating={4.9}
            reviews={196}
            offer={<>₹2,199</>}
            original={<>₹3,499</>}
            discountPct={37}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-c1-navy-gold-luxury-arch"
            name="Navy Blue & Gold Luxury Happy Birthday Arch"
            description="A grand luxury birthday arch in navy blue, chrome gold and pearl white organic balloons with a gold 'HAPPY BIRTHDAY' foil banner on a clean white wall, finished with floating navy, gold and white ceiling balloon bouquets — picture-perfect for milestone celebrations at home or in a banquet hall."
            image={pkgC1NavyGoldArch.url}
            includes={["Navy, chrome gold & pearl white organic arch", "Gold 'Happy Birthday' foil banner", "Floating navy, gold & white ceiling balloons"]}
            rating={4.9}
            reviews={241}
            offer={<>₹2,199</>}
            original={<>₹3,499</>}
            discountPct={37}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-c2-blue-15th-foil-curtain"
            name="Royal Blue 15th Birthday Foil Curtain Setup"
            description="A vibrant 15th birthday in-home setup with a silver foil fringe curtain backdrop, blue 'HAPPY BIRTHDAY 15' foil text and a lush royal blue, sky blue, white and silver chrome organic balloon arch with a matching balloon column and floating ceiling bouquets — exactly as shown."
            image={pkgC2Blue15th.url}
            includes={["Silver foil curtain + blue 'HB 15' foil text", "Royal blue, sky blue, white & silver chrome arch", "Matching balloon column + ceiling bouquets"]}
            rating={4.8}
            reviews={188}
            offer={<>₹1,999</>}
            original={<>₹2,999</>}
            discountPct={33}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-c3-purple-gold-frame"
            name="Royal Purple & Gold Happy Birthday Frame"
            description="A regal birthday frame backdrop in deep purple, lilac, gold and silver chrome balloons on tall twin columns with a top garland, silver foil curtain centre and gold 'HAPPY BIRTHDAY' foil text — a rich, photo-friendly setup ideal for home celebrations."
            image={pkgC3PurpleGold.url}
            includes={["Purple, lilac, gold & silver chrome balloon frame", "Silver foil fringe curtain backdrop", "Gold 'Happy Birthday' foil text"]}
            rating={4.8}
            reviews={172}
            offer={<>₹1,999</>}
            original={<>₹2,999</>}
            discountPct={33}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-c4-ananya-pink-8th"
            name="Ananya Pink Princess 8th Birthday Frame"
            description="A dreamy 8th birthday setup with a square balloon frame in hot pink, baby pink, white and silver chrome, a silver foil curtain centre, a 'HAPPY BIRTHDAY' bunting and personalised hot pink 'ANANYA' name balloons with a giant pink foil number 8 — fully customisable with your child's name."
            image={pkgC4AnanyaPink8.url}
            includes={["Hot pink, baby pink, white & silver chrome frame", "Silver foil curtain + Happy Birthday bunting", "Personalised name + giant foil number balloon"]}
            rating={4.9}
            reviews={264}
            offer={<>₹2,199</>}
            original={<>₹3,499</>}
            discountPct={37}
            bestSeller={true}
          />
          <StaticPackageCard
            id="birthday-decoration-c5-rahul-navy-25th"
            name="Rahul Navy Blue & Gold 25th Birthday Frame"
            description="An elegant 25th birthday square balloon frame in navy blue, chrome gold, silver and white with a silver foil curtain centre, a 'HAPPY BIRTHDAY' bunting, a personalised gold 'RAHUL' name and giant navy blue foil number 25 — a perfect classy surprise for him."
            image={pkgC5RahulNavy25.url}
            includes={["Navy, gold, silver & white balloon frame", "Silver foil curtain + Happy Birthday bunting", "Personalised gold name + navy foil number"]}
            rating={4.9}
            reviews={231}
            offer={<>₹2,199</>}
            original={<>₹3,499</>}
            discountPct={37}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-c6-rosegold-21st"
            name="Rose Gold 21st Birthday Glam Setup"
            description="A glam 21st birthday setup with a silver foil fringe curtain and a rose gold 'HAPPY BIRTHDAY 21' foil text, framed by an organic balloon arch in rose gold, chrome gold, pearl white and ivory with a tall matching column and floating ceiling bouquets — perfect for that grown-up celebration."
            image={pkgC6RoseGold21.url}
            includes={["Silver foil curtain + rose gold 'HB 21' foil", "Rose gold, chrome gold & pearl white arch", "Matching balloon column + ceiling bouquets"]}
            rating={4.9}
            reviews={209}
            offer={<>₹2,199</>}
            original={<>₹3,499</>}
            discountPct={37}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-c7-olive-white-1st"
            name="Olive & White Boho 1st Birthday Daisy Setup"
            description="A trending boho 1st birthday backdrop in olive green, ivory and white balloons with a sweet daisy balloon on the left column, a gold foil fringe curtain, a sage 'HAPPY BIRTHDAY' foil and a gold foil number 1 on a matching balloon column — soft, neutral and perfect for cake-smash shoots."
            image={pkgC7OliveWhite1st.url}
            includes={["Olive, ivory & white organic balloon arch + daisy", "Gold foil curtain + sage 'Happy Birthday' foil", "Gold foil number 1 on matching column"]}
            rating={4.9}
            reviews={198}
            offer={<>₹1,999</>}
            original={<>₹2,999</>}
            discountPct={33}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-c8-blue-1st"
            name="Royal Blue 1st Birthday Boy Foil Curtain Setup"
            description="A bright 1st birthday boy in-home setup with a silver foil fringe curtain, blue 'HAPPY BIRTHDAY' foil text and a giant blue foil 1, surrounded by a royal blue, white and silver chrome organic balloon arch with a matching balloon column and floating ceiling balloons."
            image={pkgC8Blue1st.url}
            includes={["Silver foil curtain + blue 'HB' foil + giant foil 1", "Royal blue, white & silver chrome arch", "Matching balloon column + ceiling balloons"]}
            rating={4.8}
            reviews={176}
            offer={<>₹1,799</>}
            original={<>₹2,999</>}
            discountPct={40}
            bestSeller={false}
          />
          <StaticPackageCard
            id="birthday-decoration-c9-navy-sage-restaurant"
            name="Navy, Sage & Gold Restaurant Birthday Arch"
            description="A sophisticated restaurant / cafe table-side birthday setup with a navy blue, sage green, chrome gold and gold-confetti balloon garland over the window, a gold cursive 'Happy Birthday' banner, two black & gold 'Happy Birthday' foil bouquets and a navy-sage-gold balloon column topped with a gold star foil."
            image={pkgC9NavySageResto.url}
            includes={["Navy, sage, chrome gold & confetti garland", "Gold cursive 'Happy Birthday' banner", "Star-foil topped balloon column + 2 foil bouquets"]}
            rating={4.9}
            reviews={154}
            offer={<>₹1,799</>}
            original={<>₹2,999</>}
            discountPct={40}
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

