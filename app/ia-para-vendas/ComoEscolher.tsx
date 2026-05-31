const perfis = [
  { perfil: "SDR ou BDR focado em prospecção", recomendacao: "Apollo.io", motivo: "Base de dados com mais de 270 milhões de contatos B2B, com filtros avançados para encontrar leads pelo cargo, setor, porte e tecnologias usadas pela empresa." },
  { perfil: "Representante que quer melhorar cold emails", recomendacao: "Lavender", motivo: "Analisa seu email em tempo real enquanto você escreve, dando um score de probabilidade de resposta e sugestões específicas de melhoria de assunto, abertura e CTA." },
  { perfil: "Gestor de vendas B2B com muitas calls", recomendacao: "Gong", motivo: "Grava e analisa todas as calls de vendas, identificando os padrões dos deals ganhos versus perdidos, objeções mais comuns e pontos de coaching para cada vendedor." },
  { perfil: "Líder de vendas que precisa de forecast", recomendacao: "Clari", motivo: "IA que analisa o pipeline em tempo real para gerar previsão de fechamento precisa, alertar sobre deals em risco e dar visibilidade completa do funil ao VP de vendas." },
  { perfil: "Equipe que usa HubSpot como CRM", recomendacao: "HubSpot Sales AI", motivo: "IA integrada ao CRM para sugerir próximas ações, gerar emails personalizados, prever fechamento de deals e automatizar tarefas repetitivas sem sair do HubSpot." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada ferramenta atende uma etapa do processo de vendas. Veja qual se encaixa melhor na sua operação:</p>
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
