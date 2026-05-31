const ferramentas = [
  { nome: "Cursor", preco: "Freemium / Pro $20/mês", gratis: "Sim", tipo: "IDE com IA para vibe coding", melhorPara: "Devs que querem descrever o que querem e ver o código surgir no próprio editor com contexto do projeto" },
  { nome: "Replit AI", preco: "Freemium / Core $20/mês", gratis: "Sim", tipo: "IDE online com IA e deploy instantâneo", melhorPara: "Prototipar e publicar apps completos no browser sem configuração de ambiente local" },
  { nome: "Bolt.new", preco: "Freemium / Pro $20/mês", gratis: "Sim", tipo: "Gerador de apps full-stack em uma mensagem", melhorPara: "Criar aplicações web completas a partir de uma descrição em texto, com deploy em minutos" },
  { nome: "v0 (Vercel)", preco: "Freemium / Pro $20/mês", gratis: "Sim", tipo: "Gerador de UI com shadcn/Tailwind", melhorPara: "Desenvolvedores que querem componentes React prontos gerados por IA com código limpo e editável" },
  { nome: "Lovable", preco: "Freemium / Pro $20/mês", gratis: "Sim", tipo: "Gerador de apps React por prompt", melhorPara: "Não-desenvolvedores e fundadores que querem criar MVPs sem escrever código manualmente" },
  { nome: "GitHub Copilot", preco: "Individual $10/mês", gratis: "Trial", tipo: "Completação de código inline no IDE", melhorPara: "Devs que preferem trabalhar no próprio editor com sugestões contextuais linha por linha" },
  { nome: "Windsurf (Codeium)", preco: "Freemium / Pro $15/mês", gratis: "Sim", tipo: "IDE com fluxo agêntico de edição", melhorPara: "Desenvolvedores que querem um agente que navega e edita múltiplos arquivos autonomamente" },
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
