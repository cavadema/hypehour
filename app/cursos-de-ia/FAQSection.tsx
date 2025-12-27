"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que são cursos de IA?",
        answer: "Cursos de IA ensinam conceitos de inteligência artificial, como machine learning, automação, análise de dados e uso prático de ferramentas de IA."
    },
    {
        question: "Para quem os cursos de IA são indicados?",
        answer: "São indicados para estudantes, profissionais, empreendedores e curiosos que querem aprender ou aplicar IA."
    },
    {
        question: "Existe curso de IA para iniciantes?",
        answer: "Sim. Há cursos de IA para iniciantes que ensinam do zero, sem exigir programação."
    },
    {
        question: "Curso de IA gratuito vale a pena?",
        answer: "Sim. Muitos cursos gratuitos oferecem ótima base teórica e prática inicial."
    },
    {
        question: "O que se aprende em um curso de IA para iniciantes?",
        answer: "Conceitos básicos, aplicações práticas, uso de ferramentas e fundamentos de IA."
    },
    {
        question: "Cursos de IA ensinam programação?",
        answer: "Alguns sim, outros focam apenas no uso prático de IA sem código."
    },
    {
        question: "Cursos de IA ajudam na carreira profissional?",
        answer: "Sim. Conhecimento em IA é cada vez mais valorizado no mercado."
    },
    {
        question: "Qual a duração média de um curso de IA?",
        answer: "Pode variar de poucas horas a vários meses, dependendo do nível."
    },
    {
        question: "Cursos de IA online são confiáveis?",
        answer: "Sim, especialmente quando oferecidos por plataformas reconhecidas."
    },
    {
        question: "Curso de IA gratuito tem certificado?",
        answer: "Alguns oferecem certificado gratuito ou pago opcional."
    },
    {
        question: "Cursos de IA ensinam ferramentas como ChatGPT?",
        answer: "Sim. Muitos cursos focam no uso prático de ferramentas de IA generativa."
    },
    {
        question: "Curso de IA para iniciantes é difícil?",
        answer: "Não. Os cursos introdutórios são pensados para facilitar o aprendizado."
    },
    {
        question: "Cursos de IA exigem conhecimento técnico prévio?",
        answer: "Não necessariamente. Muitos começam do básico."
    },
    {
        question: "Cursos de IA podem ser feitos no próprio ritmo?",
        answer: "Sim. A maioria dos cursos online é sob demanda."
    },
    {
        question: "Vale a pena investir em cursos de IA?",
        answer: "Sim. É um conhecimento com alta demanda e crescimento contínuo."
    },
    {
        question: "Qual é o melhor curso de IA atualmente?",
        answer: "Depende do objetivo, mas cursos introdutórios online são os mais procurados."
    },
    {
        question: "Existe curso de IA totalmente gratuito?",
        answer: "Sim. Há opções gratuitas em plataformas educacionais e universidades."
    },
    {
        question: "Curso de IA gratuito é bom para iniciantes?",
        answer: "Sim. É uma ótima forma de começar sem investimento."
    },
    {
        question: "Quanto custa em média um curso de IA?",
        answer: "Pode variar de gratuito até valores mais altos em formações completas."
    },
    {
        question: "Curso de IA ensina machine learning?",
        answer: "Cursos intermediários e avançados geralmente ensinam."
    },
    {
        question: "Dá para aprender IA sozinho com cursos online?",
        answer: "Sim. Muitos aprendem IA apenas com cursos online."
    },
    {
        question: "Cursos de IA ajudam a mudar de carreira?",
        answer: "Sim. IA é uma área com muitas oportunidades."
    },
    {
        question: "Curso de IA para iniciantes precisa de matemática?",
        answer: "Não nos cursos básicos. Matemática aparece mais em níveis avançados."
    },
    {
        question: "Cursos de IA têm aulas práticas?",
        answer: "Sim. A maioria inclui exercícios e projetos."
    },
    {
        question: "Curso de IA gratuito prepara para o mercado?",
        answer: "Ele prepara a base, mas cursos pagos costumam aprofundar mais."
    },
    {
        question: "Cursos de IA são reconhecidos pelo mercado?",
        answer: "O conhecimento prático costuma valer mais que o certificado."
    },
    {
        question: "Curso de IA ensina ética e uso responsável?",
        answer: "Muitos cursos já abordam esse tema."
    },
    {
        question: "Cursos de IA são indicados para empreendedores?",
        answer: "Sim. IA pode otimizar processos e reduzir custos."
    },
    {
        question: "Curso de IA para iniciantes é o primeiro passo ideal?",
        answer: "Sim. Ele cria a base para estudos mais avançados."
    },
    {
        question: "Onde encontrar bons cursos de IA?",
        answer: "Em plataformas online, universidades e iniciativas educacionais."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Cursos de IA</h2>
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
