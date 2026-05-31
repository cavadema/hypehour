const perfis = [
  { perfil: "Desenvolvedor Unity em fase de prototipação", recomendacao: "Unity Muse", motivo: "Gera texturas, comportamentos de personagens e assets diretamente no editor Unity, acelerando a fase de prototipação sem precisar sair do ambiente de desenvolvimento." },
  { perfil: "Game designer na fase de conceito", recomendacao: "Ludo.ai", motivo: "Analisa dados de centenas de jogos para identificar tendências de mecânicas, sugerir combinações de gêneros e validar a originalidade de conceitos antes de iniciar o desenvolvimento." },
  { perfil: "Estúdio indie que precisa de assets 2D", recomendacao: "Scenario", motivo: "Treine um modelo com o estilo visual do seu jogo e gere sprites, tilesets, itens e personagens com aparência consistente sem contratar um artista full-time." },
  { perfil: "Jogo com NPCs e narrativa dinâmica", recomendacao: "Inworld AI", motivo: "Plataforma específica para NPCs com IA: cada personagem tem personalidade, memória de interações passadas e capacidade de improvisar diálogos dentro dos limites definidos pelo designer." },
  { perfil: "Desenvolvedor indie sem orçamento para áudio", recomendacao: "Suno AI + ElevenLabs", motivo: "Combine Suno para trilha sonora e músicas de ambientação com ElevenLabs para voz dos personagens — uma solução completa de áudio sem compositor ou dublador." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada ferramenta atende uma necessidade específica no desenvolvimento de jogos. Veja qual se encaixa melhor:</p>
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
