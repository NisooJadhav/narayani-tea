import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/lib/blog";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Tea Journal`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-white">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[400px] w-full pt-20">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <Reveal>
              <div className="mb-6 flex items-center justify-center gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-saffron">
                <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                <span className="flex items-center gap-2"><User size={14} /> By Narayani</span>
                <span className="flex items-center gap-2"><Clock size={14} /> 5 Min Read</span>
              </div>
              <h1 className="font-display text-4xl text-white md:text-6xl lg:text-7xl">
                {post.title}
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="relative z-10 -mt-20 mx-auto max-w-4xl px-5 pb-24">
        <div className="bg-white p-8 md:p-16 shadow-2xl border border-plum-100">
          <Reveal delay={0.2}>
            <div 
              className="prose prose-plum max-w-none prose-headings:font-display prose-headings:text-plum-900 prose-p:text-ink/80 prose-p:leading-relaxed prose-p:text-lg prose-blockquote:border-saffron prose-blockquote:bg-cream/50 prose-blockquote:p-8 prose-blockquote:font-display prose-blockquote:text-2xl prose-blockquote:italic"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-16 flex flex-wrap items-center justify-between gap-8 border-t border-plum-100 pt-12">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-plum-900 transition hover:text-plum-600"
              >
                <ArrowLeft size={18} /> Back to Journal
              </Link>
              
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-plum-300">Share this story:</span>
                <button className="grid size-10 place-items-center rounded-full border border-plum-100 text-plum-900 transition hover:bg-plum-950 hover:text-white">
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Next Post Suggestion */}
        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-3xl text-plum-900 mb-8">You might also enjoy...</h3>
            <div className="grid gap-8 md:grid-cols-2">
              {posts.filter(p => p.slug !== post.slug).slice(0, 2).map((other) => (
                <Link 
                  key={other.slug} 
                  href={`/blog/${other.slug}`}
                  className="group flex gap-4 items-center bg-cream/30 p-4 border border-plum-50 transition hover:bg-white hover:shadow-lg"
                >
                  <div className="relative size-24 shrink-0 overflow-hidden">
                    <Image src={other.image} alt={other.title} fill className="object-cover transition duration-500 group-hover:scale-110" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-saffron mb-1">{other.category}</p>
                    <h4 className="font-bold text-plum-900 leading-tight group-hover:text-plum-600">{other.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </article>
    </main>
  );
}
