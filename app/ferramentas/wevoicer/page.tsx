import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "WeVoicer - Gerador de voz com IA de alta qualidade",
  description: "Plataforma de conversão de texto em fala (TTS) de alta qualidade que utiliza IA para gerar narrações naturais e humanizadas.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/wevoicer",
  },
  openGraph: {
    title: "WeVoicer - Gerador de voz com IA de alta qualidade",
    description: "Plataforma de conversão de texto em fala (TTS) de alta qualidade que utiliza IA para gerar narrações naturais e humanizadas.",
    url: "https://www.hypehour.com.br/ferramentas/wevoicer",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "WeVoicer - Gerador de voz com IA de alta qualidade",
    description: "Plataforma de conversão de texto em fala (TTS) de alta qualidade que utiliza IA para gerar narrações naturais e humanizadas.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function WeVoicerPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.hypehour.com.br/ferramentas/wevoicer#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/wevoicer",
        "name": "WeVoicer - Gerador de voz com IA de alta qualidade",
        "description": "Plataforma de conversão de texto em fala (TTS) de alta qualidade que utiliza IA para gerar narrações naturais e humanizadas.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/wevoicer#breadcrumb" },
        "datePublished": "2025-11-19",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/wevoicer#software" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/wevoicer#breadcrumb",
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
            "name": "Gerador de Voz com IA",
            "item": "https://www.hypehour.com.br/gerador-de-voz-ia"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "WeVoicer",
            "item": "https://www.hypehour.com.br/ferramentas/wevoicer"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/wevoicer#software",
        "name": "WeVoicer",
        "description": "Plataforma de conversão de texto em fala (TTS) de alta qualidade que utiliza IA para gerar narrações naturais e humanizadas.",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Web",
        "url": "https://wevoicer.com/",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/wevoicer#webpage" },
        "featureList": ["Vozes Humanizadas Reais", "Biblioteca Global", "Editor Amigável"],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Plano gratuito disponível"
        },
        "creator": {
          "@type": "Organization",
          "name": "WeVoicer"
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
          <Link href="/gerador-de-voz-ia" className="hover:text-black transition">Gerador de Voz com IA</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">WeVoicer</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            W
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">WeVoicer</h1>
            <p className="text-lg text-zinc-700">Plataforma de conversão de texto em fala (TTS) de alta qualidade que utiliza IA para gerar narrações naturais e humanizadas.</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O WeVoicer foca em uma das necessidades mais crescentes do marketing moderno: narrações de alta qualidade geradas instantaneamente. Utilizando tecnologia de rede neural de última geração, a plataforma transforma textos frios em áudios vibrantes, com emoção e fluidez humana.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Se você é um criador de conteúdo que prefere não aparecer, um professor preparando aulas online ou uma empresa que precisa de narrações rápidas para treinamentos, o WeVoicer oferece uma das bibliotecas de vozes mais completas e naturais do mercado global.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o WeVoicer?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O WeVoicer é um motor de Text-to-Speech (TTS) especializado em 'Vozes Humanas de IA'. Ele se diferencia de geradores de voz antigos por captar o ritmo da respiração rítmica e a entonação correta de frases complexas, evitando aquele tom metálico e robótico que muitas plataformas gratuitas ainda possuem.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            A plataforma é amplamente utilizada para criar dublagens rápidas, converter artigos em áudio para acessibilidade e gerar conteúdos dinâmicos para plataformas como YouTube, Instagram e TikTok, onde a qualidade do áudio é fundamental para a retenção do público.
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
                <h3 className="text-xl font-semibold text-black mb-2">Insira seu Texto</h3>
                <p className="text-zinc-700">Cole seu roteiro, artigo ou documento diretamente no editor online do WeVoicer.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Escolha a Voz Ideal</h3>
                <p className="text-zinc-700">Explore centenas de vozes por gênero, idade e sentimento para encontrar a que melhor combina com seu projeto.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Personalize a Fala</h3>
                <p className="text-zinc-700">Ajuste a velocidade, o tom e insira pausas manuais para garantir que a narração soe exatamente como você planejou.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Gere e Baixe</h3>
                <p className="text-zinc-700">Processe o áudio em segundos e baixe o arquivo MP3 final pronto para ser usado em qualquer lugar.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Narrar vídeos do YouTube sem gravar voz",
              "Criar audiobooks a partir de livros e artigos",
              "Gerar locuções para anúncios em vídeo",
              "Produzir narrações para cursos online",
              "Criar vídeos para TikTok sem aparecer",
              "Gerar voz para tutoriais e demos de software",
              "Produzir URA e mensagens de voz para empresas",
              "Criar conteúdo acessível para deficientes visuais",
              "Gerar dublagens rápidas em múltiplos idiomas",
              "Produzir podcasts com narração de IA",
              "Criar narrações para documentários e vlogs",
              "Gerar voz para apresentações corporativas",
              "Converter textos longos em áudio para estudo",
              "Criar conteúdo de e-learning com narração",
              "Produzir áudio para vídeos de Reels e Shorts",
              "Gerar narrações consistentes para séries de vídeos"
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
              <h3 className="text-xl font-semibold text-black mb-3">Vozes Humanizadas Reais</h3>
              <p className="text-zinc-700">A tecnologia de IA generativa garante que a curva da fala seja suave, com ênfases naturais nas palavras certas, evitando monotonia.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Biblioteca Global</h3>
              <p className="text-zinc-700">Acesso a centenas de vozes em mais de 70 idiomas, permitindo a globalização de conteúdos com sotaques regionais autênticos.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Editor Amigável</h3>
              <p className="text-zinc-700">Uma interface limpa que não exige conhecimentos técnicos, focada no que importa: transformar texto em voz de forma rápida.</p>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Economia drástica de tempo comparado à gravação manual de voz",
              "Custo muito inferior à contratação de locutores profissionais",
              "Consistência vocal: a mesma voz para todos os seus vídeos e tutoriais",
              "Fácil correção de erros: basta editar o texto e gerar o áudio novamente",
              "Suporte a múltiplos idiomas para expansão internacional de negócios",
              "Interface minimalista e focada em produtividade"
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
              "Exige conexão com a internet para funcionar (ferramenta online)",
              "Vozes extremamente autênticas requerem planos premium",
              "O controle de emoção ultra-granular (como choro ou riso) ainda é um desafio para a maioria das IAs",
              "Licença comercial disponível apenas para usuários pagantes"
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o WeVoicer?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Canais de 'Vaca Caçadora' (Canais Dark) no YouTube</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Criadores de tutoriais e treinamentos online</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Empresas que precisam de URA e mensagens de voz</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Autores convertendo livros em audiobooks</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Projetos cinematográficos que exigem atuação vocal extrema</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Usuários sem nenhuma conexão estável com a web</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Dê voz às suas ideias com a melhor IA</h2>
          <p className="text-lg mb-6 text-zinc-300">Crie narrações profissionais em segundos com o WeVoicer.</p>
          <a
            href="https://wevoicer.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Criar Voz Gratuitamente →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O WeVoicer é uma solução sólida e eficiente para um dos maiores gargalos da produção audiovisual: o áudio. Ao oferecer vozes que soam naturais e uma interface que não perde tempo, ele se torna uma ferramenta indispensável no arsenal de qualquer criador moderno.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Se você busca o equilíbrio entre qualidade vocal humana e a velocidade da inteligência artificial, o WeVoicer entrega resultados que elevam o patamar de qualquer projeto visual ou educacional.
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
