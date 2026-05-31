const tips = [
  { numero: "01", titulo: "Informe os participantes antes de ativar a gravação", descricao: "Em muitos países, gravar uma reunião sem consentimento é ilegal. Sempre comunique no início da call que ela será transcrita e permita que participantes se retirem se não concordarem." },
  { numero: "02", titulo: "Revise os itens de ação gerados pela IA antes de distribuir", descricao: "IA pode misturar responsáveis ou capturar intenções fora de contexto. Sempre revise os itens de ação antes de enviá-los à equipe para evitar mal-entendidos e tarefas atribuídas incorretamente." },
  { numero: "03", titulo: "Use a transcrição para criar FAQs e documentação interna", descricao: "As transcrições de reuniões de alinhamento técnico, demos de produto e calls de onboarding são fontes ricas de conteúdo. Processe-as com IA para extrair FAQs e criar documentação interna." },
  { numero: "04", titulo: "Configure um template padrão de ata para consistência", descricao: "Defina um formato fixo: data, participantes, decisões, próximos passos e prazo. Ferramentas como Sembly e Fireflies permitem templates personalizados que seguem esse padrão automaticamente." },
  { numero: "05", titulo: "Archive transcrições em uma base de conhecimento pesquisável", descricao: "Transcrições acumuladas ao longo do tempo formam uma memória institucional valiosa. Conecte a ferramenta ao Notion, Confluence ou outro wiki para que qualquer membro da equipe possa buscar decisões passadas." },
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
