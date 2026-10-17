const tips = [
  { numero: "01", titulo: "Use a IA para explorar, não para decidir", descricao: "Gere várias alternativas de tela para comparar caminhos, mas valide as decisões com pesquisa e testes com usuários." },
  { numero: "02", titulo: "Escreva o briefing com contexto", descricao: "Informe público, objetivo da tela e restrições. Quanto mais específico o texto, mais útil tende a ser a primeira versão gerada." },
  { numero: "03", titulo: "Revise acessibilidade e consistência", descricao: "Interfaces geradas por IA precisam ser conferidas quanto a contraste, hierarquia, navegação e aderência ao design system do produto." },
  { numero: "04", titulo: "Confira o que cada ferramenta exporta", descricao: "Verifique se há exportação para Figma, HTML e CSS ou código antes de escolher, para não travar o fluxo na hora de levar o design adiante." },
  { numero: "05", titulo: "Teste o plano gratuito antes de assinar", descricao: "Várias ferramentas oferecem uma opção gratuita para começar. Use um projeto real pequeno para avaliar a qualidade do resultado." },
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
