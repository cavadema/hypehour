import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Cutout.Pro - Remover Fundo, Melhorar Fotos e Gerar Vídeos com IA",
  description: "Conheça o Cutout.Pro: plataforma de IA para remover fundo, ampliar e melhorar fotos, remover objetos e gerar vídeos. Veja recursos, créditos, vantagens e limitações.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/cutout-pro",
  },
  openGraph: {
    title: "Cutout.Pro - Remover Fundo, Melhorar Fotos e Gerar Vídeos com IA",
    description: "Conheça o Cutout.Pro: plataforma de IA para remover fundo, ampliar e melhorar fotos, remover objetos e gerar vídeos. Veja recursos, créditos, vantagens e limitações.",
    url: "https://www.hypehour.com.br/ferramentas/cutout-pro",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cutout.Pro - Remover Fundo, Melhorar Fotos e Gerar Vídeos com IA",
    description: "Conheça o Cutout.Pro: plataforma de IA para remover fundo, ampliar e melhorar fotos, remover objetos e gerar vídeos. Veja recursos, créditos, vantagens e limitações.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function CutoutProPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.hypehour.com.br/ferramentas/cutout-pro#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/cutout-pro",
        "name": "Cutout.Pro - Remover Fundo, Melhorar Fotos e Gerar Vídeos com IA",
        "description": "Conheça o Cutout.Pro: plataforma de IA para remover fundo, ampliar e melhorar fotos, remover objetos e gerar vídeos. Veja recursos, créditos, vantagens e limitações.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/cutout-pro#breadcrumb" },
        "datePublished": "2026-11-08",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/cutout-pro#software" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/cutout-pro#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypehour.com.br/" },
          { "@type": "ListItem", "position": 2, "name": "IA para Imagens", "item": "https://www.hypehour.com.br/ia-para-imagens" },
          { "@type": "ListItem", "position": 3, "name": "Cutout.Pro", "item": "https://www.hypehour.com.br/ferramentas/cutout-pro" }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/cutout-pro#software",
        "name": "Cutout.Pro",
        "description": "Conheça o Cutout.Pro: plataforma de IA para remover fundo, ampliar e melhorar fotos, remover objetos e gerar vídeos. Veja recursos, créditos, vantagens e limitações.",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Web",
        "url": "https://www.cutout.pro/",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/cutout-pro#webpage" },
        "image": "https://www.hypehour.com.br/logo.png",
        "featureList": ["Remoção de fundo", "Melhoria e ampliação de fotos", "Remoção de objetos", "Retratos e e-commerce", "Vídeo e API"]
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
          <span className="text-black font-medium">Cutout.Pro</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            C
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Cutout.Pro</h1>
            <p className="text-lg text-zinc-700">{"Plataforma de IA para edição de imagens e geração de vídeos, com remoção de fundo e melhoria de fotos"}</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">{"O Cutout.Pro é uma plataforma de edição de imagens e geração de vídeos com IA. Reúne ferramentas de remoção de fundo, melhoria e ampliação de fotos, remoção de objetos e criação de vídeos, em versões web, desktop e mobile."}</p>
          <p className="text-lg text-zinc-700 leading-relaxed">{"Esta página resume o que a ferramenta oferece, como funciona a cobrança por créditos e o que considerar antes de usar."}</p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">{"O que é o Cutout.Pro?"}</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">{"Criado em 2018 pela equipe LibAI, com escritório em Hong Kong, o Cutout.Pro concentra em um só lugar tarefas comuns de edição de imagem automatizadas por IA."}</p>
          <p className="text-zinc-700 leading-relaxed">{"Além da edição, a plataforma oferece geração de imagens, retratos profissionais, recursos para e-commerce e vídeo, além de API para desenvolvedores e plugin para Shopify."}</p>
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
                <h3 className="text-xl font-semibold text-black mb-2">{"Envie a imagem"}</h3>
                <p className="text-zinc-700">{"Suba a foto ou o vídeo que será editado."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{"Escolha a ferramenta"}</h3>
                <p className="text-zinc-700">{"Selecione remoção de fundo, melhoria, remoção de objetos ou outro recurso."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{"Veja a prévia"}</h3>
                <p className="text-zinc-700">{"A plataforma mostra uma pré-visualização do resultado."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{"Baixe em alta resolução"}</h3>
                <p className="text-zinc-700">{"Use créditos para baixar o arquivo em resolução completa."}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Remover fundo de fotos", "Fotos de produtos para e-commerce", "Ampliar e melhorar fotos", "Remover objetos indesejados", "Fotos de passaporte e headshots", "Colorizar fotos antigas", "Gerar vídeos a partir de imagens", "Automatizar edição via API"].map((item, index) => (
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
              <h3 className="text-xl font-semibold text-black mb-3">{"Remoção de fundo"}</h3>
              <p className="text-zinc-700">{"Remove o fundo de imagens e de vídeos automaticamente."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Melhoria e ampliação de fotos"}</h3>
              <p className="text-zinc-700">{"Aumenta a qualidade e a resolução de fotos."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Remoção de objetos"}</h3>
              <p className="text-zinc-700">{"Apaga elementos indesejados da imagem."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Retratos e e-commerce"}</h3>
              <p className="text-zinc-700">{"Gera headshots, fotos de passaporte, modelos virtuais e imagens de produtos."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Vídeo e API"}</h3>
              <p className="text-zinc-700">{"Oferece imagem para vídeo, melhoria de vídeo, avatares digitais e API para desenvolvedores."}</p>
            </div>
          </div>
        </section>

        {/* Preços */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Planos e preços</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">{"O Cutout.Pro funciona com créditos, com opções de assinatura e compra avulsa. A página inicial não exibe valores."}</p>
          <div className="grid gap-3">
            {["Gratuito: a página de preços informa 5 créditos gratuitos, e a pré-visualização dos resultados pode ser feita sem pagar.", "Assinaturas: planos mensais com créditos, que podem ser cancelados ou alterados a qualquer momento.", "Créditos avulsos: pacotes de créditos para quem usa de vez em quando.", "API: usa o mesmo saldo de créditos da versão web."].map((item, index) => (
              <div key={index} className="p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <p className="text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-500 mt-3">{"Os valores variam entre fontes e não aparecem na página inicial. Confirme os preços atuais em cutout.pro/prices antes de comprar."}</p>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {["Muitas ferramentas de imagem em uma só plataforma", "Remoção de fundo e melhoria de fotos automatizadas", "Pré-visualização antes de pagar pelo download", "Versões web, desktop e mobile, com API e plugin para Shopify", "Opção de créditos avulsos, sem obrigar assinatura"].map((advantage, index) => (
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
            {["O download em alta resolução consome créditos", "Os valores não aparecem na página inicial", "Resultados de remoção de fundo e de remoção de objetos podem exigir ajustes manuais", "O site consultado não informa interface em português"].map((disadvantage, index) => (
              <div key={index} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                <span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span>
                <p className="text-zinc-700">{disadvantage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Para quem é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">{"Para quem é o Cutout.Pro?"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Lojas virtuais que precisam de fotos de produto limpas"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Quem remove fundos com frequência"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Criadores que querem melhorar fotos antigas ou de baixa qualidade"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Desenvolvedores que precisam de API de edição de imagens"}</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">{"✕"}</span>
                  <span className="text-zinc-700">{"Quem busca edição criativa avançada, como em editores profissionais"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">{"✕"}</span>
                  <span className="text-zinc-700">{"Quem quer uma ferramenta totalmente gratuita em alta resolução"}</span>
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
          <h2 className="text-3xl font-bold mb-4">{"Edite suas imagens com IA"}</h2>
          <p className="text-lg mb-6 text-zinc-300">{"Teste a pré-visualização do Cutout.Pro com uma foto sua."}</p>
          <a
            href="https://www.cutout.pro/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            {"Experimentar o Cutout.Pro →"}
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">{"O Cutout.Pro é uma opção prática para tarefas rápidas de edição de imagem, principalmente remoção de fundo e melhoria de fotos. O modelo de créditos favorece quem usa de forma pontual."}</p>
          <p className="text-zinc-700 leading-relaxed">{"Antes de comprar, teste a pré-visualização com imagens reais e compare o custo por imagem com o seu volume de uso."}</p>
        </section>

        {/* FAQ */}
        <FAQSection />

        {/* Ferramentas Similares */}
        <SimilarTools />
      </div>
    </main>
  );
}
