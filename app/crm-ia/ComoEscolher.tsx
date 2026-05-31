const perfis = [
  { perfil: "Pequena empresa ou startup", recomendacao: "HubSpot AI CRM ou Attio", motivo: "Planos gratuitos robustos com funcionalidades suficientes para começar sem custo, com fácil escalabilidade." },
  { perfil: "Time de vendas focado em pipeline", recomendacao: "Pipedrive", motivo: "Interface visual de arrastar e soltar para gerenciar oportunidades, com automações de follow-up e relatórios de desempenho." },
  { perfil: "Negócio que vende pelo WhatsApp", recomendacao: "Kommo", motivo: "Integração nativa com WhatsApp Business, Instagram e outros canais de mensagens para centralizar todas as conversas." },
  { perfil: "Empresa com time de marketing integrado", recomendacao: "HubSpot AI CRM", motivo: "Ecossistema completo que une CRM, automação de marketing, email e suporte em uma única plataforma." },
  { perfil: "Time de prospecção outbound", recomendacao: "SmartWriter ou Rings AI", motivo: "Geração automática de mensagens personalizadas e insights preditivos para priorizar os leads com maior probabilidade de conversão." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada ferramenta tem um perfil de uso ideal. Veja qual se encaixa melhor na sua necessidade:</p>
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
