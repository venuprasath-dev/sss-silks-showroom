import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  fabric: string;
  color: string;
  blouse: string;
  description: string;
};

export const products: Product[] = [
  { id: "kanchi-maroon", name: "Royal Maroon Kanchipuram", price: 18500, category: "Bridal Sarees", image: p1,
    fabric: "Pure Kanchipuram Silk", color: "Deep Maroon & Antique Gold", blouse: "0.80 m matching blouse piece",
    description: "A regal Kanchipuram silk in rich maroon with a broad antique gold zari border — woven by master weavers of Kanchipuram. The pallu features intricate temple motifs traditional to Tamil bridal wear." },
  { id: "peacock-blue", name: "Peacock Blue Mango Border", price: 14200, category: "Silk Sarees", image: p2,
    fabric: "Pure Silk", color: "Peacock Blue & Gold", blouse: "Contrast unstitched blouse",
    description: "Vivid peacock-blue silk with classic mango motif zari border. A festive favorite that transitions from temple visits to wedding receptions." },
  { id: "rose-pink", name: "Rose Pink Soft Silk", price: 9800, category: "Silk Sarees", image: p3,
    fabric: "Soft Silk", color: "Rose Pink & Silver", blouse: "Matching blouse piece",
    description: "Lightweight soft silk in a soft rose pink with delicate silver zari border. Easy to drape, beautifully fluid." },
  { id: "ivory-bridal", name: "Ivory & Gold Bridal Silk", price: 24500, category: "Bridal Sarees", image: p4,
    fabric: "Pure Kanchipuram Silk", color: "Ivory Cream & Gold", blouse: "Heavy embroidered blouse piece",
    description: "Heirloom-grade ivory Kanchipuram with broad gold zari pallu — a contemporary bridal classic for the modern Tamil bride." },
  { id: "emerald-classic", name: "Emerald Temple Border", price: 12600, category: "Designer Collections", image: p5,
    fabric: "Pure Silk", color: "Emerald Green & Red", blouse: "Contrast red blouse piece",
    description: "Classic emerald silk with a vivid red and gold temple border. Timeless festive elegance." },
  { id: "mustard-festive", name: "Mustard Festive Silk", price: 11200, category: "Festive Collections", image: p6,
    fabric: "Art Silk", color: "Mustard & Maroon", blouse: "Magenta blouse piece",
    description: "A radiant mustard silk paired with a rich maroon border — perfect for festive gatherings and family occasions." },
];

export const categories = [
  "Bridal Sarees", "Silk Sarees", "Cotton Sarees", "Designer Collections", "Festive Collections", "Readymades",
];

export const BRAND = {
  name: "SSS Silks",
  tagline: "Heaven of Sarees and Readymades",
  phone: "+91 98423 76688",
  whatsapp: "919842376688",
  address: "Perundurai Road, Opposite Eye Foundation, Palayapalayam, Erode, Tamil Nadu",
  hours: "Mon – Sun · 10:00 AM – 9:00 PM",
};

export const waLink = (msg: string) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(msg)}`;
