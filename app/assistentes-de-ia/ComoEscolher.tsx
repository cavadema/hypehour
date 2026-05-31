const perfis = [
  { perfil: "Usuário casual que quer um assistente geral", recomendacao: "ChatGPT", motivo: "Interface familiar, plano gratuito generoso e compatibilidade com a maioria dos casos de uso cotidianos." },
  { perfil: "Profissional que trabalha com documentos longos", recomendacao: "Claude", motivo: "Contexto de até 200k tokens, ideal para analisar contratos, relatórios e documentações extensas com alta fidelidade." },
  { perfil: "Usuário do ecossistema Google", recomendacao: "Gemini", motivo: "Integração nativa com Google Drive, Docs, Gmail e Search, tornando o fluxo de trabalho mais fluido para quem já usa G Suite." },
  { perfil: "Desenvolvedor que quer automação no terminal", recomendacao: "Goose", motivo: "Agente open-source que roda localmente, executa comandos, lê arquivos e automatiza tarefas diretamente no ambiente de desenvolvimento." },
  { perfil: "Quem busca interface minimalista e foco", recomendacao: "Macaron", motivo: "Design limpo e sem distrações, pensado para produtividade pessoal com respostas rápidas e organização de conversas." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher o assistente certo</h2>
      <p className="text-gray-500 text-sm mb-6">Cada assistente tem um perfil de uso ideal. Veja qual se encaixa melhor na sua necessidade:</p>
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
