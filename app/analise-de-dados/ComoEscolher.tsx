const perfis = [
  { perfil: "Analista sem experiência em código", recomendacao: "Julius AI ou Findly", motivo: "Permitem fazer perguntas em português e receber análises sem precisar escrever SQL ou fórmulas." },
  { perfil: "Usuário de Excel ou Google Sheets", recomendacao: "Excelmatic ou FormulaBot", motivo: "Integram diretamente às planilhas que você já usa, gerando fórmulas e análises automaticamente." },
  { perfil: "Empresa com grandes volumes de dados", recomendacao: "Alteryx", motivo: "Plataforma robusta para ETL, preparação e análise avançada de dados em escala empresarial." },
  { perfil: "Dev ou analista técnico", recomendacao: "Basedash ou marimo", motivo: "Oferecem acesso direto ao banco de dados ou ambiente Python reativo para análises programáticas." },
  { perfil: "Gestor que precisa de dashboards rápidos", recomendacao: "ChartGen.ai ou Livedocs", motivo: "Transformam CSVs e dados brutos em gráficos e painéis visuais em poucos cliques." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada ferramenta tem um perfil de uso ideal. Veja qual se encaixa melhor na sua necessidade:</p>
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
