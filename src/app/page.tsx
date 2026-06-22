import Link from "next/link";
import { posts } from "@/lib/posts";
import Image from "next/image";

export default function Home() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={featured.image}
            alt="Hero"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-purple-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            DJ · Producer · Storyteller
          </p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 gradient-text">
            MAYA
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto mb-10">
            Music, moments, and the stories between the records.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/blog"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-500 rounded-full font-semibold transition-colors"
            >
              Read the Blog
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 border border-white/20 hover:border-white/50 rounded-full font-semibold transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-purple-400 mb-8">
          Latest
        </h2>
        <Link href={`/blog/${featured.slug}`} className="group block">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-purple-600 uppercase tracking-wider">
                {featured.category}
              </span>
            </div>
            <div>
              <p className="text-white/40 text-sm mb-3">{featured.date}</p>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                {featured.title}
              </h3>
              <p className="text-white/60 leading-relaxed">{featured.excerpt}</p>
              <span className="inline-block mt-6 text-purple-400 font-semibold text-sm">
                Read more →
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* Recent posts grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-purple-400 mb-8">
          More Posts
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-sm border border-white/20 uppercase tracking-wider">
                  {post.category}
                </span>
              </div>
              <p className="text-white/40 text-xs mb-2">{post.date}</p>
              <h3 className="font-bold text-lg group-hover:text-purple-400 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-white/50 text-sm mt-2 line-clamp-2">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
