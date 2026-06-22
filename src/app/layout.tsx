import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ClubBackground from "@/components/ClubBackground";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FLX4 Guide — DDJ-FLX4 DJ Controller Tutorials",
  description: "Step-by-step guides and tutorials for the Pioneer DDJ-FLX4 DJ controller.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white antialiased">
        <ClubBackground />
        <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-white/10 py-8 text-center text-sm text-white/40">
          © {new Date().getFullYear()} FLX4 Guide. Not affiliated with Pioneer DJ.
        </footer>
        </div>
      </body>
    </html>
  );
}
