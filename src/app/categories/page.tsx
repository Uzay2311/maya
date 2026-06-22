import Link from "next/link";
import { categories, guides } from "@/lib/posts";

export default function CategoriesPage() {
  return (
    <div className="pt-28 max-w-5xl mx-auto px-6 pb-24">
      <h1 className="text-5xl font-black tracking-tight mb-2 gradient-text">Categories</h1>
      <p className="text-white/50 mb-12">Pick a topic and dive in.</p>

      <div className="grid sm:grid-cols-2 gap-6">
        {categories.map((cat) => {
          const count = guides.filter((g) => g.category.id === cat.id).length;
          return (
            <Link
              key={cat.id}
              href={`/categories/${cat.id}`}
              className="group block p-8 rounded-2xl border border-white/10 hover:border-purple-500/40 bg-white/5 hover:bg-white/10 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`w-4 h-4 rounded-full mt-1 ${cat.color}`} />
                <span className="text-white/30 text-sm">{count} guide{count !== 1 ? "s" : ""}</span>
              </div>
              <h2 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                {cat.label}
              </h2>
              <p className="text-white/50 text-sm">{cat.description}</p>
              <span className="inline-block mt-6 text-purple-400 text-sm font-semibold">
                Explore →
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
