import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Soloist AI - Assistente de Código com IA para Desenvolvedores Solo",
  description: "Conheça o Soloist AI: assistente de desenvolvimento com IA que ajuda desenvolvedores solo a construir aplicações completas com geração de código, debugging e arquitetura assistida por IA. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/soloist" },
  openGraph: {
    title: "Soloist AI - Assistente de Código com IA para Desenvolvedores Solo",
    description: "Assistente de desenvolvimento com IA para desenvolvedores solo construírem aplicações completas com geração de código e debugging.",
    url: "https://www.hypehour.com.br/ferramentas/soloist",
    siteName: "Hypehour", images: [{ url: "https://www.hypehour.com.br/logo.png" }], locale: "pt_BR", type: "website",
  },
  twitter: { card: "summary_large_image", title: "Soloist AI - Código com IA para Devs Solo", description: "Assistente de IA para desenvolvedores solo construírem aplicações completas com geração de código e debugging.", images: ["https://www.hypehour.com.br/logo.png"], creator: "@hypehourbr" },
};

export default function SoloistPage() {
  const schemaData = {
    "@context": "https://schema.org", "@graph": [
      { "@type": "BreadcrumbList", "@id": "https://www.hypehour.com.br/ferramentas/soloist#breadcrumb", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.hypehour.com.br/" }, { "@type": "ListItem", position: 2, name: "Vibe Coding", item: "https://www.hypehour.com.br/ia-para-vibe-coding" }, { "@type": "ListItem", position: 3, name: "Soloist AI", item: "https://www.hypehour.com.br/ferramentas/soloist" }] },
      { "@type": "SoftwareApplication", "@id": "https://www.hypehour.com.br/ferramentas/soloist#software", name: "Soloist AI", description: "Assistente de desenvolvimento com IA para desenvolvedores solo, com geração de código, debugging inteligente e suporte a arquitetura de aplicações completas.", applicationCategory: "DeveloperApplication", operatingSystem: "Web", url: "https://soloist.ai", mainEntityOfPage: "https://www.hypehour.com.br/ferramentas/soloist", creator: { "@type": "Organization", name: "Soloist AI" } },
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
          <span className="text-black font-medium">Soloist AI</span>
        </nav>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">S</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Soloist AI</h1>
            <p className="text-lg text-zinc-700">O par de programação com IA para quem constrói sozinho</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">O Soloist AI é um assistente de desenvolvimento projetado para desenvolvedores que trabalham sozinhos. Funciona como um par de programação com IA, ajudando a gerar código, debugar erros, planejar a arquitetura e manter o momentum de desenvolvimento sem precisar de um time.</p>
          <p className="text-lg text-zinc-700 leading-relaxed">Ideal para indie hackers, freelancers e fundadores técnicos que querem construir produtos completos com a produtividade de um time maior.</p>
        </div>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Soloist AI?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">Soloist AI é um assistente de código com IA especializado em suportar desenvolvedores solo. O nome "soloist" — músico que toca sozinho — reflete a proposta: ser o parceiro técnico que permite que uma única pessoa construa com a velocidade e qualidade de uma equipe.</p>
          <p className="text-zinc-700 leading-relaxed">Além de gerar código, entende o contexto do projeto para sugerir arquiteturas, identificar edge cases e ajudar a tomar decisões técnicas que normalmente beneficiariam de um code review.</p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[["1","Compartilhe o contexto do projeto","Descreva o projeto, o stack e o que está tentando construir para que o assistente entenda o contexto completo."],["2","Gere código ou peça ajuda","Solicite implementações, peça revisão de código existente, descreva um bug ou pergunte sobre a melhor abordagem arquitetural."],["3","Itere rapidamente","O assistente gera sugestões completas e explica as decisões, permitindo iterações rápidas sem perda de contexto."],["4","Mantenha o momentum","Com um assistente sempre disponível, elimine os bloqueios que interrompem o fluxo de desenvolvimento solo."]].map(([n,t,d])=>(
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
            {["Geração de componentes e módulos","Debugging de erros complexos","Planejamento de arquitetura","Refatoração de código legado","Escrita de testes automatizados","Revisão de PRs solo","Documentação de código","Integração com APIs externas","Otimização de performance","Migração entre frameworks","Geração de queries de banco","Validação de decisões técnicas"].map((item,i)=>(
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition"><p className="text-zinc-700 text-sm">{item}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[["Contexto persistente do projeto","Mantém o entendimento do projeto ao longo das sessões, evitando a necessidade de re-explicar a arquitetura a cada conversa."],["Geração de código contextualizada","Gera código adequado ao stack e convenções do projeto, não código genérico desalinhado com o que já existe."],["Debugging colaborativo","Analisa erros, rastreia a causa raiz e sugere correções explicando o raciocínio por trás de cada solução."],["Suporte a decisões arquiteturais","Discute trade-offs de diferentes abordagens e ajuda a escolher a melhor opção para o contexto específico."],["Review de código","Revisa implementações identificando bugs potenciais, problemas de segurança e oportunidades de melhoria."],["Geração de testes","Cria testes unitários e de integração para o código existente ou para funcionalidades que estão sendo desenvolvidas."]].map(([t,d])=>(
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
            {["Contexto persistente — entende o projeto sem re-explicações constantes","Código contextualizado — adequado ao seu stack, não código genérico","Debugging colaborativo — encontra causas raiz, não apenas sintomas","Decisões arquiteturais — discute trade-offs como um sênior faria","Review solo — identifica problemas que passariam despercebidos","Momentum contínuo — elimina bloqueios que travam desenvolvedores solo"].map((v,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm"><span className="text-black font-bold text-lg flex-shrink-0">✓</span><p className="text-zinc-700">{v}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {["Não substitui um time humano — code review humano ainda é superior para código crítico","Pode sugerir soluções desatualizadas — sempre verifique versões de bibliotecas e APIs","Contexto tem limites — projetos muito grandes podem extrapollar o contexto disponível","Revisão obrigatória — todo código gerado deve ser entendido e revisado antes de ir para produção"].map((d,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg"><span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span><p className="text-zinc-700">{d}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Soloist AI?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Indie hackers construindo produtos sozinhos","Fundadores técnicos de startups no início","Freelancers gerenciando múltiplos projetos","Desenvolvedores aprendendo novos stacks","Profissionais que precisam de um segundo olhar no código"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Times grandes com processos de review estabelecidos","Código de missão crítica sem revisão humana complementar","Quem não tem base técnica para avaliar o código gerado"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Construa como um time sendo um desenvolvedor só</h2>
          <p className="text-lg mb-6 text-zinc-300">Experimente o Soloist AI e acelere seu desenvolvimento com IA agora</p>
          <a href="https://soloist.ai" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">Acessar Soloist AI →</a>
        </section>
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O Soloist AI aborda um desafio real do desenvolvimento solo: a ausência de um par para discutir decisões, revisar código e desbloquear problemas. Ao preencher esse papel com IA, permite que desenvolvedores solo operem com uma produtividade muito maior.</p>
          <p className="text-zinc-700 leading-relaxed">Para indie hackers, freelancers e fundadores técnicos que querem construir mais com menos, é um dos assistentes de código com a proposta mais focada disponíveis.</p>
        </section>
        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
