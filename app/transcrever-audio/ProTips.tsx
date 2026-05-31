const tips = [
  { numero: "01", titulo: "Use áudio de boa qualidade para transcrições mais precisas", descricao: "A qualidade da gravação impacta diretamente a precisão da transcrição. Grave com microfone dedicado, minimize ruídos de fundo e evite sobreposição de vozes para reduzir erros e economizar tempo de correção." },
  { numero: "02", titulo: "Revise sempre as transcrições antes de usar em documentos oficiais", descricao: "Mesmo as melhores ferramentas erram em nomes próprios, termos técnicos, siglas e sotaques regionais. Sempre revise, especialmente em transcrições que serão usadas em atas oficiais ou documentos legais." },
  { numero: "03", titulo: "Use diarização para identificar quem disse o quê em reuniões", descricao: "Ferramentas como AssemblyAI e Otter.ai identificam automaticamente diferentes speakers na transcrição. Isso torna a ata muito mais útil, especialmente em reuniões com mais de dois participantes." },
  { numero: "04", titulo: "Forneça glossário de termos técnicos para maior precisão", descricao: "Algumas ferramentas permitem customizar o vocabulário com nomes de produtos, siglas e termos técnicos da empresa. Isso reduz drasticamente os erros em transcrições de reuniões técnicas ou de nicho." },
  { numero: "05", titulo: "Automatize o fluxo de transcrição com webhooks e integrações", descricao: "Configure webhooks para enviar automaticamente a transcrição finalizada para o Notion, Slack ou email ao terminar. Eliminar o passo manual de copiar e colar economiza tempo e garante que cada reunião seja documentada." },
];

export default function ProTips() {
  return (
    <div className="mt-10 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Dicas para melhores resultados</h2>
      <div className="space-y-4">
        {tips.map((tip) => (
          <div key={tip.numero} className="flex gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
            <span className="text-2xl font-black text-gray-200 leading-none select-none">{tip.numero}</span>
            <div>
              <div className="font-semibold text-gray-900 mb-1">{tip.titulo}</div>
              <div className="text-sm text-gray-600">{tip.descricao}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
