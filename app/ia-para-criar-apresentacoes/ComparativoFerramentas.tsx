const ferramentas = [
  { nome: "Gamma", preco: "Freemium / Pro $10/mês", gratis: "Sim", tipo: "Criação de apresentações por IA", melhorPara: "Criar apresentações completas a partir de um prompt em menos de um minuto" },
  { nome: "Beautiful.ai", preco: "A partir de $12/mês", gratis: "Trial", tipo: "Slides com design automático", melhorPara: "Profissionais que precisam de slides bem diagramados sem conhecimento de design" },
  { nome: "Tome", preco: "Freemium / Pro $16/mês", gratis: "Sim", tipo: "Narrativa visual com IA generativa", melhorPara: "Apresentações de pitch e storytelling com elementos visuais gerados por IA" },
  { nome: "MagicSlides", preco: "Freemium / A partir de $7/mês", gratis: "Sim", tipo: "Gerador de slides para Google Slides", melhorPara: "Usuários do Google Workspace que querem criar slides diretamente no ambiente Google" },
  { nome: "Canva AI (Magic Design)", preco: "Freemium / Pro R$54,99/mês", gratis: "Sim", tipo: "Design com IA integrado ao Canva", melhorPara: "Criadores que querem controle total do design com sugestões automáticas de layout" },
  { nome: "Presentations.AI", preco: "Freemium / A partir de $12/mês", gratis: "Sim", tipo: "Slides gerados por IA com temas profissionais", melhorPara: "Equipes corporativas que precisam de apresentações padronizadas com a identidade visual da empresa" },
  { nome: "SlidesAI", preco: "Freemium / A partir de $10/mês", gratis: "Sim", tipo: "Add-on de IA para Google Slides", melhorPara: "Professores e treinadores que convertem textos longos em slides automaticamente" },
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
