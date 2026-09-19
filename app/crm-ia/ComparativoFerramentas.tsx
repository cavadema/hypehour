const ferramentas = [
  { nome: "HubSpot AI CRM", preco: "Freemium", gratis: "Sim", tipo: "CRM completo com IA", melhorPara: "Empresas que querem marketing, vendas e suporte integrados" },
  { nome: "Pipedrive", preco: "A partir de $14/usuário/mês", gratis: "Trial 14 dias", tipo: "CRM focado em vendas", melhorPara: "Times de vendas que precisam de pipeline visual" },
  { nome: "Monday CRM", preco: "A partir de $12/usuário/mês", gratis: "Trial", tipo: "CRM visual e colaborativo", melhorPara: "Times que já usam Monday.com como plataforma" },
  { nome: "Attio", preco: "Freemium", gratis: "Sim", tipo: "CRM moderno e flexível", melhorPara: "Startups e times de business development" },
  { nome: "Kommo", preco: "A partir de $15/usuário/mês", gratis: "Trial", tipo: "CRM integrado com WhatsApp", melhorPara: "Negócios que vendem via WhatsApp e redes sociais" },
  { nome: "Rings AI", preco: "Freemium", gratis: "Sim", tipo: "XRM com insights de IA", melhorPara: "Gestão de relacionamentos com análises preditivas" },
  { nome: "SmartWriter", preco: "A partir de $49/mês", gratis: "Trial", tipo: "Geração de mensagens para outreach", melhorPara: "Times de vendas que fazem prospecção em escala" },
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
