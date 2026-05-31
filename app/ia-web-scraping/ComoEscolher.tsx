const perfis = [
  { perfil: "Desenvolvedor criando pipeline de dados para IA", recomendacao: "Firecrawl", motivo: "Converte qualquer site em Markdown limpo, pronto para ser usado como contexto em modelos de IA, com API simples e suporte a crawling de domínios completos." },
  { perfil: "Time de marketing extraindo leads do LinkedIn", recomendacao: "Phantombuster", motivo: "Automações prontas para LinkedIn, Instagram e outras redes sociais, sem código, com agendamento e exportação direta para planilhas ou CRM." },
  { perfil: "Usuário não-técnico que precisa de dados tabulares", recomendacao: "Octoparse", motivo: "Interface visual que permite apontar e clicar nos elementos do site que você quer extrair, gerando um scraper automático sem precisar escrever código ou selectors CSS." },
  { perfil: "Empresa com dados em grande escala", recomendacao: "Bright Data ou Diffbot", motivo: "Bright Data para infraestrutura de proxy e scraping sem bloqueios. Diffbot para extração estruturada com IA que entende o conteúdo de qualquer página automaticamente." },
  { perfil: "Desenvolvedor com scraping de sites protegidos", recomendacao: "ScrapingBee ou Apify", motivo: "Gerenciam headless browsers, rotação de proxies e resolução de CAPTCHAs automaticamente, permitindo scraping de sites que bloqueiam requisições simples." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada ferramenta atende um perfil de uso diferente. Veja qual se encaixa melhor na sua necessidade:</p>
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
