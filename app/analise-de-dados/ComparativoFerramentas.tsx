const ferramentas = [
  { nome: "Julius AI", preco: "A partir de $20/mês", gratis: "Sim (limitado)", tipo: "Análise em linguagem natural", melhorPara: "Analistas sem conhecimento de código" },
  { nome: "Excelmatic", preco: "Freemium", gratis: "Sim", tipo: "IA para Excel e Sheets", melhorPara: "Automatizar fórmulas e análises em planilhas" },
  { nome: "ChartGen.ai", preco: "Freemium", gratis: "Sim", tipo: "Geração de gráficos", melhorPara: "Transformar dados em visualizações rapidamente" },
  { nome: "Alteryx", preco: "Pago (sob consulta)", gratis: "Trial", tipo: "Análise avançada / ETL", melhorPara: "Empresas com grandes volumes de dados" },
  { nome: "Findly", preco: "Freemium", gratis: "Sim", tipo: "Perguntas em linguagem natural", melhorPara: "Explorar dados sem escrever SQL" },
  { nome: "Livedocs", preco: "Freemium", gratis: "Sim", tipo: "Dashboard e insights de CSV", melhorPara: "Criar dashboards rápidos a partir de arquivos" },
  { nome: "FormulaBot", preco: "Freemium", gratis: "Sim", tipo: "Geração de fórmulas", melhorPara: "Criar fórmulas complexas no Excel e Sheets" },
  { nome: "Basedash", preco: "A partir de $50/mês", gratis: "Trial", tipo: "Interface de banco de dados", melhorPara: "Visualizar e editar dados de bancos diretamente" },
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
