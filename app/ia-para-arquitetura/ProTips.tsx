const tips = [
  { numero: "01", titulo: "Use IA para variações rápidas, não para o projeto final", descricao: "Ferramentas de IA são excelentes para explorar conceitos e apresentar opções ao cliente, mas o projeto executivo ainda precisa da revisão técnica completa do arquiteto responsável." },
  { numero: "02", titulo: "Combine renders de IA com software BIM", descricao: "Gere a visualização inicial com IA para aprovação do cliente, depois transfira para Revit ou ArchiCAD para o desenvolvimento técnico. Os dois fluxos se complementam." },
  { numero: "03", titulo: "Use prompts com referências arquitetônicas específicas", descricao: "Em vez de 'casa moderna', especifique: 'residência minimalista com influência de Tadao Ando, concreto aparente, jardim zen, luz natural lateral'. Quanto mais preciso o prompt, mais útil o resultado." },
  { numero: "04", titulo: "Valide proposta com normas locais antes de apresentar", descricao: "IA não conhece o código de obras do seu município, recuos obrigatórios ou zonas de preservação. Sempre valide os conceitos gerados com as normas locais antes de apresentar ao cliente." },
  { numero: "05", titulo: "Documente o processo criativo com IA para o portfólio", descricao: "Registrar como a IA contribuiu para o processo criativo — iterações, variações exploradas — pode se tornar um diferencial competitivo e um material rico para apresentações de metodologia." },
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
