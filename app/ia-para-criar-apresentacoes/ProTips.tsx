const tips = [
  { numero: "01", titulo: "Forneça o outline antes de pedir a apresentação completa", descricao: "Em vez de pedir diretamente uma apresentação, comece com um outline: tema, objetivo, público e lista de tópicos. Isso reduz drasticamente o número de revisões e melhora a estrutura final." },
  { numero: "02", titulo: "Revise e personalize cada slide antes de apresentar", descricao: "Apresentações geradas por IA tendem a ser genéricas. Substitua exemplos genéricos por dados da sua empresa, adicione anedotas pessoais e ajuste o tom para o público específico." },
  { numero: "03", titulo: "Limite a 5-7 slides por apresentação de 10 minutos", descricao: "IA tende a gerar mais slides do que o necessário. Edite com critério: cada slide deve corresponder a um ponto central, não a um sub-tópico. Menos slides, mais impacto por slide." },
  { numero: "04", titulo: "Exporte e salve em PDF antes da apresentação", descricao: "Ferramentas SaaS podem ter instabilidade de conexão no momento da apresentação. Sempre exporte em PDF como backup e tenha uma cópia offline disponível no computador." },
  { numero: "05", titulo: "Use a IA também para ensaiar — peça feedback do discurso", descricao: "Depois de montar os slides, cole o roteiro no Claude ou ChatGPT e peça para avaliar clareza, fluxo e pontos de melhoria. Ensaiar o discurso é tão importante quanto o visual dos slides." },
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
