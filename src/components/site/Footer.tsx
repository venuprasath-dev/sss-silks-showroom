import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import { BRAND } from "@/data/products";

export function Footer() {
  return (
    <footer className="bg-gradient-luxe text-primary-foreground mt-24">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="" className="h-14 w-14 bg-cream rounded-full p-1" />
            <div>
              <div className="font-display text-2xl">SSS Silks</div>
              <div className="text-xs text-gold-soft tracking-widest uppercase">{BRAND.tagline}</div>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            A heritage saree boutique in Erode, curating Kanchipuram silks, bridal couture and modern readymades since generations.
          </p>
        </div>

        <div>
          <h4 className="text-gold-soft uppercase tracking-widest text-xs mb-5">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/collections" className="hover:text-gold">Collections</Link></li>
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold-soft uppercase tracking-widest text-xs mb-5">Visit Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />{BRAND.address}</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" /><a href={`tel:${BRAND.phone}`}>{BRAND.phone}</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 text-gold shrink-0 mt-0.5" />hello@ssssilks.in</li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold-soft uppercase tracking-widest text-xs mb-5">Newsletter</h4>
          <p className="text-sm text-primary-foreground/70 mb-4">Sign up for new arrivals and bridal collection previews.</p>
          <form className="flex border border-gold/40 rounded-sm overflow-hidden">
            <input type="email" placeholder="Your email" className="bg-transparent px-3 py-2 text-sm flex-1 outline-none placeholder:text-primary-foreground/50" />
            <button className="bg-gold text-maroon-deep px-4 text-xs uppercase tracking-widest font-semibold">Join</button>
          </form>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Youtube].map((I, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center border border-gold/40 rounded-full hover:bg-gold hover:text-maroon-deep transition">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gold/20">
        <div className="container mx-auto px-6 py-5 text-xs text-primary-foreground/60 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} SSS Silks. Crafted with devotion in Erode, Tamil Nadu.</span>
          <span>Pure silk · Authentic weaves · Worldwide shipping</span>
        </div>
      </div>
    </footer>
  );
}
