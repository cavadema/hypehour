"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é IA para aprender inglês?",
        answer: "É o uso de inteligência artificial para personalizar o aprendizado de inglês, adaptando lições, exercícios e conversação ao nível do aluno."
    },
    {
        question: "Como funciona aprender inglês com IA?",
        answer: "A IA analisa erros, acertos e ritmo de estudo para sugerir conteúdos personalizados em tempo real."
    },
    {
        question: "IA para aprender inglês realmente funciona?",
        answer: "Sim. Estudos e usuários mostram evolução mais rápida com práticas personalizadas e feedback imediato."
    },
    {
        question: "Qual o melhor aplicativo para aprender inglês com IA?",
        answer: "Aplicativos como Duolingo, Elsa Speak e TalkPal usam IA para personalizar o aprendizado."
    },
    {
        question: "IA ajuda a aprender inglês do zero?",
        answer: "Sim. A IA ajusta o conteúdo para iniciantes, intermediários e avançados."
    },
    {
        question: "IA para aprender inglês é melhor que curso tradicional?",
        answer: "Ela complementa muito bem cursos tradicionais, oferecendo prática constante e personalizada."
    },
    {
        question: "Dá para aprender inglês conversando com IA?",
        answer: "Sim. Muitas IAs simulam diálogos reais para treinar conversação."
    },
    {
        question: "IA para aprender inglês melhora a pronúncia?",
        answer: "Sim. Ferramentas com reconhecimento de voz corrigem pronúncia em tempo real."
    },
    {
        question: "Aprender inglês com IA é indicado para crianças?",
        answer: "Sim, desde que use aplicativos com foco educacional e controle de conteúdo."
    },
    {
        question: "IA para aprender inglês ajuda em vocabulário?",
        answer: "Sim. A IA apresenta palavras novas conforme o contexto e nível do aluno."
    },
    {
        question: "IA para aprender inglês ajuda na gramática?",
        answer: "Sim. Ela identifica padrões de erro e explica regras de forma simples."
    },
    {
        question: "Aplicativo para aprender inglês com IA é pago?",
        answer: "Existem opções gratuitas e planos premium com mais recursos."
    },
    {
        question: "IA para aprender inglês funciona offline?",
        answer: "Alguns aplicativos oferecem conteúdos offline, mas a IA completa requer internet."
    },
    {
        question: "IA para aprender inglês é indicada para viagens?",
        answer: "Sim. Ajuda com frases, escuta e pronúncia para situações reais."
    },
    {
        question: "Vale a pena usar IA para aprender inglês?",
        answer: "Sim. A personalização acelera o aprendizado e aumenta a motivação."
    },
    {
        question: "Qual IA é melhor para aprender inglês rápido?",
        answer: "Depende do objetivo, mas Duolingo e Elsa Speak são muito populares."
    },
    {
        question: "Dá para aprender inglês só com IA?",
        answer: "Sim, especialmente para leitura, escrita, escuta e conversação básica."
    },
    {
        question: "IA para aprender inglês é gratuita?",
        answer: "Sim. Muitos aplicativos oferecem versões grátis."
    },
    {
        question: "Qual aplicativo para aprender inglês usa IA?",
        answer: "Duolingo, Elsa Speak, Busuu e TalkPal usam IA."
    },
    {
        question: "IA consegue corrigir erros de pronúncia?",
        answer: "Sim. Ela analisa sua fala e indica ajustes."
    },
    {
        question: "Aprender inglês com IA substitui professor?",
        answer: "Não totalmente, mas reduz muito a dependência inicial."
    },
    {
        question: "IA ajuda a treinar listening em inglês?",
        answer: "Sim. Ela adapta áudios ao seu nível."
    },
    {
        question: "IA para aprender inglês funciona para adultos?",
        answer: "Sim. Adultos se beneficiam muito do aprendizado personalizado."
    },
    {
        question: "IA ajuda a aprender inglês para trabalho?",
        answer: "Sim. Ela foca em vocabulário profissional e situações reais."
    },
    {
        question: "IA para aprender inglês é confiável?",
        answer: "Sim, especialmente em aplicativos bem avaliados."
    },
    {
        question: "Dá para praticar conversação todos os dias com IA?",
        answer: "Sim. A IA está disponível 24h por dia."
    },
    {
        question: "IA para aprender inglês ajuda no TOEFL ou IELTS?",
        answer: "Algumas ferramentas focam em provas de proficiência."
    },
    {
        question: "Aprender inglês com IA é mais barato?",
        answer: "Sim. Normalmente custa menos que cursos presenciais."
    },
    {
        question: "IA ajuda a manter a consistência nos estudos?",
        answer: "Sim. Ela envia lembretes e adapta metas."
    },
    {
        question: "Qual o melhor aplicativo para aprender inglês hoje?",
        answer: "Depende do objetivo, mas Duolingo e Elsa Speak lideram."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Aprender Inglês</h2>
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
