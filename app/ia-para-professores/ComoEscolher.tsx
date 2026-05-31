const perfis = [
  { perfil: "Professor que quer economizar tempo de planejamento", recomendacao: "MagicSchool AI", motivo: "Suite com mais de 60 ferramentas para professores: planos de aula, rubricas, emails para pais, diferenciação por nível e geração de atividades — tudo em uma plataforma pensada para educadores." },
  { perfil: "Professor que quer aulas mais interativas", recomendacao: "Curipod", motivo: "Gera slides com enquetes, perguntas de reflexão e quizzes integrados que os alunos respondem pelo celular em tempo real, aumentando o engajamento durante a aula." },
  { perfil: "Professor com turmas de diferentes níveis", recomendacao: "Diffit", motivo: "Adapta qualquer texto ou artigo para diferentes níveis de leitura (do fundamental ao médio) mantendo o conteúdo, ideal para turmas heterogêneas ou alunos com dificuldades específicas." },
  { perfil: "Professor que dá feedback em documentos", recomendacao: "Brisk Teaching", motivo: "Extensão do Chrome que funciona diretamente no Google Docs, sugerindo comentários de feedback pedagógico e identificando áreas de melhoria nos trabalhos dos alunos com um clique." },
  { perfil: "Professor que quer IA segura para alunos", recomendacao: "SchoolAI", motivo: "Cria espaços controlados onde alunos interagem com IA dentro dos limites definidos pelo professor, com monitoramento das conversas e relatórios de uso para a escola." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada ferramenta atende uma necessidade pedagógica diferente. Veja qual se encaixa melhor no seu contexto:</p>
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
