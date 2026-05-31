const tips = [
  { numero: "01", titulo: "Compare o custo por token antes de escolher o modelo", descricao: "O preço por 1M de tokens varia muito entre modelos e provedores. Para volumes altos, a diferença entre GPT-4o mini e Claude Haiku pode representar centenas de dólares por mês." },
  { numero: "02", titulo: "Use streaming para uma UX mais responsiva", descricao: "Em vez de esperar a resposta completa, ative o streaming para exibir o texto token a token. A percepção de velocidade pelo usuário melhora drasticamente, mesmo sem mudança no tempo total de geração." },
  { numero: "03", titulo: "Implemente retry com backoff exponencial", descricao: "APIs de LLM retornam erros 429 (rate limit) ou 500 (server error) com frequência. Sempre implemente uma lógica de retentativa com espera progressiva para evitar falhas silenciosas em produção." },
  { numero: "04", titulo: "Monitore uso e custos desde o primeiro dia", descricao: "Configure alertas de gasto nas dashboards de cada provedor e instrumente seu código com métricas de tokens consumidos por request. Surpresas na fatura são comuns para quem não monitora." },
  { numero: "05", titulo: "Teste com modelos menores antes de escalar", descricao: "Desenvolva e valide sua lógica com modelos menores e mais baratos (Haiku, GPT-4o mini, Mistral 7B). Suba para modelos maiores apenas quando a tarefa realmente exigir mais capacidade." },
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
