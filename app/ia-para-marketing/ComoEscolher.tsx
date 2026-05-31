const perfis = [
  { perfil: "Time de conteúdo com alto volume de produção", recomendacao: "Jasper", motivo: "Brand Voice aprende o tom e estilo da marca, garantindo que todos os conteúdos — emails, posts, landing pages — soem como a mesma voz, independente de quem gerou." },
  { perfil: "Marketing digital com foco em SEO", recomendacao: "Semrush + Surfer SEO", motivo: "Combine Semrush para pesquisa de palavras-chave e análise de concorrentes com Surfer para otimizar cada artigo baseado nos fatores que os top 10 resultados do Google têm em comum." },
  { perfil: "Gestor de redes sociais e anúncios", recomendacao: "Canva AI + AdCreative.ai", motivo: "Canva para peças orgânicas das redes sociais e AdCreative.ai para criativos de anúncios pagos com variações automáticas otimizadas para cada plataforma." },
  { perfil: "Empresa que usa HubSpot", recomendacao: "HubSpot AI", motivo: "IA integrada ao CRM que gera emails de nurturing, sugere CTAs, otimiza linhas de assunto e cria landing pages — tudo dentro do mesmo ambiente onde os leads já estão." },
  { perfil: "Time de growth com foco em conversão", recomendacao: "Copy.ai", motivo: "Workflows que automatizam a criação de sequências de emails, variações de copy para A/B test e conteúdo de funil completo, reduzindo o tempo de produção de semanas para horas." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada ferramenta atende uma disciplina de marketing diferente. Veja qual se encaixa melhor na sua estratégia:</p>
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
