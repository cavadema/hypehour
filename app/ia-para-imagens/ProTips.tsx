const tips = [
  { numero: "01", titulo: "Seja específico sobre estilo, iluminação e composição no prompt", descricao: "Prompts vagos geram resultados medianos. Especifique: estilo artístico (fotorrealismo, aquarela, isométrico), iluminação (luz natural, estúdio, néon), ângulo e proporção da imagem." },
  { numero: "02", titulo: "Use referências de artistas e estilos para guiar a geração", descricao: "Incluir referências como 'estilo cinematográfico de Roger Deakins' ou 'ilustração flat design minimalista' orienta a IA com muito mais precisão que descrições genéricas de qualidade." },
  { numero: "03", titulo: "Gere múltiplas variações antes de refinar uma", descricao: "A primeira geração raramente é a final. Gere 4 a 8 variações com o mesmo prompt para identificar qual direção tem mais potencial antes de investir tempo em refinamentos." },
  { numero: "04", titulo: "Verifique os direitos de uso comercial antes de publicar", descricao: "As políticas variam: Adobe Firefly oferece garantia de uso comercial, enquanto Midjourney requer plano Pro para uso comercial sem restrições. Leia os termos antes de publicar em campanhas." },
  { numero: "05", titulo: "Use upscaling para aumentar a resolução sem perda de qualidade", descricao: "Ferramentas como Upscayl e as opções de upscaling nativas permitem aumentar imagens geradas de 1024px para 4K ou mais, mantendo nitidez para impressão e uso profissional." },
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
