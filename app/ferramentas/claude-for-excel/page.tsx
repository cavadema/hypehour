import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Claude for Excel - IA da Anthropic dentro do Microsoft Excel",
  description: "Conheça o Claude for Excel: add-in oficial da Anthropic que integra o Claude AI ao Microsoft Excel para análise de dados, geração de fórmulas e insights em linguagem natural. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/claude-for-excel" },
  openGraph: {
    title: "Claude for Excel - IA da Anthropic dentro do Microsoft Excel",
    description: "Add-in oficial que integra o Claude AI ao Microsoft Excel para análise de dados, fórmulas e insights em linguagem natural.",
    url: "https://www.hypehour.com.br/ferramentas/claude-for-excel",
    siteName: "Hypehour", images: [{ url: "https://www.hypehour.com.br/logo.png" }], locale: "pt_BR", type: "website",
  },
  twitter: { card: "summary_large_image", title: "Claude for Excel - IA Anthropic no Excel", description: "Add-in que integra o Claude AI ao Microsoft Excel para análise de dados e geração de fórmulas.", images: ["https://www.hypehour.com.br/logo.png"], creator: "@hypehourbr" },
};

export default function ClaudeForExcelPage() {
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
        "@id": "https://www.hypehour.com.br/ferramentas/claude-for-excel#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/claude-for-excel",
        "name": "Claude for Excel - IA da Anthropic dentro do Microsoft Excel",
        "description": "Conheça o Claude for Excel: add-in oficial da Anthropic que integra o Claude AI ao Microsoft Excel para análise de dados, geração de fórmulas e insights em linguagem natural. Veja vantagens, desvantagens e se é ideal para você.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/claude-for-excel#breadcrumb" },
        "datePublished": "2025-11-19",
        "dateModified": "2026-07-04",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/claude-for-excel#software" },
      },

      { "@type": "BreadcrumbList", "@id": "https://www.hypehour.com.br/ferramentas/claude-for-excel#breadcrumb", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.hypehour.com.br/" }, { "@type": "ListItem", position: 2, name: "IA para Planilhas", item: "https://www.hypehour.com.br/ia-para-planilhas" }, { "@type": "ListItem", position: 3, name: "Claude for Excel", item: "https://www.hypehour.com.br/ferramentas/claude-for-excel" }] },
      { "@type": "SoftwareApplication", "@id": "https://www.hypehour.com.br/ferramentas/claude-for-excel#software", name: "Claude for Excel", description: "Add-in oficial da Anthropic que integra o Claude AI diretamente no Microsoft Excel, permitindo análise de dados, geração de fórmulas e insights por linguagem natural.", applicationCategory: "BusinessApplication", operatingSystem: "Windows, macOS", url: "https://claude.com/claude-for-excel", mainEntityOfPage: "https://www.hypehour.com.br/ferramentas/claude-for-excel", 
        "image": "https://www.hypehour.com.br/logo.png",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Plano gratuito disponível" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.6",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "2018",
        },
        creator: { "@type": "Organization", name: "Anthropic" } },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <nav className="flex items-center gap-2 text-zinc-700 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="text-zinc-400">/</span>
          <Link href="/ia-para-planilhas" className="hover:text-black transition">IA para Planilhas</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Claude for Excel</span>
        </nav>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">C</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Claude for Excel</h1>
            <p className="text-lg text-zinc-700">O Claude AI da Anthropic diretamente dentro do Microsoft Excel</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">O Claude for Excel é o add-in oficial da Anthropic que integra o Claude AI diretamente no Microsoft Excel. Você pode fazer perguntas sobre seus dados, pedir fórmulas complexas, gerar análises e obter insights — tudo sem sair da planilha, usando linguagem natural.</p>
          <p className="text-lg text-zinc-700 leading-relaxed">Ideal para profissionais que já usam Excel no dia a dia e querem ampliar suas capacidades de análise com a inteligência do Claude, o modelo de IA mais capaz para raciocínio complexo.</p>
        </div>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Claude for Excel?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">Claude for Excel é a integração oficial entre o Claude (modelo de IA da Anthropic) e o Microsoft Excel. Funciona como um assistente inteligente dentro da própria planilha: você descreve o que precisa e o Claude escreve a fórmula, analisa os dados selecionados ou explica o que está acontecendo nos seus números.</p>
          <p className="text-zinc-700 leading-relaxed">Por ser um produto oficial da Anthropic, se beneficia das atualizações do modelo e da confiabilidade de uma solução mantida diretamente pelo criador do Claude.</p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[["1","Instale o add-in no Excel","Baixe e instale o Claude for Excel pela Microsoft AppSource ou diretamente pelo site da Anthropic."],["2","Abra o painel do Claude","Com a planilha aberta, acesse o painel do Claude na barra lateral do Excel e conecte sua conta."],["3","Pergunte sobre seus dados","Selecione células ou descreva o que precisa em linguagem natural — fórmulas, análises, limpeza de dados."],["4","Aplique o resultado","O Claude sugere a fórmula ou análise e você pode aplicar diretamente na planilha com um clique."]].map(([n,t,d])=>(
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
            {["Geração de fórmulas complexas","Análise de dados em linguagem natural","Limpeza e transformação de dados","Criação de tabelas dinâmicas","Geração de macros VBA","Análise estatística automática","Explicação de fórmulas existentes","Detecção de inconsistências","Geração de relatórios resumidos","Análise de séries temporais","Concatenação e transformação de texto","Cálculos financeiros avançados"].map((item,i)=>(
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition"><p className="text-zinc-700 text-sm">{item}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[["Geração de fórmulas por linguagem natural","Descreva o cálculo em português ou inglês e o Claude escreve a fórmula Excel correta, incluindo funções aninhadas complexas."],["Análise contextual dos dados","O Claude lê o contexto das células selecionadas e fornece análises relevantes baseadas no que está na planilha."],["Explicação de fórmulas","Entenda fórmulas complexas herdadas: o Claude explica passo a passo o que cada parte faz."],["Geração de código VBA","Cria macros e scripts VBA para automatizar tarefas repetitivas diretamente pela descrição do que precisa ser feito."],["Sugestões de melhoria","Identifica problemas em planilhas e sugere estruturas mais eficientes e fórmulas mais robustas."],["Integrado ao fluxo do Excel","Funciona sem sair do Excel, com contexto das células selecionadas disponível diretamente para o modelo."]].map(([t,d])=>(
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
            {["Produto oficial — mantido pela Anthropic com atualizações regulares do modelo","Sem sair do Excel — fluxo de trabalho integrado sem alternar entre apps","Claude no Excel — o raciocínio do Claude aplicado diretamente às suas planilhas","Contexto das células — entende o que está selecionado sem re-descrever","VBA incluído — gera macros para automação além de fórmulas","Explicação de fórmulas — aprende e entende o que já existe na planilha"].map((v,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm"><span className="text-black font-bold text-lg flex-shrink-0">✓</span><p className="text-zinc-700">{v}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {["Requer assinatura do Claude — o uso pleno depende de um plano ativo na Anthropic","Somente Excel — não funciona no Google Sheets ou LibreOffice","Privacidade dos dados — dados da planilha são enviados ao servidor para análise","Limitações em planilhas muito grandes — contexto de dados muito extenso pode ter limitações"].map((d,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg"><span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span><p className="text-zinc-700">{d}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Claude for Excel?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Profissionais que usam Excel intensamente no trabalho","Analistas financeiros e de dados que constroem relatórios complexos","Gestores que precisam extrair insights de planilhas sem dominar fórmulas","Quem herda planilhas complexas e precisa entendê-las","Qualquer usuário do Microsoft 365 que quer IA nativa no Excel"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Usuários do Google Sheets (não há versão equivalente)","Quem não usa o Microsoft 365 ou Excel desktop","Dados altamente confidenciais que não podem ser enviados a servidores externos"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Leve o Claude AI para dentro das suas planilhas</h2>
          <p className="text-lg mb-6 text-zinc-300">Instale o Claude for Excel e analise seus dados com a IA mais capaz do mercado</p>
          <a href="https://claude.com/claude-for-excel" target="_blank" rel="noopener noreferrer nofollow" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">Instalar Claude for Excel →</a>
        </section>
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O Claude for Excel é a integração mais direta entre o melhor modelo de IA para raciocínio complexo e a ferramenta de planilhas mais usada no mundo corporativo. Para profissionais que vivem no Excel, ter o Claude a um clique de distância transforma o que é possível fazer com os dados.</p>
          <p className="text-zinc-700 leading-relaxed">É a escolha natural para quem já usa ou quer usar o Claude e precisa de análises de planilhas mais ágeis e profundas no dia a dia.</p>
        </section>
        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
