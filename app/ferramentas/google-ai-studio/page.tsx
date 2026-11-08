import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Google AI Studio - Criar Apps com Gemini, Build Mode e Como Usar",
  description: "Conheça o Google AI Studio: ambiente do Google para testar modelos Gemini e criar apps descrevendo o que você quer. Veja o Build mode, custos, vantagens e limitações.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/google-ai-studio",
  },
  openGraph: {
    title: "Google AI Studio - Criar Apps com Gemini, Build Mode e Como Usar",
    description: "Conheça o Google AI Studio: ambiente do Google para testar modelos Gemini e criar apps descrevendo o que você quer. Veja o Build mode, custos, vantagens e limitações.",
    url: "https://www.hypehour.com.br/ferramentas/google-ai-studio",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Google AI Studio - Criar Apps com Gemini, Build Mode e Como Usar",
    description: "Conheça o Google AI Studio: ambiente do Google para testar modelos Gemini e criar apps descrevendo o que você quer. Veja o Build mode, custos, vantagens e limitações.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function GoogleAiStudioPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.hypehour.com.br/ferramentas/google-ai-studio#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/google-ai-studio",
        "name": "Google AI Studio - Criar Apps com Gemini, Build Mode e Como Usar",
        "description": "Conheça o Google AI Studio: ambiente do Google para testar modelos Gemini e criar apps descrevendo o que você quer. Veja o Build mode, custos, vantagens e limitações.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/google-ai-studio#breadcrumb" },
        "datePublished": "2026-11-08",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/google-ai-studio#software" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/google-ai-studio#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypehour.com.br/" },
          { "@type": "ListItem", "position": 2, "name": "IA para Vibe Coding", "item": "https://www.hypehour.com.br/ia-para-vibe-coding" },
          { "@type": "ListItem", "position": 3, "name": "Google AI Studio", "item": "https://www.hypehour.com.br/ferramentas/google-ai-studio" }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/google-ai-studio#software",
        "name": "Google AI Studio",
        "description": "Conheça o Google AI Studio: ambiente do Google para testar modelos Gemini e criar apps descrevendo o que você quer. Veja o Build mode, custos, vantagens e limitações.",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Web",
        "url": "https://aistudio.google.com/apps",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/google-ai-studio#webpage" },
        "image": "https://www.hypehour.com.br/logo.png",
        "featureList": ["Modo Build", "Acesso aos modelos Gemini", "Pré-visualização", "Código editável", "Integração com a API Gemini"],
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Plano gratuito disponível" }
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
          <Link href="/ia-para-vibe-coding" className="hover:text-black transition">IA para Vibe Coding</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Google AI Studio</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            G
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Google AI Studio</h1>
            <p className="text-lg text-zinc-700">{"Ambiente do Google para testar modelos Gemini e criar aplicativos a partir de uma descrição em linguagem natural"}</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">{"O Google AI Studio é o ambiente web do Google para experimentar os modelos Gemini e prototipar aplicações com IA. Além de testar prompts, ele tem o modo Build, que permite criar apps descrevendo em linguagem natural o que você quer construir."}</p>
          <p className="text-lg text-zinc-700 leading-relaxed">{"Esta página explica o que a ferramenta faz, como o Build funciona, o que é gratuito e quais pontos merecem atenção, principalmente em relação aos seus dados."}</p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">{"O que é o Google AI Studio?"}</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">{"O Google AI Studio é uma plataforma para trabalhar com os modelos Gemini sem montar infraestrutura. Você testa prompts, ajusta configurações e obtém código para integrar via API."}</p>
          <p className="text-zinc-700 leading-relaxed">{"No modo Build, a ferramenta funciona como um ambiente de vibe coding: você começa com um prompt, pede ajustes pelo chat e pode editar o código diretamente. Segundo a documentação do Google, a aba de código fica no painel de pré-visualização."}</p>
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
                <h3 className="text-xl font-semibold text-black mb-2">{"Entre com a conta Google"}</h3>
                <p className="text-zinc-700">{"O acesso ao AI Studio exige login com uma conta Google."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{"Descreva o app"}</h3>
                <p className="text-zinc-700">{"No modo Build, escreva na caixa de entrada o que você quer construir."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{"Ajuste pelo chat"}</h3>
                <p className="text-zinc-700">{"Peça ao Gemini mudanças, novas funções ou alterações de estilo."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">{"Edite o código"}</h3>
                <p className="text-zinc-700">{"Se preferir, altere o código diretamente na aba Code e teste na pré-visualização."}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Prototipar apps com Gemini", "Testar e comparar prompts", "Criar ferramentas internas simples", "Explorar capacidades dos modelos Gemini", "Gerar código para integração via API", "Validar ideias antes de investir em desenvolvimento", "Aprender a construir apps com IA", "Montar demos para clientes"].map((item, index) => (
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
              <h3 className="text-xl font-semibold text-black mb-3">{"Modo Build"}</h3>
              <p className="text-zinc-700">{"Cria apps a partir de uma descrição em linguagem natural, com chat para ajustes e aba de código."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Acesso aos modelos Gemini"}</h3>
              <p className="text-zinc-700">{"Permite testar os modelos Gemini mais recentes do Google em um só lugar."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Pré-visualização"}</h3>
              <p className="text-zinc-700">{"Mostra o app em funcionamento enquanto você pede mudanças."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Código editável"}</h3>
              <p className="text-zinc-700">{"Você pode editar o código gerado diretamente, sem ficar preso ao chat."}</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">{"Integração com a API Gemini"}</h3>
              <p className="text-zinc-700">{"Ajuda a levar um protótipo para uso real por meio da API."}</p>
            </div>
          </div>
        </section>

        {/* Preços */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Planos e preços</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">{"O uso básico do Google AI Studio é gratuito, com limites de uso. Os detalhes de cotas e preços de produção mudam com frequência, por isso consulte a documentação oficial."}</p>
          <div className="grid gap-3">
            {["Prototipagem: uso gratuito, sujeito a limites de taxa da API Gemini.", "Produção: o uso da API em produção é cobrado por tokens, conforme a tabela de preços do Google.", "Dados: a documentação do Google indica que, no uso gratuito, o conteúdo enviado pode ser usado para melhorar os modelos. Leia os termos antes de usar dados sensíveis."].map((item, index) => (
              <div key={index} className="p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <p className="text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-500 mt-3">{"Informações conferidas em fontes públicas em novembro de 2026. Confirme limites, preços e termos na documentação do Gemini API."}</p>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {["Gratuito para começar, sem precisar montar infraestrutura", "Acesso aos modelos Gemini mais recentes em um único lugar", "Modo Build cria apps a partir de uma descrição", "Código editável e pré-visualização no mesmo ambiente", "Boa porta de entrada para quem quer integrar Gemini via API"].map((advantage, index) => (
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
            {["O uso gratuito tem limites de taxa", "No uso gratuito, o conteúdo pode ser usado para melhorar os modelos, o que exige cuidado com dados sensíveis", "Exige conta Google", "Não é um IDE completo; é voltado a prototipagem e testes"].map((disadvantage, index) => (
              <div key={index} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                <span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span>
                <p className="text-zinc-700">{disadvantage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Para quem é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">{"Para quem é o Google AI Studio?"}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Desenvolvedores que querem explorar o Gemini antes de integrar"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Quem quer prototipar um app sem configurar ambiente"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Times que precisam validar uma ideia rapidamente"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">{"→"}</span>
                  <span className="text-zinc-700">{"Iniciantes em vibe coding"}</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">{"✕"}</span>
                  <span className="text-zinc-700">{"Projetos com dados sensíveis no plano gratuito"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">{"✕"}</span>
                  <span className="text-zinc-700">{"Aplicações em produção que dependem de cotas fixas"}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">{"✕"}</span>
                  <span className="text-zinc-700">{"Quem precisa de um IDE completo com controle de versão avançado"}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">{"Teste o modo Build do Google AI Studio"}</h2>
          <p className="text-lg mb-6 text-zinc-300">{"Descreva um app e veja o Gemini montar a primeira versão."}</p>
          <a
            href="https://aistudio.google.com/apps"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            {"Abrir o Google AI Studio →"}
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">{"O Google AI Studio é uma forma gratuita e direta de explorar o Gemini e prototipar apps com IA. O modo Build reduz a distância entre uma ideia e uma versão funcional."}</p>
          <p className="text-zinc-700 leading-relaxed">{"Para uso profissional, revise os limites e os termos de dados e use o protótipo como ponto de partida, não como produto final."}</p>
        </section>

        {/* FAQ */}
        <FAQSection />

        {/* Ferramentas Similares */}
        <SimilarTools />
      </div>
    </main>
  );
}
