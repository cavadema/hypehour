const perfis = [
  { perfil: "Desenvolvedor Python experiente", recomendacao: "LangChain", motivo: "Ecossistema maduro com integrações prontas para centenas de ferramentas, modelos e fontes de dados, com controle total sobre o comportamento do agente." },
  { perfil: "Projetos com equipes de agentes colaborativos", recomendacao: "CrewAI", motivo: "Framework específico para orquestrar múltiplos agentes com papéis, metas e capacidades distintas, ideal para pipelines complexas de automação." },
  { perfil: "Sem código / low-code", recomendacao: "n8n ou Flowise", motivo: "Interfaces visuais que permitem criar fluxos de automação e agentes sem escrever código, com suporte a webhooks, integrações e lógica condicional." },
  { perfil: "Agente que consulta documentos próprios", recomendacao: "LlamaIndex", motivo: "Especializado em RAG (Retrieval-Augmented Generation), com indexação eficiente de PDFs, bancos de dados e APIs para respostas baseadas em dados internos." },
  { perfil: "Empresa que quer deploy em produção", recomendacao: "Dify", motivo: "Plataforma LLMOps com orquestração, monitoramento, versionamento de prompts e métricas de uso — tudo que um ambiente de produção exige." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada framework tem um perfil de uso ideal. Veja qual se encaixa melhor no seu projeto:</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {perfis.map((p, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{p.perfil}</div>
            <div className="text-base font-bold text-gray-900 mb-2">{p.recomendacao}</div>
            <div className="text-sm text-gray-600">{p.motivo}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
