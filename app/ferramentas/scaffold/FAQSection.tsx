"use client";
import { useState } from "react";

const faqs = [
  { q: "O que é o Scaffold?", a: "Scaffold é uma ferramenta de IA que gera automaticamente a estrutura completa de projetos de software a partir de uma descrição em linguagem natural." },
  { q: "O Scaffold substitui o create-react-app ou create-next-app?", a: "O Scaffold vai além: em vez de templates fixos, gera a estrutura baseada na descrição do projeto, incluindo configurações específicas." },
  { q: "Quais frameworks o Scaffold suporta?", a: "O Scaffold suporta os principais frameworks web, mobile e backend. Consulte a documentação para a lista completa de stacks suportadas." },
  { q: "O código gerado pelo Scaffold está pronto para produção?", a: "A estrutura gerada é uma base sólida, mas sempre revise e adapte ao contexto específico antes de ir para produção." },
  { q: "Como o Scaffold garante que as versões de dependências estão atualizadas?", a: "A IA usa seu conhecimento de treinamento, que pode estar desatualizado. Sempre verifique e atualize as dependências após gerar." },
  { q: "Posso especificar versões de pacotes ao descrever o projeto?", a: "Sim. Inclua as versões desejadas na descrição para que a IA as respeite na geração do projeto." },
  { q: "O Scaffold inclui configuração de testes?", a: "Sim. Bons stacks são gerados com configuração de Jest, Vitest ou outro framework de testes adequado ao stack." },
  { q: "O Scaffold configura o CI/CD automaticamente?", a: "Para alguns stacks, o Scaffold pode gerar arquivos de workflow do GitHub Actions ou outras ferramentas de CI. Verifique na documentação." },
  { q: "Posso usar o Scaffold para projetos monorepo?", a: "Sim. Descreva a estrutura monorepo desejada e o Scaffold gerará a configuração adequada para Turborepo ou similar." },
  { q: "O Scaffold gera código com TypeScript?", a: "Sim. Inclua TypeScript na descrição e o projeto gerado terá configuração completa de TS desde o início." },
  { q: "Como baixo o projeto gerado pelo Scaffold?", a: "O projeto pode ser baixado como ZIP ou clonado diretamente para o ambiente de desenvolvimento. Verifique as opções no site." },
  { q: "O Scaffold tem integração com GitHub?", a: "Verifique o site para informações sobre criação automática de repositório no GitHub a partir do projeto gerado." },
  { q: "O Scaffold é gratuito?", a: "Consulte o site scaffoldtool.com para informações atualizadas sobre preços e limites do plano gratuito." },
  { q: "Posso gerar múltiplos projetos com o Scaffold?", a: "Sim. Você pode criar quantos projetos precisar, dentro dos limites do seu plano." },
  { q: "O Scaffold inclui configuração de Docker?", a: "Para stacks que se beneficiam de containerização, o Scaffold pode gerar Dockerfile e docker-compose. Especifique na descrição." },
  { q: "Qual é o melhor prompt para gerar um projeto Next.js?", a: "Seja específico: 'Next.js 15 com TypeScript, Tailwind CSS, shadcn/ui, Prisma com PostgreSQL e autenticação com NextAuth'." },
  { q: "O Scaffold funciona para APIs REST?", a: "Sim. Descreva o tipo de API, linguagem e framework (Express, FastAPI, Hono) para gerar a estrutura adequada." },
  { q: "O Scaffold é adequado para apps mobile?", a: "Sim. React Native, Expo e outros frameworks mobile são suportados. Descreva o tipo de app e as tecnologias desejadas." },
  { q: "Como o Scaffold lida com estrutura de pastas?", a: "Gera a estrutura de pastas adequada às convenções do framework, incluindo separação de concerns recomendada." },
  { q: "O Scaffold configura lint e formatação?", a: "Sim. Projetos gerados incluem configuração de ESLint, Prettier ou Biome conforme as melhores práticas do stack." },
  { q: "Posso solicitar estrutura com autenticação já configurada?", a: "Sim. Descreva o sistema de autenticação desejado (JWT, OAuth, NextAuth) e o Scaffold incluirá a configuração básica." },
  { q: "O Scaffold funciona para projetos de machine learning?", a: "Para projetos Python com ML, descreva as bibliotecas e estrutura desejada. O suporte varia — verifique a documentação." },
  { q: "Qual a diferença entre Scaffold e GitHub Copilot?", a: "O Scaffold gera a estrutura completa do projeto do zero, enquanto o Copilot é um assistente de código para completar e sugerir dentro de um projeto existente." },
  { q: "O Scaffold gera configuração de banco de dados?", a: "Sim. Especifique o banco (PostgreSQL, MySQL, SQLite, MongoDB) e o ORM desejado para incluir na estrutura gerada." },
  { q: "Posso regenerar o projeto com ajustes sem perder o que já fiz?", a: "O Scaffold gera uma nova estrutura. Para ajustes em projetos existentes, edite os arquivos gerados diretamente." },
  { q: "O Scaffold suporta projetos multi-idioma?", a: "Sim. Especifique i18n na descrição e o Scaffold incluirá a configuração de internacionalização adequada ao framework." },
  { q: "Quanto tempo leva para gerar um projeto?", a: "A geração é rápida — geralmente segundos para a maioria dos projetos, independente da complexidade da estrutura." },
  { q: "O Scaffold tem suporte a comunidade?", a: "Verifique o site para informações sobre fóruns, Discord ou outros canais de suporte da comunidade." },
  { q: "O código gerado tem comentários explicativos?", a: "A estrutura gerada segue convenções do framework. Arquivos críticos de configuração podem ter comentários para orientação." },
  { q: "Como começo a usar o Scaffold?", a: "Acesse scaffoldtool.com, descreva o projeto que quer criar e clique em gerar. Você receberá a estrutura completa em segundos." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const schemaData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <section className="mt-12 border-t border-zinc-200 pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <h2 className="text-2xl font-bold text-black mb-6">Perguntas Frequentes sobre o Scaffold</h2>
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
