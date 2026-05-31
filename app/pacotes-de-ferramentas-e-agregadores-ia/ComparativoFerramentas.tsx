const ferramentas = [
  { nome: "Poe (Quora)", preco: "Freemium / Pro $19,99/mês", gratis: "Sim", tipo: "Agregador de múltiplos modelos de IA", melhorPara: "Usuários que querem testar e comparar ChatGPT, Claude, Gemini e outros em uma única plataforma" },
  { nome: "Hugging Face", preco: "Freemium / Pro $9/mês", gratis: "Sim", tipo: "Hub de modelos e datasets de IA open-source", melhorPara: "Pesquisadores e desenvolvedores que acessam, testam e publicam modelos de IA open-source" },
  { nome: "There's An AI For That", preco: "Gratuito", gratis: "Sim", tipo: "Diretório de ferramentas de IA", melhorPara: "Quem quer descobrir ferramentas de IA para qualquer caso de uso específico" },
  { nome: "Futurepedia", preco: "Gratuito", gratis: "Sim", tipo: "Diretório curado de ferramentas de IA", melhorPara: "Profissionais que querem acompanhar as novas ferramentas de IA organizadas por categoria" },
  { nome: "AI Tool Hunt", preco: "Gratuito", gratis: "Sim", tipo: "Curadoria diária de ferramentas de IA", melhorPara: "Entusiastas que querem descobrir ferramentas novas de IA todos os dias com avaliações da comunidade" },
  { nome: "OpenRouter", preco: "Pay-as-you-go", gratis: "Crédito inicial", tipo: "API unificada para múltiplos LLMs", melhorPara: "Desenvolvedores que querem acessar dezenas de modelos de IA com uma única API e billing centralizado" },
  { nome: "ToolJet", preco: "Open-source / Cloud a partir de $20/mês", gratis: "Self-hosted", tipo: "Plataforma low-code para apps internos", melhorPara: "Times que querem criar ferramentas internas com dados e IA sem desenvolvimento frontend complexo" },
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
