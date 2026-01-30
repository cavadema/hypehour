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
  metadataBase: new URL('https://www.hypehour.com.br'),
  title: {
    default: "Hypehour — Ferramentas de IA para todos os segmentos",
    template: "%s | Hypehour"
  },
  description: "Hypehour é um agregador de ferramentas de IA para imagens, desenvolvimento, estudos e muito mais.",
  openGraph: {
    title: "Hypehour — Ferramentas de IA para todos os segmentos",
    description: "Hypehour é um agregador de ferramentas de IA para imagens, desenvolvimento, estudos e muito mais.",
    url: 'https://www.hypehour.com.br',
    siteName: 'Hypehour',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Hypehour Logo',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hypehour — Ferramentas de IA para todos os segmentos",
    description: "Hypehour é um agregador de ferramentas de IA para imagens, desenvolvimento, estudos e muito mais.",
    creator: '@hypehourbr',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
            {/* Categorias - Categorized Grid */}
            <div className="mb-12 border-b border-zinc-100 pb-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                {/* Agentes & Assistentes */}
                <div>
                  <h4 className="font-bold mb-3 text-zinc-900 text-sm">Agentes & Assistentes</h4>
                  <ul className="space-y-2 text-xs text-zinc-600">
                    <li><a href="/assistentes-de-ia" className="hover:underline">Assistentes de IA</a></li>
                    <li><a href="/criacao-agentes-ia" className="hover:underline">Criação de Agentes</a></li>
                    <li><a href="/ia-para-jogos" className="hover:underline">IA para Jogos</a></li>
                    <li><a href="/ia-para-vibe-coding" className="hover:underline">Vibe Coding</a></li>
                  </ul>
                </div>

                {/* Áudio & Voz */}
                <div>
                  <h4 className="font-bold mb-3 text-zinc-900 text-sm">Áudio & Voz</h4>
                  <ul className="space-y-2 text-xs text-zinc-600">
                    <li><a href="/gerador-de-voz-ia" className="hover:underline">Gerador de Voz IA</a></li>
                    <li><a href="/ia-para-musica" className="hover:underline">Música</a></li>
                    <li><a href="/transcrever-audio" className="hover:underline">Transcrever Áudio</a></li>
                  </ul>
                </div>

                {/* Automação & Operações */}
                <div>
                  <h4 className="font-bold mb-3 text-zinc-900 text-sm">Automação & Operações</h4>
                  <ul className="space-y-2 text-xs text-zinc-600">
                    <li><Link href="/automacao-ia" className="hover:underline">Automação</Link></li>
                    <li><Link href="/fluxos-workflows-ia" className="hover:underline">Fluxos e Workflows</Link></li>
                    <li><Link href="/planejamento" className="hover:underline">Planejamento e Organização</Link></li>
                  </ul>
                </div>

                {/* Curadoria & Utilitários */}
                <div>
                  <h4 className="font-bold mb-3 text-zinc-900 text-sm">Curadoria & Utilitários</h4>
                  <ul className="space-y-2 text-xs text-zinc-600">
                    <li><a href="/pacotes-de-ferramentas-e-agregadores-ia" className="hover:underline">Agregadores de IA</a></li>
                    <li><a href="/ferramenta-de-deteccao-de-ia" className="hover:underline">Detecção de IA</a></li>
                    <li><a href="/navegadores-de-ia" className="hover:underline">Navegadores de IA</a></li>
                  </ul>
                </div>

                {/* Desenvolvedores */}
                <div>
                  <h4 className="font-bold mb-3 text-zinc-900 text-sm">Desenvolvedores</h4>
                  <ul className="space-y-2 text-xs text-zinc-600">
                    <li><a href="/api-ia-modelos" className="hover:underline">APIs</a></li>
                    <li><a href="/ia-para-desenvolvedores" className="hover:underline">Desenvolvedores</a></li>
                    <li><a href="/modelos-de-llms" className="hover:underline">Modelos de LLMs</a></li>
                    <li><a href="/repositorios-ia-github" className="hover:underline">Repositórios Github</a></li>
                    <li><a href="/ia-web-scraping" className="hover:underline">Scraping</a></li>
                  </ul>
                </div>

                {/* Documentos & Produtividade */}
                <div>
                  <h4 className="font-bold mb-3 text-zinc-900 text-sm">Documentos & Produtividade</h4>
                  <ul className="space-y-2 text-xs text-zinc-600">
                    <li><Link href="/ia-para-criar-apresentacoes" className="hover:underline">Apresentações</Link></li>
                    <li><a href="/ia-para-fazer-ata-reuniao" className="hover:underline">Ata de Reunião</a></li>
                    <li><a href="/ia-para-pdf" className="hover:underline">PDF</a></li>
                    <li><a href="/ia-para-planilhas" className="hover:underline">Planilhas</a></li>
                  </ul>
                </div>

                {/* Educação & Conteúdo */}
                <div>
                  <h4 className="font-bold mb-3 text-zinc-900 text-sm">Educação & Conteúdo</h4>
                  <ul className="space-y-2 text-xs text-zinc-600">
                    <li><a href="/cursos-de-ia" className="hover:underline">Cursos de IA</a></li>
                    <li><a href="/eventos-ia" className="hover:underline">Eventos</a></li>
                    <li><a href="/aprender-ingles-com-ia" className="hover:underline">IA para Inglês</a></li>
                    <li><a href="/newsletters-de-ia" className="hover:underline">Newsletters</a></li>
                  </ul>
                </div>

                {/* Empresas & Negócios */}
                <div>
                  <h4 className="font-bold mb-3 text-zinc-900 text-sm">Empresas & Negócios</h4>
                  <ul className="space-y-2 text-xs text-zinc-600">
                    <li><Link href="/ferramentas-ia-contabilidade" className="hover:underline">Contabilidade</Link></li>
                    <li><Link href="/ia-para-atendimento" className="hover:underline">IA para Atendimento</Link></li>
                    <li><Link href="/ia-para-empresas" className="hover:underline">IA para Empresas</Link></li>
                    <li><Link href="/ferramentas-de-ia-rh" className="hover:underline">IA para RH</Link></li>
                    <li><Link href="/investimentos" className="hover:underline">Investimentos</Link></li>
                  </ul>
                </div>

                {/* Imagens & Vídeos */}
                <div>
                  <h4 className="font-bold mb-3 text-zinc-900 text-sm">Imagens & Vídeos</h4>
                  <ul className="space-y-2 text-xs text-zinc-600">
                    <li><Link href="/ia-para-design-de-interiores" className="hover:underline">Design de Interiores</Link></li>
                    <li><a href="/ia-para-designers" className="hover:underline">Designers</a></li>
                    <li><a href="/ia-para-imagens" className="hover:underline">Imagens</a></li>
                    <li><a href="/ia-para-criar-videos" className="hover:underline">Vídeos</a></li>
                  </ul>
                </div>

                {/* Marketing & Vendas */}
                <div>
                  <h4 className="font-bold mb-3 text-zinc-900 text-sm">Marketing & Vendas</h4>
                  <ul className="space-y-2 text-xs text-zinc-600">
                    <li><a href="/analise-de-dados" className="hover:underline">Análise de dados</a></li>
                    <li><Link href="/ferramentas-de-ia-para-conteudo" className="hover:underline">Conteúdo</Link></li>
                    <li><Link href="/crm-ia" className="hover:underline">CRM</Link></li>
                    <li><Link href="/ia-para-marketing" className="hover:underline">Marketing</Link></li>
                    <li><Link href="/ia-para-vendas" className="hover:underline">Vendas</Link></li>
                  </ul>
                </div>

                {/* Profissões */}
                <div>
                  <h4 className="font-bold mb-3 text-zinc-900 text-sm">Profissões</h4>
                  <ul className="space-y-2 text-xs text-zinc-600">
                    <li><Link href="/inteligencia-artificial-para-advogados" className="hover:underline">Advogados</Link></li>
                    <li><Link href="/ia-para-arquitetura" className="hover:underline">Arquitetura</Link></li>
                    <li><Link href="/ia-para-medicos" className="hover:underline">Médicos</Link></li>
                    <li><Link href="/ia-para-professores" className="hover:underline">Professores</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Row: Branding + Seções + Contato */}
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="max-w-xl">
                <h3 className="font-semibold mb-2 text-sm text-zinc-900">Sobre Nós</h3>
                <p className="text-zinc-600 text-xs">Hypehour é um agregador de ferramentas de IA para facilitar que os usuários encontrem IAs para imagens, desenvolvimento, estudos e muito mais.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
                <div>
                  <h3 className="font-semibold mb-2 text-sm text-zinc-900">Seções</h3>
                  <ul className="space-y-2 text-xs text-zinc-700">

                    <li><a href="/sobre-nos" className="hover:underline">Sobre Nós</a></li>
                    <li><Link href="/termos" className="hover:underline">Termos de Serviço</Link></li>
                    <li><Link href="/privacidade" className="hover:underline">Política de Privacidade</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-sm text-zinc-900">Contato</h3>
                  <ul className="space-y-2 text-xs text-zinc-700">
                    <li><a href="mailto:cavadema@gmail.com" className="hover:underline">cavadema@gmail.com</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-sm text-zinc-900">Redes Sociais</h3>
                  <ul className="space-y-2 text-xs text-zinc-700">
                    <li>
                      <a href="https://x.com/hypehourbr" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        @hypehourbr
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/hypehour/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                        LinkedIn
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
