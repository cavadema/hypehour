const tips = [
  { numero: "01", titulo: "Registre todas as interações no CRM", descricao: "O valor de um CRM com IA cresce com o volume de dados. Registre emails, ligações e reuniões consistentemente — os insights preditivos só funcionam bem com histórico rico." },
  { numero: "02", titulo: "Configure alertas de follow-up automáticos", descricao: "Use as automações do CRM para criar lembretes quando um lead fica inativo por mais de X dias. Follow-ups consistentes são o fator que mais impacta taxas de conversão." },
  { numero: "03", titulo: "Segmente seus contatos desde o início", descricao: "Defina tags e categorias para clientes, leads e prospects antes de importar sua base. Segmentação correta permite personalizações e campanhas muito mais eficazes." },
  { numero: "04", titulo: "Use a IA para priorizar, não para decidir", descricao: "Os scores de propensão gerados pela IA são guias, não verdades absolutas. Use-os para priorizar onde focar energia, mas mantenha o julgamento humano na relação com o cliente." },
  { numero: "05", titulo: "Integre com seu email e calendário", descricao: "Conecte o CRM ao Gmail ou Outlook para registrar emails automaticamente. Integrar o calendário sincroniza reuniões e elimina o trabalho manual de atualizar o pipeline." },
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
