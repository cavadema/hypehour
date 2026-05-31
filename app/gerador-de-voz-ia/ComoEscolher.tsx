const perfis = [
  { perfil: "Narrador profissional ou podcaster", recomendacao: "ElevenLabs", motivo: "A qualidade de síntese mais próxima da voz humana disponível, com clonagem de voz em minutos e suporte a múltiplos idiomas incluindo português brasileiro." },
  { perfil: "Criador de cursos e vídeos corporativos", recomendacao: "Murf", motivo: "Studio integrado com editor de áudio, sincronização com slides e biblioteca de vozes profissionais pensada para e-learning e conteúdo corporativo." },
  { perfil: "Equipe gerando conteúdo em escala", recomendacao: "PlayHT", motivo: "API robusta com limites generosos, ideal para automatizar a geração de áudio em volume para artigos, produtos e campanhas de conteúdo." },
  { perfil: "Desenvolvedor de jogos ou animações", recomendacao: "Replica Studios", motivo: "Biblioteca de vozes com emoção e personagens variados, com licença clara para uso comercial em jogos, filmes e conteúdo interativo." },
  { perfil: "Empresa com padrão de voz corporativo", recomendacao: "WellSaid Labs", motivo: "Foco em consistência e fidelidade para treinamentos corporativos, produtos de software e IVR com vozes que mantêm o tom da marca." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher o gerador de voz certo</h2>
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
