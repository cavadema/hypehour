const ferramentas = [
  { nome: "Suno AI", preco: "Freemium / Pro $8/mês", gratis: "Sim", tipo: "Geração de músicas completas por texto", melhorPara: "Criadores que querem músicas originais com letra e instrumentação a partir de um prompt" },
  { nome: "Udio", preco: "Freemium / Standard $10/mês", gratis: "Sim", tipo: "Geração musical de alta qualidade", melhorPara: "Músicos e criadores que querem maior controle sobre estilo, instrumentação e estrutura" },
  { nome: "Soundraw", preco: "Freemium / A partir de $16,99/mês", gratis: "Sim", tipo: "Música royalty-free personalizável", melhorPara: "Criadores de vídeo e podcasts que precisam de trilhas sem copyright para conteúdo comercial" },
  { nome: "Beatoven.ai", preco: "Freemium / A partir de $13/mês", gratis: "Sim", tipo: "Trilha sonora adaptativa por mood e cena", melhorPara: "Produtores de vídeo que querem música que combina com o mood de cada cena automaticamente" },
  { nome: "AIVA", preco: "Freemium / Standard €11/mês", gratis: "Sim", tipo: "Composição orquestral e cinematográfica", melhorPara: "Compositores e produtores que precisam de trilhas cinematográficas e orquestrais" },
  { nome: "Mubert", preco: "Freemium / Creator $14/mês", gratis: "Sim", tipo: "Streaming de música generativa em tempo real", melhorPara: "Apps e games que precisam de música ambiente adaptativa e infinita sem looping" },
  { nome: "Loudly", preco: "Freemium / A partir de $7,99/mês", gratis: "Sim", tipo: "Loops e beats gerados por IA", melhorPara: "Produtores de música eletrônica e beatmakers que querem loops e stems customizáveis" },
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
