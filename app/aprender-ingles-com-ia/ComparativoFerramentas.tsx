const ferramentas = [
  { nome: "Duolingo", preco: "Freemium", gratis: "Sim", tipo: "Gamificado / vocabulário", melhorPara: "Iniciantes que querem criar hábito diário" },
  { nome: "ELSA Speak", preco: "A partir de $6,99/mês", gratis: "Sim (limitado)", tipo: "Pronúncia e fala", melhorPara: "Quem precisa melhorar sotaque e pronúncia" },
  { nome: "TalkPal", preco: "Freemium", gratis: "Sim (limitado)", tipo: "Conversação com IA", melhorPara: "Prática de conversação sem constrangimento" },
  { nome: "Speak", preco: "A partir de $8,33/mês", gratis: "Não", tipo: "Conversação e feedback", melhorPara: "Usuários sérios focados em fluência oral" },
  { nome: "Falou", preco: "Freemium", gratis: "Sim", tipo: "Simulações do cotidiano", melhorPara: "Praticar situações reais como entrevistas e viagens" },
  { nome: "Praktika AI", preco: "Freemium", gratis: "Sim (limitado)", tipo: "Avatares conversacionais", melhorPara: "Quem aprende melhor em formato de role-play" },
  { nome: "JumpSpeak", preco: "Freemium", gratis: "Sim", tipo: "Conversação e fluência", melhorPara: "Feedback instantâneo sobre fluência e gramática" },
  { nome: "Lingvist", preco: "Freemium", gratis: "Sim", tipo: "Vocabulário adaptativo", melhorPara: "Expandir vocabulário de forma eficiente" },
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
