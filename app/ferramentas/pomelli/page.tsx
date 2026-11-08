import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Pomelli (Google Labs) - Campanhas de Marketing com IA para a sua Marca",
  description: "Conheça o Pomelli, ferramenta do Google Labs que cria campanhas e conteúdo de marketing alinhados à identidade da sua marca. Veja como funciona, disponibilidade e limitações.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/pomelli",
  },
  openGraph: {
    title: "Pomelli (Google Labs) - Campanhas de Marketing com IA para a sua Marca",
    description: "Conheça o Pomelli, ferramenta do Google Labs que cria campanhas e conteúdo de marketing alinhados à identidade da sua marca. Veja como funciona, disponibilidade e limitações.",
    url: "https://www.hypehour.com.br/ferramentas/pomelli",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pomelli (Google Labs) - Campanhas de Marketing com IA para a sua Marca",
    description: "Conheça o Pomelli, ferramenta do Google Labs que cria campanhas e conteúdo de marketing alinhados à identidade da sua marca. Veja como funciona, disponibilidade e limitações.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function PomelliPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.hypehour.com.br/ferramentas/pomelli#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/pomelli",
        "name": "Pomelli (Google Labs) - Campanhas de Marketing com IA para a sua Marca",
        "description": "Conheça o Pomelli, ferramenta do Google Labs que cria campanhas e conteúdo de marketing alinhados à identidade da sua marca. Veja como funciona, disponibilidade e limitações.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/pomelli#breadcrumb" },
        "datePublished": "2026-11-08",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/pomelli#software" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/pomelli#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypehour.com.br/" },
          { "@type": "ListItem", "position": 2, "name": "IA para Marketing", "item": "https://www.hypehour.com.br/ia-para-marketing" },
          { "@type": "ListItem", "position": 3, "name": "Pomelli", "item": "https://www.hypehour.com.br/ferramentas/pomelli" }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/pomelli#software",
        "name": "Pomelli",
        "description": "Conheça o Pomelli, ferramenta do Google Labs que cria campanhas e conteúdo de marketing alinhados à identidade da sua marca. Veja como funciona, disponibilidade e limitações.",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": "https://labs.google.com/pomelli/about/",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/pomelli#webpage" },
        "image": "https://www.hypehour.com.br/logo.png",
        "featureList": ["Business DNA", "Ideias de campanha", "Peças editáveis", "Recursos adicionais", "Pomelli Agent"]
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
          <Link href="/ia-para-marketing" className="hover:text-black transition">IA para Marketing</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Pomelli</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            P
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Pomelli</h1>
            <p className="text-lg text-zinc-700">{"Ferramenta do Google Labs que cria conteúdo de marketing alinhado à identidade da sua marca"}</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">{"O Pomelli é uma ferramenta de IA do Google Labs, em parceria com o Google DeepMind, voltada a pequenas e médias empresas que precisam criar conteúdo de marketing com a identidade visual e o tom da marca."}</p>
          <p className="text-lg text-zinc-700 leading-relaxed">{"Esta página explica como a ferramenta funciona, o que ela evoluiu a fazer em 2026 e quais cuidados vale ter, já que o produto ainda é um experimento do Google Labs."}</p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">{"O que é o Pomelli?"}</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">{"O ponto de partida do Pomelli é o Business DNA: a ferramenta analisa o site e as imagens da empresa e monta um perfil com cores, fontes, valores e tom de voz, que depois é reaproveitado em tudo o que ela gera."}</p>
          <p className="text-zinc-700 leading-relaxed">{"A partir desse perfil, o Pomelli sugere ideias de campanha e gera peças editáveis para site, redes sociais e anúncios. Segundo as fontes consultadas, a plataforma passou a incluir catálogo de produtos, ensaio fotográfico, animação em vídeo, sites e um agente de IA."}</p>
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
                <h3 className="text-xl font-semibold text-black mb-2">{"Informe o site da empresa"}</h3>
                <p className="text-zinc-700">{"O Pomelli analisa o site e as imagens para entender a marca."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{"Revise o Business DNA"}</h3>
                <p className="text-zinc-700">{"Confira cores, fontes, valores e tom de voz antes de usar o perfil."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{"Escolha a campanha"}</h3>
                <p className="text-zinc-700">{"Aceite as ideias sugeridas ou descreva o que quer em linguagem natural."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{"Edite e publique"}</h3>
                <p className="text-zinc-700">{"Ajuste as peças geradas para site, redes sociais e anúncios."}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Campanhas para redes sociais", "Peças para anúncios", "Padronizar a identidade da marca", "Divulgar lançamentos e promoções", "Materiais para pequenos negócios", "Catálogo de produtos com imagens", "Criar conteúdo sem equipe de design", "Gerar ideias de campanha"].map((item, index) => (
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
              <h3 className="text-xl font-semibold text-black mb-3">{"Business DNA"}</h3>
              <p className="text-zinc-700">{"Extrai identidade visual, valores e tom de voz a partir do site e das imagens da empresa."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Ideias de campanha"}</h3>
              <p className="text-zinc-700">{"Sugere campanhas ou segue um pedido em linguagem natural."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Peças editáveis"}</h3>
              <p className="text-zinc-700">{"Gera recursos para site, redes sociais e anúncios que podem ser ajustados."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Recursos adicionais"}</h3>
              <p className="text-zinc-700">{"Inclui catálogo de produtos, ensaio fotográfico, animação em vídeo e sites, segundo as fontes consultadas."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Pomelli Agent"}</h3>
              <p className="text-zinc-700">{"Agente que monta o Business DNA e brand books, segundo as fontes consultadas."}</p>
            </div>
          </div>
        </section>

        {/* Preços */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Planos e preços</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">{"O Pomelli é um experimento do Google Labs. Fontes públicas indicam uso gratuito durante a fase beta, mas as condições podem mudar."}</p>
          <div className="grid gap-3">
            {["Beta público: lançado em outubro de 2025 no Google Labs, com uso gratuito segundo uma fonte.", "Planos pagos: o site oficial consultado não apresenta planos nem preços.", "Disponibilidade: o acesso por país pode variar. Confirme no site oficial se está disponível para o Brasil."].map((item, index) => (
              <div key={index} className="p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <p className="text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-500 mt-3">{"Informações conferidas em fontes públicas em novembro de 2026; a página oficial consultada não detalha preços. Confirme condições e disponibilidade em labs.google.com/pomelli."}</p>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {["Parte da identidade real da marca, em vez de peças genéricas", "Reúne ideias de campanha e criação de peças no mesmo fluxo", "Voltado a pequenas empresas sem equipe de marketing", "Desenvolvido pelo Google Labs em parceria com o Google DeepMind", "Uso gratuito na fase beta, segundo fontes públicas"].map((advantage, index) => (
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
            {["É um experimento do Google Labs, então recursos e condições podem mudar", "A disponibilidade por país pode ser limitada", "As peças geradas precisam de revisão e toque humano para não parecerem genéricas", "O site oficial não detalha preços nem planos futuros"].map((disadvantage, index) => (
              <div key={index} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                <span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span>
                <p className="text-zinc-700">{disadvantage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Para quem é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">{"Para quem é o Pomelli?"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Pequenos negócios sem equipe de design"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Donos de marca que querem consistência visual"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Social medias que precisam de volume de peças"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Quem quer testar ferramentas de marketing do Google"}</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">{"✕"}</span>
                  <span className="text-zinc-700">{"Empresas que exigem garantias contratuais de produto estável"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">{"✕"}</span>
                  <span className="text-zinc-700">{"Marcas com identidade visual muito específica e complexa"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">{"✕"}</span>
                  <span className="text-zinc-700">{"Quem precisa de planos e preços definidos"}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">{"Teste o Pomelli no Google Labs"}</h2>
          <p className="text-lg mb-6 text-zinc-300">{"Informe o site da sua empresa e veja o Business DNA gerado pela IA."}</p>
          <a
            href="https://labs.google.com/pomelli/about/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            {"Conhecer o Pomelli →"}
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">{"O Pomelli é uma aposta do Google para simplificar o marketing de pequenas empresas, usando a identidade da marca como base para campanhas e peças. É uma boa opção para testar enquanto o acesso for gratuito."}</p>
          <p className="text-zinc-700 leading-relaxed">{"Como é um experimento, vale acompanhar mudanças de disponibilidade e condições, revisar tudo o que a IA gera e manter o toque humano nas campanhas."}</p>
        </section>

        {/* FAQ */}
        <FAQSection />

        {/* Ferramentas Similares */}
        <SimilarTools />
      </div>
    </main>
  );
}
