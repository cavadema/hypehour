import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Gobii AI - Criação de Agentes de IA sem Código",
  description: "Conheça o Gobii AI: plataforma no-code para criar agentes de IA personalizados que automatizam tarefas, respondem perguntas e integram com seus sistemas. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/gobii" },
  openGraph: {
    title: "Gobii AI - Criação de Agentes de IA sem Código",
    description: "Plataforma no-code para criar agentes de IA personalizados que automatizam tarefas e integram com seus sistemas.",
    url: "https://www.hypehour.com.br/ferramentas/gobii",
    siteName: "Hypehour", images: [{ url: "https://www.hypehour.com.br/logo.png" }], locale: "pt_BR", type: "website",
  },
  twitter: { card: "summary_large_image", title: "Gobii AI - Agentes de IA sem Código", description: "Plataforma no-code para criar agentes de IA que automatizam tarefas e integram com seus sistemas.", images: ["https://www.hypehour.com.br/logo.png"], creator: "@hypehourbr" },
};

export default function GobiiPage() {
  const schemaData = {
    "@context": "https://schema.org", "@graph": [
      { "@type": "BreadcrumbList", "@id": "https://www.hypehour.com.br/ferramentas/gobii#breadcrumb", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.hypehour.com.br/" }, { "@type": "ListItem", position: 2, name: "Criação de Agentes de IA", item: "https://www.hypehour.com.br/criacao-agentes-ia" }, { "@type": "ListItem", position: 3, name: "Gobii AI", item: "https://www.hypehour.com.br/ferramentas/gobii" }] },
      { "@type": "SoftwareApplication", "@id": "https://www.hypehour.com.br/ferramentas/gobii#software", name: "Gobii AI", description: "Plataforma no-code para criação de agentes de IA personalizados com automação de tarefas, base de conhecimento e integrações com sistemas externos.", applicationCategory: "BusinessApplication", operatingSystem: "Web", url: "https://gobii.ai", mainEntityOfPage: "https://www.hypehour.com.br/ferramentas/gobii", creator: { "@type": "Organization", name: "Gobii AI" } },
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
          <span className="text-black font-medium">Gobii AI</span>
        </nav>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">G</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Gobii AI</h1>
            <p className="text-lg text-zinc-700">Crie agentes de IA personalizados sem escrever código</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">O Gobii AI é uma plataforma no-code para criar agentes de IA personalizados. Sem precisar programar, você configura agentes que respondem perguntas com base na sua base de conhecimento, automatizam tarefas repetitivas e integram com seus sistemas existentes.</p>
          <p className="text-lg text-zinc-700 leading-relaxed">Ideal para empresas e profissionais que querem implementar automação com IA rapidamente, sem depender de uma equipe de desenvolvimento.</p>
        </div>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Gobii AI?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">Gobii AI democratiza a criação de agentes de IA ao remover a barreira técnica. A interface no-code permite que qualquer pessoa — de empreendedores a gestores — crie agentes inteligentes que respondem a clientes, processam solicitações e automatizam fluxos sem uma linha de código.</p>
          <p className="text-zinc-700 leading-relaxed">Os agentes podem ser alimentados com documentos, FAQs, políticas e outros materiais da empresa, transformando o conhecimento interno em respostas automáticas precisas e contextualizadas.</p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[["1","Configure o agente","Defina o nome, personalidade, tom e objetivo do agente sem precisar escrever código ou prompts complexos."],["2","Alimente a base de conhecimento","Carregue documentos, PDFs, URLs e textos que o agente usará como fonte de respostas precisas."],["3","Integre aos seus canais","Incorpore o agente no site, WhatsApp, Slack ou outros canais com poucas linhas de configuração."],["4","Monitore e melhore","Acompanhe as conversas, identifique lacunas no conhecimento e melhore continuamente as respostas."]].map(([n,t,d])=>(
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
            {["Atendimento ao cliente automatizado","FAQ inteligente no site","Agente de suporte interno","Qualificação de leads","Onboarding de novos clientes","Assistente de vendas","Triagem de solicitações de RH","Agente de base de conhecimento","Notificações e lembretes automáticos","Agente de pesquisa interna","Coleta de feedback estruturado","Suporte pós-venda automatizado"].map((item,i)=>(
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition"><p className="text-zinc-700 text-sm">{item}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[["Criação no-code de agentes","Interface intuitiva para configurar agentes completos sem programação, acessível para qualquer perfil profissional."],["Base de conhecimento personalizada","Carregue documentos, PDFs e URLs para que o agente responda com precisão baseado no conteúdo da sua empresa."],["Múltiplos canais de integração","Incorpore os agentes em sites, aplicativos, WhatsApp e outras plataformas com configuração simplificada."],["Personalização de tom e voz","Defina a personalidade, tom de comunicação e limites de atuação do agente para refletir a identidade da marca."],["Dashboard de conversas","Acompanhe todas as interações, analise padrões e identifique oportunidades de melhoria na base de conhecimento."],["Handoff para humanos","Configure regras para escalada automática para atendentes humanos quando o agente não consegue resolver."]].map(([t,d])=>(
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
            {["No-code — qualquer pessoa cria agentes sem programar","Base de conhecimento — respostas precisas baseadas nos seus documentos","Multicanal — integra com site, WhatsApp e outros canais","Personalização de marca — tom e voz alinhados à identidade da empresa","Dashboard — visibilidade total sobre as conversas dos agentes","Handoff — escala para humanos quando necessário"].map((v,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm"><span className="text-black font-bold text-lg flex-shrink-0">✓</span><p className="text-zinc-700">{v}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {["Limitações em lógica complexa — agentes no-code têm menos flexibilidade que soluções codificadas","Qualidade dependente da base de conhecimento — respostas ruins indicam documentação insuficiente","Escala tem custo — volume alto de conversas exige planos pagos mais robustos","Integrações avançadas podem exigir código — conexões com sistemas legados podem precisar de desenvolvimento"].map((d,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg"><span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span><p className="text-zinc-700">{d}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Gobii AI?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Empresas que querem automatizar atendimento sem contratar devs","PMEs com volume crescente de perguntas repetitivas","Equipes de marketing e vendas que precisam de agentes qualificadores","Profissionais liberais que precisam de assistente digital","Equipes de RH automatizando onboarding e FAQ interno"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Casos que exigem lógica condicional muito complexa","Empresas que precisam de integrações profundas com sistemas legados","Desenvolvedores que preferem controle total via código"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Crie seu agente de IA sem escrever código</h2>
          <p className="text-lg mb-6 text-zinc-300">Experimente o Gobii AI gratuitamente e automatize seu atendimento hoje</p>
          <a href="https://gobii.ai" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">Acessar Gobii AI →</a>
        </section>
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O Gobii AI é a porta de entrada ideal para empresas que querem adotar agentes de IA sem investimento em desenvolvimento. A combinação de interface no-code, base de conhecimento customizável e integração multicanal resolve a maioria dos casos de uso de atendimento e automação.</p>
          <p className="text-zinc-700 leading-relaxed">Para negócios que precisam de resultados rápidos em automação conversacional, é uma das soluções com melhor relação entre simplicidade e capacidade disponíveis hoje.</p>
        </section>
        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
