const tips = [
  { numero: "01", titulo: "Automatize o processo mais repetitivo primeiro", descricao: "Identifique a tarefa que sua equipe repete mais vezes por semana e comece por ela. O ganho imediato de tempo cria adesão e justifica o investimento na ferramenta." },
  { numero: "02", titulo: "Documente antes de automatizar", descricao: "Mapeie o processo manualmente no papel antes de configurar o fluxo. Automações bem documentadas são mais fáceis de manter e depurar quando algo dá errado." },
  { numero: "03", titulo: "Use webhooks para integrações em tempo real", descricao: "Prefira webhooks a verificações periódicas (polling). Eles disparam a automação instantaneamente quando o evento ocorre, economizando recursos e reduzindo atrasos." },
  { numero: "04", titulo: "Sempre configure tratamento de erros", descricao: "Todo fluxo pode falhar. Configure notificações por email ou Slack quando um passo der erro. Sem alertas, automações quebradas ficam silenciosas por dias." },
  { numero: "05", titulo: "Comece pequeno e itere", descricao: "Lance o fluxo com o mínimo de passos necessários. Adicione complexidade gradualmente após validar que o básico funciona. Fluxos simples são mais fáceis de manter e depurar." },
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
