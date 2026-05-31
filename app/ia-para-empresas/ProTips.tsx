const tips = [
  { numero: "01", titulo: "Comece com um departamento piloto antes do rollout geral", descricao: "Escolha um time engajado — geralmente marketing ou produto — para testar e documentar os casos de uso mais valiosos. Use os resultados do piloto para construir o business case para a empresa inteira." },
  { numero: "02", titulo: "Defina e documente a política de uso de IA da empresa", descricao: "Estabeleça regras claras sobre quais dados podem ser compartilhados com ferramentas de IA externas, como dados de clientes, contratos confidenciais e informações financeiras." },
  { numero: "03", titulo: "Treine a equipe com casos de uso reais, não teoria", descricao: "Workshops práticos onde cada participante aplica a IA em tarefas do seu dia a dia têm adoção três vezes maior que apresentações teóricas. Use exemplos do próprio negócio da empresa." },
  { numero: "04", titulo: "Monitore qualidade do output, não só quantidade de uso", descricao: "Alta adoção com baixa qualidade de output pode prejudicar mais do que ajudar. Revise amostras de conteúdo gerado por IA mensalmente para garantir que os padrões de qualidade estão sendo mantidos." },
  { numero: "05", titulo: "Meça o ROI com métricas antes e depois da implementação", descricao: "Documente o tempo gasto em tarefas específicas antes da adoção da IA. Após 90 dias, compare. Dados concretos de economia de tempo são o melhor argumento para expandir o uso na empresa." },
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
