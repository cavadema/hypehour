const ferramentas = [
  { nome: "Otter.ai", preco: "Freemium / Pro $17/mês", gratis: "Sim", tipo: "Transcrição e resumo de reuniões", melhorPara: "Times que fazem muitas reuniões e precisam de transcrição automática com itens de ação" },
  { nome: "Fireflies.ai", preco: "Freemium / Pro $10/mês", gratis: "Sim", tipo: "Notas e pesquisa de reuniões com IA", melhorPara: "Equipes de vendas e CS que precisam buscar insights em conversas gravadas" },
  { nome: "Fathom", preco: "Freemium / Team $19/mês", gratis: "Sim", tipo: "Notas automáticas e highlights no Zoom", melhorPara: "Usuários do Zoom que querem notas sem nenhuma configuração adicional" },
  { nome: "Tactiq", preco: "Freemium / Pro $8/mês", gratis: "Sim", tipo: "Transcrição em tempo real no Google Meet", melhorPara: "Usuários do Google Meet e Teams que precisam de transcrição durante a call" },
  { nome: "Read AI", preco: "Freemium / Pro $19,75/mês", gratis: "Sim", tipo: "Analytics de reuniões com IA", melhorPara: "Gestores que querem métricas de engajamento e análise de participação nas reuniões" },
  { nome: "Sembly AI", preco: "Freemium / Professional $15/mês", gratis: "Sim", tipo: "Resumos e decisões de reuniões", melhorPara: "Times que precisam de documentação estruturada com decisões e responsáveis identificados" },
  { nome: "Speechma", preco: "Freemium", gratis: "Sim", tipo: "Transcrição de áudio e reuniões", melhorPara: "Usuários que precisam transcrever áudios e reuniões com suporte a múltiplos idiomas" },
];

export default function ComparativoFerramentas() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Comparativo das principais ferramentas</h2>
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 font-semibold">Ferramenta</th>
              <th className="px-4 py-3 font-semibold">Preço</th>
              <th className="px-4 py-3 font-semibold">Grátis?</th>
              <th className="px-4 py-3 font-semibold hidden md:table-cell">Tipo</th>
              <th className="px-4 py-3 font-semibold hidden lg:table-cell">Melhor para</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {ferramentas.map((f, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 font-medium text-gray-900">{f.nome}</td>
                <td className="px-4 py-3 text-gray-600">{f.preco}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${f.gratis === "Sim" ? "bg-green-100 text-green-700" : f.gratis === "Não" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}>{f.gratis}</span>
                </td>
                <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{f.tipo}</td>
                <td className="px-4 py-3 text-gray-600 hidden lg:table-cell">{f.melhorPara}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mt-2">* Preços aproximados. Consulte o site oficial de cada ferramenta para valores atualizados.</p>
    </div>
  );
}
