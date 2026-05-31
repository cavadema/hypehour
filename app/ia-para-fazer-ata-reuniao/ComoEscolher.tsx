const perfis = [
  { perfil: "Time com muitas reuniões no Zoom", recomendacao: "Fathom", motivo: "Integra nativamente ao Zoom sem configuração, gera notas e highlights automaticamente ao fim da call e compartilha o resumo com todos os participantes." },
  { perfil: "Equipe de vendas ou customer success", recomendacao: "Fireflies.ai", motivo: "Além das notas, permite pesquisar em conversas gravadas por palavras-chave, identificar objeções recorrentes e integrar com CRMs como Salesforce e HubSpot." },
  { perfil: "Usuário do Google Meet", recomendacao: "Tactiq", motivo: "Extensão do Chrome que transcreve em tempo real diretamente no Google Meet e Teams, sem precisar adicionar um bot à reunião ou instalar aplicativo separado." },
  { perfil: "Gestor que quer métricas de reuniões", recomendacao: "Read AI", motivo: "Além de notas, analisa engajamento, tempo de fala de cada participante e produtividade da reunião, gerando insights para melhorar a cultura de reuniões da equipe." },
  { perfil: "Time que precisa de documentação estruturada", recomendacao: "Sembly AI", motivo: "Gera atas com seções organizadas: decisões tomadas, itens de ação com responsáveis, questões em aberto e próximos passos — pronto para compartilhar ou arquivar." },
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
