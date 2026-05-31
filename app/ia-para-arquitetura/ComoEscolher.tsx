const perfis = [
  { perfil: "Arquiteto na fase de conceito e ideação", recomendacao: "Midjourney ou Stable Diffusion", motivo: "Geração rápida de imagens conceituais a partir de descrições textuais, ideal para explorar estilos, materiais e volumetrias antes de iniciar o projeto executivo." },
  { perfil: "Incorporadora avaliando viabilidade de terreno", recomendacao: "TestFit ou Spacemaker", motivo: "Ferramentas especializadas em gerar e avaliar múltiplas configurações de empreendimento automaticamente, com métricas de área, eficiência e custo em minutos." },
  { perfil: "Projeto com foco em sustentabilidade", recomendacao: "Finch", motivo: "Analisa o desempenho energético do projeto em tempo real, simulando insolação, ventilação e consumo para otimizar escolhas de implantação e material." },
  { perfil: "Escritório que precisa impressionar clientes", recomendacao: "Architect Render", motivo: "Gera renders fotorrealistas de interiores e fachadas a partir de fotos ou esboços, sem necessidade de modelagem 3D completa, acelerando a apresentação ao cliente." },
  { perfil: "Arquiteto explorando múltiplas plantas", recomendacao: "Maket", motivo: "Gera diversas opções de plantas baixas a partir de parâmetros de área, programa e estilo, permitindo explorar configurações rapidamente nas fases iniciais do projeto." },
];

export default function ComoEscolher() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Como escolher a ferramenta certa</h2>
      <p className="text-gray-500 text-sm mb-6">Cada ferramenta atende uma fase diferente do projeto. Veja qual se encaixa melhor na sua necessidade:</p>
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
