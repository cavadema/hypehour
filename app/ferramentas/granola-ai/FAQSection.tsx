"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é a Granola AI?",
        answer: "A Granola AI é um bloco de notas inteligente e discreto para reuniões que capta o áudio do seu computador (sem robôs) e aprimora suas próprias anotações usando inteligência artificial."
    },
    {
        question: "A Granola AI é gratuita?",
        answer: "Sim, a ferramenta possui um plano gratuito generoso que inclui anotações de reuniões com IA essenciais. Para usuários que precisam de histórico ilimitado e recursos avançados de equipe, existem planos pagos."
    },
    {
        question: "Como a Granola funciona sem um robô na chamada?",
        answer: "Ela roda localmente no seu computador (Mac ou Windows) e captura o áudio do sistema. Isso permite que ela funcione com Zoom, Google Meet, Teams ou Slack sem precisar de um participante extra na sala."
    },
    {
        question: "A Granola AI suporta Português?",
        answer: "Sim, a Granola tem um excelente suporte para múltiplos idiomas, incluindo Português (Brasil). Ela transcreve e gera os resumos da ata com alta precisão no idioma falado."
    },
    {
        question: "Ela substitui minhas anotações manuais?",
        answer: "Não, ela as potencializa. O diferencial da Granola é que você continua anotando os pontos que considera importantes, e a IA usa a transcrição completa da reunião para preencher as lacunas e organizar o texto."
    },
    {
        question: "Minhas reuniões são privadas e seguras?",
        answer: "Sim. A Granola prioriza a privacidade local e os dados não são usados para treinar modelos globais de IA sem permissão explícita, ideal para conversas confidenciais."
    },
    {
        question: "Posso usar a Granola em reuniões presenciais?",
        answer: "Sim, através do aplicativo móvel, você pode gravar e transcrever reuniões presenciais, palestras e brainstorms com a mesma qualidade de IA das reuniões online."
    },
    {
        question: "Como a Granola integra com outras ferramentas?",
        answer: "Ela se integra nativamente ao Notion, Slack, HubSpot, Salesforce e Attio, permitindo enviar suas atas e itens de ação diretamente para seu fluxo de trabalho preferido."
    }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(index < 4); // Abre as 4 primeiras perguntas por padrão

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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre Granola AI</h2>
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
        
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
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
                    })
                }}
            /></div>
    );
}
