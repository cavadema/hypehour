const tips = [
  { numero: "01", titulo: "Sempre verifique as fontes primárias antes de usar em peças jurídicas", descricao: "IA jurídica pode citar casos incorretos ou com números de processo errados (alucinações). Sempre confirme cada citação diretamente na fonte oficial antes de incluir em peças, pareceres ou petições." },
  { numero: "02", titulo: "Use IA para primeiro rascunho, não para entrega final", descricao: "A revisão do advogado responsável é juridicamente obrigatória e estrategicamente essencial. Use IA para acelerar o rascunho inicial e invista o tempo economizado na revisão e estratégia de cada caso." },
  { numero: "03", titulo: "Proteja dados confidenciais do cliente ao usar IA em nuvem", descricao: "Não insira dados identificáveis de clientes em ferramentas de IA genéricas sem verificar o contrato de processamento de dados. Ferramentas jurídicas especializadas geralmente têm acordos de confidencialidade adequados." },
  { numero: "04", titulo: "Use IA para triagem de documentos em due diligence", descricao: "Em M&A e due diligence com grandes volumes de documentos, use IA para a triagem inicial — classificar documentos por relevância e identificar os que merecem revisão humana prioritária." },
  { numero: "05", titulo: "Mantenha um registro de como a IA foi usada em cada caso", descricao: "Com as regulamentações sobre IA e ética na advocacia em evolução, documente quais ferramentas foram usadas e em quais etapas de cada caso. Isso facilita auditorias e demonstra responsabilidade profissional." },
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
