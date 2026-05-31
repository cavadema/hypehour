const perfis = [
  { perfil: "Não-desenvolvedor criando um MVP", recomendacao: "Bolt.new ou Lovable", motivo: "Descreva o app que você quer em uma mensagem e receba uma aplicação web funcional com backend, banco de dados e deploy — sem precisar entender nada de código." },
  { perfil: "Dev que quer UI React perfeita rapidamente", recomendacao: "v0 (Vercel)", motivo: "Gera componentes React com shadcn/ui e Tailwind prontos para copiar no projeto, com código limpo, acessível e estilizado conforme as melhores práticas." },
  { perfil: "Desenvolvedor que prefere o próprio IDE", recomendacao: "Cursor ou Windsurf", motivo: "IDEs baseados no VS Code com IA profundamente integrada que entende o projeto inteiro, permite edições em múltiplos arquivos e completa funções completas com contexto." },
  { perfil: "Quem quer protipar e publicar em minutos", recomendacao: "Replit AI", motivo: "Ambiente de desenvolvimento online com IA que escreve, executa e publica o código em uma única plataforma, sem instalar nada localmente." },
  { perfil: "Dev que quer sugestões inline discretas", recomendacao: "GitHub Copilot", motivo: "Para quem prefere manter o fluxo de trabalho atual e apenas ter sugestões inteligentes que completam linhas e funções sem um agente tomando o controle do editor." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada ferramenta tem uma abordagem diferente ao vibe coding. Veja qual se encaixa melhor no seu estilo:</p>
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
