"use client";
import { useState } from "react";

const faqs = [
  { q: "O que é o Macaron?", a: "Macaron é um assistente de IA pessoal com interface elegante e acesso a modelos de linguagem avançados para produtividade diária." },
  { q: "O Macaron usa qual modelo de IA por baixo?", a: "O Macaron oferece acesso a múltiplos modelos. Verifique o site para a lista completa de modelos disponíveis na plataforma." },
  { q: "O Macaron funciona em português?", a: "Sim. Como usa LLMs modernos, o Macaron suporta conversas e criação de conteúdo em português sem restrições." },
  { q: "O Macaron tem app para iPhone?", a: "Verifique a disponibilidade do app iOS no site macaron.im. A plataforma pode ter app móvel ou versão web responsiva." },
  { q: "O Macaron tem app para Mac?", a: "O Macaron pode ter um app nativo para macOS. Consulte o site para disponibilidade e requisitos do sistema." },
  { q: "O Macaron salva o histórico de conversas?", a: "Sim. O histórico de conversas é salvo e organizado para que você possa retomar conversas anteriores facilmente." },
  { q: "O Macaron sincroniza entre dispositivos?", a: "Sim. O histórico e as configurações sincronizam entre todos os dispositivos onde você acessa com a mesma conta." },
  { q: "O Macaron tem plano gratuito?", a: "Consulte macaron.im para informações atualizadas sobre planos disponíveis e o que está incluso no acesso gratuito." },
  { q: "Como o Macaron é diferente do ChatGPT?", a: "O Macaron prioriza a experiência visual e a organização, com interface mais elegante e foco em produtividade pessoal." },
  { q: "O Macaron permite criar coleções de prompts?", a: "Sim. Salvar e organizar prompts favoritos para reutilização é uma das funcionalidades de produtividade da plataforma." },
  { q: "O Macaron tem atalhos de teclado?", a: "Sim. Atalhos de teclado para acesso rápido ao assistente e navegação são parte da proposta de produtividade da ferramenta." },
  { q: "O Macaron pode analisar documentos?", a: "Verifique se o Macaron suporta upload de arquivos para análise. Muitos assistentes modernos suportam PDFs e documentos de texto." },
  { q: "O Macaron pode acessar a internet?", a: "Depende do modelo e plano. Verifique se a funcionalidade de busca na web está disponível na plataforma." },
  { q: "O Macaron funciona para escrita criativa?", a: "Sim. Brainstorming, rascunho de textos, criação de histórias e conteúdo criativo são casos de uso naturais para o Macaron." },
  { q: "O Macaron é adequado para estudantes?", a: "Sim. Resumo de textos, explicação de conceitos, ajuda em redações e pesquisa são usos frequentes de estudantes." },
  { q: "O Macaron tem integração com outras ferramentas?", a: "Verifique o site para informações sobre integrações disponíveis com ferramentas de produtividade e comunicação." },
  { q: "O Macaron suporta formatação Markdown?", a: "Sim. Assistentes modernos geralmente exibem e geram conteúdo formatado em Markdown, incluindo listas e cabeçalhos." },
  { q: "O Macaron pode gerar imagens?", a: "Verifique se há integração com modelos de geração de imagem na plataforma. Consulte o site para funcionalidades disponíveis." },
  { q: "O Macaron tem limite de mensagens por dia?", a: "Os limites dependem do plano. Consulte a página de preços para detalhes sobre cada nível de acesso." },
  { q: "O Macaron funciona offline?", a: "Não. Como usa modelos de IA em nuvem, o Macaron requer conexão com a internet para funcionar." },
  { q: "Posso organizar conversas por tema no Macaron?", a: "Sim. A organização do histórico por tema ou projeto é uma das funcionalidades de organização da plataforma." },
  { q: "O Macaron tem modo escuro?", a: "Apps bem projetados geralmente têm modo escuro. Verifique as configurações de aparência disponíveis no Macaron." },
  { q: "O Macaron pode ajudar com e-mails profissionais?", a: "Sim. Redigir, revisar e melhorar e-mails profissionais é um dos casos de uso mais comuns de assistentes de IA." },
  { q: "O Macaron é adequado para uso corporativo?", a: "Verifique se há planos enterprise com controles de acesso e privacidade adequados para uso corporativo." },
  { q: "O Macaron pode ser usado para aprendizado de idiomas?", a: "Sim. Conversar, praticar textos e receber correções em idiomas estrangeiros é um uso frequente de assistentes de IA." },
  { q: "O Macaron tem suporte por chat ou e-mail?", a: "Verifique os canais de suporte disponíveis no site da plataforma." },
  { q: "O Macaron exporta conversas?", a: "Verifique se a plataforma oferece exportação de conversas em texto ou outros formatos." },
  { q: "O Macaron é seguro para compartilhar informações pessoais?", a: "Leia a política de privacidade antes de compartilhar informações sensíveis. Evite dados altamente confidenciais em assistentes de IA." },
  { q: "O Macaron tem extensão para navegador?", a: "Verifique o site para disponibilidade de extensão Chrome, Firefox ou Safari para acesso rápido ao assistente." },
  { q: "Como começo a usar o Macaron?", a: "Acesse macaron.im, crie uma conta e comece sua primeira conversa. A interface intuitiva dispensa tutoriais longos." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const schemaData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <section className="mt-12 border-t border-zinc-200 pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <h2 className="text-2xl font-bold text-black mb-6">Perguntas Frequentes sobre o Macaron</h2>
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
