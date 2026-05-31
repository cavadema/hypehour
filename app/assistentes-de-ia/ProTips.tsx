const tips = [
  { numero: "01", titulo: "Crie um prompt de sistema personalizado para seu contexto", descricao: "Configure o assistente com instruções fixas sobre seu papel, tom e restrições antes de começar. Isso elimina a necessidade de repetir contexto a cada conversa." },
  { numero: "02", titulo: "Combine assistentes diferentes para tarefas específicas", descricao: "Use ChatGPT para brainstorming rápido, Claude para análise de documentos longos e Gemini para pesquisas integradas ao Google. Cada um tem pontos fortes distintos." },
  { numero: "03", titulo: "Salve e reutilize prompts que funcionaram bem", descricao: "Quando um prompt gerar uma resposta excelente, salve-o em um documento. Com o tempo, você terá uma biblioteca pessoal de prompts testados para cada tipo de tarefa." },
  { numero: "04", titulo: "Use o contexto longo para análise completa de documentos", descricao: "Em vez de recortar trechos de um documento, cole o texto completo no Claude ou no ChatGPT com memória estendida. O assistente terá uma visão holística e as respostas serão mais precisas." },
  { numero: "05", titulo: "Peça ao assistente para revisar a própria resposta", descricao: "Após receber uma resposta, solicite: 'Revise sua resposta anterior e corrija possíveis erros ou imprecisões.' Esse passo simples aumenta significativamente a qualidade das respostas." },
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
