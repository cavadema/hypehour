const tips = [
  { numero: "01", titulo: "Crie um Brand Voice document antes de usar IA para copy", descricao: "Documente o tom, palavras que a marca usa e evita, exemplos de textos aprovados e persona do cliente. Forneça esse documento como contexto em cada geração para resultados muito mais precisos." },
  { numero: "02", titulo: "Sempre revise e adapte conteúdo de IA antes de publicar", descricao: "Conteúdo gerado por IA pode soar genérico e ser penalizado pelo Google por thin content. Adicione dados proprietários, cases reais e perspectiva única da empresa para se diferenciar." },
  { numero: "03", titulo: "Use IA para A/B test em escala no anúncios pagos", descricao: "Gere 10 a 20 variações de headline e copy para anúncios em minutos. Isso permite testes que levavam semanas agora em dias, acelerando drasticamente o aprendizado sobre o que converte." },
  { numero: "04", titulo: "Combine dados de performance para alimentar os prompts", descricao: "Use os dados do Google Analytics e das plataformas de anúncios para identificar o conteúdo que mais converte. Compartilhe esses insights nos prompts para gerar mais do que funciona." },
  { numero: "05", titulo: "Mantenha um humano responsável pela estratégia e curadoria", descricao: "IA executa, mas não estrategiza. Mantenha o posicionamento de marca, a definição de ICP, os objetivos de campanha e a curadoria final como responsabilidades humanas que a IA serve, não substitui." },
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
