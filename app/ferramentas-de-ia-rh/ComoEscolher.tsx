const perfis = [
  { perfil: "RH de PME com poucos recursos", recomendacao: "Effy AI ou Reclaim AI", motivo: "Ferramentas acessíveis com planos gratuitos para automatizar avaliações de desempenho e gestão de agenda sem investimento inicial." },
  { perfil: "Grande empresa com alto volume de contratações", recomendacao: "HireVue ou Eightfold AI", motivo: "Plataformas enterprise para triagem automatizada, entrevistas com IA e análise de talentos em escala." },
  { perfil: "RH focado em cultura e retenção", recomendacao: "Workhuman", motivo: "Plataforma de reconhecimento e engajamento que fortalece a cultura organizacional e reduz turnover por meio de celebração contínua." },
  { perfil: "Recrutador que analisa muitos currículos", recomendacao: "Enhancv", motivo: "Análise automatizada de currículos com sugestões de melhoria, facilitando a triagem e fornecendo feedback estruturado aos candidatos." },
  { perfil: "Empresa que precisa de HCM integrado", recomendacao: "UKG Pro", motivo: "Sistema completo de gestão de capital humano com folha de pagamento, ponto, benefícios e analytics em uma única plataforma." },
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
