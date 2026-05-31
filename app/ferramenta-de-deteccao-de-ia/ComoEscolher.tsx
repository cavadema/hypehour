const perfis = [
  { perfil: "Professor ou instituição de ensino", recomendacao: "GPTZero ou WinstonAI", motivo: "Ferramentas especializadas no contexto acadêmico, com maior precisão em redações e trabalhos de estudantes." },
  { perfil: "Editor ou revisor de conteúdo", recomendacao: "Copyleaks", motivo: "Combina detecção de IA com verificação de plágio em uma única plataforma, ideal para fluxos editoriais profissionais." },
  { perfil: "Quem precisa de verificações rápidas e gratuitas", recomendacao: "ZeroGPT ou QuillBot Detector", motivo: "Ferramentas gratuitas para checar textos pontuais sem necessidade de assinatura." },
  { perfil: "Empresa com alto volume de conteúdo", recomendacao: "Copyleaks ou WinstonAI", motivo: "Suporte a API e processamento em lote, com relatórios detalhados e integração a sistemas de gestão de conteúdo." },
  { perfil: "Quem quer detectar imagens geradas por IA", recomendacao: "SynthID", motivo: "Tecnologia do Google para identificar imagens e conteúdo gerado por modelos como Imagen, com marca d'água digital." },
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
