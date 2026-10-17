import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Relume - Sitemap, Wireframes e Sites de Marketing com IA",
  description: "Conheça o Relume: ferramenta que gera sitemap, wireframes e site de marketing a partir de um briefing, com mais de 1.000 componentes e exportação para Figma, Webflow e React. Veja planos, vantagens e desvantagens.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/relume",
  },
  openGraph: {
    title: "Relume - Sitemap, Wireframes e Sites de Marketing com IA",
    description: "Conheça o Relume: ferramenta que gera sitemap, wireframes e site de marketing a partir de um briefing, com mais de 1.000 componentes e exportação para Figma, Webflow e React. Veja planos, vantagens e desvantagens.",
    url: "https://www.hypehour.com.br/ferramentas/relume",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Relume - Sitemap, Wireframes e Sites de Marketing com IA",
    description: "Conheça o Relume: ferramenta que gera sitemap, wireframes e site de marketing a partir de um briefing, com mais de 1.000 componentes e exportação para Figma, Webflow e React. Veja planos, vantagens e desvantagens.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function RelumePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.hypehour.com.br/ferramentas/relume#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/relume",
        "name": "Relume - Sitemap, Wireframes e Sites de Marketing com IA",
        "description": "Conheça o Relume: ferramenta que gera sitemap, wireframes e site de marketing a partir de um briefing, com mais de 1.000 componentes e exportação para Figma, Webflow e React. Veja planos, vantagens e desvantagens.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/relume#breadcrumb" },
        "datePublished": "2026-10-17",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/relume#software" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/relume#breadcrumb",
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
            "name": "Relume",
            "item": "https://www.hypehour.com.br/ferramentas/relume"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/relume#software",
        "name": "Relume",
        "description": "Conheça o Relume: ferramenta que gera sitemap, wireframes e site de marketing a partir de um briefing, com mais de 1.000 componentes e exportação para Figma, Webflow e React. Veja planos, vantagens e desvantagens.",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web",
        "url": "https://www.relume.ai/",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/relume#webpage" },
        "image": "https://www.hypehour.com.br/logo.png",
        "featureList": ["Sitemap e wireframes por IA", "Biblioteca com mais de 1.000 componentes", "Exportação para Figma, Webflow e React", "Publicação hospedada", "Relume MCP"],
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Plano gratuito disponível" },
        "creator": {
          "@type": "Organization",
          "name": "Relume"
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
          <span className="text-black font-medium">Relume</span>
        </nav>

        {/* Header com logo e nome */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            R
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Relume</h1>
            <p className="text-lg text-zinc-700">Ferramenta de IA que gera sitemap, wireframes e site de marketing a partir de um briefing</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O Relume foi pensado para quem constrói sites de marketing e quer encurtar as primeiras etapas do projeto. A partir de um briefing, a ferramenta gera o sitemap, os wireframes e um site, usando uma biblioteca de componentes responsivos.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            O site posiciona a ferramenta para freelancers e agências. Esta página explica o que ela entrega, os planos disponíveis e as limitações que você deve levar em conta.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Relume?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Relume é uma plataforma que combina geração por IA com uma biblioteca de mais de 1.000 componentes React responsivos, descritos pelo site como feitos por humanos, acessíveis e prontos para SEO e AEO.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            O resultado pode ser publicado com domínio próprio, SSL e CDN global, ou exportado para Figma, Webflow e React (com Tailwind CSS e shadcn/ui). Também há um servidor MCP do Relume para uso com ferramentas de IA.
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
                <h3 className="text-xl font-semibold text-black mb-2">Escreva o briefing</h3>
                <p className="text-zinc-700">Descreva o negócio e o objetivo do site para que a IA tenha contexto.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Gere o sitemap</h3>
                <p className="text-zinc-700">A ferramenta propõe a estrutura de páginas do site a partir do briefing.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Gere os wireframes</h3>
                <p className="text-zinc-700">Cada página recebe wireframes montados com componentes da biblioteca.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Publique ou exporte</h3>
                <p className="text-zinc-700">Publique no próprio Relume ou exporte para Figma, Webflow ou React.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Sites institucionais",
              "Landing pages",
              "Sitemaps de novos projetos",
              "Wireframes para aprovação de clientes",
              "Protótipos no Figma",
              "Sites no Webflow",
              "Projetos de agências",
              "Trabalho de freelancers"
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
              <h3 className="text-xl font-semibold text-black mb-3">Sitemap e wireframes por IA</h3>
              <p className="text-zinc-700">Gera a estrutura do site e os wireframes de cada página a partir de um briefing.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Biblioteca com mais de 1.000 componentes</h3>
              <p className="text-zinc-700">Componentes React responsivos, descritos como acessíveis e prontos para SEO e AEO.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Exportação para Figma, Webflow e React</h3>
              <p className="text-zinc-700">Leva o resultado para Figma, Webflow ou React com Tailwind CSS e shadcn/ui.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Publicação hospedada</h3>
              <p className="text-zinc-700">Publica o site com domínio personalizado, SSL, CDN global e SLO de 99,99% de disponibilidade.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Relume MCP</h3>
              <p className="text-zinc-700">Servidor MCP para conectar a biblioteca a ferramentas de IA.</p>
            </div>
          </div>
        </section>

        {/* Preços */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Planos e preços</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O Relume separa os planos em duas linhas: a biblioteca de componentes (Build with Relume) e o gerador de sites (Site Builder). O site não lista preços anuais.</p>
          <div className="grid gap-3">
            {[
              "Biblioteca, plano Free: US$ 0. Inclui 30 componentes Webflow, mais de 1.000 componentes Figma, até 10 componentes armazenados e compartilhamento privado com até 3 pessoas.",
              "Biblioteca, plano Pro: a partir de US$ 14 por mês, com sites ilimitados, uso de IA e colaboração ilimitados.",
              "Site Builder, plano Free: US$ 0, com 20 envios de formulário por mês e selo do Relume sempre exibido nos sites publicados.",
              "Site Builder, planos pagos: Starter a partir de US$ 18 por mês, Pro a partir de US$ 40 por mês, Team a partir de US$ 36 por mês (mínimo de 3 usuários) e Enterprise sob consulta."
            ].map((item, index) => (
              <div key={index} className="p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <p className="text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-500 mt-3">Valores em dólar conferidos no site oficial em outubro de 2026. Preços e limites podem mudar; confirme na página de planos antes de assinar. O site também exibe um código de desconto para visitantes do Brasil.</p>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Gera sitemap, wireframes e site em um só fluxo",
              "Biblioteca grande de componentes responsivos",
              "Exporta para Figma, Webflow e React",
              "Publicação hospedada com domínio próprio, SSL e CDN",
              "Plano gratuito disponível nas duas linhas de produto"
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
              "O foco são sites de marketing, não aplicativos ou produtos digitais complexos",
              "No plano gratuito do Site Builder, o selo do Relume aparece nos sites e há limite de 20 envios de formulário por mês",
              "O site não informa se há interface ou suporte em português",
              "Os preços estão em dólar e o site não lista valores anuais"
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Relume?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Freelancers que montam sites de marketing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Agências que precisam padronizar wireframes</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Equipes que trabalham com Figma ou Webflow</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Quem quer partir de um sitemap pronto</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Interfaces de aplicativos com muita lógica de produto</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Quem precisa de site sem selo da ferramenta no plano gratuito</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Projetos que exigem interface em português garantida</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Gere o sitemap do seu próximo site</h2>
          <p className="text-lg mb-6 text-zinc-300">Comece gratuitamente no Relume e veja os wireframes gerados a partir de um briefing.</p>
          <a
            href="https://www.relume.ai/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Experimentar o Relume →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Relume se destaca por cobrir a etapa inicial de sites de marketing de ponta a ponta, do sitemap à publicação, com componentes e exportações que conversam com ferramentas já usadas por designers e desenvolvedores.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Para decidir, compare o que você precisa: se for só a biblioteca de componentes, o plano gratuito pode bastar; se for gerar e publicar sites, avalie os limites do Site Builder e o custo por usuário.
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
