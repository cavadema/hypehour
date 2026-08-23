import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Invideo - Plataforma de criação de vídeos com IA",
  description: "Plataforma de criação de vídeos com IA que transforma texto em vídeos profissionais em minutos.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/invideo",
  },
  openGraph: {
    title: "Invideo - Plataforma de criação de vídeos com IA",
    description: "Plataforma de criação de vídeos com IA que transforma texto em vídeos profissionais em minutos.",
    url: "https://www.hypehour.com.br/ferramentas/invideo",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Invideo - Plataforma de criação de vídeos com IA",
    description: "Plataforma de criação de vídeos com IA que transforma texto em vídeos profissionais em minutos.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function InvideoPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.hypehour.com.br/ferramentas/invideo#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/invideo",
        "name": "Invideo - Plataforma de criação de vídeos com IA",
        "description": "Plataforma de criação de vídeos com IA que transforma texto em vídeos profissionais em minutos.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/invideo#breadcrumb" },
        "datePublished": "2025-11-19",
        "dateModified": "2026-07-04",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/invideo#software" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/invideo#breadcrumb",
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
            "name": "Invideo",
            "item": "https://www.hypehour.com.br/ferramentas/invideo"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/invideo#software",
        "name": "Invideo",
        "description": "Plataforma de criação de vídeos com IA que transforma texto em vídeos profissionais em minutos.",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Web, iOS, Android",
        "url": "https://invideo.io/",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/invideo#webpage" },
        "featureList": ["Gerador de Vídeo via Prompt", "Vozes de IA Realistas", "Biblioteca de Mídia Gigante"],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.3",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "177",
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Plano gratuito disponível"
        },
        "creator": {
          "@type": "Organization",
          "name": "Invideo"
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
          <span className="text-black font-medium">Invideo</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            I
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Invideo</h1>
            <p className="text-lg text-zinc-700">Plataforma de criação de vídeos com IA que transforma texto em vídeos profissionais em minutos.</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O Invideo é uma das plataformas mais robustas para criação de vídeos assistida por inteligência artificial. Com o lançamento do Invideo AI, a ferramenta elevou o nível, permitindo que qualquer pessoa gere vídeos completos — com narração, clips de estoque e legendas — apenas digitando um prompt de texto.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Seja para YouTube, Instagram, TikTok ou apresentações corporativas, o Invideo simplifica o processo de edição, permitindo que você foque na mensagem enquanto a IA cuida da montagem visual e técnica.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Invideo?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Invideo é um editor de vídeo baseado na nuvem que combina ferramentas de edição tradicionais com recursos de inteligência artificial generativa. Ele oferece dois fluxos principais: o <strong>Invideo AI</strong>, que gera vídeos automaticamente a partir de prompts, e o <strong>Invideo Studio</strong>, que fornece milhares de templates customizáveis para um controle mais granular.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            A plataforma se destaca pela sua vasta biblioteca de mídias de estoque (iStock, Shutterstock) e por um motor de IA de texto para vídeo que consegue interpretar roteiros complexos para criar cenas coerentes e visualmente atraentes em segundos.
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
                <h3 className="text-xl font-semibold text-black mb-2">Insira um prompt ou roteiro</h3>
                <p className="text-zinc-700">Diga à IA sobre o que é o vídeo, o tom da narração e a plataforma de destino (ex: um Short para YouTube sobre produtividade).</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Geração Automática</h3>
                <p className="text-zinc-700">A IA gera o roteiro, escolhe os clips de estoque, adiciona a narração e as legendas automaticamente.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Refinamento via Chat</h3>
                <p className="text-zinc-700">Você pode pedir à IA para "mudar a música", "trocar o clip da cena 2" ou "deixar o vídeo mais engraçado" usando comandos de chat.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Exportação e Publicação</h3>
                <p className="text-zinc-700">Revise o resultado final e exporte o vídeo na resolução desejada pronto para ser publicado.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Criar vídeos para YouTube a partir de texto",
              "Gerar Shorts e Reels automaticamente",
              "Produzir vídeos de marketing digital",
              "Criar vídeos explicativos com narração",
              "Montar apresentações corporativas em vídeo",
              "Gerar conteúdo para TikTok rapidamente",
              "Criar vídeos de treinamento e e-learning",
              "Produzir anúncios em vídeo para redes sociais",
              "Converter posts de blog em vídeo",
              "Criar newsletters em formato de vídeo",
              "Gerar vídeos de produto para e-commerce",
              "Produzir vídeos educativos para cursos online",
              "Criar depoimentos e cases em vídeo",
              "Gerar tutoriais com narração automática",
              "Produzir conteúdo em múltiplos idiomas",
              "Criar vídeos institucionais de forma rápida"
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
              <h3 className="text-xl font-semibold text-black mb-3">Gerador de Vídeo via Prompt</h3>
              <p className="text-zinc-700">Crie vídeos completos apenas descrevendo sua ideia. A IA cuida de tudo: do roteiro à montagem final.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Vozes de IA Realistas</h3>
              <p className="text-zinc-700">Narração automática com vozes humanas em diversos idiomas, eliminando a necessidade de contratar locutores.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Biblioteca de Mídia Gigante</h3>
              <p className="text-zinc-700">Acesso a milhões de clips e imagens premium integrados diretamente no fluxo de trabalho para um acabamento profissional.</p>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Velocidade absurda na produção de conteúdo para redes sociais",
              "Interface intuitiva que dispensa curva de aprendizado pesada",
              "Qualidade profissional sem necessidade de hardware potente (roda no navegador)",
              "Suporte a múltiplos formatos (horizontal, vertical, quadrado) num clique",
              "Ferramentas de IA que economizam horas de busca manual por mídias",
              "Excelente custo-benefício comparado à contratação de editores profissionais"
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
              "A marca d'água na versão gratuita pode ser restritiva para uso comercial",
              "Dependência de conexão estável com a internet por ser cloud-based",
              "Algumas gerações de IA podem precisar de ajustes manuais no roteiro",
              "Os créditos de IA nos planos pagos podem acabar rápido se usados intensamente"
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Invideo?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Criadores de conteúdo e YouTubers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Social Media e Gestores de Tráfego</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Pequenas e médias empresas (PMEs)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Educadores e produtores de cursos online</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Editores de cinema que precisam de controle frame-a-frame absoluto</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Empresas com restrições rigorosas de uso de IA generativa</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Revolucione sua edição de vídeo</h2>
          <p className="text-lg mb-6 text-zinc-300">Comece a criar vídeos profissionais com IA hoje mesmo com o Invideo.</p>
          <a
            href="https://invideo.io/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Experimentar Invideo Gratuitamente →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Invideo é uma ferramenta essencial no arsenal de qualquer criador moderno. Ao combinar o poder da IA com um editor flexível, ele democratiza a produção de vídeos de alta qualidade, permitindo que a criatividade flua sem as barreiras técnicas da edição complexa.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Se você busca consistência e velocidade para alimentar seus canais digitais, o Invideo é, sem dúvida, uma das melhores opções disponíveis no mercado atualmente.
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
