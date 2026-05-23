import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Globe2, Gem, ShieldCheck, Store, MessageCircle, Star, Instagram } from "lucide-react";
import hero from "@/assets/hero-bride.jpg";
import bridalBanner from "@/assets/bridal-banner.jpg";
import catBridal from "@/assets/cat-bridal.jpg";
import catKanchi from "@/assets/cat-kanchipuram.jpg";
import catCotton from "@/assets/cat-cotton.jpg";
import catDesigner from "@/assets/cat-designer.jpg";
import catParty from "@/assets/cat-party.jpg";
import catReady from "@/assets/cat-readymade.jpg";
import showroom from "@/assets/showroom.jpg";
import { products, BRAND, waLink } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SSS Silks — Heaven of Sarees and Readymades | Erode" },
      { name: "description", content: "Discover handpicked Kanchipuram silks, bridal couture and readymades at SSS Silks, Erode. Premium South Indian textile boutique." },
      { property: "og:title", content: "SSS Silks — Heaven of Sarees and Readymades" },
      { property: "og:description", content: "Authentic Kanchipuram silk sarees & bridal collections — Erode, Tamil Nadu." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Home,
});

const cats = [
  { name: "Bridal Sarees", img: catBridal },
  { name: "Kanchipuram Silk", img: catKanchi },
  { name: "Cotton Sarees", img: catCotton },
  { name: "Designer Sarees", img: catDesigner },
  { name: "Party Wear", img: catParty },
  { name: "Readymades", img: catReady },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Tamil bride in maroon Kanchipuram silk saree" className="h-full w-full object-cover object-[center_20%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-maroon-deep/85 via-maroon-deep/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/70 via-transparent to-transparent" />
        </div>
        <div className="container relative mx-auto px-6 md:px-12 py-24 text-primary-foreground">
          <div className="max-w-2xl animate-fade-up">
            <span className="divider-gold text-xs tracking-[0.4em] uppercase text-gold-soft">Est. Tamil Nadu</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] mt-6">
              Heirloom Silks,<br />
              <span className="text-gradient-gold italic">Woven for the Soul</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/85 max-w-lg leading-relaxed">
              A heaven of Kanchipuram silks, bridal couture and modern readymades — handpicked by SSS Silks, Erode.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/collections" className="group inline-flex items-center justify-center gap-3 bg-gold text-maroon-deep px-8 py-4 text-xs uppercase tracking-[0.25em] font-semibold hover:bg-cream transition">
                Explore Collections <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>
              <a href={waLink("Hello SSS Silks, I'd like to shop on WhatsApp.")} target="_blank" rel="noopener"
                className="inline-flex items-center justify-center gap-3 border border-gold text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-gold hover:text-maroon-deep transition">
                <MessageCircle className="h-4 w-4" /> Shop on WhatsApp
              </a>
            </div>
            <div className="mt-12 flex items-center gap-8 text-xs uppercase tracking-widest text-primary-foreground/70">
              <div><div className="font-display text-3xl text-gold">25+</div>Years of weaving</div>
              <div className="h-10 w-px bg-gold/40" />
              <div><div className="font-display text-3xl text-gold">10k+</div>Brides dressed</div>
              <div className="h-10 w-px bg-gold/40 hidden sm:block" />
              <div className="hidden sm:block"><div className="font-display text-3xl text-gold">100%</div>Pure silk</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTIONS */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="divider-gold text-[10px] tracking-[0.4em] uppercase">Curated Collections</span>
            <h2 className="font-display text-4xl md:text-5xl text-maroon-deep mt-4">A Universe of Silks</h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Each weave tells a story — from temple borders of Kanchipuram to contemporary readymade couture.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {cats.map((c, i) => (
              <Link key={c.name} to="/collections" search={{ cat: c.name }}
                className={`group relative overflow-hidden aspect-[3/4] ${i === 0 ? "md:row-span-2 md:aspect-auto" : ""}`}>
                <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/80 via-maroon-deep/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                  <h3 className="font-display text-2xl md:text-3xl">{c.name}</h3>
                  <span className="text-xs uppercase tracking-widest text-gold-soft inline-flex items-center gap-2 mt-2 opacity-90 group-hover:gap-3 transition-all">Discover <ArrowRight className="h-3 w-3" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="divider-gold text-[10px] tracking-[0.4em] uppercase">Just In</span>
              <h2 className="font-display text-4xl md:text-5xl text-maroon-deep mt-4">New Arrivals</h2>
            </div>
            <Link to="/collections" className="text-xs uppercase tracking-widest text-maroon hover:text-gold inline-flex items-center gap-2">View all <ArrowRight className="h-3 w-3" /></Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {products.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* BRIDAL BANNER */}
      <section className="relative h-[80vh] overflow-hidden">
        <img src={bridalBanner} alt="Tamil bride at mandapam" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-deep/80 via-maroon-deep/30 to-maroon-deep/80" />
        <div className="relative container mx-auto px-6 h-full flex items-center justify-center text-center text-primary-foreground">
          <div className="max-w-2xl">
            <span className="divider-gold text-[10px] tracking-[0.4em] uppercase text-gold-soft">The Bridal Edit</span>
            <h2 className="font-display text-5xl md:text-7xl mt-4">For Tamil Brides<br /><span className="italic text-gradient-gold">of Today</span></h2>
            <p className="mt-6 text-primary-foreground/85">A handpicked sanctuary of bridal Kanchipuram silks — woven with gold zari, blessed with tradition.</p>
            <Link to="/collections" search={{ cat: "Bridal Sarees" }} className="inline-flex items-center gap-3 mt-8 bg-gold text-maroon-deep px-8 py-4 text-xs uppercase tracking-[0.25em] font-semibold hover:bg-cream transition">
              View Bridal Edit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="divider-gold text-[10px] tracking-[0.4em] uppercase">The SSS Promise</span>
            <h2 className="font-display text-4xl md:text-5xl text-maroon-deep mt-4">Why Choose Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { I: Gem, t: "Authentic Silk Collections", d: "Hand-picked Kanchipuram & soft silks from master weavers." },
              { I: Globe2, t: "Worldwide Shipping", d: "Delivered to your doorstep, anywhere in the world." },
              { I: Sparkles, t: "Boutique Designs", d: "Exclusive designer pieces you won't find elsewhere." },
              { I: ShieldCheck, t: "Premium Quality", d: "Pure zari, lab-tested silks, certified weaves." },
              { I: Store, t: "In-store Shopping", d: "Visit our Erode boutique for a personal styling experience." },
              { I: MessageCircle, t: "WhatsApp Support", d: "Instant assistance, drape consultations & easy ordering." },
            ].map(({ I, t, d }) => (
              <div key={t} className="bg-background p-8 border-gold-thin hover-lift">
                <div className="h-12 w-12 grid place-items-center bg-maroon text-gold rounded-full mb-5"><I className="h-5 w-5" /></div>
                <h3 className="font-display text-2xl text-maroon-deep">{t}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="divider-gold text-[10px] tracking-[0.4em] uppercase">Words of Love</span>
            <h2 className="font-display text-4xl md:text-5xl text-maroon-deep mt-4">From Our Patrons</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "Priya · Coimbatore", q: "My wedding Kanchipuram from SSS Silks felt like an heirloom from day one. The zari work is unmatched.", },
              { n: "Lakshmi · Chennai", q: "I've been shopping here for 8 years. Authentic silks, honest pricing, and the warmest staff.", },
              { n: "Anjali · Dubai", q: "Ordered three sarees over WhatsApp — packed beautifully, shipped in 4 days. Truly a heaven of sarees.", },
            ].map((t) => (
              <figure key={t.n} className="bg-cream p-8 border-gold-thin">
                <div className="flex gap-1 text-gold mb-4">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold" />)}</div>
                <blockquote className="font-display text-xl text-foreground/90 italic leading-relaxed">"{t.q}"</blockquote>
                <figcaption className="text-xs uppercase tracking-widest text-muted-foreground mt-5">— {t.n}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <span className="divider-gold text-[10px] tracking-[0.4em] uppercase">Follow Our Story</span>
            <h2 className="font-display text-4xl md:text-5xl text-maroon-deep mt-4 inline-flex items-center gap-3"><Instagram className="h-7 w-7 text-gold" /> @ssssilks</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
            {[catBridal, catKanchi, catCotton, catDesigner, catParty, catReady].map((img, i) => (
              <a key={i} href="#" className="group relative aspect-square overflow-hidden">
                <img src={img} alt="Instagram feed" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-maroon-deep/0 group-hover:bg-maroon-deep/40 transition flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-cream opacity-0 group-hover:opacity-100 transition" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* STORE INFO */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="divider-gold text-[10px] tracking-[0.4em] uppercase">Visit Our Boutique</span>
            <h2 className="font-display text-4xl md:text-5xl text-maroon-deep mt-4">Step into the Showroom</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed max-w-md">Drape, feel and fall in love. Our flagship boutique in Erode invites you to an unhurried, personal saree experience.</p>
            <dl className="mt-8 space-y-4 text-sm">
              <div><dt className="text-xs uppercase tracking-widest text-gold">Address</dt><dd className="mt-1">{BRAND.address}</dd></div>
              <div><dt className="text-xs uppercase tracking-widest text-gold">Phone</dt><dd className="mt-1"><a href={`tel:${BRAND.phone}`} className="hover:text-maroon">{BRAND.phone}</a></dd></div>
              <div><dt className="text-xs uppercase tracking-widest text-gold">Hours</dt><dd className="mt-1">{BRAND.hours}</dd></div>
            </dl>
            <div className="mt-8 rounded-sm overflow-hidden border-gold-thin">
              <iframe title="Map" className="w-full h-64" loading="lazy"
                src="https://maps.google.com/maps?q=Perundurai%20Road%20Palayapalayam%20Erode&t=&z=15&ie=UTF8&iwloc=&output=embed" />
            </div>
          </div>
          <div className="relative">
            <img src={showroom} alt="Inside SSS Silks showroom Erode" loading="lazy" className="w-full aspect-[4/5] object-cover luxe-shadow" />
            <div className="absolute -bottom-6 -left-6 bg-gold text-maroon-deep p-6 max-w-[220px] hidden md:block">
              <p className="font-display text-2xl leading-tight">A heaven of silks since generations.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
