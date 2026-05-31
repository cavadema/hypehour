import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "insMind - Editor de Fotos com IA para Produtos e E-commerce",
  description: "Conheça o insMind: ferramenta de IA para remover fundos, gerar cenários com IA e criar fotos profissionais de produtos sem estúdio. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/insmind" },
  openGraph: {
    title: "insMind - Editor de Fotos com IA para Produtos e E-commerce",
    description: "Ferramenta de IA para remover fundos, gerar cenários e criar fotos profissionais de produtos sem precisar de estúdio.",
    url: "https://www.hypehour.com.br/ferramentas/insmind",
    siteName: "Hypehour",
    images: [{ url: "https://www.hypehour.com.br/logo.png" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "insMind - Editor de Fotos com IA para Produtos e E-commerce",
    description: "IA para remover fundos, gerar cenários e criar fotos profissionais de produtos sem precisar de estúdio.",
    images: ["https://www.hypehour.com.br/logo.png"],
    creator: "@hypehourbr",
  },
};

export default function InsMindPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/insmind#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hypehour.com.br/" },
          { "@type": "ListItem", position: 2, name: "IA para Imagens", item: "https://www.hypehour.com.br/ia-para-imagens" },
          { "@type": "ListItem", position: 3, name: "insMind", item: "https://www.hypehour.com.br/ferramentas/insmind" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/insmind#software",
        name: "insMind",
        description: "Editor de fotos com IA especializado em imagens de produtos, com remoção automática de fundo, geração de cenários por IA e edição em lote.",
        applicationCategory: "DesignApplication",
        operatingSystem: "Web",
        url: "https://www.insmind.com",
        mainEntityOfPage: "https://www.hypehour.com.br/ferramentas/insmind",
        creator: { "@type": "Organization", name: "insMind" },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <nav className="flex items-center gap-2 text-zinc-700 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="text-zinc-400">/</span>
          <Link href="/ia-para-imagens" className="hover:text-black transition">IA para Imagens</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">insMind</span>
        </nav>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">i</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">insMind</h1>
            <p className="text-lg text-zinc-700">Fotos profissionais de produtos com IA, sem estúdio</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O insMind é um editor de fotos com inteligência artificial focado em imagens de produtos para e-commerce. Remove fundos automaticamente, gera cenários realistas com IA por descrição em texto, aprimora a qualidade das imagens e permite edição em lote de todo o catálogo.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Ideal para lojistas, empreendedores e profissionais de marketing que precisam de fotos de produto com qualidade de estúdio, sem os custos de uma sessão fotográfica profissional.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o insMind?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            insMind é uma plataforma web de edição de imagens com IA especializada no segmento de e-commerce. Diferente de editores genéricos, foi projetado especificamente para resolver os desafios de quem precisa fotografar produtos: fundo branco, cenários criativos, alta resolução e processamento de muitas imagens de uma vez.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Com a geração de fundos por IA, você descreve em texto o ambiente desejado — "mesa de madeira com plantas ao fundo" — e a IA cria esse cenário em alta definição para o seu produto, sem precisar de um fotógrafo ou estúdio físico.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[
              ["1", "Faça upload da foto do produto", "Carregue a imagem do produto com qualquer fundo — a IA remove automaticamente sem precisar selecionar manualmente."],
              ["2", "Remoção automática de fundo", "O insMind detecta e remove o fundo com precisão, preservando detalhes finos como bordas, transparências e reflexos."],
              ["3", "Escolha ou gere um novo fundo", "Selecione um fundo da biblioteca ou descreva em texto o cenário que deseja — a IA gera em alta definição instantaneamente."],
              ["4", "Exporte e use", "Baixe a imagem final em PNG com fundo transparente, JPG com o novo cenário ou no formato ideal para cada plataforma."],
            ].map(([num, title, desc]) => (
              <div key={num} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">{num}</div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
                  <p className="text-zinc-700">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Fotos de produto para Shopify e WooCommerce", "Remoção de fundo automática", "Geração de cenários para produtos", "Imagens para marketplace (Mercado Livre, Amazon)", "Edição em lote de catálogos", "Aprimoramento de qualidade de fotos", "Remoção de objetos indesejados", "Criação de mockups de produto", "Fotos para Instagram e Pinterest", "Imagens para anúncios de Facebook/Google", "Variações de cor de produto", "Fotos de alimentos para delivery"].map((item, i) => (
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition">
                <p className="text-zinc-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[
              ["Remoção automática de fundo", "Detecta e remove o fundo de qualquer imagem com precisão, mesmo em bordas complexas como cabelos, vidros e objetos transparentes."],
              ["Geração de fundos com IA", "Descreva o cenário desejado em texto e a IA gera um fundo realista em alta definição, posicionando o produto naturalmente."],
              ["Edição em lote", "Processe dezenas ou centenas de imagens de uma vez, aplicando as mesmas operações em todo o catálogo automaticamente."],
              ["Upscaling e melhoria de qualidade", "Aumenta a resolução e a nitidez das imagens, transformando fotos de qualidade mediana em imagens profissionais."],
              ["Remoção de objetos", "Elimina elementos indesejados da imagem (sombras, reflexos, objetos de fundo) de forma inteligente e sem deixar rastros."],
              ["Interface em português", "Plataforma totalmente em português brasileiro, facilitando o uso por lojistas e criadores nacionais."],
            ].map(([title, desc]) => (
              <div key={title} className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-black mb-3">{title}</h3>
                <p className="text-zinc-700">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Interface em português — fácil de usar para qualquer lojista brasileiro",
              "Especializado em e-commerce — pensa nos problemas reais de quem vende online",
              "Edição em lote — processa centenas de fotos de uma vez, economizando horas de trabalho",
              "Geração de cenários por texto — cria ambientes profissionais sem precisar de estúdio físico",
              "Plano gratuito disponível — comece a usar sem custo para avaliar a qualidade",
              "Resultado profissional — qualidade comparável a fotos de estúdio a uma fração do custo",
            ].map((v, i) => (
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <span className="text-black font-bold text-lg flex-shrink-0">✓</span>
                <p className="text-zinc-700">{v}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {[
              "Créditos limitados no plano gratuito — catálogos grandes requerem plano pago",
              "Resultados dependem da qualidade da foto original — fotos muito escuras ou borradas limitam o resultado",
              "Não é um editor geral — focado em produto, não substitui o Photoshop para design complexo",
              "Geração de cenários pode não ser perfeita — sempre revise antes de publicar",
              "Política de privacidade das imagens — verifique como as fotos são armazenadas na plataforma",
            ].map((d, i) => (
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                <span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span>
                <p className="text-zinc-700">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o insMind?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Lojistas de e-commerce que fotografam seus próprios produtos", "Empreendedores com catálogos grandes que precisam de agilidade", "Social media managers que criam conteúdo de produto", "Restaurantes e delivery que precisam de fotos de alimentos", "Marcas que produzem conteúdo visual em escala"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Design gráfico avançado com texto e composições complexas", "Fotografia de moda que exige precisão em tecidos e texturas finas", "Quem precisa de edição não-destrutiva com camadas", "Projetos que exigem controle absoluto sobre cada pixel"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Fotos de produto profissionais sem estúdio</h2>
          <p className="text-lg mb-6 text-zinc-300">Teste o insMind gratuitamente e transforme suas fotos de produto agora</p>
          <a href="https://www.insmind.com/pt-br" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">
            Acessar insMind →
          </a>
        </section>

        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O insMind é uma das soluções mais completas e acessíveis para lojistas brasileiros que precisam de fotos de produto profissionais. A combinação de remoção de fundo precisa, geração de cenários por IA e edição em lote resolve os principais gargalos de quem vende online.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Se você tem uma loja virtual e ainda depende de fotos amadoras ou de um fotógrafo caro para cada produto, o insMind pode transformar completamente a qualidade visual da sua loja a um custo muito mais acessível.
          </p>
        </section>

        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
