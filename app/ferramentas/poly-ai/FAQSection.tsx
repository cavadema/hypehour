"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é o Poly.ai?",
        answer: "Poly.ai é uma plataforma de atendimento ao cliente com assistente de voz baseado em inteligência artificial, capaz de atender chamadas telefônicas e interações digitais de forma autônoma e natural."
    },
    {
        question: "Para que serve o Poly.ai?",
        answer: "O Poly.ai serve para automatizar o atendimento ao cliente por voz, reduzindo o volume de chamadas para agentes humanos, respondendo perguntas frequentes, agendando serviços e resolvendo solicitações de forma conversacional."
    },
    {
        question: "O Poly.ai funciona para call centers?",
        answer: "Sim. O Poly.ai foi desenvolvido especificamente para call centers e centrais de atendimento, sendo capaz de lidar com grande volume de chamadas simultâneas sem tempo de espera."
    },
    {
        question: "O Poly.ai entende português?",
        answer: "O Poly.ai suporta múltiplos idiomas e pode ser configurado para atendimento em português, com vozes naturais e compreensão de sotaques e variações linguísticas."
    },
    {
        question: "O Poly.ai substitui atendentes humanos?",
        answer: "O Poly.ai complementa equipes humanas ao resolver automaticamente as solicitações mais simples e rotineiras, liberando os agentes para interações mais complexas e de maior valor."
    },
    {
        question: "Como funciona a integração do Poly.ai com sistemas existentes?",
        answer: "O Poly.ai oferece integrações com CRMs, plataformas de telefonia e sistemas de gestão via API, permitindo que o assistente acesse informações de clientes em tempo real durante o atendimento."
    },
    {
        question: "O Poly.ai é indicado para pequenas empresas?",
        answer: "O Poly.ai é voltado principalmente para empresas de médio e grande porte com alto volume de atendimentos. Para pequenas empresas, o custo-benefício pode ser avaliado conforme o volume de chamadas."
    },
    {
        question: "O Poly.ai pode escalar o atendimento automaticamente?",
        answer: "Sim. O assistente de voz do Poly.ai pode lidar com picos de demanda sem degradação da qualidade, atendendo centenas de chamadas simultâneas."
    },
    {
        question: "O Poly.ai grava as chamadas?",
        answer: "Sim. As chamadas podem ser gravadas e transcritas para análise de qualidade, treinamento de equipes e melhoria contínua do assistente."
    },
    {
        question: "Quanto custa o Poly.ai?",
        answer: "O Poly.ai trabalha com preços personalizados conforme o volume de uso e as necessidades da empresa. Entre em contato com a equipe comercial para obter uma proposta."
    },
    {
        question: "O Poly.ai aprende com as interações?",
        answer: "Sim. O sistema melhora continuamente com base nas interações reais, identificando padrões, ajustando respostas e aumentando a taxa de resolução ao longo do tempo."
    },
    {
        question: "O Poly.ai pode transferir chamadas para humanos?",
        answer: "Sim. Quando o assistente não consegue resolver uma solicitação, ele pode transferir a chamada de forma inteligente para o agente humano mais adequado, com contexto da conversa."
    },
    {
        question: "O Poly.ai é seguro para dados de clientes?",
        answer: "Sim. O Poly.ai segue padrões de segurança e conformidade como PCI DSS e GDPR para proteger dados sensíveis dos clientes durante as interações."
    },
    {
        question: "Quais setores usam o Poly.ai?",
        answer: "O Poly.ai é usado por empresas dos setores de saúde, hospitalidade, serviços financeiros, varejo e telecomunicações para automatizar o atendimento ao cliente."
    },
    {
        question: "O Poly.ai funciona 24 horas?",
        answer: "Sim. O assistente de voz do Poly.ai opera 24 horas por dia, 7 dias por semana, sem pausas, garantindo atendimento contínuo independentemente do horário."
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
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"}`}
            >
                <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}

export default function FAQSection() {
    return (
        <div className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Poly.ai</h2>
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
            />
        </div>
    );
}
