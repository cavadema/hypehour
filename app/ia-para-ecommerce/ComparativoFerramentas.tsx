const ferramentas = [
  { nome: "Genstore", preco: "Não divulgado no site", gratis: "Consulte", tipo: "Construtor de lojas com IA", melhorPara: "Iniciantes e vendedores que querem montar uma loja a partir de um prompt" },
  { nome: "Native Commerce", preco: "Começa gratuito; planos pagos no site", gratis: "Sim", tipo: "Construtor de lojas e plataforma de comércio", melhorPara: "Negócios que estão começando ou ampliando as vendas online" },
  { nome: "Nuvem Chat", preco: "A partir de R$ 1,50 por conversa de IA (plano Começo)", gratis: "Consulte", tipo: "Assistente de IA para atendimento", melhorPara: "Lojistas da Nuvemshop que querem atender 24h no WhatsApp e Instagram" },
  { nome: "Prax", preco: "A partir de R$ 290/mês (plano Pro)", gratis: "Consulte", tipo: "Analytics de ecommerce com IA", melhorPara: "Lojas que querem centralizar vendas, estoque e clientes em um painel" },
  { nome: "Luigi's Box", preco: "Veja a página de preços do site", gratis: "Consulte", tipo: "Busca e descoberta de produtos", melhorPara: "Lojas com catálogo grande que precisam melhorar busca e recomendações" },
  { nome: "Toca", preco: "Não divulgado no site", gratis: "Consulte", tipo: "Agentes de IA para ecommerce e varejo", melhorPara: "Operações que cruzam dados de loja, marketplaces, anúncios e ERP" },
  { nome: "Salesforce Commerce AI", preco: "Não divulgado no site", gratis: "Consulte", tipo: "IA para comércio da Salesforce", melhorPara: "Empresas que usam o ecossistema Salesforce e querem merchandising e promoções com IA" },
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
