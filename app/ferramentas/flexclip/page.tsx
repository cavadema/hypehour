import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "FlexClip - Editor de vídeo online intuitivo com IA",
  description: "Editor de vídeo online intuitivo com poderosos recursos de IA para criação rápida de conteúdo e apresentações.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/flexclip",
  },
  openGraph: {
    title: "FlexClip - Editor de vídeo online intuitivo com IA",
    description: "Editor de vídeo online intuitivo com poderosos recursos de IA para criação rápida de conteúdo e apresentações.",
    url: "https://www.hypehour.com.br/ferramentas/flexclip",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "FlexClip - Editor de vídeo online intuitivo com IA",
    description: "Editor de vídeo online intuitivo com poderosos recursos de IA para criação rápida de conteúdo e apresentações.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function FlexClipPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.hypehour.com.br/ferramentas/flexclip#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/flexclip",
        "name": "FlexClip - Editor de vídeo online intuitivo com IA",
        "description": "Editor de vídeo online intuitivo com poderosos recursos de IA para criação rápida de conteúdo e apresentações.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/flexclip#breadcrumb" },
        "datePublished": "2025-11-19",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/flexclip#software" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/flexclip#breadcrumb",
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
            "name": "FlexClip",
            "item": "https://www.hypehour.com.br/ferramentas/flexclip"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/flexclip#software",
        "name": "FlexClip",
        "description": "Editor de vídeo online intuitivo com poderosos recursos de IA para criação rápida de conteúdo e apresentações.",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Web",
        "url": "https://www.flexclip.com/pt/",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/flexclip#webpage" },
        "featureList": ["AI Text-to-Video", "IA de Narração (Voz)", "Legendas Automáticas"],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.5",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "2613",
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Plano gratuito disponível"
        },
        "creator": {
          "@type": "Organization",
          "name": "FlexClip"
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
          <span className="text-black font-medium">FlexClip</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            F
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">FlexClip</h1>
            <p className="text-lg text-zinc-700">Editor de vídeo online intuitivo com poderosos recursos de IA para criação rápida de conteúdo e apresentações.</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O FlexClip se consolidou como um dos editores de vídeo online mais versáteis do mercado, unindo simplicidade de uso com ferramentas de inteligência artificial de ponta. Ele é projetado para criadores, empresas e educadores que precisam produzir conteúdos visuais impactantes sem a curva de aprendizado de editores tradicionais.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Com uma interface intuitiva e uma vasta biblioteca de recursos, o FlexClip permite que qualquer pessoa crie vídeos profissionais — desde anúncios rápidos para redes sociais até apresentações corporativas completas — tudo direto no navegador e assistido por IA.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o FlexClip?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O FlexClip é uma plataforma de produção de vídeo baseada na nuvem que combina edição clássica com IA generativa. Ele oferece um fluxo de trabalho flexível: você pode começar do zero, usar um dos milhares de templates ou deixar que a inteligência artificial gere o roteiro e as cenas iniciais para você através de um prompt de texto.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            A ferramenta se destaca pela sua versatilidade, servindo tanto para criação de conteúdo ágil (como Reels e TikTok) quanto para projetos mais estruturados que exigem narrações precisas via IA e legendagem automática de alta fidelidade.
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
                <h3 className="text-xl font-semibold text-black mb-2">Escolha seu fluxo</h3>
                <p className="text-zinc-700">Inicie com um template profissional, use a IA de Texto para Vídeo ou comece um projeto em branco na linha do tempo flexível.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Integre Recursos de IA</h3>
                <p className="text-zinc-700">Gere roteiros com IA, adicione narração (TTS) com vozes naturais e crie legendas automáticas em segundos para maior alcance.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Editor Intuitivo</h3>
                <p className="text-zinc-700">Arraste e solte mídias de estoque, adicione transições dinâmicas, elementos gráficos e personalize cores e fontes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Exportação de Qualidade</h3>
                <p className="text-zinc-700">Exporte seu vídeo em diversos formatos e resoluções, pronto para ser publicado em qualquer plataforma digital.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Criar vídeos a partir de texto com IA",
              "Produzir Reels e TikToks com templates prontos",
              "Gerar narrações automáticas para vídeos",
              "Criar vídeos de produto para e-commerce",
              "Produzir anúncios para redes sociais",
              "Criar vídeos educativos para cursos online",
              "Gravar e editar tutoriais de software",
              "Produzir apresentações corporativas em vídeo",
              "Criar legendas automáticas para vídeos",
              "Gerar intros e vinhetas com templates",
              "Criar vídeos de YouTube Shorts rapidamente",
              "Produzir conteúdo para comunicações internas",
              "Criar vídeos imobiliários com templates prontos",
              "Gerar vídeos promocionais para lançamentos",
              "Produzir vídeos de onboarding de clientes",
              "Criar demos de produto com narração de IA"
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
              <h3 className="text-xl font-semibold text-black mb-3">AI Text-to-Video</h3>
              <p className="text-zinc-700">Transforme posts de blog ou roteiros curtos em vídeos completos com imagens e clips de estoque relevantes automaticamente.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">IA de Narração (Voz)</h3>
              <p className="text-zinc-700">Crie narrações realistas em segundos, escolhendo entre centenas de vozes e estilos para dar vida ao seu conteúdo.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Legendas Automáticas</h3>
              <p className="text-zinc-700">Aumente o engajamento com legendas geradas automaticamente por IA que acompanham o ritmo do áudio com precisão.</p>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Extremamente amigável: ideal para quem nunca editou vídeos",
              "Ferramentas de IA que economizam horas de trabalho manual",
              "Vasta biblioteca integrada de vídeos, fotos e músicas de estoque",
              "Templates profissionais prontos para dezenas de nichos e redes sociais",
              "Funcionamento 100% online sem necessidade de hardware pesado",
              "Excelente relação custo-benefício para criadores e pequenas empresas"
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
              "Recursos mais avançados de IA exigem assinatura de um plano pago",
              "A versão gratuita possui marca d'água nos vídeos exportados",
              "Pode haver limites de duração para determinados recursos da versão free",
              "Depende de uma conexão estável para carregar mídias de estoque pesadas"
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o FlexClip?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Youtubers e Criadores de Conteúdo Diário</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Times de Marketing e Donos de E-commerce</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Educadores criando aulas de forma rápida</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Empresas criando comunicações internas</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Editores de cinema que precisam de controle manual de frames pesado</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Uso sem internet estável em locais remotos</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Simplifique sua edição de vídeo</h2>
          <p className="text-lg mb-6 text-zinc-300">Crie conteúdos incríveis com as ferramentas de IA do FlexClip hoje mesmo.</p>
          <a
            href="https://www.flexclip.com/pt/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Criar Vídeo Grátis Agora →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O FlexClip é uma ferramenta que democratiza a produção de vídeo com qualidade. Ao aliar a inteligência artificial com uma experiência de uso simplificada, ele remove as barreiras técnicas e permite que sua criatividade tome a frente.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Se você procura velocidade, toneladas de recursos visuais e o apoio da IA para automatizar tarefas chatas como narração e legendagem, o FlexClip é uma das opções mais sólidas disponíveis atualmente.
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
