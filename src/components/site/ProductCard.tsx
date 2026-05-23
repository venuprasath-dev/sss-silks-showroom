import { Link } from "@tanstack/react-router";
import { Heart, MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";
import { waLink } from "@/data/products";
import { useCart } from "@/store/cart";

export function ProductCard({ product }: { product: Product }) {
  const { add, toggleWishlist, wishlist } = useCart();
  const wished = wishlist.includes(product.id);
  return (
    <div className="group relative bg-card overflow-hidden hover-lift">
      <Link to="/product/$id" params={{ id: product.id }} className="block relative overflow-hidden aspect-[4/5] bg-secondary">
        <img src={product.image} alt={product.name} loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
        <button
          onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
          className="absolute top-3 right-3 h-9 w-9 grid place-items-center rounded-full bg-background/90 backdrop-blur hover:bg-maroon hover:text-primary-foreground transition"
          aria-label="Wishlist"
        >
          <Heart className={`h-4 w-4 ${wished ? "fill-maroon text-maroon" : ""}`} />
        </button>
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-foreground/80 to-transparent">
          <button
            onClick={(e) => { e.preventDefault(); add(product); }}
            className="w-full bg-cream text-maroon-deep text-xs uppercase tracking-widest py-2.5 hover:bg-gold transition"
          >Quick Add</button>
        </div>
      </Link>
      <div className="p-4 text-center">
        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{product.category}</div>
        <Link to="/product/$id" params={{ id: product.id }} className="font-display text-lg text-foreground hover:text-maroon transition block mt-1">
          {product.name}
        </Link>
        <div className="flex items-center justify-center gap-3 mt-2">
          <span className="text-maroon font-semibold">₹{product.price.toLocaleString("en-IN")}</span>
          <a href={waLink(`Hi SSS Silks, I'm interested in "${product.name}" (₹${product.price})`)} target="_blank" rel="noopener"
            className="text-emerald-700 hover:scale-110 transition" aria-label="WhatsApp inquiry">
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
