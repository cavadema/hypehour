const perfis = [
  { perfil: "Proprietário que vai reformar ou decorar", recomendacao: "RoomGPT", motivo: "Tire uma foto do seu cômodo atual e veja instantaneamente como ele ficaria em estilos como escandinavo, minimalista ou industrial — sem investir um centavo antes de decidir." },
  { perfil: "Corretor de imóveis com imóvel vazio", recomendacao: "REimagineHome", motivo: "Staging virtual que transforma fotos de ambientes vazios em cômodos mobiliados atraentes para anúncios, aumentando o interesse de compradores sem contratar mobiliário físico." },
  { perfil: "Quem quer planejar reforma completa", recomendacao: "Planner 5D AI", motivo: "Planta baixa em 2D com geração de visão 3D, catálogo de móveis e sugestões de layout automáticas — ideal para planejar cada detalhe antes de contratar mão de obra." },
  { perfil: "Designer de interiores profissional", recomendacao: "Spacely AI", motivo: "Gera imagens fotorrealistas de alta qualidade para propostas de projeto, com controle de estilo, paleta de cores e elementos, economizando horas de trabalho em cada proposta." },
  { perfil: "Cliente que quer ver móveis reais disponíveis", recomendacao: "Collov", motivo: "Integração com catálogos de lojas reais permite visualizar o ambiente com produtos disponíveis para compra, facilitando a decisão e o orçamento de forma realista." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada ferramenta atende um perfil de uso diferente. Veja qual se encaixa melhor na sua necessidade:</p>
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
