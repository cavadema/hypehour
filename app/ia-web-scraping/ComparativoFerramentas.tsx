const ferramentas = [
  { nome: "Firecrawl", preco: "Freemium / A partir de $16/mês", gratis: "Sim", tipo: "Web crawling para LLMs com Markdown limpo", melhorPara: "Desenvolvedores que querem extrair conteúdo de sites em formato limpo para alimentar modelos de IA" },
  { nome: "Apify", preco: "Freemium / A partir de $49/mês", gratis: "Sim", tipo: "Plataforma de web scraping e automação", melhorPara: "Times que precisam de scrapers prontos ou customizados com agendamento e armazenamento" },
  { nome: "Bright Data", preco: "Pay-as-you-go / A partir de $500/mês", gratis: "Trial", tipo: "Infraestrutura de proxy e scraping enterprise", melhorPara: "Empresas com necessidade de dados em escala e contornar bloqueios geográficos com IPs residenciais" },
  { nome: "Diffbot", preco: "A partir de $299/mês", gratis: "Trial", tipo: "Extração estruturada de dados com IA", melhorPara: "Times que precisam de dados estruturados extraídos automaticamente de qualquer site sem regras manuais" },
  { nome: "Phantombuster", preco: "Freemium / A partir de $56/mês", gratis: "Sim", tipo: "Automação de LinkedIn e redes sociais", melhorPara: "Times de marketing e vendas que extraem leads e dados do LinkedIn e outras redes sociais" },
  { nome: "Octoparse", preco: "Freemium / Starter $89/mês", gratis: "Sim", tipo: "Scraper visual no-code", melhorPara: "Usuários não-técnicos que querem extrair dados de sites com interface visual sem escrever código" },
  { nome: "ScrapingBee", preco: "A partir de $49/mês", gratis: "Trial", tipo: "API de scraping com gerenciamento de headless browser", melhorPara: "Desenvolvedores que precisam de uma API simples para scraping de sites com JavaScript e proteções" },
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
