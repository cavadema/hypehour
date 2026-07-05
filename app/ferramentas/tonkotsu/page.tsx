import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Tonkotsu AI - Construtor de Fluxos de Agentes de IA",
  description: "Conheça o Tonkotsu AI: plataforma visual para construir e orquestrar fluxos de agentes de IA com ferramentas, memória e execução autônoma. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/tonkotsu" },
  openGraph: {
    title: "Tonkotsu AI - Construtor de Fluxos de Agentes de IA",
    description: "Plataforma visual para construir e orquestrar fluxos de agentes de IA com ferramentas, memória e execução autônoma.",
    url: "https://www.hypehour.com.br/ferramentas/tonkotsu",
    siteName: "Hypehour", images: [{ url: "https://www.hypehour.com.br/logo.png" }], locale: "pt_BR", type: "website",
  },
  twitter: { card: "summary_large_image", title: "Tonkotsu AI - Fluxos de Agentes de IA", description: "Plataforma visual para construir e orquestrar fluxos de agentes de IA com execução autônoma.", images: ["https://www.hypehour.com.br/logo.png"], creator: "@hypehourbr" },
};

export default function TonkotsuPage() {
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
        "@id": "https://www.hypehour.com.br/ferramentas/tonkotsu#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/tonkotsu",
        "name": "Tonkotsu AI - Construtor de Fluxos de Agentes de IA",
        "description": "Conheça o Tonkotsu AI: plataforma visual para construir e orquestrar fluxos de agentes de IA com ferramentas, memória e execução autônoma. Veja vantagens, desvantagens e se é ideal para você.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/tonkotsu#breadcrumb" },
        "datePublished": "2025-11-19",
        "dateModified": "2026-07-04",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/tonkotsu#software" },
      },

      { "@type": "BreadcrumbList", "@id": "https://www.hypehour.com.br/ferramentas/tonkotsu#breadcrumb", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.hypehour.com.br/" }, { "@type": "ListItem", position: 2, name: "Criação de Agentes de IA", item: "https://www.hypehour.com.br/criacao-agentes-ia" }, { "@type": "ListItem", position: 3, name: "Tonkotsu AI", item: "https://www.hypehour.com.br/ferramentas/tonkotsu" }] },
      { "@type": "SoftwareApplication", "@id": "https://www.hypehour.com.br/ferramentas/tonkotsu#software", name: "Tonkotsu AI", description: "Plataforma visual para criação de fluxos de agentes de IA com suporte a ferramentas, memória persistente e execução autônoma de tarefas.", applicationCategory: "DeveloperApplication", operatingSystem: "Web", url: "https://tonkotsu.ai", mainEntityOfPage: "https://www.hypehour.com.br/ferramentas/tonkotsu", 
        "image": "https://www.hypehour.com.br/logo.png",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Plano gratuito disponível" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "1353",
        },
        creator: { "@type": "Organization", name: "Tonkotsu AI" } },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <nav className="flex items-center gap-2 text-zinc-700 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="text-zinc-400">/</span>
          <Link href="/criacao-agentes-ia" className="hover:text-black transition">Criação de Agentes de IA</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Tonkotsu AI</span>
        </nav>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">T</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Tonkotsu AI</h1>
            <p className="text-lg text-zinc-700">Construa fluxos de agentes de IA com interface visual e execução autônoma</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">O Tonkotsu AI é uma plataforma para construir fluxos de agentes de IA de forma visual e intuitiva. Permite criar agentes com ferramentas, memória e capacidade de execução autônoma, conectando-os em pipelines que automatizam tarefas do início ao fim.</p>
          <p className="text-lg text-zinc-700 leading-relaxed">Pensado para desenvolvedores e equipes técnicas que querem construir agentes produtivos rapidamente, sem precisar gerenciar a infraestrutura de execução por conta própria.</p>
        </div>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Tonkotsu AI?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">Tonkotsu AI é um construtor de agentes focado em produtividade do desenvolvedor. A interface visual facilita a composição de fluxos complexos, enquanto o suporte a ferramentas externas e memória persistente garante que os agentes tenham o contexto necessário para executar tarefas autônomas de longa duração.</p>
          <p className="text-zinc-700 leading-relaxed">O nome remete ao ramen tonkotsu — um caldo rico e encorpado — refletindo a proposta de agentes substanciais, com profundidade de contexto e capacidade de execução robusta.</p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[["1","Crie o agente visualmente","Use a interface de fluxos para definir o comportamento do agente, conectando blocos de ação, decisão e ferramentas."],["2","Adicione ferramentas e memória","Conecte o agente a APIs, bancos de vetores e outras fontes de dados para enriquecer o contexto disponível."],["3","Configure gatilhos de execução","Defina quando o agente deve ser acionado: por evento, agendamento, webhook ou chamada manual."],["4","Acompanhe a execução em tempo real","Monitore cada passo do agente com logs detalhados e intervenha quando necessário."]].map(([n,t,d])=>(
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
            {["Automação de processos empresariais","Agentes de pesquisa autônoma","Processamento de documentos","Qualificação automática de leads","Monitoramento de concorrentes","Geração de relatórios periódicos","Suporte e atendimento com IA","Agentes de revisão de código","Pipelines de dados inteligentes","Integração entre sistemas","Notificações e alertas inteligentes","Triagem automática de e-mails"].map((item,i)=>(
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition"><p className="text-zinc-700 text-sm">{item}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[["Interface visual de fluxos","Construa o comportamento do agente arrastando e conectando blocos, sem precisar escrever código de orquestração."],["Memória de curto e longo prazo","Agentes com contexto imediato da sessão e memória persistente para aprender com execuções anteriores."],["Ferramentas integradas","Conecte o agente a buscas na web, APIs REST, execução de código e bancos de dados diretamente na interface."],["Gatilhos flexíveis","Acione agentes por eventos, agendamentos, webhooks ou integração com outras plataformas."],["Execução assíncrona","Agentes rodam em background sem bloquear outras operações, com notificação ao concluir."],["Controle de erros e retry","Lógica automática de retry e fallback para lidar com falhas em ferramentas ou APIs externas."]].map(([t,d])=>(
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
            {["Interface visual — cria fluxos complexos sem código de orquestração","Memória dual — contexto imediato e persistente para execuções mais inteligentes","Ferramentas nativas — web, APIs e código integrados sem configuração extra","Gatilhos flexíveis — evento, agendamento ou webhook para qualquer caso de uso","Execução assíncrona — agentes rodam em background sem bloquear o sistema","Retry automático — lida com falhas sem intervenção manual"].map((v,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm"><span className="text-black font-bold text-lg flex-shrink-0">✓</span><p className="text-zinc-700">{v}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {["Curva inicial — a interface visual exige aprendizado para fluxos mais sofisticados","Custo por token — execuções longas de agentes geram custos variáveis de LLM","Limitações em tempo real — não ideal para interações que exigem resposta em milissegundos","Debugging complexo — rastrear erros em fluxos visuais pode ser mais difícil que em código puro"].map((d,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg"><span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span><p className="text-zinc-700">{d}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Tonkotsu AI?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Desenvolvedores que querem criar agentes sem infraestrutura própria","Startups automatizando processos internos com IA","Times técnicos construindo produtos baseados em agentes","Empresas querendo explorar automação de IA com baixo atrito inicial","Profissionais de operações digitalizando fluxos manuais"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Casos que exigem latência ultrabaixa em cada resposta","Usuários sem base técnica para configurar fluxos","Tarefas triviais que um simples prompt resolve"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Construa agentes de IA robustos com fluxos visuais</h2>
          <p className="text-lg mb-6 text-zinc-300">Experimente o Tonkotsu AI e crie seu primeiro agente autônomo hoje</p>
          <a href="https://tonkotsu.ai" target="_blank" rel="noopener noreferrer nofollow" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">Acessar Tonkotsu AI →</a>
        </section>
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O Tonkotsu AI equilibra acessibilidade e poder: a interface visual reduz a barreira de entrada enquanto o suporte a memória e ferramentas garante que os agentes sejam genuinamente úteis em produção.</p>
          <p className="text-zinc-700 leading-relaxed">Para desenvolvedores e equipes que querem resultados rápidos na criação de agentes sem montar infraestrutura do zero, é uma das opções mais práticas disponíveis.</p>
        </section>
        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
