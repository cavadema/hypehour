"use client";
import { useState } from "react";

const faqs = [
  { q: "O que é o Thumbfast?", a: "Thumbfast é um gerador de thumbnails com IA para YouTube, Instagram e redes sociais, criando imagens de capa profissionais rapidamente." },
  { q: "O Thumbfast funciona para YouTube?", a: "Sim. O YouTube é o principal caso de uso, com geração de thumbnails nas dimensões corretas (1280×720 pixels) e CTR otimizado." },
  { q: "Preciso ter habilidades de design para usar o Thumbfast?", a: "Não. O Thumbfast é projetado para criadores sem experiência em design. Descreva o que quer e a IA cria a thumbnail." },
  { q: "Quantas thumbnails posso gerar por prompt?", a: "O Thumbfast gera múltiplas variações por prompt para que você escolha a melhor. O número pode variar por plano." },
  { q: "O Thumbfast pode incluir texto na thumbnail?", a: "Sim. Títulos e textos são incorporados na imagem com fontes e estilos que aumentam o impacto visual." },
  { q: "Quais estilos de thumbnail o Thumbfast oferece?", a: "Templates para gaming, tecnologia, finanças, lifestyle, tutoriais, vlogs e outros nichos populares estão disponíveis." },
  { q: "O Thumbfast funciona para Reels e TikTok?", a: "Sim. Além do formato YouTube, o Thumbfast exporta nas dimensões para Instagram Reels, TikTok e outros formatos verticais." },
  { q: "O Thumbfast tem plano gratuito?", a: "Consulte thumbfa.st para informações atualizadas sobre planos disponíveis e limites do acesso gratuito." },
  { q: "As thumbnails geradas têm marca d'água?", a: "Verifique as condições do plano gratuito. Geralmente thumbnails sem marca d'água estão disponíveis nos planos pagos." },
  { q: "Posso usar minha própria foto na thumbnail?", a: "Verifique se o Thumbfast suporta upload de imagens de referência para composição com o resultado gerado." },
  { q: "O Thumbfast gera thumbnails com rostos de IA?", a: "Sim. A IA pode gerar rostos expressivos que são populares em thumbnails de YouTube, mas não serão fotos reais suas." },
  { q: "Como exporto a thumbnail gerada?", a: "O download está disponível diretamente na plataforma após a geração, geralmente em PNG ou JPG em alta resolução." },
  { q: "A qualidade das thumbnails é suficiente para uso profissional?", a: "Sim. O Thumbfast gera imagens em alta resolução adequadas para publicação em todas as plataformas." },
  { q: "O Thumbfast garante mais cliques nas minhas thumbnails?", a: "A composição é otimizada para CTR, mas os resultados dependem do nicho, do público e da qualidade do conteúdo do vídeo." },
  { q: "Posso solicitar um estilo específico de thumbnail?", a: "Sim. Descreva o estilo visual desejado no prompt, incluindo cores, composição e mood da imagem." },
  { q: "O Thumbfast funciona para podcasts em vídeo?", a: "Sim. Capas e thumbnails para podcasts em vídeo são um caso de uso suportado pela plataforma." },
  { q: "Quanto tempo leva para gerar uma thumbnail?", a: "A geração é rápida — geralmente entre alguns segundos e um minuto, dependendo da complexidade do prompt." },
  { q: "Posso fazer pequenos ajustes nas thumbnails geradas?", a: "Verifique se a plataforma oferece editor para ajustes de texto, posição e cores antes do download." },
  { q: "O Thumbfast funciona para banners de LinkedIn?", a: "Verifique se as dimensões do LinkedIn (1584×396) estão disponíveis como opção de exportação na plataforma." },
  { q: "Como descrevo bem o que quero no prompt?", a: "Inclua: nicho do canal, tema do vídeo, clima (urgência, curiosidade, humor), cores da marca e elementos que devem aparecer." },
  { q: "O Thumbfast tem histórico de gerações anteriores?", a: "Verifique se a plataforma salva o histórico de thumbnails geradas para reutilização ou referência futura." },
  { q: "Posso gerar thumbnails em lote?", a: "Dependendo do plano, pode ser possível processar múltiplos prompts de uma vez. Consulte as funcionalidades do plano." },
  { q: "O Thumbfast suporta canais em português?", a: "Sim. O modelo de IA processa prompts em português para gerar thumbnails adequadas ao contexto do canal." },
  { q: "As imagens do Thumbfast são livres de direitos autorais?", a: "Imagens geradas por IA geralmente podem ser usadas comercialmente, mas verifique os termos de uso da plataforma para confirmação." },
  { q: "O Thumbfast é melhor que o Canva para thumbnails?", a: "Depende. O Thumbfast é mais rápido e não requer habilidades de design, mas o Canva oferece mais controle criativo e personalização." },
  { q: "Posso salvar minha paleta de cores no Thumbfast?", a: "Verifique se a plataforma permite salvar preferências de marca para manter consistência visual entre as gerações." },
  { q: "O Thumbfast funciona para canais de culinária?", a: "Sim. Qualquer nicho pode ser descrito no prompt para que a IA crie thumbnails adequadas ao tema e ao público." },
  { q: "O Thumbfast tem app mobile?", a: "Verifique se há app iOS ou Android disponível ou se o acesso é apenas via web." },
  { q: "Qual resolução são as thumbnails geradas?", a: "O Thumbfast gera thumbnails em alta resolução. Para YouTube, o padrão é pelo menos 1280×720 pixels." },
  { q: "Como começo a usar o Thumbfast?", a: "Acesse thumbfa.st, crie uma conta, descreva o tema do seu vídeo e gere sua primeira thumbnail em segundos." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const schemaData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <section className="mt-12 border-t border-zinc-200 pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <h2 className="text-2xl font-bold text-black mb-6">Perguntas Frequentes sobre o Thumbfast</h2>
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
