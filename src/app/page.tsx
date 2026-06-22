import Link from "next/link";
import { guides, categories } from "@/lib/posts";
import Image from "next/image";
// hero no longer uses a background image — club-bg CSS handles atmosphere

const difficultyColor: Record<string, string> = {
  Beginner: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  Intermediate: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
  Advanced: "text-red-400 border-red-400/30 bg-red-400/10",
};

export default function Home() {
  const featured = guides.slice(0, 3);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-purple-500/40 text-purple-400 bg-purple-500/10 mb-6">
            Pioneer DDJ-FLX4
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            Learn to DJ with the{" "}
            <span className="gradient-text">FLX4</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Step-by-step guides covering setup, mixing, effects, and advanced
            techniques — from your very first track to peak-hour sets.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/guides"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-500 rounded-full font-semibold transition-colors"
            >
              Browse All Guides
            </Link>
            <Link
              href="/categories"
              className="px-8 py-3 border border-white/20 hover:border-white/50 rounded-full font-semibold transition-colors"
            >
              Browse by Category
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-purple-400 mb-8">
          Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.id}`}
              className="group block p-4 rounded-2xl border border-white/10 hover:border-purple-500/40 bg-white/5 hover:bg-white/10 transition-all"
            >
              <span className={`inline-block w-2 h-2 rounded-full mb-3 ${cat.color}`} />
              <p className="font-semibold text-sm group-hover:text-purple-400 transition-colors">
                {cat.label}
              </p>
              <p className="text-white/40 text-xs mt-1 leading-snug">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured guides */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-purple-400 mb-8">
          Start Here
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group block">
              <div className="relative h-44 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <span className={`absolute top-3 left-3 px-2 py-0.5 rounded-full text-xs font-semibold ${guide.category.color} uppercase tracking-wider`}>
                  {guide.category.label}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-medium px-2 py-0.5 rounded border ${difficultyColor[guide.difficulty]}`}>
                  {guide.difficulty}
                </span>
                <span className="text-white/30 text-xs">{guide.duration}</span>
              </div>
              <h3 className="font-bold text-lg group-hover:text-purple-400 transition-colors leading-snug">
                {guide.title}
              </h3>
              <p className="text-white/50 text-sm mt-2 line-clamp-2">{guide.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
