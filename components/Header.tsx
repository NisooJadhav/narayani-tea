"use client";

import Link from "next/link";
import { ChevronDown, Coffee, Menu, X } from "lucide-react";
import { useState } from "react";
import { flavours, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between border border-white/70 bg-cream/[0.82] px-4 py-3 shadow-soft backdrop-blur-xl md:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Narayani Tea home">
          <span className="grid size-10 place-items-center bg-plum-800 text-cream">
            <Coffee size={20} />
          </span>
          <span>
            <span className="block font-display text-2xl leading-none text-plum-900">{site.name}</span>
            <span className="text-xs uppercase tracking-[0.24em] text-tea">{site.tagline}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
          <div className="group relative">
            <button className="nav-link flex items-center gap-1" type="button">
              Flavours <ChevronDown size={15} />
            </button>
            <div className="pointer-events-none absolute right-0 top-9 w-72 translate-y-2 border border-plum-100 bg-white/95 p-3 opacity-0 shadow-glow backdrop-blur-xl transition group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              {flavours.map((flavour) => (
                <Link
                  key={flavour.slug}
                  href={`/products#${flavour.slug}`}
                  className="block border-b border-plum-100 px-3 py-3 text-sm text-ink transition last:border-b-0 hover:bg-plum-50 hover:text-plum-800"
                >
                  <span className="block font-semibold">{flavour.name}</span>
                  <span className="text-xs uppercase tracking-[0.18em] text-tea/70">{flavour.tone}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center border border-plum-200 text-plum-900 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl border border-white/70 bg-cream/95 p-4 shadow-soft backdrop-blur-xl md:hidden">
          <div className="grid gap-2">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="mobile-link" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <details className="border-t border-plum-100 pt-2">
              <summary className="cursor-pointer list-none px-2 py-3 font-semibold text-plum-900">
                Flavours
              </summary>
              <div className="grid gap-1 pb-2">
                {flavours.map((flavour) => (
                  <Link
                    key={flavour.slug}
                    href={`/products#${flavour.slug}`}
                    className="mobile-link text-sm"
                    onClick={() => setOpen(false)}
                  >
                    {flavour.name}
                  </Link>
                ))}
              </div>
            </details>
          </div>
        </div>
      )}
    </header>
  );
}
