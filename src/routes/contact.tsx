import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { BRAND, waLink } from "@/data/products";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SSS Silks — Visit Our Erode Boutique" },
      { name: "description", content: "Visit SSS Silks at Perundurai Road, Palayapalayam, Erode. Call +91 98423 76688 or order on WhatsApp." },
      { property: "og:title", content: "Contact SSS Silks" },
      { property: "og:description", content: "Visit, call or WhatsApp the SSS Silks boutique in Erode." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="bg-cream py-20 text-center border-b border-border">
        <span className="divider-gold text-[10px] tracking-[0.4em] uppercase">Get in Touch</span>
        <h1 className="font-display text-5xl md:text-6xl text-maroon-deep mt-4">Visit Our Boutique</h1>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto px-4">We'd love to drape a saree for you. Walk in, call, or WhatsApp us anytime.</p>
      </section>

      <section className="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          {[
            { I: MapPin, t: "Address", v: BRAND.address },
            { I: Phone, t: "Phone", v: BRAND.phone, href: `tel:${BRAND.phone}` },
            { I: MessageCircle, t: "WhatsApp", v: "Chat with us instantly", href: waLink("Hello SSS Silks!") },
            { I: Mail, t: "Email", v: "hello@ssssilks.in", href: "mailto:hello@ssssilks.in" },
            { I: Clock, t: "Hours", v: BRAND.hours },
          ].map(({ I, t, v, href }) => (
            <div key={t} className="flex gap-5 border-l-2 border-gold pl-5 py-2">
              <div className="h-12 w-12 grid place-items-center bg-maroon text-gold rounded-full shrink-0"><I className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-gold">{t}</div>
                {href ? <a href={href} className="font-display text-xl text-maroon-deep hover:text-maroon">{v}</a> : <p className="font-display text-xl text-maroon-deep">{v}</p>}
              </div>
            </div>
          ))}

          <form className="bg-cream p-6 border-gold-thin mt-8 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <h3 className="font-display text-2xl text-maroon-deep">Send a Message</h3>
            <input required placeholder="Your Name" className="w-full bg-background border border-border px-4 py-3 text-sm outline-none focus:border-maroon" />
            <input required type="tel" placeholder="Phone Number" className="w-full bg-background border border-border px-4 py-3 text-sm outline-none focus:border-maroon" />
            <textarea required rows={4} placeholder="How can we help?" className="w-full bg-background border border-border px-4 py-3 text-sm outline-none focus:border-maroon" />
            <button className="w-full bg-maroon text-primary-foreground py-3 text-xs uppercase tracking-[0.25em] hover:bg-maroon-deep transition">Send Inquiry</button>
          </form>
        </div>

        <div className="border-gold-thin overflow-hidden h-[600px] sticky top-28">
          <iframe title="SSS Silks Map" className="w-full h-full" loading="lazy"
            src="https://maps.google.com/maps?q=Perundurai%20Road%20Palayapalayam%20Erode&t=&z=15&ie=UTF8&iwloc=&output=embed" />
        </div>
      </section>
    </>
  );
}
