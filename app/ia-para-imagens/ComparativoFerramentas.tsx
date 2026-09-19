const ferramentas = [
  { nome: "Midjourney", preco: "A partir de $10/mês", gratis: "Não", tipo: "Geração artística de alta qualidade", melhorPara: "Arte conceitual, ilustrações e imagens com alta qualidade estética" },
  { nome: "DALL-E 3 (ChatGPT)", preco: "ChatGPT Plus $20/mês", gratis: "Créditos", tipo: "Geração via prompt conversacional", melhorPara: "Usuários do ChatGPT que querem gerar imagens diretamente na conversa com refinamentos iterativos" },
  { nome: "Adobe Firefly", preco: "Freemium / Creative Cloud", gratis: "Sim", tipo: "Geração integrada à suite Adobe", melhorPara: "Designers que precisam de uso comercial seguro integrado ao Photoshop e Illustrator" },
  { nome: "Stable Diffusion (SDXL)", preco: "Open-source", gratis: "Sim", tipo: "Geração local com controle total", melhorPara: "Usuários técnicos que querem rodar localmente sem custo por imagem e com total controle" },
  { nome: "Ideogram", preco: "Freemium / A partir de $8/mês", gratis: "Sim", tipo: "Geração com tipografia integrada", melhorPara: "Imagens que precisam de texto integrado: logos, capas e pôsteres" },
  { nome: "Recraft", preco: "Freemium / Pro $12/mês", gratis: "Sim", tipo: "Ilustrações, ícones e SVGs com consistência", melhorPara: "Designers de UI que precisam de assets vetoriais consistentes e exportáveis" },
  { nome: "Piclumen", preco: "Freemium / Pro a partir de $9,9/mês", gratis: "Sim", tipo: "Geração de imagens fotorrealistas", melhorPara: "Criadores de conteúdo que precisam de imagens hiper-realistas para redes sociais e marketing" },
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
