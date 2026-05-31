"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
  { q: "O que é IA para nutricionistas?", a: "IA para nutricionistas são ferramentas de inteligência artificial que automatizam e aprimoram tarefas do dia a dia do profissional, como montagem de planos alimentares, cálculo nutricional, geração de cardápios personalizados e gestão de pacientes." },
  { q: "Quais são as melhores ferramentas de IA para nutricionistas no Brasil?", a: "Entre as melhores opções disponíveis no Brasil estão DietSystem, IPPO, Nutria by GreenTable e Dietitian.com.br, cada uma com foco diferente entre gestão de consultório, planos alimentares e uso de IA generativa." },
  { q: "A IA pode criar planos alimentares automaticamente?", a: "Sim. Ferramentas modernas com IA conseguem gerar planos alimentares completos, com substituições, distribuição de macros e ajuste de calorias em minutos, a partir dos dados e objetivos do paciente informados pelo nutricionista." },
  { q: "A IA substitui o nutricionista?", a: "Não. A inteligência artificial é uma ferramenta de apoio que aumenta a produtividade do profissional. A análise clínica, o diagnóstico nutricional e a conduta individualizada continuam sendo de responsabilidade exclusiva do nutricionista." },
  { q: "Quais tarefas a IA pode automatizar na nutrição?", a: "A IA pode automatizar o cálculo de macros e micros, a geração de cardápios, as substituições alimentares, a produção de relatórios de evolução, o agendamento de consultas e o envio de materiais para pacientes." },
  { q: "Software de nutrição com IA vale a pena?", a: "Sim, especialmente para nutricionistas com alta demanda de pacientes. A automação de tarefas repetitivas reduz o tempo por atendimento, aumenta a capacidade da agenda e melhora a qualidade dos planos alimentares entregues." },
  { q: "O software de IA para nutricionistas funciona online?", a: "A maioria das ferramentas modernas funciona via web, acessível de qualquer dispositivo com internet. Algumas também possuem aplicativos móveis para facilitar o acesso durante as consultas." },
  { q: "A IA calcula VET e TMB para os pacientes?", a: "Sim. Os melhores softwares para nutricionistas calculam automaticamente VET (Valor Energético Total), TMB (Taxa Metabólica Basal) e outras referências nutricionais com base nos dados antropométricos inseridos." },
  { q: "Posso usar IA para nutrição no atendimento online?", a: "Sim. A maioria das plataformas é totalmente adequada para atendimento online, permitindo o envio de planos alimentares por e-mail ou WhatsApp e o acompanhamento remoto dos pacientes." },
  { q: "O uso de IA na nutrição é permitido pelo CFN?", a: "O uso de ferramentas tecnológicas e softwares como apoio à prática profissional é permitido, desde que a responsabilidade clínica e técnica permaneça com o nutricionista registrado no CRN/CFN. Consulte as resoluções vigentes para detalhes." },
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
        <ChevronDownIcon className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
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
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
  };

  return (
    <div className="mt-12 mb-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Nutricionistas</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.q} answer={faq.a} index={index} />
        ))}
      </div>
    </div>
  );
}
