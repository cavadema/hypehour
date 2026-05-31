"use client";
import { useState } from "react";

const faqs = [
  { q: "O que é o Soloist AI?", a: "Soloist AI é um assistente de desenvolvimento com IA projetado para desenvolvedores solo, funcionando como um par de programação disponível 24 horas." },
  { q: "Por que o nome Soloist?", a: "O nome remete ao músico solista que toca sozinho com maestria — o assistente permite que um desenvolvedor solo construa com a qualidade de um time." },
  { q: "O Soloist AI substitui um desenvolvedor humano?", a: "Não. O Soloist AI amplifica as capacidades de um desenvolvedor solo, mas não substitui a criatividade e julgamento humano." },
  { q: "Como o Soloist mantém contexto do projeto?", a: "O Soloist armazena contexto persistente do projeto ao longo das sessões, evitando re-explicações constantes a cada nova conversa." },
  { q: "O Soloist funciona com qualquer linguagem de programação?", a: "Sim. Como usa LLMs modernos, suporta as principais linguagens: JavaScript, TypeScript, Python, Go, Rust, Java e outras." },
  { q: "O Soloist pode revisar meu código?", a: "Sim. Análise de código existente para identificar bugs, problemas de segurança e oportunidades de melhoria é uma das principais funcionalidades." },
  { q: "O Soloist gera testes automatizados?", a: "Sim. Você pode pedir ao Soloist para gerar testes unitários e de integração para o código existente ou novo." },
  { q: "Como o Soloist ajuda com debugging?", a: "Descreva o erro ou cole o stack trace e o Soloist analisa a causa raiz e sugere correções explicando o raciocínio." },
  { q: "O Soloist é melhor que o GitHub Copilot?", a: "São complementares. O Copilot autocompleta código inline no editor; o Soloist é um parceiro conversacional para problemas mais complexos." },
  { q: "O Soloist AI tem plano gratuito?", a: "Consulte soloist.ai para informações atualizadas sobre planos e limites do tier gratuito." },
  { q: "Posso usar o Soloist para migrar código legado?", a: "Sim. Migração de código entre frameworks, versões de linguagem e padrões arquiteturais é um caso de uso bem suportado." },
  { q: "O Soloist pode me ajudar com arquitetura do sistema?", a: "Sim. Discuta trade-offs de diferentes abordagens arquiteturais e o Soloist apresenta vantagens, desvantagens e recomendações." },
  { q: "O Soloist funciona para projetos React/Next.js?", a: "Sim. Frameworks populares como React, Next.js, Vue e Angular são bem suportados pela base de conhecimento do modelo." },
  { q: "Como o Soloist lida com código confidencial?", a: "Verifique a política de privacidade do Soloist antes de compartilhar código proprietário ou dados sensíveis." },
  { q: "O Soloist suporta integração com VSCode?", a: "Verifique o site para informações sobre extensões ou integrações com editores de código disponíveis." },
  { q: "Posso usar o Soloist para aprender novas tecnologias?", a: "Sim. Pedir que o Soloist explique conceitos, padrões e tecnologias com exemplos práticos é um excelente caso de uso." },
  { q: "O Soloist pode gerar queries SQL?", a: "Sim. Descreva o que precisa consultar e o Soloist gera e explica queries SQL adequadas ao seu banco de dados." },
  { q: "Como o Soloist difere do ChatGPT para desenvolvimento?", a: "O Soloist é especializado em desenvolvimento, com contexto persistente do projeto e foco em tarefas técnicas específicas." },
  { q: "O Soloist pode ajudar com documentação?", a: "Sim. Geração de READMEs, docstrings, comentários e documentação de API são funcionalidades comuns de assistentes de código." },
  { q: "É possível usar o Soloist em dispositivos móveis?", a: "Verifique se há app mobile ou se o acesso web é responsivo para uso em tablets e smartphones." },
  { q: "O Soloist funciona offline?", a: "Não. Como usa LLMs em nuvem, requer conexão com a internet para funcionar." },
  { q: "O Soloist pode ajudar com otimização de performance?", a: "Sim. Análise de gargalos de performance e sugestões de otimização são solicitações frequentes para assistentes de código." },
  { q: "Como o Soloist lida com problemas de segurança no código?", a: "O Soloist pode identificar vulnerabilidades comuns (injeção SQL, XSS, etc.) durante a revisão de código quando solicitado." },
  { q: "O Soloist suporta projetos com múltiplos arquivos?", a: "Compartilhe o contexto relevante dos arquivos e o Soloist trabalhará com essa visão. Limites de contexto podem se aplicar a projetos muito grandes." },
  { q: "Posso usar o Soloist para code review de PRs?", a: "Sim. Cole o diff ou descreva as mudanças e peça uma revisão crítica com foco em qualidade e possíveis problemas." },
  { q: "O Soloist funciona para backend Node.js?", a: "Sim. Express, Fastify, NestJS e outros frameworks Node.js são bem suportados." },
  { q: "Como o Soloist ajuda fundadores técnicos?", a: "Fundadores solo podem usar o Soloist como CTO virtual para decisões técnicas, revisão de código e aceleração do desenvolvimento." },
  { q: "O Soloist pode ajudar a escrever APIs REST?", a: "Sim. Definição de rotas, middleware, validação e documentação de APIs são funcionalidades bem suportadas." },
  { q: "O Soloist aprende com o meu estilo de código?", a: "Com contexto persistente, o Soloist se adapta às convenções e preferências compartilhadas ao longo das sessões." },
  { q: "Como começo a usar o Soloist AI?", a: "Acesse soloist.ai, crie uma conta e comece compartilhando o contexto do seu projeto atual para a primeira sessão de pair programming." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const schemaData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <section className="mt-12 border-t border-zinc-200 pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <h2 className="text-2xl font-bold text-black mb-6">Perguntas Frequentes sobre o Soloist AI</h2>
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
