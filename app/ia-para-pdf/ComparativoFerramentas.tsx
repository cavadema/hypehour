const ferramentas = [
  { nome: "ChatPDF", preco: "Freemium / Plus $5/mês", gratis: "Sim", tipo: "Chat com PDF para perguntas e resumos", melhorPara: "Estudantes e pesquisadores que querem fazer perguntas diretamente sobre documentos PDF" },
  { nome: "PDF.ai", preco: "Freemium / Pro $12/mês", gratis: "Sim", tipo: "Análise e extração de informações de PDFs", melhorPara: "Profissionais que precisam extrair dados específicos de contratos, relatórios e manuais" },
  { nome: "Adobe Acrobat AI", preco: "Incluído no Acrobat Pro ($22,99/mês)", gratis: "Trial", tipo: "IA integrada ao Acrobat para resumo e análise", melhorPara: "Usuários do Adobe Acrobat que querem IA sem sair do ambiente PDF profissional" },
  { nome: "Humata AI", preco: "Freemium / Pro $14,99/mês", gratis: "Sim", tipo: "Análise de múltiplos PDFs simultaneamente", melhorPara: "Pesquisadores que precisam analisar e comparar informações em vários documentos ao mesmo tempo" },
  { nome: "Elicit", preco: "Freemium / Plus $10/mês", gratis: "Sim", tipo: "Pesquisa científica com extração de PDFs", melhorPara: "Acadêmicos e cientistas que precisam extrair dados de artigos científicos em escala" },
  { nome: "Unriddle", preco: "Freemium / Pro $16/mês", gratis: "Sim", tipo: "Leitura e anotação inteligente de papers", melhorPara: "Estudantes de pós-graduação que fazem revisão de literatura e querem anotações com IA integrada" },
  { nome: "Docalysis", preco: "Freemium / A partir de $9/mês", gratis: "Sim", tipo: "Chat com documentos para empresas", melhorPara: "Equipes empresariais que precisam responder perguntas sobre bases de documentos internos" },
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
