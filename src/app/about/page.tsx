import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-28 max-w-5xl mx-auto px-6 pb-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <div className="relative">
          <div className="relative h-[500px] rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80"
              alt="Maya"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl overflow-hidden border-4 border-[#0a0a0a]">
            <Image
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&q=80"
              alt="In the booth"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bio */}
        <div>
          <p className="text-purple-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            About
          </p>
          <h1 className="text-5xl font-black tracking-tight mb-6 gradient-text">Maya</h1>
          <div className="space-y-4 text-white/60 leading-relaxed">
            <p>
              I&apos;ve been behind the decks for over a decade — starting in underground clubs,
              playing warehouses, and eventually finding myself at festivals and late-night venues
              across Europe.
            </p>
            <p>
              This blog is where I document it all. The sets that went sideways and the ones that
              felt perfect. The records I can&apos;t stop playing. The moments that reminded me why I
              started.
            </p>
            <p>
              My sound sits somewhere between deep, hypnotic techno and soulful house — always
              built around a journey rather than a style.
            </p>
          </div>

          <div className="mt-10 flex gap-4 flex-wrap">
            <div className="text-center">
              <p className="text-3xl font-black gradient-text">10+</p>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-1">Years DJing</p>
            </div>
            <div className="w-px bg-white/10 mx-4" />
            <div className="text-center">
              <p className="text-3xl font-black gradient-text">200+</p>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-1">Shows</p>
            </div>
            <div className="w-px bg-white/10 mx-4" />
            <div className="text-center">
              <p className="text-3xl font-black gradient-text">30+</p>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-1">Cities</p>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/blog"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-500 rounded-full font-semibold transition-colors inline-block"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
