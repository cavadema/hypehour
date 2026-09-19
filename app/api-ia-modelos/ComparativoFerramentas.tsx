const ferramentas = [
  { nome: "OpenAI API", preco: "Pay-as-you-go", gratis: "Crédito inicial", tipo: "API de modelos GPT e embeddings", melhorPara: "Desenvolvedores que precisam de modelos maduros com SDK robusto" },
  { nome: "Anthropic API", preco: "Pay-as-you-go", gratis: "Crédito inicial", tipo: "API Claude com contexto longo", melhorPara: "Aplicações que exigem raciocínio avançado e janelas de contexto longas" },
  { nome: "Google AI / Gemini API", preco: "Freemium", gratis: "Sim", tipo: "API multimodal do Google", melhorPara: "Integração com ecossistema Google e tarefas com imagens e vídeo" },
  { nome: "Groq", preco: "Freemium", gratis: "Sim", tipo: "Inferência ultra-rápida com LPU", melhorPara: "Aplicações que precisam de latência mínima em respostas de texto" },
  { nome: "Mistral AI", preco: "Freemium", gratis: "Sim", tipo: "Modelos europeus de alta eficiência", melhorPara: "Uso em conformidade com GDPR e custo por token baixo" },
  { nome: "Together AI", preco: "Pay-as-you-go", gratis: "Crédito inicial", tipo: "Inferência de modelos open-source", melhorPara: "Experimentar e produzir com modelos open-source a baixo custo" },
  { nome: "Replicate", preco: "Pay-as-you-go", gratis: "Crédito inicial", tipo: "Marketplace de modelos de ML", melhorPara: "Acesso a centenas de modelos de imagem, áudio e texto em uma API" },
];

export default function ComparativoFerramentas() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Comparativo das principais ferramentas</h2>
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 font-semibold">Ferramenta</th>
              <th className="px-4 py-3 font-semibold">Preço</th>
              <th className="px-4 py-3 font-semibold">Grátis?</th>
              <th className="px-4 py-3 font-semibold hidden md:table-cell">Tipo</th>
              <th className="px-4 py-3 font-semibold hidden lg:table-cell">Melhor para</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {ferramentas.map((f, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 font-medium text-gray-900">{f.nome}</td>
                <td className="px-4 py-3 text-gray-600">{f.preco}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${f.gratis === "Sim" ? "bg-green-100 text-green-700" : f.gratis === "Não" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}>{f.gratis}</span>
                </td>
                <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{f.tipo}</td>
                <td className="px-4 py-3 text-gray-600 hidden lg:table-cell">{f.melhorPara}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mt-2">* Preços aproximados. Consulte o site oficial de cada ferramenta para valores atualizados.</p>
    </div>
  );
}
