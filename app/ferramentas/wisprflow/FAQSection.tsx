"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é o Wispr Flow?",
        answer: "Wispr Flow é uma aplicação de ditado por voz baseada em IA que transforma sua fala em texto formatado e polido em qualquer aplicativo."
    },
    {
        question: "Como o Wispr Flow funciona?",
        answer: "Você fala naturalmente e a IA transcreve, remove pausas, corrige gramática e formata o texto automaticamente de acordo com o contexto."
    },
    {
        question: "Ele funciona em qualquer aplicativo?",
        answer: "Sim. O Wispr Flow é compatível com Mac e Windows e funciona em qualquer campo de texto, como Slack, Notion, Gmail, VS Code, etc."
    },
    {
        question: "O Wispr Flow suporta português?",
        answer: "Sim. Ele suporta mais de 100 idiomas, incluindo português, com detecção automática de idioma."
    },
    {
        question: "O que é o 'Whisper Mode'?",
        answer: "É um recurso único que permite ditar silenciosamente (quase sussurrando), ideal para usar em escritórios ou locais públicos sem incomodar os outros."
    },
    {
        question: "Posso editar texto usando comandos de voz?",
        answer: "Sim. Com o 'Command Mode', você pode selecionar texto e pedir para a IA reescrever, formatar ou alterar o tom (ex: 'Deixe mais formal')."
    },
    {
        question: "O Wispr Flow é gratuito?",
        answer: "Ele tem um plano 'Basic' gratuito com limite de 2.000 palavras por semana. Para uso ilimitado, existe o plano Pro."
    },
    {
        question: "Ele aprende meu vocabulário?",
        answer: "Sim. Você pode adicionar palavras personalizadas (como nomes de projetos ou termos técnicos) ao dicionário pessoal para que ele reconheça sempre."
    },
    {
        question: "O Wispr Flow é seguro?",
        answer: "Sim. A empresa foca em privacidade e, no plano Enterprise, oferece conformidade SOC 2 e ISO 27001."
    },
    {
        question: "Qual a diferença para a digitação por voz do sistema?",
        answer: "O Wispr Flow é muito mais inteligente: ele entende pontuação, formatação, contexto e limpa sua fala (tira 'hum', 'ahn'), enquanto a digitação padrão apenas transcreve palavras soltas."
    },
    {
        question: "Posso usar no celular?",
        answer: "Sim, existe uma versão para iOS, permitindo ditar notas e textos em movimento."
    },
    {
        question: "Ele transcreve áudio gravado (arquivos)?",
        answer: "O foco principal é ditado em tempo real, mas ele transcreve o que você fala instantaneamente."
    },
    {
        question: "O Wispr Flow funciona offline?",
        answer: "Não. Como usa modelos de IA avançados para processamento, ele requer conexão com a internet."
    },
    {
        question: "É mais rápido que digitar?",
        answer: "Sim. A maioria das pessoas fala 3x a 4x mais rápido do que digita, e o Wispr Flow acompanha essa velocidade com alta precisão."
    },
    {
        question: "Posso criar atalhos de texto?",
        answer: "Sim. O recurso de Snippets permite inserir textos longos ou padronizados usando comandos curtos de voz."
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre Wispr Flow</h2>
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
