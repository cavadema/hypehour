const ferramentas = [
  { nome: "LangChain", preco: "Open-source", gratis: "Sim", tipo: "Framework para agentes Python/JS", melhorPara: "Desenvolvedores que querem controle total na construção de agentes" },
  { nome: "CrewAI", preco: "Open-source / Cloud pago", gratis: "Sim", tipo: "Orquestração de múltiplos agentes", melhorPara: "Projetos que envolvem colaboração entre agentes com papéis distintos" },
  { nome: "LlamaIndex", preco: "Open-source", gratis: "Sim", tipo: "Framework focado em RAG e dados", melhorPara: "Agentes que consultam documentos, bancos de dados e fontes externas" },
  { nome: "n8n", preco: "Open-source / Cloud a partir de €20/mês", gratis: "Self-hosted", tipo: "Automação visual low-code", melhorPara: "Equipes que querem automatizar fluxos sem escrever código" },
  { nome: "Flowise", preco: "Open-source", gratis: "Sim", tipo: "Builder visual de agentes LangChain", melhorPara: "Prototipagem rápida de agentes conversacionais com interface drag-and-drop" },
  { nome: "Dify", preco: "Open-source / Cloud freemium", gratis: "Sim", tipo: "Plataforma LLMOps completa", melhorPara: "Empresas que precisam de deploy, monitoramento e gestão de agentes em produção" },
  { nome: "AutoGen", preco: "Open-source (Microsoft)", gratis: "Sim", tipo: "Framework de conversação multi-agente", melhorPara: "Pesquisadores e desenvolvedores que experimentam com agentes autônomos colaborativos" },
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
