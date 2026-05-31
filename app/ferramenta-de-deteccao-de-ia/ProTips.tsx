const tips = [
  { numero: "01", titulo: "Nenhum detector é 100% preciso", descricao: "As melhores ferramentas têm taxas de falso positivo e falso negativo. Use a detecção como um indício, não como prova definitiva. Combine com análise humana antes de tomar decisões importantes." },
  { numero: "02", titulo: "Teste com textos de referência", descricao: "Antes de usar em larga escala, teste a ferramenta com textos que você sabe que são humanos e outros que sabe que são de IA. Isso calibra sua confiança nos resultados." },
  { numero: "03", titulo: "Textos curtos são menos confiáveis", descricao: "Detectores funcionam melhor com textos de pelo menos 250 palavras. Para textos muito curtos, os resultados são menos precisos e devem ser interpretados com cautela." },
  { numero: "04", titulo: "Considere o contexto antes de concluir", descricao: "Textos altamente técnicos, muito formais ou sobre tópicos específicos podem ser sinalizados como IA mesmo sendo humanos. O estilo de escrita influencia muito o resultado." },
  { numero: "05", titulo: "Use múltiplas ferramentas para casos críticos", descricao: "Se a decisão é importante, passe o texto por 2 ou 3 detectores diferentes. Resultados consistentes entre ferramentas distintas aumentam significativamente a confiabilidade da análise." },
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
