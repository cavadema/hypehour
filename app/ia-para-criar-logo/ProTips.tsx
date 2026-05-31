export default function ProTips() {
  const tips = [
    {
      titulo: "Teste pelo menos 3 estilos diferentes",
      texto: "Antes de decidir pelo logo final, gere variações com estilos distintos — minimalista, moderno, clássico. O estilo que você imagina nem sempre é o que melhor representa a marca na prática.",
    },
    {
      titulo: "Sempre baixe em SVG quando possível",
      texto: "O formato vetorial (SVG) é essencial para usar o logo em qualquer tamanho sem perda de qualidade — de favicon até outdoor. Priorize ferramentas que entregam SVG, mesmo que seja no plano pago.",
    },
    {
      titulo: "Teste o logo em fundo claro e escuro",
      texto: "Um bom logo precisa funcionar bem em ambos os contextos. Antes de finalizar, veja como ele fica no modo escuro, em fundos coloridos e em versão monocromática — você vai usar em mais situações do que imagina.",
    },
    {
      titulo: "Menos é mais — evite logos complexos demais",
      texto: "Logos simples são mais versáteis, memoráveis e funcionam melhor em tamanhos pequenos como ícone de app ou favicon. Se a IA gerou algo muito detalhado, peça simplificações ou reduza elementos manualmente.",
    },
  ];

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Dicas para criar um logo com IA</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {tips.map((tip, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">{tip.titulo}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{tip.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
