const ferramentas = [
  {
    nome: "Sora",
    preco: "ChatGPT Plus ($20/mês)",
    gratis: "Não",
    tipo: "Geração text-to-video",
    melhorPara: "Vídeos cinematográficos e criativos",
  },
  {
    nome: "KlingAI",
    preco: "Freemium",
    gratis: "Sim (limitado)",
    tipo: "Geração text/image-to-video",
    melhorPara: "Vídeos realistas com movimentos complexos",
  },
  {
    nome: "Google Veo 3.1",
    preco: "Pago (via Gemini)",
    gratis: "Sim (créditos)",
    tipo: "Geração text-to-video",
    melhorPara: "Alta qualidade e resolução 1080p",
  },
  {
    nome: "Fliki",
    preco: "A partir de $21/mês",
    gratis: "Sim (limitado)",
    tipo: "Texto para vídeo com narração",
    melhorPara: "Vídeos com voz e legendas automáticas",
  },
  {
    nome: "Adobe Firefly Video",
    preco: "Creative Cloud",
    gratis: "Créditos grátis",
    tipo: "Geração e edição",
    melhorPara: "Uso comercial com segurança de copyright",
  },
  {
    nome: "VEED",
    preco: "A partir de $18/mês",
    gratis: "Sim",
    tipo: "Edição com IA",
    melhorPara: "Legendas automáticas e tradução",
  },
  {
    nome: "Kapwing",
    preco: "A partir de $16/mês",
    gratis: "Sim",
    tipo: "Edição colaborativa",
    melhorPara: "Equipes e projetos colaborativos",
  },
  {
    nome: "PicLumen",
    preco: "Freemium",
    gratis: "Sim",
    tipo: "Multi-modelo (Kling, Seedance)",
    melhorPara: "Testar diferentes modelos de IA",
  },
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
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                    f.gratis === "Sim" ? "bg-green-100 text-green-700" :
                    f.gratis === "Não" ? "bg-red-100 text-red-700" :
                    "bg-yellow-100 text-yellow-700"
                  }`}>
                    {f.gratis}
                  </span>
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
