const tips = [
  { numero: "01", titulo: "Use o modo de resumo para páginas longas antes de ler", descricao: "Navegadores com IA permitem resumir artigos, relatórios e documentações longas antes de decidir se vale a pena ler completo. Isso economiza horas de leitura triando o que é realmente relevante." },
  { numero: "02", titulo: "Configure o assistente de IA com seu contexto de trabalho", descricao: "Ferramentas como Edge Copilot e Brave Leo permitem instruções personalizadas. Defina seu papel, interesse e preferências para que as respostas sejam mais relevantes ao seu contexto profissional." },
  { numero: "03", titulo: "Avalie o impacto na privacidade antes de adotar", descricao: "Navegadores com IA em nuvem enviam o conteúdo das páginas para servidores externos para processamento. Verifique as políticas de dados de cada ferramenta, especialmente ao navegar em conteúdo confidencial." },
  { numero: "04", titulo: "Use IA do navegador para comparar produtos e preços", descricao: "Peça ao assistente do navegador para comparar as especificações da página atual com produtos similares, identificar o melhor custo-benefício e resumir as avaliações dos usuários sem abrir múltiplas abas." },
  { numero: "05", titulo: "Combine o navegador com IA com um gerenciador de abas", descricao: "A IA do navegador não resolve o gerenciamento de abas por si só. Combine com extensões como Tab Manager Plus ou One Tab para organizar grupos de abas de pesquisa e evitar perder contexto importante." },
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
