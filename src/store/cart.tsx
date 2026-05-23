import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Product } from "@/data/products";

type CartItem = { product: Product; qty: number };
type CartCtx = {
  items: CartItem[];
  wishlist: string[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (p: Product, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  toggleWishlist: (id: string) => void;
  count: number;
  total: number;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isOpen, setOpen] = useState(false);

  const add = useCallback((p: Product, qty = 1) => {
    setItems((prev) => {
      const ex = prev.find((i) => i.product.id === p.id);
      if (ex) return prev.map((i) => i.product.id === p.id ? { ...i, qty: i.qty + qty } : i);
      return [...prev, { product: p, qty }];
    });
    setOpen(true);
  }, []);
  const remove = useCallback((id: string) => setItems((p) => p.filter((i) => i.product.id !== id)), []);
  const setQty = useCallback((id: string, qty: number) =>
    setItems((p) => p.map((i) => i.product.id === id ? { ...i, qty: Math.max(1, qty) } : i)), []);
  const toggleWishlist = useCallback((id: string) =>
    setWishlist((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]), []);

  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.qty * i.product.price, 0);

  return (
    <Ctx.Provider value={{
      items, wishlist, isOpen, open: () => setOpen(true), close: () => setOpen(false),
      add, remove, setQty, toggleWishlist, count, total
    }}>
      {children}
    </Ctx.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart outside provider");
  return ctx;
};
