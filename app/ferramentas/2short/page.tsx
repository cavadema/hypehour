import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "2short.ai - Transforme Vídeos Longos em Shorts, Reels e TikToks com IA",
  description: "Conheça o 2short.ai: ferramenta de IA que corta vídeos longos em Shorts, Reels e TikToks, com legendas animadas e rastreamento facial. Veja planos, vantagens e limitações.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/2short",
  },
  openGraph: {
    title: "2short.ai - Transforme Vídeos Longos em Shorts, Reels e TikToks com IA",
    description: "Conheça o 2short.ai: ferramenta de IA que corta vídeos longos em Shorts, Reels e TikToks, com legendas animadas e rastreamento facial. Veja planos, vantagens e limitações.",
    url: "https://www.hypehour.com.br/ferramentas/2short",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "2short.ai - Transforme Vídeos Longos em Shorts, Reels e TikToks com IA",
    description: "Conheça o 2short.ai: ferramenta de IA que corta vídeos longos em Shorts, Reels e TikToks, com legendas animadas e rastreamento facial. Veja planos, vantagens e limitações.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function TwoShortPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.hypehour.com.br/ferramentas/2short#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/2short",
        "name": "2short.ai - Transforme Vídeos Longos em Shorts, Reels e TikToks com IA",
        "description": "Conheça o 2short.ai: ferramenta de IA que corta vídeos longos em Shorts, Reels e TikToks, com legendas animadas e rastreamento facial. Veja planos, vantagens e limitações.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/2short#breadcrumb" },
        "datePublished": "2026-11-08",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/2short#software" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/2short#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypehour.com.br/" },
          { "@type": "ListItem", "position": 2, "name": "IA para Criar Vídeos", "item": "https://www.hypehour.com.br/ia-para-criar-videos" },
          { "@type": "ListItem", "position": 3, "name": "2short.ai", "item": "https://www.hypehour.com.br/ferramentas/2short" }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/2short#software",
        "name": "2short.ai",
        "description": "Conheça o 2short.ai: ferramenta de IA que corta vídeos longos em Shorts, Reels e TikToks, com legendas animadas e rastreamento facial. Veja planos, vantagens e limitações.",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Web",
        "url": "https://2short.ai/",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/2short#webpage" },
        "image": "https://www.hypehour.com.br/logo.png",
        "featureList": ["Seleção automática de trechos", "Rastreamento facial", "Legendas animadas", "Exportação em 1080p", "Predefinições de marca"],
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Plano gratuito disponível" }
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
          <span className="text-black font-medium">2short.ai</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            2
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">2short.ai</h1>
            <p className="text-lg text-zinc-700">{"Ferramenta de IA que transforma vídeos longos em Shorts, TikToks e Reels"}</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">{"O 2short.ai é uma ferramenta de IA que transforma vídeos longos em vídeos curtos para Shorts, TikTok e Reels. Ela identifica os trechos mais envolventes a partir da fala e gera os clipes com legendas e enquadramento vertical."}</p>
          <p className="text-lg text-zinc-700 leading-relaxed">{"Esta página resume os recursos, os planos com preços do site oficial e as limitações que você deve considerar antes de usar."}</p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">{"O que é o 2short.ai?"}</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">{"O 2short.ai analisa a fala do vídeo para encontrar os momentos mais interessantes e os transforma em clipes curtos, prontos para redes sociais."}</p>
          <p className="text-zinc-700 leading-relaxed">{"O site informa que só processa vídeos com legendas, que o YouTube gera automaticamente para a maioria dos vídeos. A ferramenta também mantém quem está falando centralizado na tela por meio de rastreamento facial."}</p>
        </section>

        {/* Como funciona */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{"Envie o vídeo"}</h3>
                <p className="text-zinc-700">{"Informe o link ou envie o vídeo longo que será analisado."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{"A IA encontra os melhores trechos"}</h3>
                <p className="text-zinc-700">{"A ferramenta identifica os momentos mais envolventes a partir da fala."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{"Ajuste o corte"}</h3>
                <p className="text-zinc-700">{"Use as ferramentas de edição e corte e aplique legendas animadas com um clique."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{"Exporte"}</h3>
                <p className="text-zinc-700">{"Baixe em 1080p, sem marca d'água, nos formatos vertical, quadrado ou horizontal."}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Cortes de podcasts", "Clipes de lives e webinars", "Trechos de aulas e palestras", "Shorts a partir de vídeos do YouTube", "Reels e TikToks de entrevistas", "Reaproveitar conteúdo longo", "Divulgar vídeos em várias redes", "Padronizar vídeos com a identidade da marca"].map((item, index) => (
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
              <h3 className="text-xl font-semibold text-black mb-3">{"Seleção automática de trechos"}</h3>
              <p className="text-zinc-700">{"Identifica os momentos mais envolventes a partir da fala do vídeo."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Rastreamento facial"}</h3>
              <p className="text-zinc-700">{"Mantém quem fala no centro da tela no formato vertical."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Legendas animadas"}</h3>
              <p className="text-zinc-700">{"Aplica legendas animadas com um clique."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Exportação em 1080p"}</h3>
              <p className="text-zinc-700">{"Gera vídeos sem marca d'água em formatos vertical, quadrado e horizontal."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Predefinições de marca"}</h3>
              <p className="text-zinc-700">{"Permite usar logos e sobreposições para manter a identidade visual."}</p>
            </div>
          </div>
        </section>

        {/* Preços */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Planos e preços</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">{"O 2short.ai tem plano gratuito e planos pagos mensais, com preços exibidos no site oficial em dólares."}</p>
          <div className="grid gap-3">
            {["Starter: grátis, com 30 minutos de análise de vídeo por mês.", "Lite: US$ 9,90 por mês, com 5 horas de análise, 60 minutos de exportação rápida no servidor e importação do Google Drive e de URLs públicas.", "Pro: US$ 19,90 por mês, com 15 horas de análise e exportações rápidas ilimitadas.", "Premium: US$ 49,90 por mês, com 50 horas de análise, suporte prioritário e acesso a recursos beta."].map((item, index) => (
              <div key={index} className="p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <p className="text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-500 mt-3">{"Valores conferidos no site oficial em novembro de 2026. Preços e limites podem mudar; confirme na página de planos antes de assinar."}</p>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {["Automatiza o corte de vídeos longos em clipes curtos", "Legendas animadas e rastreamento facial incluídos", "Plano gratuito para testar", "Exportação em 1080p sem marca d'água", "Preços de entrada acessíveis"].map((advantage, index) => (
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
            {["Só processa vídeos com legendas", "O plano gratuito tem apenas 30 minutos de análise por mês", "A seleção dos trechos é automática, então vale revisar antes de publicar", "O site consultado não informa suporte à interface em português"].map((disadvantage, index) => (
              <div key={index} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                <span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span>
                <p className="text-zinc-700">{disadvantage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Para quem é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">{"Para quem é o 2short.ai?"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Criadores de podcast e de vídeo longo"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Quem quer reaproveitar lives e webinars"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Social medias que precisam de volume de cortes"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Pequenos negócios com pouco tempo de edição"}</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">{"✕"}</span>
                  <span className="text-zinc-700">{"Vídeos sem fala ou sem legendas"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">{"✕"}</span>
                  <span className="text-zinc-700">{"Quem precisa de edição criativa detalhada"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">{"✕"}</span>
                  <span className="text-zinc-700">{"Projetos que exigem controle total sobre cada corte"}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">{"Transforme um vídeo longo em Shorts"}</h2>
          <p className="text-lg mb-6 text-zinc-300">{"Teste o 2short.ai gratuitamente com 30 minutos de análise por mês."}</p>
          <a
            href="https://2short.ai/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            {"Experimentar o 2short.ai →"}
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">{"O 2short.ai é uma opção direta para quem quer reaproveitar vídeos longos em formatos curtos, com legendas e enquadramento vertical já prontos. O plano gratuito serve para validar o fluxo, e os planos pagos escalam com as horas de análise."}</p>
          <p className="text-zinc-700 leading-relaxed">{"Teste com um vídeo real, revise os trechos escolhidos e confira se o volume do plano atende sua rotina de publicação."}</p>
        </section>

        {/* FAQ */}
        <FAQSection />

        {/* Ferramentas Similares */}
        <SimilarTools />
      </div>
    </main>
  );
}
