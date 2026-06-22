import { guides, getGuide } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

const difficultyColor: Record<string, string> = {
  Beginner: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  Intermediate: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
  Advanced: "text-red-400 border-red-400/30 bg-red-400/10",
};

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const related = guides
    .filter((g) => g.category.id === guide.category.id && g.slug !== guide.slug)
    .slice(0, 3);

  return (
    <div className="pt-20">
      {/* Cover */}
      <div className="relative h-[40vh] w-full">
        <Image src={guide.image} alt={guide.title} fill className="object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 -mt-16 relative z-10 pb-24">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Link
            href={`/categories/${guide.category.id}`}
            className={`px-3 py-1 rounded-full text-xs font-semibold ${guide.category.color} uppercase tracking-wider`}
          >
            {guide.category.label}
          </Link>
          <span className={`text-xs font-medium px-2 py-0.5 rounded border ${difficultyColor[guide.difficulty]}`}>
            {guide.difficulty}
          </span>
          <span className="text-white/30 text-xs">{guide.duration}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
          {guide.title}
        </h1>
        <p className="text-white/60 text-lg leading-relaxed mb-8 border-l-2 border-purple-500 pl-4">
          {guide.excerpt}
        </p>
        <div className="prose prose-invert max-w-none">
          <p className="text-white/70 leading-8">{guide.content}</p>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16 pt-10 border-t border-white/10">
            <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-purple-400 mb-6">
              More in {guide.category.label}
            </h2>
            <div className="space-y-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/guides/${r.slug}`} className="group flex items-center gap-4 p-4 rounded-xl border border-white/10 hover:border-purple-500/40 hover:bg-white/5 transition-all">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={r.image} alt={r.title} fill className="object-cover opacity-80" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm group-hover:text-purple-400 transition-colors">{r.title}</p>
                    <p className="text-white/40 text-xs mt-1">{r.difficulty} · {r.duration}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10">
          <Link href="/guides" className="text-purple-400 hover:text-purple-300 font-semibold text-sm">
            ← All Guides
          </Link>
        </div>
      </div>
    </div>
  );
}
