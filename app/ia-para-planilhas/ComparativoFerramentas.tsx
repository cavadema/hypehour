const ferramentas = [
  { nome: "Julius AI", preco: "Freemium / Pro $20/mês", gratis: "Sim", tipo: "Análise de dados por chat em planilhas", melhorPara: "Analistas que querem fazer perguntas em linguagem natural sobre planilhas e CSVs" },
  { nome: "Claude for Excel (Anthropic)", preco: "Incluído no Claude Pro", gratis: "Sim", tipo: "Análise e geração de fórmulas no Excel", melhorPara: "Usuários do Excel que querem IA para fórmulas complexas, análise e automação via prompt" },
  { nome: "Google Sheets Gemini", preco: "Incluído no Google Workspace AI", gratis: "Trial", tipo: "IA integrada ao Google Sheets", melhorPara: "Usuários do Google Sheets que querem gerar fórmulas, limpar dados e analisar com IA nativa" },
  { nome: "Rows AI", preco: "Freemium / Plus $59/mês", gratis: "Sim", tipo: "Planilha com IA e fontes de dados integradas", melhorPara: "Times que querem planilhas conectadas a APIs e fontes externas com análise automática" },
  { nome: "Formula Bot", preco: "Freemium / Pro $9/mês", gratis: "Sim", tipo: "Gerador de fórmulas Excel e Sheets", melhorPara: "Usuários que travam em fórmulas complexas e precisam de ajuda para gerar VLOOKUP, INDEX-MATCH e afins" },
  { nome: "Numerous AI", preco: "Freemium / Pro $19/mês", gratis: "Sim", tipo: "Add-in de IA para Google Sheets e Excel", melhorPara: "Usuários que querem usar IA direto na planilha para categorizar, resumir e enriquecer dados" },
  { nome: "Ajelix", preco: "Freemium / Pro $15/mês", gratis: "Sim", tipo: "Suite de ferramentas IA para planilhas", melhorPara: "Analistas que precisam de fórmulas, scripts VBA e explicações de planilhas gerados por IA" },
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
