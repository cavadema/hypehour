const ferramentas = [
  { nome: "ElevenLabs", preco: "Freemium / A partir de $5/mês", gratis: "Sim", tipo: "Síntese de voz hiper-realista", melhorPara: "Narrações profissionais, podcasts e clonagem de voz com alta qualidade" },
  { nome: "PlayHT", preco: "Freemium / A partir de $29/mês", gratis: "Sim", tipo: "Geração de voz em escala com API", melhorPara: "Equipes de conteúdo que precisam gerar áudio em volume com API robusta" },
  { nome: "Murf", preco: "Freemium / A partir de $19/mês", gratis: "Sim", tipo: "Studio de voz com editor integrado", melhorPara: "Criadores de cursos, apresentações e vídeos corporativos com edição visual" },
  { nome: "Speechify", preco: "Freemium / Premium $139/ano", gratis: "Sim", tipo: "Leitura em voz alta de qualquer texto", melhorPara: "Profissionais que consomem conteúdo longo em áudio durante deslocamentos" },
  { nome: "Replica Studios", preco: "A partir de $24/mês", gratis: "Trial", tipo: "Vozes para jogos e personagens", melhorPara: "Desenvolvedores de jogos e produtores de conteúdo interativo com personagens de IA" },
  { nome: "LOVO AI", preco: "Freemium / A partir de $24/mês", gratis: "Sim", tipo: "Gerador de voz e vídeo integrado", melhorPara: "Criadores que querem gerar voz e vídeo explicativo em uma única plataforma" },
  { nome: "WellSaid Labs", preco: "A partir de $49/mês", gratis: "Trial", tipo: "Vozes corporativas de alta fidelidade", melhorPara: "Empresas que precisam de vozes consistentes para treinamentos e produtos" },
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
