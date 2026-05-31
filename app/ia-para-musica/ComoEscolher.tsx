const perfis = [
  { perfil: "Criador de conteúdo que precisa de música rápida", recomendacao: "Suno AI", motivo: "Gera músicas completas com letra, instrumentação e voz em segundos a partir de um prompt de texto — ideal para criar jingles, trilhas e músicas temáticas sem conhecimento musical." },
  { perfil: "Produtor de vídeo e youtuber", recomendacao: "Soundraw ou Beatoven.ai", motivo: "Geram trilhas royalty-free prontas para uso comercial no YouTube e outras plataformas, sem risco de remoção por copyright, com duração e mood ajustáveis." },
  { perfil: "Compositor de trilhas cinematográficas", recomendacao: "AIVA", motivo: "Especializado em composição orquestral e cinematográfica, com suporte a MIDI e exportação de partituras para personalização pelo compositor humano." },
  { perfil: "Desenvolvedor de app ou jogo", recomendacao: "Mubert", motivo: "API para integrar música generativa em tempo real no aplicativo, criando trilhas infinitas e adaptativas que se ajustam ao estado do usuário sem loops repetitivos." },
  { perfil: "Músico e beatmaker profissional", recomendacao: "Udio ou Loudly", motivo: "Udio oferece mais controle criativo sobre a geração musical para músicos que querem usar IA como ferramenta de composição. Loudly foca em loops e stems para produção eletrônica." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada ferramenta atende uma necessidade musical diferente. Veja qual se encaixa melhor no seu projeto:</p>
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
