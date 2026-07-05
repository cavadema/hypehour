import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Scaffold - Gerador de Projetos com IA para Vibe Coding",
  description: "Conheça o Scaffold: ferramenta de IA que gera a estrutura completa de projetos de software a partir de uma descrição, acelerando o início de qualquer aplicação. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/scaffold" },
  openGraph: {
    title: "Scaffold - Gerador de Projetos com IA para Vibe Coding",
    description: "Ferramenta de IA que gera a estrutura completa de projetos de software a partir de uma descrição.",
    url: "https://www.hypehour.com.br/ferramentas/scaffold",
    siteName: "Hypehour", images: [{ url: "https://www.hypehour.com.br/logo.png" }], locale: "pt_BR", type: "website",
  },
  twitter: { card: "summary_large_image", title: "Scaffold - Gerador de Projetos com IA", description: "Gera a estrutura completa de projetos de software a partir de uma descrição para vibe coding.", images: ["https://www.hypehour.com.br/logo.png"], creator: "@hypehourbr" },
};

export default function ScaffoldPage() {
  const schemaData = {
    "@context": "https://schema.org", "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.hypehour.com.br/#organization",
        "name": "Hypehour",
        "url": "https://www.hypehour.com.br",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.hypehour.com.br/#website",
        "name": "Hypehour",
        "url": "https://www.hypehour.com.br",
        "publisher": { "@id": "https://www.hypehour.com.br/#organization" },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.hypehour.com.br/ferramentas/scaffold#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/scaffold",
        "name": "Scaffold - Gerador de Projetos com IA para Vibe Coding",
        "description": "Conheça o Scaffold: ferramenta de IA que gera a estrutura completa de projetos de software a partir de uma descrição, acelerando o início de qualquer aplicação. Veja vantagens, desvantagens e se é ideal para você.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/scaffold#breadcrumb" },
        "datePublished": "2025-11-19",
        "dateModified": "2026-07-04",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/scaffold#software" },
      },

      { "@type": "BreadcrumbList", "@id": "https://www.hypehour.com.br/ferramentas/scaffold#breadcrumb", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.hypehour.com.br/" }, { "@type": "ListItem", position: 2, name: "Vibe Coding", item: "https://www.hypehour.com.br/ia-para-vibe-coding" }, { "@type": "ListItem", position: 3, name: "Scaffold", item: "https://www.hypehour.com.br/ferramentas/scaffold" }] },
      { "@type": "SoftwareApplication", "@id": "https://www.hypehour.com.br/ferramentas/scaffold#software", name: "Scaffold", description: "Ferramenta de IA para geração automática de estruturas de projetos de software, incluindo arquivos, configurações e boilerplate a partir de uma descrição em linguagem natural.", applicationCategory: "DeveloperApplication", operatingSystem: "Web", url: "https://www.scaffoldtool.com", mainEntityOfPage: "https://www.hypehour.com.br/ferramentas/scaffold", 
        "image": "https://www.hypehour.com.br/logo.png",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Plano gratuito disponível" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "1284",
        },
        creator: { "@type": "Organization", name: "Scaffold" } },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <nav className="flex items-center gap-2 text-zinc-700 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="text-zinc-400">/</span>
          <Link href="/ia-para-vibe-coding" className="hover:text-black transition">Vibe Coding</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Scaffold</span>
        </nav>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">S</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Scaffold</h1>
            <p className="text-lg text-zinc-700">Gere a estrutura completa do seu projeto com IA em segundos</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">O Scaffold é uma ferramenta de IA que gera automaticamente a estrutura completa de projetos de software. Descreva o que quer construir — tipo de aplicação, tecnologias preferidas e requisitos principais — e a IA cria o boilerplate, configurações e arquivos iniciais prontos para desenvolvimento.</p>
          <p className="text-lg text-zinc-700 leading-relaxed">Elimina horas gastas com setup inicial, permitindo que desenvolvedores comecem a codar o que importa imediatamente, alinhado com o fluxo de vibe coding.</p>
        </div>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Scaffold?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">Scaffold é um gerador de projetos com IA que transforma descrições em linguagem natural em estruturas de projeto funcionais. Em vez de copiar boilerplate de repositórios ou configurar manualmente cada arquivo, você descreve o projeto e recebe uma base sólida para começar a desenvolver.</p>
          <p className="text-zinc-700 leading-relaxed">Suporta múltiplos frameworks e stacks populares, gerando estruturas otimizadas para cada combinação de tecnologias com as melhores práticas já aplicadas.</p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[["1","Descreva o projeto","Informe o tipo de aplicação, tecnologias desejadas e requisitos principais em linguagem natural."],["2","IA gera a estrutura","O Scaffold cria todos os arquivos, pastas, configurações e dependências adequados para o projeto descrito."],["3","Baixe ou clone o projeto","Acesse a estrutura gerada via download direto ou clone direto para seu ambiente de desenvolvimento."],["4","Comece a codar","Com o setup pronto e as melhores práticas já aplicadas, você começa a desenvolver as funcionalidades imediatamente."]].map(([n,t,d])=>(
              <div key={n} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">{n}</div>
                <div><h3 className="text-xl font-semibold text-black mb-2">{t}</h3><p className="text-zinc-700">{d}</p></div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Iniciar projetos Next.js","Gerar boilerplate de APIs REST","Setup de apps mobile React Native","Estrutura de projetos Python/FastAPI","Configuração de monorepos","Projeto full-stack com autenticação","Templates de CLIs e ferramentas","Setup de microsserviços","Estrutura de bibliotecas NPM","Projetos com Docker e CI/CD","Apps com banco de dados configurado","Projetos com testes já estruturados"].map((item,i)=>(
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition"><p className="text-zinc-700 text-sm">{item}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[["Geração de estrutura completa","Cria todos os arquivos, pastas, configurações e dependências necessários para o projeto descrito."],["Suporte a múltiplos stacks","Conhece os principais frameworks e stacks modernos, gerando estruturas otimizadas para cada combinação."],["Melhores práticas embutidas","A estrutura gerada já incorpora boas práticas de organização, lint, formatação e testes para o stack escolhido."],["Configurações prontas","Gera arquivos de configuração de bundlers, transpiladores, Docker, CI/CD e outras ferramentas já ajustados."],["Personalização via prompt","Ajuste detalhes específicos descrevendo requisitos adicionais, plugins ou padrões que o projeto deve seguir."],["Download ou integração com repositório","Baixe o projeto diretamente ou integre com GitHub para criar o repositório automaticamente."]].map(([t,d])=>(
              <div key={t} className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-black mb-3">{t}</h3>
                <p className="text-zinc-700">{d}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {["Zero tempo de setup — estrutura completa em segundos em vez de horas","Melhores práticas — projeto já configurado com padrões do mercado","Multi-stack — funciona para web, mobile, backend e ferramentas","Prompt natural — sem precisar lembrar flags e configurações de CLIs","Boas práticas embutidas — lint, testes e CI/CD já incluídos","Acelera vibe coding — foco total nas funcionalidades, não no boilerplate"].map((v,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm"><span className="text-black font-bold text-lg flex-shrink-0">✓</span><p className="text-zinc-700">{v}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {["Estruturas genéricas — podem não refletir convenções específicas da sua empresa ou time","Revisão necessária — o código gerado deve sempre ser revisado antes de ir para produção","Stacks muito nichados — frameworks menos populares podem ter suporte limitado","Dependência de atualização — a IA pode gerar versões de dependências desatualizadas"].map((d,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg"><span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span><p className="text-zinc-700">{d}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Scaffold?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Desenvolvedores iniciando projetos com frequência","Quem pratica vibe coding e quer focar nas features","Startups que precisam de MVPs rápidos","Estudantes e bootcamps que criam muitos projetos","Freelancers que entregam projetos de forma ágil"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Times com padrões de código muito específicos já estabelecidos","Projetos que usam stacks altamente personalizados ou legados","Quem prefere controle total sobre cada arquivo de configuração"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Comece seu próximo projeto em segundos</h2>
          <p className="text-lg mb-6 text-zinc-300">Use o Scaffold para gerar a estrutura do seu projeto e começar a codar agora</p>
          <a href="https://www.scaffoldtool.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">Acessar Scaffold →</a>
        </section>
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O Scaffold resolve um problema universal dos desenvolvedores: a perda de tempo no setup inicial. Ao automatizar a geração da estrutura do projeto com IA, libera energia criativa para o que realmente importa — construir as funcionalidades.</p>
          <p className="text-zinc-700 leading-relaxed">Para quem pratica vibe coding ou simplesmente quer começar a construir sem friction, o Scaffold é uma adição valiosa ao toolkit de desenvolvimento.</p>
        </section>
        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
