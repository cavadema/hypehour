const perfis = [
  { perfil: "Usuário que quer comparar diferentes modelos de IA", recomendacao: "Poe (Quora)", motivo: "Interface única para conversar com ChatGPT, Claude, Gemini, Llama e outros modelos, comparando respostas e custos sem precisar de assinatura separada em cada serviço." },
  { perfil: "Desenvolvedor que quer múltiplos LLMs em uma API", recomendacao: "OpenRouter", motivo: "API unificada com mais de 200 modelos de IA, billing centralizado e a possibilidade de trocar de modelo com uma linha de código — sem gerenciar múltiplas chaves de API." },
  { perfil: "Pesquisador ou engenheiro de IA", recomendacao: "Hugging Face", motivo: "Maior hub de modelos open-source, datasets e Spaces do mundo, com ferramentas para testar, fine-tunar e publicar modelos de IA com a comunidade global." },
  { perfil: "Profissional buscando a ferramenta certa para um problema", recomendacao: "There's An AI For That", motivo: "Busca por caso de uso e encontra ferramentas de IA específicas para cada problema, com avaliações, links e descrições — ideal para discovery quando você sabe o problema mas não a solução." },
  { perfil: "Time técnico que quer apps internos com IA", recomendacao: "ToolJet", motivo: "Plataforma low-code para criar dashboards, painéis de administração e ferramentas internas conectadas a APIs e bancos de dados, com suporte a integração de IA em cada componente." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada agregador serve a um propósito diferente. Veja qual se encaixa melhor no seu caso de uso:</p>
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
