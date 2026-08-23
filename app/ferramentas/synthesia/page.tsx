import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Synthesia - Plataforma líder de vídeos com avatares de IA",
  description: "Plataforma líder de geração de vídeos com avatares de IA que transforma texto em apresentações profissionais.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/synthesia",
  },
  openGraph: {
    title: "Synthesia - Plataforma líder de vídeos com avatares de IA",
    description: "Plataforma líder de geração de vídeos com avatares de IA que transforma texto em apresentações profissionais.",
    url: "https://www.hypehour.com.br/ferramentas/synthesia",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Synthesia - Plataforma líder de vídeos com avatares de IA",
    description: "Plataforma líder de geração de vídeos com avatares de IA que transforma texto em apresentações profissionais.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function SynthesiaPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.hypehour.com.br/ferramentas/synthesia#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/synthesia",
        "name": "Synthesia - Plataforma líder de vídeos com avatares de IA",
        "description": "Plataforma líder de geração de vídeos com avatares de IA que transforma texto em apresentações profissionais.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/synthesia#breadcrumb" },
        "datePublished": "2025-11-19",
        "dateModified": "2026-07-04",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/synthesia#software" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/synthesia#breadcrumb",
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
            "name": "IA para Vídeos",
            "item": "https://www.hypehour.com.br/ia-para-criar-videos"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Synthesia",
            "item": "https://www.hypehour.com.br/ferramentas/synthesia"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/synthesia#software",
        "name": "Synthesia",
        "description": "Plataforma líder de geração de vídeos com avatares de IA que transforma texto em apresentações profissionais.",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Web",
        "url": "https://www.synthesia.io/pt-br",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/synthesia#webpage" },
        "featureList": ["Avatares de IA Realistas", "Dublagem e Tradução Automática", "Avatares Personalizados"],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "2375",
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Plano gratuito disponível"
        },
        "creator": {
          "@type": "Organization",
          "name": "Synthesia"
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
          <Link href="/ia-para-criar-videos" className="hover:text-black transition">IA para Vídeos</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Synthesia</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            S
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Synthesia</h1>
            <p className="text-lg text-zinc-700">Plataforma líder de geração de vídeos com avatares de IA que transforma texto em apresentações profissionais.</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O Synthesia é o pioneiro e líder global na criação de vídeos com avatares de inteligência artificial. A plataforma permite que empresas e criadores transformem roteiros de texto em vídeos de alta qualidade, apresentados por avatares realistas que falam e se expressam como seres humanos, eliminando a necessidade de filmagens complexas.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Utilizado por milhares de empresas (incluindo grandes nomes da Fortune 500), o Synthesia é a escolha ideal para treinamentos, apresentações corporativas, newsletters em vídeo e comunicações em escala que exigem um toque humano digital.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Synthesia?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Synthesia é uma plataforma de 'AIVideo' que utiliza inteligência artificial generativa para criar apresentadores digitais. Ela combina visão computacional avançada com síntese de voz para gerar movimentos labiais e expressões faciais perfeitamente sincronizados com o roteiro fornecido pelo usuário.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            A plataforma funciona inteiramente no navegador e oferece uma experiência de edição simplificada, permitindo adicionar fundos, textos, formas e mídias de apoio, transformando a criação de vídeos em um processo tão simples quanto montar uma apresentação de slides.
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
                <h3 className="text-xl font-semibold text-black mb-2">Escreva seu roteiro</h3>
                <p className="text-zinc-700">Cole seu texto no editor e escolha entre mais de 120 idiomas e opções de vozes naturais.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Escolha seu avatar</h3>
                <p className="text-zinc-700">Selecione entre mais de 140 avatares de IA diversos ou crie seu próprio avatar personalizado.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Customize o cenário</h3>
                <p className="text-zinc-700">Adicione fundos, elementos visuais, músicas e layouts para alinhar o vídeo à sua identidade visual.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Gere e compartilhe</h3>
                <p className="text-zinc-700">Processe o vídeo e exporte em 1080p, ou compartilhe via link direto ou código de incorporação.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Criar vídeos de treinamento corporativo",
              "Produzir conteúdo de e-learning em escala",
              "Gerar vídeos de onboarding de funcionários",
              "Criar apresentações de vendas em vídeo",
              "Produzir newsletters em formato de vídeo",
              "Criar comunicados internos de RH em vídeo",
              "Gerar tutoriais de produto com avatar",
              "Traduzir vídeos para múltiplos idiomas",
              "Criar cursos online com apresentador virtual",
              "Produzir vídeos para aulas de idiomas",
              "Gerar demos de software com narração",
              "Criar vídeos de FAQ com apresentador",
              "Produzir relatórios em vídeo para stakeholders",
              "Criar vídeos explicativos para clientes",
              "Gerar conteúdo educativo multilíngue",
              "Produzir certificações em vídeo"
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
              <h3 className="text-xl font-semibold text-black mb-3">Avatares de IA Realistas</h3>
              <p className="text-zinc-700">Acesso a uma biblioteca de mais de 140 avatares baseados em pessoas reais, com micro-expressões e movimentos naturais.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Dublagem e Tradução Automática</h3>
              <p className="text-zinc-700">Traduza vídeos inteiros com um clique, mantendo a sincronia labial e a entonação da voz original em dezenas de idiomas.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Avatares Personalizados</h3>
              <p className="text-zinc-700">Crie sua própria versão digital para apresentações pessoais, garantindo uma marca única e autoridade visual.</p>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Economia de até 80% em custos de produção comparado a filmagens tradicionais",
              "Criação de vídeos em escala global com suporte a 120+ idiomas",
              "Facilidade de atualização: mude o roteiro e gere o vídeo novamente em minutos",
              "Consistência visual e de áudio em todos os vídeos da empresa",
              "Interface simples que dispensa conhecimentos técnicos de edição de vídeo",
              "Diretrizes éticas robustas e certificação SOC2 para segurança corporativa"
            ].map((advantage, index) => (
              <div key={index} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <span className="text-black font-bold text-lg flex-shrink-0">✓</span>
                <p className="text-zinc-700">{advantage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Desvantagens e considerações */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {[
              "Início do vale da estranheza (uncanny valley) em alguns movimentos laterais",
              "Dependência total da qualidade das ferramentas de síntese de voz",
              "Planos profissionais podem ter um custo elevado para uso individual",
              "Menos controle criativo artístico comparado a uma filmagem com diretor e câmera"
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Synthesia?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Equipes de T&D (Treinamento e Desenvolvimento)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Times de Vendas e Sucesso do Cliente</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Comunicação Corporativa e RH</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Educadores e Escolas de idiomas</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Cinema e produções de alta drama</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Pessoas que preferem a autenticidade da gravação física lenta</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Crie vídeos incríveis em escala</h2>
          <p className="text-lg mb-6 text-zinc-300">Descubra por que a Synthesia é a escolha das maiores empresas do mundo.</p>
          <a
            href="https://www.synthesia.io/pt-br"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Criar vídeo com Synthesia →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Synthesia continua sendo o padrão ouro para produção de vídeos com avatares de IA. Sua facilidade de uso, aliada à qualidade crescente dos avatares e recursos de tradução, torna-o uma ferramenta indispensável para empresas que precisam se comunicar globalmente de forma rápida e profissional.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Se o seu objetivo é criar conteúdo educativo, informacional ou corporativo com consistência e agilidade, o Synthesia deve estar no topo da sua lista de ferramentas de IA.
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
