const ferramentas = [
  { nome: "UX Pilot", preco: "Comece grátis; planos no site", gratis: "Sim", tipo: "Geração de telas e fluxos UI e UX", melhorPara: "Equipes que usam Figma e querem wireframes e telas editáveis com exportação de código" },
  { nome: "Banani", preco: "Opção gratuita; planos no site", gratis: "Sim", tipo: "Gerador de interfaces mobile e web", melhorPara: "Quem quer gerar telas a partir de texto ou screenshots e exportar para Figma ou HTML" },
  { nome: "Uizard", preco: "Consulte o site", gratis: "Consulte", tipo: "Design de interfaces e prototipagem", melhorPara: "Prototipar rapidamente a partir de texto, screenshots ou esboços" },
  { nome: "Visily", preco: "Opção gratuita; planos no site", gratis: "Sim", tipo: "Wireframes e protótipos com IA", melhorPara: "Pessoas que não são designers e precisam de wireframes e protótipos" },
  { nome: "Relume", preco: "Comece grátis; planos no site", gratis: "Sim", tipo: "Sites de marketing a partir de briefing", melhorPara: "Montar sitemap, wireframes e site de marketing com componentes prontos" },
  { nome: "Locofy", preco: "Consulte o site", gratis: "Consulte", tipo: "Design to code", melhorPara: "Converter designs de interface em código de front-end" },
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
