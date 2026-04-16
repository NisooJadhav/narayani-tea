import type { Metadata } from "next";
import { Mail, MapPin, MousePointer2, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Narayani Tea for product, retail, distribution, and bulk tea powder or jaggery premix enquiries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Narayani Tea",
    description: "Get in touch for tea powder and jaggery premix enquiries."
  }
};

export default function ContactPage() {
  return (
    <main className="pt-32">
      <section className="section-pad pt-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">Contact us</p>
            <h1 className="mt-4 font-display text-6xl leading-none text-plum-900 md:text-8xl">
              Let us make the next cup possible.
            </h1>
            <p className="mt-7 text-lg leading-8 text-ink/75">
              For product availability, seller enquiries, retail supply, or bulk orders, reach Narayani Tea directly.
            </p>
            <div className="mt-9 grid gap-4">
              <a href={`mailto:${site.email}`} className="flex items-center gap-4 border border-plum-100 bg-white/78 p-5 shadow-soft transition hover:border-plum-400">
                <Mail className="text-plum-700" size={22} />
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-tea/70">Email</span>
                  <span className="text-lg font-semibold text-plum-900">{site.email}</span>
                </span>
              </a>
              <a href={site.url} className="flex items-center gap-4 border border-plum-100 bg-white/78 p-5 shadow-soft transition hover:border-plum-400">
                <MousePointer2 className="text-plum-700" size={22} />
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-tea/70">Website</span>
                  <span className="text-lg font-semibold text-plum-900">www.narayanitea.com</span>
                </span>
              </a>
              <div className="flex items-center gap-4 border border-plum-100 bg-white/78 p-5 shadow-soft">
                <MapPin className="text-plum-700" size={22} />
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-tea/70">Serving</span>
                  <span className="text-lg font-semibold text-plum-900">Retail, seller, and bulk tea enquiries</span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="border border-plum-100 bg-white/78 p-6 shadow-soft md:p-8" action={`mailto:${site.email}`} method="post" encType="text/plain">
              <div className="grid gap-5">
                <label className="grid gap-2">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-plum-900">Name</span>
                  <input name="name" className="border border-plum-100 bg-cream px-4 py-4 outline-none transition focus:border-plum-500" placeholder="Your name" />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-plum-900">Email or phone</span>
                  <input name="contact" className="border border-plum-100 bg-cream px-4 py-4 outline-none transition focus:border-plum-500" placeholder="How should we reach you?" />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-plum-900">Interested in</span>
                  <select name="interest" className="border border-plum-100 bg-cream px-4 py-4 outline-none transition focus:border-plum-500">
                    <option>Retail supply</option>
                    <option>Bulk order</option>
                    <option>Distribution</option>
                    <option>Product details</option>
                  </select>
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-plum-900">Message</span>
                  <textarea name="message" rows={6} className="resize-none border border-plum-100 bg-cream px-4 py-4 outline-none transition focus:border-plum-500" placeholder="Tell us what you need." />
                </label>
                <button type="submit" className="button-primary">
                  Send enquiry <Send size={18} />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
