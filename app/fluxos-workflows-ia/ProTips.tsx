const tips = [
  { numero: "01", titulo: "Mapeie o processo manualmente antes de automatizar", descricao: "Documente cada etapa do fluxo em papel antes de construir a automação. Automações criadas sem planejamento tendem a ter falhas silenciosas e lógica difícil de manter." },
  { numero: "02", titulo: "Use webhooks para automações em tempo real", descricao: "Polling (verificação periódica) consome execuções e gera atraso. Sempre que possível, configure webhooks para disparar automações instantaneamente quando um evento acontece." },
  { numero: "03", titulo: "Adicione tratamento de erros em cada etapa crítica", descricao: "Configure notificações de falha por email ou Slack para cada etapa que movimenta dados importantes. Automações quebradas em silêncio podem causar perda de leads e dados por dias sem ninguém perceber." },
  { numero: "04", titulo: "Documente cada fluxo com um comentário de propósito", descricao: "Adicione uma descrição clara no início de cada workflow: qual problema resolve, quem usa e com que frequência. Fluxos sem documentação ficam impossíveis de manter após alguns meses." },
  { numero: "05", titulo: "Teste com dados reais antes de ativar em produção", descricao: "Use dados de clientes e registros reais nos testes — dados falsos frequentemente não reproduzem os casos extremos que quebram a automação em produção." },
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
