const perfis = [
  { perfil: "MEI ou pequena empresa brasileira", recomendacao: "ContaAzul", motivo: "Interface simples, integração com NF-e e boleto bancário, suporte em português e planos acessíveis para quem está começando." },
  { perfil: "Contador com alto volume de documentos", recomendacao: "Dext", motivo: "Captura automática de recibos e notas fiscais por foto, categorizando cada item com IA e exportando para os principais ERPs." },
  { perfil: "Grande empresa com AP complexo", recomendacao: "Vic.ai", motivo: "Automação completa do ciclo de contas a pagar com aprovações em múltiplos níveis, detecção de duplicatas e integração com ERPs enterprise." },
  { perfil: "Empresa com fornecedores internacionais", recomendacao: "Tipalti", motivo: "Pagamentos em mais de 190 países, conformidade fiscal global e automação de formulários de impostos como W-9 e W-8BEN." },
  { perfil: "Escritório contábil escalando serviços", recomendacao: "Botkeeper", motivo: "Bookkeeping automatizado por IA com supervisão humana, permitindo atender mais clientes sem ampliar proporcionalmente a equipe." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada solução atende um perfil diferente. Veja qual se encaixa melhor na sua necessidade contábil:</p>
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
