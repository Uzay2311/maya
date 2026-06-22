import Link from "next/link";
import Image from "next/image";
import { posts } from "@/lib/posts";

export default function BlogPage() {
  return (
    <div className="pt-28 max-w-6xl mx-auto px-6 pb-24">
      <h1 className="text-5xl font-black tracking-tight mb-2 gradient-text">Blog & Vlogs</h1>
      <p className="text-white/50 mb-12">Stories, thoughts, and recaps from behind the decks.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <div className="relative h-52 rounded-2xl overflow-hidden mb-5">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span
                className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                  post.category === "vlog"
                    ? "bg-pink-600"
                    : "bg-purple-600"
                }`}
              >
                {post.category}
              </span>
            </div>
            <p className="text-white/40 text-xs mb-2">{post.date}</p>
            <h2 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors leading-snug">
              {post.title}
            </h2>
            <p className="text-white/50 text-sm line-clamp-3">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
