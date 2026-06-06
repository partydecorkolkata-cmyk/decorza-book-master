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

