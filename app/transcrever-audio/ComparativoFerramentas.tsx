const ferramentas = [
  { nome: "Whisper (OpenAI)", preco: "Open-source / API $0,006/min", gratis: "Self-hosted", tipo: "Transcrição open-source de alta precisão", melhorPara: "Desenvolvedores que querem a melhor transcrição disponível com total controle e opção self-hosted" },
  { nome: "Otter.ai", preco: "Freemium / Pro $17/mês", gratis: "Sim", tipo: "Transcrição e notas de reuniões", melhorPara: "Profissionais que transcrevem reuniões no Zoom, Teams e Meet com resumos automáticos" },
  { nome: "Descript", preco: "Freemium / Creator $24/mês", gratis: "Sim", tipo: "Edição de áudio/vídeo por transcrição", melhorPara: "Podcasters e criadores de vídeo que editam o áudio deletando palavras na transcrição" },
  { nome: "Riverside.fm", preco: "Freemium / Standard $15/mês", gratis: "Sim", tipo: "Gravação e transcrição de podcasts em alta qualidade", melhorPara: "Podcasters que gravam entrevistas remotas com qualidade de estúdio e transcrição automática" },
  { nome: "Turboscribe", preco: "Freemium / Unlimited $10/mês", gratis: "Sim", tipo: "Transcrição rápida de qualquer áudio", melhorPara: "Usuários que precisam transcrever arquivos de áudio e vídeo com suporte a mais de 98 idiomas" },
  { nome: "Speechma", preco: "Freemium", gratis: "Sim", tipo: "Transcrição e ferramentas de voz com IA", melhorPara: "Usuários que querem transcrever áudios e converter texto em fala com interface simples" },
  { nome: "AssemblyAI", preco: "Pay-as-you-go / A partir de $0,012/min", gratis: "Crédito inicial", tipo: "API de transcrição com análise de áudio", melhorPara: "Desenvolvedores que precisam de transcrição com diarização, análise de sentimento e sumário via API" },
];

export default function ComparativoFerramentas() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Comparativo das principais ferramentas</h2>
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 font-semibold">Ferramenta</th>
              <th className="px-4 py-3 font-semibold">Preço</th>
              <th className="px-4 py-3 font-semibold">Grátis?</th>
              <th className="px-4 py-3 font-semibold hidden md:table-cell">Tipo</th>
              <th className="px-4 py-3 font-semibold hidden lg:table-cell">Melhor para</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {ferramentas.map((f, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 font-medium text-gray-900">{f.nome}</td>
                <td className="px-4 py-3 text-gray-600">{f.preco}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${f.gratis === "Sim" ? "bg-green-100 text-green-700" : f.gratis === "Não" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}>{f.gratis}</span>
                </td>
                <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{f.tipo}</td>
                <td className="px-4 py-3 text-gray-600 hidden lg:table-cell">{f.melhorPara}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mt-2">* Preços aproximados. Consulte o site oficial de cada ferramenta para valores atualizados.</p>
    </div>
  );
}
