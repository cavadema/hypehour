"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
  { question: "O que é IA para design de interiores?", answer: "IA para design de interiores são ferramentas que usam inteligência artificial para criar, simular e transformar ambientes internos automaticamente." },
  { question: "Para que serve o design de interiores com IA?", answer: "Serve para visualizar ambientes, testar estilos e planejar decoração de forma rápida e prática." },
  { question: "IA para design de interiores funciona com fotos reais?", answer: "Sim. Muitas ferramentas usam fotos reais do ambiente para gerar novos layouts." },
  { question: "Existe IA para design de interiores gratuito?", answer: "Sim. Algumas ferramentas oferecem versões gratuitas ou testes limitados." },
  { question: "IA para design de interiores é indicada para leigos?", answer: "Sim. Não é necessário conhecimento técnico em arquitetura ou design." },
  { question: "IA para design de interiores substitui um designer profissional?", answer: "Não. Ela auxilia no processo criativo, mas não substitui profissionais." },
  { question: "Design de interiores com IA é preciso?", answer: "É bastante preciso para visualização e inspiração, mas não substitui medições técnicas." },
  { question: "IA para design de interiores funciona em português?", answer: "Sim. Muitas ferramentas aceitam comandos em português." },
  { question: "IA para design de interiores cria projetos completos?", answer: "Ela cria visualizações e sugestões de layout, não projetos executivos." },
  { question: "IA para design de interiores ajuda a escolher móveis?", answer: "Sim. Ela sugere móveis, cores e estilos compatíveis." },
  { question: "IA para design de interiores é usada por profissionais?", answer: "Sim. Designers usam como apoio criativo e para apresentações." },
  { question: "Design de interiores com IA funciona em apartamentos pequenos?", answer: "Sim. É muito útil para otimizar espaços reduzidos." },
  { question: "IA para design de interiores pode simular reformas?", answer: "Sim. É possível visualizar mudanças antes de executar a obra." },
  { question: "IA para design de interiores funciona online?", answer: "Sim. A maioria das ferramentas funciona via navegador." },
  { question: "Vale a pena usar IA para design de interiores?", answer: "Sim. Economiza tempo e ajuda a tomar decisões visuais melhores." },
  { question: "Qual a melhor IA para design de interiores?", answer: "Depende do objetivo, mas ferramentas modernas oferecem ótimas simulações." },
  { question: "IA consegue decorar um ambiente automaticamente?", answer: "Sim. Basta informar o estilo desejado." },
  { question: "Dá para usar IA para design de interiores sem pagar?", answer: "Sim. Algumas plataformas oferecem uso gratuito com limitações." },
  { question: "IA para design de interiores funciona em casas e apartamentos?", answer: "Sim. Ela se adapta a diferentes tipos de imóveis." },
  { question: "IA para design de interiores cria plantas baixas?", answer: "Geralmente não. O foco é visualização e decoração." },
  { question: "IA para design de interiores ajuda em reformas?", answer: "Sim. Permite visualizar mudanças antes da execução." },
  { question: "Design de interiores com IA é realista?", answer: "Sim. As imagens geradas são cada vez mais realistas." },
  { question: "IA para design de interiores funciona no celular?", answer: "Sim. Muitas ferramentas são mobile-friendly." },
  { question: "IA para design de interiores entende estilos específicos?", answer: "Sim. Estilos como moderno, minimalista e industrial são comuns." },
  { question: "IA para design de interiores pode sugerir paletas de cores?", answer: "Sim. Ela gera combinações harmoniosas." },
  { question: "IA para design de interiores é útil para imobiliárias?", answer: "Sim. É muito usada para staging virtual." },
  { question: "IA para design de interiores gera imagens 3D?", answer: "Sim. Algumas ferramentas geram visualizações tridimensionais." },
  { question: "IA para design de interiores funciona para cozinhas e banheiros?", answer: "Sim. É muito usada nesses ambientes." },
  { question: "IA para design de interiores substitui softwares profissionais?", answer: "Não. Ela complementa softwares técnicos." },
  { question: "IA para design de interiores vale a pena para profissionais?", answer: "Sim. Aumenta produtividade e melhora apresentações." },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(index < 5);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button className="flex w-full items-center justify-between py-4 text-left focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
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
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Design de Interiores</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
        ))}
      </div>
    </div>
  );
}
