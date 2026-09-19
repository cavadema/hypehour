const ferramentas = [
  { nome: "Kavout", preco: "Pago (sob consulta)", gratis: "Demo", tipo: "Análise e scoring de ações com IA", melhorPara: "Investidores que querem scoring quantitativo de ações baseado em IA para triagem e decisão" },
  { nome: "Danelfin", preco: "Freemium / Pro €49/mês", gratis: "Sim", tipo: "AI Score para seleção de ações", melhorPara: "Investidores individuais que querem score de IA para identificar ações com maior probabilidade de superar o mercado" },
  { nome: "Alpaca", preco: "Freemium (API) / Comissão por operação", gratis: "Sim", tipo: "API de trading algorítmico com IA", melhorPara: "Desenvolvedores que querem criar estratégias automatizadas de trading com acesso a dados de mercado" },
  { nome: "Kensho (S&P Global)", preco: "Pago (sob consulta)", gratis: "Demo", tipo: "Analytics financeiro enterprise com IA", melhorPara: "Instituições financeiras que precisam de análise de eventos de mercado e dados macroeconômicos com IA" },
  { nome: "FinChat.io", preco: "Freemium / Pro $29/mês", gratis: "Sim", tipo: "Chat com dados financeiros de empresas", melhorPara: "Investidores fundamentalistas que querem fazer perguntas sobre demonstrações financeiras de empresas listadas" },
  { nome: "Composer", preco: "A partir de $19/mês", gratis: "Trial", tipo: "Automação de estratégias de investimento", melhorPara: "Investidores que querem criar e executar estratégias de rebalanceamento e alocação automatizadas sem código" },
  { nome: "Validea", preco: "A partir de $25/mês", gratis: "Trial", tipo: "Modelos de investimento baseados em gurus", melhorPara: "Investidores value que querem aplicar as metodologias de Buffett, Graham, Lynch e outros com IA" },
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
