import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Collov AI - Design de Interiores com IA e Produtos Reais",
  description: "Conheça o Collov AI: plataforma de design de interiores com IA que redesenha ambientes com produtos reais de lojas parceiras. Veja vantagens, desvantagens e para quem é indicado.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/collov-ai",
  },
  openGraph: {
    title: "Collov AI - Design de Interiores com IA e Produtos Reais",
    description: "Redesenhe seus ambientes com IA e visualize produtos reais disponíveis para compra com o Collov AI.",
    url: "https://www.hypehour.com.br/ferramentas/collov-ai",
    siteName: "Hypehour",
    images: [{ url: "https://www.hypehour.com.br/logo.png" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Collov AI - Design de Interiores com IA e Produtos Reais",
    description: "Redesenhe ambientes com IA e descubra produtos reais para comprar — tudo no Collov AI.",
    images: ["https://www.hypehour.com.br/logo.png"],
    creator: "@hypehourbr",
  },
};

export default function CollovAIPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/collov-ai#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypehour.com.br/" },
          { "@type": "ListItem", "position": 2, "name": "IA para Design de Interiores", "item": "https://www.hypehour.com.br/ia-para-design-de-interiores" },
          { "@type": "ListItem", "position": 3, "name": "Collov AI", "item": "https://www.hypehour.com.br/ferramentas/collov-ai" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/collov-ai#software",
        "name": "Collov AI",
        "description": "Plataforma de design de interiores com IA que redesenha ambientes e integra catálogos de produtos reais para compra direta.",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web",
        "url": "https://collov.ai/",
        "mainEntityOfPage": "https://www.hypehour.com.br/ferramentas/collov-ai",
        "creator": { "@type": "Organization", "name": "Collov AI" },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-zinc-700 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="text-zinc-400">/</span>
          <Link href="/ia-para-design-de-interiores" className="hover:text-black transition">IA para Design de Interiores</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Collov AI</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            C
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Collov AI</h1>
            <p className="text-lg text-zinc-700">Redesenhe ambientes com IA e visualize produtos reais para comprar</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O Collov AI é uma plataforma de design de interiores com inteligência artificial que vai além da simples geração de imagens: além de redesenhar qualquer ambiente a partir de uma foto, o sistema integra catálogos de produtos reais de lojas parceiras, permitindo visualizar e adquirir diretamente os móveis e itens de decoração que aparecem no projeto gerado.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Ideal para quem está planejando uma reforma ou decoração e quer não apenas se inspirar, mas também encontrar e comprar os produtos que transformarão o projeto em realidade — tudo na mesma plataforma.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Collov AI?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Collov AI é uma plataforma americana de design de interiores impulsionada por IA que conecta geração de imagens com comércio de produtos de decoração. O sistema analisa fotos de ambientes reais, aplica estilos decorativos escolhidos pelo usuário e gera versões redesenhadas do espaço mantendo a estrutura arquitetônica original.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            O diferencial competitivo está na ponte entre inspiração e execução: os produtos que aparecem nos renders gerados pela IA são reais, disponíveis em lojas parceiras, com preços e links de compra — eliminando o gap entre "quero esse visual" e "onde compro esses móveis".
          </p>
        </section>

        {/* Como funciona */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[
              { n: 1, titulo: "Fotografe o ambiente", texto: "Tire uma foto do cômodo que deseja redesenhar — sala, quarto, cozinha, escritório ou qualquer espaço residencial ou comercial — e faça upload na plataforma." },
              { n: 2, titulo: "Escolha o estilo", texto: "Selecione o estilo decorativo desejado entre dezenas de opções: moderno, escandinavo, industrial, minimalista, boho, clássico e muitos outros." },
              { n: 3, titulo: "IA gera o redesign", texto: "O Collov AI processa a imagem e gera versões redesenhadas do ambiente com novos móveis, cores e decoração no estilo escolhido, preservando as proporções e estrutura real do espaço." },
              { n: 4, titulo: "Explore e compre os produtos", texto: "Navegue pelos produtos reais sugeridos no design, acesse os links das lojas parceiras e adquira os itens diretamente para executar o projeto na vida real." },
            ].map(({ n, titulo, texto }) => (
              <div key={n} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">{n}</div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">{titulo}</h3>
                  <p className="text-zinc-700">{texto}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Redesign de ambientes residenciais",
              "Visualização de estilos de decoração",
              "Home staging virtual para imóveis",
              "Planejamento de reforma",
              "Apresentação de propostas para clientes",
              "Descoberta de produtos reais para compra",
              "Inspiração para decoração de interiores",
              "Redesign de escritórios e espaços comerciais",
              "Comparação de estilos no mesmo cômodo",
              "Prototipação visual para projetos",
              "Decoração de imóveis para venda ou aluguel",
              "Exploração de paletas de cores e materiais",
            ].map((item, i) => (
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition">
                <p className="text-zinc-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Principais funcionalidades */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[
              { titulo: "Redesign de ambientes com IA", texto: "Transforma fotos reais de cômodos em projetos de design de interiores profissionais, preservando estrutura arquitetônica e dimensões do espaço original." },
              { titulo: "Catálogo de produtos reais integrado", texto: "Os móveis e itens de decoração sugeridos no projeto são produtos reais de lojas parceiras, com preços e links diretos para compra — do virtual ao real em poucos cliques." },
              { titulo: "Dezenas de estilos decorativos", texto: "Moderno, minimalista, escandinavo, industrial, boho, clássico, mid-century modern, japandi e muitos outros estilos disponíveis para aplicar no mesmo ambiente." },
              { titulo: "Home staging virtual", texto: "Ideal para o mercado imobiliário: transforma fotos de imóveis vazios ou desatualizados em espaços decorados e atrativos para anúncios de venda e locação." },
              { titulo: "Soluções B2B para empresas", texto: "API e integrações para varejistas de móveis, incorporadoras e plataformas de decoração que queiram oferecer a funcionalidade de redesign com IA aos seus clientes." },
              { titulo: "Múltiplas variações por ambiente", texto: "Gere diferentes versões do mesmo espaço com estilos distintos para comparar opções antes de tomar a decisão de decoração ou reforma." },
            ].map(({ titulo, texto }, i) => (
              <div key={i} className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-black mb-3">{titulo}</h3>
                <p className="text-zinc-700">{texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Produtos reais integrados — do render à compra sem sair da plataforma",
              "Preserva a estrutura do cômodo — resultados coerentes com o espaço real",
              "Dezenas de estilos — visualize o mesmo ambiente em múltiplas linguagens decorativas",
              "Ideal para home staging — transforma imóveis para o mercado imobiliário",
              "Soluções B2B robustas — API e integrações para varejistas e incorporadoras",
              "Plano gratuito para começar — explore as funcionalidades antes de assinar",
            ].map((advantage, i) => (
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
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
              "Produtos de lojas parceiras principalmente americanas — disponibilidade limitada para compras no Brasil",
              "Plano gratuito com poucos renders — uso intenso exige upgrade",
              "Interface em inglês — sem versão em português",
              "Não substitui projeto técnico de arquitetura — é uma ferramenta de visualização e inspiração",
              "Qualidade do resultado depende da foto de entrada — imagens escuras ou distorcidas comprometem o redesign",
            ].map((d, i) => (
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                <span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span>
                <p className="text-zinc-700">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Para quem é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Collov AI?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {[
                  "Pessoas planejando reforma ou decoração",
                  "Corretores e imobiliárias com home staging virtual",
                  "Designers de interiores em apresentação de propostas",
                  "Varejistas de móveis com integração de IA",
                  "Arquitetos em fase de conceituação visual",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-black">→</span>
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {[
                  "Projeto técnico com plantas e especificações",
                  "Quem precisa de modelagem 3D precisa",
                  "Projetos com restrições muito específicas de espaço",
                  "Usuários que precisam de produtos disponíveis no Brasil",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-zinc-700">✕</span>
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Redesenhe seu ambiente com IA</h2>
          <p className="text-lg mb-6 text-zinc-300">Acesse o Collov AI e transforme qualquer cômodo em um projeto de design de interiores profissional</p>
          <a
            href="https://collov.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Acessar Collov AI →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Collov AI resolve um problema real de quem quer decorar ou reformar: a distância entre a inspiração visual e a execução prática. Ao integrar produtos reais aos renders gerados por IA, a plataforma transforma o processo de "gostei desse visual" em "posso comprar esses itens agora".
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Para o mercado imobiliário, é uma ferramenta poderosa de home staging virtual. Para designers, acelera a apresentação de conceitos. E para quem está decorando a própria casa, simplifica toda a jornada — da inspiração à compra.
          </p>
        </section>

        <FAQSection />


        {/* Ferramentas Similares */}

        <SimilarTools />
      </div>
    </main>
  );
}
