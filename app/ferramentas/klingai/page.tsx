import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
  title: "KlingAI - Gerador de Vídeos com IA | Análise e Review",
  description: "Conheça o KlingAI: ferramenta de IA para criar vídeos realistas com movimentos complexos e alta qualidade. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/klingai",
  },
};

export default function KlingAIPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/klingai#breadcrumb",
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
            "name": "IA para Criar Vídeos",
            "item": "https://www.hypehour.com.br/ia-para-criar-videos"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "KlingAI",
            "item": "https://www.hypehour.com.br/ferramentas/klingai"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/klingai#software",
        "name": "KlingAI",
        "description": "KlingAI é uma plataforma de inteligência artificial para criação de vídeos realistas com movimentos complexos, física avançada e alta fidelidade visual.",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Web",
        "url": "https://klingai.com/global/",
        "creator": {
          "@type": "Organization",
          "name": "KlingAI"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "category": "Freemium"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.hypehour.com.br/ferramentas/klingai#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "O que é o KlingAI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "KlingAI é uma ferramenta de IA para criar vídeos realistas com movimentos complexos, física avançada e alta qualidade visual."
            }
          },
          {
            "@type": "Question",
            "name": "Para que serve o KlingAI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O KlingAI serve para gerar vídeos a partir de texto ou imagens, criar animações realistas e produzir conteúdo visual para marketing, redes sociais e projetos criativos."
            }
          },
          {
            "@type": "Question",
            "name": "O KlingAI é gratuito?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O KlingAI oferece plano gratuito com limitações e planos pagos com mais recursos e créditos."
            }
          }
        ]
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
          <Link href="/ia-para-criar-videos" className="hover:text-black transition">IA para Criar Vídeos</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">KlingAI</span>
        </nav>

        {/* Header com logo e nome */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            K
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">KlingAI</h1>
            <p className="text-lg text-zinc-700">Crie vídeos realistas com IA em minutos</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O KlingAI é uma plataforma avançada de geração de vídeos com inteligência artificial que se destaca pela capacidade de criar movimentos complexos, física realista e animações de alta qualidade. A ferramenta permite transformar texto e imagens em vídeos cinematográficos com controle preciso sobre cada elemento.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Ideal para criadores de conteúdo, agências de marketing, produtoras e profissionais que precisam gerar vídeos de forma rápida sem abrir mão da qualidade visual e realismo dos movimentos.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o KlingAI?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            KlingAI é uma ferramenta de IA generativa especializada em criar vídeos com alta fidelidade visual e física realista. Diferente de outros geradores, o KlingAI se destaca pela capacidade de simular movimentos complexos de câmera, física de objetos, expressões faciais naturais e transições suaves.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            A plataforma utiliza modelos de IA treinados em milhões de vídeos para entender movimento, luz, sombra e interação entre objetos, permitindo criar cenas que parecem ter sido filmadas por uma câmera real.
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
                <h3 className="text-xl font-semibold text-black mb-2">Descreva o vídeo ou envie imagem</h3>
                <p className="text-zinc-700">Digite um prompt descrevendo a cena, movimento e estilo desejado, ou faça upload de uma imagem inicial.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">IA gera o vídeo</h3>
                <p className="text-zinc-700">O KlingAI processa seu pedido e gera um vídeo com movimentos realistas, física correta e alta qualidade visual.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Ajuste e refine</h3>
                <p className="text-zinc-700">Faça variações, ajuste parâmetros e regenere até obter o resultado desejado.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Baixe e use</h3>
                <p className="text-zinc-700">Exporte o vídeo em alta resolução e utilize em seus projetos, redes sociais ou campanhas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Criação de vídeos a partir de texto",
              "Animação de imagens estáticas",
              "Geração de cenas cinematográficas",
              "Vídeos para redes sociais",
              "Conteúdo para marketing",
              "Trailers e teasers",
              "Animações de produtos",
              "Vídeos explicativos",
              "Demonstrações visuais",
              "Prototipação de ideias",
              "Storyboards animados",
              "Conteúdo para YouTube e TikTok",
              "Apresentações corporativas",
              "Campanhas publicitárias",
              "Vídeos para e-commerce",
              "Motion graphics",
              "Cenas com física realista",
              "Transições cinematográficas",
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
              <h3 className="text-xl font-semibold text-black mb-3">Geração de vídeos text-to-video</h3>
              <p className="text-zinc-700">Crie vídeos completos apenas descrevendo a cena em texto, com controle sobre movimento, estilo e duração.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Animação de imagens (image-to-video)</h3>
              <p className="text-zinc-700">Transforme fotos estáticas em vídeos animados com movimentos naturais e física realista.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Física e movimentos complexos</h3>
              <p className="text-zinc-700">Simula movimentos de câmera profissionais, física de objetos, interações naturais e expressões faciais realistas.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Alta resolução e qualidade cinematográfica</h3>
              <p className="text-zinc-700">Gera vídeos em alta definição com iluminação profissional, sombras corretas e texturas detalhadas.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Controle de estilo e mood</h3>
              <p className="text-zinc-700">Ajuste o tom visual, paleta de cores, atmosfera e estilo artístico do vídeo final.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Extensão e variações de vídeos</h3>
              <p className="text-zinc-700">Gere múltiplas versões do mesmo vídeo, estenda cenas e crie variações criativas automaticamente.</p>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Física realista e movimentos naturais — vídeos que parecem filmados de verdade",
              "Alta qualidade visual e resolução — ideal para uso profissional",
              "Suporte a movimentos complexos de câmera — dolly, pan, zoom e tracking shots",
              "Rápido e eficiente — gera vídeos em minutos sem necessidade de equipamento",
              "Interface intuitiva — fácil de usar mesmo sem experiência em edição de vídeo",
              "Versátil — serve tanto para redes sociais quanto para projetos corporativos",
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
              "Custo por vídeo pode ser elevado em planos pagos — projetos frequentes exigem investimento",
              "Tempo de processamento varia — vídeos complexos podem levar vários minutos",
              "Resultados dependem da qualidade do prompt — descrições vagas geram vídeos genéricos",
              "Limitações criativas — nem sempre consegue reproduzir exatamente o que você imaginou",
              "Requer revisão humana — pode gerar artefatos visuais ou movimentos estranhos ocasionalmente",
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o KlingAI?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Criadores de conteúdo para redes sociais</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Agências de marketing digital</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Produtoras de vídeo buscando agilidade</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">E-commerces criando demos de produtos</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Profissionais de motion design</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Projetos que exigem controle frame-by-frame</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Vídeos longos acima de 1-2 minutos</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Quem precisa de resultados 100% previsíveis</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Projetos com orçamento muito limitado</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Vídeos corporativos com marca registrada complexa</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vídeo do YouTube */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Veja o KlingAI em ação</h2>
          <div className="rounded-xl overflow-hidden shadow-lg border border-zinc-200">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/TuFqvD6PR54"
                title="KlingAI Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Pronto para criar vídeos incríveis?</h2>
          <p className="text-lg mb-6 text-zinc-300">Teste o KlingAI gratuitamente e transforme suas ideias em vídeos realistas</p>
          <a
            href="https://klingai.com/global/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Acessar KlingAI →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O KlingAI é uma das ferramentas mais avançadas para geração de vídeos com IA, especialmente quando você precisa de movimentos realistas, física correta e qualidade cinematográfica. Se você trabalha com criação de conteúdo, marketing ou produção visual, vale muito a pena testar.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            A ferramenta economiza tempo e recursos ao eliminar a necessidade de filmagem, equipamento caro e equipes grandes. Com prompts bem construídos, você consegue resultados surpreendentes em minutos.
          </p>
        </section>

        {/* FAQ */}
        <FAQSection />
      </div>
    </main>
  );
}
