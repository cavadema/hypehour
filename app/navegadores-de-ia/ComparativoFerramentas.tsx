const ferramentas = [
  { nome: "Arc Browser", preco: "Gratuito", gratis: "Sim", tipo: "Navegador moderno com IA integrada", melhorPara: "Usuários que querem um navegador repensado com IA para resumir páginas e organizar abas" },
  { nome: "Brave Leo", preco: "Freemium / Premium $14,99/mês", gratis: "Sim", tipo: "Assistente de IA integrado ao Brave", melhorPara: "Usuários preocupados com privacidade que querem IA sem enviar dados para servidores externos" },
  { nome: "Microsoft Edge Copilot", preco: "Gratuito (integrado ao Edge)", gratis: "Sim", tipo: "Copilot integrado ao Edge com barra lateral", melhorPara: "Usuários do Windows que querem IA disponível em qualquer página com um clique na barra lateral" },
  { nome: "Opera One AI", preco: "Gratuito", gratis: "Sim", tipo: "Navegador com múltiplos modelos de IA", melhorPara: "Usuários que querem acessar ChatGPT, Claude e outros modelos integrados ao navegador" },
  { nome: "Perplexity for Chrome", preco: "Extensão gratuita / Perplexity Pro $20/mês", gratis: "Sim", tipo: "Busca com IA como extensão do Chrome", melhorPara: "Usuários do Chrome que querem pesquisa com IA sem trocar de navegador" },
  { nome: "Dia Browser", preco: "Beta gratuito", gratis: "Sim", tipo: "Navegador nativo com IA agentica", melhorPara: "Early adopters que querem um navegador onde a IA pode executar ações no browser de forma autônoma" },
  { nome: "SigmaOS", preco: "Freemium / Pro $8/mês", gratis: "Sim", tipo: "Navegador para trabalho com IA integrada", melhorPara: "Profissionais que querem um espaço de trabalho web organizado com IA para resumos e pesquisa" },
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
