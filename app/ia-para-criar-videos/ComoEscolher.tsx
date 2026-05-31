const perfis = [
  {
    perfil: "Iniciante / criador de conteúdo",
    recomendacao: "Fliki ou VEED",
    motivo: "Interface simples, versão gratuita generosa e resultado rápido sem curva de aprendizado.",
  },
  {
    perfil: "Criador que quer vídeos virais",
    recomendacao: "KlingAI ou PicLumen",
    motivo: "Geração de vídeos realistas e cinematográficos a partir de texto ou imagem, com ótima qualidade visual.",
  },
  {
    perfil: "Empresa com necessidade de escala",
    recomendacao: "HeyGen ou Tavus",
    motivo: "Avatares personalizados, suporte a múltiplos idiomas e geração em volume para vendas e onboarding.",
  },
  {
    perfil: "Uso comercial com segurança jurídica",
    recomendacao: "Adobe Firefly Video",
    motivo: "Treinado apenas com conteúdo licenciado, ideal para campanhas publicitárias e materiais corporativos.",
  },
  {
    perfil: "Quem precisa de alta qualidade técnica",
    recomendacao: "Sora ou Google Veo 3.1",
    motivo: "Modelos frontier com maior fidelidade visual, resolução 1080p+ e controle criativo avançado.",
  },
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
