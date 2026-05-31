export default function ComparativoFerramentas() {
  const ferramentas = [
    { nome: "Design.com", melhorPara: "Branding completo + logo", preco: "Gratuito / Pago", destaques: "Kit de identidade visual, materiais de marketing integrados" },
    { nome: "Smashing Logo", melhorPara: "Logo rápido e acessível", preco: "Gratuito / Pago", destaques: "Geração em segundos, alta variedade de estilos" },
    { nome: "Canva Logos", melhorPara: "Edição fácil e integração", preco: "Gratuito / Pro", destaques: "Templates ricos, edição completa, uso em outros materiais" },
    { nome: "Adobe Express", melhorPara: "Qualidade Adobe + IA", preco: "Gratuito / Pago", destaques: "Integração com ecossistema Adobe, resultados profissionais" },
    { nome: "TurboLogo", melhorPara: "Velocidade e preço baixo", preco: "Pago", destaques: "SVG incluso, centenas de estilos, entrega rápida" },
    { nome: "Renderforest", melhorPara: "Logo + vídeo + site", preco: "Gratuito / Pago", destaques: "Plataforma all-in-one para identidade visual completa" },
    { nome: "SoLogo AI", melhorPara: "Imagem para logotipo vetorial", preco: "Consulte", destaques: "Conversão de imagem em logo vetorial com IA" },
    { nome: "Venngage", melhorPara: "Logo simples e rápido", preco: "Gratuito / Pago", destaques: "Interface limpa, integrado ao Venngage para infográficos" },
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
