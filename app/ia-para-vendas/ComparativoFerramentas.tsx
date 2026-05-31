const ferramentas = [
  { nome: "Gong", preco: "Pago (sob consulta)", gratis: "Demo", tipo: "Inteligência de conversa para vendas", melhorPara: "Times de vendas B2B que querem analisar calls e identificar padrões de fechamento" },
  { nome: "Outreach", preco: "Pago (sob consulta)", gratis: "Demo", tipo: "Plataforma de sales engagement com IA", melhorPara: "Equipes de SDRs que automatizam sequências de prospecção e precisam de insights de engajamento" },
  { nome: "HubSpot Sales AI", preco: "Incluído nos planos HubSpot", gratis: "Trial", tipo: "CRM com IA para vendas", melhorPara: "Equipes que usam HubSpot e querem IA em emails, previsão de pipeline e automação de tarefas" },
  { nome: "Apollo.io", preco: "Freemium / A partir de $49/mês", gratis: "Sim", tipo: "Prospecção e enriquecimento de dados B2B", melhorPara: "SDRs e BDRs que precisam encontrar e enriquecer leads B2B com dados atualizados de contato" },
  { nome: "Lavender", preco: "Freemium / Individual $29/mês", gratis: "Sim", tipo: "Coach de email de vendas com IA", melhorPara: "Representantes de vendas que querem melhorar taxa de resposta dos cold emails com feedback em tempo real" },
  { nome: "Clari", preco: "Pago (sob consulta)", gratis: "Demo", tipo: "Revenue intelligence e forecast com IA", melhorPara: "Líderes de vendas que precisam de previsão de receita precisa e visibilidade do pipeline em tempo real" },
  { nome: "Salesloft", preco: "Pago (sob consulta)", gratis: "Demo", tipo: "Revenue workflow platform com IA", melhorPara: "Equipes de vendas enterprise que querem uma plataforma integrada de cadências, CRM e coaching" },
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
