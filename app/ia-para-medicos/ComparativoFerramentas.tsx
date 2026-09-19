const ferramentas = [
  { nome: "Doximity AI", preco: "Gratuito para médicos nos EUA", gratis: "Sim", tipo: "Assistente de comunicação clínica", melhorPara: "Médicos que precisam redigir cartas, mensagens e documentação clínica rapidamente" },
  { nome: "Suki AI", preco: "Pago (sob consulta)", gratis: "Demo", tipo: "Assistente de voz para prontuário eletrônico", melhorPara: "Clínicas e hospitais que querem reduzir o tempo de documentação clínica por voz" },
  { nome: "Nabla Copilot", preco: "A partir de €149/mês/médico", gratis: "Trial", tipo: "Notas clínicas automáticas por IA", melhorPara: "Médicos que querem gerar SOAP notes automáticas durante a consulta sem digitar" },
  { nome: "Aidoc", preco: "Pago (sob consulta)", gratis: "Demo", tipo: "IA para análise de exames de imagem", melhorPara: "Radiologistas e serviços de diagnóstico por imagem com alto volume de exames" },
  { nome: "Glass Health", preco: "Freemium / Pro $29/mês", gratis: "Sim", tipo: "Suporte à decisão clínica com IA", melhorPara: "Médicos e residentes que querem diferencial diagnóstico e sugestões de condutas baseadas em evidências" },
  { nome: "Ambience Healthcare", preco: "Pago (sob consulta)", gratis: "Demo", tipo: "Automação completa de documentação médica", melhorPara: "Grandes clínicas e hospitais que querem IA integrada ao EHR para automação total de prontuários" },
  { nome: "Meditech Expanse AI", preco: "Pago (sob consulta)", gratis: "Demo", tipo: "IA integrada ao EHR Meditech", melhorPara: "Hospitais que usam Meditech e querem IA integrada nativamente ao prontuário eletrônico" },
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
