const tips = [
  { numero: "01", titulo: "Comece com dados limpos", descricao: "Antes de usar qualquer IA para análise, remova linhas duplicadas, corrija formatações e padronize os campos. A qualidade do insight depende diretamente da qualidade dos dados." },
  { numero: "02", titulo: "Use linguagem natural para explorar", descricao: "Ferramentas como Julius AI e Findly permitem perguntas como 'qual produto vendeu mais em março?' — sem SQL. Explore essa capacidade antes de tentar configurações avançadas." },
  { numero: "03", titulo: "Exporte para onde você já trabalha", descricao: "Prefira ferramentas que exportam para Excel, Google Sheets ou formatos que sua equipe já usa. Isso evita retrabalho e facilita a adoção." },
  { numero: "04", titulo: "Valide os números gerados pela IA", descricao: "Sempre confira os resultados da IA com uma amostra manual antes de apresentar em relatórios ou tomar decisões. IAs de análise podem errar em cálculos com dados ambíguos." },
  { numero: "05", titulo: "Combine análise com visualização", descricao: "Use uma ferramenta para analisar e outra para visualizar. Exporte os dados tratados para ChartGen.ai ou Google Looker Studio para criar apresentações impactantes." },
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
