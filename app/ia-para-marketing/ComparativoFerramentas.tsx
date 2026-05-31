const ferramentas = [
  { nome: "Jasper", preco: "A partir de $49/mês", gratis: "Trial", tipo: "Geração de conteúdo com Brand Voice", melhorPara: "Times de marketing que produzem alto volume de copies com identidade de marca consistente" },
  { nome: "Copy.ai", preco: "Freemium / Pro $36/mês", gratis: "Sim", tipo: "Geração de copy com workflows automatizados", melhorPara: "Equipes que querem automatizar fluxos completos de criação de conteúdo de marketing" },
  { nome: "Semrush AI", preco: "A partir de $119,95/mês", gratis: "Trial", tipo: "SEO e pesquisa de mercado com IA", melhorPara: "Times de marketing digital que precisam de SEO, análise de concorrentes e planejamento de conteúdo" },
  { nome: "Canva AI (Magic Studio)", preco: "Freemium / Pro R$54,99/mês", gratis: "Sim", tipo: "Design de peças de marketing com IA", melhorPara: "Times que precisam criar peças visuais para redes sociais e campanhas rapidamente" },
  { nome: "HubSpot AI", preco: "Incluído nos planos HubSpot", gratis: "Trial", tipo: "IA integrada ao CRM e automação de marketing", melhorPara: "Empresas que usam HubSpot e querem IA em emails, landing pages e workflows de nurturing" },
  { nome: "Surfer SEO", preco: "A partir de $89/mês", gratis: "Trial", tipo: "Otimização de conteúdo para SEO", melhorPara: "Redatores e SEOs que querem otimizar artigos em tempo real baseado nos top resultados do Google" },
  { nome: "AdCreative.ai", preco: "A partir de $21/mês", gratis: "Trial", tipo: "Geração de criativos para anúncios", melhorPara: "Times de mídia paga que precisam gerar variações de criativos para A/B test em escala" },
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
