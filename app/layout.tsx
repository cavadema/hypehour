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
          <div className="max-w-6xl mx-auto py-12 px-6">
            {/* Top Row: Categorias Horizontal */}
            <div className="mb-6 border-b border-zinc-100 pb-6">
              <h3 className="font-semibold mb-4">Categorias</h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-700">
                <li><a href="/ia-para-imagens" className="hover:underline">IA para imagens</a></li>
                <li><a href="/ia-para-criar-videos" className="hover:underline">IA para Vídeos</a></li>
                <li><a href="/ia-para-musica" className="hover:underline">IA para Música</a></li>
                <li><a href="/pacotes-de-ferramentas-e-agregadores-ia" className="hover:underline">Agregadores de IA</a></li>
                <li><a href="/ia-para-vibe-coding" className="hover:underline">Vibe Coding</a></li>
                <li><a href="/ia-para-desenvolvedores" className="hover:underline">Desenvolvedores</a></li>
                <li><Link href="/ferramentas-de-ia-para-conteudo" className="hover:text-blue-400 transition-colors">IA para Conteúdo</Link></li>
                <li><Link href="/ia-para-criar-apresentacoes" className="hover:text-blue-400 transition-colors">IA para Apresentações</Link></li>
                <li><Link href="/ia-para-marketing" className="hover:text-blue-400 transition-colors">IA para Marketing</Link></li>
                <li><Link href="/ferramentas-de-ia-rh" className="hover:text-blue-400 transition-colors">IA para RH</Link></li>
                <li><Link href="/ferramentas-ia-contabilidade" className="hover:text-blue-400 transition-colors">IA para Contabilidade</Link></li>
                <li><Link href="/inteligencia-artificial-para-advogados" className="hover:text-blue-400 transition-colors">IA para Advogados</Link></li>
                <li><Link href="/ia-para-professores" className="hover:text-blue-400 transition-colors">IA para professores</Link></li>
                <li><a href="/modelos-de-llms" className="hover:underline">Modelos de LLMs</a></li>
                <li><a href="/navegadores-de-ia" className="hover:underline">Navegadores de IA</a></li>
                <li><a href="/ferramenta-de-deteccao-de-ia" className="hover:underline">Detecção de IA</a></li>
                <li><a href="/newsletters-de-ia" className="hover:underline">Newsletters</a></li>
              </ul>
            </div>

            {/* Bottom Row: Branding + Seções + Contato */}
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="max-w-xl">
                <h3 className="font-semibold mb-2">Sobre Nós</h3>
                <p className="text-zinc-600">Hypehour é um agregador de ferramentas de IA para facilitar que os usuários encontrem IAs para imagens, desenvolvimento, estudos e muito mais.</p>
              </div>

              <div className="flex gap-12">
                <div>
                  <h3 className="font-semibold mb-2">Seções</h3>
                  <ul className="space-y-2 text-sm text-zinc-700">

                    <li><a href="/sobre-nos" className="hover:underline">Sobre Nós</a></li>
                    <li><Link href="/termos" className="hover:underline">Termos de Serviço</Link></li>
                    <li><Link href="/privacidade" className="hover:underline">Política de Privacidade</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Contato</h3>
                  <ul className="space-y-2 text-sm text-zinc-700">
                    <li><a href="mailto:cavadema@gmail.com" className="hover:underline">cavadema@gmail.com</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Redes Sociais</h3>
                  <ul className="space-y-2 text-sm text-zinc-700">
                    <li>
                      <a href="https://x.com/hypehourbr" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        @hypehourbr
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
