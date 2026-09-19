const ferramentas = [
  { nome: "ChatGPT", preco: "Freemium / Plus $20/mês", gratis: "Sim", tipo: "Assistente geral multimodal", melhorPara: "Tarefas variadas de texto, código e análise" },
  { nome: "Claude", preco: "Freemium / Pro $20/mês", gratis: "Sim", tipo: "Assistente com contexto longo", melhorPara: "Documentos longos, raciocínio e escrita cuidadosa" },
  { nome: "Gemini", preco: "Freemium / Advanced $20/mês", gratis: "Sim", tipo: "Assistente multimodal do Google", melhorPara: "Integração com Google Workspace e buscas" },
  { nome: "Macaron", preco: "Freemium", gratis: "Sim", tipo: "Assistente pessoal elegante", melhorPara: "Produtividade diária com interface minimalista" },
  { nome: "Goose", preco: "Open-source", gratis: "Sim", tipo: "Agente de terminal com IA", melhorPara: "Desenvolvedores que querem automação via terminal" },
  { nome: "Notis", preco: "Freemium", gratis: "Sim", tipo: "Assistente para notas e memória", melhorPara: "Capturar e organizar informações rapidamente" },
  { nome: "Atlas", preco: "Freemium", gratis: "Sim", tipo: "Assistente com busca integrada", melhorPara: "Pesquisa e síntese de informações em tempo real" },
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
