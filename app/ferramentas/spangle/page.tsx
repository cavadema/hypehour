import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Spangle - Plataforma de IA para Descoberta de Produtos no Varejo",
  description: "Conheça o Spangle: plataforma de inteligência para comércio focada em varejistas enterprise, com AI Discovery, Paid Acquisition e Onsite Discovery. Veja o que oferece, resultados informados pela empresa e limitações.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/spangle",
  },
  openGraph: {
    title: "Spangle - Plataforma de IA para Descoberta de Produtos no Varejo",
    description: "Conheça o Spangle: plataforma de inteligência para comércio focada em varejistas enterprise, com AI Discovery, Paid Acquisition e Onsite Discovery. Veja o que oferece, resultados informados pela empresa e limitações.",
    url: "https://www.hypehour.com.br/ferramentas/spangle",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Spangle - Plataforma de IA para Descoberta de Produtos no Varejo",
    description: "Conheça o Spangle: plataforma de inteligência para comércio focada em varejistas enterprise, com AI Discovery, Paid Acquisition e Onsite Discovery. Veja o que oferece, resultados informados pela empresa e limitações.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function SpanglePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.hypehour.com.br/ferramentas/spangle#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/spangle",
        "name": "Spangle - Plataforma de IA para Descoberta de Produtos no Varejo",
        "description": "Conheça o Spangle: plataforma de inteligência para comércio focada em varejistas enterprise, com AI Discovery, Paid Acquisition e Onsite Discovery. Veja o que oferece, resultados informados pela empresa e limitações.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/spangle#breadcrumb" },
        "datePublished": "2026-10-17",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/spangle#software" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/spangle#breadcrumb",
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
            "name": "IA para Ecommerce",
            "item": "https://www.hypehour.com.br/ia-para-ecommerce"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Spangle",
            "item": "https://www.hypehour.com.br/ferramentas/spangle"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/spangle#software",
        "name": "Spangle",
        "description": "Conheça o Spangle: plataforma de inteligência para comércio focada em varejistas enterprise, com AI Discovery, Paid Acquisition e Onsite Discovery. Veja o que oferece, resultados informados pela empresa e limitações.",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": "https://www.spangle.ai/",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/spangle#webpage" },
        "image": "https://www.hypehour.com.br/logo.png",
        "featureList": ["AI Discovery", "Paid Acquisition", "Onsite Discovery", "Segurança e conformidade"],
        "creator": {
          "@type": "Organization",
          "name": "Spangle.ai, Inc."
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
          <Link href="/ia-para-ecommerce" className="hover:text-black transition">IA para Ecommerce</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Spangle</span>
        </nav>

        {/* Header com logo e nome */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            S
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Spangle</h1>
            <p className="text-lg text-zinc-700">Plataforma de inteligência de comércio com IA para varejistas enterprise</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O Spangle é uma plataforma de inteligência de comércio construída com IA para grandes varejistas. A proposta é transformar a descoberta de produtos feita por IA, como as respostas de assistentes e buscadores, em receita.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Diferente de ferramentas de autoatendimento, o Spangle é voltado a marcas enterprise e não divulga preços. Esta página resume o que o site afirma e o que você deve considerar antes de entrar em contato.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é a Spangle?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Spangle se descreve como uma plataforma de inteligência de comércio nativa em IA para o varejo enterprise. Ela reúne três produtos conectados: AI Discovery, Paid Acquisition e Onsite Discovery.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            A empresa é identificada no site como Spangle.ai, Inc., com Maju Kuruvilla no cargo de CEO &amp; Co-Founder. O site cita certificação SOC 2 Type II e reconhecimentos como a lista de startups de IA para acompanhar da BoF e um prêmio da NRF.
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
                <h3 className="text-xl font-semibold text-black mb-2">AI Discovery</h3>
                <p className="text-zinc-700">Ajuda marcas a aparecerem nas respostas de IA para perguntas de compradores e a converter essa visibilidade em receita.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Paid Acquisition</h3>
                <p className="text-zinc-700">Usa criativos e segmentação adaptativos para gerar mais receita com o tráfego pago que a marca já tem.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Onsite Discovery</h3>
                <p className="text-zinc-700">Oferece busca, recomendações e páginas de produto personalizadas para converter quem chega ao site.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Contato com a equipe</h3>
                <p className="text-zinc-700">O site convida a agendar um AI Discovery Sprint ou falar com o time, pois não há plano de autoatendimento descrito.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Visibilidade em respostas de IA",
              "Descoberta de produtos por IA",
              "Aumento de receita do tráfego pago",
              "Criativos e segmentação adaptativos",
              "Busca personalizada no site",
              "Recomendações de produtos",
              "Páginas de produto personalizadas",
              "Varejo de moda e acessórios"
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
              <h3 className="text-xl font-semibold text-black mb-3">AI Discovery</h3>
              <p className="text-zinc-700">Posiciona a marca nas respostas de IA para perguntas de compradores e busca converter isso em receita.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Paid Acquisition</h3>
              <p className="text-zinc-700">Criativo e segmentação adaptativos para extrair mais receita do tráfego pago existente.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Onsite Discovery</h3>
              <p className="text-zinc-700">Busca, recomendações e páginas de produto personalizadas dentro do site da loja.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Segurança e conformidade</h3>
              <p className="text-zinc-700">O site cita certificação SOC 2 Type II.</p>
            </div>
          </div>
        </section>

        {/* Preços */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Planos e preços</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O Spangle não publica preços. O site convida a agendar um AI Discovery Sprint ou a falar com a equipe.</p>
          <div className="grid gap-3">
            {[
              "Preço: sob consulta, sem valores divulgados no site.",
              "Contratação: o fluxo descrito no site passa por contato comercial, não por autoatendimento."
            ].map((item, index) => (
              <div key={index} className="p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <p className="text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-500 mt-3">Informações conferidas no site oficial em outubro de 2026.</p>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Cobre descoberta por IA, mídia paga e busca no site em uma só plataforma",
              "Focada no varejo enterprise, com clientes de moda citados no site",
              "Cita certificação SOC 2 Type II",
              "O site apresenta resultados de clientes, ainda que autodeclarados"
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
              "Voltada a varejistas enterprise, não a pequenas lojas",
              "Não divulga preços",
              "Os resultados citados no site (como aumento de 60% no ROAS em 8 semanas) são informados pela própria empresa",
              "O site não informa suporte em português nem as integrações disponíveis"
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é a Spangle?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Grandes varejistas e marcas de moda</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Times de ecommerce que investem em mídia paga</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Marcas que querem aparecer em respostas de IA</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Empresas dispostas a contratar via equipe comercial</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Pequenas lojas e MEIs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Quem precisa de preço público antes de conversar</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Quem busca uma ferramenta de autoatendimento</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Conheça a plataforma do Spangle</h2>
          <p className="text-lg mb-6 text-zinc-300">Veja os três produtos e agende um AI Discovery Sprint no site oficial.</p>
          <a
            href="https://www.spangle.ai/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Visitar o Spangle →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Spangle é uma opção para grandes varejistas que querem tratar a descoberta de produtos por IA como canal de receita, conectando visibilidade, mídia paga e experiência no site.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Como os preços e as integrações não são públicos e os resultados são autodeclarados, o passo prudente é pedir referências e detalhes técnicos na conversa comercial.
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
