const perfis = [
  { perfil: "Quer abrir uma loja do zero", recomendacao: "Genstore ou Native Commerce", motivo: "Os dois geram uma loja editável a partir de uma descrição do negócio, o que reduz o tempo até o primeiro produto no ar. O Native Commerce informa que é possível começar gratuitamente." },
  { perfil: "Já vende na Nuvemshop e quer atender mais rápido", recomendacao: "Nuvem Chat", motivo: "Assistente nativo da Nuvemshop que atende no WhatsApp e no Instagram, recomenda produtos e conduz ao checkout, passando para um humano quando necessário." },
  { perfil: "Precisa entender vendas, estoque e clientes", recomendacao: "Prax", motivo: "Painel brasileiro que reúne vendas, marketing, estoque e clientes, com segmentação RFM, acompanhamento de LTV e CRM no WhatsApp." },
  { perfil: "Tem catálogo grande e busca interna fraca", recomendacao: "Luigi's Box", motivo: "Suíte de busca, recomendações e assistente de compras pensada para ecommerce, útil quando os clientes não encontram o que procuram na loja." },
  { perfil: "Opera em escala e quer cruzar dados e automatizar ações", recomendacao: "Toca ou Salesforce Commerce AI", motivo: "Toca integra loja, marketplaces, anúncios e ERP e pede aprovação humana antes de agir; Salesforce Commerce AI traz recursos de IA para merchandising, promoções e descrições de produto." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada ferramenta tem um perfil de uso ideal. Cada ferramenta atende uma etapa diferente da operação. Veja qual se encaixa melhor no estágio da sua loja:</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {perfis.map((p, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{p.perfil}</div>
            <div className="text-base font-bold text-gray-900 mb-2">{p.recomendacao}</div>
            <div className="text-sm text-gray-600">{p.motivo}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
