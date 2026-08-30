import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Luvvoice - Gerador de Voz com IA Grátis",
  description: "Conheça o Luvvoice: plataforma gratuita de texto para fala com mais de 500 vozes realistas em 70 idiomas, incluindo Português do Brasil. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/luvvoice",
  },
  openGraph: {
    title: "Luvvoice - Gerador de Voz com IA Grátis",
    description: "Conheça o Luvvoice: plataforma gratuita de texto para fala com mais de 500 vozes realistas em 70 idiomas, incluindo Português do Brasil. Veja vantagens, desvantagens e se é ideal para você.",
    url: "https://www.hypehour.com.br/ferramentas/luvvoice",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Luvvoice - Gerador de Voz com IA Grátis",
    description: "Conheça o Luvvoice: plataforma gratuita de texto para fala com mais de 500 vozes realistas em 70 idiomas, incluindo Português do Brasil. Veja vantagens, desvantagens e se é ideal para você.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function LuvvoicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.hypehour.com.br/ferramentas/luvvoice#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/luvvoice",
        "name": "Luvvoice - Gerador de Voz com IA Grátis",
        "description": "Conheça o Luvvoice: plataforma gratuita de texto para fala com mais de 500 vozes realistas em 70 idiomas, incluindo Português do Brasil. Veja vantagens, desvantagens e se é ideal para você.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/luvvoice#breadcrumb" },
        "datePublished": "2025-11-19",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/luvvoice#software" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/luvvoice#breadcrumb",
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
            "name": "Luvvoice",
            "item": "https://www.hypehour.com.br/ferramentas/luvvoice"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/luvvoice#software",
        "name": "Luvvoice",
        "description": "Conheça o Luvvoice: plataforma gratuita de texto para fala com mais de 500 vozes realistas em 70 idiomas, incluindo Português do Brasil. Veja vantagens, desvantagens e se é ideal para você.",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Web",
        "url": "https://luvvoice.com/br/",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/luvvoice#webpage" },
        "image": "https://www.hypehour.com.br/logo.png",
        "featureList": ["Entrada de Texto", "Seleção de Voz e Idioma", "Processamento de IA", "Download Imediato", "Vozes Humanizadas", "Biblioteca Massiva"],
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Plano gratuito disponível" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "2.3",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "9",
        },
        "creator": {
          "@type": "Organization",
          "name": "Luvvoice"
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
          <span className="text-black font-medium">Luvvoice</span>
        </nav>

        {/* Header com logo e nome */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            L
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Luvvoice</h1>
            <p className="text-lg text-zinc-700">Plataforma gratuita de conversão de texto em fala com mais de 500 vozes</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O Luvvoice se destaca no competitivo mercado de geradores de voz por IA como uma solução extremamente poderosa, versátil e, acima de tudo, acessível. Ele oferece um dos maiores catálogos de vozes gratuitas do mercado, permitindo que criadores independentes tenham acesso a narrações de alta fidelidade sem grandes investimentos.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Seja para narrar um vídeo do YouTube em Português do Brasil com naturalidade ou globalizar um conteúdo para outros 70 idiomas, o Luvvoice entrega resultados profissionais direto no navegador, equilibrando tecnologia de ponta com uma experiência de uso simplificada.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Luvvoice?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Luvvoice é uma plataforma especializada em Texto para Fala (TTS - Text to Speech) baseada em inteligência artificial. O diferencial da ferramenta é a sua enorme biblioteca — com mais de 500 vozes — e o uso de redes neurais profundas que garantem que as narrações não soem robóticas, mas sim com a fluidez e a emoção da fala humana rítmica.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Muito popular entre produtores de conteúdos para TikTok e canais 'dark' (onde o criador não aparece), o Luvvoice permite transformar roteiros inteiros em arquivos MP3 prontos para uso em segundos, suportando uma vasta gama de idiomas e sotaques regionais autênticos.
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
                <h3 className="text-xl font-semibold text-black mb-2">Entrada de Texto</h3>
                <p className="text-zinc-700">Cole seu roteiro ou texto diretamente na área de transferência central do site.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Seleção de Voz e Idioma</h3>
                <p className="text-zinc-700">Escolha entre Português e outros 70 idiomas. Filtre as vozes por tom (grave, agudo), gênero e estilo.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Processamento de IA</h3>
                <p className="text-zinc-700">Clique em converter. A IA processa o texto em tempo real, aplicando as nuances vocais selecionadas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Download Imediato</h3>
                <p className="text-zinc-700">Ouça a prévia do áudio e faça o download gratuito no formato MP3 de alta qualidade.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Narrações de vídeos para YouTube",
              "Voiceover para TikTok e Reels",
              "Canais dark sem rosto",
              "Cursos online e aulas EAD",
              "Podcasts e áudios explicativos",
              "Áudios promocionais para negócios",
              "Apresentações corporativas",
              "Audiobooks e resumos narrados",
              "Vídeos multilíngues",
              "Conteúdo para e-commerce",
              "Notificações automatizadas",
              "Locução publicitária digital"].map((item, index) => (
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
              <h3 className="text-xl font-semibold text-black mb-3">Vozes Humanizadas</h3>
              <p className="text-zinc-700">Diferente de geradores tradicionais, o Luvvoice entende pontuação e entonação, gerando áudios que 'respiram' naturalmente.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Biblioteca Massiva de Vozes</h3>
              <p className="text-zinc-700">São mais de 500 opções vocais, garantindo que você encontre o timbre perfeito para qualquer tipo de vídeo ou apresentação.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Totalmente Online</h3>
              <p className="text-zinc-700">Tudo funciona direto no seu navegador de forma rápida, sem exigir downloads pesados ou processamento local do seu PC.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Suporte Multilíngue</h3>
              <p className="text-zinc-700">Mais de 70 idiomas disponíveis com sotaques regionais autênticos, permitindo criar conteúdo global sem barreiras de idioma.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Download em MP3</h3>
              <p className="text-zinc-700">Exporte o áudio gerado diretamente em MP3 de alta qualidade, compatível com qualquer software de edição de vídeo ou áudio.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Controle de Velocidade e Ritmo</h3>
              <p className="text-zinc-700">Personalize a velocidade da narração e ajuste o ritmo para se adequar ao estilo e ao tempo do seu conteúdo.</p>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Serviço gratuito generoso para novos criadores",
              "Vozes realistas em Português do Brasil com excelente pronúncia",
              "Suporte a mais de 70 idiomas para expansão de conteúdo",
              "Interface minimalista focada em rapidez: escolha, converta e baixe",
              "Áudios baixados em MP3 compatíveis com qualquer software de edição",
              "Ideal para narrações de YouTube, TikTok, Reels e Cursos Online"
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
              "A versão gratuita possui limites de caracteres por sessão de conversão",
              "O uso comercial pleno e sem restrições é reservado aos planos pagos",
              "Por ser uma ferramenta online, depende 100% de conexão estável com a web",
              "Para projetos cinematográficos ultra-vividos, pode exigir pequenos ajustes de velocidade"
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Luvvoice?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Canais de YouTube sem rosto (Canais Dark)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Criadores de vídeos curtos para TikTok e Instagram</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Professores criando narrações para aulas EAD</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Pequenos negócios gerando áudios promocionais</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Criadores de conteúdo multilíngue e global</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Dublagens de cinema com múltiplas camadas de emoção</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Ambientes de trabalho sem acesso constante à internet</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Projetos que exigem clonagem de voz personalizada</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Produções com uso comercial intensivo no plano gratuito</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Transforme seu texto em uma narração profissional</h2>
          <p className="text-lg mb-6 text-zinc-300">Escolha entre centenas de vozes reais e comece no Luvvoice agora.</p>
          <a
            href="https://luvvoice.com/br/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Criar Voz Grátis Agora →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Luvvoice se posiciona como uma ponte essencial para criadores de conteúdo que buscam qualidade sem complexidade. Sua vasta biblioteca de vozes e a precisão da sua inteligência artificial garantem que o usuário tenha em mãos uma "locutora virtual" de alto nível pronta 24h por dia.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Pela sua facilidade, versatilidade de idiomas e modelo acessível, o Luvvoice é sem dúvida uma das ferramentas mais interessantes para quem deseja escalar a produção de conteúdos audiovisuais de forma inteligente e econômica.
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
