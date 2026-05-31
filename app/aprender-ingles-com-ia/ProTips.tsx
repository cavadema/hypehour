const tips = [
  { numero: "01", titulo: "Pratique todo dia, mesmo que por 10 minutos", descricao: "Consistência supera intensidade no aprendizado de idiomas. Uma sessão curta diária é muito mais eficaz do que sessões longas e esporádicas." },
  { numero: "02", titulo: "Fale em voz alta, não só leia", descricao: "Ferramentas como ELSA Speak e TalkPal são mais eficazes quando você fala de verdade. Não mude para texto quando puder praticar fala — o muscle memory da boca é essencial." },
  { numero: "03", titulo: "Combine vocabulário com conversação", descricao: "Use Lingvist ou Duolingo para aprender palavras novas e imediatamente pratique-as em frases com TalkPal ou Falou. Contextualizar o vocabulário acelera a memorização." },
  { numero: "04", titulo: "Grave a si mesmo falando", descricao: "Antes de usar a IA, grave um áudio seu falando sobre qualquer assunto. Depois de algumas semanas de prática, grave de novo e compare. O progresso motivará a continuar." },
  { numero: "05", titulo: "Não traduza mentalmente — pense em inglês", descricao: "Quando estiver praticando com a IA, force-se a formular respostas diretamente em inglês. Traduzir mentalmente é um hábito que limita a fluência a longo prazo." },
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
