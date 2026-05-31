"use client";
import { useState } from "react";

const faqs = [
  { q: "O que é o Gobii AI?", a: "Gobii AI é uma plataforma no-code para criar agentes de IA personalizados que automatizam tarefas, respondem perguntas e integram com seus sistemas." },
  { q: "Preciso programar para usar o Gobii?", a: "Não. O Gobii é uma plataforma no-code projetada para que qualquer pessoa crie agentes de IA sem escrever código." },
  { q: "Como o Gobii responde perguntas dos usuários?", a: "O agente usa a base de conhecimento que você carregou (documentos, PDFs, URLs) para gerar respostas precisas e contextualizadas." },
  { q: "Que tipos de documentos posso carregar no Gobii?", a: "O Gobii aceita PDFs, documentos de texto, páginas da web e outros formatos para compor a base de conhecimento do agente." },
  { q: "O Gobii pode ser incorporado no meu site?", a: "Sim. O agente pode ser incorporado como widget no site através de um snippet de código simples." },
  { q: "O Gobii suporta WhatsApp?", a: "Verifique as integrações disponíveis no site. Muitas plataformas de agentes oferecem integração com WhatsApp Business API." },
  { q: "Como personalizo a personalidade do agente?", a: "Na configuração do agente você define nome, tom de comunicação, restrições de assunto e estilo de resposta." },
  { q: "O Gobii escala para humanos quando necessário?", a: "Sim. Você pode configurar regras de escalada automática para atendentes humanos quando o agente não consegue resolver." },
  { q: "Posso ver as conversas do agente?", a: "Sim. O dashboard de conversas mostra todas as interações, permitindo análise e identificação de lacunas na base de conhecimento." },
  { q: "O Gobii tem plano gratuito?", a: "Consulte o site gobii.ai para informações atualizadas sobre planos e limites disponíveis." },
  { q: "Quanto tempo leva para criar um agente no Gobii?", a: "Para casos simples, um agente pode ser configurado em minutos. Quanto mais rica a base de conhecimento, melhor o resultado." },
  { q: "Posso ter múltiplos agentes na mesma conta?", a: "Depende do plano. Verifique o site para informações sobre limites de agentes por conta." },
  { q: "O Gobii suporta múltiplos idiomas?", a: "Como usa LLMs modernos, o agente pode responder em português, inglês e outros idiomas. Verifique as limitações na documentação." },
  { q: "Como o Gobii mantém as respostas atualizadas?", a: "Atualize a base de conhecimento carregando novos documentos ou editando as fontes existentes quando as informações mudarem." },
  { q: "O agente do Gobii pode fazer perguntas de volta?", a: "Sim. O agente pode fazer perguntas para coletar informações necessárias antes de fornecer uma resposta." },
  { q: "Posso integrar o Gobii com meu CRM?", a: "Verifique as integrações disponíveis no site. Integrações via webhook ou API são comuns em plataformas de agentes." },
  { q: "O Gobii tem limite de mensagens por mês?", a: "Os limites variam por plano. Consulte a página de preços do site para detalhes." },
  { q: "Como o Gobii lida com perguntas fora do escopo?", a: "Você pode configurar o agente para informar que não sabe a resposta ou escalar para um humano em vez de inventar respostas." },
  { q: "O Gobii pode coletar informações de formulários?", a: "Sim. O agente pode conduzir conversas estruturadas para coletar dados como nome, e-mail e outras informações relevantes." },
  { q: "É possível fazer testes antes de publicar o agente?", a: "Sim. Plataformas no-code geralmente oferecem ambiente de preview para testar o agente antes de colocar em produção." },
  { q: "O Gobii funciona 24 horas por dia?", a: "Sim. Agentes de IA ficam disponíveis continuamente, sem precisar de operadores humanos para responder." },
  { q: "Como meço a satisfação dos usuários com o agente?", a: "O dashboard pode incluir métricas de satisfação, taxa de resolução e outras métricas de performance do agente." },
  { q: "Posso exportar os dados das conversas?", a: "Verifique se a plataforma oferece exportação de histórico de conversas para análise em outras ferramentas." },
  { q: "O Gobii pode enviar notificações proativas?", a: "Dependendo das integrações configuradas, o agente pode enviar mensagens proativas via canais conectados." },
  { q: "Qual a diferença entre Gobii e Chatbase?", a: "Ambos são plataformas no-code para agentes de IA. Compare funcionalidades, preços e integrações de cada um para o seu caso." },
  { q: "O Gobii suporta múltiplos canais simultaneamente?", a: "Sim. Um agente pode estar integrado ao site, WhatsApp e outros canais ao mesmo tempo, respondendo de forma consistente." },
  { q: "Como inicio o plano gratuito do Gobii?", a: "Acesse gobii.ai, crie uma conta gratuita e siga o wizard de configuração para criar seu primeiro agente." },
  { q: "O Gobii tem API para integração avançada?", a: "Verifique a documentação para informações sobre API disponível para integrações customizadas." },
  { q: "Posso treinar o agente com exemplos de conversas?", a: "Além de documentos, alguns agentes permitem adicionar exemplos de pergunta e resposta para refinar o comportamento." },
  { q: "O Gobii funciona bem para e-commerce?", a: "Sim. Agentes de suporte pós-venda, FAQ de produtos e qualificação de leads são casos de uso frequentes em e-commerce." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const schemaData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <section className="mt-12 border-t border-zinc-200 pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <h2 className="text-2xl font-bold text-black mb-6">Perguntas Frequentes sobre o Gobii AI</h2>
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
