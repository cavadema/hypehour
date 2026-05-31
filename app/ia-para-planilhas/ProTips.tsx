const tips = [
  { numero: "01", titulo: "Descreva o resultado esperado, não a fórmula que você quer", descricao: "Em vez de 'como faço um ÍNDICE-CORRESP', diga: 'quero buscar o salário de um funcionário pelo nome em outra aba'. A IA entende o problema e sugere a fórmula mais adequada." },
  { numero: "02", titulo: "Use IA para documentar fórmulas complexas que você já tem", descricao: "Cole uma fórmula complicada e peça para a IA explicá-la em português. Isso facilita a manutenção por outros membros da equipe e evita que fórmulas críticas se tornem caixas-pretas." },
  { numero: "03", titulo: "Limpe e padronize dados antes de fazer análises com IA", descricao: "IA analisa o que está nos dados. Se houver inconsistências de formatação, valores nulos e categorias duplicadas, peça primeiro para a IA ajudar a limpar os dados antes de gerar insights." },
  { numero: "04", titulo: "Valide resultados de análises com IA contra a fonte de dados", descricao: "Ferramentas de análise por chat podem cometer erros de cálculo ou interpretar dados incorretamente. Sempre valide totais e métricas críticas manualmente antes de reportar os resultados." },
  { numero: "05", titulo: "Use IA para criar templates de relatórios reutilizáveis", descricao: "Descreva a estrutura do relatório que você precisa — colunas, cálculos, formatação condicional — e peça para a IA criar o template completo. Isso economiza horas de formatação repetitiva a cada ciclo de relatório." },
];

export default function ProTips() {
  return (
    <div className="mt-10 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Dicas para melhores resultados</h2>
      <div className="space-y-4">
        {tips.map((tip) => (
          <div key={tip.numero} className="flex gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
            <span className="text-2xl font-black text-gray-200 leading-none select-none">{tip.numero}</span>
            <div>
              <div className="font-semibold text-gray-900 mb-1">{tip.titulo}</div>
              <div className="text-sm text-gray-600">{tip.descricao}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
