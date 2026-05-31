const perfis = [
  { perfil: "Podcaster ou criador de áudio e vídeo", recomendacao: "Descript ou Riverside.fm", motivo: "Descript permite editar o episódio deletando palavras na transcrição. Riverside garante gravação remota em alta qualidade com transcrição automática integrada." },
  { perfil: "Profissional com muitas reuniões", recomendacao: "Otter.ai", motivo: "Integração nativa com Zoom, Teams e Meet para transcrever reuniões em tempo real, gerar resumos e identificar itens de ação automaticamente ao final de cada call." },
  { perfil: "Desenvolvedor que precisa de API de transcrição", recomendacao: "Whisper API ou AssemblyAI", motivo: "Whisper oferece a melhor precisão com custo baixo. AssemblyAI adiciona diarização de speakers, análise de sentimento, sumário e detecção de tópicos via API para aplicações mais sofisticadas." },
  { perfil: "Usuário casual que precisa transcrever arquivos", recomendacao: "Turboscribe ou Speechma", motivo: "Interfaces simples para fazer upload de qualquer arquivo de áudio ou vídeo e receber a transcrição em minutos, sem configuração técnica, com planos gratuitos funcionais." },
  { perfil: "Empresa com privacidade de dados crítica", recomendacao: "Whisper self-hosted", motivo: "Whisper rodando localmente não envia áudio para nenhum servidor externo, garantindo privacidade total para reuniões sigilosas, conteúdo jurídico e dados sensíveis." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada ferramenta atende um perfil diferente. Veja qual se encaixa melhor na sua necessidade de transcrição:</p>
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
