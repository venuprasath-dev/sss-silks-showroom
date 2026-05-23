import { createFileRoute } from "@tanstack/react-router";
import showroom from "@/assets/showroom.jpg";
import bridalBanner from "@/assets/bridal-banner.jpg";
import { Award, Heart, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SSS Silks — A Heritage Saree Boutique in Erode" },
      { name: "description", content: "Generations of weaving wisdom. Learn the story behind SSS Silks — Erode's beloved heaven of Kanchipuram silks, bridal couture and readymades." },
      { property: "og:title", content: "About SSS Silks" },
      { property: "og:description", content: "Erode's heritage saree boutique — Kanchipuram silks, bridal couture, readymades." },
      { property: "og:image", content: showroom },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative h-[60vh] overflow-hidden">
        <img src={bridalBanner} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-maroon-deep/70" />
        <div className="relative h-full container mx-auto px-6 flex flex-col items-center justify-center text-center text-primary-foreground">
          <span className="divider-gold text-[10px] tracking-[0.4em] uppercase text-gold-soft">Our Story</span>
          <h1 className="font-display text-5xl md:text-7xl mt-4">A Heaven Woven<br /><span className="italic text-gradient-gold">in Tamil Nadu</span></h1>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <img src={showroom} alt="SSS Silks showroom" loading="lazy" className="w-full aspect-[4/3] object-cover luxe-shadow" />
        <div>
          <span className="divider-gold text-[10px] tracking-[0.4em] uppercase">Est. Erode</span>
          <h2 className="font-display text-4xl md:text-5xl text-maroon-deep mt-4">Crafted by Tradition, Curated for Today</h2>
          <div className="space-y-5 mt-6 text-muted-foreground leading-relaxed">
            <p>SSS Silks began as a humble family boutique on Perundurai Road, Erode — born from a single conviction: that every Tamil woman deserves a saree woven with soul. Today, we are one of the region's most loved destinations for Kanchipuram silks, bridal couture, and contemporary readymades.</p>
            <p>We work directly with master weavers of Kanchipuram and Arani, hand-picking each weave for its purity, zari quality and motif. Every saree that hangs in our showroom carries a story — of a loom, a family, a tradition kept alive.</p>
            <p>Whether you're shopping for your wedding trousseau, a temple visit or a festive evening, we promise the warmth of a boutique that knows you by name.</p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            { I: Heart, t: "Crafted with Devotion", d: "Each piece is hand-selected by our founders — never mass-curated." },
            { I: Award, t: "Authentic & Certified", d: "Pure silk, real zari, traceable to the weaving village." },
            { I: Sparkles, t: "A Personal Experience", d: "Drape, style and consult — our boutique is built around you." },
          ].map(({ I, t, d }) => (
            <div key={t} className="bg-background p-8 text-center border-gold-thin">
              <div className="h-14 w-14 mx-auto grid place-items-center bg-maroon text-gold rounded-full mb-4"><I className="h-6 w-6" /></div>
              <h3 className="font-display text-2xl text-maroon-deep">{t}</h3>
              <p className="text-sm text-muted-foreground mt-2">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
