import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/lib/blog";

export const metadata = {
  title: "Tea Journal | Chai Stories & Secrets",
  description: "Explore the art of brewing, health benefits of jaggery, and the rich heritage of Indian tea culture."
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-cream/30 pt-32 pb-20 px-5">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 text-center">
          <Reveal>
            <p className="eyebrow text-plum-700">The Tea Journal</p>
            <h1 className="mt-4 font-display text-5xl text-plum-900 md:text-7xl">Chai Stories & Secrets</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/70">
              A collection of thoughts, recipes, and traditions from the heart of Assam to your home.
            </p>
          </Reveal>
        </header>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.1}>
              <article className="group flex flex-col h-full bg-white border border-plum-100 shadow-soft transition hover:shadow-glow">
                <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 bg-plum-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    {post.category}
                  </div>
                </Link>
                
                <div className="flex flex-col flex-1 p-8">
                  <div className="mb-4 flex items-center gap-4 text-[11px] font-bold uppercase tracking-wider text-plum-400">
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><User size={12} /> By Narayani</span>
                  </div>
                  
                  <h2 className="font-display text-2xl text-plum-900 transition group-hover:text-plum-600">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  
                  <p className="mt-4 text-sm leading-relaxed text-ink/70 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-8">
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-plum-800 transition hover:text-plum-600"
                    >
                      Read Full Story <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
