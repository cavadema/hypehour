const tips = [
  { numero: "01", titulo: "Escolha a voz com base no perfil do seu público-alvo", descricao: "Voz, sotaque e ritmo impactam a percepção de credibilidade. Teste diferentes vozes com uma amostra do conteúdo antes de padronizar — a escolha errada pode afastar a audiência." },
  { numero: "02", titulo: "Ajuste velocidade e pausas para naturalidade", descricao: "A maioria das ferramentas permite controle de velocidade e pausas entre sentenças. Um ritmo ligeiramente mais lento que o padrão melhora a compreensão, especialmente em conteúdo técnico." },
  { numero: "03", titulo: "Revise o áudio com fone antes de publicar", descricao: "Erros de pronúncia em nomes próprios, siglas e termos técnicos são comuns. Ouça o áudio completo com fone de ouvido antes da publicação para evitar embaraços em produções profissionais." },
  { numero: "04", titulo: "Use clonagem de voz com consentimento documentado", descricao: "Ao clonar a voz de alguém (inclusive a sua), certifique-se de ter consentimento explícito documentado. O uso não autorizado de voz clonada é uma violação ética e potencialmente ilegal." },
  { numero: "05", titulo: "Combine com roteiro bem escrito para resultado profissional", descricao: "A IA gera a voz, mas a qualidade final depende do texto. Invista na escrita do roteiro: frases curtas, pontuação correta e vocabulário adequado ao tom desejado fazem toda a diferença." },
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
