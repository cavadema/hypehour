import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Macaron - Assistente de IA Pessoal para Produtividade Diária",
  description: "Conheça o Macaron: assistente de IA pessoal com interface intuitiva para ajudar na produtividade diária, organização de tarefas e respostas rápidas a qualquer pergunta. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/macaron" },
  openGraph: {
    title: "Macaron - Assistente de IA Pessoal para Produtividade Diária",
    description: "Assistente de IA pessoal com interface intuitiva para produtividade, organização e respostas rápidas.",
    url: "https://www.hypehour.com.br/ferramentas/macaron",
    siteName: "Hypehour", images: [{ url: "https://www.hypehour.com.br/logo.png" }], locale: "pt_BR", type: "website",
  },
  twitter: { card: "summary_large_image", title: "Macaron - Assistente de IA Pessoal", description: "Assistente de IA pessoal para produtividade, organização e respostas rápidas no dia a dia.", images: ["https://www.hypehour.com.br/logo.png"], creator: "@hypehourbr" },
};

export default function MacaronPage() {
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
        "@id": "https://www.hypehour.com.br/ferramentas/macaron#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/macaron",
        "name": "Macaron - Assistente de IA Pessoal para Produtividade Diária",
        "description": "Conheça o Macaron: assistente de IA pessoal com interface intuitiva para ajudar na produtividade diária, organização de tarefas e respostas rápidas a qualquer pergunta. Veja vantagens, desvantagens e se é ideal para você.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/macaron#breadcrumb" },
        "datePublished": "2025-11-19",
        "dateModified": "2026-07-04",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/macaron#software" },
      },

      { "@type": "BreadcrumbList", "@id": "https://www.hypehour.com.br/ferramentas/macaron#breadcrumb", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.hypehour.com.br/" }, { "@type": "ListItem", position: 2, name: "Assistentes de IA", item: "https://www.hypehour.com.br/assistentes-de-ia" }, { "@type": "ListItem", position: 3, name: "Macaron", item: "https://www.hypehour.com.br/ferramentas/macaron" }] },
      { "@type": "SoftwareApplication", "@id": "https://www.hypehour.com.br/ferramentas/macaron#software", name: "Macaron", description: "Assistente de IA pessoal com interface intuitiva e agradável, focado em produtividade diária, organização de tarefas e acesso rápido a modelos de linguagem avançados.", applicationCategory: "ProductivityApplication", operatingSystem: "Web, iOS, macOS", url: "https://macaron.im", mainEntityOfPage: "https://www.hypehour.com.br/ferramentas/macaron", 
        "image": "https://www.hypehour.com.br/logo.png",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Plano gratuito disponível" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "1187",
        },
        creator: { "@type": "Organization", name: "Macaron" } },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <nav className="flex items-center gap-2 text-zinc-700 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="text-zinc-400">/</span>
          <Link href="/assistentes-de-ia" className="hover:text-black transition">Assistentes de IA</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Macaron</span>
        </nav>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">M</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Macaron</h1>
            <p className="text-lg text-zinc-700">Assistente de IA pessoal com interface elegante e modelos de ponta</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">O Macaron é um assistente de IA pessoal projetado para ser elegante e eficiente no dia a dia. Com interface limpa e acesso aos melhores modelos de linguagem, serve como ponto central para perguntas, redação, organização de ideias e tarefas de produtividade.</p>
          <p className="text-lg text-zinc-700 leading-relaxed">Pensado para usuários que valorizam tanto a estética quanto a funcionalidade, oferece uma experiência mais polida que interfaces de chatbot tradicionais.</p>
        </div>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Macaron?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">Macaron é um cliente de IA pessoal que prioriza a experiência de uso. Assim como o doce francês que dá nome à ferramenta é conhecido pelo refinamento e equilíbrio, o Macaron busca oferecer uma interface de IA que seja agradável de usar diariamente — sem a sensação de estar usando uma ferramenta técnica.</p>
          <p className="text-zinc-700 leading-relaxed">Acessa modelos avançados de linguagem com uma camada de experiência cuidadosamente projetada para conversas, criação de conteúdo e produtividade pessoal.</p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[["1","Abra o Macaron","Acesse pelo app ou web com uma interface limpa e sem distrações, pronta para a primeira mensagem."],["2","Converse naturalmente","Faça perguntas, peça para redigir textos, analise informações ou use como segundo cérebro para organizar ideias."],["3","Salve e organize","Guarde conversas importantes, crie coleções de prompts e organize o histórico por tema."],["4","Use em qualquer dispositivo","O Macaron sincroniza entre todos os seus dispositivos, mantendo o histórico e preferências acessíveis."]].map(([n,t,d])=>(
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
            {["Respostas rápidas a perguntas","Redação de e-mails e textos","Organização de ideias e projetos","Resumo de documentos","Brainstorming criativo","Aprendizado e pesquisa","Tradução e revisão de textos","Preparação para reuniões","Geração de listas e checklists","Análise e feedback de textos","Planejamento pessoal","Segundo cérebro com IA"].map((item,i)=>(
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition"><p className="text-zinc-700 text-sm">{item}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[["Interface elegante e minimalista","Design cuidadosamente pensado para ser agradável de usar todos os dias, sem excesso de elementos ou complexidade desnecessária."],["Acesso a múltiplos modelos","Suporte a diferentes modelos de linguagem, permitindo escolher o melhor para cada tipo de tarefa."],["Histórico organizado","Conversas salvas e organizadas por data e tema, fáceis de encontrar e retomar quando necessário."],["Coleções de prompts","Salve prompts favoritos e reutilize-os com facilidade para tarefas recorrentes."],["Sincronização entre dispositivos","Acesse o Macaron com o mesmo histórico e configurações em todos os seus dispositivos."],["Atalhos de produtividade","Acesso rápido ao assistente via atalhos de teclado e integrações com o fluxo de trabalho existente."]].map(([t,d])=>(
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
            {["Interface elegante — experiência de uso superior a interfaces de chatbot genéricas","Multi-modelo — escolha o melhor modelo para cada tipo de tarefa","Histórico organizado — fácil de encontrar e retomar conversas antigas","Prompts salvos — reutilize facilmente para tarefas recorrentes","Sincronização — mesmo histórico em todos os dispositivos","Design focado — sem distrações, foco na conversa e produtividade"].map((v,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm"><span className="text-black font-bold text-lg flex-shrink-0">✓</span><p className="text-zinc-700">{v}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {["Menos integrações — pode ter menos conectores com outras ferramentas que assistentes mais robustos","Sem automações — focado em conversas, não em agentes ou fluxos automatizados","Planos pagos para acesso a modelos avançados — recursos completos podem requerer assinatura","Comunidade menor — menos templates e recursos da comunidade que plataformas mais estabelecidas"].map((d,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg"><span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span><p className="text-zinc-700">{d}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Macaron?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Profissionais que usam IA diariamente e valorizam a experiência","Criadores de conteúdo que escrevem e brainstorm com IA","Estudantes e pesquisadores que precisam de um assistente ágil","Quem quer um cliente de IA mais elegante que as interfaces padrão","Usuários de Mac e iOS que preferem apps bem desenhados"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Quem precisa de agentes e automações complexas","Times que precisam de colaboração em tempo real com outros usuários","Casos que exigem integrações profundas com ferramentas de negócios"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Um assistente de IA pessoal que é agradável de usar</h2>
          <p className="text-lg mb-6 text-zinc-300">Experimente o Macaron e tenha um assistente de IA elegante no seu dia a dia</p>
          <a href="https://macaron.im" target="_blank" rel="noopener noreferrer nofollow" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">Acessar Macaron →</a>
        </section>
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O Macaron se diferencia dos assistentes de IA genéricos pela atenção ao design e à experiência de uso. Para quem passa horas por dia com IA e se importa com a qualidade dessa experiência, é uma alternativa refinada que torna o uso de IA mais prazeroso e organizado.</p>
          <p className="text-zinc-700 leading-relaxed">É uma escolha especialmente boa para profissionais criativos e usuários que valorizam interfaces bem projetadas tanto quanto funcionalidade.</p>
        </section>
        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
