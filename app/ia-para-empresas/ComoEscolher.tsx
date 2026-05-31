const perfis = [
  { perfil: "Empresa com suite Microsoft", recomendacao: "Microsoft Copilot 365", motivo: "IA dentro do Teams, Outlook, Word, Excel e PowerPoint — resumindo emails, gerando apresentações e analisando planilhas sem sair dos aplicativos que a equipe já usa." },
  { perfil: "Empresa com suite Google", recomendacao: "Google Workspace AI (Gemini)", motivo: "Gemini integrado ao Gmail, Docs, Sheets e Meet com funcionalidades como rascunho de emails, análise de planilhas e resumo de documentos longos." },
  { perfil: "Time com documentação no Notion", recomendacao: "Notion AI", motivo: "IA dentro das páginas, wikis e projetos do Notion para gerar, resumir, traduzir e melhorar textos sem precisar copiar e colar em outra ferramenta." },
  { perfil: "Empresa com alto volume de reuniões", recomendacao: "Otter.ai", motivo: "Transcreve reuniões em tempo real no Zoom, Teams e Meet, gerando resumos automáticos, itens de ação identificados e captura de decisões ao final de cada call." },
  { perfil: "Time de marketing com produção de conteúdo", recomendacao: "Jasper", motivo: "Plataforma especializada em conteúdo de marketing com Brand Voice, templates de campanha e colaboração em equipe para manter a consistência da comunicação da marca." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa para sua empresa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada solução atende um caso de uso corporativo diferente. Veja qual se encaixa melhor no seu contexto:</p>
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
