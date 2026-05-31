const tips = [
  { numero: "01", titulo: "Use IA para personalizar outreach em escala, não para spammar", descricao: "IA permite personalizar 100 emails com contexto específico de cada prospect — cargo, empresa, notícia recente — mantendo relevância que emails genéricos em massa nunca terão." },
  { numero: "02", titulo: "Analise calls perdidas para identificar objeções recorrentes", descricao: "Ferramentas como Gong revelam padrões em deals perdidos que o olho humano não percebe: qual objeção aparece mais nos deals perdidos, em que momento da call o interesse cai." },
  { numero: "03", titulo: "Mantenha o CRM atualizado para a IA de forecast funcionar", descricao: "IA de previsão de receita é tão boa quanto os dados no CRM. Implemente higiene de dados rigorosa: stage, próxima ação, data esperada de fechamento e valor do deal sempre atualizados." },
  { numero: "04", titulo: "Use IA para criar battlecards de concorrentes em minutos", descricao: "Peça ao Claude ou ChatGPT para comparar seu produto com o do concorrente com base no site e materiais públicos. Battlecards atualizados ajudam o time a responder objeções de comparação com confiança." },
  { numero: "05", titulo: "Combine dados de intenção com prospecção para abordagem oportuna", descricao: "Ferramentas como Apollo mostram signals de intenção: quais empresas estão pesquisando por soluções como a sua. Aborde um lead no momento em que ele está ativamente avaliando é muito mais eficiente." },
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
