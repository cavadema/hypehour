const ferramentas = [
  { nome: "MagicSchool AI", preco: "Freemium / Pro $14,99/mês", gratis: "Sim", tipo: "Suite de IA para professores", melhorPara: "Professores do ensino básico e médio que querem gerar planos de aula, rubricas e avaliações" },
  { nome: "Curipod", preco: "Freemium / Teacher $8/mês", gratis: "Sim", tipo: "Slides interativos e quizzes com IA", melhorPara: "Professores que querem aulas interativas com enquetes, perguntas e quizzes gerados por IA" },
  { nome: "Diffit", preco: "Freemium / Pro $12,99/mês", gratis: "Sim", tipo: "Diferenciação de textos por nível de leitura", melhorPara: "Professores que precisam adaptar textos para diferentes níveis de proficiência na mesma turma" },
  { nome: "Eduaide.ai", preco: "Freemium / Pro $9,99/mês", gratis: "Sim", tipo: "Gerador de recursos pedagógicos", melhorPara: "Professores que querem gerar exercícios, avaliações e atividades alinhadas com a BNCC" },
  { nome: "Brisk Teaching", preco: "Freemium / Premium $10/mês", gratis: "Sim", tipo: "Extensão Chrome para feedback instantâneo", melhorPara: "Professores que dão feedback em documentos Google e querem sugestões automáticas de comentários" },
  { nome: "SchoolAI", preco: "Freemium / Teacher $20/mês", gratis: "Sim", tipo: "Assistente de IA para sala de aula", melhorPara: "Professores que querem criar espaços de IA seguros e monitorados para os alunos interagirem" },
  { nome: "Conker AI", preco: "Freemium / Pro $10/mês", gratis: "Sim", tipo: "Gerador de quizzes e avaliações", melhorPara: "Professores que precisam criar questionários formativos rápidos com diferentes tipos de questão" },
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
