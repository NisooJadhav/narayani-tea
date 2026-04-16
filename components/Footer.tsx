import Link from "next/link";
import { Mail, MousePointer2 } from "lucide-react";
import { flavours, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-plum-100 bg-plum-900 text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-4xl">{site.name}</p>
          <p className="mt-2 text-plum-100">{site.tagline}</p>
          <p className="mt-5 max-w-md text-sm leading-7 text-plum-100/80">
            Premium tea powders and jaggery premixes crafted for comfort, consistency, and everyday wellness.
          </p>
        </div>
        <div>
          <p className="footer-title">Explore</p>
          <div className="mt-4 grid gap-3 text-sm text-plum-100/80">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-title">Flavours</p>
          <div className="mt-4 grid gap-3 text-sm text-plum-100/80">
            {flavours.slice(0, 5).map((item) => (
              <Link key={item.slug} href={`/products#${item.slug}`} className="hover:text-white">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-sm text-plum-100/70 md:flex-row md:items-center md:justify-between">
          <span>Copyright {new Date().getFullYear()} Narayani Tea. All rights reserved.</span>
          <span className="flex flex-wrap gap-4">
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-white">
              <Mail size={16} /> {site.email}
            </a>
            <a href={site.url} className="inline-flex items-center gap-2 hover:text-white">
              <MousePointer2 size={16} /> www.narayanitea.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
