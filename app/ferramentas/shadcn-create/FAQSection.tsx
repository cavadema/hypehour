"use client";
import { useState } from "react";

const faqs = [
  { q: "O que é o shadcn/ui Create?", a: "shadcn/ui Create é a ferramenta oficial de geração de componentes React com IA integrada ao ecossistema shadcn/ui." },
  { q: "O shadcn/ui Create é parte oficial do shadcn/ui?", a: "Sim. É uma funcionalidade desenvolvida e mantida pela equipe oficial do shadcn/ui." },
  { q: "O que é o shadcn/ui?", a: "shadcn/ui é uma biblioteca de componentes React altamente customizável que usa Radix UI e Tailwind CSS, amplamente adotada em projetos Next.js." },
  { q: "O shadcn/ui Create gera código TypeScript?", a: "Sim. Todo o código gerado é TypeScript com tipagem adequada para as props e eventos dos componentes." },
  { q: "Os componentes gerados funcionam com Tailwind CSS?", a: "Sim. O shadcn/ui Create usa as classes e variáveis CSS do Tailwind exatamente como o shadcn/ui define." },
  { q: "O shadcn/ui Create suporta dark mode?", a: "Sim. Como herda as variáveis CSS do shadcn/ui, os componentes gerados têm suporte automático ao dark mode." },
  { q: "Os componentes gerados são acessíveis?", a: "Sim. Como usa os primitivos Radix UI do shadcn/ui, os componentes têm semântica e atributos ARIA corretos." },
  { q: "Preciso instalar o shadcn/ui antes de usar?", a: "Sim. O shadcn/ui Create gera código que depende dos componentes e estilos do shadcn/ui já instalados no projeto." },
  { q: "O shadcn/ui Create funciona com qualquer framework React?", a: "Funciona melhor com Next.js App Router e projetos Vite com React, que são os ambientes principais do shadcn/ui." },
  { q: "Posso copiar e colar o código diretamente?", a: "Sim. O código é gerado pronto para colar no projeto, com imports corretos para os componentes shadcn que usa." },
  { q: "O shadcn/ui Create tem custo?", a: "O acesso é gratuito em ui.shadcn.com/create. Verifique se há limitações de uso no site oficial." },
  { q: "O shadcn/ui Create gera componentes responsivos?", a: "Sim. Os componentes usam breakpoints do Tailwind para responsividade, seguindo as convenções do framework." },
  { q: "Posso pedir formulários complexos com validação?", a: "O shadcn/ui Create gera a estrutura do formulário. Integração com bibliotecas como react-hook-form pode ser incluída no prompt." },
  { q: "O shadcn/ui Create funciona com o registry do shadcn?", a: "Sim. Os componentes gerados seguem o padrão do registry do shadcn/ui para fácil integração ao sistema de instalação." },
  { q: "Posso usar o shadcn/ui Create para gerar tabelas de dados?", a: "Sim. Tabelas com ordenação, paginação e filtros são exemplos de componentes que podem ser gerados." },
  { q: "O shadcn/ui Create gera animações?", a: "Sim. Animações usando tailwind-animate, que o shadcn/ui usa internamente, podem ser incluídas nos componentes." },
  { q: "O código gerado usa 'use client' corretamente?", a: "Sim. A diretiva 'use client' é incluída quando o componente usa hooks ou interatividade client-side." },
  { q: "Posso pedir landing pages inteiras?", a: "Sim. Seções completas de landing page como hero, features, pricing e testimonials podem ser geradas." },
  { q: "O shadcn/ui Create funciona com Tailwind v4?", a: "Verifique a documentação do shadcn/ui Create para compatibilidade com a versão mais recente do Tailwind CSS." },
  { q: "Posso usar o resultado do shadcn/ui Create em projetos comerciais?", a: "Sim. O código gerado segue as licenças do shadcn/ui, que permitem uso em projetos comerciais." },
  { q: "O shadcn/ui Create pode gerar modais e dialogs?", a: "Sim. Modais, drawers e sheets usando os componentes Dialog e Sheet do shadcn/ui são gerados com facilidade." },
  { q: "O shadcn/ui Create gera navigation menus?", a: "Sim. Navbars, sidebars, breadcrumbs e menus de navegação são suportados na geração." },
  { q: "Posso pedir componentes com estado (useState)?", a: "Sim. O shadcn/ui Create gera componentes com gerenciamento de estado local quando o comportamento exige." },
  { q: "O shadcn/ui Create pode ajudar com o tema do shadcn?", a: "Sim. A geração pode incluir variáveis CSS de tema para customizar as cores e estilos dos componentes." },
  { q: "O código gerado precisa de revisão?", a: "Sempre revise o código gerado por IA. Para casos simples o código é direto, mas componentes complexos podem precisar de ajustes." },
  { q: "O shadcn/ui Create funciona para dashboards de admin?", a: "Sim. Componentes de dashboard como cards de métricas, gráficos e tabelas de dados são gerados com facilidade." },
  { q: "O shadcn/ui Create pode gerar forms com react-hook-form?", a: "Especifique react-hook-form e zod no prompt para incluir validação de formulários integrada nos componentes gerados." },
  { q: "O shadcn/ui Create gera testes para os componentes?", a: "A geração foca em componentes UI. Para testes, use ferramentas específicas como Testing Library após receber o componente." },
  { q: "Posso compartilhar os componentes gerados com o time?", a: "Sim. O código pode ser colado diretamente no repositório e versionado normalmente com o restante do projeto." },
  { q: "Como começo a usar o shadcn/ui Create?", a: "Acesse ui.shadcn.com/create, descreva o componente que precisa e copie o código gerado para o seu projeto Next.js." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const schemaData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <section className="mt-12 border-t border-zinc-200 pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <h2 className="text-2xl font-bold text-black mb-6">Perguntas Frequentes sobre o shadcn/ui Create</h2>
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
