const perfis = [
  { perfil: "Iniciante sem conhecimento técnico", recomendacao: "Make ou Zapier", motivo: "Interfaces visuais e intuitivas, com centenas de integrações prontas e templates para começar sem código." },
  { perfil: "Desenvolvedor ou time técnico", recomendacao: "n8n", motivo: "Open-source, self-hostável e altamente customizável. Permite nós personalizados e lógica complexa com código." },
  { perfil: "Empresa com processos estruturados", recomendacao: "Pipefy AI ou Zeev", motivo: "Focados em BPM, com controle de aprovações, SLAs e fluxos documentados para equipes." },
  { perfil: "Quem quer automatizar tarefas no navegador", recomendacao: "Bardeen", motivo: "Extensão de navegador que automatiza scraping, preenchimento de formulários e ações repetitivas sem sair do browser." },
  { perfil: "Times que precisam de IA nos fluxos", recomendacao: "Stack AI ou Relay", motivo: "Permitem incorporar modelos de linguagem diretamente nos workflows, com suporte a aprovações humanas quando necessário." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada ferramenta tem um perfil de uso ideal. Veja qual se encaixa melhor na sua necessidade:</p>
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
