import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Dzine - Geração e Edição de Imagens com IA",
  description: "Conheça o Dzine: plataforma de IA para gerar imagens, aplicar face swap, generative fill e criar visuais criativos. Veja vantagens, desvantagens e para quem é indicado.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/dzine",
  },
  openGraph: {
    title: "Dzine - Geração e Edição de Imagens com IA",
    description: "Conheça o Dzine: plataforma de IA para gerar imagens, aplicar face swap, generative fill e criar visuais criativos.",
    url: "https://www.hypehour.com.br/ferramentas/dzine",
    siteName: "Hypehour",
    images: [{ url: "https://www.hypehour.com.br/logo.png" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dzine - Geração e Edição de Imagens com IA",
    description: "Gere imagens, aplique face swap e edite com generative fill usando o Dzine.",
    images: ["https://www.hypehour.com.br/logo.png"],
    creator: "@hypehourbr",
  },
};

export default function DzinePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/dzine#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypehour.com.br/" },
          { "@type": "ListItem", "position": 2, "name": "IA para Imagens", "item": "https://www.hypehour.com.br/ia-para-imagens" },
          { "@type": "ListItem", "position": 3, "name": "Dzine", "item": "https://www.hypehour.com.br/ferramentas/dzine" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/dzine#software",
        "name": "Dzine",
        "description": "Plataforma de criação e edição de imagens com IA com geração por texto, generative fill, face swap e retratos estilizados.",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Web",
        "url": "https://www.dzine.ai/",
        "mainEntityOfPage": "https://www.hypehour.com.br/ferramentas/dzine",
        "creator": { "@type": "Organization", "name": "Dzine" },
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
          <Link href="/ia-para-imagens" className="hover:text-black transition">IA para Imagens</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Dzine</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            D
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Dzine</h1>
            <p className="text-lg text-zinc-700">Gere e edite imagens com IA — face swap, generative fill e muito mais</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O Dzine é uma plataforma criativa de inteligência artificial que combina geração de imagens por texto com ferramentas avançadas de edição como face swap, generative fill e criação de retratos estilizados. A plataforma foi desenvolvida para criadores de conteúdo que precisam de versatilidade criativa em um único ambiente.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Ideal para criadores de conteúdo para redes sociais, designers em busca de agilidade, fotógrafos que querem explorar edição com IA e qualquer pessoa que queira criar visuais impressionantes sem curva de aprendizado de softwares profissionais.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Dzine?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Dzine é uma ferramenta de IA para criação visual que se posiciona entre os geradores de imagem puros e os editores de imagem tradicionais. A plataforma oferece geração de imagens de alta qualidade a partir de texto, mas vai além ao incluir ferramentas de edição inteligente que permitem modificar, transformar e aprimorar imagens existentes.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            O diferencial do Dzine está na combinação de recursos em um ambiente integrado: você gera uma imagem, aplica edições com IA, faz um face swap ou usa o generative fill para ajustar elementos — tudo sem precisar alternar entre diferentes ferramentas.
          </p>
        </section>

        {/* Como funciona */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[
              { n: 1, titulo: "Escolha a ferramenta ou gere uma imagem", texto: "Comece gerando uma imagem a partir de um texto descritivo ou faça upload de uma foto para editar com as ferramentas de IA disponíveis." },
              { n: 2, titulo: "Aplique a ferramenta desejada", texto: "Use face swap para trocar rostos, generative fill para modificar áreas específicas, ou escolha um estilo artístico para transformar a imagem." },
              { n: 3, titulo: "Ajuste e refine", texto: "Gere variações, ajuste parâmetros de estilo, intensidade e composição até obter o resultado desejado." },
              { n: 4, titulo: "Baixe e publique", texto: "Exporte a imagem final em alta resolução e use em redes sociais, projetos criativos, campanhas ou qualquer outra aplicação." },
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
              "Geração de imagens por texto",
              "Face swap com IA",
              "Generative fill e inpainting",
              "Retratos artísticos estilizados",
              "Edição inteligente de fotos",
              "Conteúdo visual para redes sociais",
              "Criação de personagens e avatares",
              "Transformação de fotos em ilustrações",
              "Campainhas e banners criativos",
              "Concept art e prototipação visual",
              "Fotos de perfil estilizadas",
              "Conteúdo para campanhas de marketing",
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
              { titulo: "Geração de imagens (Text-to-Image)", texto: "Crie imagens a partir de descrições textuais com múltiplos estilos — realista, anime, pintura, fantasia e outros — com controle sobre proporção, qualidade e composição." },
              { titulo: "Face Swap", texto: "Substitua rostos em imagens de forma natural e convincente, mantendo iluminação, expressão e contexto da cena originais." },
              { titulo: "Generative Fill", texto: "Selecione qualquer área da imagem e preencha com conteúdo gerado por IA — adicione, remova ou substitua elementos mantendo coerência visual com o restante da imagem." },
              { titulo: "Retratos estilizados", texto: "Transforme fotos comuns em retratos com estilos artísticos distintos como anime, pintura a óleo, aquarela, fantasia e outros, com alta qualidade e consistência." },
              { titulo: "Image-to-Image", texto: "Use uma imagem de referência para guiar a geração de novas imagens, mantendo composição, paleta de cores ou estilo da original com variações criativas." },
              { titulo: "Edição por prompt", texto: "Descreva o que quer alterar em uma imagem existente e a IA aplica as modificações de forma inteligente, sem necessidade de seleção manual precisa." },
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
              "Suite criativa completa — geração, edição, face swap e generative fill em uma plataforma",
              "Fácil de usar — interface acessível sem curva de aprendizado técnica",
              "Plano gratuito disponível — créditos para testar antes de assinar",
              "Múltiplos estilos artísticos — variedade para diferentes tipos de conteúdo",
              "Face swap de qualidade — resultados naturais e convincentes",
              "Versatilidade criativa — serve para iniciantes e criadores experientes",
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
              "Créditos gratuitos limitados — uso frequente exige plano pago",
              "Interface em inglês — sem versão em português",
              "Resultados de geração variam — prompts vagos produzem resultados menos precisos",
              "Sem edição avançada com camadas — não substitui Photoshop para projetos complexos",
              "Face swap exige uso responsável — verifique as políticas de uso antes de aplicar em terceiros",
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Dzine?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {[
                  "Criadores de conteúdo para redes sociais",
                  "Designers que buscam agilidade criativa",
                  "Fotógrafos interessados em edição com IA",
                  "Profissionais de marketing visual",
                  "Entusiastas de arte digital e concept art",
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
                  "Projetos com edição técnica avançada em camadas",
                  "Trabalhos que exigem controle preciso pixel a pixel",
                  "Quem precisa de resultados 100% consistentes e previsíveis",
                  "Produção em volume muito alto sem plano adequado",
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
          <h2 className="text-3xl font-bold mb-4">Crie imagens incríveis com IA</h2>
          <p className="text-lg mb-6 text-zinc-300">Experimente o Dzine gratuitamente e explore todas as ferramentas de criação e edição com IA</p>
          <a
            href="https://www.dzine.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Acessar Dzine →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Dzine se destaca por reunir geração e edição de imagens com IA em uma plataforma acessível e versátil. Para criadores que precisam tanto de gerar imagens novas quanto de editar fotos existentes com recursos como face swap e generative fill, a plataforma oferece uma solução integrada que elimina a necessidade de usar múltiplas ferramentas.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            É uma escolha sólida para quem quer explorar o que a IA pode fazer na criação visual sem investimento inicial — e uma ferramenta que cresce conforme as necessidades do criador evoluem.
          </p>
        </section>

        <FAQSection />


        {/* Ferramentas Similares */}

        <SimilarTools />
      </div>
    </main>
  );
}
