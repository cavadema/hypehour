const ferramentas = [
  { nome: "n8n", preco: "Open-source / Cloud a partir de €20/mês", gratis: "Self-hosted", tipo: "Automação visual de workflows", melhorPara: "Equipes técnicas que querem controle total com self-hosting" },
  { nome: "Make (Integromat)", preco: "Freemium / A partir de $9/mês", gratis: "Sim", tipo: "Automação visual com lógica complexa", melhorPara: "Cenários de automação com múltiplas condições e transformação de dados" },
  { nome: "Zapier", preco: "Freemium / A partir de $19,99/mês", gratis: "Sim", tipo: "Automação no-code para não-técnicos", melhorPara: "Profissionais de marketing e vendas que querem conectar apps sem código" },
  { nome: "Activepieces", preco: "Open-source / Cloud freemium", gratis: "Sim", tipo: "Alternativa open-source ao Zapier", melhorPara: "Equipes que querem Zapier-like com opção de self-hosting e sem vendor lock-in" },
  { nome: "Pabbly Connect", preco: "A partir de $19/mês (unlimited tasks)", gratis: "Não", tipo: "Automação com tarefas ilimitadas", melhorPara: "Empresas com alto volume de automações que pagam caro no Zapier" },
  { nome: "Pipedream", preco: "Freemium / A partir de $29/mês", gratis: "Sim", tipo: "Automação orientada a código para devs", melhorPara: "Desenvolvedores que querem escrever código Node.js/Python em cada etapa" },
  { nome: "Tray.io", preco: "Pago (sob consulta)", gratis: "Demo", tipo: "iPaaS enterprise para integrações complexas", melhorPara: "Grandes empresas com integrações B2B e volume de dados crítico" },
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
