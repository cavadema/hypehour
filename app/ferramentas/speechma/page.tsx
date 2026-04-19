import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Speechma - Ferramenta de IA para Voz e Transcrição de Áudio",
  description: "Conheça o Speechma: ferramenta de IA para converter texto em voz realista e transcrever áudio em texto com precisão. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/speechma",
  },
  openGraph: {
    title: "Speechma - Ferramenta de IA para Voz e Transcrição de Áudio",
    description: "Conheça o Speechma: ferramenta de IA para converter texto em voz realista e transcrever áudio em texto com precisão. Veja vantagens, desvantagens e se é ideal para você.",
    url: "https://www.hypehour.com.br/ferramentas/speechma",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Speechma - Ferramenta de IA para Voz e Transcrição de Áudio",
    description: "Conheça o Speechma: ferramenta de IA para converter texto em voz realista e transcrever áudio em texto com precisão. Veja vantagens, desvantagens e se é ideal para você.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function SpeechmaPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/speechma#breadcrumb",
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
            "name": "Transcrever Áudio",
            "item": "https://www.hypehour.com.br/transcrever-audio"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Speechma",
            "item": "https://www.hypehour.com.br/ferramentas/speechma"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/speechma#software",
        "name": "Speechma",
        "description": "Ferramenta de IA para converter texto em voz realista e transcrever áudio em texto com precisão e suporte a múltiplos idiomas.",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Web",
        "url": "https://speechma.com",
        "mainEntityOfPage": "https://www.hypehour.com.br/ferramentas/speechma",
        "creator": {
          "@type": "Organization",
          "name": "Speechma"
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
          <Link href="/transcrever-audio" className="hover:text-black transition">Transcrever Áudio</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Speechma</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            S
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Speechma</h1>
            <p className="text-lg text-zinc-700">Converta texto em voz e áudio em texto com IA</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O Speechma é uma plataforma de inteligência artificial que combina síntese de voz e transcrição de áudio em uma única solução. Com vozes altamente naturais em mais de 50 idiomas, permite criar narrações profissionais, dublar conteúdos e transcrever reuniões com facilidade.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Ideal para criadores de conteúdo, profissionais de e-learning, podcasters e empresas que precisam de áudio de qualidade sem depender de gravações ou dubladores humanos.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Speechma?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Speechma é uma ferramenta de IA que oferece dois recursos principais: conversão de texto em voz (text-to-speech) com vozes realistas e naturais, e transcrição de áudio em texto (speech-to-text) com alta precisão. A plataforma suporta mais de 50 idiomas, incluindo o português brasileiro.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Com controles de velocidade, entonação e múltiplos estilos de voz, o Speechma permite produzir áudio profissional para qualquer tipo de projeto — de vídeos no YouTube a audiobooks completos.
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
                <h3 className="text-xl font-semibold text-black mb-2">Escolha o modo</h3>
                <p className="text-zinc-700">Selecione entre texto para voz (TTS) ou áudio para texto (transcrição) conforme sua necessidade.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Insira o conteúdo</h3>
                <p className="text-zinc-700">Cole o texto para narrar ou carregue o arquivo de áudio que deseja transcrever.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Configure voz e idioma</h3>
                <p className="text-zinc-700">Escolha o idioma, a voz preferida, velocidade de fala e ajuste o tom conforme o contexto.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Gere e baixe</h3>
                <p className="text-zinc-700">A IA processa em segundos e você pode ouvir, revisar e baixar o resultado final.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Narração de vídeos e tutoriais",
              "Criação de podcasts com IA",
              "Produção de audiobooks",
              "Transcrição de reuniões",
              "Legendas automáticas para vídeos",
              "Conteúdo para e-learning",
              "Dublagem de apresentações",
              "Acessibilidade para deficientes visuais",
              "Narrações para Reels e TikToks",
              "Transcrição de entrevistas",
              "Criação de anúncios em áudio",
              "Conteúdo multilíngue",
              "Vozes para assistentes virtuais",
              "Material educativo narrado",
              "Transcrição de áudios do WhatsApp",
              "Roteiros convertidos em voz",
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
              <h3 className="text-xl font-semibold text-black mb-3">Text-to-Speech com vozes realistas</h3>
              <p className="text-zinc-700">Converta qualquer texto em narração natural com vozes de IA que soam como humanos reais, em mais de 50 idiomas.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Transcrição de áudio para texto</h3>
              <p className="text-zinc-700">Carregue arquivos de áudio e obtenha transcrições precisas com identificação de falantes e pontuação automática.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Biblioteca de vozes multilíngue</h3>
              <p className="text-zinc-700">Acesse dezenas de vozes com diferentes estilos, gêneros e sotaques para cada idioma suportado.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Controle de velocidade e entonação</h3>
              <p className="text-zinc-700">Ajuste a velocidade de fala, pausas e tom da voz para criar narrações com o ritmo ideal para seu conteúdo.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">API para desenvolvedores</h3>
              <p className="text-zinc-700">Integre as funcionalidades de voz e transcrição diretamente em aplicativos e sistemas via API.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Download em múltiplos formatos</h3>
              <p className="text-zinc-700">Exporte os áudios gerados em MP3, WAV e outros formatos compatíveis com qualquer plataforma de edição.</p>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Vozes altamente naturais — difíceis de distinguir de voz humana real",
              "Suporte a mais de 50 idiomas — ideal para conteúdo multilíngue e internacional",
              "Dupla funcionalidade — TTS e transcrição em uma única plataforma",
              "Processamento rápido — gera áudio ou transcrição em segundos",
              "Plano gratuito disponível — permite testar antes de assinar",
              "Interface simples — sem curva de aprendizado, qualquer pessoa usa com facilidade",
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
              "Minutos limitados no plano gratuito — uso profissional exige plano pago",
              "Vozes ainda soam artificiais em textos muito longos ou emocionais",
              "Transcrição perde precisão com sotaques fortes ou áudios com ruído",
              "Sem edição de áudio nativa — é necessário software externo para cortes e mixagem",
              "Privacidade de dados — verifique a política antes de transcrever conteúdos sensíveis",
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Speechma?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Criadores de conteúdo que precisam de narração rápida</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Profissionais de e-learning e educação online</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Podcasters que querem produzir em escala</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Jornalistas e pesquisadores que transcrevem entrevistas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Empresas que produzem conteúdo multilíngue</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Projetos que exigem voz com emoções muito específicas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Transcrição de áudios com qualidade ruim ou muito ruído</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Quem precisa editar e mixar o áudio dentro da própria plataforma</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Uso intensivo sem budget para plano pago</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Transcrição de conteúdo altamente confidencial sem verificar política de privacidade</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Pronto para transformar voz em texto e texto em voz?</h2>
          <p className="text-lg mb-6 text-zinc-300">Teste o Speechma gratuitamente e crie seu primeiro áudio com IA agora</p>
          <a
            href="https://speechma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Acessar Speechma →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Speechma é uma solução completa para quem precisa trabalhar com áudio e voz usando inteligência artificial. Seja para criar narrações realistas em múltiplos idiomas ou transcrever reuniões e entrevistas com precisão, a plataforma entrega resultados de qualidade de forma rápida e acessível.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Se você produz conteúdo regularmente e precisa de voz sem complicação, o Speechma é uma das melhores ferramentas disponíveis. Vale começar pelo plano gratuito para testar as vozes e a qualidade da transcrição antes de assinar.
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
