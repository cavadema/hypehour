const tips = [
  { numero: "01", titulo: "Integre a ferramenta com seu banco para conciliação automática", descricao: "A maioria das ferramentas de contabilidade com IA pode se conectar diretamente ao seu banco e importar transações. Isso elimina lançamentos manuais e reduz erros de digitação." },
  { numero: "02", titulo: "Revise as categorias atribuídas pela IA mensalmente", descricao: "A IA categoriza despesas com base em padrões, mas pode errar em lançamentos incomuns. Uma revisão mensal evita surpresas na declaração anual e mantém o plano de contas organizado." },
  { numero: "03", titulo: "Use a detecção de anomalias para prevenir fraudes", descricao: "Ferramentas como Vic.ai e Dext identificam padrões suspeitos como valores duplicados, fornecedores novos com valores altos e aprovações fora do horário normal." },
  { numero: "04", titulo: "Automatize lembretes de vencimento para fornecedores", descricao: "Configure alertas automáticos para contas a pagar próximas do vencimento. Multas por atraso e juros são custos evitáveis que somam valores significativos ao longo do ano." },
  { numero: "05", titulo: "Exporte relatórios em formato adequado para o contador", descricao: "Antes de contratar uma ferramenta, confirme que ela exporta nos formatos que seu contador ou o fisco exige — SPED, XML de NF-e, planilhas estruturadas — para evitar retrabalho." },
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
