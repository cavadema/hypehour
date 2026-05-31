import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
  title: "QuillBot - Ferramenta de IA para Paráfrase e Escrita",
  description: "Conheça o QuillBot: ferramenta de IA para paráfrase, verificação gramatical, sumarização e melhoria de textos. Ideal para estudantes, escritores e profissionais. Veja vantagens e como usar.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/quilbot",
  },
  openGraph: {
    title: "QuillBot - Ferramenta de IA para Paráfrase e Escrita",
    description: "Conheça o QuillBot: ferramenta de IA para paráfrase, verificação gramatical, sumarização e melhoria de textos. Ideal para estudantes, escritores e profissionais.",
    url: "https://www.hypehour.com.br/ferramentas/quilbot",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "QuillBot - Ferramenta de IA para Paráfrase e Escrita",
    description: "Parafraseie, corrija gramática e melhore seus textos com IA — QuillBot para estudantes, escritores e profissionais.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function QuillBotPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/quilbot#breadcrumb",
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
            "name": "Ferramentas de IA para Conteúdo",
            "item": "https://www.hypehour.com.br/ferramentas-de-ia-para-conteudo"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "QuillBot",
            "item": "https://www.hypehour.com.br/ferramentas/quilbot"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/quilbot#software",
        "name": "QuillBot",
        "description": "Ferramenta de IA para paráfrase, verificação gramatical, sumarização e melhoria de textos em múltiplos idiomas.",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Web",
        "url": "https://quillbot.com/",
        "mainEntityOfPage": "https://www.hypehour.com.br/ferramentas/quilbot",
        "creator": {
          "@type": "Organization",
          "name": "QuillBot"
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
          <Link href="/ferramentas-de-ia-para-conteudo" className="hover:text-black transition">Ferramentas de IA para Conteúdo</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">QuillBot</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            Q
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">QuillBot</h1>
            <p className="text-lg text-zinc-700">Melhore seus textos com IA — paráfrase, gramática e sumarização</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O QuillBot é uma das ferramentas de escrita com inteligência artificial mais utilizadas no mundo, com mais de 35 milhões de usuários. A plataforma oferece um conjunto completo de recursos para melhorar textos: paráfrase inteligente, verificação gramatical avançada, sumarização, tradução e detecção de plágio.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Ideal para estudantes, jornalistas, escritores, profissionais de marketing e qualquer pessoa que trabalhe com texto e queira aumentar a qualidade e eficiência da sua escrita.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o QuillBot?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            QuillBot é uma plataforma de escrita com IA fundada em 2017 e adquirida pela Course Hero. A ferramenta usa modelos de linguagem avançados para reformular textos de forma inteligente, preservando o significado original enquanto melhora clareza, fluência e adequação ao tom desejado.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Diferente de simples trocadores de palavras, o QuillBot entende o contexto das frases e gera variações que fazem sentido linguisticamente, com múltiplos modos de paráfrase para diferentes situações e tons de comunicação.
          </p>
        </section>

        {/* Como funciona */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">1</div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Cole o texto</h3>
                <p className="text-zinc-700">Cole o texto que deseja melhorar na caixa de entrada do QuillBot — funciona com frases curtas, parágrafos ou textos longos.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">2</div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Escolha o modo</h3>
                <p className="text-zinc-700">Selecione o modo de paráfrase desejado: Padrão, Fluente, Formal, Simples, Criativo, Expansão ou Encurtamento conforme sua necessidade.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">3</div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Gere a paráfrase</h3>
                <p className="text-zinc-700">Clique em parafrasear e o QuillBot gera instantaneamente uma versão reformulada do texto com o tom e estilo do modo escolhido.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">4</div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Revise e use</h3>
                <p className="text-zinc-700">Revise o resultado, ajuste palavras individualmente se necessário e copie o texto melhorado para usar no seu projeto.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Paráfrase de textos acadêmicos",
              "Correção gramatical e ortográfica",
              "Resumo de artigos e documentos",
              "Tradução de textos",
              "Melhoria de redações e e-mails",
              "Reformulação de conteúdo de marketing",
              "Verificação de plágio",
              "Adaptação de tom para diferentes públicos",
              "Simplificação de textos técnicos",
              "Expansão de textos curtos",
              "Escrita mais fluente e natural",
              "Revisão de trabalhos acadêmicos"
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
              <h3 className="text-xl font-semibold text-black mb-3">Paráfrase com múltiplos modos</h3>
              <p className="text-zinc-700">Sete modos de paráfrase — Padrão, Fluente, Formal, Simples, Criativo, Expansão e Encurtamento — para adaptar o texto ao contexto e público desejados.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Grammar Checker avançado</h3>
              <p className="text-zinc-700">Identificação e correção de erros gramaticais, ortográficos, de pontuação e estilo com sugestões contextuais e explicações claras.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Summarizer (Sumarizador)</h3>
              <p className="text-zinc-700">Resume textos longos extraindo os pontos principais, com opção de resumo em parágrafos ou em lista de tópicos.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Tradutor com IA</h3>
              <p className="text-zinc-700">Tradução de textos com qualidade contextual em dezenas de idiomas, incluindo português, com preservação do estilo e tom.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Extensão para Chrome e Word</h3>
              <p className="text-zinc-700">Integração direta com Google Docs, Word Online e outros editores de texto via extensão de navegador e add-in para Microsoft Word.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Verificador de plágio (Premium)</h3>
              <p className="text-zinc-700">Compara textos com bilhões de páginas da web para identificar similaridades e garantir originalidade do conteúdo.</p>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Múltiplos modos de paráfrase — adapta o texto ao tom e contexto certo",
              "Integração com Word e Google Docs — funciona onde você já escreve",
              "Suporte a português — paráfrase e correção em português com qualidade",
              "Interface simples e rápida — resultado instantâneo sem curva de aprendizado",
              "Plano gratuito funcional — acesso real às ferramentas principais sem custo",
              "Ferramenta completa — paráfrase, gramática, resumo, tradução e plágio em um só lugar"
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
              "Limite de caracteres no plano gratuito — textos muito longos exigem upgrade",
              "Alguns modos de paráfrase são exclusivos do Premium — Formal, Criativo e outros",
              "Verificação de plágio apenas no Premium — recurso importante está no plano pago",
              "Resultados podem precisar de revisão — nem sempre a paráfrase é perfeita no primeiro resultado",
              "Não gera conteúdo do zero — é uma ferramenta de melhoria, não de criação"
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o QuillBot?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {[
                  "Estudantes e pesquisadores acadêmicos",
                  "Escritores e jornalistas",
                  "Profissionais de marketing de conteúdo",
                  "Criadores que escrevem em outro idioma",
                  "Qualquer pessoa que queira melhorar textos rapidamente"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-black">→</span>
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {[
                  "Quem precisa criar textos longos do zero",
                  "Geração de conteúdo criativo original",
                  "Uso que viole políticas de integridade acadêmica",
                  "Textos técnicos muito especializados onde precisão é crítica",
                  "Quem espera 100% de automação sem revisão humana"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-zinc-700">✕</span>
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Melhore seus textos com IA agora</h2>
          <p className="text-lg mb-6 text-zinc-300">Experimente o QuillBot gratuitamente e transforme a qualidade da sua escrita</p>
          <a
            href="https://quillbot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Acessar QuillBot →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O QuillBot é uma ferramenta essencial para quem trabalha com texto. A combinação de paráfrase inteligente, correção gramatical, sumarização e integração com os principais editores de texto o torna um dos assistentes de escrita com IA mais completos e acessíveis do mercado.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Se você quer melhorar a qualidade dos seus textos, adaptar o tom para diferentes públicos ou simplesmente escrever com mais eficiência, o QuillBot é um ponto de partida muito sólido — e o plano gratuito já oferece valor real para o uso cotidiano.
          </p>
        </section>

        <FAQSection />
      </div>
    </main>
  );
}
