const perfis = [
  { perfil: "Não é designer e precisa de wireframes", recomendacao: "Visily", motivo: "Foi pensada para quem não é designer: gera wireframes a partir de texto, converte diagramas em telas e permite comentar em tempo real." },
  { perfil: "Equipe que trabalha no Figma", recomendacao: "UX Pilot ou Banani", motivo: "Os dois exportam para o Figma. O UX Pilot também importa do Figma e oferece exportação de código; o Banani exporta para Figma ou HTML e CSS." },
  { perfil: "Quer prototipar a partir de texto ou screenshot", recomendacao: "Uizard", motivo: "O Autodesigner gera protótipos a partir de texto e os scanners de screenshot e wireframe transformam imagens e esboços em telas editáveis." },
  { perfil: "Precisa lançar um site de marketing", recomendacao: "Relume", motivo: "Gera sitemap, wireframes e site a partir de um briefing, com publicação hospedada e exportação para Figma, Webflow ou React." },
  { perfil: "Quer levar o design para o front-end", recomendacao: "Locofy", motivo: "Voltada à conversão de designs em código de front-end com IA, reduzindo o trabalho de implementação." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada ferramenta tem um perfil de uso ideal. Cada ferramenta cobre uma etapa do processo. Veja qual se encaixa melhor no seu fluxo de trabalho:</p>
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
