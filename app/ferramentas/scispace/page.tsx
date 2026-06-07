import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "SciSpace - IA para Leitura e Pesquisa de Artigos Científicos",
  description: "Conheça o SciSpace: plataforma de IA para professores, pesquisadores e estudantes lerem, entenderem e pesquisarem artigos científicos com facilidade. Veja vantagens, desvantagens e para quem é indicado.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/scispace",
  },
  openGraph: {
    title: "SciSpace - IA para Leitura e Pesquisa de Artigos Científicos",
    description: "Conheça o SciSpace: plataforma de IA para professores, pesquisadores e estudantes lerem, entenderem e pesquisarem artigos científicos com facilidade.",
    url: "https://www.hypehour.com.br/ferramentas/scispace",
    siteName: "Hypehour",
    images: [{ url: "https://www.hypehour.com.br/logo.png" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SciSpace - IA para Leitura e Pesquisa de Artigos Científicos",
    description: "IA para pesquisa acadêmica: leia, entenda e explore artigos científicos com o SciSpace.",
    images: ["https://www.hypehour.com.br/logo.png"],
    creator: "@hypehourbr",
  },
};

export default function SciSpacePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/scispace#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypehour.com.br/" },
          { "@type": "ListItem", "position": 2, "name": "IA para Professores", "item": "https://www.hypehour.com.br/ia-para-professores" },
          { "@type": "ListItem", "position": 3, "name": "SciSpace", "item": "https://www.hypehour.com.br/ferramentas/scispace" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/scispace#software",
        "name": "SciSpace",
        "description": "Plataforma de IA para leitura, compreensão e pesquisa de artigos científicos com mais de 200 milhões de papers indexados.",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web",
        "url": "https://scispace.com/",
        "mainEntityOfPage": "https://www.hypehour.com.br/ferramentas/scispace",
        "creator": { "@type": "Organization", "name": "SciSpace" },
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
          <Link href="/ia-para-professores" className="hover:text-black transition">IA para Professores</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">SciSpace</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-violet-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            S
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">SciSpace</h1>
            <p className="text-lg text-zinc-700">Pesquise, leia e entenda artigos científicos com IA</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O SciSpace é uma plataforma de inteligência artificial projetada para tornar a pesquisa científica mais acessível e eficiente. Com um banco de dados de mais de 200 milhões de artigos, a ferramenta permite ler papers com o apoio de uma IA que explica conceitos, responde perguntas e resume conteúdos complexos em linguagem simples.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Ideal para professores universitários, pesquisadores, estudantes de pós-graduação e qualquer profissional que precise se manter atualizado com a literatura científica de forma rápida e sem barreiras de idioma ou complexidade técnica.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o SciSpace?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            SciSpace (anteriormente conhecido como Typeset.io) é uma plataforma de pesquisa acadêmica com IA que combina um motor de busca científico com um assistente inteligente capaz de analisar e explicar artigos científicos em tempo real. O sistema é treinado especificamente para literatura acadêmica, reduzindo significativamente o risco de informações incorretas.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            A ferramenta se destaca pela capacidade de aceitar perguntas em linguagem natural sobre qualquer artigo — seja um PDF enviado pelo usuário ou um paper encontrado diretamente na plataforma — e fornecer respostas claras com referências diretas ao texto original.
          </p>
        </section>

        {/* Como funciona */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[
              { n: 1, titulo: "Pesquise ou envie um artigo", texto: "Digite o tema de pesquisa para buscar no banco de 200 milhões de papers, ou faça upload de um PDF de artigo que você já possui." },
              { n: 2, titulo: "Leia com o suporte da IA", texto: "A IA fica disponível ao lado do texto do artigo para responder qualquer pergunta sobre metodologia, resultados, conceitos ou terminologia." },
              { n: 3, titulo: "Faça perguntas em português", texto: "Pergunte em português sobre qualquer parte do artigo — mesmo que ele esteja em inglês — e receba respostas claras com referências ao texto." },
              { n: 4, titulo: "Explore artigos relacionados", texto: "O SciSpace sugere papers relacionados ao tema, facilitando a construção de uma revisão de literatura abrangente e bem fundamentada." },
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
              "Leitura de artigos científicos com IA",
              "Resumo de papers complexos",
              "Revisão de literatura acadêmica",
              "Pesquisa em base de 200M+ artigos",
              "Compreensão de metodologias",
              "Preparação de aulas baseadas em evidências",
              "Tradução e explicação de papers em inglês",
              "Encontrar referências bibliográficas",
              "Análise de resultados e conclusões",
              "Exploração de temas interdisciplinares",
              "Suporte à escrita de TCC e dissertações",
              "Atualização com literatura recente",
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
              { titulo: "Chat com artigos científicos", texto: "Converse com qualquer paper em linguagem natural. A IA responde perguntas com base no conteúdo real do artigo e indica o trecho exato de onde vem a informação." },
              { titulo: "Banco de 200 milhões de artigos", texto: "Pesquise em uma das maiores bases de literatura científica, com cobertura de todas as áreas do conhecimento e filtros por ano, citações e relevância." },
              { titulo: "Resumo automático de papers", texto: "Gera resumos estruturados dos artigos com objetivo, metodologia, principais resultados e conclusões — em poucos segundos." },
              { titulo: "Extensão para Chrome", texto: "Leia papers no PubMed, Google Scholar e outros portais com o suporte da IA do SciSpace diretamente no navegador, sem sair da página." },
              { titulo: "Sugestão de artigos relacionados", texto: "Após ler um paper, o sistema sugere automaticamente artigos relacionados por tema, autor ou citações, acelerando a construção da revisão bibliográfica." },
              { titulo: "Suporte multilíngue", texto: "Faça perguntas em português e receba respostas no mesmo idioma, mesmo que o artigo esteja em inglês, alemão ou qualquer outro idioma." },
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
              "Respostas baseadas em artigos reais — menos risco de alucinações em comparação ao ChatGPT genérico",
              "Suporte em português — pergunte no idioma que preferir sobre qualquer paper em inglês",
              "200 milhões de artigos indexados — cobertura ampla de todas as áreas do conhecimento",
              "Extensão para Chrome — funciona integrado aos portais acadêmicos que você já usa",
              "Gratuito para começar — plano free com acesso real às funcionalidades principais",
              "Indica a fonte dentro do artigo — você sabe exatamente de onde veio a informação",
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
              "Limite de consultas no plano gratuito — uso intenso exige upgrade para o plano pago",
              "Nem todos os artigos estão disponíveis gratuitamente — alguns papers são pagos na fonte original",
              "IA ainda pode errar em contextos muito específicos — revisão humana continua indispensável",
              "Interface em inglês — embora aceite perguntas em português, a plataforma em si é em inglês",
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o SciSpace?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {[
                  "Professores universitários e pesquisadores",
                  "Estudantes de graduação e pós-graduação",
                  "Profissionais que precisam acompanhar literatura científica",
                  "Jornalistas científicos e divulgadores",
                  "Médicos, nutricionistas e profissionais de saúde",
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
                  "Quem busca criação de conteúdo original",
                  "Uso fora do contexto acadêmico ou científico",
                  "Quem precisa de acesso a artigos pagos sem assinatura",
                  "Projetos que exigem 100% de precisão sem revisão humana",
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
          <h2 className="text-3xl font-bold mb-4">Pesquise artigos científicos com IA</h2>
          <p className="text-lg mb-6 text-zinc-300">Acesse o SciSpace gratuitamente e transforme sua forma de ler e pesquisar literatura científica</p>
          <a
            href="https://scispace.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Acessar SciSpace →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O SciSpace é uma das ferramentas mais úteis para quem trabalha com pesquisa acadêmica. A combinação de um banco de dados gigantesco com uma IA treinada para literatura científica resolve um problema real: a dificuldade de consumir e compreender artigos densos em tempo hábil.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Para professores que precisam se atualizar constantemente, pesquisadores construindo revisões bibliográficas e estudantes navegando pela literatura pela primeira vez, o SciSpace representa um ganho de produtividade significativo sem abrir mão da confiabilidade das fontes.
          </p>
        </section>

        <FAQSection />


        {/* Ferramentas Similares */}

        <SimilarTools />
      </div>
    </main>
  );
}
