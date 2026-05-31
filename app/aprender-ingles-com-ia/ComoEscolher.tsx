const perfis = [
  { perfil: "Iniciante do zero", recomendacao: "Duolingo ou Lingvist", motivo: "Metodologia gamificada e progressão gradual, ideal para criar o hábito de estudar inglês sem pressão." },
  { perfil: "Quem precisa melhorar a pronúncia", recomendacao: "ELSA Speak ou GetPronounce", motivo: "Análise detalhada de fonemas e feedback em tempo real para corrigir sotaque e dicção." },
  { perfil: "Profissional que precisa de inglês no trabalho", recomendacao: "Speak ou JumpSpeak", motivo: "Foco em conversação fluente, vocabulário corporativo e situações reais de negócio." },
  { perfil: "Quem quer praticar sem vergonha", recomendacao: "TalkPal ou Praktika AI", motivo: "Conversação com IA sem julgamento, permitindo errar e aprender sem constrangimento." },
  { perfil: "Preparação para viagem ou intercâmbio", recomendacao: "Falou ou Univerbal", motivo: "Simulações de situações reais como aeroporto, hotel e restaurante, com vocabulário do cotidiano." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada ferramenta tem um perfil de uso ideal. Veja qual se encaixa melhor na sua necessidade:</p>
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
