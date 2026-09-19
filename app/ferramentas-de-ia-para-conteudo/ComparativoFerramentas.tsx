const ferramentas = [
  { nome: "Jasper", preco: "A partir de $39/mês", gratis: "Trial 7 dias", tipo: "Geração de conteúdo completo", melhorPara: "Times de marketing com produção em escala" },
  { nome: "Copy.ai", preco: "Freemium", gratis: "Sim", tipo: "Textos curtos e copies", melhorPara: "Copies de anúncios, emails e redes sociais" },
  { nome: "Rytr", preco: "Freemium", gratis: "Sim", tipo: "Geração de textos variados", melhorPara: "Freelancers e criadores com orçamento limitado" },
  { nome: "Writer.com", preco: "A partir de $18/usuário/mês", gratis: "Trial", tipo: "Conteúdo corporativo com brand voice", melhorPara: "Empresas que precisam manter consistência de tom e voz" },
  { nome: "Contentor", preco: "Freemium", gratis: "Sim", tipo: "SEO + geração de conteúdo", melhorPara: "Criadores focados em ranquear no Google" },
  { nome: "Frase.io", preco: "A partir de $14,99/mês", gratis: "Trial", tipo: "Briefing e otimização SEO", melhorPara: "Redatores que querem otimizar conteúdo para busca orgânica" },
  { nome: "Neuroflash", preco: "Freemium", gratis: "Sim", tipo: "Geração de textos em múltiplos idiomas", melhorPara: "Conteúdo em português, alemão e outros idiomas europeus" },
  { nome: "Sudowrite", preco: "A partir de $19/mês", gratis: "Trial", tipo: "Ficção e escrita criativa", melhorPara: "Escritores de ficção, roteiros e narrativas criativas" },
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
