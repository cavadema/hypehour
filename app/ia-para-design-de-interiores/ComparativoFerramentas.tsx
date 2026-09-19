const ferramentas = [
  { nome: "RoomGPT", preco: "Freemium / Pro $12/mês", gratis: "Sim", tipo: "Redesign de ambientes por foto", melhorPara: "Visualizar rapidamente como um cômodo ficaria com diferentes estilos de decoração" },
  { nome: "REimagineHome", preco: "Freemium / Pro $19/mês", gratis: "Sim", tipo: "Redesign e staging virtual com IA", melhorPara: "Corretores de imóveis que precisam de staging virtual para fotos de anúncios" },
  { nome: "Planner 5D AI", preco: "Freemium / Pro a partir de $7,99/mês", gratis: "Sim", tipo: "Projeto completo 2D/3D com IA", melhorPara: "Quem quer planejar toda a planta e mobiliário em 2D e 3D com sugestões automáticas" },
  { nome: "Spacely AI", preco: "Freemium / A partir de $19/mês", gratis: "Sim", tipo: "Design profissional com geração de imagens", melhorPara: "Designers de interiores que criam propostas visuais para clientes com alta qualidade" },
  { nome: "Collov", preco: "Freemium / A partir de $29/mês", gratis: "Sim", tipo: "Redesign com produtos reais de lojas", melhorPara: "Quem quer visualizar o ambiente com móveis reais disponíveis para compra" },
  { nome: "Decoratly", preco: "Freemium / Pro $14/mês", gratis: "Sim", tipo: "Transformação de fotos com estilos prontos", melhorPara: "Decoração rápida e informal para inspiração pessoal ou redes sociais" },
  { nome: "HomeDesigns AI", preco: "A partir de $15/mês", gratis: "Trial", tipo: "Geração de ambientes internos e externos", melhorPara: "Profissionais que precisam de múltiplas variações de design para apresentar ao cliente" },
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
