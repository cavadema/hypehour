const ferramentas = [
  { nome: "Make", preco: "Freemium", gratis: "Sim", tipo: "Automação visual no-code", melhorPara: "Conectar apps sem código com fluxos visuais" },
  { nome: "n8n", preco: "Open-source / Cloud a partir de $20/mês", gratis: "Sim (self-hosted)", tipo: "Automação open-source", melhorPara: "Devs que querem controle total e self-hosting" },
  { nome: "Zapier", preco: "Freemium", gratis: "Sim (limitado)", tipo: "Integração entre apps", melhorPara: "Automatizar tarefas simples entre ferramentas populares" },
  { nome: "Bardeen", preco: "Freemium", gratis: "Sim", tipo: "Automação no navegador", melhorPara: "Automatizar tarefas repetitivas no browser" },
  { nome: "Stack AI", preco: "Freemium", gratis: "Sim", tipo: "Workflows com IA no-code", melhorPara: "Empresas que querem agentes e pipelines de IA" },
  { nome: "Pipefy AI", preco: "A partir de $20/usuário/mês", gratis: "Trial", tipo: "BPM e automação de processos", melhorPara: "Gestão de processos estruturados em equipes" },
  { nome: "Relay", preco: "Freemium", gratis: "Sim", tipo: "Automação colaborativa", melhorPara: "Times que precisam de aprovações humanas nos fluxos" },
  { nome: "Lindy", preco: "Freemium", gratis: "Sim (limitado)", tipo: "Assistente de automação pessoal", melhorPara: "Automatizar agenda, emails e tarefas pessoais" },
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
