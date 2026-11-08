import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Magnific - Upscaler e Geração de Imagens e Vídeos com IA",
  description: "Conheça o Magnific: plataforma de IA para ampliar imagens com alta resolução e gerar imagens e vídeos. Veja recursos, planos, vantagens e limitações.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/magnific",
  },
  openGraph: {
    title: "Magnific - Upscaler e Geração de Imagens e Vídeos com IA",
    description: "Conheça o Magnific: plataforma de IA para ampliar imagens com alta resolução e gerar imagens e vídeos. Veja recursos, planos, vantagens e limitações.",
    url: "https://www.hypehour.com.br/ferramentas/magnific",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Magnific - Upscaler e Geração de Imagens e Vídeos com IA",
    description: "Conheça o Magnific: plataforma de IA para ampliar imagens com alta resolução e gerar imagens e vídeos. Veja recursos, planos, vantagens e limitações.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function MagnificPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.hypehour.com.br/ferramentas/magnific#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/magnific",
        "name": "Magnific - Upscaler e Geração de Imagens e Vídeos com IA",
        "description": "Conheça o Magnific: plataforma de IA para ampliar imagens com alta resolução e gerar imagens e vídeos. Veja recursos, planos, vantagens e limitações.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/magnific#breadcrumb" },
        "datePublished": "2026-11-08",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/magnific#software" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/magnific#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypehour.com.br/" },
          { "@type": "ListItem", "position": 2, "name": "IA para Imagens", "item": "https://www.hypehour.com.br/ia-para-imagens" },
          { "@type": "ListItem", "position": 3, "name": "Magnific", "item": "https://www.hypehour.com.br/ferramentas/magnific" }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/magnific#software",
        "name": "Magnific",
        "description": "Conheça o Magnific: plataforma de IA para ampliar imagens com alta resolução e gerar imagens e vídeos. Veja recursos, planos, vantagens e limitações.",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web",
        "url": "https://www.magnific.com/",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/magnific#webpage" },
        "image": "https://www.hypehour.com.br/logo.png",
        "featureList": ["Upscaling com IA", "Geração de imagens", "Geração de vídeos", "Planos por assinatura", "API"]
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
          <Link href="/ia-para-imagens" className="hover:text-black transition">IA para Imagens</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Magnific</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            M
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Magnific</h1>
            <p className="text-lg text-zinc-700">{"Plataforma de IA para ampliar imagens em alta resolução e gerar imagens e vídeos"}</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">{"O Magnific é uma plataforma de IA conhecida por ampliar e melhorar imagens com muito detalhe, transformando conteúdo comum em material de qualidade fotográfica e cinematográfica. A plataforma também oferece geração de imagens e de vídeos."}</p>
          <p className="text-lg text-zinc-700 leading-relaxed">{"Esta página resume o que a ferramenta faz, como funcionam os planos e o que considerar antes de assinar."}</p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">{"O que é o Magnific?"}</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">{"O Magnific nasceu como um upscaler de imagens com IA, que aumenta a resolução e reconstrói detalhes. Hoje reúne também geração de imagens e vídeos em uma mesma plataforma."}</p>
          <p className="text-zinc-700 leading-relaxed">{"Segundo reportagens, a Freepik passou a usar a marca Magnific em 2026, e o endereço antigo redireciona para o novo. Por isso, os planos e o catálogo de recursos cobrem toda a plataforma, e não apenas o upscaler."}</p>
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
                <h3 className="text-xl font-semibold text-black mb-2">{"Envie ou crie a imagem"}</h3>
                <p className="text-zinc-700">{"Suba uma imagem existente ou gere uma nova na plataforma."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{"Escolha o recurso"}</h3>
                <p className="text-zinc-700">{"Use o upscaling para ampliar e detalhar, ou o gerador de imagens e vídeos."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{"Ajuste os parâmetros"}</h3>
                <p className="text-zinc-700">{"Controle o nível de detalhe e de fidelidade ao original."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{"Baixe o resultado"}</h3>
                <p className="text-zinc-700">{"Exporte a imagem ou o vídeo em alta resolução."}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Ampliar fotos de baixa resolução", "Melhorar imagens geradas por IA", "Preparar arte para impressão", "Reconstruir detalhes em fotos antigas", "Criar imagens para campanhas", "Gerar vídeos curtos a partir de imagens", "Refinar renders e ilustrações", "Aumentar a qualidade de materiais de marketing"].map((item, index) => (
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
              <h3 className="text-xl font-semibold text-black mb-3">{"Upscaling com IA"}</h3>
              <p className="text-zinc-700">{"Amplia imagens e reconstrói detalhes em ultra-alta resolução."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Geração de imagens"}</h3>
              <p className="text-zinc-700">{"Cria imagens a partir de texto dentro da mesma plataforma."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Geração de vídeos"}</h3>
              <p className="text-zinc-700">{"Produz vídeos com IA, incluindo a partir de imagens."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Planos por assinatura"}</h3>
              <p className="text-zinc-700">{"Planos individuais e para equipes, com créditos de uso."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"API"}</h3>
              <p className="text-zinc-700">{"Oferece API para integrar os recursos a outros produtos."}</p>
            </div>
          </div>
        </section>

        {/* Preços */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Planos e preços</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">{"O Magnific é vendido por assinatura. Fontes públicas citam os planos Premium, Premium+, Pro, Business e Enterprise, mas os valores divergem entre sites e variam por região e promoção."}</p>
          <div className="grid gap-3">
            {["Premium, Premium+ e Pro: planos individuais, com créditos de uso e acesso a modelos de imagem e vídeo.", "Business: plano para equipes, com cobrança por usuário.", "Enterprise: preço sob consulta.", "API: cobrança por uso, baseada na área em pixels da imagem de saída."].map((item, index) => (
              <div key={index} className="p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <p className="text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-500 mt-3">{"Os valores variam por região, promoção e forma de cobrança, e as fontes divergem. Confirme os preços atuais na página de planos do site oficial."}</p>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {["Upscaling com muito detalhe, útil para impressão e peças de marketing", "Imagens e vídeos na mesma plataforma", "Opções para uso individual e para equipes", "API disponível", "Foco em qualidade visual de nível profissional"].map((advantage, index) => (
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
            {["Os planos são pagos, e os valores variam por região e promoção", "Os créditos podem acabar rápido em uso intenso", "O upscaling pode alterar detalhes do original, então revise o resultado", "A marca e os planos mudaram em 2026, o que pode confundir quem buscava a Freepik"].map((disadvantage, index) => (
              <div key={index} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                <span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span>
                <p className="text-zinc-700">{disadvantage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Para quem é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">{"Para quem é o Magnific?"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Designers que precisam ampliar e refinar imagens"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Equipes de marketing com materiais de alta qualidade"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Criadores que geram imagens com IA e querem mais resolução"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Quem prepara arte para impressão"}</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">{"✕"}</span>
                  <span className="text-zinc-700">{"Quem busca uma ferramenta totalmente gratuita"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">{"✕"}</span>
                  <span className="text-zinc-700">{"Quem precisa de fidelidade exata ao original, sem reconstrução de detalhes"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">{"✕"}</span>
                  <span className="text-zinc-700">{"Uso esporádico que não justifica assinatura"}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">{"Melhore suas imagens com IA"}</h2>
          <p className="text-lg mb-6 text-zinc-300">{"Veja o Magnific em ação e teste a ampliação com uma imagem sua."}</p>
          <a
            href="https://www.magnific.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            {"Conhecer o Magnific →"}
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">{"O Magnific é uma boa escolha para quem quer elevar a qualidade de imagens com IA, seja ampliando fotos ou criando novas imagens e vídeos. A principal barreira é o custo e a variação de preços."}</p>
          <p className="text-zinc-700 leading-relaxed">{"Antes de assinar, teste com poucas imagens reais, compare o resultado com o original e confirme o plano na página oficial."}</p>
        </section>

        {/* FAQ */}
        <FAQSection />

        {/* Ferramentas Similares */}
        <SimilarTools />
      </div>
    </main>
  );
}
