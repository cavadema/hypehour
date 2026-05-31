const ferramentas = [
  { nome: "Harvey AI", preco: "Pago (sob consulta)", gratis: "Demo", tipo: "Assistente jurídico generativo", melhorPara: "Escritórios e departamentos jurídicos que querem IA para pesquisa, contratos e documentos legais" },
  { nome: "Lexis+ AI", preco: "Incluído no LexisNexis", gratis: "Demo", tipo: "Pesquisa jurídica com IA generativa", melhorPara: "Advogados que usam LexisNexis e querem IA integrada à pesquisa de jurisprudência e doutrina" },
  { nome: "Westlaw Precision", preco: "Incluído no Westlaw", gratis: "Demo", tipo: "Pesquisa jurídica avançada com IA", melhorPara: "Advogados em firmas que usam Thomson Reuters e precisam de pesquisa de casos com IA contextual" },
  { nome: "Casetext (CoCounsel)", preco: "Pago (sob consulta)", gratis: "Demo", tipo: "Assistente jurídico com pesquisa integrada", melhorPara: "Advogados que querem revisão de contratos, pesquisa de casos e análise de deposições com IA" },
  { nome: "Definely", preco: "A partir de £99/mês", gratis: "Trial", tipo: "Revisão e análise de contratos com IA", melhorPara: "Advogados corporativos que revisam contratos longos e querem identificar riscos automaticamente" },
  { nome: "Luminance", preco: "Pago (sob consulta)", gratis: "Demo", tipo: "Due diligence e revisão de documentos", melhorPara: "Escritórios com alto volume de due diligence em M&A e contratos que precisam de análise em escala" },
  { nome: "Jusbrasil IA", preco: "Freemium / Pro a partir de R$79/mês", gratis: "Sim", tipo: "Pesquisa jurídica brasileira com IA", melhorPara: "Advogados brasileiros que precisam de pesquisa de jurisprudência, legislação e processos no Jusbrasil" },
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
