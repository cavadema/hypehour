const tips = [
  { numero: "01", titulo: "Use IA como ferramenta de triagem, não como oráculo de decisão", descricao: "Scores e recomendações de IA são baseados em dados históricos e modelos quantitativos. Use-os para estreitar o universo de análise, mas a decisão final deve envolver julgamento humano e contexto qualitativo." },
  { numero: "02", titulo: "Backteste qualquer estratégia antes de alocar capital real", descricao: "Uma estratégia que parece ótima em dados históricos pode ter sofrido overfitting ao período analisado. Sempre realize backtesting em múltiplos períodos e condições de mercado antes de implementar." },
  { numero: "03", titulo: "Diversifique as fontes de sinal de IA", descricao: "Não dependa de um único modelo ou score de IA para todas as decisões. Múltiplas perspectivas — técnica, fundamentalista, macro — reduzem o risco de seguir um modelo que falhou em capturar uma mudança de regime." },
  { numero: "04", titulo: "Mantenha um diário de investimentos para calibrar suas decisões", descricao: "Registre por que tomou cada decisão e qual era a expectativa da IA naquele momento. Comparar previsões da IA com resultados reais ao longo do tempo é a única forma de avaliar a utilidade real da ferramenta." },
  { numero: "05", titulo: "Verifique a conformidade regulatória antes de usar em carteiras de terceiros", descricao: "O uso de IA em gestão de carteiras de clientes pode ter implicações regulatórias na CVM e nos órgãos de cada país. Verifique as normas aplicáveis antes de automatizar decisões que envolvem recursos de terceiros." },
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
