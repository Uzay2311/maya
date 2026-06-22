export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: "vlog" | "blog";
  image: string;
  videoUrl?: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "berlin-closing-set",
    title: "My Berlin Closing Set Was Insane",
    date: "2026-06-18",
    excerpt: "Four hours, sunrise, and a crowd that refused to leave. Here's how the night unfolded.",
    category: "vlog",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    content: `It started at 4am. The club was still packed...`,
  },
  {
    slug: "building-my-track-selection",
    title: "How I Build a 6-Hour Track Selection",
    date: "2026-06-10",
    excerpt: "My process for curating a journey — from warm-up to peak time to comedown.",
    category: "blog",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    content: `Track selection is the most underrated skill in DJing...`,
  },
  {
    slug: "amsterdam-dance-event-recap",
    title: "ADE 2025 — My Highlights",
    date: "2026-05-28",
    excerpt: "Five days, thirty parties, and a few sets that changed how I think about music.",
    category: "vlog",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    content: `Amsterdam in October is something else entirely...`,
  },
  {
    slug: "gear-setup-2026",
    title: "My Current Gear Setup (2026)",
    date: "2026-05-15",
    excerpt: "CDJ-3000s, a mixer I swear by, and the one piece of gear I can't live without.",
    category: "blog",
    image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&q=80",
    content: `People always ask what I'm running in the booth...`,
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
