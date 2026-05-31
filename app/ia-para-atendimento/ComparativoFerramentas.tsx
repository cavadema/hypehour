const ferramentas = [
  { nome: "Intercom", preco: "A partir de $39/mês", gratis: "Trial", tipo: "Plataforma omnichannel com IA", melhorPara: "Empresas de SaaS com suporte em múltiplos canais e base de conhecimento integrada" },
  { nome: "Zendesk AI", preco: "A partir de $55/mês/agente", gratis: "Trial", tipo: "CRM de suporte enterprise com IA", melhorPara: "Grandes empresas com times de suporte dedicados e fluxos de escalação complexos" },
  { nome: "Tidio", preco: "Freemium / A partir de $29/mês", gratis: "Sim", tipo: "Live chat e chatbot para e-commerce", melhorPara: "Lojas virtuais e PMEs que querem atendimento automatizado no site" },
  { nome: "Freshdesk", preco: "Freemium / A partir de $15/mês/agente", gratis: "Sim", tipo: "Help desk omnichannel acessível", melhorPara: "Equipes de suporte que precisam de ticketing, base de conhecimento e automação" },
  { nome: "Chatbase", preco: "Freemium / A partir de $19/mês", gratis: "Sim", tipo: "Chatbot treinado nos seus documentos", melhorPara: "Empresas que querem chatbot respondendo com base no próprio conteúdo e FAQs" },
  { nome: "Crisp", preco: "Freemium / A partir de €25/mês", gratis: "Sim", tipo: "Chat ao vivo com automações", melhorPara: "Startups e PMEs que precisam de chat, email e redes sociais em uma caixa unificada" },
  { nome: "Helpshift", preco: "Pago (sob consulta)", gratis: "Demo", tipo: "Suporte nativo para apps mobile", melhorPara: "Empresas com produto mobile que precisam de suporte in-app sem sair do aplicativo" },
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
