import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Banani - Gerador de Interfaces com IA para Mobile e Web",
  description: "Conheça o Banani: gerador de interfaces com IA que cria telas mobile e web a partir de texto ou imagens, com fluxos de várias telas e exportação para Figma e HTML/CSS. Plano gratuito e site em português.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/banani",
  },
  openGraph: {
    title: "Banani - Gerador de Interfaces com IA para Mobile e Web",
    description: "Conheça o Banani: gerador de interfaces com IA que cria telas mobile e web a partir de texto ou imagens, com fluxos de várias telas e exportação para Figma e HTML/CSS. Plano gratuito e site em português.",
    url: "https://www.hypehour.com.br/ferramentas/banani",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Banani - Gerador de Interfaces com IA para Mobile e Web",
    description: "Conheça o Banani: gerador de interfaces com IA que cria telas mobile e web a partir de texto ou imagens, com fluxos de várias telas e exportação para Figma e HTML/CSS. Plano gratuito e site em português.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function BananiPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.hypehour.com.br/ferramentas/banani#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/banani",
        "name": "Banani - Gerador de Interfaces com IA para Mobile e Web",
        "description": "Conheça o Banani: gerador de interfaces com IA que cria telas mobile e web a partir de texto ou imagens, com fluxos de várias telas e exportação para Figma e HTML/CSS. Plano gratuito e site em português.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/banani#breadcrumb" },
        "datePublished": "2026-10-17",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/banani#software" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/banani#breadcrumb",
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
            "name": "IA para UX",
            "item": "https://www.hypehour.com.br/ia-para-ux"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Banani",
            "item": "https://www.hypehour.com.br/ferramentas/banani"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/banani#software",
        "name": "Banani",
        "description": "Conheça o Banani: gerador de interfaces com IA que cria telas mobile e web a partir de texto ou imagens, com fluxos de várias telas e exportação para Figma e HTML/CSS. Plano gratuito e site em português.",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web",
        "url": "https://www.banani.co/pt/product/ai-ui-generator",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/banani#webpage" },
        "image": "https://www.hypehour.com.br/logo.png",
        "featureList": ["Texto ou imagem para UI", "Variações e fluxos", "Edição por chat ou manual", "Mobile para desktop e vice-versa", "Exportação"],
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Plano gratuito disponível, sem cartão de crédito" },
        "creator": {
          "@type": "Organization",
          "name": "Banani"
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
          <Link href="/ia-para-ux" className="hover:text-black transition">IA para UX</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Banani</span>
        </nav>

        {/* Header com logo e nome */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            B
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Banani</h1>
            <p className="text-lg text-zinc-700">Gerador de interfaces com IA para apps mobile e web, a partir de texto ou imagens</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O Banani é um gerador de interfaces com IA para aplicativos mobile e web. Você descreve a tela em texto ou envia uma imagem de referência, e a ferramenta devolve um design editável, com variações e fluxos de várias telas.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            A página do produto está em português e o site anuncia um plano gratuito sem necessidade de cartão de crédito, o que facilita testar antes de decidir.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Banani?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Banani cria interfaces a partir de um prompt de texto ou de uma imagem de referência, gera variações de UI e fluxos com várias telas, e permite editar o resultado por chat com IA ou com ferramentas manuais, incluindo variantes.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            O canvas lembra o do Figma para organizar telas, e a ferramenta consegue converter uma interface mobile para desktop e vice-versa. O resultado pode ser colado no Figma, exportado em HTML e CSS ou levado a outras ferramentas via MCP.
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
                <h3 className="text-xl font-semibold text-black mb-2">Descreva ou envie uma imagem</h3>
                <p className="text-zinc-700">Escreva um prompt ou envie uma screenshot de referência.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Gere telas, variações e fluxos</h3>
                <p className="text-zinc-700">A ferramenta cria a interface, variações dela e fluxos de várias telas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Edite por chat ou manualmente</h3>
                <p className="text-zinc-700">Ajuste o design pelo chat com IA ou pelas ferramentas de edição, incluindo variantes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Exporte e compartilhe</h3>
                <p className="text-zinc-700">Cole no Figma, exporte em HTML e CSS, use o MCP ou compartilhe um link de visualização.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Telas de aplicativos mobile",
              "Interfaces web",
              "Fluxos de várias telas",
              "Variações de uma mesma tela",
              "Conversão de mobile para desktop",
              "Protótipos para validação",
              "Projetos de fundadores e indie hackers",
              "Estudos a partir de screenshots"
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
              <h3 className="text-xl font-semibold text-black mb-3">Texto ou imagem para UI</h3>
              <p className="text-zinc-700">Gera interfaces a partir de um prompt ou de uma imagem de referência.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Variações e fluxos</h3>
              <p className="text-zinc-700">Cria variações de tela e fluxos de várias telas.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Edição por chat ou manual</h3>
              <p className="text-zinc-700">Permite refinar o design com IA ou com ferramentas manuais.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Mobile para desktop e vice-versa</h3>
              <p className="text-zinc-700">Converte a interface entre os formatos.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Exportação</h3>
              <p className="text-zinc-700">Cola no Figma, exporta HTML e CSS e oferece MCP e links de visualização compartilháveis.</p>
            </div>
          </div>
        </section>

        {/* Preços */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Planos e preços</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O Banani tem um plano gratuito sem prazo de validade e planos pagos com desconto de 40% na cobrança anual.</p>
          <div className="grid gap-3">
            {[
              "Free: US$ 0. Inclui 12 créditos mensais, 3 créditos diários e projetos privados. O plano não expira e não exige cartão de crédito.",
              "Plus: US$ 12 por mês na cobrança anual ou US$ 20 por mês na mensal. Inclui modo agente, 100 créditos mensais, 10 créditos diários, exportação ilimitada para o Figma, geração 3 vezes mais rápida e exportação de código via MCP.",
              "Pro: US$ 30 por mês na cobrança anual ou US$ 50 por mês na mensal. Inclui tudo do Plus, créditos ilimitados, maior velocidade de geração e suporte prioritário.",
              "Enterprise: preço sob consulta. Adiciona SSO, importação de design system e integração personalizada."
            ].map((item, index) => (
              <div key={index} className="p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <p className="text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-500 mt-3">Valores em dólar conferidos no site oficial em outubro de 2026. Preços e limites podem mudar; confirme na página de planos antes de assinar.</p>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Site e página do produto em português",
              "Plano gratuito sem prazo e sem cartão de crédito",
              "Gera variações e fluxos de várias telas",
              "Exporta para Figma e HTML e CSS",
              "Atende fundadores, designers, desenvolvedores e estudantes"
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
              "No plano gratuito, o uso é limitado por créditos (12 por mês e 3 por dia)",
              "A exportação ilimitada para o Figma e a exportação de código via MCP ficam nos planos pagos",
              "O site não informa a localização e a data de fundação da empresa",
              "Resultados gerados por IA precisam de revisão de acessibilidade e consistência"
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Banani?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Fundadores e indie hackers que precisam de telas rápidas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Designers que querem explorar variações</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Desenvolvedores sem apoio de design</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Estudantes que estão aprendendo UI</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Quem precisa de uso intenso sem planos pagos</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Equipes que exigem SSO e design system no plano básico</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Projetos que dependem de interface totalmente customizada</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Gere sua primeira interface com IA</h2>
          <p className="text-lg mb-6 text-zinc-300">Comece no plano gratuito do Banani, sem cartão de crédito.</p>
          <a
            href="https://www.banani.co/pt/product/ai-ui-generator"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Experimentar o Banani →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Banani combina geração de interfaces a partir de texto ou imagem com edição por chat e exportações práticas. A página em português e o plano gratuito sem cartão reduzem a barreira para testar.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            O limite de créditos é o fator mais importante na escolha do plano: avalie quantas telas você gera por semana antes de decidir entre o gratuito e o Plus.
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
