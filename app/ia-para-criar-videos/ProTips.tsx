const tips = [
  {
    numero: "01",
    titulo: "Escreva prompts em inglês",
    descricao: "A maioria dos modelos de geração de vídeo foi treinada predominantemente em inglês. Prompts em inglês costumam gerar resultados mais precisos e com maior qualidade visual.",
  },
  {
    numero: "02",
    titulo: "Comece com clipes curtos",
    descricao: "Teste seus prompts em clipes de 3 a 5 segundos antes de gerar vídeos longos. Você valida o estilo e economiza créditos ou tempo de processamento.",
  },
  {
    numero: "03",
    titulo: "Combine ferramentas",
    descricao: "Use uma ferramenta para gerar o vídeo bruto (como KlingAI ou Sora) e outra para editar, adicionar legendas e ajustar o áudio (como VEED ou Kapwing). O resultado final é muito superior.",
  },
  {
    numero: "04",
    titulo: "Salve os prompts que funcionaram",
    descricao: "Quando encontrar um prompt que gerou um resultado excelente, salve-o. Pequenas variações nele tendem a manter a consistência de estilo entre os seus vídeos.",
  },
  {
    numero: "05",
    titulo: "Atenção ao uso comercial",
    descricao: "Nem todos os vídeos gerados por IA podem ser usados em campanhas pagas. Verifique os termos de cada plataforma antes de publicar conteúdo gerado para fins comerciais.",
  },
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
