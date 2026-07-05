import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Pixverse - Gerador de Vídeos com IA em Múltiplos Estilos",
  description: "Conheça o Pixverse: plataforma de geração de vídeos com IA que transforma texto e imagens em vídeos criativos com estilos realistas, anime e cinematográfico. Veja vantagens e para quem é indicado.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/pixverse",
  },
  openGraph: {
    title: "Pixverse - Gerador de Vídeos com IA em Múltiplos Estilos",
    description: "Conheça o Pixverse: plataforma de geração de vídeos com IA que transforma texto e imagens em vídeos criativos com estilos realistas, anime e cinematográfico.",
    url: "https://www.hypehour.com.br/ferramentas/pixverse",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pixverse - Gerador de Vídeos com IA em Múltiplos Estilos",
    description: "Gere vídeos criativos com IA a partir de texto ou imagem em estilos realista, anime, cartoon e cinematográfico.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function PixversePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.hypehour.com.br/#organization",
        "name": "Hypehour",
        "url": "https://www.hypehour.com.br",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.hypehour.com.br/#website",
        "name": "Hypehour",
        "url": "https://www.hypehour.com.br",
        "publisher": { "@id": "https://www.hypehour.com.br/#organization" },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.hypehour.com.br/ferramentas/pixverse#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/pixverse",
        "name": "Pixverse - Gerador de Vídeos com IA em Múltiplos Estilos",
        "description": "Conheça o Pixverse: plataforma de geração de vídeos com IA que transforma texto e imagens em vídeos criativos com estilos realistas, anime e cinematográfico. Veja vantagens e para quem é indicado.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/pixverse#breadcrumb" },
        "datePublished": "2025-11-19",
        "dateModified": "2026-07-04",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/pixverse#software" },
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/pixverse#breadcrumb",
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
            "name": "Pixverse",
            "item": "https://www.hypehour.com.br/ferramentas/pixverse"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/pixverse#software",
        "name": "Pixverse",
        "description": "Plataforma de geração de vídeos com IA que transforma texto e imagens em vídeos criativos com múltiplos estilos visuais.",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Web",
        "url": "https://pixverse.ai/pt",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/pixverse#webpage" },
        "image": "https://www.hypehour.com.br/logo.png",
        "featureList": ["Escolha texto ou imagem","Selecione o estilo visual","Gere o vídeo","Baixe e publique","Múltiplos estilos artísticos","Text-to-video e image-to-video"],
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Plano gratuito disponível" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "1336",
        },
        "creator": {
          "@type": "Organization",
          "name": "Pixverse"
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
          <span className="text-black font-medium">Pixverse</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            P
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Pixverse</h1>
            <p className="text-lg text-zinc-700">Gere vídeos criativos com IA em múltiplos estilos</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O Pixverse é uma plataforma de geração de vídeos com inteligência artificial que se destaca pela variedade de estilos visuais disponíveis. A ferramenta transforma prompts de texto e imagens em vídeos criativos nos estilos realista, anime, cartoon, arte digital e cinematográfico, com movimentos dinâmicos e alta qualidade visual.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Ideal para criadores de conteúdo, artistas digitais e profissionais de marketing que precisam de vídeos com estética variada e personalidade visual distinta para redes sociais, campanhas e projetos criativos.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Pixverse?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Pixverse é uma plataforma de IA generativa de vídeos que combina modelos avançados de geração visual com uma interface acessível. A ferramenta permite criar vídeos a partir de texto (text-to-video) ou animar imagens existentes (image-to-video), com suporte a diferentes estilos artísticos que vão do realismo fotográfico ao anime.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            A plataforma é especialmente popular entre criadores de conteúdo que buscam vídeos criativos e visualmente distintos para TikTok, Instagram Reels e YouTube Shorts, com uma curva de aprendizado baixa e resultados consistentes.
          </p>
        </section>

        {/* Como funciona */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">1</div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Escolha texto ou imagem</h3>
                <p className="text-zinc-700">Descreva a cena em texto ou faça upload de uma imagem que deseja animar como ponto de partida do vídeo.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">2</div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Selecione o estilo visual</h3>
                <p className="text-zinc-700">Escolha entre os estilos disponíveis: realista, anime, cartoon, cinematográfico ou arte digital para definir a identidade visual do vídeo.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">3</div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Gere o vídeo</h3>
                <p className="text-zinc-700">A IA processa sua solicitação e gera um vídeo com os movimentos, estilo e elementos descritos em segundos a minutos.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">4</div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Baixe e publique</h3>
                <p className="text-zinc-700">Faça o download do vídeo gerado e utilize diretamente nas suas redes sociais, projetos ou campanhas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Vídeos para TikTok e Instagram Reels",
              "Animação de personagens no estilo anime",
              "Criação de clipes musicais com IA",
              "Conteúdo criativo para YouTube",
              "Vídeos de marketing digital",
              "Animações a partir de fotos",
              "Cenas cinematográficas com IA",
              "Vídeos em estilo cartoon",
              "Arte em movimento para redes sociais",
              "Prototipação visual de ideias",
              "Teasers e trailers criativos",
              "Conteúdo para apresentações"
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
              <h3 className="text-xl font-semibold text-black mb-3">Múltiplos estilos artísticos</h3>
              <p className="text-zinc-700">Gere vídeos em estilos realista, anime, cartoon, cinematográfico e arte digital — cada um com características visuais distintas e consistentes.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Text-to-video e image-to-video</h3>
              <p className="text-zinc-700">Crie vídeos a partir de descrições textuais ou anime imagens estáticas com movimentos naturais e dinâmicos.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Interface em português</h3>
              <p className="text-zinc-700">A plataforma está disponível em português, facilitando o uso para criadores brasileiros que querem explorar IA generativa de vídeos.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Movimentos e dinâmica visual</h3>
              <p className="text-zinc-700">Os vídeos gerados contam com movimentos de câmera, transições e dinâmicas visuais que tornam o conteúdo mais envolvente e profissional.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Acesso via web e app</h3>
              <p className="text-zinc-700">Disponível no navegador e com aplicativo móvel para criação de vídeos diretamente do celular.</p>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Variedade de estilos artísticos — do realismo ao anime em um único lugar",
              "Interface em português — acessível para o público brasileiro",
              "Plano gratuito disponível — comece a criar sem custo inicial",
              "Fácil de usar — sem necessidade de conhecimento técnico avançado",
              "Disponível em web e mobile — crie vídeos de qualquer dispositivo",
              "Boa qualidade para redes sociais — vídeos prontos para publicar"
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
              "Vídeos curtos — focado em clipes de poucos segundos, não em vídeos longos",
              "Créditos limitados no plano gratuito — uso intenso requer upgrade",
              "Qualidade variável — resultados dependem da qualidade e especificidade do prompt",
              "Menos controle avançado — usuários experientes podem sentir falta de mais parâmetros",
              "Artefatos ocasionais — pode gerar imperfeições que exigem nova geração"
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Pixverse?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {[
                  "Criadores de conteúdo para redes sociais",
                  "Artistas digitais e ilustradores",
                  "Fãs de anime e arte digital",
                  "Profissionais de marketing digital",
                  "Iniciantes em IA generativa de vídeos"
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
                  "Produção de vídeos longos",
                  "Projetos que exigem controle frame-by-frame",
                  "Produtoras profissionais com requisitos técnicos rígidos",
                  "Quem precisa de 100% de previsibilidade no resultado",
                  "Vídeos corporativos com identidade visual restrita"
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
          <h2 className="text-3xl font-bold mb-4">Crie vídeos criativos com IA agora</h2>
          <p className="text-lg mb-6 text-zinc-300">Experimente o Pixverse gratuitamente e gere vídeos no estilo que quiser</p>
          <a
            href="https://pixverse.ai/pt"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Acessar Pixverse →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Pixverse é uma das melhores opções para quem quer explorar diferentes estilos artísticos na criação de vídeos com IA. A combinação de text-to-video, image-to-video e estilos variados como anime e realista torna a plataforma versátil para criadores com diferentes estéticas.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Para criadores de conteúdo que buscam se diferenciar nas redes sociais com vídeos visualmente únicos e produzidos rapidamente, o Pixverse é uma ferramenta que vale experimentar — especialmente pelo plano gratuito disponível.
          </p>
        </section>

        <FAQSection />


        {/* Ferramentas Similares */}

        <SimilarTools />
      </div>
    </main>
  );
}
