const perfis = [
  { perfil: "Freelancer ou criador solo", recomendacao: "Rytr ou Copy.ai", motivo: "Planos gratuitos generosos para produção de conteúdo variado sem custo fixo mensal elevado." },
  { perfil: "Time de marketing com produção intensa", recomendacao: "Jasper", motivo: "Plataforma completa com templates, workflows de aprovação e integrações com CMSs para produção em escala." },
  { perfil: "Foco em SEO e tráfego orgânico", recomendacao: "Contentor ou Frase.io", motivo: "Análise de SERP, briefing baseado em concorrentes e otimização de conteúdo para palavras-chave específicas." },
  { perfil: "Empresa que precisa de brand voice consistente", recomendacao: "Writer.com", motivo: "Treine a IA com o guia de estilo da sua marca para garantir que todo conteúdo gerado siga o mesmo tom e voz." },
  { perfil: "Escritor ou roteirista criativo", recomendacao: "Sudowrite", motivo: "Especializado em ficção, com ferramentas para desenvolver personagens, plotar narrativas e superar bloqueios criativos." },
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
