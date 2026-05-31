const perfis = [
  { perfil: "Analista que faz perguntas sobre dados", recomendacao: "Julius AI", motivo: "Faça upload da planilha ou CSV e faça perguntas em português: 'qual produto vendeu mais em março?' ou 'mostre um gráfico de receita por região'. Responde com análises e visualizações." },
  { perfil: "Usuário de Excel que trava em fórmulas", recomendacao: "Formula Bot ou Claude Pro", motivo: "Descreva o que você quer em português e receba a fórmula pronta com explicação. Funciona para fórmulas simples e complexas como PROCV, ÍNDICE-CORRESP e fórmulas de array." },
  { perfil: "Time no Google Sheets", recomendacao: "Google Sheets Gemini ou Numerous AI", motivo: "Gemini está integrado nativamente ao Sheets. Numerous AI adiciona funções de IA diretamente nas células para enriquecer, categorizar e resumir dados em escala." },
  { perfil: "Time que precisa de planilha conectada a APIs", recomendacao: "Rows AI", motivo: "Planilha moderna que conecta a APIs de Google Analytics, Stripe, HubSpot e outras fontes externas, importando dados automaticamente e gerando análises com IA integrada." },
  { perfil: "Analista com macros e VBA no Excel", recomendacao: "Ajelix", motivo: "Gera scripts VBA e macros do Excel a partir de descrições em texto, além de fórmulas e documentação — ideal para automatizar relatórios repetitivos sem programar do zero." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada ferramenta atende uma necessidade diferente com planilhas. Veja qual se encaixa melhor no seu caso:</p>
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
