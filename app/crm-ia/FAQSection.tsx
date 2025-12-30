"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
  { question: "O que é CRM com IA?", answer: "CRM com IA é um sistema de gestão de clientes que usa inteligência artificial para automatizar processos, analisar dados e melhorar decisões comerciais." },
  { question: "Como funciona a IA para CRM?", answer: "A IA analisa dados de clientes, histórico de vendas e interações para gerar insights, previsões e automações." },
  { question: "Quais são os benefícios do CRM com inteligência artificial?", answer: "Automação de tarefas, melhor previsibilidade de vendas, personalização de atendimento e aumento de conversão." },
  { question: "IA para CRM ajuda a vender mais?", answer: "Sim. Ela identifica leads mais qualificados e sugere as melhores ações de venda." },
  { question: "Automação de CRM com IA substitui vendedores?", answer: "Não. Ela apoia o time comercial, mas não substitui o fator humano." },
  { question: "CRM com IA é indicado para pequenas empresas?", answer: "Sim. Existem CRMs com IA acessíveis para PMEs." },
  { question: "IA para CRM funciona em vendas e marketing?", answer: "Sim. Ela integra dados de marketing, vendas e atendimento." },
  { question: "CRM inteligente melhora o relacionamento com clientes?", answer: "Sim. Ele personaliza comunicações e acompanha o ciclo do cliente." },
  { question: "CRM com IA pode prever churn?", answer: "Sim. A IA identifica sinais de cancelamento antecipadamente." },
  { question: "CRM com inteligência artificial gera relatórios automáticos?", answer: "Sim. Dashboards e relatórios são gerados em tempo real." },
  { question: "IA para CRM ajuda no atendimento ao cliente?", answer: "Sim. Ela pode integrar chatbots e respostas automáticas." },
  { question: "CRM com IA funciona integrado a outros sistemas?", answer: "Sim. Ele se conecta a ERPs, ferramentas de marketing e canais de comunicação." },
  { question: "Automação de CRM com IA é difícil de configurar?", answer: "Não. Muitos sistemas são no-code ou low-code." },
  { question: "CRM com IA é seguro?", answer: "Sim, desde que siga boas práticas de segurança e LGPD." },
  { question: "Vale a pena investir em CRM com IA?", answer: "Sim. Ele aumenta produtividade e eficiência comercial." },
  { question: "Qual o melhor CRM com IA atualmente?", answer: "Depende do porte da empresa e objetivos, mas soluções modernas já incluem IA nativa." },
  { question: "IA para CRM é cara?", answer: "Não necessariamente. Há planos acessíveis e escaláveis." },
  { question: "CRM com IA funciona para e-commerce?", answer: "Sim. Ele ajuda na retenção e personalização de ofertas." },
  { question: "Automação de CRM com IA precisa de programador?", answer: "Não. Muitas automações são feitas por interface visual." },
  { question: "IA no CRM substitui planilhas?", answer: "Sim. O CRM centraliza dados e automatiza análises." },
  { question: "CRM inteligente ajuda na qualificação de leads?", answer: "Sim. Ele classifica leads com base em comportamento." },
  { question: "IA para CRM pode sugerir próximas ações?", answer: "Sim. A IA recomenda follow-ups e abordagens." },
  { question: "CRM com IA melhora o funil de vendas?", answer: "Sim. Ele identifica gargalos e oportunidades." },
  { question: "IA para CRM funciona em tempo real?", answer: "Sim. Muitos sistemas atualizam dados instantaneamente." },
  { question: "CRM com inteligência artificial ajuda no pós-venda?", answer: "Sim. Ele acompanha satisfação e oportunidades de upsell." },
  { question: "Automação de CRM com IA reduz custos?", answer: "Sim. Menos tarefas manuais e maior eficiência." },
  { question: "CRM com IA é indicado para equipes remotas?", answer: "Sim. Centraliza informações e comunicação." },
  { question: "IA para CRM ajuda no marketing personalizado?", answer: "Sim. Ela segmenta públicos automaticamente." },
  { question: "CRM com IA pode integrar WhatsApp e e-mail?", answer: "Sim. Muitos CRMs já oferecem essas integrações." },
  { question: "CRM com IA vale a pena para empresas em crescimento?", answer: "Sim. Ele escala junto com o negócio." },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(index < 5);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-900">{question}</span>
        <ChevronDownIcon
          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"}`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="mt-12 mb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre CRM com IA</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
