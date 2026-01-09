import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
  title: "GPTZero - Detector de IA para Educadores | Análise e Review",
  description: "Conheça o GPTZero: ferramenta de detecção de IA popular entre professores com métricas claras. Veja como funciona, vantagens, desvantagens e se é ideal para você.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/gptzero",
  },
};

export default function GPTZeroPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/gptzero#breadcrumb",
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
            "name": "Detecção de IA",
            "item": "https://www.hypehour.com.br/ferramenta-de-deteccao-de-ia"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "GPTZero",
            "item": "https://www.hypehour.com.br/ferramentas/gptzero"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/gptzero#software",
        "name": "GPTZero",
        "description": "GPTZero é um detector de conteúdo gerado por IA focado em educadores, oferecendo métricas claras e intuitivas para identificar textos artificiais.",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Web",
        "url": "https://gptzero.me",
        "creator": {
          "@type": "Organization",
          "name": "GPTZero"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "category": "Freemium"
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
          <Link href="/ferramenta-de-deteccao-de-ia" className="hover:text-black transition">Detecção de IA</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">GPTZero</span>
        </nav>

        {/* Header com logo e nome */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            G
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">GPTZero</h1>
            <p className="text-lg text-zinc-700">Detector de IA para educadores</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            GPTZero é uma ferramenta especializada em detecção de conteúdo gerado por inteligência artificial, desenvolvida especialmente para educadores, professores e instituições acadêmicas. Com um design intuitivo e métricas claras, oferece análise rápida de textos para identificar possível uso de IA.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            A plataforma se destaca pela sua abordagem focada em educação, fornecendo relatórios visuais que facilitam a identificação de padrões de IA em trabalhos acadêmicos, com suporte a múltiplos idiomas e uma comunidade crescente de usuários em universidades e escolas globalmente.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o GPTZero?</h2>
          <p className="text-zinc-700 leading-relaxed mb-8">
            GPTZero é um detector online especializado em identificar textos gerados por inteligência artificial, com foco em uso educacional. Foi criado para ajudar professores a validar a originalidade de trabalhos acadêmicos.
          </p>

          <h2 className="text-3xl font-bold text-black mb-4">Como o GPTZero detecta textos gerados por IA?</h2>
          <p className="text-zinc-700 leading-relaxed mb-8">
            GPTZero usa algoritmos de machine learning e análise linguística para detectar padrões característicos de textos gerados por IA como ChatGPT, GPT-4, Bard e outros modelos, fornecendo um score de probabilidade e destaque das seções suspeitas.
          </p>

          <h2 className="text-3xl font-bold text-black mb-4">O GPTZero é gratuito?</h2>
          <p className="text-zinc-700 leading-relaxed mb-8">
            Sim, GPTZero oferece um plano gratuito com análises limitadas. Existe também um plano premium para educadores e instituições com limites maiores e recursos avançados.
          </p>

          <h2 className="text-3xl font-bold text-black mb-4">O GPTZero funciona em português?</h2>
          <p className="text-zinc-700 leading-relaxed mb-8">
            Sim, GPTZero funciona em português e oferece suporte a múltiplos idiomas, incluindo português brasileiro e europeu, com boa precisão em diferentes contextos linguísticos.
          </p>

          <h2 className="text-3xl font-bold text-black mb-4">O GPTZero é confiável para educação?</h2>
          <p className="text-zinc-700 leading-relaxed">
            Sim, GPTZero é amplamente usado por educadores e instituições acadêmicas. Sua precisão é alta e seus relatórios são úteis como ferramenta de apoio na detecção de fraude acadêmica.
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
                <h3 className="text-xl font-semibold text-black mb-2">Cole ou envie o arquivo</h3>
                <p className="text-zinc-700">Insira o texto manualmente ou faça upload de um documento (PDF, Word, etc) que deseja verificar.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Processamento automático</h3>
                <p className="text-zinc-700">A ferramenta analisa o texto em segundos, aplicando seus algoritmos de detecção de IA.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Relatório visual</h3>
                <p className="text-zinc-700">Receba um relatório com score de probabilidade de IA, gráficos e trechos destacados de conteúdo suspeito.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Interpretação clara</h3>
                <p className="text-zinc-700">Os resultados são apresentados de forma intuitiva para facilitar a tomada de decisão sobre o conteúdo analisado.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Validar trabalhos acadêmicos",
              "Verificar redações de alunos",
              "Detectar fraude em avaliações",
              "Auditar trabalhos de conclusão",
              "Revisar ensaios e dissertações",
              "Validar pesquisas submetidas",
              "Checar artigos de blog",
              "Verificar conteúdo em LMS",
              "Analisar tarefas online",
              "Auditar submissões estudantis",
              "Detectar plágio de IA",
              "Validar autoria de trabalhos",
              "Revisar portfólios digitais",
              "Analisar conteúdo pedagógico",
              "Checar originalidade de teses",
              "Verificar trabalhos em grupo",
              "Auditar cursos online",
              "Detectar uso indevido de IA",
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
              <h3 className="text-xl font-semibold text-black mb-3">Score de probabilidade visual</h3>
              <p className="text-zinc-700">Apresenta um percentual claro da probabilidade de IA através de gráficos intuitivos e cores que facilitam a interpretação.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Destaque de seções geradas por IA</h3>
              <p className="text-zinc-700">Identifica e marca trechos específicos do texto que possivelmente foram gerados por IA, facilitando a localização.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Upload de múltiplos formatos</h3>
              <p className="text-zinc-700">Aceita textos colados, PDFs, documentos Word e outros formatos, facilitando a análise de diferentes tipos de trabalhos.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Relatórios detalhados para educadores</h3>
              <p className="text-zinc-700">Fornece insights específicos para uso em contexto educacional, com métricas pensadas para professores.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Integração com sistemas educacionais</h3>
              <p className="text-zinc-700">Oferece integração com plataformas como Canvas, Blackboard e Google Classroom através de extensões e APIs.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Histórico de análises</h3>
              <p className="text-zinc-700">Mantém um registro das análises realizadas, permitindo rastrear e comparar padrões ao longo do tempo.</p>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Interface intuitiva e fácil de usar, ideal para educadores sem conhecimento técnico",
              "Plano gratuito disponível com análises limitadas para testar a ferramenta",
              "Métricas visuais claras que facilitam a interpretação dos resultados",
              "Suporte especializado para educadores e instituições acadêmicas",
              "Destaca trechos específicos de conteúdo gerado por IA para análise detalhada",
              "Aceita múltiplos formatos de arquivo para maior flexibilidade",
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
              "Pode gerar falsos positivos em textos muito formais ou padronizados",
              "Limite de análises na versão gratuita, requerendo upgrade para uso intensivo",
              "Menos preciso com textos muito curtos ou fragmentados",
              "Não detecta todos os novos modelos de IA no mercado",
              "Requer conexão à internet, não funciona offline",
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o GPTZero?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Professores e educadores</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Instituições acadêmicas e universidades</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Coordenadores pedagógicos</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Cursos online e plataformas EAD</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Editores acadêmicos</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Análise de grandes volumes sem API</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Quem precisa de 100% de garantia</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Usuários sem conexão à internet</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Análise de código gerado por IA</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Orçamentos muito limitados</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vídeo do YouTube */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Veja o GPTZero em ação</h2>
          <div className="rounded-xl overflow-hidden shadow-lg border border-zinc-200">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/7ssBWBsptPk"
                title="GPTZero Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Comece a detectar IA em trabalhos acadêmicos</h2>
          <p className="text-lg mb-6 text-zinc-300">Use o GPTZero gratuitamente e verifique a originalidade de seus conteúdos</p>
          <a
            href="https://gptzero.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Acessar GPTZero →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            GPTZero é uma ferramenta especializada em detecção de IA com foco específico em educação. Sua interface intuitiva e métricas claras a tornam acessível para professores e instituições que precisam validar a originalidade de trabalhos acadêmicos.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Com um plano gratuito disponível e recursos premium para educadores, GPTZero oferece uma solução confiável para combater fraude acadêmica e ensinar alunos sobre o uso ético de ferramentas de IA.
          </p>
        </section>

        {/* FAQ */}
        <FAQSection />
      </div>
    </main>
  );
}
