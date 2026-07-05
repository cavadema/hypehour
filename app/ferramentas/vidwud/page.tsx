import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Vidwud - Conversor de Imagem para Vídeo com Inteligência Artificial",
  description: "Conheça o Vidwud: ferramenta de IA que transforma imagens estáticas e textos em vídeos dinâmicos com efeitos de movimento e transformações de estilo. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/vidwud" },
  openGraph: {
    title: "Vidwud - Conversor de Imagem para Vídeo com Inteligência Artificial",
    description: "Ferramenta de IA que transforma imagens estáticas e textos em vídeos dinâmicos com efeitos de movimento.",
    url: "https://www.hypehour.com.br/ferramentas/vidwud",
    siteName: "Hypehour",
    images: [{ url: "https://www.hypehour.com.br/logo.png" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidwud - Conversor de Imagem para Vídeo com Inteligência Artificial",
    description: "Transforma imagens estáticas e textos em vídeos dinâmicos com efeitos de movimento e IA.",
    images: ["https://www.hypehour.com.br/logo.png"],
    creator: "@hypehourbr",
  },
};

export default function VidwudPage() {
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
        "@id": "https://www.hypehour.com.br/ferramentas/vidwud#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/vidwud",
        "name": "Vidwud - Conversor de Imagem para Vídeo com Inteligência Artificial",
        "description": "Conheça o Vidwud: ferramenta de IA que transforma imagens estáticas e textos em vídeos dinâmicos com efeitos de movimento e transformações de estilo. Veja vantagens, desvantagens e se é ideal para você.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/vidwud#breadcrumb" },
        "datePublished": "2025-11-19",
        "dateModified": "2026-07-04",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/vidwud#software" },
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/vidwud#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hypehour.com.br/" },
          { "@type": "ListItem", position: 2, name: "IA para Criar Vídeos", item: "https://www.hypehour.com.br/ia-para-criar-videos" },
          { "@type": "ListItem", position: 3, name: "Vidwud", item: "https://www.hypehour.com.br/ferramentas/vidwud" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/vidwud#software",
        name: "Vidwud",
        description: "Ferramenta de IA que converte imagens estáticas e descrições em texto em vídeos dinâmicos com efeitos de movimento, transformações de estilo e múltiplas opções de personalização.",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Web",
        url: "https://www.vidwud.com",
        mainEntityOfPage: "https://www.hypehour.com.br/ferramentas/vidwud",
        "image": "https://www.hypehour.com.br/logo.png",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Plano gratuito disponível" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "1109",
        },
        creator: { "@type": "Organization", name: "Vidwud" },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <nav className="flex items-center gap-2 text-zinc-700 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="text-zinc-400">/</span>
          <Link href="/ia-para-criar-videos" className="hover:text-black transition">IA para Criar Vídeos</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Vidwud</span>
        </nav>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">V</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Vidwud</h1>
            <p className="text-lg text-zinc-700">Transforme imagens e textos em vídeos dinâmicos com IA</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O Vidwud é uma ferramenta de inteligência artificial que converte imagens estáticas ou descrições em texto em vídeos dinâmicos. Com efeitos de câmera, movimento e transformações de estilo, o Vidwud anima fotos e cria conteúdo de vídeo sem necessidade de experiência em edição.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Ideal para criadores de conteúdo, lojistas de e-commerce e profissionais de marketing que precisam de vídeos rápidos e dinâmicos para redes sociais sem investir em software de edição complexo.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Vidwud?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Vidwud é uma plataforma de geração de vídeo com IA que permite dois fluxos principais: imagem para vídeo (image-to-video) e texto para vídeo (text-to-video). No modo imagem para vídeo, você carrega uma foto e a IA adiciona movimento natural — como câmera deslizando, zoom ou elementos animados. No modo texto para vídeo, descreve o que quer ver e a IA cria o clipe do zero.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            O processo é simples o suficiente para qualquer pessoa usar, sem linha de aprendizado longa, tornando a criação de vídeos acessível mesmo para quem nunca editou um.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[
              ["1", "Escolha o modo", "Selecione entre imagem para vídeo (carregue uma foto) ou texto para vídeo (descreva o clipe desejado)."],
              ["2", "Configure o vídeo", "Defina duração, estilo de movimento (zoom, pan, rotação), transformação de estilo e outros parâmetros."],
              ["3", "IA gera o vídeo", "Em segundos a minutos, a IA processa e cria o clipe com os efeitos e animações configurados."],
              ["4", "Baixe e publique", "Exporte o vídeo em MP4 e publique diretamente nas suas redes sociais ou use em outros projetos."],
            ].map(([num, title, desc]) => (
              <div key={num} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">{num}</div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
                  <p className="text-zinc-700">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Animar fotos de produtos para e-commerce", "Criar Reels e TikToks com IA", "Vídeos para YouTube Shorts", "Conteúdo dinâmico para Stories", "Transformar ilustrações em vídeo", "Criar vídeos de apresentação", "Animações para apresentações", "Vídeos para anúncios digitais", "Conteúdo de marketing visual", "Transformações de estilo artístico", "Vídeos educativos animados", "Clipes para eventos e datas"].map((item, i) => (
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition">
                <p className="text-zinc-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[
              ["Image-to-Video (imagem para vídeo)", "Transforma qualquer foto estática em um vídeo com movimento natural usando efeitos de câmera como zoom, pan, rotação e parallax."],
              ["Text-to-Video (texto para vídeo)", "Gera vídeos completos a partir de descrições em texto, criando cenas do zero com a IA."],
              ["Transformação de estilo (Style Transfer)", "Converte o estilo visual de uma imagem ou vídeo para anime, pintura, aquarela, pixel art e outros estilos artísticos."],
              ["Controle de efeitos de câmera", "Permite escolher o tipo de movimento da câmera para criar a sensação certa de profundidade e dinamismo no vídeo."],
              ["Exportação em MP4", "Entrega os vídeos em formato MP4 pronto para publicação em qualquer plataforma de redes sociais."],
              ["Interface sem necessidade de edição", "Processo em poucos cliques, sem curva de aprendizado — qualquer pessoa consegue criar vídeos profissionais."],
            ].map(([title, desc]) => (
              <div key={title} className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-black mb-3">{title}</h3>
                <p className="text-zinc-700">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Sem experiência necessária — qualquer pessoa cria vídeos profissionais em minutos",
              "Dual mode — funciona tanto com imagem quanto com descrição em texto",
              "Transformação de estilo — converte qualquer visual em estilo artístico diferente",
              "Ideal para redes sociais — vídeos curtos e dinâmicos prontos para Reels, TikTok e Shorts",
              "Plano gratuito disponível — teste antes de assinar qualquer plano",
              "Processamento rápido — vídeos ficam prontos em segundos a poucos minutos",
            ].map((v, i) => (
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <span className="text-black font-bold text-lg flex-shrink-0">✓</span>
                <p className="text-zinc-700">{v}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {[
              "Vídeos curtos — geração limitada a clipes de poucos segundos nos planos básicos",
              "Controle criativo limitado — não tem o nível de controle de ferramentas profissionais como Runway",
              "Créditos limitados no plano gratuito — uso frequente exige assinatura paga",
              "Qualidade inferior a ferramentas premium — para produção profissional, Sora ou Kling AI têm vantagem",
              "Resultados imprevisíveis — especialmente no modo text-to-video, pode não sair exatamente como esperado",
            ].map((d, i) => (
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                <span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span>
                <p className="text-zinc-700">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Vidwud?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Criadores de conteúdo que precisam de vídeos rápidos", "Lojistas que querem animar fotos de produtos", "Social media managers com demanda alta de conteúdo", "Iniciantes que nunca editaram vídeo", "Profissionais de marketing que produzem ads em escala"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Produção cinematográfica ou comercial premium", "Quem precisa de vídeos longos com narração e edição completa", "Projetos que exigem controle total de cada frame", "Quem precisa de avatares humanos realistas falando"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Transforme suas fotos em vídeos com um clique</h2>
          <p className="text-lg mb-6 text-zinc-300">Teste o Vidwud gratuitamente e crie seu primeiro vídeo com IA agora</p>
          <a href="https://www.vidwud.com/image-to-video-ai.html" target="_blank" rel="noopener noreferrer nofollow" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">
            Acessar Vidwud →
          </a>
        </section>

        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Vidwud é uma excelente porta de entrada para quem quer criar vídeos com IA sem experiência técnica. Para conteúdo de redes sociais, animação de produtos e vídeos curtos, entrega resultados impressionantes com poucos cliques.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Para produção de conteúdo em escala ou quem quer dar vida a fotos paradas com movimento natural, é uma das ferramentas mais acessíveis e eficientes disponíveis hoje.
          </p>
        </section>

        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
