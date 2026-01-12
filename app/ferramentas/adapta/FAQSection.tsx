"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é o Adapta?",
        answer: "Adapta é uma plataforma all-in-one que reúne os melhores modelos de IA do mundo, cursos práticos e newsletter completa em uma única assinatura."
    },
    {
        question: "Quantos modelos de IA o Adapta oferece?",
        answer: "O Adapta oferece acesso a mais de 15 modelos de IA, incluindo GPT-5.1, GPT-o3, Claude 4.5 Sonnet, Gemini 3 Pro, Deepseek V3, Llama 4, Perplexity, Grok 4 e outros."
    },
    {
        question: "O Adapta é seguro?",
        answer: "Sim. O Adapta usa tecnologia Advanced Encryption Standard (AES) para manter seus dados sempre seguros, garantindo privacidade e confiança."
    },
    {
        question: "Qual a diferença entre Adapta Cursos e Adapta GOLD?",
        answer: "Adapta Cursos oferece acesso aos cursos práticos e newsletter. Adapta GOLD inclui tudo isso mais acesso ilimitado a todos os modelos de IA e ferramentas especiais."
    },
    {
        question: "O Adapta tem plano gratuito?",
        answer: "O Adapta é uma plataforma de assinatura paga. Consulte o site oficial para informações sobre planos e preços atualizados."
    },
    {
        question: "Posso usar o Adapta em português?",
        answer: "Sim. O Adapta é uma plataforma brasileira com interface, cursos, suporte e comunidade em português."
    },
    {
        question: "O que é o Adapta ONE26?",
        answer: "Adapta ONE26 é o modelo proprietário da plataforma que entende contexto de negócios, planeja estratégias e executa tarefas em paralelo para atingir seus objetivos."
    },
    {
        question: "Quais ferramentas especiais o Adapta oferece?",
        answer: "O Adapta oferece biblioteca de prompts, análise de arquivos, geração de imagens, criação de apresentações, marketplace de experts, melhorador de prompts, pesquisa profunda e organização de chats em pastas."
    },
    {
        question: "Os cursos do Adapta são atualizados?",
        answer: "Sim. Os cursos são constantemente atualizados com as novidades e melhores práticas de IA, mantendo você sempre na vanguarda."
    },
    {
        question: "Vale a pena assinar o Adapta?",
        answer: "Se você usa IA regularmente no trabalho e quer economizar tempo e dinheiro com múltiplas assinaturas, o Adapta é uma excelente escolha. Uma assinatura substitui várias ferramentas pagas."
    },
    {
        question: "O Adapta funciona offline?",
        answer: "Não. O Adapta requer conexão com internet para acessar os modelos de IA e ferramentas da plataforma."
    },
    {
        question: "Posso cancelar minha assinatura a qualquer momento?",
        answer: "Consulte os termos de serviço no site oficial do Adapta para informações sobre cancelamento e políticas de reembolso."
    },
    {
        question: "O Adapta é bom para empresas?",
        answer: "Sim. O Adapta é ideal para empresas que querem centralizar acesso a ferramentas de IA, treinar equipes e aumentar produtividade com uma solução integrada."
    },
    {
        question: "Posso comparar respostas de diferentes modelos?",
        answer: "Sim. Uma das principais vantagens do Adapta é poder comparar respostas de GPT, Claude, Gemini e outros modelos lado a lado para escolher a melhor solução."
    },
    {
        question: "O Adapta oferece suporte?",
        answer: "Sim. O Adapta oferece suporte em português e uma comunidade ativa de usuários para tirar dúvidas e compartilhar experiências."
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre Adapta</h2>
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
