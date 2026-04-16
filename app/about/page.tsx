import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, HeartPulse, Leaf, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { brochureNotes, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Narayani Tea, a health-first tea powder manufacturer and seller offering premium tea powders and jaggery premixes.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Narayani Tea",
    description: "A health-first tea powder and jaggery premix brand."
  }
};

export default function AboutPage() {
  return (
    <main className="pt-32">
      <section className="section-pad pt-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_0.9fr] md:items-center">
          <Reveal>
            <p className="eyebrow">About Narayani Tea</p>
            <h1 className="mt-4 font-display text-6xl leading-none text-plum-900 md:text-8xl">
              A refined tea brand with a health-first promise.
            </h1>
            <p className="mt-7 text-lg leading-8 text-ink/75">
              Narayani Tea makes tea powders and premixes for buyers who want everyday comfort with a richer,
              more memorable product story. The range highlights jaggery sweetness, familiar Indian flavours,
              and dependable preparation.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border border-plum-100 bg-white p-3 shadow-soft">
              <Image
                src="/images/business-card-01.png"
                alt="Narayani Tea brochure visual"
                width={1320}
                height={768}
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad leaf-frame">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            ["Health-first", "The brand promise puts wellness-minded ingredients and daily rituals at the front.", HeartPulse],
            ["Blend clarity", "Every flavour communicates its key ingredients without making buyers guess.", ShieldCheck],
            ["Retail presence", "Purple, cream, green, and gold cues give the brand a premium shelf character.", Leaf]
          ].map(([title, copy, Icon]) => (
            <Reveal key={String(title)}>
              <div className="h-full border border-plum-100 bg-white/75 p-7 shadow-soft">
                <Icon className="text-plum-700" size={28} />
                <h2 className="mt-8 font-display text-3xl text-plum-900">{title as string}</h2>
                <p className="mt-3 leading-7 text-ink/70">{copy as string}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <p className="eyebrow">From provided materials</p>
            <h2 className="mt-4 font-display text-5xl leading-none text-plum-900 md:text-7xl">
              The essential brand facts.
            </h2>
          </Reveal>
          <div className="grid gap-4">
            {brochureNotes.map((note) => (
              <Reveal key={note}>
                <p className="flex items-center gap-3 border border-plum-100 bg-white/75 p-5 text-lg text-ink/75 shadow-soft">
                  <BadgeCheck className="shrink-0 text-leaf" size={21} />
                  {note}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border border-plum-100 bg-plum-900 p-8 text-cream shadow-glow md:flex-row md:items-center md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-saffron">{site.tagline}</p>
            <h2 className="mt-3 font-display text-4xl leading-none md:text-5xl">Ready to talk products?</h2>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-cream px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-plum-900">
            Contact us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
