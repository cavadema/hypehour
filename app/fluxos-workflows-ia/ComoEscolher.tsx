const perfis = [
  { perfil: "Profissional sem conhecimento de código", recomendacao: "Zapier", motivo: "Interface mais simples do mercado, com mais de 6.000 integrações prontas e tutoriais abundantes para conectar apps do dia a dia sem nenhuma linha de código." },
  { perfil: "Equipe técnica com budget limitado", recomendacao: "n8n self-hosted", motivo: "Open-source com interface visual poderosa, lógica complexa e possibilidade de rodar gratuitamente no próprio servidor sem limite de execuções." },
  { perfil: "Cenários com lógica e transformação de dados", recomendacao: "Make (Integromat)", motivo: "Canvas visual com suporte a routers, iteradores e módulos de transformação de dados mais sofisticados que o Zapier, com preço acessível." },
  { perfil: "Alto volume com custo previsível", recomendacao: "Pabbly Connect", motivo: "Modelo de preço com tarefas ilimitadas em planos fixos, ideal para quem escala automações e quer previsibilidade no custo mensal." },
  { perfil: "Desenvolvedor que quer controle máximo", recomendacao: "Pipedream", motivo: "Permite escrever código Node.js ou Python em cada etapa do fluxo, com acesso a todas as bibliotecas npm e execução serverless nativa." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada plataforma atende um perfil diferente. Veja qual se encaixa melhor no seu caso de uso:</p>
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
