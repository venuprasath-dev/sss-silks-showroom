import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { Search } from "lucide-react";

type Search = { cat?: string };

export const Route = createFileRoute("/collections")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    cat: typeof s.cat === "string" ? s.cat : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Collections — SSS Silks | Kanchipuram, Bridal, Designer Sarees" },
      { name: "description", content: "Browse our curated saree collections — bridal, Kanchipuram silk, cotton, designer, festive and readymades." },
      { property: "og:title", content: "Collections — SSS Silks" },
      { property: "og:description", content: "A complete catalog of premium South Indian sarees and readymades." },
    ],
  }),
  component: Collections,
});

function Collections() {
  const { cat } = Route.useSearch();
  const [active, setActive] = useState<string>(cat ?? "All");
  const [sort, setSort] = useState("featured");
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    let r = products.filter((p) => (active === "All" || p.category === active) && p.name.toLowerCase().includes(q.toLowerCase()));
    if (sort === "low") r = [...r].sort((a, b) => a.price - b.price);
    if (sort === "high") r = [...r].sort((a, b) => b.price - a.price);
    return r;
  }, [active, sort, q]);

  return (
    <>
      <section className="bg-cream py-20 text-center border-b border-border">
        <span className="divider-gold text-[10px] tracking-[0.4em] uppercase">The Catalog</span>
        <h1 className="font-display text-5xl md:text-6xl text-maroon-deep mt-4">Our Collections</h1>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto px-4">Pure silks, heritage weaves and contemporary readymades — for every celebration of life.</p>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {["All", ...categories].map((c) => (
              <button key={c} onClick={() => setActive(c)}
                className={`px-4 py-2 text-xs uppercase tracking-widest border transition ${active === c ? "bg-maroon text-primary-foreground border-maroon" : "border-border hover:border-maroon"}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search sarees..."
                className="pl-9 pr-3 py-2 text-sm border border-border bg-background w-44 focus:border-maroon outline-none" />
            </div>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="border border-border bg-background px-3 py-2 text-sm">
              <option value="featured">Featured</option>
              <option value="low">Price: Low → High</option>
              <option value="high">Price: High → Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {list.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        {list.length === 0 && <p className="text-center py-20 text-muted-foreground">No sarees match your search.</p>}
      </section>
    </>
  );
}
