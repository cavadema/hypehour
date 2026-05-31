const tips = [
  { numero: "01", titulo: "Defina critérios objetivos antes de usar IA na triagem", descricao: "Antes de ativar qualquer automação de triagem, documente os requisitos obrigatórios e desejáveis. IA sem critérios claros pode criar vieses ou descartar candidatos qualificados." },
  { numero: "02", titulo: "Mantenha o toque humano nas etapas decisivas", descricao: "Use IA para triagem inicial e análise de dados, mas garanta que entrevistas finais e decisões de contratação envolvam pessoas. Candidatos valorizam interações humanas autênticas." },
  { numero: "03", titulo: "Monitore vieses nos algoritmos", descricao: "Ferramentas de IA para recrutamento podem perpetuar vieses históricos presentes nos dados de treinamento. Audite periodicamente os resultados por gênero, etnia e formação para garantir diversidade." },
  { numero: "04", titulo: "Use dados de desempenho para alimentar o recrutamento", descricao: "Integre os dados de performance dos colaboradores atuais com as ferramentas de recrutamento. Isso permite identificar quais perfis de candidato têm mais sucesso na empresa." },
  { numero: "05", titulo: "Automatize o onboarding, não só o recrutamento", descricao: "A IA no RH vai além da contratação. Use ferramentas para criar trilhas de onboarding personalizadas, enviar lembretes automáticos e medir o engajamento de novos colaboradores nos primeiros 90 dias." },
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
