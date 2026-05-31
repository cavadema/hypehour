const tips = [
  { numero: "01", titulo: "Use a IA como rascunho, não como produto final", descricao: "O conteúdo gerado por IA é um ponto de partida. Sempre revise, adapte ao seu tom e adicione exemplos próprios. Conteúdo editado por humanos tem melhor desempenho em SEO e engajamento." },
  { numero: "02", titulo: "Dê contexto rico no prompt", descricao: "Quanto mais contexto você fornecer — público-alvo, objetivo do texto, tom desejado, palavras-chave — melhor será o resultado. Prompts vagos geram conteúdo genérico." },
  { numero: "03", titulo: "Crie um banco de prompts aprovados", descricao: "Quando um prompt gerar um resultado excelente, salve-o. Com o tempo, você terá um repositório de prompts testados para cada tipo de conteúdo que sua equipe produz." },
  { numero: "04", titulo: "Combine IA de conteúdo com IA de SEO", descricao: "Use Frase.io ou Contentor para briefar o conteúdo com base em dados de busca, depois use Jasper ou Copy.ai para escrever. A combinação das duas abordagens gera resultados superiores." },
  { numero: "05", titulo: "Revise para remover padrões de IA", descricao: "Expressões como 'certamente', 'é fundamental', 'no mundo atual' são marcas comuns de IA. Substitua por linguagem mais natural e específica para aumentar a autenticidade do texto." },
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
