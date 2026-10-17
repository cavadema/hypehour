import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Visily - Wireframes e Protótipos com IA para Quem Não é Designer",
  description: "Conheça o Visily: software de design de UI com IA que gera wireframes e protótipos a partir de texto, screenshots e diagramas, com plano gratuito e plugin do Figma. Veja planos, vantagens e desvantagens.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/visily",
  },
  openGraph: {
    title: "Visily - Wireframes e Protótipos com IA para Quem Não é Designer",
    description: "Conheça o Visily: software de design de UI com IA que gera wireframes e protótipos a partir de texto, screenshots e diagramas, com plano gratuito e plugin do Figma. Veja planos, vantagens e desvantagens.",
    url: "https://www.hypehour.com.br/ferramentas/visily",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Visily - Wireframes e Protótipos com IA para Quem Não é Designer",
    description: "Conheça o Visily: software de design de UI com IA que gera wireframes e protótipos a partir de texto, screenshots e diagramas, com plano gratuito e plugin do Figma. Veja planos, vantagens e desvantagens.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function VisilyPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.hypehour.com.br/ferramentas/visily#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/visily",
        "name": "Visily - Wireframes e Protótipos com IA para Quem Não é Designer",
        "description": "Conheça o Visily: software de design de UI com IA que gera wireframes e protótipos a partir de texto, screenshots e diagramas, com plano gratuito e plugin do Figma. Veja planos, vantagens e desvantagens.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/visily#breadcrumb" },
        "datePublished": "2026-10-17",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/visily#software" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/visily#breadcrumb",
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
            "name": "Visily",
            "item": "https://www.hypehour.com.br/ferramentas/visily"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/visily#software",
        "name": "Visily",
        "description": "Conheça o Visily: software de design de UI com IA que gera wireframes e protótipos a partir de texto, screenshots e diagramas, com plano gratuito e plugin do Figma. Veja planos, vantagens e desvantagens.",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web",
        "url": "https://www.visily.ai/",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/visily#webpage" },
        "image": "https://www.hypehour.com.br/logo.png",
        "featureList": ["Wireframes por IA", "Edição com chat e arrastar e soltar", "Smart Components e Auto-Prototyping", "Colaboração em tempo real", "Figma, código e MCP"],
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Plano gratuito disponível" },
        "creator": {
          "@type": "Organization",
          "name": "Visily"
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
          <span className="text-black font-medium">Visily</span>
        </nav>

        {/* Header com logo e nome */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            V
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Visily</h1>
            <p className="text-lg text-zinc-700">Software de UI com IA que transforma ideias em wireframes e protótipos, pensado para não designers</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O Visily é um software de design de interfaces com IA feito para quem não é designer: gerentes de produto, fundadores e equipes que precisam apresentar uma ideia a clientes ou executivos. Ele gera wireframes e protótipos a partir de texto, screenshots, diagramas ou templates.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Também oferece recursos de colaboração em tempo real, o que o aproxima de um quadro de trabalho compartilhado entre produto, design e desenvolvimento.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Visily?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Visily gera wireframes por IA a partir de prompts de texto, screenshots, diagramas ou templates. O editor combina arrastar e soltar com um chat de IA para alterar o design, e inclui Smart Components e Auto-Prototyping.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            A colaboração inclui comentários em tempo real, chat de cursor, modo seguidor e bibliotecas compartilhadas, além de recursos de diagramação e anotação. Há um plugin do Figma e, nos planos pagos, importação e exportação com o Figma, exportação de código e um servidor MCP.
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
                <h3 className="text-xl font-semibold text-black mb-2">Escolha o ponto de partida</h3>
                <p className="text-zinc-700">Use um prompt de texto, uma screenshot, um diagrama ou um template.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Gere o wireframe</h3>
                <p className="text-zinc-700">A IA cria as telas e você ajusta com o chat ou arrastando componentes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Prototipe</h3>
                <p className="text-zinc-700">Use Smart Components e Auto-Prototyping para conectar as telas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Colabore e exporte</h3>
                <p className="text-zinc-700">Comente em tempo real com o time e, nos planos pagos, exporte para o Figma ou como código.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Wireframes de produtos digitais",
              "Protótipos para apresentar a clientes",
              "Validação de ideias de startup",
              "Transformar diagramas em telas",
              "Estudar interfaces a partir de screenshots",
              "Revisão de design com a equipe",
              "Anotações e diagramação",
              "Handoff para o Figma"
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
              <h3 className="text-xl font-semibold text-black mb-3">Wireframes por IA</h3>
              <p className="text-zinc-700">Geração a partir de texto, screenshots, diagramas ou templates.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Edição com chat e arrastar e soltar</h3>
              <p className="text-zinc-700">Altera o design por conversa ou diretamente no editor.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Smart Components e Auto-Prototyping</h3>
              <p className="text-zinc-700">Acelera a montagem de telas e a ligação entre elas.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Colaboração em tempo real</h3>
              <p className="text-zinc-700">Comentários, chat de cursor, modo seguidor e bibliotecas compartilhadas.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Figma, código e MCP</h3>
              <p className="text-zinc-700">Plugin do Figma e, nos planos pagos, importação e exportação com Figma, exportação de código e servidor MCP.</p>
            </div>
          </div>
        </section>

        {/* Preços */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Planos e preços</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O Visily tem plano gratuito (Starter) e planos pagos cobrados por editor.</p>
          <div className="grid gap-3">
            {[
              "Starter (gratuito): US$ 0. Inclui 300 créditos de IA por mês, design padrão por IA, 2 boards editáveis por workspace, 2.500 elementos por board, prompts de até 4.000 caracteres e exportações em 1x com marca d'água.",
              "Pro: US$ 14 por editor por mês. Inclui 3.000 créditos de IA por mês, AI deep design, boards e elementos ilimitados, importação e exportação com o Figma, exportação de código e servidor MCP.",
              "Business: US$ 29 por editor por mês, cobrado anualmente. Inclui 10.000 créditos de IA por mês, tudo do Pro, SAML SSO, gestão de equipe, biblioteca do workspace, 30 dias de histórico de versões e suporte prioritário.",
              "Enterprise: plano personalizado, sob consulta."
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
              "Pensado para quem não é designer",
              "Gera wireframes a partir de texto, screenshots, diagramas e templates",
              "Plano gratuito com 300 créditos de IA por mês",
              "Ferramentas de colaboração em tempo real",
              "Plugin do Figma e opções de exportação nos planos pagos"
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
              "No plano gratuito há apenas 2 boards editáveis por workspace e as exportações levam marca d'água",
              "Importação e exportação com o Figma e exportação de código ficam nos planos pagos",
              "O site não informa idiomas suportados nem a origem da empresa",
              "O Pro é cobrado por editor, o que aumenta o custo em equipes maiores"
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Visily?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Gerentes de produto sem formação em design</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Fundadores que apresentam ideias a investidores e clientes</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Equipes que querem colaborar no mesmo quadro</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Quem já usa o Figma e quer um ponto de partida rápido</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Quem precisa de exportações sem marca d&apos;água no plano gratuito</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Projetos com muitos boards no plano gratuito</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Quem exige interface em português garantida</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Transforme sua ideia em wireframe</h2>
          <p className="text-lg mb-6 text-zinc-300">Comece no plano gratuito do Visily e gere sua primeira tela com IA.</p>
          <a
            href="https://www.visily.ai/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Experimentar o Visily →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Visily atende bem quem precisa de wireframes e protótipos sem ser designer, com geração por IA e recursos de colaboração. As exportações e integrações mais relevantes, porém, ficam nos planos pagos.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Use o plano gratuito para validar a qualidade do resultado e conte o número de editores antes de projetar o custo mensal do Pro ou do Business.
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
