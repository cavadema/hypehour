export default function ProTips() {
  const tips = [
    {
      titulo: "Comece pelo cálculo nutricional automatizado",
      texto: "Se você ainda faz cálculos de VET, TMB e distribuição de macros manualmente, esse é o primeiro ponto a automatizar. Qualquer software moderno faz isso em segundos — liberando tempo para o que só você pode fazer.",
    },
    {
      titulo: "Use a IA como ponto de partida, não como resultado final",
      texto: "Planos gerados por IA são um excelente rascunho inicial. Revise sempre as sugestões antes de entregar ao paciente — o julgamento clínico do nutricionista é insubstituível para adequar o plano à realidade de cada pessoa.",
    },
    {
      titulo: "Integre o software ao WhatsApp ou e-mail",
      texto: "Ferramentas que permitem enviar o plano alimentar diretamente pelo WhatsApp ou e-mail reduzem etapas e tornam a experiência do paciente mais fluida. Verifique se a plataforma escolhida oferece esse recurso.",
    },
    {
      titulo: "Padronize modelos de anamnese e evolução",
      texto: "Crie templates de anamnese e evolução dentro do software que você utiliza. Com modelos prontos, cada consulta começa mais organizada e o registro clínico fica mais consistente ao longo do tempo.",
    },
  ];

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Dicas para usar IA na nutrição</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {tips.map((tip, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">{tip.titulo}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{tip.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
