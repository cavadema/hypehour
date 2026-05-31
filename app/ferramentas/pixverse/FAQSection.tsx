"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é o Pixverse?",
        answer: "Pixverse é uma plataforma de geração de vídeos com inteligência artificial que transforma texto e imagens em vídeos criativos com estilos variados, movimentos dinâmicos e alta qualidade visual."
    },
    {
        question: "Para que serve o Pixverse?",
        answer: "O Pixverse serve para criar vídeos a partir de prompts de texto, animar imagens estáticas, gerar conteúdo para redes sociais, campanhas de marketing e projetos criativos sem precisar de equipamento de filmagem."
    },
    {
        question: "O Pixverse é gratuito?",
        answer: "O Pixverse oferece plano gratuito com créditos mensais para geração de vídeos. Planos pagos liberam mais créditos, resolução maior e acesso prioritário a novos recursos."
    },
    {
        question: "O Pixverse funciona em português?",
        answer: "Sim. A interface do Pixverse está disponível em português e aceita prompts em português para gerar os vídeos."
    },
    {
        question: "O Pixverse cria vídeos a partir de texto?",
        answer: "Sim. Descreva a cena que deseja em texto e o Pixverse gera um vídeo correspondente com movimentos, estilo visual e duração configuráveis."
    },
    {
        question: "O Pixverse anima imagens?",
        answer: "Sim. Você pode fazer upload de uma imagem e o Pixverse a transforma em um vídeo animado com movimentos naturais e dinâmicos."
    },
    {
        question: "Que estilos de vídeo o Pixverse suporta?",
        answer: "O Pixverse suporta estilos realistas, anime, cartoon, cinematográfico e arte digital, permitindo criar vídeos com personalidade visual distinta."
    },
    {
        question: "O Pixverse é bom para redes sociais?",
        answer: "Sim. A plataforma é muito usada para criar conteúdo para Instagram Reels, TikTok e YouTube Shorts, com formatos verticais e horizontais disponíveis."
    },
    {
        question: "Quanto tempo o Pixverse leva para gerar um vídeo?",
        answer: "O tempo de geração varia entre alguns segundos e alguns minutos, dependendo da complexidade do vídeo e da fila de processamento."
    },
    {
        question: "O Pixverse é bom para marketing?",
        answer: "Sim. Empresas usam o Pixverse para criar vídeos de produtos, teasers de campanhas, conteúdo criativo e materiais visuais impactantes sem necessidade de produção tradicional."
    },
    {
        question: "O Pixverse funciona no celular?",
        answer: "Sim. A plataforma é acessível via navegador em dispositivos móveis e também possui aplicativo disponível."
    },
    {
        question: "O Pixverse gera vídeos longos?",
        answer: "O Pixverse é focado em vídeos curtos, geralmente entre 4 e 8 segundos, ideais para clipes, loops e conteúdo de redes sociais."
    },
    {
        question: "O Pixverse permite uso comercial?",
        answer: "Os planos pagos geralmente permitem uso comercial dos vídeos gerados. Verifique os termos de uso para confirmar as permissões do seu plano."
    },
    {
        question: "O Pixverse é melhor que o Sora ou Runway?",
        answer: "Cada ferramenta tem seus pontos fortes. O Pixverse se destaca pela acessibilidade, variedade de estilos e interface intuitiva, sendo uma ótima opção para criadores que buscam qualidade com facilidade de uso."
    },
    {
        question: "Como começar a usar o Pixverse?",
        answer: "Acesse o site, crie uma conta gratuita, escolha entre texto ou imagem como base, descreva ou faça upload do conteúdo e aguarde o vídeo ser gerado."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Pixverse</h2>
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
