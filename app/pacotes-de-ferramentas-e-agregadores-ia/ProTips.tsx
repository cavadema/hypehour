const tips = [
  { numero: "01", titulo: "Use agregadores de modelos para escolher o LLM certo para cada tarefa", descricao: "Nem sempre o modelo mais caro é o melhor para cada tarefa. Plataformas como Poe e OpenRouter permitem testar rapidamente qual modelo responde melhor para seu caso de uso específico antes de integrar." },
  { numero: "02", titulo: "Acompanhe diretórios de IA para não perder ferramentas relevantes", descricao: "O ecossistema de ferramentas de IA cresce com dezenas de lançamentos por semana. Siga There's An AI For That ou Futurepedia para descobrir ferramentas novas relevantes para o seu setor antes dos concorrentes." },
  { numero: "03", titulo: "Consolide billing em uma API unificada para controle de custos", descricao: "Usar OpenRouter ou AWS Bedrock como camada de abstração sobre múltiplos provedores permite ver o custo total de IA em um único painel e trocar de provedor quando os preços mudam sem refatorar o código." },
  { numero: "04", titulo: "Explore modelos open-source no Hugging Face antes de pagar por APIs", descricao: "Muitos modelos open-source disponíveis no Hugging Face têm qualidade comparável aos modelos comerciais para casos de uso específicos. Teste antes de se comprometer com uma API paga de longo prazo." },
  { numero: "05", titulo: "Documente quais ferramentas e modelos estão sendo usados em produção", descricao: "Com a rápida evolução do ecossistema, é fácil perder o controle de quais ferramentas de IA estão integradas em quais sistemas. Mantenha um inventário atualizado para facilitar auditorias e migrações futuras." },
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
