import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Pixwit - Estúdio de Vídeo e Imagem com IA para Anúncios e Avatares",
  description: "Conheça o Pixwit: suíte criativa com IA para gerar vídeos e imagens, com texto para vídeo, imagem para vídeo, avatares, vídeos longos e fluxos em canvas. Veja recursos, modelos e limitações.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/pixwit",
  },
  openGraph: {
    title: "Pixwit - Estúdio de Vídeo e Imagem com IA para Anúncios e Avatares",
    description: "Conheça o Pixwit: suíte criativa com IA para gerar vídeos e imagens, com texto para vídeo, imagem para vídeo, avatares, vídeos longos e fluxos em canvas. Veja recursos, modelos e limitações.",
    url: "https://www.hypehour.com.br/ferramentas/pixwit",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pixwit - Estúdio de Vídeo e Imagem com IA para Anúncios e Avatares",
    description: "Conheça o Pixwit: suíte criativa com IA para gerar vídeos e imagens, com texto para vídeo, imagem para vídeo, avatares, vídeos longos e fluxos em canvas. Veja recursos, modelos e limitações.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function PixwitPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.hypehour.com.br/ferramentas/pixwit#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/pixwit",
        "name": "Pixwit - Estúdio de Vídeo e Imagem com IA para Anúncios e Avatares",
        "description": "Conheça o Pixwit: suíte criativa com IA para gerar vídeos e imagens, com texto para vídeo, imagem para vídeo, avatares, vídeos longos e fluxos em canvas. Veja recursos, modelos e limitações.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/pixwit#breadcrumb" },
        "datePublished": "2026-10-17",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/pixwit#software" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/pixwit#breadcrumb",
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
            "name": "Pixwit",
            "item": "https://www.hypehour.com.br/ferramentas/pixwit"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/pixwit#software",
        "name": "Pixwit",
        "description": "Conheça o Pixwit: suíte criativa com IA para gerar vídeos e imagens, com texto para vídeo, imagem para vídeo, avatares, vídeos longos e fluxos em canvas. Veja recursos, modelos e limitações.",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Web",
        "url": "https://pixwit.ai/",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/pixwit#webpage" },
        "image": "https://www.hypehour.com.br/logo.png",
        "featureList": ["Texto e imagem para vídeo", "Character Studio e avatares", "Script to Video, Video Extend e Long Video", "Canvas de fluxos por nós", "Efeitos, upscaling e remoção de fundo"],
        "creator": {
          "@type": "Organization",
          "name": "Pixwit"
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
          <span className="text-black font-medium">Pixwit</span>
        </nav>

        {/* Header com logo e nome */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            P
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Pixwit</h1>
            <p className="text-lg text-zinc-700">Estúdio de vídeo e imagem com IA para anúncios UGC, avatares e conteúdo de longa duração</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O Pixwit é uma suíte criativa com IA que reúne geração de vídeo e de imagem em um só lugar. O site o descreve como uma plataforma de criação de vídeo para anúncios UGC, avatares e conteúdo longo.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Em vez de depender de um único modelo, a ferramenta oferece acesso a diferentes modelos de vídeo e imagem, o que permite escolher o mais adequado para cada tarefa.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Pixwit?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Pixwit oferece texto para vídeo, imagem para vídeo, geração e edição de imagens, Character Studio e avatares de IA, além de um Canvas com fluxos visuais baseados em nós. Há ainda recursos como Video Extend, Script to Video e Long Video.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            O site também lista efeitos de vídeo, upscaling de vídeo e remoção de fundo. Os exemplos mostrados vão de clipes de 5 a 8 segundos, em 16:9, a resoluções entre 720p e 1080p, e o Seedance 2.5 aparece com duração de até 30 segundos.
          </p>
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
                <h3 className="text-xl font-semibold text-black mb-2">Escolha o tipo de criação</h3>
                <p className="text-zinc-700">Texto para vídeo, imagem para vídeo, geração de imagem ou avatar.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Selecione o modelo</h3>
                <p className="text-zinc-700">O site lista modelos como Seedance e Runway, entre outros. A lista pode mudar com o tempo.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Gere e estenda</h3>
                <p className="text-zinc-700">Crie o clipe e use recursos como Video Extend, Script to Video ou Long Video para alongar o conteúdo.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Refine</h3>
                <p className="text-zinc-700">Aplique efeitos, upscaling ou remoção de fundo e monte fluxos no Canvas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Anúncios em vídeo estilo UGC",
              "Avatares de IA",
              "Vídeos a partir de roteiro",
              "Vídeos longos",
              "Animação de imagens",
              "Geração e edição de imagens",
              "Upscaling de vídeo",
              "Remoção de fundo"
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
              <h3 className="text-xl font-semibold text-black mb-3">Texto e imagem para vídeo</h3>
              <p className="text-zinc-700">Gera clipes a partir de um prompt ou de uma imagem.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Character Studio e avatares</h3>
              <p className="text-zinc-700">Cria personagens e avatares de IA para anúncios e narrativas.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Script to Video, Video Extend e Long Video</h3>
              <p className="text-zinc-700">Recursos para transformar roteiros em vídeo e alongar o conteúdo.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Canvas de fluxos por nós</h3>
              <p className="text-zinc-700">Monta fluxos visuais de geração com nós conectados.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Efeitos, upscaling e remoção de fundo</h3>
              <p className="text-zinc-700">Ferramentas de pós-produção dentro da plataforma.</p>
            </div>
          </div>
        </section>

        {/* Preços */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Planos e preços</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">As páginas consultadas não mostram preços nem informam se há créditos gratuitos. O site cita um plano Business para equipes de 2 a 9 pessoas, com créditos compartilhados e cobrança de equipe.</p>
          <div className="grid gap-3">
            {[
              "Preços: não divulgados nas páginas consultadas.",
              "Plano Business: voltado a equipes de 2 a 9 pessoas, com créditos compartilhados e cobrança de equipe. Valores não informados.",
              "Créditos gratuitos: não informados nas páginas consultadas."
            ].map((item, index) => (
              <div key={index} className="p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <p className="text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-500 mt-3">Informações conferidas no site oficial em outubro de 2026. Confirme planos, créditos e preços diretamente no Pixwit.</p>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Reúne vídeo e imagem em uma única plataforma",
              "Dá acesso a diferentes modelos de geração",
              "Recursos para anúncios UGC, avatares e vídeos longos",
              "Canvas de fluxos por nós para pipelines mais elaborados"
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
              "Preços e créditos gratuitos não aparecem nas páginas consultadas",
              "A lista de modelos muda com o tempo, então os resultados dependem do modelo escolhido",
              "Os exemplos citados são clipes curtos, de 5 a 8 segundos; durações maiores dependem do modelo",
              "O site não informa a origem da empresa nem a disponibilidade de interface em português"
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Pixwit?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Criadores e profissionais de marketing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Quem produz anúncios em vídeo estilo UGC</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Equipes pequenas com créditos compartilhados</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Quem quer testar vários modelos no mesmo lugar</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Quem precisa saber o custo exato antes de testar</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Produções longas que exigem controle total quadro a quadro</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Quem procura interface garantida em português</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Gere seu primeiro vídeo com IA</h2>
          <p className="text-lg mb-6 text-zinc-300">Conheça os modelos e recursos do Pixwit no site oficial.</p>
          <a
            href="https://pixwit.ai/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Visitar o Pixwit →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Pixwit reúne geração de vídeo, imagem, avatares e pós-produção em uma só plataforma, com acesso a mais de um modelo. É uma opção para criadores e times de marketing que querem experimentar diferentes engines sem trocar de ferramenta.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Como preços e créditos não estão claros nas páginas consultadas, confirme as condições e teste com um projeto curto antes de assumir um plano ou o plano Business para a equipe.
          </p>
        </section>

        {/* FAQ */}
        <FAQSection />

        {/* Ferramentas Similares */}
        <SimilarTools />
      </div>
    </main>
  );
}
