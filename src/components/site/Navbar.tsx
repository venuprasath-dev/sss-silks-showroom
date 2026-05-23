import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ShoppingBag, Heart, Search, Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { useCart } from "@/store/cart";
import { BRAND } from "@/data/products";

const links = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const { count, open } = useCart();
  const { location } = useRouterState();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    h();
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  useEffect(() => setMobile(false), [location.pathname]);

  return (
    <>
      <div className="bg-gradient-luxe text-primary-foreground text-xs py-2 px-4 text-center tracking-wider">
        <span className="text-gold-soft">✦</span>{" "}
        Free shipping across India · Worldwide delivery available · WhatsApp <a className="underline" href={`tel:${BRAND.phone}`}>{BRAND.phone}</a>{" "}
        <span className="text-gold-soft">✦</span>
      </div>
      <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md soft-shadow" : "bg-background"}`}>
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="SSS Silks logo" className="h-14 w-14 object-contain" />
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-2xl font-semibold text-maroon-deep">SSS Silks</div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Heaven of Sarees</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.to} to={l.to}
                className="relative text-sm font-medium tracking-wide uppercase text-foreground/80 hover:text-maroon transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
                activeProps={{ className: "text-maroon after:w-full" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <button aria-label="Search" className="p-2 hover:text-maroon transition"><Search className="h-5 w-5" /></button>
            <Link to="/collections" aria-label="Wishlist" className="p-2 hover:text-maroon transition hidden sm:block"><Heart className="h-5 w-5" /></Link>
            <button aria-label="Cart" onClick={open} className="p-2 relative hover:text-maroon transition">
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-maroon text-primary-foreground text-[10px] rounded-full h-5 w-5 grid place-items-center font-semibold">{count}</span>
              )}
            </button>
            <a href={`tel:${BRAND.phone}`} className="hidden md:inline-flex items-center gap-2 text-sm text-maroon ml-2"><Phone className="h-4 w-4" /></a>
            <button aria-label="Menu" className="lg:hidden p-2" onClick={() => setMobile(!mobile)}>
              {mobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobile && (
          <div className="lg:hidden border-t border-border bg-background animate-fade-in">
            <nav className="flex flex-col py-4">
              {links.map((l) => (
                <Link key={l.to} to={l.to} className="px-8 py-3 text-sm uppercase tracking-wide hover:bg-secondary"
                  activeProps={{ className: "text-maroon bg-secondary" }}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
