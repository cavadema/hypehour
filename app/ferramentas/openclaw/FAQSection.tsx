"use client";
import { useState } from "react";

const faqs = [
  { q: "O que é o OpenClaw?", a: "OpenClaw é uma plataforma para criar, configurar e orquestrar agentes de IA autônomos que executam tarefas complexas de forma independente." },
  { q: "Preciso saber programar para usar o OpenClaw?", a: "Conhecimento básico de APIs e prompts é útil. A plataforma tem interface amigável, mas configurar agentes eficientes exige alguma familiaridade técnica." },
  { q: "O OpenClaw suporta múltiplos agentes trabalhando juntos?", a: "Sim. A orquestração multi-agente é um dos diferenciais da plataforma, permitindo pipelines com agentes especializados colaborando." },
  { q: "Quais ferramentas os agentes podem usar?", a: "Os agentes podem usar busca na web, execução de código, APIs REST, bancos de dados e outras ferramentas configuráveis." },
  { q: "Os agentes têm memória?", a: "Sim. O OpenClaw suporta memória persistente, permitindo que agentes acumulem contexto ao longo de múltiplas execuções." },
  { q: "Como monitoro os agentes em execução?", a: "A plataforma oferece logs em tempo real e painel de monitoramento para acompanhar cada passo da execução dos agentes." },
  { q: "O OpenClaw tem plano gratuito?", a: "Verifique o site oficial para informações atualizadas sobre os planos disponíveis e limites do plano gratuito." },
  { q: "Posso acionar os agentes automaticamente?", a: "Sim. Os agentes podem ser configurados para executar em resposta a eventos, agendamentos ou chamadas de webhook." },
  { q: "O OpenClaw é seguro para dados sensíveis?", a: "Verifique as políticas de privacidade e segurança da plataforma antes de processar dados confidenciais nos agentes." },
  { q: "Qual a diferença entre OpenClaw e n8n?", a: "O n8n é focado em automação de fluxos, enquanto o OpenClaw é especializado em agentes de IA autônomos com raciocínio e tomada de decisão." },
  { q: "Posso usar o OpenClaw com qualquer LLM?", a: "Verifique no site quais modelos de LLM são suportados. Plataformas modernas geralmente suportam OpenAI, Anthropic e outros." },
  { q: "Quantos agentes posso criar?", a: "Os limites dependem do plano contratado. Consulte o site oficial para detalhes sobre cada tier." },
  { q: "O OpenClaw tem templates prontos?", a: "Sim. A plataforma oferece templates de agentes para casos de uso comuns que podem ser adaptados ao seu contexto." },
  { q: "Como o OpenClaw lida com erros nos agentes?", a: "Há mecanismos de controle de erros e alertas, mas agentes autônomos em tarefas abertas podem requerer supervisão inicial." },
  { q: "É possível integrar o OpenClaw com Slack ou e-mail?", a: "Integrações com ferramentas de comunicação são comuns em plataformas de agentes. Verifique as integrações disponíveis no site." },
  { q: "O OpenClaw funciona para atendimento ao cliente?", a: "Sim. Agentes de atendimento que respondem dúvidas com base em base de conhecimento são um caso de uso comum." },
  { q: "Posso usar o OpenClaw para processar documentos?", a: "Sim. Agentes podem ser configurados para ler, analisar e extrair informações de documentos automaticamente." },
  { q: "Como garantir que os agentes não tomem ações indesejadas?", a: "Configure permissões granulares definindo exatamente quais ações cada agente pode executar e quais são bloqueadas." },
  { q: "O OpenClaw suporta execução em paralelo?", a: "Sim. Múltiplos agentes podem executar em paralelo, acelerando pipelines que permitem processamento simultâneo." },
  { q: "Qual o custo por execução dos agentes?", a: "Os custos variam conforme o volume de tokens de LLM consumidos e o plano contratado. Execuções longas têm custo proporcional." },
  { q: "O OpenClaw tem API para integração com outros sistemas?", a: "Sim. A plataforma disponibiliza API para acionar e gerenciar agentes a partir de sistemas externos." },
  { q: "Posso criar agentes para análise de dados?", a: "Sim. Agentes de análise que processam CSVs, consultam bancos de dados e geram relatórios são casos de uso frequentes." },
  { q: "O OpenClaw funciona para pesquisa de mercado?", a: "Sim. Agentes podem ser configurados para pesquisar continuamente informações de mercado e sintetizar resultados." },
  { q: "É possível versionar as configurações dos agentes?", a: "Boas plataformas de agentes oferecem controle de versão. Consulte a documentação do OpenClaw para verificar esse recurso." },
  { q: "O OpenClaw suporta múltiplos idiomas nos agentes?", a: "Sim. Como usa LLMs modernos, os agentes podem operar em português, inglês e outros idiomas suportados pelos modelos." },
  { q: "Como o OpenClaw se compara ao AutoGPT?", a: "O OpenClaw é uma plataforma gerenciada com interface e orquestração, enquanto o AutoGPT é um projeto open-source para execução local." },
  { q: "Posso usar o OpenClaw para automação de redes sociais?", a: "Agentes podem ser configurados para postar, monitorar e responder em redes sociais via APIs oficiais das plataformas." },
  { q: "O OpenClaw tem suporte em português?", a: "Verifique o site para informações sobre suporte ao idioma na interface e na documentação da plataforma." },
  { q: "Qual o tempo médio de setup de um agente?", a: "Para casos simples, um agente pode ser configurado em minutos com templates. Casos complexos requerem mais iteração." },
  { q: "Como começar a usar o OpenClaw?", a: "Acesse openclaw.ai, crie uma conta, explore os templates disponíveis e configure seu primeiro agente com um caso de uso simples." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const schemaData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <section className="mt-12 border-t border-zinc-200 pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <h2 className="text-2xl font-bold text-black mb-6">Perguntas Frequentes sobre o OpenClaw</h2>
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
