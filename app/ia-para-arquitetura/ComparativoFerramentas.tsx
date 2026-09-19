const ferramentas = [
  { nome: "Midjourney", preco: "A partir de $10/mês", gratis: "Não", tipo: "Geração de imagens arquitetônicas", melhorPara: "Visualização rápida de conceitos e inspiração em projetos criativos" },
  { nome: "Spacemaker (Autodesk)", preco: "Pago (sob consulta)", gratis: "Demo", tipo: "Análise de viabilidade urbana com IA", melhorPara: "Arquitetos e incorporadores que avaliam potencial de terrenos antes do projeto" },
  { nome: "TestFit", preco: "A partir de $500/mês", gratis: "Demo", tipo: "Geração automatizada de plantas baixas", melhorPara: "Incorporadoras que precisam avaliar rapidamente a viabilidade de empreendimentos" },
  { nome: "Finch", preco: "Freemium / Pago", gratis: "Sim", tipo: "Otimização de desempenho sustentável", melhorPara: "Projetos com foco em eficiência energética e certificações verdes como LEED" },
  { nome: "Stable Diffusion (SDXL)", preco: "Open-source / Hospedagem a partir de $0", gratis: "Sim", tipo: "Geração de renders e visualizações", melhorPara: "Arquitetos que querem controle total sobre o processo de renderização com IA" },
  { nome: "Architect Render", preco: "Freemium / A partir de $29/mês", gratis: "Sim", tipo: "Renders fotorrealistas de interiores e fachadas", melhorPara: "Escritórios que precisam de apresentações visuais para clientes sem usar 3D Studio" },
  { nome: "Maket", preco: "A partir de $49/mês", gratis: "Trial", tipo: "Geração de plantas e maquetes com IA", melhorPara: "Arquitetos nas fases iniciais do projeto que querem múltiplas opções rapidamente" },
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
