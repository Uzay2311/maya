import { categories, guides } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return categories.map((c) => ({ id: c.id }));
}

const difficultyColor: Record<string, string> = {
  Beginner: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  Intermediate: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
  Advanced: "text-red-400 border-red-400/30 bg-red-400/10",
};

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const category = categories.find((c) => c.id === id);
  if (!category) notFound();

  const catGuides = guides.filter((g) => g.category.id === id);

  return (
    <div className="pt-28 max-w-6xl mx-auto px-6 pb-24">
      <Link href="/categories" className="text-white/40 text-sm hover:text-white transition-colors mb-8 inline-block">
        ← Categories
      </Link>
      <div className="flex items-center gap-4 mb-3">
        <span className={`w-4 h-4 rounded-full ${category.color}`} />
        <h1 className="text-5xl font-black tracking-tight gradient-text">{category.label}</h1>
      </div>
      <p className="text-white/50 mb-12">{category.description}</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {catGuides.map((guide) => (
          <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group block">
            <div className="relative h-44 rounded-2xl overflow-hidden mb-4">
              <Image
                src={guide.image}
                alt={guide.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
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
    </div>
  );
}
