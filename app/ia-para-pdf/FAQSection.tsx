"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "O que é IA para PDFs?",
    answer: "IA para PDFs são ferramentas que usam inteligência artificial para ler, resumir, traduzir, criar e analisar arquivos em PDF automaticamente."
  },
  {
    question: "Para que serve uma IA para PDF?",
    answer: "Ela serve para facilitar tarefas como leitura, resumo, extração de informações e edição de PDFs."
  },
  {
    question: "O que é uma IA que resume PDF?",
    answer: "É uma ferramenta que analisa o conteúdo do PDF e gera um resumo automático dos principais pontos."
  },
  {
    question: "IA para PDFs funciona com arquivos grandes?",
    answer: "Sim. Muitas ferramentas conseguem processar PDFs longos, como livros e relatórios."
  },
  {
    question: "Existe leitor de PDF com IA?",
    answer: "Sim. Um leitor de PDF IA permite fazer perguntas sobre o documento e obter respostas instantâneas."
  },
  {
    question: "IA para traduzir PDF mantém a formatação?",
    answer: "Na maioria dos casos, sim. A IA traduz o texto preservando a estrutura do arquivo."
  },
  {
    question: "IA para criação de PDF funciona como editor?",
    answer: "Sim. Algumas ferramentas criam PDFs do zero ou a partir de texto e outros arquivos."
  },
  {
    question: "IA para PDFs é gratuita?",
    answer: "Existem opções gratuitas, geralmente com limites de uso."
  },
  {
    question: "Usar IA para PDFs é seguro?",
    answer: "Sim, desde que você evite enviar documentos sensíveis para ferramentas não confiáveis."
  },
  {
    question: "IA para PDFs funciona em português?",
    answer: "Sim. Muitas ferramentas já oferecem suporte ao português."
  },
  {
    question: "IA para PDF ajuda estudantes?",
    answer: "Sim. É muito usada para resumir artigos, livros e materiais acadêmicos."
  },
  {
    question: "IA para PDFs é útil para empresas?",
    answer: "Sim. Ajuda em contratos, relatórios, propostas e documentos internos."
  },
  {
    question: "IA que resume PDF substitui a leitura completa?",
    answer: "Não totalmente, mas ajuda a entender rapidamente os pontos principais."
  },
  {
    question: "IA para PDFs pode extrair dados automaticamente?",
    answer: "Sim. Ela identifica textos, tabelas e informações relevantes."
  },
  {
    question: "Vale a pena usar IA para PDFs?",
    answer: "Sim. Economiza tempo e facilita o trabalho com documentos."
  },
  {
    question: "Qual a melhor IA para resumir PDF?",
    answer: "Depende do tipo de documento, mas ferramentas modernas já oferecem resumos precisos."
  },
  {
    question: "Dá para conversar com um PDF usando IA?",
    answer: "Sim. Alguns leitores de PDF IA permitem fazer perguntas ao documento."
  },
  {
    question: "IA para PDF funciona com PDFs escaneados?",
    answer: "Sim, desde que tenha OCR integrado."
  },
  {
    question: "IA consegue traduzir PDF automaticamente?",
    answer: "Sim. A IA identifica o idioma e traduz o conteúdo."
  },
  {
    question: "IA para traduzir PDF é gratuita?",
    answer: "Algumas ferramentas oferecem tradução gratuita com limitações."
  },
  {
    question: "IA para PDFs funciona offline?",
    answer: "Geralmente não. A maioria depende de conexão com a internet."
  },
  {
    question: "IA pode resumir PDF em poucos segundos?",
    answer: "Sim. O resumo costuma ser gerado rapidamente."
  },
  {
    question: "Leitor de PDF IA substitui o Adobe Reader?",
    answer: "Não. Ele complementa, oferecendo recursos inteligentes."
  },
  {
    question: "IA para PDFs funciona em dispositivos móveis?",
    answer: "Sim. Muitas ferramentas são acessíveis via navegador no celular."
  },
  {
    question: "IA para PDFs ajuda em contratos jurídicos?",
    answer: "Sim. É muito usada para leitura e análise de contratos."
  },
  {
    question: "IA para criação de PDF pode gerar relatórios automaticamente?",
    answer: "Sim. Basta informar os dados ou o texto desejado."
  },
  {
    question: "IA para PDF entende tabelas e gráficos?",
    answer: "Sim. Muitas ferramentas analisam tabelas e dados estruturados."
  },
  {
    question: "IA para PDFs pode corrigir erros no texto?",
    answer: "Sim. Ela pode sugerir correções e melhorias."
  },
  {
    question: "IA para PDFs funciona para equipes?",
    answer: "Sim. Especialmente quando integrada a ferramentas colaborativas."
  },
  {
    question: "IA para PDFs vale a pena para profissionais?",
    answer: "Sim. É útil para advogados, estudantes, analistas e gestores."
  }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(index < 5); // Primeiros 5 abertos por padrão

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
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para PDFs</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
        ))}
      </div>
    </div>
  );
}
