const ferramentas = [
  { nome: "Unity Muse", preco: "A partir de $30/mês", gratis: "Trial", tipo: "IA integrada ao Unity para desenvolvimento", melhorPara: "Desenvolvedores Unity que querem gerar texturas, animações e assets com IA no editor" },
  { nome: "Ludo.ai", preco: "Freemium / Pro $19,99/mês", gratis: "Sim", tipo: "Pesquisa e ideação de mecânicas de jogos", melhorPara: "Game designers na fase de conceito que querem analisar tendências e validar ideias de mecânicas" },
  { nome: "Scenario", preco: "Freemium / A partir de $24/mês", gratis: "Sim", tipo: "Geração de assets 2D consistentes para jogos", melhorPara: "Estúdios indie que precisam de sprites, tilesets e personagens com estilo visual consistente" },
  { nome: "Inworld AI", preco: "Freemium / Studio sob consulta", gratis: "Sim", tipo: "NPCs com IA conversacional e personalidade", melhorPara: "Desenvolvedores que querem NPCs com diálogos dinâmicos, memória e personalidade própria" },
  { nome: "Suno AI", preco: "Freemium / Pro $8/mês", gratis: "Sim", tipo: "Geração de trilha sonora e efeitos sonoros", melhorPara: "Desenvolvedores indie que precisam de música e efeitos sonoros sem orçamento para compositor" },
  { nome: "ElevenLabs", preco: "Freemium / A partir de $5/mês", gratis: "Sim", tipo: "Dublagem e vozes de personagens com IA", melhorPara: "Jogos com diálogos narrados que precisam de vozes expressivas para personagens" },
  { nome: "Meshy", preco: "Freemium / Pro $16/mês", gratis: "Sim", tipo: "Geração de modelos 3D e texturas", melhorPara: "Desenvolvedores 3D que querem prototipar modelos e texturas rapidamente sem modelagem manual" },
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
