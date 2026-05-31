const perfis = [
  { perfil: "Desenvolvedor iniciante em IA", recomendacao: "OpenAI API", motivo: "Documentação exemplar, SDK maduro para Python e JavaScript, e a maior comunidade de exemplos e tutoriais disponível." },
  { perfil: "Aplicação que precisa de resposta ultra-rápida", recomendacao: "Groq", motivo: "Inferência baseada em LPU (Language Processing Unit) com velocidades muito acima da média, ideal para chatbots e assistentes em tempo real." },
  { perfil: "Budget limitado com modelos open-source", recomendacao: "Together AI ou Mistral", motivo: "Acesso a Llama, Mixtral e outros modelos potentes com custo por token significativamente menor que as APIs proprietárias." },
  { perfil: "Aplicação enterprise com contexto longo", recomendacao: "Anthropic API", motivo: "Claude com janela de contexto de até 200k tokens, ideal para análise de documentos extensos, contratos e relatórios completos." },
  { perfil: "Explorar muitos modelos diferentes", recomendacao: "Replicate", motivo: "Marketplace com centenas de modelos de texto, imagem, áudio e vídeo acessíveis via uma única API padronizada." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a API certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada API tem um perfil de uso ideal. Veja qual se encaixa melhor no seu projeto:</p>
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
