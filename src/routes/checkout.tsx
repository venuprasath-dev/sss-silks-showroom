import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "@/store/cart";
import { waLink } from "@/data/products";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — SSS Silks" }, { name: "robots", content: "noindex" }] }),
  component: Checkout,
});

function Checkout() {
  const { items, total } = useCart();
  const [done, setDone] = useState(false);
  const msg = `Hello SSS Silks, please process my order:\n${items.map(i => `• ${i.product.name} × ${i.qty}`).join("\n")}\nTotal: ₹${total.toLocaleString("en-IN")}`;

  return (
    <section className="container mx-auto px-6 py-16 grid lg:grid-cols-[1.5fr_1fr] gap-10">
      <div>
        <span className="divider-gold text-[10px] tracking-[0.4em] uppercase">Secure Checkout</span>
        <h1 className="font-display text-4xl md:text-5xl text-maroon-deep mt-4">Almost Yours</h1>

        {done ? (
          <div className="mt-10 bg-cream border-gold-thin p-10 text-center">
            <p className="font-display text-3xl text-maroon">Thank you ✦</p>
            <p className="text-muted-foreground mt-2">Our team will reach out shortly to confirm your order.</p>
            <Link to="/collections" className="inline-block mt-6 px-6 py-3 bg-maroon text-primary-foreground text-xs uppercase tracking-widest">Continue Shopping</Link>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="mt-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Full Name" className="bg-background border border-border px-4 py-3 text-sm" />
              <input required type="tel" placeholder="Phone" className="bg-background border border-border px-4 py-3 text-sm" />
            </div>
            <input required type="email" placeholder="Email" className="w-full bg-background border border-border px-4 py-3 text-sm" />
            <textarea required rows={3} placeholder="Shipping Address" className="w-full bg-background border border-border px-4 py-3 text-sm" />
            <div className="grid sm:grid-cols-3 gap-4">
              <input required placeholder="City" className="bg-background border border-border px-4 py-3 text-sm" />
              <input required placeholder="State" className="bg-background border border-border px-4 py-3 text-sm" />
              <input required placeholder="PIN Code" className="bg-background border border-border px-4 py-3 text-sm" />
            </div>
            <div className="border border-border p-5 bg-cream">
              <p className="text-sm font-semibold text-maroon-deep">Payment Method</p>
              <label className="flex items-center gap-2 text-sm mt-2"><input type="radio" name="pay" defaultChecked /> Cash on Delivery</label>
              <label className="flex items-center gap-2 text-sm mt-1"><input type="radio" name="pay" /> Pay via WhatsApp</label>
            </div>
            <button className="w-full bg-maroon text-primary-foreground py-4 text-xs uppercase tracking-[0.25em] hover:bg-maroon-deep transition">Place Order</button>
            <a href={waLink(msg)} target="_blank" rel="noopener" className="block text-center border border-emerald-700 text-emerald-700 py-4 text-xs uppercase tracking-[0.25em] hover:bg-emerald-700 hover:text-white transition">Or complete on WhatsApp</a>
          </form>
        )}
      </div>

      <aside className="bg-cream p-6 border-gold-thin h-fit sticky top-28">
        <h3 className="font-display text-2xl text-maroon-deep mb-4">Order Summary</h3>
        {items.length === 0 ? <p className="text-sm text-muted-foreground">Your bag is empty. <Link to="/collections" className="text-maroon underline">Shop now</Link></p> : (
          <>
            <ul className="space-y-4 max-h-72 overflow-y-auto pr-2">
              {items.map((i) => (
                <li key={i.product.id} className="flex gap-3 text-sm">
                  <img src={i.product.image} alt="" className="h-16 w-14 object-cover" />
                  <div className="flex-1">
                    <div className="font-display text-base">{i.product.name}</div>
                    <div className="text-xs text-muted-foreground">Qty {i.qty}</div>
                  </div>
                  <div className="text-maroon">₹{(i.product.price * i.qty).toLocaleString("en-IN")}</div>
                </li>
              ))}
            </ul>
            <div className="border-t mt-4 pt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><span>₹{total.toLocaleString("en-IN")}</span></div>
              <div className="flex justify-between text-muted-foreground"><span>Shipping</span><span>Free</span></div>
              <div className="flex justify-between font-display text-xl text-maroon-deep pt-2 border-t"><span>Total</span><span>₹{total.toLocaleString("en-IN")}</span></div>
            </div>
          </>
        )}
      </aside>
    </section>
  );
}
