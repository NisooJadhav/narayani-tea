import type { Metadata } from "next";
import Link from "next/link";
import { Factory, Leaf, Mail } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { flavours, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products & Flavours",
  description:
    "Explore Narayani Tea products including Elaichi Jaggery Tea, Coffee Jaggery Premix, Kadak Dust, Basundi Jaggery Tea, Family Blend, Masala Jaggery Tea, and Ginger Jaggery Tea.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Narayani Tea Products & Flavours",
    description: "Premium tea powders and jaggery premixes from Narayani Tea.",
    url: "/products"
  }
};

export default function ProductsPage() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Narayani Tea flavours",
    itemListElement: flavours.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        brand: site.name,
        description: `${product.name} made with ${product.ingredients.join(", ")}.`
      }
    }))
  };

  return (
    <main className="pt-32">
      <section className="section-pad pt-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.92fr_1.08fr] md:items-end">
          <Reveal>
            <p className="eyebrow">Products</p>
            <h1 className="mt-4 font-display text-6xl leading-none text-plum-900 md:text-8xl">
              Flavours built for shelves and service.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-8 text-ink/75">
              A focused range spanning jaggery tea premixes, coffee premix, strong Kadak Dust, and an everyday
              Family Blend. Each product page card includes ingredient clarity for quick buyer confidence.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 border border-plum-100 bg-white/80 px-4 py-3 text-sm font-semibold text-plum-900">
                <Factory size={18} /> Manufacturer
              </span>
              <span className="inline-flex items-center gap-2 border border-plum-100 bg-white/80 px-4 py-3 text-sm font-semibold text-plum-900">
                <Leaf size={18} /> Health-first blends
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {flavours.map((product, index) => (
            <Reveal key={product.slug} delay={(index % 3) * 0.06}>
              <ProductCard product={product} index={index} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-plum-900 text-cream">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-saffron">Bulk and retail enquiries</p>
            <h2 className="mt-4 font-display text-5xl leading-none md:text-7xl">Need pricing or supply details?</h2>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-cream px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-plum-900">
            Contact Narayani Tea <Mail size={18} />
          </Link>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
    </main>
  );
}
