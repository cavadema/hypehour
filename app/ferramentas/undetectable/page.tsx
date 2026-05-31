import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Undetectable AI - Detector e Humanizador de Texto Gerado por IA",
  description: "Conheça o Undetectable AI: ferramenta que detecta textos gerados por IA e os humaniza para passar pelos principais detectores. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/undetectable" },
  openGraph: {
    title: "Undetectable AI - Detector e Humanizador de Texto Gerado por IA",
    description: "Ferramenta que detecta textos gerados por IA e os humaniza para passar pelos principais detectores do mercado.",
    url: "https://www.hypehour.com.br/ferramentas/undetectable",
    siteName: "Hypehour",
    images: [{ url: "https://www.hypehour.com.br/logo.png" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Undetectable AI - Detector e Humanizador de Texto Gerado por IA",
    description: "Detecta textos gerados por IA e os humaniza para passar pelos principais detectores do mercado.",
    images: ["https://www.hypehour.com.br/logo.png"],
    creator: "@hypehourbr",
  },
};

export default function UndetectablePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/undetectable#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hypehour.com.br/" },
          { "@type": "ListItem", position: 2, name: "Ferramentas de Detecção de IA", item: "https://www.hypehour.com.br/ferramenta-de-deteccao-de-ia" },
          { "@type": "ListItem", position: 3, name: "Undetectable AI", item: "https://www.hypehour.com.br/ferramentas/undetectable" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/undetectable#software",
        name: "Undetectable AI",
        description: "Plataforma que detecta texto gerado por IA com 99%+ de precisão e oferece humanização para que o conteúdo passe pelos principais detectores do mercado.",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Web",
        url: "https://undetectable.ai",
        mainEntityOfPage: "https://www.hypehour.com.br/ferramentas/undetectable",
        creator: { "@type": "Organization", name: "Undetectable AI" },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <nav className="flex items-center gap-2 text-zinc-700 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="text-zinc-400">/</span>
          <Link href="/ferramenta-de-deteccao-de-ia" className="hover:text-black transition">Detecção de IA</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Undetectable AI</span>
        </nav>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">U</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Undetectable AI</h1>
            <p className="text-lg text-zinc-700">Detecta e humaniza textos gerados por inteligência artificial</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O Undetectable AI é uma plataforma dual: detecta se um texto foi gerado por ferramentas como ChatGPT, Claude ou Gemini com 99%+ de precisão, e oferece um humanizador que reescreve o conteúdo para que passe pelos principais detectores do mercado simultaneamente.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            É amplamente usado por criadores de conteúdo, profissionais de marketing e redatores que produzem textos com IA e precisam garantir que o resultado soe natural e humano.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Undetectable AI?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Undetectable AI é uma plataforma que agrega os resultados de múltiplos detectores de IA em uma única tela, mostrando simultaneamente o que GPTZero, Originality.ai, Copyleaks, Turnitin e outros pensam sobre um texto. Além disso, oferece um humanizador que reescreve o conteúdo para eliminar os padrões que esses detectores identificam.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            O resultado é um texto que mantém o sentido original, mas com variações de estrutura, vocabulário e ritmo que o tornam indistinguível de um texto escrito por humano.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[
              ["1", "Cole o texto", "Insira o texto que deseja analisar ou humanizar na caixa de entrada da plataforma."],
              ["2", "Detecte a IA", "A plataforma consulta múltiplos detectores simultaneamente e exibe o resultado de cada um — identificando o percentual de probabilidade de ser IA."],
              ["3", "Humanize o conteúdo", "Com um clique, o humanizador reescreve o texto alterando estrutura e vocabulário para eliminar os padrões de IA."],
              ["4", "Verifique novamente", "Rode o texto humanizado pelos detectores para confirmar que passou em todos antes de usar."],
            ].map(([num, title, desc]) => (
              <div key={num} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">{num}</div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
                  <p className="text-zinc-700">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Humanizar textos gerados por ChatGPT", "Detectar conteúdo de IA em artigos", "Verificar textos antes de publicar", "Humanizar copy de marketing", "Reescrever posts para redes sociais", "Humanizar e-mails corporativos", "Detectar plágio via IA", "Verificar textos acadêmicos", "Humanizar descrições de produtos", "Preparar textos para SEO", "Analisar textos de terceiros", "Humanizar roteiros de vídeo"].map((item, i) => (
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition">
                <p className="text-zinc-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[
              ["Detecção por múltiplos detectores simultâneos", "Consulta GPTZero, Originality.ai, Copyleaks, Turnitin e outros em uma só análise, exibindo todos os resultados lado a lado."],
              ["Humanizador de texto com IA", "Reescreve o conteúdo mantendo o sentido original, mas eliminando os padrões linguísticos que os detectores identificam como artificiais."],
              ["Níveis de humanização ajustáveis", "Permite escolher a intensidade da reescrita, de ajustes sutis a transformações mais profundas do texto."],
              ["Suporte a múltiplos idiomas", "Funciona com textos em inglês, português e outros idiomas, com melhores resultados em inglês."],
              ["API para desenvolvedores", "Oferece API para integrar detecção e humanização em ferramentas e fluxos de trabalho próprios."],
              ["Histórico de análises", "Salva o histórico de textos analisados e humanizados para referência futura."],
            ].map(([title, desc]) => (
              <div key={title} className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-black mb-3">{title}</h3>
                <p className="text-zinc-700">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Dois em um — detecta e humaniza na mesma plataforma, sem precisar de ferramentas separadas",
              "Múltiplos detectores agregados — vê o resultado de GPTZero, Turnitin e outros de uma vez",
              "Mantém o sentido do texto — a humanização não distorce a mensagem original",
              "Suporte a português — funciona com textos em PT-BR além do inglês",
              "API disponível — integrável em fluxos de produção de conteúdo automatizados",
              "Interface simples — não requer conhecimento técnico para usar",
            ].map((v, i) => (
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <span className="text-black font-bold text-lg flex-shrink-0">✓</span>
                <p className="text-zinc-700">{v}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {[
              "Plano gratuito limitado — volume de texto para humanizar é restrito sem assinatura",
              "Resultados não são garantidos — detectores evoluem constantemente e nenhuma humanização é 100% definitiva",
              "Humanização pode introduzir erros — sempre revise o texto reescrito antes de usar",
              "Uso acadêmico requer atenção — verifique as políticas da sua instituição antes de usar",
              "Melhor desempenho em inglês — português pode ter resultados menos consistentes",
            ].map((d, i) => (
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                <span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span>
                <p className="text-zinc-700">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Undetectable AI?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Criadores de conteúdo que produzem com IA", "Profissionais de marketing e copywriters", "Redatores que precisam verificar textos de clientes", "Empresas que publicam conteúdo em volume", "Desenvolvedores que precisam de API de humanização"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Uso acadêmico sem verificar políticas da instituição", "Quem precisa de 100% de garantia que passa por todos os detectores", "Textos muito técnicos onde a humanização pode distorcer o sentido", "Quem tem orçamento zero e precisa de muitos caracteres"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Seu texto de IA vai passar pelo detector?</h2>
          <p className="text-lg mb-6 text-zinc-300">Teste o Undetectable AI gratuitamente e descubra agora</p>
          <a href="https://undetectable.ai" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">
            Acessar Undetectable AI →
          </a>
        </section>

        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Undetectable AI é uma das ferramentas mais completas para quem trabalha com conteúdo gerado por IA e precisa tanto de verificação quanto de humanização em um só lugar. A agregação de múltiplos detectores é seu maior diferencial.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Use com responsabilidade e sempre revise o texto humanizado antes de publicar. Para uso profissional e comercial, é uma das melhores opções disponíveis no mercado.
          </p>
        </section>

        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
