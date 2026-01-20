"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é o Chatgot?",
        answer: "O Chatgot é uma plataforma de IA tudo-em-um que reúne múltiplos modelos de linguagem poderosos como GPT-4, Claude 3 e Gemini em uma única interface, permitindo alternar entre eles facilmente."
    },
    {
        question: "O Chatgot é gratuito?",
        answer: "Sim, o Chatgot oferece um plano gratuito com limites diários. Para usuários que precisam de mais consultas, geração de imagens ilimitada e acesso prioritário, existem os planos Pro e Max."
    },
    {
        question: "Quais modelos de IA estão disponíveis no Chatgot?",
        answer: "A plataforma oferece acesso a uma vasta gama de modelos, incluindo GPT-4, Claude 3.5 Sonnet, Gemini 1.5 Pro, Llama 3 e muitos outros modelos especializados em nichos específicos."
    },
    {
        question: "É necessário criar uma conta para usar o Chatgot?",
        answer: "Para as funcionalidades básicas e uso limitado, você pode começar a usar sem cadastro. No entanto, criar uma conta permite salvar históricos e acessar recursos personalizados."
    },
    {
        question: "O Chatgot possui pesquisa em tempo real?",
        answer: "Sim. O Chatgot integra recursos de pesquisa na web em tempo real, permitindo que a IA forneça respostas baseadas em informações atualizadas e notícias recentes."
    },
    {
        question: "Posso criar meus próprios robôs de IA no Chatgot?",
        answer: "Sim. A plataforma permite construir assistentes de IA personalizados com papéis específicos, como tradutores, tutores, escritores ou profissionais de marketing."
    },
    {
        question: "O Chatgot funciona com arquivos PDF?",
        answer: "Sim, ele possui funcionalidades de ChatPDF, permitindo que você carregue documentos e faça perguntas sobre o conteúdo ou peça resumos detalhados."
    },
    {
        question: "Como funciona a geração de imagens no Chatgot?",
        answer: "O Chatgot inclui geradores de imagem e anime baseados em IA. Você pode descrever o que deseja via prompt de texto e a plataforma gera a arte para você."
    },
    {
        question: "Existe uma extensão para navegador?",
        answer: "Sim, o Chatgot oferece extensões para Chrome, Firefox e Edge, facilitando o acesso à IA enquanto você navega em outros sites."
    },
    {
        question: "Meus dados estão seguros no Chatgot?",
        answer: "O Chatgot garante que seus arquivos e conversas são privados e seguros. Eles afirmam não vender dados de usuários e utilizam protocolos de segurança modernos."
    },
    {
        question: "O Chatgot suporta português?",
        answer: "Sim, a plataforma é totalmente compatível com português e mais de 100 outros idiomas para chat, tradução e criação de conteúdo."
    },
    {
        question: "O que está incluído no plano Pro?",
        answer: "O plano Pro oferece 6000 consultas padrão, 400 consultas avançadas, geração de imagens, acesso à web em tempo real e maior velocidade de resposta."
    },
    {
        question: "Posso usar o Chatgot para programar?",
        answer: "Sim. Ele é um excelente assistente para desenvolvedores, ajudando a escrever, depurar e explicar códigos em diversas linguagens de programação."
    },
    {
        question: "Como o Chatgot ajuda na produtividade?",
        answer: "Ao centralizar várias ferramentas (escrita, pesquisa, imagens, PDFs) em um só lugar, ele elimina a necessidade de assinar múltiplos serviços separadamente."
    },
    {
        question: "O Chatgot tem aplicativo para celular?",
        answer: "Sim, além da versão web e extensões, o Chatgot está disponível em lojas de aplicativos para facilitar o uso em dispositivos móveis."
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre Chatgot</h2>
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
