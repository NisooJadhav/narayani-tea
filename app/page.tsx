import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CupSoda, Leaf, PackageCheck, Sparkles, Clock, ShieldCheck, Heart, Star, BookOpen, Utensils } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { flavours, site } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* Cinematic Hero Section */}
      <section className="relative flex min-h-[95vh] items-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-plum.png"
            alt="Organic tea plantation with plum hues"
            fill
            className="object-cover brightness-[0.55] contrast-[1.1]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-plum-950/80 via-plum-950/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5">
          <div className="max-w-3xl">
            <Reveal>
              <p className="mb-4 inline-flex border-l-2 border-saffron pl-4 text-[10px] font-bold uppercase tracking-[0.4em] text-saffron">
                Est. Quality Trust • {site.tagline}
              </p>
              <h1 className="font-display text-5xl leading-[1.1] text-white md:text-7xl lg:text-[5.2rem]">
                Pure Essence <br />
                <span className="text-saffron italic">of Assam.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/90 md:text-xl">
                {site.description} Crafted for those who seek consistent warmth and health-first blends in every cup.
              </p>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Link href="/products" className="group flex items-center justify-center gap-3 bg-saffron px-8 py-5 text-sm font-bold uppercase tracking-[0.2em] text-plum-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-white">
                  Shop Our Blends <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/contact" className="flex items-center justify-center gap-3 border border-white/30 bg-white/5 px-8 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md transition hover:bg-white/10">
                  Business Enquiry
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Brand Marquee */}
      <section className="overflow-hidden border-y border-plum-100 bg-plum-900 py-6 text-cream">
        <div className="marquee flex w-[200%] gap-12 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.3em]">
          {[...flavours, ...flavours].map((item, index) => (
            <span key={`${item.slug}-${index}`} className="flex items-center gap-12 opacity-80">
              {item.name}
              <Leaf size={14} className="text-saffron" />
              100% ORGANIC INGREDIENTS
              <Leaf size={14} className="text-saffron" />
            </span>
          ))}
        </div>
      </section>

      {/* Our Tradition Section */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden border border-plum-100 p-3 shadow-2xl md:aspect-square">
                <Image
                  src="/images/tradition.png"
                  alt="Traditional Indian tea sharing moment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-plum-950/60 p-8 backdrop-blur-md">
                    <p className="font-display text-3xl text-white italic">"A legacy of warmth in every sip."</p>
                </div>
              </div>
            </Reveal>
            <div className="space-y-8">
              <Reveal delay={0.1}>
                <p className="eyebrow text-plum-700">Our Shared Heritage</p>
                <h2 className="mt-4 font-display text-5xl leading-tight text-plum-900 md:text-7xl">
                  Tracing the Journey <br /> of Authentic <span className="text-tea italic">Chai.</span>
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-ink/70">
                   Narayani Tea was born from a simple promise: to bring back the authentic, health-concious tea culture of India. From the misty gardens of Assam to your kitchen, we ensure every leaf is chosen with care.
                </p>
                <p className="text-lg leading-relaxed text-ink/70">
                  Our Jaggery-based premixes are a tribute to traditional wisdom, combining the convenience of modern life with the wholesome goodness of natural 'Gud'. Consistency is our signature; quality is our tradition.
                </p>
                <div className="pt-6">
                  <Link href="/about" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-plum-800 transition hover:text-plum-600">
                    Read Our Full Story <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Category Showcase */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Reveal>
              <p className="eyebrow">Explore Our Range</p>
              <h2 className="mt-4 font-display text-5xl text-plum-900 md:text-6xl">Two Paths to Perfection.</h2>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Instant Jaggery Premixes",
                desc: "The perfect balance of creamy milk, strong tea, and pure jaggery powder. Ready in seconds.",
                img: "/images/category-jaggery.png",
                link: "/products#premixes"
              },
              {
                title: "Authentic Assam Powders",
                desc: "Strong, bold, and aromatic Kadak Dust and Family Blends directly from Assam's finest gardens.",
                img: "/images/category-assam.png",
                link: "/products#powders"
              }
            ].map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.1}>
                <Link href={cat.link} className="group relative block aspect-[16/9] overflow-hidden shadow-xl">
                  <Image src={cat.img} alt={cat.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-950/90 via-plum-950/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <h3 className="font-display text-3xl text-white md:text-4xl">{cat.title}</h3>
                    <p className="mt-2 max-w-xs text-cream/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">{cat.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Flavours Section */}
      <section className="section-pad bg-cream/30">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <p className="eyebrow">House Favourites</p>
              <h2 className="mt-4 font-display text-5xl leading-none text-plum-900 md:text-7xl">
                The Signature <br /><span className="italic">Selection.</span>
              </h2>
            </Reveal>
            <Link href="/products" className="mb-2 flex items-center gap-2 border-b-2 border-plum-200 pb-2 font-bold uppercase tracking-widest text-plum-900 transition hover:border-plum-800">
              View All 12 Flavours <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {flavours.slice(0, 3).map((product, index) => (
              <Reveal key={product.slug} delay={index * 0.1}>
                <ProductCard product={product} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Narayani? - Features Section */}
      <section className="section-pad bg-plum-950 text-cream">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-[1fr_1.5fr] md:items-center">
            <Reveal>
              <h2 className="font-display text-5xl leading-tight md:text-6xl">
                The Narayani <br /> <span className="text-saffron italic">Standard.</span>
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-plum-100/70">
                Consistency is hard; quality is harder. We've spent years perfecting our blends so that every cup feels exactly like the first one you loved.
              </p>
            </Reveal>
            <div className="grid gap-8 sm:grid-cols-2">
              {[
                [ShieldCheck, "Purity Guaranteed", "No artificial sweeteners or harmful preservatives. Just pure jaggery."],
                [Clock, "Instant Comfort", "Designed for the busy world - professional taste in under a minute."],
                [Heart, "Health First", "Crafted with wellness in mind, replacing refined sugar with natural minerals."],
                [Star, "Premium Assam", "Only the boldest Dust and Family Blends sourced from tea estates."]
              ].map(([Icon, title, desc], i) => (
                <Reveal key={title as string} delay={i * 0.05}>
                  <div className="group border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">
                    <Icon className="text-saffron" size={28} />
                    <h4 className="mt-6 text-xl font-bold">{title as string}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-plum-100/60">{desc as string}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tea Recipes / Blog Section */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col items-center text-center">
            <Reveal>
              <p className="eyebrow">The Tea Journal</p>
              <h2 className="mt-4 font-display text-5xl text-plum-900 md:text-6xl">Chai Stories & Secrets</h2>
            </Reveal>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "The Art of the Perfect Brew", slug: "perfect-brew", date: "April 15, 2024", cat: "Tips", img: "/images/category-assam.png" },
              { title: "Why Jaggery is the Future of Chai", slug: "jaggery-future", date: "April 10, 2024", cat: "Health", img: "/images/category-jaggery.png" },
              { title: "5 Spices for Your Morning Cup", slug: "morning-spices", date: "April 05, 2024", cat: "Lifestyle", img: "/images/tradition.png" }
            ].map((post, i) => (
              <Reveal key={post.title} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group cursor-pointer block">
                  <div className="relative aspect-[4/3] overflow-hidden grayscale transition duration-500 group-hover:grayscale-0">
                    <Image src={post.img} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute left-4 top-4 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-plum-900">
                      {post.cat}
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-plum-400">{post.date}</p>
                    <h3 className="mt-2 text-xl font-bold text-plum-900 transition hover:text-plum-600">{post.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 text-center">
             <Link href="/blog" className="button-secondary">Visit Our Journal</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-plum-900 text-cream text-center px-5">
        <Reveal>
            <p className="text-saffron font-bold uppercase tracking-[0.3em] text-xs">Partner with us</p>
            <h2 className="font-display text-5xl md:text-7xl mt-6 px-4">Ready to serve the perfect cup?</h2>
            <p className="max-w-2xl mx-auto mt-8 text-plum-100/70 text-lg">Whether you are a retailer, a cafe owner, or looking for exports, Narayani Tea offers competitive bulk pricing and consistent supply.</p>
            <div className="mt-12">
                <Link href="/contact" className="button-primary px-12">Get Wholesale Pricing</Link>
            </div>
        </Reveal>
      </section>
    </main>
  );
}
