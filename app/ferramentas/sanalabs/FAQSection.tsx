"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é a Sana?",
        answer: "A Sana é uma plataforma de inteligência artificial focada em gestão do conhecimento e aprendizado corporativo. Ela combina uma ferramenta de busca universal (Enterprise Search), um assistente de IA e uma plataforma de aprendizado (LMS) em um único lugar."
    },
    {
        question: "Como a Sana usa Inteligência Artificial?",
        answer: "A Sana usa IA para indexar e entender todo o conhecimento da sua empresa (Google Drive, Slack, Notion, etc.), permitindo que você faça perguntas em linguagem natural e receba respostas precisas baseadas nos seus próprios dados, além de criar cursos e materiais de treinamento automaticamente."
    },
    {
        question: "Quais ferramentas a Sana integra?",
        answer: "A Sana se conecta a dezenas de ferramentas populares, incluindo Google Workspace, Microsoft 365, Slack, Salesforce, Notion, GitHub, Jira e muitas outras, centralizando o acesso à informação."
    },
    {
        question: "A Sana é uma ferramenta de LMS (Learning Management System)?",
        answer: "Sim, mas vai além. O 'Sana Learn' é um LMS de próxima geração que usa IA para personalizar a experiência de aprendizado, criar conteúdo automaticamente e engajar colaboradores, diferente dos LMSs tradicionais estáticos."
    },
    {
        question: "A Sana substitui o ChatGPT?",
        answer: "Para uso corporativo, sim. O 'Sana Assistant' funciona como um ChatGPT, mas com a grande vantagem de ter acesso seguro e privado aos dados internos da sua empresa, tornando as respostas muito mais relevantes para o seu trabalho."
    },
    {
        question: "Meus dados estão seguros com a Sana?",
        answer: "Sim. A Sana é projetada para empresas (Enterprise-grade security), com certificações como SOC 2 Tipo 2, GDPR e criptografia de ponta a ponta. Seus dados não são usados para treinar modelos públicos de IA."
    },
    {
        question: "É possível criar agentes personalizados na Sana?",
        answer: "Sim. Você pode criar assistentes de IA personalizados (Agentes) para tarefas específicas, dando a eles instruções, acesso a documentos específicos e permissão para executar ações em outras ferramentas."
    },
    {
        question: "A Sana funciona em português?",
        answer: "Sim, a plataforma suporta múltiplos idiomas, incluindo português, tanto para interface quanto para geração de conteúdo e respostas da IA."
    },
    {
        question: "Quanto custa a Sana?",
        answer: "A Sana geralmente opera com modelos de preços para empresas (B2B), baseados no número de usuários. É necessário entrar em contato com a equipe de vendas para obter uma cotação específica."
    },
    {
        question: "A Sana oferece teste gratuito?",
        answer: "A Sana oferece demonstrações e pode oferecer períodos de teste (pilotos) para empresas interessadas. Recomendamos agendar uma demo no site oficial para discutir as opções."
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre a Sana</h2>
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
