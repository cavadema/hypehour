import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Descript - Editor de Vídeo e Podcast com IA",
  description: "Conheça o Descript: editor de vídeo e podcast com IA que permite editar pelo texto, remover silêncios, clonar voz e gerar B-roll automaticamente. Veja vantagens, desvantagens e para quem é indicado.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/descript",
  },
  openGraph: {
    title: "Descript - Editor de Vídeo e Podcast com IA",
    description: "Conheça o Descript: editor de vídeo e podcast com IA que permite editar pelo texto, remover silêncios, clonar voz e gerar B-roll automaticamente.",
    url: "https://www.hypehour.com.br/ferramentas/descript",
    siteName: "Hypehour",
    images: [{ url: "https://www.hypehour.com.br/logo.png" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Descript - Editor de Vídeo e Podcast com IA",
    description: "Edite vídeos e podcasts pelo texto com IA — remova silêncios, vícios de linguagem e gere B-roll automaticamente.",
    images: ["https://www.hypehour.com.br/logo.png"],
    creator: "@hypehourbr",
  },
};

export default function DescriptPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.hypehour.com.br/#organization",
        "name": "Hypehour",
        "url": "https://www.hypehour.com.br",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.hypehour.com.br/#website",
        "name": "Hypehour",
        "url": "https://www.hypehour.com.br",
        "publisher": { "@id": "https://www.hypehour.com.br/#organization" },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.hypehour.com.br/ferramentas/descript#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/descript",
        "name": "Descript - Editor de Vídeo e Podcast com IA",
        "description": "Conheça o Descript: editor de vídeo e podcast com IA que permite editar pelo texto, remover silêncios, clonar voz e gerar B-roll automaticamente. Veja vantagens, desvantagens e para quem é indicado.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/descript#breadcrumb" },
        "datePublished": "2025-11-19",
        "dateModified": "2026-07-04",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/descript#software" },
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/descript#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypehour.com.br/" },
          { "@type": "ListItem", "position": 2, "name": "IA para Criar Vídeos", "item": "https://www.hypehour.com.br/ia-para-criar-videos" },
          { "@type": "ListItem", "position": 3, "name": "Descript", "item": "https://www.hypehour.com.br/ferramentas/descript" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/descript#software",
        "name": "Descript",
        "description": "Editor de vídeo e podcast com IA que permite editar pelo texto transcrito, remover silêncios automaticamente e clonar voz.",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Web, Windows, macOS",
        "url": "https://www.descript.com/",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/descript#webpage" },
        "image": "https://www.hypehour.com.br/logo.png",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Plano gratuito disponível" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "1312",
        },
        "creator": { "@type": "Organization", "name": "Descript" },
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
          <Link href="/ia-para-criar-videos" className="hover:text-black transition">IA para Criar Vídeos</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Descript</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            D
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Descript</h1>
            <p className="text-lg text-zinc-700">Edite vídeos e podcasts pelo texto com IA</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O Descript é um editor de vídeo e podcast com inteligência artificial que revoluciona o fluxo de edição ao permitir que você trabalhe diretamente no texto transcrito. Apagar uma palavra no texto apaga automaticamente o trecho correspondente no vídeo ou áudio — uma abordagem que torna a edição muito mais rápida e intuitiva.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Ideal para podcasters, criadores de conteúdo para YouTube, educadores online, jornalistas e qualquer profissional que produza conteúdo audiovisual baseado em fala e queira reduzir drasticamente o tempo de pós-produção.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Descript?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Descript é uma plataforma all-in-one para produção de conteúdo audiovisual que combina transcrição automática com IA, edição por texto, remoção inteligente de ruídos e pausas, clonagem de voz e geração de B-roll. O software foi projetado para quem precisa produzir muito conteúdo de forma eficiente — sem abrir mão da qualidade.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            O conceito central é simples: ao invés de arrastar clips em uma timeline tradicional, você lê e edita o texto gerado pela transcrição. Cada palavra no texto corresponde a um trecho exato no arquivo de mídia, tornando cortes, remoções e reorganizações tão fáceis quanto editar um documento de texto.
          </p>
        </section>

        {/* Como funciona */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[
              { n: 1, titulo: "Importe o arquivo de vídeo ou áudio", texto: "Faça upload do arquivo gravado — entrevista, podcast, aula, vlog ou qualquer conteúdo baseado em fala. O Descript aceita os formatos mais comuns de vídeo e áudio." },
              { n: 2, titulo: "IA transcreve automaticamente", texto: "O motor de transcrição com IA converte todo o conteúdo falado em texto em minutos, com identificação de diferentes falantes e marcação de tempo por palavra." },
              { n: 3, titulo: "Edite pelo texto", texto: "Selecione e apague palavras, frases ou trechos inteiros diretamente no texto. Os cortes são aplicados automaticamente no arquivo de mídia, sem necessidade de trabalhar na timeline." },
              { n: 4, titulo: "Aplique IA e exporte", texto: "Use os recursos de IA para remover silêncios, vícios de linguagem, gerar B-roll e ajustar qualidade de áudio. Exporte em vídeo, áudio ou como clipe para redes sociais." },
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
              "Edição de podcasts pelo texto",
              "Corte de vídeos para YouTube",
              "Remoção de silêncios automática",
              "Remoção de vícios de linguagem",
              "Clonagem e correção de voz (Overdub)",
              "Geração de B-roll com IA",
              "Criação de clipes para redes sociais",
              "Legendas automáticas",
              "Transcrição de entrevistas",
              "Edição de aulas e tutoriais",
              "Produção de conteúdo para LinkedIn",
              "Gravação de tela com narração",
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
              { titulo: "Edição por texto (Text-Based Editing)", texto: "A funcionalidade central do Descript: edite vídeo e áudio apagando palavras no texto transcrito. Cortes, rearranjos e limpezas ficam tão simples quanto editar um documento Word." },
              { titulo: "Remoção automática de silêncios e vícios", texto: "Com um clique, o Descript identifica e remove pausas longas, silêncios e vícios de linguagem como 'hum', 'ahn' e 'tipo', limpando a gravação em segundos." },
              { titulo: "Overdub — clonagem de voz com IA", texto: "Grave uma amostra da sua voz e o Descript cria um modelo sintético. Para corrigir erros ou adicionar trechos novos, basta digitar — a IA gera o áudio na sua própria voz." },
              { titulo: "Geração de B-roll com IA", texto: "O Descript sugere e insere automaticamente imagens e clipes de cobertura visual (B-roll) relevantes ao conteúdo falado, eliminando a busca manual por material de apoio." },
              { titulo: "Clipes automáticos para redes sociais", texto: "Identifica e recorta automaticamente os melhores momentos do conteúdo longo para criar clipes curtos e verticais para TikTok, Reels e YouTube Shorts." },
              { titulo: "Gravação de tela integrada", texto: "Grave a tela do computador com narração diretamente no Descript e edite tudo no mesmo ambiente, ideal para tutoriais e demos de produto." },
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
              "Edição por texto — a forma mais rápida de editar conteúdo baseado em fala",
              "Remoção automática de silêncios e vícios — limpa gravações em segundos",
              "Overdub — corrija erros de fala sem regravar usando sua voz sintética",
              "All-in-one — transcrição, edição, B-roll, legendas e clipes em uma só plataforma",
              "Funciona no Mac, Windows e web — flexibilidade de acesso",
              "Plano gratuito disponível — dá para testar antes de assinar",
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
              "Curva de aprendizado inicial — o conceito de edição por texto é diferente e exige adaptação",
              "Plano pago necessário para uso intenso — horas de transcrição e recursos avançados são limitados no gratuito",
              "Não substitui editores profissionais para produções complexas — efeitos visuais e multicâmera avançado ficam de fora",
              "Transcrição pode errar em sotaques fortes ou áudio de baixa qualidade — revisão manual ainda é necessária",
              "Interface em inglês — não está localizada em português",
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Descript?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {[
                  "Podcasters e produtores de áudio",
                  "Criadores de conteúdo para YouTube",
                  "Educadores com cursos online",
                  "Jornalistas e entrevistadores",
                  "Equipes de marketing de conteúdo",
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
                  "Produções cinematográficas com efeitos visuais",
                  "Edições multicâmera complexas",
                  "Vídeos sem narração ou fala",
                  "Projetos que exigem color grading avançado",
                  "Conteúdo que depende exclusivamente de imagens",
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
          <h2 className="text-3xl font-bold mb-4">Edite vídeos e podcasts pelo texto</h2>
          <p className="text-lg mb-6 text-zinc-300">Experimente o Descript gratuitamente e descubra como a edição por texto transforma sua produtividade</p>
          <a
            href="https://www.descript.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Acessar Descript →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Descript representa uma mudança de paradigma na edição de conteúdo audiovisual. Ao transformar a timeline em texto editável, a ferramenta remove a principal barreira de quem produz muito conteúdo baseado em fala: o tempo gasto em pós-produção manual.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Para podcasters, criadores de YouTube e educadores que publicam com frequência, o ganho de produtividade é real e significativo. O Descript não é o editor certo para tudo — mas para conteúdo baseado em fala, é difícil encontrar uma ferramenta mais eficiente.
          </p>
        </section>

        <FAQSection />


        {/* Ferramentas Similares */}

        <SimilarTools />
      </div>
    </main>
  );
}
