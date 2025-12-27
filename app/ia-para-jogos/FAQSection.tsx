"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é IA para jogos?",
        answer: "IA para jogos é o uso de inteligência artificial para criar, desenvolver ou melhorar jogos digitais, desde personagens até mecânicas."
    },
    {
        question: "Como funciona a IA para criar jogos?",
        answer: "A IA automatiza tarefas como criação de personagens, roteiros, cenários e lógica de jogo."
    },
    {
        question: "É possível criar jogo com IA sem saber programar?",
        answer: "Sim. Existem ferramentas que permitem criar jogos com IA usando interfaces visuais."
    },
    {
        question: "IA para criar jogos é indicada para iniciantes?",
        answer: "Sim. A IA facilita o desenvolvimento mesmo para quem está começando."
    },
    {
        question: "Jogos com IA são diferentes de jogos tradicionais?",
        answer: "Sim. Jogos com IA podem ter comportamentos mais dinâmicos e adaptativos."
    },
    {
        question: "IA pode criar personagens de jogos?",
        answer: "Sim. Ela gera NPCs com comportamentos e diálogos inteligentes."
    },
    {
        question: "IA ajuda na criação de histórias para jogos?",
        answer: "Sim. A IA pode gerar narrativas, diálogos e missões."
    },
    {
        question: "IA para criar jogos funciona em jogos 2D e 3D?",
        answer: "Sim. Ela pode ser aplicada em ambos os formatos."
    },
    {
        question: "IA pode ajudar no design de níveis?",
        answer: "Sim. A IA gera mapas e fases automaticamente."
    },
    {
        question: "Criar jogo com IA é mais rápido?",
        answer: "Sim. A IA reduz o tempo de desenvolvimento."
    },
    {
        question: "IA para jogos é usada por estúdios profissionais?",
        answer: "Sim. Grandes estúdios usam IA para otimizar produção."
    },
    {
        question: "IA pode testar jogos automaticamente?",
        answer: "Sim. Ela identifica bugs e falhas jogando o jogo."
    },
    {
        question: "Jogos com IA podem se adaptar ao jogador?",
        answer: "Sim. A IA ajusta dificuldade e desafios."
    },
    {
        question: "IA para criar jogos é gratuita?",
        answer: "Existem ferramentas gratuitas ou com planos grátis."
    },
    {
        question: "Vale a pena usar IA para criar jogos?",
        answer: "Sim. Ela aumenta produtividade e criatividade."
    },
    {
        question: "Qual a melhor IA para criar jogos hoje?",
        answer: "Depende do objetivo, mas engines modernas e ferramentas com IA são populares."
    },
    {
        question: "Dá para criar jogo com IA do zero?",
        answer: "Sim. A IA pode ajudar desde a ideia até a implementação."
    },
    {
        question: "IA para jogos substitui programadores?",
        answer: "Não. Ela auxilia, mas não substitui totalmente."
    },
    {
        question: "Jogos com IA são mais realistas?",
        answer: "Sim. A IA cria comportamentos mais naturais."
    },
    {
        question: "IA pode criar jogos automaticamente?",
        answer: "Em parte. Ela automatiza etapas, mas o controle humano é essencial."
    },
    {
        question: "Criar jogo com IA é caro?",
        answer: "Não necessariamente. Há opções acessíveis."
    },
    {
        question: "IA para jogos funciona em jogos mobile?",
        answer: "Sim. É muito usada em jogos mobile."
    },
    {
        question: "IA ajuda a balancear jogos?",
        answer: "Sim. Ela analisa dados de gameplay."
    },
    {
        question: "IA para jogos é indicada para crianças?",
        answer: "Sim, especialmente em ferramentas educacionais."
    },
    {
        question: "Jogos com IA usam machine learning?",
        answer: "Muitos usam, especialmente para adaptação."
    },
    {
        question: "IA pode gerar gráficos e arte para jogos?",
        answer: "Sim. Ela cria sprites, texturas e cenários."
    },
    {
        question: "IA para criar jogos exige computador potente?",
        answer: "Depende da ferramenta usada."
    },
    {
        question: "Criar jogo com IA é legalmente permitido?",
        answer: "Sim, desde que respeite licenças e direitos autorais."
    },
    {
        question: "IA para jogos funciona offline?",
        answer: "Algumas ferramentas funcionam offline."
    },
    {
        question: "Vale a pena aprender IA para criar jogos?",
        answer: "Sim. É uma habilidade em crescimento."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Jogos</h2>
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
