const ferramentas = [
  { nome: "GPTZero", preco: "Freemium", gratis: "Sim", tipo: "Detecção de texto com IA", melhorPara: "Professores e instituições educacionais" },
  { nome: "ZeroGPT", preco: "Gratuito", gratis: "Sim", tipo: "Detecção rápida de IA", melhorPara: "Verificações rápidas e casuais de texto" },
  { nome: "Copyleaks", preco: "A partir de $9,99/mês", gratis: "Sim (limitado)", tipo: "Detecção + plágio", melhorPara: "Verificar plágio e conteúdo gerado por IA simultaneamente" },
  { nome: "WinstonAI", preco: "Freemium", gratis: "Sim (limitado)", tipo: "Detecção acadêmica", melhorPara: "Instituições de ensino com grande volume de textos" },
  { nome: "Undetectable AI", preco: "A partir de $9,99/mês", gratis: "Não", tipo: "Humanização + detecção", melhorPara: "Entender como ferramentas de humanização funcionam" },
  { nome: "QuillBot Detector", preco: "Freemium", gratis: "Sim", tipo: "Detecção integrada ao QuillBot", melhorPara: "Usuários já da plataforma QuillBot" },
  { nome: "SynthID", preco: "Gratuito (Google)", gratis: "Sim", tipo: "Marca d'água digital", melhorPara: "Detectar imagens e conteúdo gerado pelo Google" },
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
