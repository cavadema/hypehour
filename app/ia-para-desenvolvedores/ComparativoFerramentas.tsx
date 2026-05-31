const ferramentas = [
  { nome: "GitHub Copilot", preco: "Individual $10/mês / Business $19/usuário/mês", gratis: "Trial", tipo: "Assistente de código no IDE", melhorPara: "Desenvolvedores que trabalham no GitHub e querem sugestões inline no VS Code ou JetBrains" },
  { nome: "Cursor", preco: "Freemium / Pro $20/mês", gratis: "Sim", tipo: "IDE com IA integrada profundamente", melhorPara: "Desenvolvedores que querem um IDE completo com IA contextual de todo o projeto" },
  { nome: "Tabnine", preco: "Freemium / Pro $12/mês", gratis: "Sim", tipo: "Completação de código com privacidade", melhorPara: "Times que precisam de IA no código sem enviar dados para servidores externos (self-hosted)" },
  { nome: "Codeium", preco: "Freemium / Teams $12/mês", gratis: "Sim", tipo: "Completação e chat no IDE gratuito", melhorPara: "Desenvolvedores individuais que querem GitHub Copilot-like sem custo mensal" },
  { nome: "Sourcegraph Cody", preco: "Freemium / Enterprise sob consulta", gratis: "Sim", tipo: "IA com contexto de toda a codebase", melhorPara: "Times em bases de código grandes que precisam de busca e navegação inteligente" },
  { nome: "Amazon Q Developer", preco: "Freemium / Pro $19/mês", gratis: "Sim", tipo: "Assistente de código integrado à AWS", melhorPara: "Desenvolvedores de backend em AWS que querem sugestões com conhecimento dos serviços Amazon" },
  { nome: "Replit AI", preco: "Freemium / Core $20/mês", gratis: "Sim", tipo: "IDE online com IA e deploy integrado", melhorPara: "Desenvolvedores que querem prototipar e hospedar projetos rapidamente sem configuração local" },
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
