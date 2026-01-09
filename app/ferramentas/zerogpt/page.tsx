import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
  title: "ZeroGPT - Detector de IA Gratuito | Análise e Review",
  description: "Conheça o ZeroGPT: ferramenta gratuita para detectar textos gerados por IA com precisão. Veja como funciona, vantagens, desvantagens e se é ideal para você.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/zerogpt",
  },
};

export default function ZeroGPTPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/zerogpt#breadcrumb",
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
            "name": "ZeroGPT",
            "item": "https://www.hypehour.com.br/ferramentas/zerogpt"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/zerogpt#software",
        "name": "ZeroGPT",
        "description": "ZeroGPT é um detector de textos gerados por IA gratuito e preciso, ideal para educadores, criadores de conteúdo e profissionais que precisam verificar autenticidade.",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Web",
        "url": "https://www.zerogpt.com",
        "creator": {
          "@type": "Organization",
          "name": "ZeroGPT"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "category": "Gratuito"
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
          <span className="text-black font-medium">ZeroGPT</span>
        </nav>

        {/* Header com logo e nome */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            Z
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">ZeroGPT</h1>
            <p className="text-lg text-zinc-700">Detector de IA gratuito e preciso</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O ZeroGPT é uma ferramenta gratuita de detecção de conteúdo gerado por inteligência artificial. Com algoritmos avançados de análise linguística e machine learning, ele identifica padrões característicos de textos criados por ChatGPT, GPT-4, Bard, Claude e outros modelos de IA.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Amplamente usado por educadores, editores, criadores de conteúdo e profissionais de RH, o ZeroGPT oferece análise instantânea, relatórios detalhados e suporte a múltiplos idiomas, incluindo português.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o ZeroGPT?</h2>
          <p className="text-zinc-700 leading-relaxed mb-8">
            ZeroGPT é um detector online que analisa textos e identifica a probabilidade de terem sido gerados por inteligência artificial, usando modelos próprios treinados com milhões de exemplos de textos humanos e gerados por IA.
          </p>

          <h2 className="text-3xl font-bold text-black mb-4">Como o ZeroGPT detecta textos gerados por IA?</h2>
          <p className="text-zinc-700 leading-relaxed mb-8">
            O ZeroGPT detecta textos gerados por IA analisando padrões de escrita, estrutura de frases, vocabulário e coesão, comparando o conteúdo com modelos treinados para diferenciar textos humanos e artificiais.
          </p>

          <h2 className="text-3xl font-bold text-black mb-4">O ZeroGPT é gratuito?</h2>
          <p className="text-zinc-700 leading-relaxed mb-8">
            Sim, o ZeroGPT oferece análise gratuita ilimitada, permitindo verificar textos sem necessidade de cadastro ou pagamento.
          </p>

          <h2 className="text-3xl font-bold text-black mb-4">O ZeroGPT funciona em português?</h2>
          <p className="text-zinc-700 leading-relaxed mb-8">
            Sim, o ZeroGPT funciona em português e em mais de 15 idiomas, analisando textos de diferentes origens com boa precisão.
          </p>

          <h2 className="text-3xl font-bold text-black mb-4">O ZeroGPT é confiável para detectar textos de IA?</h2>
          <p className="text-zinc-700 leading-relaxed">
            O ZeroGPT é considerado confiável para identificar indícios de textos gerados por IA, especialmente quando usado como ferramenta de apoio e não como veredito definitivo.
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
                <h3 className="text-xl font-semibold text-black mb-2">Cole o texto</h3>
                <p className="text-zinc-700">Insira o conteúdo que deseja verificar na caixa de texto do ZeroGPT (até 15.000 caracteres na versão gratuita).</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Análise automática</h3>
                <p className="text-zinc-700">A IA processa o texto em segundos, analisando estrutura, padrões linguísticos e indicadores de geração artificial.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Resultados detalhados</h3>
                <p className="text-zinc-700">Receba um percentual de probabilidade de IA, com trechos destacados e explicação dos sinais detectados.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Exporte ou compartilhe</h3>
                <p className="text-zinc-700">Salve os resultados em PDF, compartilhe com sua equipe ou use para documentação e compliance.</p>
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
              "Verificar originalidade de artigos",
              "Detectar uso de IA em redações",
              "Avaliar conteúdo para SEO",
              "Checar autenticidade de currículos",
              "Revisar textos de candidatos",
              "Analisar posts de blog",
              "Verificar e-mails e comunicados",
              "Auditar conteúdo gerado",
              "Garantir compliance editorial",
              "Detectar plágio digital",
              "Validar conteúdo jornalístico",
              "Checar descrições de produtos",
              "Revisar scripts e roteiros",
              "Analisar relatórios e documentos",
              "Verificar traduções automáticas",
              "Auditar content marketing",
              "Detectar automação em redes sociais",
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
              <h3 className="text-xl font-semibold text-black mb-3">Detecção gratuita ilimitada</h3>
              <p className="text-zinc-700">Analise textos sem limites de verificações diárias, ideal para professores e criadores que precisam checar volumes grandes de conteúdo.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Destaque de trechos gerados por IA</h3>
              <p className="text-zinc-700">Identifique exatamente quais partes do texto foram geradas artificialmente, com cores e indicadores visuais claros.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Suporte a múltiplos idiomas</h3>
              <p className="text-zinc-700">Funciona em português, inglês, espanhol, francês e mais de 10 outros idiomas, mantendo alta precisão de detecção.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Relatório com percentual de IA</h3>
              <p className="text-zinc-700">Receba uma porcentagem exata indicando quanto do texto foi possivelmente gerado por IA, facilitando decisões de aprovação.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">API para integração</h3>
              <p className="text-zinc-700">Conecte o ZeroGPT a sistemas LMS, plataformas de conteúdo ou workflows internos via API oficial (planos pagos).</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Processamento rápido e seguro</h3>
              <p className="text-zinc-700">Análise em segundos com criptografia de dados, sem armazenar textos após a verificação (GDPR compliant).</p>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Totalmente gratuito para uso básico — sem limites de verificações diárias",
              "Alta precisão de detecção — testado em milhões de textos e modelos de IA",
              "Interface simples e direta — basta colar o texto e clicar em verificar",
              "Funciona em português e outros 15 idiomas com qualidade consistente",
              "Destaca trechos suspeitos — você vê exatamente onde a IA foi usada",
              "Sem necessidade de cadastro ou login para uso básico",
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
              "Não é 100% preciso — textos mistos ou editados podem gerar falsos positivos",
              "Limite de 15.000 caracteres por verificação na versão gratuita",
              "Recursos avançados (API, relatórios detalhados) requerem plano pago",
              "Pode ter dificuldade com textos altamente técnicos ou especializados",
              "Não detecta todos os modelos de IA — ferramentas novas podem passar despercebidas",
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o ZeroGPT?</h2>
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
                  <span className="text-zinc-700">Editores e revisores de conteúdo</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Criadores de conteúdo e redatores</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Profissionais de RH e recrutadores</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Jornalistas e produtores editoriais</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Validação jurídica ou compliance crítico</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Análise de volumes massivos (sem API)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Detecção de modelos muito novos ou customizados</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Usuários que precisam de 100% de garantia</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Quem busca análise contextual profunda</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vídeo do YouTube */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Veja o ZeroGPT em ação</h2>
          <div className="rounded-xl overflow-hidden shadow-lg border border-zinc-200">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/zwGeKbDXhq8"
                title="ZeroGPT Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Pronto para verificar seus textos?</h2>
          <p className="text-lg mb-6 text-zinc-300">Use o ZeroGPT gratuitamente e descubra se seu conteúdo foi gerado por IA</p>
          <a
            href="https://www.zerogpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Acessar ZeroGPT →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O ZeroGPT é uma ferramenta essencial para educadores, criadores de conteúdo e profissionais que precisam garantir autenticidade de textos. Com alta precisão, interface simples e uso totalmente gratuito, é uma das melhores opções do mercado para detecção de IA.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Apesar de não ser 100% infalível, o ZeroGPT oferece uma camada importante de verificação e ajuda a identificar uso excessivo de ferramentas como ChatGPT, permitindo decisões informadas sobre aprovação e correção de conteúdo.
          </p>
        </section>

        {/* FAQ */}
        <FAQSection />
      </div>
    </main>
  );
}
