const perfis = [
  { perfil: "Precisa de apresentação em minutos", recomendacao: "Gamma", motivo: "Gera uma apresentação completa a partir de um prompt ou texto colado, com design responsivo e exportação para PowerPoint e PDF em menos de dois minutos." },
  { perfil: "Profissional sem habilidade em design", recomendacao: "Beautiful.ai", motivo: "Cada slide se ajusta automaticamente ao conteúdo inserido, mantendo alinhamento, hierarquia e proporções sem precisar ajustar manualmente nenhum elemento." },
  { perfil: "Pitch para investidores ou clientes", recomendacao: "Tome", motivo: "Cria narrativas visuais com imagens geradas por IA, gráficos e texto integrados, pensado especificamente para apresentações de impacto e storytelling de negócios." },
  { perfil: "Usuário do Google Workspace", recomendacao: "MagicSlides ou SlidesAI", motivo: "Add-ons nativos do Google Slides que geram apresentações sem sair do ambiente de trabalho do Google, com sincronização automática no Drive." },
  { perfil: "Equipe que precisa de identidade visual consistente", recomendacao: "Presentations.AI", motivo: "Permite importar a identidade visual da empresa — cores, fontes e logo — para que todas as apresentações geradas pela equipe sigam o mesmo padrão automaticamente." },
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
