const faqs = [
  { q: "O que é o Claw Syndicate?", a: "Claw Syndicate é uma plataforma de orquestração multi-agente que permite criar equipes de agentes de IA especializados trabalhando em conjunto." },
  { q: "Qual a diferença entre Claw Syndicate e um único agente de IA?", a: "Em vez de um agente generalista, o Claw Syndicate usa múltiplos agentes especializados que colaboram, produzindo resultados superiores em tarefas complexas." },
  { q: "O que significa 'sindicato' no contexto do Claw Syndicate?", a: "O conceito de sindicato representa um grupo de agentes com papéis definidos que colaboram para um objetivo comum, como trabalhadores especializados." },
  { q: "Preciso programar para usar o Claw Syndicate?", a: "Algum conhecimento técnico é necessário para configurar fluxos multi-agente. A plataforma facilita o processo mas não é completamente sem código." },
  { q: "Como os agentes se comunicam entre si?", a: "O orquestrador coordena a passagem de contexto e resultados entre os agentes do sindicato conforme o fluxo definido." },
  { q: "Os agentes do sindicato compartilham memória?", a: "Sim. Um espaço de memória compartilhada garante que todos os agentes do sindicato tenham acesso ao contexto acumulado da execução." },
  { q: "Quais tipos de agentes posso criar no sindicato?", a: "Agentes de pesquisa, análise, escrita, revisão, código, atendimento — qualquer função que possa ser especializada e descrita via prompt." },
  { q: "Posso misturar diferentes modelos de LLM em um sindicato?", a: "Depende da plataforma. Muitas soluções multi-agente permitem usar diferentes modelos para diferentes agentes. Consulte a documentação." },
  { q: "Como defino o fluxo de colaboração entre os agentes?", a: "Você configura quais agentes recebem o resultado de outros e quais condições disparam cada etapa do processo." },
  { q: "Quais casos de uso mais se beneficiam do modelo multi-agente?", a: "Pesquisa e síntese, geração e revisão de conteúdo, due diligence, análise competitiva e qualquer tarefa que combine múltiplas especialidades." },
  { q: "O Claw Syndicate tem plano gratuito?", a: "Consulte o site oficial para informações atualizadas sobre planos e limites disponíveis." },
  { q: "Como monitoro a performance de cada agente?", a: "A plataforma oferece visibilidade individual por agente, permitindo identificar gargalos e ajustar o agente que está com pior desempenho." },
  { q: "É possível criar um sindicato para análise financeira?", a: "Sim. Um agente coleta dados, outro analisa, outro gera o relatório e outro revisa — cada um especializado na sua função." },
  { q: "Quantos agentes posso ter em um sindicato?", a: "Os limites dependem do plano contratado. Mais agentes aumentam as capacidades mas também elevam o custo por execução." },
  { q: "O Claw Syndicate suporta agentes recorrentes?", a: "Sim. Sindicatos podem ser configurados para executar periodicamente, mantendo análises e monitoramentos sempre atualizados." },
  { q: "Qual a latência de um sindicato multi-agente?", a: "Fluxos em cascata acumulam latência de cada agente. Para respostas em tempo real, um único agente é mais adequado." },
  { q: "Como o Claw Syndicate lida com falhas em agentes individuais?", a: "Há mecanismos de retry e fallback para lidar com falhas sem interromper todo o pipeline." },
  { q: "Posso exportar os resultados do sindicato automaticamente?", a: "Sim. Os resultados podem ser direcionados via webhook para outros sistemas ou plataformas de comunicação." },
  { q: "O Claw Syndicate tem integrações com ferramentas de negócios?", a: "Verifique as integrações disponíveis no site. Plataformas multi-agente geralmente suportam conexão com CRMs, Slack e outras ferramentas." },
  { q: "É possível usar o Claw Syndicate para produção de conteúdo?", a: "Sim. Um agente pesquisa, outro escreve, outro revisa e outro verifica SEO — pipeline de conteúdo completo e escalável." },
  { q: "Existe uma biblioteca de agentes prontos?", a: "Sim. A plataforma oferece agentes pré-configurados para funções comuns que podem ser adicionados ao sindicato." },
  { q: "O sindicato pode aprender com execuções anteriores?", a: "Com memória de longo prazo configurada, os agentes acumulam aprendizado e melhoram os resultados ao longo do tempo." },
  { q: "O Claw Syndicate é adequado para empresas de médio porte?", a: "Sim. Empresas com processos complexos e repetitivos são as que mais se beneficiam da orquestração multi-agente." },
  { q: "Posso testar um sindicato antes de colocar em produção?", a: "Boas plataformas oferecem ambientes de teste. Verifique se o Claw Syndicate tem essa funcionalidade na documentação." },
  { q: "Qual linguagem de programação é necessária?", a: "A plataforma tem interface visual que minimiza a necessidade de código. Conhecimento de APIs é útil para integrações avançadas." },
  { q: "Como garantir a qualidade das respostas no sindicato?", a: "Inclua um agente de revisão ao final do pipeline que valida a qualidade do resultado antes de ser entregue." },
  { q: "O Claw Syndicate suporta processamento de documentos?", a: "Sim. Agentes podem processar PDFs, planilhas e outros formatos como parte do fluxo do sindicato." },
  { q: "O sindicato pode fazer buscas na web automaticamente?", a: "Sim. Agentes de pesquisa com acesso a ferramentas de busca na web são um componente comum em sindicatos." },
  { q: "Como começo a usar o Claw Syndicate?", a: "Acesse clawsyndicate.ai, crie uma conta, explore os templates de sindicatos disponíveis e comece com um fluxo simples de dois agentes." },
  { q: "O Claw Syndicate tem suporte técnico?", a: "Verifique os canais de suporte disponíveis no site oficial, como documentação, chat e comunidade." },
];

export default function FAQSection() {
  const schemaData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <section className="mt-12 border-t border-zinc-200 pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <h2 className="text-2xl font-bold text-black mb-6">Perguntas Frequentes sobre o Claw Syndicate</h2>
      <div className="grid gap-3">
        {faqs.map((f, i) => (
          <details key={i} className="border border-zinc-200 rounded-lg bg-white overflow-hidden group" open={i < 5}>
            <summary className="w-full text-left px-5 py-4 font-medium text-black flex justify-between items-center hover:bg-zinc-50 transition cursor-pointer list-none">
              <span>{f.q}</span><span className="text-zinc-400 ml-4 flex-shrink-0"><span className="group-open:hidden">+</span><span className="hidden group-open:inline">−</span></span>
            </summary>
            <div className="px-5 pb-4 text-zinc-700 text-sm leading-relaxed">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
