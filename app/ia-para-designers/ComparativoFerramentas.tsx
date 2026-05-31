const ferramentas = [
  { nome: "Adobe Firefly", preco: "Incluído no Creative Cloud / Freemium individual", gratis: "Sim", tipo: "IA generativa integrada à suite Adobe", melhorPara: "Designers que já usam Photoshop, Illustrator e Premiere e querem IA sem sair da suite" },
  { nome: "Midjourney", preco: "A partir de $10/mês", gratis: "Não", tipo: "Geração de imagens de alta qualidade estética", melhorPara: "Conceituação visual, moodboards e criação de assets com qualidade artística elevada" },
  { nome: "Canva AI (Magic Studio)", preco: "Freemium / Pro R$54,99/mês", gratis: "Sim", tipo: "Design assistido com IA para não-designers", melhorPara: "Criação rápida de peças para redes sociais, apresentações e materiais de marketing" },
  { nome: "Recraft", preco: "Freemium / Pro $12/mês", gratis: "Sim", tipo: "Geração de ícones, ilustrações e SVGs", melhorPara: "Designers de UI que precisam de ícones, ilustrações e assets vetoriais consistentes" },
  { nome: "Ideogram", preco: "Freemium / A partir de $8/mês", gratis: "Sim", tipo: "Geração com tipografia e texto integrado", melhorPara: "Criação de logotipos, capas e peças que precisam de texto integrado ao design" },
  { nome: "DALL-E 3", preco: "Incluído no ChatGPT Plus ($20/mês)", gratis: "Créditos", tipo: "Geração de imagens via ChatGPT", melhorPara: "Designers que usam ChatGPT e querem gerar imagens diretamente na conversa" },
  { nome: "Stable Diffusion (SDXL)", preco: "Open-source", gratis: "Sim", tipo: "Geração local com controle total", melhorPara: "Designers técnicos que querem controle máximo sobre o processo sem custo por imagem" },
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
