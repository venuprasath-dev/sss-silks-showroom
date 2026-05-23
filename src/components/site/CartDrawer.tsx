import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/store/cart";
import { BRAND, waLink } from "@/data/products";
import { Link } from "@tanstack/react-router";

export function CartDrawer() {
  const { isOpen, close, items, setQty, remove, total } = useCart();
  if (!isOpen) return null;
  const msg = `Hello SSS Silks, I'd like to order:\n${items.map(i => `• ${i.product.name} × ${i.qty} (₹${i.product.price})`).join("\n")}\nTotal: ₹${total.toLocaleString("en-IN")}`;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-foreground/40 animate-fade-in" onClick={close} />
      <aside className="absolute right-0 top-0 h-full w-full sm:w-[440px] bg-background shadow-2xl flex flex-col animate-fade-in" style={{ animationDuration: "0.4s" }}>
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <h3 className="font-display text-2xl text-maroon-deep">Your Bag</h3>
          <button onClick={close} aria-label="Close"><X className="h-5 w-5" /></button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <p className="font-display text-2xl mb-2">Your bag is empty</p>
              <p className="text-sm">Discover our curated saree collections.</p>
              <Link to="/collections" onClick={close} className="inline-block mt-6 px-6 py-3 bg-maroon text-primary-foreground text-xs uppercase tracking-widest">Browse Collections</Link>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((i) => (
                <li key={i.product.id} className="flex gap-4 pb-5 border-b border-border/60">
                  <img src={i.product.image} alt={i.product.name} className="h-24 w-20 object-cover" loading="lazy" />
                  <div className="flex-1">
                    <div className="font-display text-lg leading-tight">{i.product.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{i.product.category}</div>
                    <div className="text-maroon font-semibold mt-1">₹{(i.product.price * i.qty).toLocaleString("en-IN")}</div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-border">
                        <button className="p-1.5" onClick={() => setQty(i.product.id, i.qty - 1)}><Minus className="h-3 w-3" /></button>
                        <span className="px-3 text-sm">{i.qty}</span>
                        <button className="p-1.5" onClick={() => setQty(i.product.id, i.qty + 1)}><Plus className="h-3 w-3" /></button>
                      </div>
                      <button onClick={() => remove(i.product.id)} className="text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {items.length > 0 && (
          <div className="border-t px-6 py-5 space-y-3 bg-cream">
            <div className="flex justify-between font-display text-xl">
              <span>Subtotal</span>
              <span className="text-maroon">₹{total.toLocaleString("en-IN")}</span>
            </div>
            <p className="text-[11px] text-muted-foreground">Shipping & taxes calculated at checkout.</p>
            <Link to="/checkout" onClick={close} className="block text-center bg-maroon text-primary-foreground py-3 text-xs uppercase tracking-widest hover:bg-maroon-deep transition">Checkout</Link>
            <a href={waLink(msg)} target="_blank" rel="noopener" className="block text-center border border-maroon text-maroon py-3 text-xs uppercase tracking-widest hover:bg-maroon hover:text-primary-foreground transition">Order on WhatsApp</a>
          </div>
        )}
      </aside>
    </div>
  );
}
