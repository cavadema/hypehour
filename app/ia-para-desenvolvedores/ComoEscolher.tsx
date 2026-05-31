const perfis = [
  { perfil: "Desenvolvedor integrado ao ecossistema GitHub", recomendacao: "GitHub Copilot", motivo: "Integração nativa com GitHub Actions, Pull Requests e Codespaces. Entende o contexto do repositório e do histórico de commits para sugestões mais relevantes." },
  { perfil: "Dev que quer IA contextual em todo o projeto", recomendacao: "Cursor", motivo: "IDE completo baseado no VS Code com IA que indexa todo o projeto, permitindo fazer perguntas como 'onde está o bug de autenticação?' com resposta precisa." },
  { perfil: "Empresa com requisitos de privacidade de código", recomendacao: "Tabnine", motivo: "Oferece modo self-hosted onde o código nunca sai da infraestrutura da empresa, com modelos treinados especificamente na codebase interna." },
  { perfil: "Desenvolvedor backend em AWS", recomendacao: "Amazon Q Developer", motivo: "Conhece APIs da AWS, IAM policies, CloudFormation e outros serviços Amazon em profundidade, gerando código específico para o ecossistema da plataforma." },
  { perfil: "Desenvolvedor explorando código legado", recomendacao: "Sourcegraph Cody", motivo: "Indexa toda a codebase para permitir perguntas sobre qualquer parte do projeto, ideal para onboarding em bases antigas e refatorações de grande escala." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada ferramenta tem um perfil de uso ideal. Veja qual se encaixa melhor no seu fluxo de trabalho:</p>
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
