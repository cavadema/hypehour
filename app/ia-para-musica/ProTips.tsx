const tips = [
  { numero: "01", titulo: "Especifique gênero, BPM, mood e instrumentos no prompt", descricao: "Quanto mais específico o prompt musical, melhor o resultado. Experimente: 'bossa nova relaxante, 90 BPM, violão e piano, sem letra, para podcast de bem-estar' em vez de apenas 'música brasileira'." },
  { numero: "02", titulo: "Gere múltiplas versões para encontrar a trilha certa", descricao: "A primeira geração raramente é a ideal. Gere de 5 a 10 variações com ajustes progressivos no prompt e selecione a que melhor se encaixa no mood do conteúdo antes de editar." },
  { numero: "03", titulo: "Verifique a licença de uso comercial de cada plataforma", descricao: "Políticas diferem muito: Suno Pro permite uso comercial, enquanto o plano gratuito exige atribuição. Soundraw garante royalty-free para todos os planos. Leia os termos antes de usar em campanhas pagas." },
  { numero: "04", titulo: "Use stems separados para maior controle na edição", descricao: "Ferramentas que exportam stems (bateria, baixo, melodia separados) dão muito mais flexibilidade na edição. Isso permite ajustar o volume de cada elemento e sincronizar com exatidão aos cortes de vídeo." },
  { numero: "05", titulo: "Combine música gerada por IA com efeitos sonoros reais", descricao: "A combinação de trilha gerada por IA com efeitos sonoros gravados ou de bibliotecas de qualidade (Freesound, Artlist) cria uma identidade sonora mais rica e profissional do que apenas IA." },
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
