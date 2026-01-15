
"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O Tactiq grava a reunião (áudio/vídeo)?",
        answer: "Não. O Tactiq transcreve a reunião em tempo real e salva como texto. Ele não armazena arquivos de áudio ou vídeo, o que é ótimo para privacidade e armazenamento."
    },
    {
        question: "Funciona em português?",
        answer: "Sim! O Tactiq suporta transcrição em português, inglês, espanhol, francês, alemão e vários outros idiomas."
    },
    {
        question: "O Tactiq é gratuito?",
        answer: "O Tactiq oferece um plano gratuito que permite transcrever até 10 reuniões por mês. Para uso ilimitado e recursos avançados, existem planos pagos."
    },
    {
        question: "Com quais plataformas ele funciona?",
        answer: "Funciona com Google Meet, Zoom e Microsoft Teams. No Google Meet, ele funciona diretamente no navegador via extensão."
    },
    {
        question: "Os outros participantes sabem que estou usando?",
        answer: "Geralmente não, a menos que você configure o bot para avisar. No Google Meet, é apenas uma extensão do seu lado. No Zoom/Teams, pode aparecer como um participante extra dependendo da configuração."
    },
    {
        question: "É seguro usar o Tactiq?",
        answer: "Sim. O Tactiq possui certificação SOC-2 Type II e não usa seus dados para treinar modelos de IA públicos. Suas transcrições são privadas."
    },
    {
        question: "Posso exportar as notas para o Notion?",
        answer: "Sim, o Tactiq tem integração nativa com Notion, Google Docs, Slack, Trello, e muitos outros, permitindo exportar resumos com um clique."
    },
    {
        question: "Ele resume a reunião sozinho?",
        answer: "Sim. Após a reunião, ele usa GPT para gerar um resumo completo, lista de tarefas (action items) e destaques da conversa."
    },
    {
        question: "Preciso instalar software no computador?",
        answer: "Apenas uma extensão de navegador (Chrome ou Edge) se você usar Google Meet. Para Zoom, pode funcionar via integração ou app desktop."
    },
    {
        question: "Posso fazer perguntas ao Tactiq sobre a reunião?",
        answer: "Sim, com o recurso 'Ask AI', você pode conversar com a transcrição para encontrar informações específicas sem reler tudo."
    }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(index < 5);

    return (
        <div className="border-b border-zinc-200 last:border-0">
            <button
                className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-black">{question}</span>
                <ChevronDownIcon
                    className={`h-5 w-5 text-zinc-700 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="text-zinc-700 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}

export default function FAQSection() {
    return (
        <div className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre o Tactiq</h2>
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden px-6">
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
