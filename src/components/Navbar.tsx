"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/guides", label: "Guides" },
  { href: "/categories", label: "Categories" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/60 border-b border-white/10">
      <Link href="/" className="text-xl font-bold tracking-widest gradient-text uppercase">
        FLX4 Guide
      </Link>
      <ul className="flex gap-6 text-sm font-medium">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`transition-colors ${
                pathname === href || pathname.startsWith(href + "/")
                  ? "text-purple-400"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
