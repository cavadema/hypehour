const perfis = [
  { perfil: "Usuário focado em privacidade e segurança", recomendacao: "Brave Leo", motivo: "Modelo de IA rodando localmente ou com privacidade reforçada, sem histórico de conversas armazenado, sem treinar dados do usuário, com bloqueio de anúncios e trackers nativo." },
  { perfil: "Usuário Windows na suite Microsoft", recomendacao: "Microsoft Edge Copilot", motivo: "Copilot integrado à barra lateral com acesso a GPT-4 para resumir qualquer página, gerar texto e fazer pesquisas sem sair do contexto que você está navegando." },
  { perfil: "Profissional com muitas abas abertas", recomendacao: "Arc Browser ou SigmaOS", motivo: "Repensam a organização de abas com espaços, favoritos inteligentes e IA que resume páginas automaticamente — resolvendo o caos de dezenas de abas abertas." },
  { perfil: "Usuário que quer múltiplos modelos de IA", recomendacao: "Opera One AI", motivo: "Acessa ChatGPT, Claude, Llama e outros modelos diretamente na barra lateral do navegador, sem precisar de extensões ou trocar de aba para cada modelo." },
  { perfil: "Pesquisador que quer respostas com fontes", recomendacao: "Perplexity (extensão)", motivo: "Transforme qualquer busca em uma resposta com citações verificadas, mantendo o Chrome como navegador principal e adicionando a inteligência de pesquisa do Perplexity via extensão." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher o navegador certo</h2>
      <p className="text-gray-500 text-sm mb-6">Cada navegador tem uma abordagem diferente à IA. Veja qual se encaixa melhor no seu perfil:</p>
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
