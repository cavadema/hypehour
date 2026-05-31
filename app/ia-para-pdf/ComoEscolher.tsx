const perfis = [
  { perfil: "Estudante ou pesquisador com artigos científicos", recomendacao: "Elicit ou Unriddle", motivo: "Elicit busca e extrai dados de papers científicos em escala. Unriddle permite ler e anotar PDFs com IA integrada — ideais para revisão de literatura e escrita acadêmica." },
  { perfil: "Advogado ou analista com contratos longos", recomendacao: "PDF.ai ou Humata AI", motivo: "Extraem informações específicas de contratos e documentos legais com precisão, identificando cláusulas, prazos e obrigações sem precisar ler página por página." },
  { perfil: "Usuário profissional do Adobe Acrobat", recomendacao: "Adobe Acrobat AI", motivo: "IA integrada ao ambiente Adobe para resumos, perguntas e análise de PDFs sem sair da ferramenta profissional que o mercado jurídico e corporativo já usa como padrão." },
  { perfil: "Pesquisador com múltiplos documentos", recomendacao: "Humata AI", motivo: "Permite fazer upload e analisar múltiplos PDFs simultaneamente, cruzando informações entre documentos diferentes — ideal para due diligence, meta-análises e pesquisas comparativas." },
  { perfil: "Iniciante que quer algo simples e rápido", recomendacao: "ChatPDF", motivo: "Interface mais simples do mercado: faça upload do PDF e comece a perguntar imediatamente. Plano gratuito funcional para até 3 PDFs por dia, sem curva de aprendizado." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada ferramenta atende um perfil diferente. Veja qual se encaixa melhor na sua necessidade com PDFs:</p>
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
