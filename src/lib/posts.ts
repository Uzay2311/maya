export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  image: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  content: string;
};

export type Category = {
  id: string;
  label: string;
  description: string;
  color: string;
};

export const categories: Category[] = [
  {
    id: "getting-started",
    label: "Getting Started",
    description: "Unbox, connect, and play your first track.",
    color: "bg-emerald-600",
  },
  {
    id: "software-setup",
    label: "Software Setup",
    description: "Configure rekordbox and Serato with the FLX4.",
    color: "bg-blue-600",
  },
  {
    id: "mixing",
    label: "Mixing Techniques",
    description: "Beatmatching, EQ, and smooth transitions.",
    color: "bg-purple-600",
  },
  {
    id: "effects",
    label: "Effects & FX",
    description: "Master the built-in effects and Sound Color FX.",
    color: "bg-pink-600",
  },
  {
    id: "advanced",
    label: "Advanced Tips",
    description: "Loops, cue points, and performance tricks.",
    color: "bg-orange-600",
  },
];

export const guides: Guide[] = [
  {
    slug: "unboxing-and-setup",
    title: "Unboxing & First-Time Setup",
    excerpt: "Everything in the box, what each cable does, and how to get sound out in under 10 minutes.",
    category: categories[0],
    image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&q=80",
    difficulty: "Beginner",
    duration: "8 min read",
    content: `The DDJ-FLX4 comes with the controller, a USB-B cable, and a power adapter. Connect the USB cable to your laptop first — the FLX4 is class-compliant so it will be recognized immediately. Plug your headphones into the front PHONES jack and your speakers into the rear MASTER OUT. Open rekordbox or Serato and the controller will auto-map itself.`,
  },
  {
    slug: "understanding-the-layout",
    title: "Understanding the Controller Layout",
    excerpt: "A full breakdown of every knob, fader, and button on the FLX4 and what it controls.",
    category: categories[0],
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    difficulty: "Beginner",
    duration: "12 min read",
    content: `The FLX4 is divided into two channels (left = Deck 1, right = Deck 2). Each channel has a jog wheel for scratching and pitch bending, a pitch fader for BPM adjustment, transport buttons (play/pause, cue, sync), and 8 performance pads. The center section holds the crossfader, channel faders, EQ knobs (high/mid/low), and the master volume.`,
  },
  {
    slug: "rekordbox-setup",
    title: "Setting Up rekordbox with the FLX4",
    excerpt: "Download, license, and configure rekordbox so the FLX4 is recognized and ready to play.",
    category: categories[1],
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    difficulty: "Beginner",
    duration: "10 min read",
    content: `Download rekordbox from the Pioneer DJ website. The FLX4 unlocks the Performance plan for free — plug it in before launching rekordbox and you'll be prompted to activate. Go to Preferences > Audio > Audio device and select DDJ-FLX4. Set your buffer size to 512 samples to start; lower it later if your CPU can handle it.`,
  },
  {
    slug: "serato-dj-setup",
    title: "Setting Up Serato DJ Lite with the FLX4",
    excerpt: "The FLX4 is fully compatible with Serato DJ Lite out of the box. Here's how to configure it.",
    category: categories[1],
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    difficulty: "Beginner",
    duration: "8 min read",
    content: `Plug in the FLX4 and download Serato DJ Lite — it launches in HID mode automatically. In Setup > Audio, confirm DDJ-FLX4 is selected. Drag tracks from the library to the decks and hit play. Serato DJ Lite is free; upgrading to DJ Pro unlocks stems, FX expansion, and more.`,
  },
  {
    slug: "beatmatching-basics",
    title: "Beatmatching by Ear",
    excerpt: "Learn to match BPMs manually with the pitch fader before ever touching the sync button.",
    category: categories[2],
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    difficulty: "Beginner",
    duration: "15 min read",
    content: `Beatmatching is the foundation of DJing. Load a track on Deck 2, get it playing in your headphones using the cue mix knob, then use the pitch fader to speed it up or slow it down until it matches Deck 1. Use the jog wheel to nudge the phase into alignment. The BPM display helps, but train your ears to hear it.`,
  },
  {
    slug: "eq-and-transitions",
    title: "EQ Mixing & Smooth Transitions",
    excerpt: "How to use the 3-band EQ to blend two tracks cleanly without clashing frequencies.",
    category: categories[2],
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    difficulty: "Intermediate",
    duration: "12 min read",
    content: `The classic technique: cut the low (bass) on the incoming track before opening the crossfader, then swap the bass when the tracks are aligned. This prevents bass clash — two kick drums playing simultaneously sounds muddy. Use the mid and high EQs to carve space for melodic elements. Practice the bass swap until it's muscle memory.`,
  },
  {
    slug: "sound-color-fx",
    title: "Using Sound Color FX",
    excerpt: "The FLX4's Sound Color FX knob adds filter, echo, noise, and more with a single turn.",
    category: categories[3],
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    difficulty: "Intermediate",
    duration: "7 min read",
    content: `The Sound Color FX section sits between the EQs and the channel faders. Select an effect type (Filter, Echo, Noise, Crush) and turn the COLOR knob to apply it. Filter is the most useful — sweep it down to cut highs and create a build, then release it for impact. Use it sparingly; less is more.`,
  },
  {
    slug: "beat-fx-guide",
    title: "Beat FX: Echo, Reverb & Flanger",
    excerpt: "A deep dive into the Beat FX section — what each effect does and when to use it.",
    category: categories[3],
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    difficulty: "Intermediate",
    duration: "10 min read",
    content: `Beat FX are tempo-synced effects. Echo creates delay repeats in time with the BPM. Reverb adds space and depth. Flanger creates a sweeping jet-plane sound. Select the effect with the BEAT FX selector, set the beat division (1/2, 1, 2, 4 beats), and toggle it with the ON button. Hit it on the last beat before a breakdown for dramatic impact.`,
  },
  {
    slug: "hot-cues",
    title: "Setting & Using Hot Cues",
    excerpt: "Hot cues let you jump to any point in a track instantly. Here's how to set them up strategically.",
    category: categories[4],
    image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&q=80",
    difficulty: "Intermediate",
    duration: "9 min read",
    content: `Press a pad in Hot Cue mode while a track is playing to set a cue at that point — it lights up. Press it again to jump there instantly. Best practice: set cue 1 at the intro, cue 2 at the first drop, cue 3 at a breakdown, cue 4 at the outro. This lets you navigate quickly during a live set without hunting through the track.`,
  },
  {
    slug: "loop-techniques",
    title: "Loop Techniques for DJs",
    excerpt: "Auto loops, manual loops, and how to use the loop roll pads to build tension.",
    category: categories[4],
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    difficulty: "Advanced",
    duration: "14 min read",
    content: `The FLX4's performance pads in Loop mode trigger auto loops of different lengths (1/4, 1/2, 1, 2, 4, 8, 16, 32 beats). Hold a pad for a momentary loop roll — great for creating stutters and fills. For manual loops, use the IN and OUT buttons to set loop points on the fly. Pro tip: loop the last 4 bars of a track to extend it while you're not ready to mix out.`,
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}

export function getGuidesByCategory(categoryId: string) {
  return guides.filter((g) => g.category.id === categoryId);
}
