const perfis = [
  { perfil: "Investidor individual que analisa ações", recomendacao: "Danelfin ou FinChat.io", motivo: "Danelfin gera scores de IA para triagem de ações com maior potencial. FinChat permite fazer perguntas em linguagem natural sobre os resultados financeiros de qualquer empresa listada." },
  { perfil: "Desenvolvedor criando estratégias de trading", recomendacao: "Alpaca", motivo: "API de trading com dados de mercado em tempo real, backtesting e execução de ordens automatizada — ideal para implementar estratégias algorítmicas sem intermediários." },
  { perfil: "Investidor value e fundamentalista", recomendacao: "Validea", motivo: "Aplica as metodologias de investimento dos maiores gestores da história — Buffett, Graham, Lynch, O'Shaughnessy — para pontuar cada ação segundo cada filosofia de investimento." },
  { perfil: "Investidor que quer automatizar rebalanceamento", recomendacao: "Composer", motivo: "Cria e executa estratégias de alocação e rebalanceamento automático com regras baseadas em dados de mercado, sem precisar programar e com backtesting visual dos resultados." },
  { perfil: "Institucional com análise macroeconômica", recomendacao: "Kensho", motivo: "Plataforma enterprise da S&P Global para análise de impacto de eventos econômicos, geopolíticos e corporativos nos mercados, com datasets exclusivos e modelos proprietários." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada ferramenta atende um perfil de investidor diferente. Veja qual se encaixa melhor na sua estratégia:</p>
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
