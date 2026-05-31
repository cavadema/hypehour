const perfis = [
  { perfil: "E-commerce ou PME com site próprio", recomendacao: "Tidio", motivo: "Rápido de instalar, com plano gratuito funcional, chatbot pré-configurado e integração com Shopify, WooCommerce e outras plataformas de e-commerce." },
  { perfil: "Empresa de SaaS com suporte técnico", recomendacao: "Intercom", motivo: "Combina chat ao vivo, campanhas proativas, base de conhecimento e tours interativos em uma plataforma pensada para o ciclo de vida do cliente em SaaS." },
  { perfil: "Grande empresa com time de suporte", recomendacao: "Zendesk AI", motivo: "Sistema de ticketing robusto com SLAs, relatórios avançados, automação de roteamento e IA generativa para sugestão de respostas aos agentes." },
  { perfil: "Empresa que quer chatbot baseado no próprio conteúdo", recomendacao: "Chatbase", motivo: "Treine um chatbot com seus PDFs, artigos e FAQs em minutos, sem precisar de programação, e incorpore no site com um snippet de código." },
  { perfil: "Produto mobile com suporte in-app", recomendacao: "Helpshift", motivo: "SDK nativo para iOS e Android que permite chat de suporte dentro do aplicativo, sem redirecionar o usuário para email ou outro canal externo." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada plataforma atende um perfil diferente. Veja qual se encaixa melhor na sua operação de atendimento:</p>
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
