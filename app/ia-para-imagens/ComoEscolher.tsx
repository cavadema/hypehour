const perfis = [
  { perfil: "Artista digital ou criador de conceitos", recomendacao: "Midjourney", motivo: "A melhor qualidade estética do mercado para arte conceitual, ilustrações e imagens com alto valor artístico, com comunidade ativa e referências abundantes de prompts." },
  { perfil: "Designer na suite Adobe", recomendacao: "Adobe Firefly", motivo: "Treinado em conteúdo licenciado, é o mais seguro para uso comercial, com Generative Fill no Photoshop e Text Effects no Illustrator sem sair dos workflows Adobe." },
  { perfil: "Precisa de texto integrado na imagem", recomendacao: "Ideogram", motivo: "A melhor opção quando o texto é parte da composição — logotipos, cartazes, capas — com renderização de tipografia significativamente superior às demais ferramentas." },
  { perfil: "Desenvolvedor ou usuário técnico", recomendacao: "Stable Diffusion local", motivo: "Rodando localmente via ComfyUI ou Automatic1111, sem custo por geração, com acesso a milhares de modelos, LoRAs e ControlNet para controle preciso do resultado." },
  { perfil: "Designer de UI/UX com sistema de design", recomendacao: "Recraft", motivo: "Gera ícones, ilustrações e assets vetoriais com consistência de estilo, permitindo definir uma paleta e estilo que se mantêm coerentes em todas as gerações do projeto." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada gerador tem um ponto forte diferente. Veja qual se encaixa melhor no seu caso de uso:</p>
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
