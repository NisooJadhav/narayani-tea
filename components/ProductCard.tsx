import { Sparkles, ArrowUpRight, MessageCircle } from "lucide-react";
import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";

type ProductCardProps = {
  product: {
    slug: string;
    name: string;
    tone: string;
    ingredients: string[];
    accent: string;
    image?: string;
  };
  index?: number;
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <article id={product.slug} className="product-card group scroll-mt-32" style={{ "--accent": product.accent } as CSSProperties}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-tea/50">Collection {String(index + 1).padStart(2, "0")}</span>
          <h3 className="font-display text-4xl text-plum-900 group-hover:text-plum-600 transition-colors">{product.name}</h3>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">{product.tone}</p>
        </div>
        <div className="grid size-12 shrink-0 place-items-center border border-plum-50 bg-white shadow-soft transition-transform group-hover:rotate-12">
          <Sparkles size={18} className="text-[color:var(--accent)]" />
        </div>
      </div>

      <div className="relative mt-8 h-64 overflow-hidden bg-plum-50/50 group-hover:bg-plum-50 transition-colors duration-500 rounded-xl">
        {product.image ? (
          <div className="relative h-full w-full">
            <Image
              src={product.image}
              alt={`${product.name} product packaging`}
              fill
              className="object-contain p-4 transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl"
            />
          </div>
        ) : (
          <div className="product-pack" style={{ "--accent": product.accent } as CSSProperties}>
            <span className="drop-shadow-2xl">{product.name.split(" ")[0]}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
      </div>

      <div className="mt-8 space-y-6">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-tea/40">Pure Ingredients</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {product.ingredients.slice(0, 3).map((ingredient) => (
              <span key={ingredient} className="border border-plum-100/50 bg-white/40 px-3 py-1.5 text-[11px] font-medium text-plum-900/80 backdrop-blur-sm">
                {ingredient}
              </span>
            ))}
            {product.ingredients.length > 3 && (
              <span className="flex items-center px-2 text-[10px] font-bold text-plum-300">+{product.ingredients.length - 3} More</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-plum-50">
           <Link href={`/products#${product.slug}`} className="flex items-center justify-center gap-2 border border-plum-100 bg-white py-3 text-[10px] font-bold uppercase tracking-widest text-plum-900 transition hover:bg-plum-50">
             Details <ArrowUpRight size={14} />
           </Link>
           <Link href="/contact" className="flex items-center justify-center gap-2 bg-plum-900 py-3 text-[10px] font-bold uppercase tracking-widest text-white transition hover:bg-plum-800">
             Enquire <MessageCircle size={14} />
           </Link>
        </div>
      </div>
    </article>
  );
}
