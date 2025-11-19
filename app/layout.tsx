import type { Metadata } from "next";
import Link from "next/link";
import Header from "./components/Header";
import Script from "next/script";
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
  title: "Hypehour — Ferramentas de IA para todos os segmentos",
  description: "Hypehour é um agregador de ferramentas de IA para imagens, desenvolvimento, estudos e muito mais.",
  alternates: {
    canonical: 'https://www.hypehour.com.br',
  },
  verification: {
    google: 'm91yNxSvF4XA96s4Kzs05dWAhnpIezdt0y1rs5Ynjac',
  },
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
        <Header />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NYLGH2XQES"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date());

          gtag('config', 'G-NYLGH2XQES');`}
        </Script>
        <main className="apify-main">{children}</main>

        <footer className="site-footer w-full bg-white border-t border-zinc-200 mt-8">
          <div className="max-w-6xl mx-auto py-12 px-6 flex flex-col md:flex-row md:justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="text-xl font-bold mb-2">Hypehour</h3>
              <p className="text-zinc-600">Hypehour é um agregador de ferramentas de IA para facilitar que os usuários encontrem IAs para imagens, desenvolvimento, estudos e muito mais.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Categorias</h4>
                <ul className="space-y-2 text-sm text-zinc-700">
                  <li><a href="/ia-para-imagens" className="hover:underline">IA para imagens</a></li>
                  <li><a href="/ia-para-vibe-coding" className="hover:underline">Vibe Coding</a></li>
                  <li><a href="/ia-para-desenvolvedores" className="hover:underline">Desenvolvedores</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Seções</h4>
                <ul className="space-y-2 text-sm text-zinc-700">
                  <li><a href="#ultimas-ias" className="hover:underline">Últimas IAs</a></li>
                  <li><a href="#depoimentos" className="hover:underline">Depoimentos</a></li>
                  <li><a href="/sobre-nos" className="hover:underline">Sobre Nós</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Contato</h4>
                <ul className="space-y-2 text-sm text-zinc-700">
                  <li>—</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
