import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fuatilia — Cargo Tracking",
  description:
    "Fuatilia husaidia makampuni ya usafirishaji Tanzania kufuatilia mizigo, kuzuia mizigo kupotea, na kuwapa wateja status bila kupiga simu.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sw" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body min-h-screen flex flex-col">
        <header className="border-b border-line">
          <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-display font-semibold text-lg text-teal">
              Fuatilia
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/track" className="text-ink hover:text-teal">
                Fuatilia Mzigo
              </Link>
              <Link
                href="/track"
                className="bg-teal text-paper px-4 py-2 rounded-md hover:bg-teal-light transition-colors"
              >
                Anza
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-line">
          <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-muted flex flex-col sm:flex-row justify-between gap-2">
            <span>© {new Date().getFullYear()} Fuatilia. Imetengenezwa Tanzania.</span>
            <span>Cargo Tracking & Operations System</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
