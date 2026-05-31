const tips = [
  { numero: "01", titulo: "Comece com um agente simples antes de orquestrar múltiplos", descricao: "Um único agente bem calibrado resolve a maioria dos casos. Adicione agentes extras apenas quando houver clareza sobre responsabilidades distintas — complexidade desnecessária gera erros difíceis de depurar." },
  { numero: "02", titulo: "Defina as ferramentas (tools) com descrições precisas", descricao: "O agente decide qual ferramenta usar com base na descrição que você escreve. Descrições vagas geram escolhas erradas. Seja específico: 'Busca preços de produtos no banco de dados PostgreSQL' é melhor que 'Busca dados'." },
  { numero: "03", titulo: "Implemente memória para contexto persistente", descricao: "Agentes sem memória reiniciam do zero a cada sessão. Use memória de curto prazo (mensagens recentes) e longo prazo (banco vetorial) para que o agente aprenda sobre o usuário e mantenha continuidade." },
  { numero: "04", titulo: "Adicione logs detalhados para depurar o comportamento", descricao: "Agentes tomam decisões em cadeia. Sem logs de cada passo — qual ferramenta foi chamada, com quais parâmetros, qual foi a resposta — é impossível identificar onde a lógica falhou." },
  { numero: "05", titulo: "Teste com entradas inesperadas e casos extremos", descricao: "Agentes são suscetíveis a prompt injection e comportamentos emergentes. Simule usuários mal-intencionados, entradas vazias, idiomas diferentes e solicitações fora do escopo antes de ir para produção." },
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
