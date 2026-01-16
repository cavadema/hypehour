"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é IA para ata de reunião?",
        answer: "IA para ata de reunião são ferramentas que usam inteligência artificial para registrar, organizar e gerar atas automaticamente a partir de reuniões."
    },
    {
        question: "Para que serve uma IA para fazer ata de reunião?",
        answer: "Ela serve para criar atas completas com pautas, decisões e responsáveis sem precisar escrever manualmente."
    },
    {
        question: "IA para fazer ata de reunião funciona com áudio?",
        answer: "Sim. Muitas ferramentas utilizam gravações de áudio para gerar atas automaticamente."
    },
    {
        question: "Existe gravador de reunião com IA?",
        answer: "Sim. Existem gravadores de reunião com IA que capturam o áudio e geram transcrições e resumos."
    },
    {
        question: "IA para ata de reunião funciona com reuniões online?",
        answer: "Sim. Ela pode ser usada em reuniões no Zoom, Google Meet e Microsoft Teams."
    },
    {
        question: "Como fazer ata de reunião com IA?",
        answer: "Basta gravar a reunião ou enviar a transcrição para a ferramenta de IA, que gera a ata automaticamente."
    },
    {
        question: "IA para ata de reunião identifica participantes?",
        answer: "Sim. Algumas ferramentas reconhecem falas e associam ações aos participantes."
    },
    {
        question: "IA para ata de reunião funciona em português?",
        answer: "Sim. Muitas ferramentas oferecem suporte ao português."
    },
    {
        question: "IA para ata de reunião é usada por empresas?",
        answer: "Sim. É muito usada por equipes corporativas, RH, gestores e times remotos."
    },
    {
        question: "IA que grava reunião e faz resumo é confiável?",
        answer: "Sim. Ela ajuda a capturar os principais pontos da reunião com boa precisão."
    },
    {
        question: "IA para ata de reunião substitui o secretário da reunião?",
        answer: "Não. Ela automatiza o registro, mas a revisão humana ainda é importante."
    },
    {
        question: "IA para ata de reunião gera atas padronizadas?",
        answer: "Sim. Muitas ferramentas permitem usar modelos prontos de ata."
    },
    {
        question: "IA para ata de reunião funciona para reuniões presenciais?",
        answer: "Sim. Basta gravar o áudio da reunião presencial."
    },
    {
        question: "IA para ata de reunião melhora a produtividade?",
        answer: "Sim. Reduz tempo gasto com anotações e documentação."
    },
    {
        question: "Vale a pena usar IA para fazer ata de reunião?",
        answer: "Sim. É uma solução prática para economizar tempo e evitar erros."
    },
    {
        question: "Qual a melhor IA para fazer ata de reunião?",
        answer: "Depende do tipo de reunião, mas ferramentas modernas oferecem ótimos resultados."
    },
    {
        question: "IA para ata de reunião é gratuita?",
        answer: "Sim. Existem opções de IA para ata de reunião gratuito, geralmente com limites de uso."
    },
    {
        question: "Gravador de reunião com IA funciona automaticamente?",
        answer: "Sim. Ele grava, transcreve e resume a reunião sem intervenção manual."
    },
    {
        question: "IA consegue resumir uma reunião longa?",
        answer: "Sim. Ela identifica os pontos mais importantes da conversa."
    },
    {
        question: "IA para ata de reunião funciona em tempo real?",
        answer: "Algumas ferramentas geram resumos enquanto a reunião acontece."
    },
    {
        question: "IA para ata de reunião funciona offline?",
        answer: "Geralmente não. A maioria depende de conexão com a internet."
    },
    {
        question: "IA que grava reunião e faz resumo é segura?",
        answer: "Sim, desde que você use ferramentas confiáveis e cuide de dados sensíveis."
    },
    {
        question: "IA para ata de reunião funciona em celular?",
        answer: "Sim. Muitas ferramentas funcionam via navegador ou app."
    },
    {
        question: "IA para ata de reunião entende termos técnicos?",
        answer: "Sim. Ela aprende com o contexto e vocabulário usado."
    },
    {
        question: "IA para ata de reunião serve para reuniões jurídicas?",
        answer: "Sim. É usada para registrar decisões e encaminhamentos."
    },
    {
        question: "IA para ata de reunião pode exportar o documento?",
        answer: "Sim. Normalmente permite exportar em PDF, Word ou Google Docs."
    },
    {
        question: "IA para ata de reunião funciona para equipes remotas?",
        answer: "Sim. É ideal para times distribuídos."
    },
    {
        question: "IA para ata de reunião identifica tarefas e responsáveis?",
        answer: "Sim. Algumas ferramentas destacam ações e responsáveis automaticamente."
    },
    {
        question: "IA para ata de reunião substitui gravações manuais?",
        answer: "Sim. Ela automatiza todo o processo de registro."
    },
    {
        question: "IA para ata de reunião vale a pena para empresas pequenas?",
        answer: "Sim. Ajuda pequenas equipes a manter organização e histórico das reuniões."
    }
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
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
                    }`}
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
        "mainEntity": faqs.map(faq => ({
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Ata de Reunião</h2>
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
