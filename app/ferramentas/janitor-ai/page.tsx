import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Janitor AI - Chat com Personagens de IA para Roleplay",
  description: "Conheça o Janitor AI: plataforma de chat com personagens de inteligência artificial para roleplay, escrita criativa e entretenimento. Veja vantagens, desvantagens e para quem é indicado.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/janitor-ai",
  },
  openGraph: {
    title: "Janitor AI - Chat com Personagens de IA para Roleplay",
    description: "Conheça o Janitor AI: plataforma de chat com personagens de inteligência artificial para roleplay, escrita criativa e entretenimento. Veja vantagens, desvantagens e para quem é indicado.",
    url: "https://www.hypehour.com.br/ferramentas/janitor-ai",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Janitor AI - Chat com Personagens de IA para Roleplay",
    description: "Conheça o Janitor AI: plataforma de chat com personagens de IA para roleplay e escrita criativa.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function JanitorAIPage() {
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
        "@id": "https://www.hypehour.com.br/ferramentas/janitor-ai#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/janitor-ai",
        "name": "Janitor AI - Chat com Personagens de IA para Roleplay",
        "description": "Conheça o Janitor AI: plataforma de chat com personagens de inteligência artificial para roleplay, escrita criativa e entretenimento. Veja vantagens, desvantagens e para quem é indicado.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/janitor-ai#breadcrumb" },
        "datePublished": "2025-11-19",
        "dateModified": "2026-07-04",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/janitor-ai#software" },
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/janitor-ai#breadcrumb",
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
            "name": "Assistentes de IA",
            "item": "https://www.hypehour.com.br/assistentes-de-ia"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Janitor AI",
            "item": "https://www.hypehour.com.br/ferramentas/janitor-ai"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/janitor-ai#software",
        "name": "Janitor AI",
        "description": "Plataforma de chat com personagens de inteligência artificial para roleplay, escrita criativa e entretenimento.",
        "applicationCategory": "EntertainmentApplication",
        "operatingSystem": "Web",
        "url": "https://janitorai.com/",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/janitor-ai#webpage" },
        "image": "https://www.hypehour.com.br/logo.png",
        "featureList": ["Crie ou escolha um personagem","Configure o modelo de IA","Inicie a conversa","Explore e expanda","Criação de personagens detalhada","Galeria de personagens da comunidade"],
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Plano gratuito disponível" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "1456",
        },
        "creator": {
          "@type": "Organization",
          "name": "Janitor AI"
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
          <Link href="/assistentes-de-ia" className="hover:text-black transition">Assistentes de IA</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Janitor AI</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            J
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Janitor AI</h1>
            <p className="text-lg text-zinc-700">Converse com personagens de IA no seu estilo</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O Janitor AI é uma plataforma de roleplay e chat com personagens de inteligência artificial que permite criar, personalizar e conversar com personagens de ficção, fantasia ou baseados em personagens conhecidos. A plataforma é voltada para adultos e oferece liberdade criativa que outras ferramentas restringem.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Ideal para escritores criativos, entusiastas de roleplay e qualquer pessoa que queira explorar conversas e narrativas com personagens de IA de forma imersiva e personalizável.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Janitor AI?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Janitor AI é uma plataforma de chat com personagens de inteligência artificial focada em roleplay, entretenimento e criação de histórias. Os usuários podem criar personagens únicos com personalidade, backstory e estilo de fala específicos, ou interagir com personagens compartilhados pela comunidade.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            A plataforma suporta múltiplos modelos de linguagem, incluindo integrações com APIs externas, o que permite conversas mais elaboradas e contextuais. O foco em personalização profunda diferencia o Janitor AI de outras plataformas similares.
          </p>
        </section>

        {/* Como funciona */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">1</div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Crie ou escolha um personagem</h3>
                <p className="text-zinc-700">Crie um personagem do zero definindo personalidade, aparência e história, ou explore a galeria pública com personagens criados pela comunidade.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">2</div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Configure o modelo de IA</h3>
                <p className="text-zinc-700">Escolha o modelo de linguagem para a conversa — desde opções gratuitas da plataforma até modelos premium via chave de API externa.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">3</div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Inicie a conversa</h3>
                <p className="text-zinc-700">Comece o chat com o personagem — ele responde de acordo com a personalidade definida, mantendo consistência ao longo da conversa.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">4</div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Explore e expanda</h3>
                <p className="text-zinc-700">Salve as conversas, retome onde parou, ajuste o personagem conforme necessário e compartilhe criações com a comunidade.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Roleplay com personagens de ficção",
              "Escrita criativa colaborativa",
              "Desenvolvimento de personagens para histórias",
              "Entretenimento e imersão narrativa",
              "Exploração de diálogos criativos",
              "Inspiração para roteiros e novels",
              "Interação com personagens favoritos",
              "Criação de mundos fictícios",
              "Prática de escrita narrativa",
              "Conversas imersivas e contextuais",
              "Compartilhamento de personagens",
              "Experiências de storytelling"
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
              <h3 className="text-xl font-semibold text-black mb-3">Criação de personagens detalhada</h3>
              <p className="text-zinc-700">Defina personalidade, backstory, tom de voz, aparência e regras de comportamento do personagem para conversas coerentes e imersivas.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Galeria de personagens da comunidade</h3>
              <p className="text-zinc-700">Explore milhares de personagens criados por outros usuários, filtrando por categoria, popularidade e estilo.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Suporte a múltiplos modelos de IA</h3>
              <p className="text-zinc-700">Integre sua própria chave de API para usar modelos como GPT-4 e Claude, ou utilize os modelos gratuitos disponíveis na plataforma.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Memória de conversa</h3>
              <p className="text-zinc-700">As conversas são salvas e o personagem mantém contexto das interações anteriores para uma experiência mais contínua e imersiva.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Configurações de conteúdo</h3>
              <p className="text-zinc-700">A plataforma permite ajustar o nível de conteúdo das conversas, com opções de filtragem para diferentes preferências do usuário adulto.</p>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Alta personalização de personagens — controle total sobre personalidade e comportamento",
              "Galeria extensa da comunidade — milhares de personagens prontos para usar",
              "Suporte a APIs externas — use modelos premium com sua própria chave",
              "Interface intuitiva — fácil de criar e gerenciar múltiplos personagens",
              "Conversas salvas — retome qualquer interação a qualquer momento",
              "Gratuito para começar — acesso básico sem custo inicial"
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
              "Conteúdo adulto — a plataforma não é adequada para menores de 18 anos",
              "Modelos gratuitos limitados — respostas mais genéricas sem API premium",
              "Interface em inglês — pode ser uma barreira para alguns usuários",
              "Qualidade variável de personagens — nem todos os personagens da comunidade são bem elaborados",
              "Dependência de API externa para melhor experiência — pode gerar custos adicionais"
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Janitor AI?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {[
                  "Adultos interessados em roleplay criativo",
                  "Escritores buscando inspiração narrativa",
                  "Entusiastas de ficção e fantasia",
                  "Pessoas que gostam de storytelling interativo",
                  "Criadores de personagens e histórias"
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
                  "Menores de 18 anos",
                  "Uso profissional ou corporativo",
                  "Chatbots de atendimento ao cliente",
                  "Quem busca assistente produtivo de trabalho",
                  "Projetos com requisitos de privacidade rígidos"
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
          <h2 className="text-3xl font-bold mb-4">Pronto para criar seus personagens?</h2>
          <p className="text-lg mb-6 text-zinc-300">Acesse o Janitor AI e comece a conversar com personagens de IA personalizados</p>
          <a
            href="https://janitorai.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Acessar Janitor AI →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Janitor AI é uma das plataformas mais flexíveis para roleplay e interação com personagens de IA. Se você é um adulto que gosta de narrativas interativas, escrita criativa ou simplesmente quer explorar conversas com personagens ficcionais, a plataforma oferece ferramentas sólidas e uma comunidade ativa.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            O suporte a APIs externas e a profundidade na criação de personagens fazem do Janitor AI uma escolha diferenciada em relação a concorrentes mais restritos.
          </p>
        </section>

        <FAQSection />


        {/* Ferramentas Similares */}

        <SimilarTools />
      </div>
    </main>
  );
}
