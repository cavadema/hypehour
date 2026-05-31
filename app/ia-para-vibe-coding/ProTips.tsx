const tips = [
  { numero: "01", titulo: "Descreva o objetivo do código, não como implementar", descricao: "Em vez de 'escreva um loop que percorre um array', diga 'filtre os usuários ativos e ordene por data de criação descendente'. O objetivo claro produz implementações melhores que instruções técnicas vagas." },
  { numero: "02", titulo: "Revise todo o código gerado antes de colocar em produção", descricao: "Vibe coding é ótimo para prototipação rápida, mas o código gerado por IA pode ter bugs, vulnerabilidades de segurança e lógica incorreta. Revisão humana é obrigatória antes de qualquer deploy de produção." },
  { numero: "03", titulo: "Use commits pequenos e frequentes ao trabalhar com IA", descricao: "Quando a IA faz muitas mudanças de uma vez, fica difícil identificar o que causou um bug. Faça commits após cada funcionalidade funcionando para ter um histórico claro e poder reverter facilmente." },
  { numero: "04", titulo: "Forneça contexto do projeto inteiro, não apenas o arquivo atual", descricao: "Ferramentas como Cursor e Windsurf funcionam melhor quando você descreve a arquitetura geral do projeto antes de pedir mudanças específicas, evitando que a IA crie código incompatível com o restante." },
  { numero: "05", titulo: "Combine com testes automatizados para validar o comportamento", descricao: "Peça para a IA gerar testes junto com o código de produção. Testes escritos pela mesma IA que criou o código ainda têm valor — eles documentam o comportamento esperado e detectam regressões futuras." },
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
