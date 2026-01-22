import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Leonardo AI - Gerador de Imagens com IA | Análise e Review",
  description: "Conheça o Leonardo AI: ferramenta de IA para criar imagens, ilustrações e arte digital de alta qualidade em segundos. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/leonardo-ai",
  },
};

export default function LeonardoAIPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/leonardo-ai#breadcrumb",
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
            "name": "IA para Imagens",
            "item": "https://www.hypehour.com.br/ia-para-imagens"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Leonardo AI",
            "item": "https://www.hypehour.com.br/ferramentas/leonardo-ai"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/leonardo-ai#software",
        "name": "Leonardo AI",
        "description": "Leonardo AI é uma ferramenta de inteligência artificial para criar imagens, ilustrações e arte digital de alta qualidade a partir de texto.",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web",
        "url": "https://leonardo.ai",
        "creator": {
          "@type": "Organization",
          "name": "Leonardo AI"
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
        "@id": "https://www.hypehour.com.br/ferramentas/leonardo-ai#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "O que é o Leonardo AI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Leonardo AI é uma ferramenta de IA que cria imagens, ilustrações e arte digital de alta qualidade a partir de descrições em texto."
            }
          },
          {
            "@type": "Question",
            "name": "Para que serve o Leonardo AI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Serve para gerar imagens personalizadas para jogos, marketing, design, ilustrações e projetos criativos."
            }
          },
          {
            "@type": "Question",
            "name": "O Leonardo AI é gratuito?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim, oferece plano gratuito com créditos limitados, além de planos pagos com mais recursos."
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
          <Link href="/ia-para-imagens" className="hover:text-black transition">IA para Imagens</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Leonardo AI</span>
        </nav>

        {/* Header com logo e nome */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            L
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Leonardo AI</h1>
            <p className="text-lg text-zinc-700">Crie imagens incríveis com IA em segundos</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O Leonardo AI é um gerador de imagens movido por inteligência artificial que transforma descrições em texto em arte visual impressionante. Seja para jogos, marketing, design gráfico ou projetos pessoais, a plataforma oferece controle criativo total com modelos customizáveis e recursos avançados.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Perfeito para designers, game artists, criadores de conteúdo e empresas que precisam produzir assets visuais de alta qualidade de forma rápida e consistente.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Leonardo AI?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Leonardo AI é uma plataforma de geração de imagens por IA que combina modelos de difusão avançados com controles precisos de estilo, composição e qualidade. Diferente de outros geradores, oferece ferramentas profissionais como treinamento de modelos customizados, edição de imagens existentes e geração em lote.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            A plataforma permite criar desde ilustrações conceituais até texturas para jogos, logos, personagens e cenários complexos, mantendo consistência visual entre múltiplas gerações.
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
                <h3 className="text-xl font-semibold text-black mb-2">Escreva o prompt</h3>
                <p className="text-zinc-700">Descreva a imagem desejada em português ou inglês, incluindo estilo, elementos e atmosfera.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Escolha modelo e configurações</h3>
                <p className="text-zinc-700">Selecione estilo (realista, anime, fantasia), resolução, guia de prompt e número de imagens.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">IA gera as imagens</h3>
                <p className="text-zinc-700">Aguarde alguns segundos enquanto a IA processa e gera múltiplas variações da sua ideia.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Refine e baixe</h3>
                <p className="text-zinc-700">Edite, amplie resolução, gere variações ou baixe diretamente para usar em seus projetos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Criação de assets para jogos",
              "Ilustrações para livros e artigos",
              "Imagens para marketing e redes sociais",
              "Concept art e arte conceitual",
              "Texturas e padrões",
              "Personagens de ficção",
              "Cenários e backgrounds",
              "Logos e branding",
              "Mockups de produtos",
              "Storyboards visuais",
              "NFTs e arte digital",
              "Capas de livros e álbuns",
              "Pôsteres e banners",
              "Ilustrações editoriais",
              "Arte para apresentações",
              "Designs para camisetas",
              "Animações frame-a-frame",
              "Prototipação visual",
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
              <h3 className="text-xl font-semibold text-black mb-3">Geração de imagens por texto (text-to-image)</h3>
              <p className="text-zinc-700">Crie imagens a partir de descrições em linguagem natural com controle total sobre estilo, composição e qualidade.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Modelos customizáveis e treinamento próprio</h3>
              <p className="text-zinc-700">Treine modelos personalizados com suas próprias imagens para manter consistência de estilo e personagens.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Edição e refinamento de imagens (AI Canvas)</h3>
              <p className="text-zinc-700">Edite partes específicas, adicione elementos, remova objetos e ajuste detalhes com ferramentas de IA.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Upscaling e melhoria de qualidade</h3>
              <p className="text-zinc-700">Aumente a resolução das imagens mantendo nitidez e detalhes, ideal para impressão e uso profissional.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Geração em lote e variações</h3>
              <p className="text-zinc-700">Gere múltiplas versões simultaneamente e crie variações de uma imagem existente para explorar possibilidades.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Biblioteca de modelos pré-treinados</h3>
              <p className="text-zinc-700">Acesse centenas de estilos prontos: realismo, anime, fantasia, sci-fi, pixel art e muito mais.</p>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Qualidade visual superior — resultados profissionais sem necessidade de habilidades em design",
              "Controle criativo avançado — ajuste fino de estilo, composição e elementos visuais",
              "Modelos customizáveis — treine com suas próprias imagens para manter consistência de marca",
              "Geração rápida — crie dezenas de imagens em minutos para testar conceitos",
              "Plano gratuito generoso — experimente sem compromisso antes de assinar",
              "Interface intuitiva — fácil de usar mesmo para quem nunca trabalhou com IA",
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
              "Créditos limitados no plano gratuito — uso intenso requer assinatura paga",
              "Resultados imprevisíveis — nem sempre a primeira geração sai como esperado",
              "Curva de aprendizado para prompts — escrever boas descrições é uma habilidade",
              "Limitações em textos e tipografia — ainda não gera texto legível de forma confiável",
              "Direitos autorais complexos — verifique termos de uso para projetos comerciais",
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Leonardo AI?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Game designers criando assets visuais</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Criadores de conteúdo para redes sociais</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Designers testando conceitos rapidamente</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Ilustradores buscando referências</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Empresas sem orçamento para fotografia</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Projetos que exigem fotos reais de pessoas específicas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Designs com muitos textos e tipografia</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Quem busca 100% de previsibilidade</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Uso comercial sem verificar licenças</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Projetos com zero orçamento a longo prazo</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vídeo do YouTube */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Veja o Leonardo AI em ação</h2>
          <div className="rounded-xl overflow-hidden shadow-lg border border-zinc-200">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/njiDF7nqwk4"
                title="Leonardo AI Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Pronto para criar suas imagens?</h2>
          <p className="text-lg mb-6 text-zinc-300">Teste o Leonardo AI gratuitamente e gere suas primeiras imagens agora</p>
          <a
            href="https://leonardo.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Acessar Leonardo AI →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Leonardo AI é uma das melhores ferramentas do mercado para criação de imagens com IA, oferecendo equilíbrio perfeito entre facilidade de uso e controle criativo. Se você precisa produzir assets visuais regularmente ou quer explorar conceitos rapidamente, vale muito a pena testar.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            As imagens geradas têm qualidade profissional e podem ser usadas em projetos reais após revisão. Combine Leonardo AI com sua visão criativa e você terá uma máquina de produzir arte visual de alta qualidade.
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
