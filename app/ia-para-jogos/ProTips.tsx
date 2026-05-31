const tips = [
  { numero: "01", titulo: "Use IA para asset art como ponto de partida, não como entrega final", descricao: "Assets gerados por IA raramente são plug-and-play. Use-os como base para arte final que um artista vai refinar — isso ainda economiza horas de trabalho comparado a criar do zero." },
  { numero: "02", titulo: "Defina um estilo visual fixo antes de gerar assets em volume", descricao: "Gere 5 a 10 assets de referência e selecione os melhores para criar um 'style guide visual'. Use esses exemplos como referência em todas as gerações seguintes para manter coerência." },
  { numero: "03", titulo: "Teste NPCs com IA em ambientes controlados antes do lançamento", descricao: "NPCs com diálogos gerados por IA podem produzir respostas inesperadas. Faça testes extensivos de red-team simulando jogadores que tentam extrair conteúdo inadequado ou quebrar a personagem." },
  { numero: "04", titulo: "Use IA para gerar variações de level design rapidamente", descricao: "Ferramentas como ChatGPT e Claude podem gerar layouts textuais de fases, sistemas de progressão e ideias de puzzles que seu time depois implementa — acelerando a fase criativa de design de níveis." },
  { numero: "05", titulo: "Documente quais assets foram gerados por IA para conformidade", descricao: "Algumas plataformas de distribuição (Steam, App Store) e prêmios de jogos estão implementando regras sobre IA. Mantenha um registro de quais assets têm contribuição de IA para conformidade futura." },
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
