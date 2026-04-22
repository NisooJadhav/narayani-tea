"use client";

import Link from "next/link";
import { ChevronDown, Coffee, Facebook, Instagram, Mail, Menu, Phone, Youtube, X, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { flavours, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="hidden border-b border-plum-500/10 bg-plum-900 py-2.5 text-cream md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 px-5 text-[11px] font-bold uppercase tracking-[0.2em]">
          <div className="flex items-center gap-8">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition hover:text-saffron">
              <Mail size={14} className="text-saffron" /> {site.email}
            </a>
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-saffron" /> Enquire for Bulk Orders
            </span>
          </div>
          <div className="flex items-center gap-6 border-l border-cream/20 pl-6">
            <span className="text-cream/60">Follow us:</span>
            <div className="flex items-center gap-4">
              <Link href="#" className="transition hover:text-saffron"><Facebook size={14} /></Link>
              <Link href="#" className="transition hover:text-saffron"><Instagram size={14} /></Link>
              <Link href="#" className="transition hover:text-saffron"><Youtube size={14} /></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav 
        className={cn(
          "transition-all duration-500",
          isScrolled 
            ? "border-b border-plum-100 bg-white shadow-lg py-3" 
            : "bg-cream/90 py-5 backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-6">
          <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-[1.02]" aria-label="Narayani Tea home">
            <span className="grid size-11 place-items-center bg-plum-800 text-cream shadow-glow">
              <Coffee size={22} />
            </span>
            <span>
              <span className="block font-display text-2xl leading-none text-plum-900 md:text-3xl">{site.name}</span>
              <span className="text-[10px] uppercase tracking-[0.24em] text-tea/80 md:text-xs">{site.tagline}</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1.5 md:flex">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-plum-900 transition hover:text-plum-600">
                {item.label}
              </Link>
            ))}
            <div className="group relative">
              <button className="flex items-center gap-1 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-plum-900 transition hover:text-plum-600" type="button">
                Flavours <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="pointer-events-none absolute right-0 top-full w-80 translate-y-2 rounded-2xl border border-plum-100 bg-white p-2 opacity-0 shadow-[0_20px_50px_rgba(51,24,79,0.15)] transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid gap-1">
                  {flavours.map((flavour) => (
                    <Link
                      key={flavour.slug}
                      href={`/products#${flavour.slug}`}
                      className="group/item flex items-center justify-between rounded-xl px-5 py-4 transition hover:bg-plum-50"
                    >
                      <div>
                        <span className="block text-sm font-bold text-plum-900">{flavour.name}</span>
                        <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.15em] text-saffron/80">{flavour.tone}</span>
                      </div>
                      <div className="grid size-8 place-items-center rounded-full bg-plum-100/50 text-plum-400 transition group-hover/item:bg-plum-800 group-hover/item:text-white">
                        <ChevronDown size={14} className="-rotate-90 transition-transform group-hover/item:translate-x-0.5" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="ml-4 flex items-center gap-3 border-l border-plum-100 pl-6">
              <button className="text-plum-900 transition hover:text-plum-600" aria-label="Search">
                <Search size={20} />
              </button>
              <Link href="/contact" className="bg-plum-900 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-cream transition hover:bg-plum-800">
                Enquire Now
              </Link>
            </div>
          </div>

          <button
            type="button"
            className="grid size-11 place-items-center border border-plum-100 text-plum-900 transition hover:bg-plum-50 md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 top-[68px] z-40 bg-white p-6 shadow-2xl md:hidden">
          <div className="grid gap-4">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="border-b border-plum-50 pb-4 text-lg font-bold text-plum-900" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <div className="grid gap-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-tea/60">Our Flavours</p>
              <div className="grid grid-cols-2 gap-2">
                {flavours.map((flavour) => (
                  <Link
                    key={flavour.slug}
                    href={`/products#${flavour.slug}`}
                    className="bg-plum-50 p-3 text-[12px] font-semibold text-plum-900"
                    onClick={() => setOpen(false)}
                  >
                    {flavour.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/contact" className="mt-4 bg-plum-900 py-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-cream" onClick={() => setOpen(false)}>
              Contact & Enquiries
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
