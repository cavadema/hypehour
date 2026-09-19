export default function ComparativoFerramentas() {
  const ferramentas = [
    {
      nome: "DietSystem",
      melhorPara: "Planos alimentares completos e banco TACO",
      preco: "Pago",
      destaques: "Banco de alimentos TACO, cálculo de macros e micros, relatórios clínicos",
    },
    {
      nome: "Nutria by GreenTable",
      melhorPara: "Geração de cardápios com IA",
      preco: "Consulte",
      destaques: "IA para sugestões personalizadas, substituições automáticas, perfil do paciente",
    },
    {
      nome: "IPPO",
      melhorPara: "Gestão completa de consultório",
      preco: "Pago",
      destaques: "Prontuário eletrônico, agendamento online, evolução de pacientes",
    },
    {
      nome: "Dietitian.com.br",
      melhorPara: "Cálculo nutricional com IA generativa",
      preco: "Consulte",
      destaques: "IA para geração de planos, foco no mercado brasileiro, interface simples",
    },
  ];

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Comparativo das Ferramentas</h2>
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm bg-white">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left px-4 py-3 font-semibold text-gray-700">Ferramenta</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-700">Melhor para</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-700">Preço</th>
              <th className="text-left px-4 py-3 font-semibold text-gray-700">Destaques</th>
            </tr>
          </thead>
          <tbody>
            {ferramentas.map((f, i) => (
              <tr key={f.nome} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-3 font-medium text-gray-900">{f.nome}</td>
                <td className="px-4 py-3 text-gray-600">{f.melhorPara}</td>
                <td className="px-4 py-3 text-gray-600">{f.preco}</td>
                <td className="px-4 py-3 text-gray-600">{f.destaques}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
