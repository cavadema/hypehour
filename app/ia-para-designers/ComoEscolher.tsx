const perfis = [
  { perfil: "Designer profissional na suite Adobe", recomendacao: "Adobe Firefly", motivo: "Integrado nativamente ao Photoshop, Illustrator e Express com recursos como Generative Fill, Expand e Text Effects, sem sair dos seus workflows habituais." },
  { perfil: "Criador de conceitos e moodboards", recomendacao: "Midjourney", motivo: "Qualidade estética consistentemente elevada, ideal para explorar direções visuais, criar referências para clientes e desenvolver identidade visual antes do projeto executivo." },
  { perfil: "Designer de produto e UI/UX", recomendacao: "Recraft", motivo: "Especializado em ícones, ilustrações e assets vetoriais com consistência de estilo, perfeito para criar sistemas de design coesos e exportar SVGs diretamente usáveis." },
  { perfil: "Quem precisa de texto integrado no design", recomendacao: "Ideogram", motivo: "A melhor ferramenta para gerar imagens com tipografia integrada — logotipos, capas de livros, pôsteres — onde o texto faz parte da composição visual." },
  { perfil: "Designer técnico com foco em privacidade", recomendacao: "Stable Diffusion local", motivo: "Rodando localmente, não há custo por geração e nenhuma imagem é enviada para servidores externos, com controle total sobre modelos, LoRAs e parâmetros de geração." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada ferramenta tem um perfil de uso ideal. Veja qual se encaixa melhor no seu fluxo criativo:</p>
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
