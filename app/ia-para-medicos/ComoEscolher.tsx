const perfis = [
  { perfil: "Médico clínico com alto volume de documentação", recomendacao: "Nabla Copilot ou Suki AI", motivo: "Geração automática de notas clínicas durante ou após a consulta por voz, reduzindo o tempo de documentação de 30 minutos para poucos minutos por paciente." },
  { perfil: "Radiologista com alto volume de exames", recomendacao: "Aidoc", motivo: "IA que analisa imagens de TC, RM e raios-X em segundo plano, priorizando os casos mais críticos na fila de trabalho e reduzindo o tempo de detecção de achados urgentes." },
  { perfil: "Médico residente ou estudante de medicina", recomendacao: "Glass Health", motivo: "Ferramenta de suporte à decisão que gera diferenciais diagnósticos, sugere exames e condutas baseadas em evidências — útil para aprendizado e para casos complexos na prática clínica." },
  { perfil: "Hospital com sistema Meditech", recomendacao: "Meditech Expanse AI", motivo: "IA integrada nativamente ao prontuário Meditech para sugestões de pedidos, resumos de internação e automação de documentação sem necessidade de sistema adicional." },
  { perfil: "Clínica que precisa de documentação completa", recomendacao: "Ambience Healthcare", motivo: "Solução end-to-end que escuta a consulta, gera o prontuário estruturado, identifica diagnósticos e procedimentos para faturamento e sincroniza com o EHR da clínica." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada ferramenta atende uma necessidade clínica diferente. Veja qual se encaixa melhor no seu contexto:</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {perfis.map((p, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{p.perfil}</div>
            <div className="text-base font-bold text-gray-900 mb-2">{p.recomendacao}</div>
            <div className="text-sm text-gray-600">{p.motivo}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
