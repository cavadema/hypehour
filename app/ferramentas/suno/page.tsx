import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Suno - Gerador de Música com IA: Recursos, Planos e Como Usar",
  description: "Conheça o Suno: plataforma de IA que cria músicas completas com vocais e letra a partir de texto. Veja recursos, planos gratuito e pagos, vantagens e limitações.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/suno",
  },
  openGraph: {
    title: "Suno - Gerador de Música com IA: Recursos, Planos e Como Usar",
    description: "Conheça o Suno: plataforma de IA que cria músicas completas com vocais e letra a partir de texto. Veja recursos, planos gratuito e pagos, vantagens e limitações.",
    url: "https://www.hypehour.com.br/ferramentas/suno",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Suno - Gerador de Música com IA: Recursos, Planos e Como Usar",
    description: "Conheça o Suno: plataforma de IA que cria músicas completas com vocais e letra a partir de texto. Veja recursos, planos gratuito e pagos, vantagens e limitações.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function SunoPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.hypehour.com.br/ferramentas/suno#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/suno",
        "name": "Suno - Gerador de Música com IA: Recursos, Planos e Como Usar",
        "description": "Conheça o Suno: plataforma de IA que cria músicas completas com vocais e letra a partir de texto. Veja recursos, planos gratuito e pagos, vantagens e limitações.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/suno#breadcrumb" },
        "datePublished": "2026-11-08",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/suno#software" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/suno#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypehour.com.br/" },
          { "@type": "ListItem", "position": 2, "name": "IA para Música", "item": "https://www.hypehour.com.br/ia-para-musica" },
          { "@type": "ListItem", "position": 3, "name": "Suno", "item": "https://www.hypehour.com.br/ferramentas/suno" }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/suno#software",
        "name": "Suno",
        "description": "Conheça o Suno: plataforma de IA que cria músicas completas com vocais e letra a partir de texto. Veja recursos, planos gratuito e pagos, vantagens e limitações.",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Web",
        "url": "https://suno.com/",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/suno#webpage" },
        "image": "https://www.hypehour.com.br/logo.png",
        "featureList": ["Geração de músicas por texto", "Suno Studio", "Voices", "Separação de faixas (stems)", "Remix"],
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Plano gratuito disponível" }
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
          <Link href="/ia-para-musica" className="hover:text-black transition">IA para Música</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Suno</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            S
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Suno</h1>
            <p className="text-lg text-zinc-700">{"Plataforma de IA que cria músicas completas, com vocais e letra, a partir de uma descrição em texto"}</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">{"O Suno é uma plataforma de inteligência artificial que gera músicas completas, com vocais, letra e produção, a partir de uma descrição em texto. Em vez de montar uma faixa instrumento por instrumento, você diz o gênero, o clima ou o tema e recebe uma música pronta para ouvir e refinar."}</p>
          <p className="text-lg text-zinc-700 leading-relaxed">{"Esta página resume o que o Suno faz, quais planos existem e quais cuidados vale ter antes de usar as músicas em projetos profissionais."}</p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">{"O que é o Suno?"}</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">{"O Suno cria músicas a partir de prompts. Você pode descrever gênero, humor ou tema, ou escrever a sua própria letra, e a ferramenta devolve uma faixa com voz e instrumental."}</p>
          <p className="text-zinc-700 leading-relaxed">{"Além da geração, a plataforma oferece o Suno Studio, um estúdio digital no navegador para editar e mixar, além de recursos como separação de faixas e remix de músicas existentes."}</p>
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
                <h3 className="text-xl font-semibold text-black mb-2">{"Descreva a música"}</h3>
                <p className="text-zinc-700">{"Informe gênero, clima ou tema, ou cole uma letra própria."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{"Gere as versões"}</h3>
                <p className="text-zinc-700">{"O Suno cria músicas completas com vocais e instrumental a partir do prompt."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{"Refine e remixe"}</h3>
                <p className="text-zinc-700">{"Use o remix para mudar estilo ou letra e a separação de faixas (stems) para isolar vocal e instrumental."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{"Edite e exporte"}</h3>
                <p className="text-zinc-700">{"Nos planos pagos, use o Song Editor e o Suno Studio e baixe as músicas com direitos comerciais."}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Trilhas para vídeos e podcasts", "Jingles e músicas para marcas", "Demos de músicas autorais", "Músicas personalizadas para presentes", "Experimentar gêneros e estilos", "Letras transformadas em canções", "Trilhas para jogos e projetos criativos", "Remix de ideias musicais"].map((item, index) => (
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
              <h3 className="text-xl font-semibold text-black mb-3">{"Geração de músicas por texto"}</h3>
              <p className="text-zinc-700">{"Cria músicas completas com vocais, letra e produção a partir de um prompt de gênero, humor ou tema."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Suno Studio"}</h3>
              <p className="text-zinc-700">{"Estúdio digital (DAW) no navegador para editar e mixar as faixas, disponível no plano Premier."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Voices"}</h3>
              <p className="text-zinc-700">{"Usa uma gravação curta da sua voz para cantar qualquer letra."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Separação de faixas (stems)"}</h3>
              <p className="text-zinc-700">{"Separa vocal e instrumental para reaproveitar partes da música."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Remix"}</h3>
              <p className="text-zinc-700">{"Muda o estilo ou a letra de uma música já criada."}</p>
            </div>
          </div>
        </section>

        {/* Preços */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Planos e preços</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">{"O Suno tem plano gratuito e dois planos pagos. O site oficial não exibe os valores na página inicial; informa apenas um desconto de 20% para cobrança anual."}</p>
          <div className="grid gap-3">
            {["Gratuito: até 10 músicas por dia, sem cartão de crédito.", "Pro: 500 músicas por mês, direitos comerciais, Song Editor, separação de stems e uploads de até 8 minutos.", "Premier: 2.000 músicas por mês, Suno Studio, exportação MIDI, Persona Voices e acesso antecipado a novidades."].map((item, index) => (
              <div key={index} className="p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <p className="text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-500 mt-3">{"Os valores em dólar dos planos pagos não foram confirmados na página oficial consultada. Veja os preços atuais em suno.com antes de assinar."}</p>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {["Gera músicas completas com vocais e letra a partir de um texto simples", "Plano gratuito para testar sem cartão de crédito", "Suno Studio permite editar e mixar sem sair do navegador", "Recursos de remix e separação de faixas para trabalhar a música depois de gerada", "Direitos comerciais nos planos pagos"].map((advantage, index) => (
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
            {["Os direitos comerciais dependem de plano pago, então confira a licença antes de publicar", "Os valores dos planos não aparecem na página inicial do site", "Resultados variam a cada geração e podem exigir várias tentativas", "O uso de músicas geradas por IA em plataformas de streaming segue regras próprias de cada serviço"].map((disadvantage, index) => (
              <div key={index} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                <span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span>
                <p className="text-zinc-700">{disadvantage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Para quem é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">{"Para quem é o Suno?"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Criadores de conteúdo que precisam de trilhas originais"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Quem quer transformar uma letra em música sem saber produzir"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Músicos que querem prototipar ideias rapidamente"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Marcas que precisam de jingles e músicas personalizadas"}</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">{"✕"}</span>
                  <span className="text-zinc-700">{"Quem precisa de controle total sobre cada instrumento da faixa"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">{"✕"}</span>
                  <span className="text-zinc-700">{"Projetos que exigem licença comercial sem assinar plano pago"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">{"✕"}</span>
                  <span className="text-zinc-700">{"Produções que exigem resultado idêntico a cada geração"}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">{"Crie sua primeira música com IA"}</h2>
          <p className="text-lg mb-6 text-zinc-300">{"Teste o Suno gratuitamente e ouça uma música gerada a partir de uma descrição."}</p>
          <a
            href="https://suno.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            {"Experimentar o Suno →"}
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">{"O Suno é uma das opções mais completas para criar músicas com IA, combinando geração por texto, edição e remix em uma só plataforma. O plano gratuito permite conhecer o fluxo, e os planos pagos liberam direitos comerciais e mais recursos."}</p>
          <p className="text-zinc-700 leading-relaxed">{"Antes de usar músicas em projetos comerciais, confirme os termos de licença do seu plano e teste o resultado com um caso real pequeno."}</p>
        </section>

        {/* FAQ */}
        <FAQSection />

        {/* Ferramentas Similares */}
        <SimilarTools />
      </div>
    </main>
  );
}
