const tips = [
  { numero: "01", titulo: "Use IA para diferenciar atividades por nível de dificuldade", descricao: "Gere três versões da mesma atividade — básica, intermediária e avançada — em minutos. Isso torna viável a diferenciação pedagógica que levaria horas de preparação manual para cada turma." },
  { numero: "02", titulo: "Revise todo o conteúdo gerado antes de apresentar aos alunos", descricao: "IA pode gerar informações imprecisas, especialmente em ciências, história e fatos específicos. Sempre revise antes de usar em sala — você continua sendo o especialista, a IA é um auxiliar." },
  { numero: "03", titulo: "Use IA para criar rubricas de avaliação claras e objetivas", descricao: "Descreva o que você quer avaliar e peça para a IA gerar uma rubrica com critérios e níveis de desempenho. Rubricas claras reduzem questionamentos sobre notas e tornam a avaliação mais justa." },
  { numero: "04", titulo: "Ensine os alunos a usar IA de forma crítica, não evite o assunto", descricao: "Em vez de tentar proibir o uso de IA, incorpore-a às atividades com propósito: compare textos gerados por IA com textos humanos, discuta limitações e ensine como verificar informações." },
  { numero: "05", titulo: "Documente as ferramentas que funcionaram para compartilhar com colegas", descricao: "As melhores práticas de IA na educação ainda estão sendo descobertas. Documente o que funcionou — qual prompt gerou o melhor plano de aula, qual ferramenta engajou mais — e compartilhe com sua equipe pedagógica." },
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
