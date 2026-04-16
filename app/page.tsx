import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CupSoda, Leaf, PackageCheck, Sparkles } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { flavours, site } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <section className="hero-scene relative flex items-end overflow-hidden px-5 pb-14 pt-32 md:pb-20">
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-cream to-transparent" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-[1fr_0.72fr] md:items-end">
          <Reveal>
            <p className="mb-5 inline-flex bg-cream/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-plum-900">
              Tea powder manufacturer and seller
            </p>
            <h1 className="font-display text-6xl leading-[0.88] text-white drop-shadow md:text-8xl lg:text-9xl">
              Narayani Tea
            </h1>
            <p
              className="mt-6 max-w-2xl text-xl leading-8 text-white md:text-2xl"
              style={{ textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}
            >
              {site.tagline}. Premium jaggery tea premixes and tea powders made for homes, counters, offices,
              and retailers who want every cup to feel consistent.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/products" className="button-primary">
                Explore flavours <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="button-secondary">
                Enquire now
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="hidden md:block">
            <div className="border border-white/55 bg-cream/90 p-3 shadow-glow backdrop-blur">
              <Image
                src="/images/business-card-01.png"
                alt="Narayani Tea brand identity card"
                width={1320}
                height={768}
                className="h-auto w-full"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden border-y border-plum-100 bg-plum-900 py-4 text-cream">
        <div className="marquee flex w-[200%] gap-8 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.22em]">
          {[...flavours, ...flavours].map((item, index) => (
            <span key={`${item.slug}-${index}`} className="flex items-center gap-8">
              {item.name}
              <Leaf size={16} className="text-saffron" />
            </span>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <Reveal>
            <p className="eyebrow">What we make</p>
            <h2 className="mt-4 font-display text-5xl leading-none text-plum-900 md:text-7xl">
              Instant comfort, crafted with jaggery warmth.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-8 text-ink/75">
              From Kadak Dust to Elaichi and Ginger Jaggery Tea, Narayani Tea focuses on dependable flavour,
              easy preparation, and a health-first positioning that feels right on shelves and in daily routines.
            </p>
          </Reveal>
        </div>
        <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            ["Premium blends", "Multiple grades and Assam profiles for strong, familiar cups.", CupSoda],
            ["Jaggery premixes", "Sweet, creamy premixes designed for quick service and retail.", Sparkles],
            ["Seller-ready", "Clear flavour range, memorable brand assets, and enquiry-first flow.", PackageCheck]
          ].map(([title, copy, Icon]) => (
            <Reveal key={String(title)}>
              <div className="h-full border border-plum-100 bg-white/72 p-7 shadow-soft">
                <Icon className="text-plum-700" size={26} />
                <h3 className="mt-8 font-display text-3xl text-plum-900">{title as string}</h3>
                <p className="mt-3 leading-7 text-ink/70">{copy as string}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad leaf-frame">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <p className="eyebrow">Featured flavours</p>
              <h2 className="mt-4 font-display text-5xl leading-none text-plum-900 md:text-7xl">
                A shelf with range.
              </h2>
            </Reveal>
            <Link href="/products" className="button-secondary w-fit">
              See all products <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {flavours.slice(0, 3).map((product, index) => (
              <Reveal key={product.slug} delay={index * 0.08}>
                <ProductCard product={product} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_0.85fr] md:items-center">
          <Reveal>
            <div className="relative overflow-hidden border border-plum-100 bg-white p-3 shadow-soft">
              <Image
                src="/images/happy-customer.png"
                alt="Narayani Tea Health First brand card"
                width={1340}
                height={768}
                className="h-auto w-full"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Why buyers remember it</p>
            <h2 className="mt-4 font-display text-5xl leading-none text-plum-900 md:text-6xl">
              Health-first name, rich flavour language, clean product story.
            </h2>
            <div className="mt-8 grid gap-4">
              {["Jaggery-led premix range", "Tea powder and family blends", "Clear enquiry routes for sellers"].map(
                (item) => (
                  <p key={item} className="flex items-center gap-3 text-lg text-ink/75">
                    <BadgeCheck className="text-leaf" size={21} /> {item}
                  </p>
                )
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
