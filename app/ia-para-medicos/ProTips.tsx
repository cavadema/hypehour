const tips = [
  { numero: "01", titulo: "Mantenha sempre a revisão médica como etapa obrigatória", descricao: "Nenhuma IA médica deve ser usada sem revisão de um profissional de saúde habilitado. O médico é o responsável legal pela conduta e pelo conteúdo do prontuário, independente de qual ferramenta o auxiliou." },
  { numero: "02", titulo: "Verifique conformidade com LGPD e HIPAA antes de contratar", descricao: "Dados médicos são sensíveis por lei. Confirme que a ferramenta oferece conformidade com a LGPD (Brasil) ou HIPAA (EUA), com contratos de processamento de dados adequados (DPA)." },
  { numero: "03", titulo: "Use IA para pesquisa de evidências, não como substituto da clínica", descricao: "Ferramentas como Glass Health agilizam a busca em literatura médica, mas o julgamento clínico deve sempre considerar o contexto individual do paciente, que a IA não conhece completamente." },
  { numero: "04", titulo: "Integre com o prontuário eletrônico para eficiência real", descricao: "IA médica que não sincroniza com o EHR gera retrabalho de copiar e colar. Priorize soluções com integração via HL7 FHIR com o sistema de prontuário que sua instituição já usa." },
  { numero: "05", titulo: "Avalie o impacto na relação médico-paciente antes de adotar", descricao: "Ferramentas de documentação por voz podem melhorar o contato visual e a atenção ao paciente durante a consulta. Avalie o impacto percebido pelo paciente como parte do critério de adoção." },
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
