const tips = [
  { numero: "01", titulo: "Comece por um problema, não por uma ferramenta", descricao: "Defina onde a loja perde mais tempo ou dinheiro, como atendimento, busca interna ou análise de dados, e teste uma solução para esse ponto antes de adotar várias." },
  { numero: "02", titulo: "Mantenha uma pessoa na decisão final", descricao: "Ferramentas como Toca pedem aprovação antes de agir e o Nuvem Chat passa conversas para humanos. Aproveite esses controles em vez de automatizar tudo." },
  { numero: "03", titulo: "Confira integrações antes de contratar", descricao: "Verifique se a ferramenta se conecta à sua plataforma e aos seus marketplaces. Toca integra VTEX e Mercado Livre e Prax integra Shopify e VTEX, por exemplo." },
  { numero: "04", titulo: "Acompanhe o custo por uso", descricao: "O Nuvem Chat, por exemplo, cobra por conversa de IA. Estime o volume de atendimentos e projete o custo mensal antes de ativar." },
  { numero: "05", titulo: "Revise o conteúdo gerado por IA", descricao: "Descrições de produto, textos de loja e respostas automáticas precisam ser conferidos quanto a preço, prazo, política de troca e informações técnicas antes de ir ao ar." },
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
