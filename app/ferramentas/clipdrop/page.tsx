import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "ClipDrop - Suite de Ferramentas de IA para Edição de Imagens",
  description: "Conheça o ClipDrop: suite de ferramentas de IA para remover fundo, limpar objetos, fazer upscaling e gerar imagens. Veja vantagens, desvantagens e para quem é indicado.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/clipdrop",
  },
  openGraph: {
    title: "ClipDrop - Suite de Ferramentas de IA para Edição de Imagens",
    description: "Conheça o ClipDrop: suite de ferramentas de IA para remover fundo, limpar objetos, fazer upscaling e gerar imagens.",
    url: "https://www.hypehour.com.br/ferramentas/clipdrop",
    siteName: "Hypehour",
    images: [{ url: "https://www.hypehour.com.br/logo.png" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClipDrop - Suite de Ferramentas de IA para Edição de Imagens",
    description: "Remova fundos, limpe objetos, faça upscaling e gere imagens com IA — tudo no ClipDrop.",
    images: ["https://www.hypehour.com.br/logo.png"],
    creator: "@hypehourbr",
  },
};

export default function ClipDropPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/clipdrop#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypehour.com.br/" },
          { "@type": "ListItem", "position": 2, "name": "IA para Imagens", "item": "https://www.hypehour.com.br/ia-para-imagens" },
          { "@type": "ListItem", "position": 3, "name": "ClipDrop", "item": "https://www.hypehour.com.br/ferramentas/clipdrop" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/clipdrop#software",
        "name": "ClipDrop",
        "description": "Suite de ferramentas de IA para edição de imagens com remoção de fundo, upscaling, limpeza de objetos e geração de imagens com Stable Diffusion.",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Web, iOS, Android",
        "url": "https://clipdrop.co/",
        "mainEntityOfPage": "https://www.hypehour.com.br/ferramentas/clipdrop",
        "creator": { "@type": "Organization", "name": "Stability AI" },
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
          <span className="text-black font-medium">ClipDrop</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            C
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">ClipDrop</h1>
            <p className="text-lg text-zinc-700">Suite de ferramentas de IA para edição de imagens da Stability AI</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O ClipDrop é uma suite completa de ferramentas de inteligência artificial para edição e geração de imagens, desenvolvida pela Stability AI — a empresa por trás do Stable Diffusion. A plataforma reúne em um só lugar recursos que normalmente exigiriam múltiplos softwares: remoção de fundo, limpeza de objetos, upscaling, remoção de texto e geração de imagens com IA.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Ideal para designers, fotógrafos, equipes de e-commerce e criadores de conteúdo que precisam editar imagens com agilidade e qualidade sem depender de softwares complexos ou habilidades avançadas em edição.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o ClipDrop?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            ClipDrop é uma plataforma de edição de imagens com IA que nasceu como um aplicativo de "recorte e colagem" inteligente — você fotografa um objeto e o sistema o recorta automaticamente. Com o tempo, evoluiu para uma suite completa com múltiplas ferramentas de IA para diferentes tarefas de edição visual.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Após ser adquirida pela Stability AI, a plataforma ganhou integração nativa com os modelos de geração de imagem da empresa, tornando-se uma das ferramentas mais completas para quem trabalha com imagens e precisa de velocidade sem abrir mão da qualidade.
          </p>
        </section>

        {/* Como funciona */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[
              { n: 1, titulo: "Escolha a ferramenta", texto: "Acesse clipdrop.co e selecione a ferramenta desejada — remoção de fundo, cleanup, upscaler, remoção de texto ou gerador de imagens." },
              { n: 2, titulo: "Faça upload da imagem", texto: "Envie a imagem que deseja editar ou descreva o que quer gerar. A maioria das ferramentas não exige conta para uso básico." },
              { n: 3, titulo: "IA processa automaticamente", texto: "O modelo de IA analisa a imagem e aplica a operação solicitada em segundos — sem seleções manuais, sem brushes, sem configurações complexas." },
              { n: 4, titulo: "Baixe o resultado", texto: "Faça download da imagem editada em alta resolução e use em seus projetos, lojas, redes sociais ou materiais de comunicação." },
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
              "Remoção de fundo de fotos",
              "Limpeza e remoção de objetos",
              "Upscaling de imagens em baixa resolução",
              "Remoção de texto sobreposto",
              "Troca de fundo de produtos",
              "Geração de imagens com Stable Diffusion",
              "Preparação de fotos para e-commerce",
              "Recorte automático de objetos",
              "Melhoria de qualidade de fotos antigas",
              "Edição de imagens para redes sociais",
              "Limpeza de marcas d'água simples",
              "Criação de assets visuais para design",
            ].map((item, i) => (
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition">
                <p className="text-zinc-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Principais ferramentas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais ferramentas</h2>
          <div className="grid gap-6">
            {[
              { titulo: "Remove Background", texto: "Remove o fundo de qualquer imagem com um clique, com detecção precisa de bordas em cabelos, transparências e objetos complexos. Resultado em PNG transparente pronto para uso." },
              { titulo: "Cleanup", texto: "Selecione qualquer objeto, pessoa ou elemento indesejado e a IA o remove preenchendo o espaço de forma natural — sem rastros visíveis da edição." },
              { titulo: "Image Upscaler", texto: "Aumenta a resolução de imagens em até 16x usando IA, recuperando detalhes e nitidez em fotos de baixa qualidade ou pequenas demais para uso profissional." },
              { titulo: "Remove Text", texto: "Identifica e remove automaticamente textos sobrepostos em fotos, letreiros e marcas d'água simples, deixando a imagem limpa." },
              { titulo: "Stable Diffusion XL", texto: "Geração de imagens a partir de texto com o modelo SDXL integrado, permitindo criar imagens realistas, artísticas e conceituais diretamente no ClipDrop." },
              { titulo: "Reimagine XL", texto: "Gera múltiplas variações criativas de uma imagem existente mantendo a composição geral, mas alterando estilo, cores e detalhes." },
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
              "Suite completa em um lugar — remoção de fundo, upscaling, cleanup e geração numa só plataforma",
              "Sem necessidade de conta para uso básico — acesse e edite imediatamente",
              "Resultados rápidos e de alta qualidade — processamento em segundos",
              "API disponível — integre as ferramentas em fluxos de trabalho automatizados",
              "Powered by Stability AI — acesso aos melhores modelos de geração de imagem open source",
              "Aplicativo mobile — edite imagens diretamente pelo celular",
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
              "Plano gratuito com marcas d'água — exportação sem marca d'água exige upgrade",
              "Limites de uso no gratuito — processamentos mensais restritos para usuários free",
              "Interface em inglês — não está disponível em português",
              "Ferramentas individuais sem fluxo integrado — não há um editor unificado com camadas como Photoshop",
              "Resultados podem variar em imagens muito complexas — bordas intrincadas ou cenários difíceis podem exigir ajuste manual",
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o ClipDrop?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {[
                  "Equipes de e-commerce com fotos de produtos",
                  "Designers e criadores de conteúdo visual",
                  "Fotógrafos que precisam de edição rápida",
                  "Desenvolvedores que precisam de API de edição",
                  "Profissionais de marketing digital",
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
                  "Edição avançada com camadas e efeitos complexos",
                  "Retoque fotográfico profissional detalhado",
                  "Projetos que exigem controle total pixel a pixel",
                  "Quem precisa de fluxo integrado com outros softwares Adobe",
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
          <h2 className="text-3xl font-bold mb-4">Edite imagens com IA agora</h2>
          <p className="text-lg mb-6 text-zinc-300">Acesse o ClipDrop e experimente gratuitamente as ferramentas de IA para imagens</p>
          <a
            href="https://clipdrop.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Acessar ClipDrop →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O ClipDrop é uma das suites de edição de imagens com IA mais completas e acessíveis do mercado. A combinação de ferramentas práticas como remoção de fundo, cleanup e upscaling com a geração de imagens via Stable Diffusion o torna uma escolha sólida para qualquer profissional que trabalhe com imagens no dia a dia.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            A facilidade de uso — sem necessidade de conta para começar — e a qualidade dos resultados fazem do ClipDrop uma referência entre as ferramentas de IA para imagens, especialmente para equipes de e-commerce e designers que precisam de velocidade sem abrir mão do resultado.
          </p>
        </section>

        <FAQSection />


        {/* Ferramentas Similares */}

        <SimilarTools />
      </div>
    </main>
  );
}
