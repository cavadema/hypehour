"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O Speechify é gratuito?",
        answer: "Sim, o Speechify oferece um plano gratuito que permite ouvir textos com vozes padrão. Para acesso a vozes premium HD, velocidades mais altas e recursos avançados, é necessário assinar o plano Premium."
    },
    {
        question: "Quais idiomas o Speechify suporta?",
        answer: "O Speechify suporta mais de 30 idiomas, incluindo Português (Brasil e Portugal), Inglês, Espanhol, Francês, Alemão, Italiano, entre outros, com diversas opções de vozes para cada idioma."
    },
    {
        question: "Posso usar o Speechify no celular e no computador?",
        answer: "Sim! O Speechify é multiplataforma. Você pode usá-lo através da extensão para Chrome no computador, aplicativo web, ou baixar os aplicativos para iOS (iPhone/iPad) e Android. Sua conta sincroniza o progresso entre todos os dispositivos."
    },
    {
        question: "O Speechify lê arquivos PDF?",
        answer: "Sim, o Speechify é excelente para ler PDFs. Você pode fazer upload de arquivos PDF, documentos do Word, e-mails e até fotos de páginas de livros físicos para que ele leia em voz alta."
    },
    {
        question: "Como funciona a leitura rápida do Speechify?",
        answer: "O Speechify permite ajustar a velocidade de leitura em até 4.5x (900 palavras por minuto). A ferramenta destaca a palavra que está sendo lida no momento, ajudando você a acompanhar visualmente e reter mais informação em menos tempo."
    },
    {
        question: "O Speechify ajuda quem tem dislexia ou TDAH?",
        answer: "Sim, o Speechify foi originalmente criado pelo fundador (que tem dislexia) para ajudar na leitura. A combinação de áudio e destaque visual ajuda significativamente pessoas com dislexia, TDAH e dificuldades de visão a consumirem conteúdo de texto com mais facilidade."
    },
    {
        question: "As vozes soam robóticas?",
        answer: "Não no plano Premium. O Speechify utiliza IA avançada para criar vozes 'Human-sounding' (que soam humanas) e naturais. Muitas vozes são indistinguíveis de uma narração humana real. O plano gratuito possui vozes mais básicas."
    },
    {
        question: "Posso baixar o áudio para ouvir offline?",
        answer: "Sim, com o plano Premium você pode baixar os áudios gerados a partir dos seus textos para ouvir offline em qualquer lugar, como se fosse um podcast ou audiobook."
    }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(index < 3); // Primeiros 3 abertos por padrão

    return (
        <div className="border-b border-zinc-200 last:border-0">
            <button
                className="flex w-full items-center justify-between py-4 text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-black group-hover:text-zinc-600 transition-colors">{question}</span>
                <ChevronDownIcon
                    className={`h-5 w-5 text-zinc-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-48 opacity-100 mb-4" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="text-zinc-600 leading-relaxed text-sm">{answer}</p>
            </div>
        </div>
    );
}

export default function FAQSection() {
    return (
        <section className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre o Speechify</h2>
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
        </section>
    );
}
