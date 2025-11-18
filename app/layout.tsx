import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ferramentas de IA para todos os segmentos - SearchIA",
  description: "Encontre todas as ferramentas de IA para imagens, textos, marketing, programação e muito mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="apify-header flex items-center justify-between px-10 py-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-2xl font-extrabold tracking-tight text-blue-700 hover:underline">SearchIA</Link>
          </div>
          <nav>
            <ul className="flex gap-8 text-zinc-700 font-medium">
              <li><a href="#ultimas-ias" className="hover:text-blue-600 transition-colors">Últimas IAs</a></li>
              <li><a href="#depoimentos" className="hover:text-blue-600 transition-colors">Depoimentos</a></li>
            </ul>
          </nav>
        </header>
        <main className="apify-main">{children}</main>
      </body>
    </html>
  );
}
