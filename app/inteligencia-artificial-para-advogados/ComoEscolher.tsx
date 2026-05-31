const perfis = [
  { perfil: "Advogado brasileiro focado em pesquisa jurídica", recomendacao: "Jusbrasil IA", motivo: "Base de dados com jurisprudência de todos os tribunais brasileiros, legislação atualizada e acompanhamento de processos, com IA para resumir decisões e identificar precedentes relevantes." },
  { perfil: "Escritório com alto volume de revisão de contratos", recomendacao: "Definely ou Luminance", motivo: "Identificam automaticamente cláusulas de risco, desvios de padrão e pontos de negociação em contratos extensos, reduzindo o tempo de revisão de horas para minutos." },
  { perfil: "Advogado em firma com LexisNexis", recomendacao: "Lexis+ AI", motivo: "IA generativa integrada ao banco de dados do LexisNexis para pesquisar casos, sintetizar jurisprudência e gerar memorandos jurídicos sem sair da plataforma que a firma já usa." },
  { perfil: "Departamento jurídico de grande empresa", recomendacao: "Harvey AI ou Casetext", motivo: "Ferramentas enterprise para análise de contratos, pesquisa de casos, revisão de deposições e geração de documentos jurídicos com segurança de dados adequada para ambientes corporativos." },
  { perfil: "Advogado em due diligence de M&A", recomendacao: "Luminance", motivo: "Especializado em análise de datarooms com milhares de documentos, identificando anomalias, extraindo dados estruturados e gerando relatórios de due diligence em fração do tempo manual." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada ferramenta atende uma especialidade jurídica diferente. Veja qual se encaixa melhor no seu perfil:</p>
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
