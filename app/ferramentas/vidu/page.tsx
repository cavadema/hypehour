import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Vidu - Gerador de Vídeos com IA: Texto, Imagem e Referências",
  description: "Conheça o Vidu: gerador de vídeos com IA que cria vídeos a partir de texto, imagens e referências visuais. Veja recursos, créditos gratuitos, vantagens e limitações.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/vidu",
  },
  openGraph: {
    title: "Vidu - Gerador de Vídeos com IA: Texto, Imagem e Referências",
    description: "Conheça o Vidu: gerador de vídeos com IA que cria vídeos a partir de texto, imagens e referências visuais. Veja recursos, créditos gratuitos, vantagens e limitações.",
    url: "https://www.hypehour.com.br/ferramentas/vidu",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vidu - Gerador de Vídeos com IA: Texto, Imagem e Referências",
    description: "Conheça o Vidu: gerador de vídeos com IA que cria vídeos a partir de texto, imagens e referências visuais. Veja recursos, créditos gratuitos, vantagens e limitações.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function ViduPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.hypehour.com.br/ferramentas/vidu#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/vidu",
        "name": "Vidu - Gerador de Vídeos com IA: Texto, Imagem e Referências",
        "description": "Conheça o Vidu: gerador de vídeos com IA que cria vídeos a partir de texto, imagens e referências visuais. Veja recursos, créditos gratuitos, vantagens e limitações.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/vidu#breadcrumb" },
        "datePublished": "2026-11-08",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/vidu#software" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/vidu#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypehour.com.br/" },
          { "@type": "ListItem", "position": 2, "name": "IA para Criar Vídeos", "item": "https://www.hypehour.com.br/ia-para-criar-videos" },
          { "@type": "ListItem", "position": 3, "name": "Vidu", "item": "https://www.hypehour.com.br/ferramentas/vidu" }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/vidu#software",
        "name": "Vidu",
        "description": "Conheça o Vidu: gerador de vídeos com IA que cria vídeos a partir de texto, imagens e referências visuais. Veja recursos, créditos gratuitos, vantagens e limitações.",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Web",
        "url": "https://www.vidu.com/",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/vidu#webpage" },
        "image": "https://www.hypehour.com.br/logo.png",
        "featureList": ["Texto para vídeo", "Imagem para vídeo", "Referência para vídeo", "Geração de imagens", "Modelos e ferramentas"],
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
          <span className="text-black font-medium">Vidu</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            V
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Vidu</h1>
            <p className="text-lg text-zinc-700">{"Gerador de vídeos com IA a partir de texto, imagens e referências visuais"}</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">{"O Vidu é um gerador de vídeos com IA que cria vídeos a partir de texto, imagens ou referências visuais. Segundo o site, é voltado a criadores independentes, estúdios e equipes."}</p>
          <p className="text-lg text-zinc-700 leading-relaxed">{"Esta página resume os recursos, como funcionam os créditos e o que considerar antes de usar."}</p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">{"O que é o Vidu?"}</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">{"O Vidu transforma prompts de texto em vídeo, anima imagens estáticas e combina referências de personagens, objetos ou cenas para manter consistência entre os vídeos."}</p>
          <p className="text-zinc-700 leading-relaxed">{"O site cita modelos como Vidu Q4, Vidu Q3 e Vidu S (tempo real), além de um Vidu Agent, ferramentas de IA e templates. A página menciona saídas de até 1080p."}</p>
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
                <h3 className="text-xl font-semibold text-black mb-2">{"Escolha o modo"}</h3>
                <p className="text-zinc-700">{"Selecione texto para vídeo, imagem para vídeo ou referência para vídeo."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{"Descreva ou envie material"}</h3>
                <p className="text-zinc-700">{"Escreva o prompt, envie a imagem ou adicione referências de personagens e cenas."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{"Gere o vídeo"}</h3>
                <p className="text-zinc-700">{"Use os créditos para gerar o vídeo com o modelo escolhido."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{"Reaproveite referências"}</h3>
                <p className="text-zinc-700">{"Com My References, reutilize elementos para manter a consistência entre vídeos."}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Vídeos curtos para redes sociais", "Animar imagens estáticas", "Manter personagens consistentes entre cenas", "Protótipos de cenas para filmes e anúncios", "Vídeos de produto", "Primeiro e último quadro definidos", "Gerar imagens e vídeos no mesmo lugar", "Testar ideias visuais rapidamente"].map((item, index) => (
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
              <h3 className="text-xl font-semibold text-black mb-3">{"Texto para vídeo"}</h3>
              <p className="text-zinc-700">{"Cria vídeos a partir de um prompt de texto."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Imagem para vídeo"}</h3>
              <p className="text-zinc-700">{"Anima uma imagem estática e permite definir o primeiro e o último quadro."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Referência para vídeo"}</h3>
              <p className="text-zinc-700">{"Combina referências de personagens, objetos ou cenas, com a função My References para manter consistência."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Geração de imagens"}</h3>
              <p className="text-zinc-700">{"Oferece texto para imagem e referência para imagem."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Modelos e ferramentas"}</h3>
              <p className="text-zinc-700">{"Reúne os modelos Vidu Q4, Q3 e S (tempo real), o Vidu Agent, ferramentas de IA e templates."}</p>
            </div>
          </div>
        </section>

        {/* Preços */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Planos e preços</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">{"O Vidu dá créditos gratuitos a todos os usuários. A página inicial tem links para planos e preços, mas não mostra os valores."}</p>
          <div className="grid gap-3">
            {["Gratuito: todos os usuários recebem uma quantidade de créditos gratuitos para gerar vídeos.", "Planos pagos: oferecem mais créditos de geração. Os valores não aparecem na página inicial.", "Consumo: o custo em créditos varia conforme o modelo e a duração do vídeo."].map((item, index) => (
              <div key={index} className="p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <p className="text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-500 mt-3">{"Os valores dos planos pagos não foram confirmados na página oficial consultada, e fontes de terceiros divergem. Veja os preços atuais em vidu.com."}</p>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {["Cria vídeos a partir de texto, imagens e referências", "Função de referências ajuda a manter personagens e objetos consistentes", "Créditos gratuitos para testar", "Define primeiro e último quadro ao animar imagens", "Reúne geração de imagens e vídeos"].map((advantage, index) => (
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
            {["Os créditos gratuitos são limitados", "Os valores dos planos pagos não aparecem na página inicial", "O consumo de créditos varia conforme o modelo e a duração", "O site consultado não informa interface em português"].map((disadvantage, index) => (
              <div key={index} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                <span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span>
                <p className="text-zinc-700">{disadvantage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Para quem é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">{"Para quem é o Vidu?"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Criadores que precisam de vídeos curtos com personagens consistentes"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Equipes de marketing que testam conceitos visuais"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Quem quer animar imagens estáticas"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Estúdios que prototipam cenas"}</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">{"✕"}</span>
                  <span className="text-zinc-700">{"Quem precisa de vídeos longos em uma única geração"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">{"✕"}</span>
                  <span className="text-zinc-700">{"Quem busca uso totalmente gratuito sem limite de créditos"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">{"✕"}</span>
                  <span className="text-zinc-700">{"Quem precisa de interface em português garantida"}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">{"Crie um vídeo com IA"}</h2>
          <p className="text-lg mb-6 text-zinc-300">{"Use os créditos gratuitos do Vidu para gerar um vídeo a partir de texto ou imagem."}</p>
          <a
            href="https://www.vidu.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            {"Experimentar o Vidu →"}
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">{"O Vidu é uma opção interessante para quem quer gerar vídeos curtos com consistência entre cenas, graças ao modo de referências. Os créditos gratuitos permitem testar o fluxo antes de decidir por um plano."}</p>
          <p className="text-zinc-700 leading-relaxed">{"Antes de assinar, gere alguns vídeos com o seu tipo de conteúdo e estime o consumo de créditos para o seu volume de produção."}</p>
        </section>

        {/* FAQ */}
        <FAQSection />

        {/* Ferramentas Similares */}
        <SimilarTools />
      </div>
    </main>
  );
}
