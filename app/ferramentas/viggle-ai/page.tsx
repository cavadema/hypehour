import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Viggle AI - Anime Personagens com Movimentos Realistas",
  description: "Conheça o Viggle AI: ferramenta de IA que anima personagens com movimentos realistas a partir de vídeos de referência. Crie vídeos de dança, motion e personagens animados. Veja vantagens e para quem é indicado.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/viggle-ai",
  },
  openGraph: {
    title: "Viggle AI - Anime Personagens com Movimentos Realistas",
    description: "Conheça o Viggle AI: ferramenta de IA que anima personagens com movimentos realistas a partir de vídeos de referência. Crie vídeos de dança e motion com IA.",
    url: "https://www.hypehour.com.br/ferramentas/viggle-ai",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Viggle AI - Anime Personagens com Movimentos Realistas",
    description: "Anime personagens com movimentos realistas usando IA — perfeito para vídeos de dança, motion e conteúdo viral.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function ViggleAIPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/viggle-ai#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.hypehour.com.br/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "IA para Criar Vídeos",
            "item": "https://www.hypehour.com.br/ia-para-criar-videos"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Viggle AI",
            "item": "https://www.hypehour.com.br/ferramentas/viggle-ai"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/viggle-ai#software",
        "name": "Viggle AI",
        "description": "Plataforma de IA especializada em animar personagens com movimentos realistas usando vídeos de referência.",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Web",
        "url": "https://viggle.ai/",
        "mainEntityOfPage": "https://www.hypehour.com.br/ferramentas/viggle-ai",
        "creator": {
          "@type": "Organization",
          "name": "Viggle AI"
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-zinc-700 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="text-zinc-400">/</span>
          <Link href="/ia-para-criar-videos" className="hover:text-black transition">IA para Criar Vídeos</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Viggle AI</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            V
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Viggle AI</h1>
            <p className="text-lg text-zinc-700">Anime qualquer personagem com movimentos reais usando IA</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O Viggle AI é uma plataforma de geração de vídeos com inteligência artificial especializada em animação de personagens com movimentos realistas. A tecnologia permite que qualquer personagem — foto real, avatar, mascote ou personagem de ficção — execute os movimentos de um vídeo de referência com alta fidelidade e física convincente.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Ideal para criadores de conteúdo viral, artistas digitais e profissionais de marketing que querem criar vídeos de personagens dançando, gesticulando ou realizando qualquer tipo de movimento de forma rápida e impressionante.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Viggle AI?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Viggle AI é uma ferramenta de animação de personagens baseada em inteligência artificial que usa vídeos de referência para transferir movimentos a qualquer personagem. O sistema analisa a movimentação do corpo no vídeo de referência e aplica esse movimento ao personagem escolhido, mantendo suas características visuais originais.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            A ferramenta se tornou popular especialmente para criação de vídeos de dança virais no TikTok, onde criadores animam personagens fictícios realizando coreografias modernas com resultado impressionante e convincente.
          </p>
        </section>

        {/* Como funciona */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">1</div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Envie a imagem do personagem</h3>
                <p className="text-zinc-700">Faça upload de uma foto ou imagem do personagem que deseja animar — pode ser uma foto real, ilustração, avatar ou personagem fictício.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">2</div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Forneça o vídeo de referência</h3>
                <p className="text-zinc-700">Envie um vídeo com os movimentos que deseja aplicar ao personagem — pode ser uma coreografia, gestos ou qualquer movimento humano.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">3</div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">IA processa a animação</h3>
                <p className="text-zinc-700">O Viggle AI analisa os movimentos do vídeo de referência e os aplica ao personagem, gerando a animação com física e consistência visual realistas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">4</div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Baixe e compartilhe</h3>
                <p className="text-zinc-700">Exporte o vídeo animado e compartilhe nas redes sociais, projetos ou campanhas digitais.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Vídeos de dança com personagens de IA",
              "Animação de mascotes e avatares",
              "Conteúdo viral para TikTok",
              "Motion de personagens fictícios",
              "Vídeos criativos para Instagram",
              "Animação de fotos e retratos",
              "Conteúdo de marketing com personagens",
              "Vídeos de apresentação com avatares",
              "Animação de personagens de anime",
              "Coreografias com IA",
              "Conteúdo interativo com mascotes",
              "Prototipação de animações"
            ].map((item, index) => (
              <div key={index} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition">
                <p className="text-zinc-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Principais funcionalidades */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Transferência de movimento (motion transfer)</h3>
              <p className="text-zinc-700">Aplica os movimentos exatos de um vídeo de referência a qualquer personagem com alta fidelidade, preservando a dinâmica e física do movimento original.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Consistência de personagem</h3>
              <p className="text-zinc-700">Mantém as características visuais do personagem ao longo de toda a animação, sem distorções ou inconsistências no estilo visual.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Suporte a múltiplos tipos de personagem</h3>
              <p className="text-zinc-700">Funciona com fotos reais, ilustrações, avatares, mascotes, personagens de anime, cartoon e qualquer imagem com figura humana ou humanóide.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Acesso via Discord e web</h3>
              <p className="text-zinc-700">Disponível via bot no Discord para uso gratuito e pela plataforma web com planos avançados e mais recursos.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Geração rápida de animações</h3>
              <p className="text-zinc-700">Processa as animações em minutos, permitindo criar e iterar rapidamente em diferentes vídeos e movimentos.</p>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Animação realista de personagens — movimentos convincentes com qualquer personagem",
              "Gratuito para começar via Discord — acesso sem custo para testar a ferramenta",
              "Preserva identidade do personagem — sem distorção da aparência original",
              "Resultados virais — criações com alto potencial de engajamento nas redes sociais",
              "Funciona com diferentes tipos de personagem — real, cartoon, anime e mascote",
              "Interface simples — não exige conhecimento em animação ou motion graphics"
            ].map((advantage, index) => (
              <div key={index} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <span className="text-black font-bold text-lg flex-shrink-0">✓</span>
                <p className="text-zinc-700">{advantage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Desvantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {[
              "Vídeos curtos — focado em clipes de animação de poucos segundos",
              "Qualidade dependente da referência — movimentos mal capturados geram resultados ruins",
              "Interface em inglês — pode ser uma barreira para alguns usuários",
              "Créditos limitados no plano gratuito — uso intenso requer upgrade",
              "Artefatos ocasionais — pode gerar inconsistências visuais em movimentos muito complexos"
            ].map((disadvantage, index) => (
              <div key={index} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                <span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span>
                <p className="text-zinc-700">{disadvantage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Para quem é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Viggle AI?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {[
                  "Criadores de conteúdo viral para TikTok",
                  "Artistas digitais e animadores",
                  "Marcas com mascotes e personagens",
                  "Fãs de anime e cultura pop",
                  "Profissionais de marketing criativo"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-black">→</span>
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {[
                  "Produção de animações longas e complexas",
                  "Projetos que exigem controle frame-by-frame",
                  "Animações com múltiplos personagens simultâneos",
                  "Quem precisa de resultados 100% previsíveis",
                  "Produção audiovisual profissional de grande escala"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-zinc-700">✕</span>
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Anime seu personagem agora</h2>
          <p className="text-lg mb-6 text-zinc-300">Experimente o Viggle AI e crie animações incríveis com qualquer personagem</p>
          <a
            href="https://viggle.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Acessar Viggle AI →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Viggle AI ocupa uma posição única no ecossistema de ferramentas de IA para vídeo: nenhuma outra ferramenta faz animação de personagens com movimentos de referência de forma tão acessível e com resultados tão convincentes. Para criadores que querem dar vida a personagens com coreografias e movimentos específicos, é a escolha mais natural.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            O potencial para criar conteúdo viral é real — basta uma boa referência de movimento e um personagem interessante para gerar resultados que surpreendem e engajam.
          </p>
        </section>

        <FAQSection />


        {/* Ferramentas Similares */}

        <SimilarTools />
      </div>
    </main>
  );
}
