import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet, createRootRouteWithContext, useRouter,
  HeadContent, Scripts,
} from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CartProvider } from "@/store/cart";
import { CartDrawer } from "@/components/site/CartDrawer";
import { BRAND } from "@/data/products";
import { MessageCircle } from "lucide-react";

function NotFoundComponent() {
  return (
    <div className="min-h-[70vh] grid place-items-center px-4 text-center">
      <div>
        <h1 className="font-display text-7xl text-maroon">404</h1>
        <p className="mt-3 text-muted-foreground">This page has slipped between the silks.</p>
        <a href="/" className="inline-block mt-6 px-6 py-3 bg-maroon text-primary-foreground text-xs uppercase tracking-widest">Return Home</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="min-h-[70vh] grid place-items-center px-4 text-center">
      <div>
        <h1 className="font-display text-3xl text-maroon">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again.</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 px-6 py-3 bg-maroon text-primary-foreground text-xs uppercase tracking-widest">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SSS Silks — Heaven of Sarees and Readymades | Erode" },
      { name: "description", content: "Premium Kanchipuram silk sarees, bridal collections and readymades at SSS Silks, Erode. Authentic weaves, worldwide shipping, WhatsApp ordering." },
      { property: "og:title", content: "SSS Silks — Heaven of Sarees and Readymades" },
      { property: "og:description", content: "Premium Kanchipuram silks, bridal sarees and readymades — Erode, Tamil Nadu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Navbar />
        <main className="min-h-[60vh]"><Outlet /></main>
        <Footer />
        <CartDrawer />
        <a
          href={`https://wa.me/${BRAND.whatsapp}?text=Hello%20SSS%20Silks`}
          target="_blank" rel="noopener" aria-label="WhatsApp"
          className="fixed bottom-6 right-6 z-40 h-14 w-14 grid place-items-center rounded-full bg-emerald-600 text-white luxe-shadow hover:scale-110 transition"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </CartProvider>
    </QueryClientProvider>
  );
}
