"use client";
import { useState } from "react";

const faqs = [
  { q: "O que é o Tonkotsu AI?", a: "Tonkotsu AI é uma plataforma visual para construir fluxos de agentes de IA com suporte a ferramentas, memória e execução autônoma." },
  { q: "Por que o nome Tonkotsu?", a: "O nome remete ao ramen tonkotsu, famoso pela profundidade e riqueza do caldo — refletindo agentes com contexto profundo e capacidade robusta." },
  { q: "Preciso de experiência em IA para usar o Tonkotsu?", a: "Conhecimento básico de como funcionam LLMs e APIs é útil, mas a interface visual reduz significativamente a barreira de entrada." },
  { q: "O Tonkotsu AI tem interface visual?", a: "Sim. A interface de fluxos visuais permite criar comportamentos de agentes arrastando e conectando blocos sem escrever código de orquestração." },
  { q: "Que tipo de memória os agentes do Tonkotsu têm?", a: "O Tonkotsu suporta memória de curto prazo (sessão) e longo prazo (persistente), permitindo agentes que aprendem com execuções anteriores." },
  { q: "Posso conectar o Tonkotsu a APIs externas?", a: "Sim. Ferramentas de conexão com APIs REST, bancos de dados e outros serviços podem ser configuradas diretamente na interface." },
  { q: "Quais gatilhos de execução o Tonkotsu suporta?", a: "Os agentes podem ser acionados por eventos, agendamentos, webhooks ou chamadas manuais via API." },
  { q: "A execução dos agentes é síncrona ou assíncrona?", a: "O Tonkotsu suporta execução assíncrona, permitindo que agentes rodem em background sem bloquear outras operações." },
  { q: "O Tonkotsu tem mecanismo de retry automático?", a: "Sim. Há lógica de retry e fallback para lidar com falhas em ferramentas ou APIs externas automaticamente." },
  { q: "Qual a diferença entre Tonkotsu e n8n?", a: "O n8n foca em automação de fluxos com nós predefinidos, enquanto o Tonkotsu é especializado em agentes de IA com raciocínio e memória." },
  { q: "O Tonkotsu AI tem plano gratuito?", a: "Consulte o site oficial tonkotsu.ai para informações atualizadas sobre planos e limites do tier gratuito." },
  { q: "Como depuro erros em um fluxo de agente?", a: "Os logs detalhados de execução mostram cada passo do agente, facilitando a identificação de onde ocorreu o problema." },
  { q: "Posso criar agentes de pesquisa com o Tonkotsu?", a: "Sim. Agentes de pesquisa com acesso a ferramentas de busca na web são um dos casos de uso mais comuns na plataforma." },
  { q: "O Tonkotsu suporta processamento de arquivos?", a: "Sim. Agentes podem ser configurados para ler e processar documentos, planilhas e outros formatos de arquivo." },
  { q: "Quantos agentes posso ter ativos simultaneamente?", a: "Os limites dependem do plano contratado. Verifique o site para detalhes sobre cada nível de assinatura." },
  { q: "Os agentes do Tonkotsu podem executar código?", a: "Sim. Ferramentas de execução de código (Python, JavaScript) podem ser configuradas como parte do fluxo do agente." },
  { q: "É possível monitorar o custo de tokens por agente?", a: "Boas plataformas de agentes oferecem visibilidade de consumo de tokens. Verifique se essa funcionalidade está disponível no Tonkotsu." },
  { q: "O Tonkotsu AI é adequado para empresas?", a: "Sim. A plataforma foi projetada para uso profissional com suporte a equipes e controles de acesso." },
  { q: "Posso usar o Tonkotsu para atendimento ao cliente?", a: "Sim. Agentes de atendimento com base de conhecimento e escalada para humanos são configuráveis na plataforma." },
  { q: "O Tonkotsu tem integrações com Slack ou Teams?", a: "Verifique as integrações disponíveis no site. Plataformas de agentes frequentemente suportam integração com ferramentas de comunicação." },
  { q: "Posso clonar ou compartilhar fluxos de agentes?", a: "Boas plataformas permitem exportar e importar fluxos. Consulte a documentação para verificar essa funcionalidade." },
  { q: "O Tonkotsu funciona com diferentes LLMs?", a: "Verifique quais modelos são suportados no site. Plataformas modernas geralmente suportam OpenAI, Anthropic, Google e outros." },
  { q: "Como começo com o Tonkotsu AI?", a: "Acesse tonkotsu.ai, crie uma conta e comece com um fluxo simples usando um template existente antes de criar fluxos complexos." },
  { q: "O Tonkotsu tem documentação em português?", a: "Verifique o site oficial para informações sobre suporte ao idioma na documentação." },
  { q: "Os agentes podem gerar e enviar e-mails automaticamente?", a: "Sim. Com a integração correta, agentes podem redigir e enviar e-mails como parte de um fluxo automatizado." },
  { q: "É possível usar o Tonkotsu para qualificação de leads?", a: "Sim. Agentes podem pesquisar, analisar e qualificar leads automaticamente com base em critérios configurados." },
  { q: "O Tonkotsu AI tem suporte a webhooks de saída?", a: "Sim. Os resultados dos agentes podem ser enviados para sistemas externos via webhook quando a execução conclui." },
  { q: "Posso colocar condições no fluxo do agente?", a: "Sim. Blocos de decisão permitem criar fluxos condicionais onde o caminho muda conforme os resultados intermediários." },
  { q: "O Tonkotsu escala para grandes volumes de execução?", a: "A infraestrutura gerenciada permite escalar as execuções conforme o plano contratado. Consulte os limites no site." },
  { q: "Como garantir a segurança dos dados processados pelos agentes?", a: "Verifique a política de segurança e privacidade do Tonkotsu antes de processar dados sensíveis nos agentes." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const schemaData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <section className="mt-12 border-t border-zinc-200 pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <h2 className="text-2xl font-bold text-black mb-6">Perguntas Frequentes sobre o Tonkotsu AI</h2>
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
