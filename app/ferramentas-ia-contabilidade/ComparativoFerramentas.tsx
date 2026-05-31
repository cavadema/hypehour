const ferramentas = [
  { nome: "ContaAzul", preco: "A partir de R$69/mês", gratis: "Trial", tipo: "ERP contábil para PMEs", melhorPara: "MEIs e pequenas empresas brasileiras com NF-e e boletos" },
  { nome: "QuickBooks AI", preco: "A partir de $15/mês", gratis: "Trial", tipo: "Contabilidade automatizada", melhorPara: "Empresas com operações internacionais e controle financeiro integrado" },
  { nome: "Dext", preco: "Pago (sob consulta)", gratis: "Demo", tipo: "Captura e categorização de notas fiscais", melhorPara: "Contadores que processam alto volume de documentos fiscais" },
  { nome: "Vic.ai", preco: "Pago (sob consulta)", gratis: "Demo", tipo: "Automação de contas a pagar com IA", melhorPara: "Grandes empresas com processos de AP complexos e aprovações múltiplas" },
  { nome: "Tipalti", preco: "Pago (sob consulta)", gratis: "Demo", tipo: "Pagamentos globais automatizados", melhorPara: "Empresas com fornecedores internacionais e folha de pagamento global" },
  { nome: "Sage Intacct", preco: "Pago (sob consulta)", gratis: "Demo", tipo: "ERP financeiro com analytics avançados", melhorPara: "Médias empresas que precisam de relatórios financeiros detalhados" },
  { nome: "Botkeeper", preco: "A partir de $69/mês", gratis: "Trial", tipo: "Bookkeeping automatizado por IA", melhorPara: "Escritórios contábeis que querem escalar serviços sem ampliar equipe" },
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
