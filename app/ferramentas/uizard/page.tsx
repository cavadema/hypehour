import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Uizard - Design de Interfaces com IA, Protótipos e Wireframes",
  description: "Conheça o Uizard: ferramenta de design de UI com IA que gera protótipos multitela a partir de texto, transforma screenshots e esboços em telas editáveis e tem plano gratuito. Veja preços, vantagens e desvantagens.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/uizard",
  },
  openGraph: {
    title: "Uizard - Design de Interfaces com IA, Protótipos e Wireframes",
    description: "Conheça o Uizard: ferramenta de design de UI com IA que gera protótipos multitela a partir de texto, transforma screenshots e esboços em telas editáveis e tem plano gratuito. Veja preços, vantagens e desvantagens.",
    url: "https://www.hypehour.com.br/ferramentas/uizard",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Uizard - Design de Interfaces com IA, Protótipos e Wireframes",
    description: "Conheça o Uizard: ferramenta de design de UI com IA que gera protótipos multitela a partir de texto, transforma screenshots e esboços em telas editáveis e tem plano gratuito. Veja preços, vantagens e desvantagens.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function UizardPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.hypehour.com.br/ferramentas/uizard#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/uizard",
        "name": "Uizard - Design de Interfaces com IA, Protótipos e Wireframes",
        "description": "Conheça o Uizard: ferramenta de design de UI com IA que gera protótipos multitela a partir de texto, transforma screenshots e esboços em telas editáveis e tem plano gratuito. Veja preços, vantagens e desvantagens.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/uizard#breadcrumb" },
        "datePublished": "2026-10-17",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/uizard#software" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/uizard#breadcrumb",
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
            "name": "Uizard",
            "item": "https://www.hypehour.com.br/ferramentas/uizard"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/uizard#software",
        "name": "Uizard",
        "description": "Conheça o Uizard: ferramenta de design de UI com IA que gera protótipos multitela a partir de texto, transforma screenshots e esboços em telas editáveis e tem plano gratuito. Veja preços, vantagens e desvantagens.",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web",
        "url": "https://uizard.io/",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/uizard#webpage" },
        "image": "https://www.hypehour.com.br/logo.png",
        "featureList": ["Autodesigner", "Screenshot Scanner", "Wireframe Scanner", "Geração de telas e temas", "Handoff para desenvolvedores"],
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Plano gratuito disponível" },
        "creator": {
          "@type": "Organization",
          "name": "Uizard"
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
          <span className="text-black font-medium">Uizard</span>
        </nav>

        {/* Header com logo e nome */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            U
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Uizard</h1>
            <p className="text-lg text-zinc-700">Ferramenta de design de interfaces com IA para criar protótipos a partir de texto, screenshots e esboços</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O Uizard é uma ferramenta de design de interfaces com inteligência artificial que reduz o caminho entre uma ideia de produto e um protótipo clicável. Em vez de começar de uma tela em branco, você descreve o que precisa, envia uma screenshot ou fotografa um esboço, e a ferramenta gera telas que podem ser editadas.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Segundo o próprio site, ele atende de gerentes de produto e designers a fundadores, agências e desenvolvedores. Esta página resume o que a ferramenta faz, quanto custa e quais limites você deve considerar antes de adotá-la.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Uizard?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Uizard é uma plataforma de design de UI com IA. O recurso central, o Autodesigner, gera protótipos editáveis de várias telas a partir de um texto e permite alterar qualquer componente descrevendo a mudança desejada.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Além disso, a ferramenta oferece o Screenshot Scanner, que transforma screenshots em mockups editáveis, e o Wireframe Scanner, que converte esboços feitos à mão em designs digitais. Também é possível gerar novas telas para projetos existentes e criar temas.
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
                <h3 className="text-xl font-semibold text-black mb-2">Descreva a ideia</h3>
                <p className="text-zinc-700">Escreva em texto o que o produto precisa ter e deixe o Autodesigner gerar um protótipo de várias telas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Ou parta de uma imagem</h3>
                <p className="text-zinc-700">Envie uma screenshot ou um esboço feito à mão para que o Screenshot Scanner ou o Wireframe Scanner criem uma versão editável.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Ajuste por descrição</h3>
                <p className="text-zinc-700">Peça mudanças em componentes descrevendo o que quer alterar, ou edite manualmente no editor.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Compartilhe e entregue</h3>
                <p className="text-zinc-700">Compartilhe o protótipo com a equipe e, no plano Pro ou superior, use o handoff para desenvolvedores em React e CSS.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Protótipos de apps e sites",
              "Wireframes de baixa fidelidade",
              "Validação de ideias com a equipe",
              "Transformar screenshots em mockups",
              "Digitalizar esboços feitos à mão",
              "Apresentações de produto para clientes",
              "Geração de temas visuais",
              "Novas telas para projetos existentes"
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
              <h3 className="text-xl font-semibold text-black mb-3">Autodesigner</h3>
              <p className="text-zinc-700">Gera protótipos editáveis de várias telas a partir de texto e permite modificar componentes descrevendo a mudança.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Screenshot Scanner</h3>
              <p className="text-zinc-700">Converte screenshots em mockups editáveis, útil para recriar ou estudar interfaces existentes.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Wireframe Scanner</h3>
              <p className="text-zinc-700">Transforma esboços desenhados à mão em designs digitais.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Geração de telas e temas</h3>
              <p className="text-zinc-700">Cria novas telas para projetos que já existem e gera temas visuais para o produto.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Handoff para desenvolvedores</h3>
              <p className="text-zinc-700">Nos planos pagos a partir do Pro, oferece entrega em React e CSS.</p>
            </div>
          </div>
        </section>

        {/* Preços */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Planos e preços</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O Uizard tem plano gratuito e planos pagos cobrados anualmente. O site não lista valores para cobrança mensal.</p>
          <div className="grid gap-3">
            {[
              "Free: US$ 0. Inclui 2 projetos, 3 gerações de IA por mês, 10 templates, até 5 telas por projeto e 400 componentes.",
              "Pro: US$ 12 por mês, cobrado anualmente. Inclui 500 gerações de IA por mês, até 100 projetos, projetos privados, handoff em React e CSS e todos os templates.",
              "Business: US$ 39 por mês, cobrado anualmente. Inclui 5.000 gerações de IA por mês, geração mais rápida, brand kit personalizado, projetos ilimitados e suporte prioritário.",
              "Enterprise: preço sob consulta, para equipes grandes, com gerações ilimitadas e configuração de design system."
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
              "Gera protótipos de várias telas a partir de texto, sem partir de uma tela em branco",
              "Aceita screenshots e esboços à mão como ponto de partida",
              "Plano gratuito para testar a ferramenta sem cartão",
              "Handoff para desenvolvedores em React e CSS nos planos pagos",
              "Atende perfis variados, de gerentes de produto a fundadores"
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
              "O plano gratuito é restrito: 2 projetos, 3 gerações de IA por mês e até 5 telas por projeto",
              "Os planos pagos são cobrados anualmente, e o site não lista valores mensais",
              "O site não informa se há interface ou suporte em português",
              "A origem e a localização da empresa não são informadas na página inicial"
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Uizard?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Gerentes de produto que precisam prototipar rápido</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Fundadores validando uma ideia antes de contratar design</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Designers que querem acelerar a primeira versão</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Quem tem esboços em papel ou screenshots de referência</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Projetos que exigem controle total de um design system complexo</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Quem precisa de interface em português garantida</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Uso intensivo de IA no plano gratuito (apenas 3 gerações por mês)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Crie seu primeiro protótipo com IA</h2>
          <p className="text-lg mb-6 text-zinc-300">Teste o Uizard gratuitamente e veja as telas geradas a partir de uma descrição.</p>
          <a
            href="https://uizard.io/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Experimentar o Uizard →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Uizard é uma opção prática para quem quer sair da ideia para um protótipo rápido, com recursos que aceitam texto, screenshots e esboços. O plano gratuito serve para conhecer o fluxo, mas os limites de gerações e projetos fazem com que o uso contínuo dependa de um plano pago.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Antes de assinar, vale testar com um projeto real pequeno, conferir como o handoff atende sua equipe de desenvolvimento e confirmar as condições da cobrança anual.
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
