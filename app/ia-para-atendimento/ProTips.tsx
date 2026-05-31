const tips = [
  { numero: "01", titulo: "Defina claramente o escopo do chatbot", descricao: "Um chatbot que tenta responder tudo e erra frequentemente frustra mais do que ajuda. Defina 10 a 20 perguntas que ele deve responder bem e seja transparente sobre o que está fora do escopo." },
  { numero: "02", titulo: "Sempre ofereça saída fácil para um agente humano", descricao: "Mesmo o melhor chatbot não resolve todos os casos. Adicione uma opção clara de falar com humano e configure a transição para que o agente receba o histórico completo da conversa." },
  { numero: "03", titulo: "Monitore CSAT semanalmente nos primeiros meses", descricao: "Pesquisas de satisfação (CSAT) após cada atendimento revelam onde a IA está falhando. Use esses dados para melhorar respostas, atualizar a base de conhecimento e ajustar fluxos." },
  { numero: "04", titulo: "Atualize a base de conhecimento com cada novo caso", descricao: "Cada pergunta que o bot não soube responder é uma oportunidade de melhoria. Crie um processo para revisar semanalmente as conversas sem resolução e atualizar a documentação." },
  { numero: "05", titulo: "Personalize respostas com o nome e contexto do cliente", descricao: "Automações que usam o nome do cliente e referências ao histórico de compras ou interações anteriores têm taxa de satisfação significativamente maior que respostas genéricas." },
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
