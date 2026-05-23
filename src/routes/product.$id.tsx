import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { products, waLink } from "@/data/products";
import { Heart, Minus, Plus, Truck, ShieldCheck, RefreshCw, MessageCircle } from "lucide-react";
import { useCart } from "@/store/cart";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name} — SSS Silks` },
      { name: "description", content: loaderData?.product.description },
      { property: "og:title", content: `${loaderData?.product.name} — SSS Silks` },
      { property: "og:description", content: loaderData?.product.description },
      { property: "og:image", content: loaderData?.product.image },
    ],
  }),
  component: ProductPage,
  notFoundComponent: () => <div className="py-32 text-center"><p className="font-display text-3xl text-maroon">Saree not found</p></div>,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add, toggleWishlist, wishlist, open } = useCart();
  const [qty, setQty] = useState(1);
  const [zoom, setZoom] = useState<{ x: number; y: number } | null>(null);
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);
  const wished = wishlist.includes(product.id);
  const msg = `Hi SSS Silks, I'm interested in "${product.name}" (₹${product.price}). Please share more details.`;

  return (
    <>
      <div className="container mx-auto px-6 py-10">
        <nav className="text-xs text-muted-foreground mb-6 uppercase tracking-widest">
          <Link to="/" className="hover:text-maroon">Home</Link> / <Link to="/collections" className="hover:text-maroon">Collections</Link> / <span className="text-maroon">{product.name}</span>
        </nav>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Gallery */}
          <div>
            <div
              className="relative aspect-[4/5] overflow-hidden bg-secondary cursor-zoom-in"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                setZoom({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
              }}
              onMouseLeave={() => setZoom(null)}
            >
              <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-300"
                style={zoom ? { transform: "scale(2)", transformOrigin: `${zoom.x}% ${zoom.y}%` } : undefined} />
            </div>
            <div className="grid grid-cols-4 gap-2 mt-3">
              {[product.image, product.image, product.image, product.image].map((s, i) => (
                <div key={i} className="aspect-square overflow-hidden border border-border hover:border-maroon cursor-pointer">
                  <img src={s} alt="" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">{product.category}</div>
            <h1 className="font-display text-4xl md:text-5xl text-maroon-deep mt-2">{product.name}</h1>
            <div className="flex items-center gap-4 mt-4">
              <span className="font-display text-3xl text-maroon">₹{product.price.toLocaleString("en-IN")}</span>
              <span className="text-sm text-muted-foreground line-through">₹{Math.round(product.price * 1.25).toLocaleString("en-IN")}</span>
              <span className="text-xs bg-gold/20 text-maroon-deep px-2 py-1">Inclusive of all taxes</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-6">{product.description}</p>

            <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {[
                ["Fabric", product.fabric], ["Color", product.color], ["Blouse", product.blouse], ["Length", "5.5 m saree + 0.8 m blouse"],
              ].map(([k, v]) => (
                <div key={k} className="border border-border p-4">
                  <dt className="text-[10px] uppercase tracking-widest text-gold">{k}</dt>
                  <dd className="mt-1">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center border border-border">
                <button className="p-3" onClick={() => setQty(Math.max(1, qty - 1))}><Minus className="h-3 w-3" /></button>
                <span className="px-4 text-sm">{qty}</span>
                <button className="p-3" onClick={() => setQty(qty + 1)}><Plus className="h-3 w-3" /></button>
              </div>
              <button onClick={() => toggleWishlist(product.id)} aria-label="Wishlist"
                className="p-3 border border-border hover:border-maroon">
                <Heart className={`h-4 w-4 ${wished ? "fill-maroon text-maroon" : ""}`} />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mt-5">
              <button onClick={() => add(product, qty)} className="bg-foreground text-background py-4 text-xs uppercase tracking-[0.25em] hover:bg-maroon-deep transition">Add to Cart</button>
              <button onClick={() => { add(product, qty); open(); }} className="bg-maroon text-primary-foreground py-4 text-xs uppercase tracking-[0.25em] hover:bg-maroon-deep transition">Buy Now</button>
            </div>
            <a href={waLink(msg)} target="_blank" rel="noopener" className="mt-3 flex items-center justify-center gap-3 border border-emerald-700 text-emerald-700 py-4 text-xs uppercase tracking-[0.25em] hover:bg-emerald-700 hover:text-white transition">
              <MessageCircle className="h-4 w-4" /> Inquire on WhatsApp
            </a>

            <ul className="mt-8 grid grid-cols-3 gap-4 text-center text-xs text-muted-foreground">
              <li><Truck className="h-5 w-5 mx-auto text-gold mb-1" />Worldwide Shipping</li>
              <li><ShieldCheck className="h-5 w-5 mx-auto text-gold mb-1" />Pure Silk Certified</li>
              <li><RefreshCw className="h-5 w-5 mx-auto text-gold mb-1" />Easy Exchange</li>
            </ul>
          </div>
        </div>

        {/* Related */}
        <div className="mt-24">
          <h2 className="font-display text-3xl md:text-4xl text-maroon-deep text-center">You May Also Love</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
    </>
  );
}
