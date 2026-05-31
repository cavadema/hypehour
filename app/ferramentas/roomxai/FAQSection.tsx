"use client";
import { useState } from "react";

const faqs = [
  { q: "O que é o RoomX AI?", a: "RoomX AI é uma ferramenta de IA para design de interiores que transforma fotos de ambientes reais em renders profissionais com diferentes estilos decorativos." },
  { q: "O RoomX AI substitui um arquiteto ou designer de interiores?", a: "Não substitui, mas complementa. O RoomX é excelente para exploração de conceitos; projetos de obra exigem um profissional." },
  { q: "Preciso de foto em alta qualidade para usar o RoomX?", a: "Fotos com boa iluminação produzem resultados superiores. Fotos muito escuras ou de baixa resolução podem comprometer o resultado." },
  { q: "O RoomX mantém as paredes e janelas na mesma posição?", a: "Sim. A IA preserva a estrutura arquitetônica — paredes, janelas, portas e proporções — alterando apenas decoração e acabamentos." },
  { q: "Quantos estilos o RoomX oferece?", a: "O RoomX oferece dezenas de estilos populares: minimalista, escandinavo, industrial, moderno, luxo, boho, tropical e outros." },
  { q: "O RoomX funciona para qualquer cômodo?", a: "Sim. Sala, quarto, cozinha, banheiro, escritório — qualquer ambiente pode ser redesenhado pela plataforma." },
  { q: "Posso usar o RoomX para espaços comerciais?", a: "Sim. Escritórios, lojas, restaurantes e outros espaços comerciais também podem ser redesenhados pelo RoomX AI." },
  { q: "O RoomX tem plano gratuito?", a: "Consulte roomxai.com para informações atualizadas sobre planos e limites do acesso gratuito." },
  { q: "As imagens geradas são em alta resolução?", a: "Sim. O RoomX exporta renders em alta resolução adequados para apresentações profissionais e materiais de vendas." },
  { q: "O RoomX pode ajudar na venda de imóveis?", a: "Sim. Staging virtual com o RoomX pode tornar fotos de imóveis mais atraentes, especialmente para ambientes vazios." },
  { q: "Posso mostrar imagens do RoomX para clientes?", a: "Sim. Os renders são de qualidade suficiente para apresentações de conceito a clientes. Inclua que são renders de IA." },
  { q: "O RoomX coloca móveis específicos de marcas?", a: "Não. A IA recria um estilo visual completo, mas não insere produtos exatos de marcas específicas de móveis." },
  { q: "Quanto tempo leva para gerar um redesign?", a: "A geração leva geralmente entre 15 e 60 segundos dependendo da complexidade e do volume de uso no momento." },
  { q: "Posso gerar múltiplas variações do mesmo ambiente?", a: "Sim. Gere quantas variações precisar para comparar diferentes estilos antes de tomar uma decisão de decoração." },
  { q: "O RoomX funciona para planejamento de obras?", a: "Para visualização de conceito, sim. Para planejamento técnico de obras, é necessário um projeto de arquitetura profissional." },
  { q: "O RoomX pode simular cores de parede diferentes?", a: "Sim. O estilo visual escolhido inclui paletas de cores, e você pode especificar cores preferidas na descrição do estilo." },
  { q: "O RoomX funciona para apartamentos pequenos?", a: "Sim. Pequenos espaços são um excelente caso de uso para visualizar como diferentes estilos funcionam em ambientes compactos." },
  { q: "Posso usar fotos tiradas com smartphone?", a: "Sim. Fotos de smartphone com boa iluminação e ângulo razoável produzem resultados de boa qualidade." },
  { q: "O RoomX tem app mobile?", a: "Verifique o site para disponibilidade de app iOS ou Android, além do acesso via navegador." },
  { q: "O RoomX AI é adequado para reformas de apartamento?", a: "Sim. É ideal para explorar visualmente diferentes abordagens antes de contratar uma construtora ou designer." },
  { q: "Como exporto as imagens geradas?", a: "As imagens são disponibilizadas para download direto na plataforma após a geração." },
  { q: "O RoomX funciona para estilos brasileiros de decoração?", a: "Sim. Estilos que combinam elementos modernos, tropicais e outros adequados ao gosto brasileiro podem ser especificados no prompt." },
  { q: "O RoomX pode simular iluminação diferente?", a: "Sim. O estilo visual inclui simulação de iluminação. Especifique preferências como ambientes mais claros ou com iluminação dramática." },
  { q: "O RoomX AI funciona para jardins e áreas externas?", a: "Verifique se a plataforma suporta ambientes externos além de interiores. Alguns casos funcionam bem, outros têm limitações." },
  { q: "Posso usar o resultado do RoomX para conseguir financiamento?", a: "Renders de IA podem complementar apresentações, mas projetos técnicos de arquitetura são geralmente exigidos em financiamentos." },
  { q: "O RoomX é melhor que o RoomGPT?", a: "O RoomX AI e o RoomGPT são ferramentas similares na proposta. Compare qualidade de resultado, preços e funcionalidades de cada um." },
  { q: "O RoomX tem suporte em português?", a: "Verifique o site para informações sobre interface e suporte ao idioma em português." },
  { q: "Posso compartilhar os renders gerados nas redes sociais?", a: "Sim. Os renders podem ser compartilhados diretamente, mas indique que são gerados por IA para transparência." },
  { q: "O RoomX funciona para escritórios home office?", a: "Sim. Transformar um quarto ou espaço em home office profissional é um dos casos de uso mais populares." },
  { q: "Como começo a usar o RoomX AI?", a: "Acesse roomxai.com, crie uma conta, tire uma foto do ambiente que quer redesenhar e escolha o estilo desejado." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const schemaData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <section className="mt-12 border-t border-zinc-200 pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <h2 className="text-2xl font-bold text-black mb-6">Perguntas Frequentes sobre o RoomX AI</h2>
      <div className="grid gap-3">
        {faqs.map((f, i) => (
          <div key={i} className="border border-zinc-200 rounded-lg bg-white overflow-hidden">
            <button className="w-full text-left px-5 py-4 font-medium text-black flex justify-between items-center hover:bg-zinc-50 transition" onClick={() => setOpen(open === i ? null : i)}>
              <span>{f.q}</span><span className="text-zinc-400 ml-4 flex-shrink-0">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && <div className="px-5 pb-4 text-zinc-700 text-sm leading-relaxed">{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
