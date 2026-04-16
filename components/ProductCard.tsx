import { Sparkles } from "lucide-react";
import type { CSSProperties } from "react";

type ProductCardProps = {
  product: {
    slug: string;
    name: string;
    tone: string;
    ingredients: string[];
    accent: string;
  };
  index?: number;
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <article id={product.slug} className="product-card scroll-mt-32" style={{ "--accent": product.accent } as CSSProperties}>
      <div className="flex items-start justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.24em] text-tea/70">Blend {String(index + 1).padStart(2, "0")}</span>
          <h3 className="mt-3 font-display text-4xl leading-none text-plum-900">{product.name}</h3>
          <p className="mt-3 text-sm uppercase tracking-[0.22em] text-[color:var(--accent)]">{product.tone}</p>
        </div>
        <span className="grid size-12 shrink-0 place-items-center border border-plum-100 bg-white text-[color:var(--accent)]">
          <Sparkles size={20} />
        </span>
      </div>
      <div className="mt-8 h-52 overflow-hidden bg-[color:var(--accent)]/10">
        <div className="product-pack" style={{ "--accent": product.accent } as CSSProperties}>
          <span>{product.name.split(" ")[0]}</span>
        </div>
      </div>
      <div className="mt-7">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-plum-900">Ingredients</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.ingredients.map((ingredient) => (
            <span key={ingredient} className="border border-plum-100 bg-white/80 px-3 py-2 text-sm text-ink">
              {ingredient}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
