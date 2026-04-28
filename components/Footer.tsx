import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube, Coffee } from "lucide-react";
import { flavours, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-plum-500/10 bg-plum-900 text-cream">
      <div className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_0.8fr_0.8fr_1fr]">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <span className="grid size-10 place-items-center bg-saffron text-plum-900 shadow-glow">
                <Coffee size={20} />
              </span>
              <span className="font-display text-4xl">{site.name}</span>
            </Link>
            <p className="max-w-xs text-sm leading-8 text-plum-100/90">
              Crafting premium Tea Powders and Jaggery Premixes with a commitment to health and authentic flavour. From our plantation blends to your daily cup.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="grid size-9 place-items-center bg-white/5 transition hover:bg-saffron hover:text-plum-900"><Facebook size={16} /></Link>
              <Link href="#" className="grid size-9 place-items-center bg-white/5 transition hover:bg-saffron hover:text-plum-900"><Instagram size={16} /></Link>
              <Link href="#" className="grid size-9 place-items-center bg-white/5 transition hover:bg-saffron hover:text-plum-900"><Youtube size={16} /></Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-saffron">Quick Links</h4>
            <div className="mt-8 grid gap-4 text-[13px] font-medium text-plum-100/80">
              {site.nav.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
              <Link href="/blog" className="transition hover:text-white">Our Blog</Link>
              <Link href="/recipes" className="transition hover:text-white">Tea Recipes</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-saffron">Our Products</h4>
            <div className="mt-8 grid gap-4 text-[13px] font-medium text-plum-100/80">
              {flavours.slice(0, 6).map((item) => (
                <Link key={item.slug} href={`/products#${item.slug}`} className="transition hover:text-white">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-saffron">Get in Touch</h4>
            <div className="mt-8 space-y-5 text-[13px] text-plum-100/80">
              <div className="flex gap-4">
                <MapPin size={18} className="shrink-0 text-saffron" />
                <address className="not-italic leading-6">
                  Narayani Tea HQ,<br />
                  Manufacturer & Seller,<br />
                  Pune, Maharashtra, India
                </address>
              </div>
              <a href={`mailto:${site.email}`} className="flex items-center gap-4 transition hover:text-white">
                <Mail size={18} className="text-saffron" /> {site.email}
              </a>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-saffron" />
                <span>+91 XXX XXX XXXX</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-[11px] font-bold uppercase tracking-[0.2em] text-plum-100/50 md:flex-row md:items-center md:justify-between">
          <span>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
