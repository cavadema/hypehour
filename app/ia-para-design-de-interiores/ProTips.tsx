const tips = [
  { numero: "01", titulo: "Use fotos bem iluminadas e sem obstruções para melhores resultados", descricao: "A qualidade da imagem de entrada determina diretamente a qualidade do resultado. Fotografe com luz natural, sem objetos bloqueando as paredes e do ângulo mais amplo possível do cômodo." },
  { numero: "02", titulo: "Especifique o estilo com referências além do nome", descricao: "Em vez de apenas 'moderno', descreva: 'moderno com madeira clara, paleta neutra, plantas e iluminação embutida'. Referências específicas geram resultados muito mais próximos do desejado." },
  { numero: "03", titulo: "Gere pelo menos 5 variações antes de decidir", descricao: "A primeira geração raramente é a melhor. Gere múltiplas variações ajustando parâmetros e prompts — a variação mais interessante muitas vezes surge nas tentativas mais tarde." },
  { numero: "04", titulo: "Considere a iluminação natural ao avaliar o resultado", descricao: "A IA não sabe a direção do sol no seu imóvel. Ao avaliar paletas de cores e materiais gerados, lembre-se de como a luz natural do espaço real vai interagir com os elementos sugeridos." },
  { numero: "05", titulo: "Salve referências visuais para facilitar o orçamento", descricao: "Use os resultados da IA como referência visual ao conversar com fornecedores — compartilhe as imagens com marceneiros, pintores e lojas de móveis para alinhar expectativas e obter orçamentos mais precisos." },
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
