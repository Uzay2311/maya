import { posts, getPost } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="pt-20">
      {/* Cover */}
      <div className="relative h-[50vh] w-full">
        <Image src={post.image} alt={post.title} fill className="object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
      </div>

      <article className="max-w-3xl mx-auto px-6 -mt-20 relative z-10 pb-24">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
            post.category === "vlog" ? "bg-pink-600" : "bg-purple-600"
          }`}
        >
          {post.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
          {post.title}
        </h1>
        <p className="text-white/40 text-sm mb-10">{post.date}</p>

        {post.videoUrl && (
          <div className="aspect-video mb-10 rounded-2xl overflow-hidden">
            <iframe
              src={post.videoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        <p className="text-white/70 text-lg leading-relaxed mb-6">{post.excerpt}</p>
        <p className="text-white/50 leading-relaxed">{post.content}</p>

        <div className="mt-16 pt-8 border-t border-white/10">
          <Link href="/blog" className="text-purple-400 hover:text-purple-300 font-semibold text-sm">
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
