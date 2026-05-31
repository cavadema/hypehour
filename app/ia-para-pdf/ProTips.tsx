const tips = [
  { numero: "01", titulo: "Faça perguntas específicas em vez de pedir um resumo geral", descricao: "Em vez de 'resuma este contrato', pergunte 'qual é o prazo de vigência, as multas por rescisão e as obrigações da parte contratada?'. Perguntas específicas geram respostas muito mais úteis." },
  { numero: "02", titulo: "Divida PDFs muito grandes em partes para melhor análise", descricao: "Documentos com centenas de páginas podem exceder os limites de contexto. Divida em seções temáticas e analise separadamente, depois consolide as informações extraídas." },
  { numero: "03", titulo: "Peça citações de página para validar as respostas", descricao: "Sempre solicite 'indique a página onde você encontrou essa informação'. Isso permite verificar a precisão da resposta diretamente no documento original e evita confiar em informações incorretas." },
  { numero: "04", titulo: "Use para comparar múltiplas versões de um documento", descricao: "Ferramentas como Humata permitem comparar duas versões de um contrato ou relatório para identificar o que mudou — uma tarefa que levaria horas manualmente e que a IA faz em segundos." },
  { numero: "05", titulo: "Cuidado com informações confidenciais em plataformas SaaS", descricao: "Antes de fazer upload de contratos, relatórios financeiros ou documentos com dados sensíveis, verifique a política de privacidade da plataforma e se há opções de processamento sem retenção de dados." },
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
