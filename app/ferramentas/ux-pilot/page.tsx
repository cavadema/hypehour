import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "UX Pilot - Gerador de Telas e Fluxos de UX com IA",
  description: "Conheça o UX Pilot: ferramenta de IA que gera telas, wireframes e fluxos de UX editáveis, com conexão bidirecional com o Figma e exportação de código. Site em português e opção de começar de graça.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/ux-pilot",
  },
  openGraph: {
    title: "UX Pilot - Gerador de Telas e Fluxos de UX com IA",
    description: "Conheça o UX Pilot: ferramenta de IA que gera telas, wireframes e fluxos de UX editáveis, com conexão bidirecional com o Figma e exportação de código. Site em português e opção de começar de graça.",
    url: "https://www.hypehour.com.br/ferramentas/ux-pilot",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "UX Pilot - Gerador de Telas e Fluxos de UX com IA",
    description: "Conheça o UX Pilot: ferramenta de IA que gera telas, wireframes e fluxos de UX editáveis, com conexão bidirecional com o Figma e exportação de código. Site em português e opção de começar de graça.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function UxPilotPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.hypehour.com.br/ferramentas/ux-pilot#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/ux-pilot",
        "name": "UX Pilot - Gerador de Telas e Fluxos de UX com IA",
        "description": "Conheça o UX Pilot: ferramenta de IA que gera telas, wireframes e fluxos de UX editáveis, com conexão bidirecional com o Figma e exportação de código. Site em português e opção de começar de graça.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/ux-pilot#breadcrumb" },
        "datePublished": "2026-10-17",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/ux-pilot#software" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/ux-pilot#breadcrumb",
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
            "name": "UX Pilot",
            "item": "https://www.hypehour.com.br/ferramentas/ux-pilot"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/ux-pilot#software",
        "name": "UX Pilot",
        "description": "Conheça o UX Pilot: ferramenta de IA que gera telas, wireframes e fluxos de UX editáveis, com conexão bidirecional com o Figma e exportação de código. Site em português e opção de começar de graça.",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web",
        "url": "https://uxpilot.ai/pt",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/ux-pilot#webpage" },
        "image": "https://www.hypehour.com.br/logo.png",
        "featureList": ["Quatro estilos de uma vez", "Wireframes e telas por IA", "Fluxos de ponta a ponta", "Esboço, PDF ou screenshot para layout", "Figma e código"],
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "É possível começar a gerar gratuitamente" },
        "creator": {
          "@type": "Organization",
          "name": "UX Pilot AI"
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
          <span className="text-black font-medium">UX Pilot</span>
        </nav>

        {/* Header com logo e nome */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            U
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">UX Pilot</h1>
            <p className="text-lg text-zinc-700">Ferramenta de IA para gerar telas, wireframes e fluxos de UX editáveis, com integração ao Figma</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O UX Pilot é uma ferramenta de IA voltada a designers e criadores de produto que gera designs de UX e UI editáveis, de uma única tela a um fluxo completo de usuário. Seu site está disponível em português.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            O ponto forte é a ligação com o fluxo de trabalho de design: conecta-se ao Figma nos dois sentidos e oferece exportação de código limpo e sincronização com o GitHub.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o UX Pilot?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O UX Pilot gera quatro estilos de design de uma vez para comparação, cria wireframes de baixa a alta fidelidade e produz telas alinhadas à marca. Também converte esboços, PDFs e screenshots em layouts editáveis.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Ele adiciona estados e casos de borda às telas, gera jornadas de ponta a ponta, cria fluxogramas a partir de prompts simples e importa componentes do Figma para manter a consistência visual.
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
                <h3 className="text-xl font-semibold text-black mb-2">Descreva a tela ou o fluxo</h3>
                <p className="text-zinc-700">Escreva o que precisa, ou envie um esboço, PDF ou screenshot como ponto de partida.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Compare estilos</h3>
                <p className="text-zinc-700">A ferramenta gera quatro estilos ao mesmo tempo para você escolher a direção.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Refine no Figma ou na ferramenta</h3>
                <p className="text-zinc-700">Importe componentes do Figma para manter a consistência e ajuste as telas geradas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Entregue</h3>
                <p className="text-zinc-700">Exporte para o Figma, exporte código limpo ou sincronize o código com o GitHub.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Wireframes de baixa a alta fidelidade",
              "Telas alinhadas à marca",
              "Fluxos de usuário completos",
              "Estados e casos de borda",
              "Fluxogramas a partir de prompts",
              "Esboços e screenshots em layouts editáveis",
              "Exploração de estilos visuais",
              "Entrega de código para desenvolvedores"
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
              <h3 className="text-xl font-semibold text-black mb-3">Quatro estilos de uma vez</h3>
              <p className="text-zinc-700">Gera variações de estilo em paralelo para comparar direções.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Wireframes e telas por IA</h3>
              <p className="text-zinc-700">Cria wireframes de baixa a alta fidelidade e telas alinhadas à marca.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Fluxos de ponta a ponta</h3>
              <p className="text-zinc-700">Gera jornadas completas, com estados e casos de borda.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Esboço, PDF ou screenshot para layout</h3>
              <p className="text-zinc-700">Converte arquivos de referência em layouts editáveis.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Figma e código</h3>
              <p className="text-zinc-700">Conexão bidirecional com o Figma, exportação de código limpo e sincronização com o GitHub.</p>
            </div>
          </div>
        </section>

        {/* Preços */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Planos e preços</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O site informa que é possível começar a gerar gratuitamente, mas não detalha limites do plano gratuito nem valores dos planos na página consultada.</p>
          <div className="grid gap-3">
            {[
              "Início gratuito: o site convida a começar a gerar designs sem custo.",
              "Planos pagos: os valores ficam em uma página de planos separada (uxpilot.ai/plans), que não pôde ser consultada. Confirme lá os preços e limites atuais."
            ].map((item, index) => (
              <div key={index} className="p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <p className="text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-500 mt-3">Informações conferidas no site oficial em outubro de 2026. Confirme preços e limites na página de planos.</p>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Site disponível em português",
              "Conexão bidirecional com o Figma e importação de componentes",
              "Exporta código limpo e sincroniza com o GitHub",
              "Gera vários estilos de uma vez para comparar",
              "Aceita esboços, PDFs e screenshots como ponto de partida"
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
              "Os limites do início gratuito e os preços não aparecem na página principal",
              "A origem e a localização da empresa não são informadas no site",
              "Revisar acessibilidade e consistência com o design system continua sendo responsabilidade da equipe",
              "Quem não usa Figma aproveita menos a integração"
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o UX Pilot?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Designers de produto que trabalham no Figma</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Equipes que precisam levar o design para o código</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Quem quer comparar estilos rapidamente</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Quem prefere uma ferramenta com site em português</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Quem precisa saber o preço exato antes de testar</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Projetos que não passam por Figma nem por código</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Quem procura uma ferramenta totalmente offline</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Gere suas primeiras telas com IA</h2>
          <p className="text-lg mb-6 text-zinc-300">Comece gratuitamente no UX Pilot e compare estilos de design em minutos.</p>
          <a
            href="https://uxpilot.ai/pt"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Experimentar o UX Pilot →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O UX Pilot reúne geração de telas e fluxos com uma ligação direta ao Figma e ao código, o que o torna interessante para equipes que já têm esse fluxo de trabalho. O site em português ajuda quem trabalha no Brasil.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Como os limites do plano gratuito e os preços não estão na página principal, o caminho mais seguro é começar de graça com um projeto real e consultar a página de planos antes de assinar.
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
