const ferramentas = [
  { nome: "Microsoft Copilot 365", preco: "A partir de $30/usuário/mês", gratis: "Trial", tipo: "IA integrada ao Microsoft 365", melhorPara: "Empresas que usam Teams, Outlook, Word e Excel e querem IA em todo o workflow" },
  { nome: "Google Workspace AI (Gemini)", preco: "A partir de $24/usuário/mês", gratis: "Trial", tipo: "IA integrada ao Google Workspace", melhorPara: "Empresas na suite Google que querem IA no Docs, Sheets, Gmail e Meet" },
  { nome: "Notion AI", preco: "$10/usuário/mês (add-on)", gratis: "Créditos", tipo: "IA em wikis, docs e projetos", melhorPara: "Times que usam Notion para documentação e gestão e querem IA no mesmo ambiente" },
  { nome: "Slack AI", preco: "$10/usuário/mês (add-on)", gratis: "Não", tipo: "IA para busca e resumo no Slack", melhorPara: "Equipes no Slack que perdem tempo procurando informações em canais antigos" },
  { nome: "Otter.ai", preco: "Freemium / Pro $17/mês", gratis: "Sim", tipo: "Transcrição e notas de reuniões com IA", melhorPara: "Times com muitas reuniões que querem resumos automáticos e itens de ação" },
  { nome: "Jasper", preco: "A partir de $49/mês", gratis: "Trial", tipo: "IA para geração de conteúdo de marketing", melhorPara: "Times de marketing que produzem alto volume de conteúdo escrito e precisam de consistência de marca" },
  { nome: "Harvey AI", preco: "Pago (sob consulta)", gratis: "Demo", tipo: "IA jurídica para escritórios e empresas", melhorPara: "Departamentos jurídicos que analisam contratos, pesquisam jurisprudência e redigem documentos legais" },
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
