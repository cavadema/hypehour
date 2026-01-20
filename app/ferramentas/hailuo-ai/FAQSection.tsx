"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é o Hailuo AI?",
        answer: "O Hailuo AI é uma plataforma avançada de geração de vídeos por inteligência artificial, desenvolvida pela MiniMax. Ela permite criar vídeos realistas e dinâmicos a partir de simples comandos de texto ou imagens."
    },
    {
        question: "Como o Hailuo AI funciona?",
        answer: "A ferramenta utiliza modelos de difusão de vídeo de última geração que entendem leis da física e movimento. Você digita uma descrição (prompt) ou faz upload de uma imagem, e a IA gera um vídeo de alta qualidade em segundos."
    },
    {
        question: "O Hailuo AI é gratuito?",
        answer: "Sim, o Hailuo AI oferece um plano gratuito com créditos limitados para teste. Para uso profissional, sem marcas d'água e com maior velocidade de geração, existem planos pagos a partir de US$ 9,99/mês."
    },
    {
        question: "Qual a duração dos vídeos gerados?",
        answer: "Atualmente, a plataforma gera clipes de alta qualidade que variam de 6 a 10 segundos, dependendo do modelo utilizado. Esses clipes podem ser combinados para criar vídeos mais longos."
    },
    {
        question: "Posso controlar os movimentos de câmera?",
        answer: "Sim. Modelos específicos como o Director permitem comandos em linguagem natural para realizar movimentos como 'zoom in', 'pan left', 'tilt up', entre outros, dando controle total sobre a cena."
    },
    {
        question: "O Hailuo AI gera vídeos de imagem para vídeo (I2V)?",
        answer: "Sim, um dos seus maiores destaques é a capacidade de animar imagens estáticas (I2V), transformando fotos ou artes digitais em vídeos fluidos com alta consistência visual."
    },
    {
        question: "Quais são os modelos disponíveis na plataforma?",
        answer: "A plataforma oferece modelos como o Hailuo 2.3 (mais recente e expressivo), Hailuo T2V-01-Director (para controle de câmera) e o S2V-01 (focado em consistência de personagens)."
    },
    {
        question: "O Hailuo AI entende português?",
        answer: "Sim, a plataforma suporta múltiplos idiomas, incluindo o português, permitindo que você escreva seus prompts na sua língua nativa."
    },
    {
        question: "Qual a resolução dos vídeos exportados?",
        answer: "Os vídeos são geralmente gerados em alta definição (até 720p ou 1080p nos planos Pro), com uma taxa de quadros de 25fps, garantindo um visual cinematográfico."
    },
    {
        question: "Quanto tempo leva para gerar um vídeo?",
        answer: "O Hailuo AI é conhecido pela rapidez: um vídeo de 10 segundos a partir de texto costuma levar entre 60 a 90 segundos para ser processado."
    },
    {
        question: "Posso usar os vídeos comercialmente?",
        answer: "Sim, as gerações feitas em planos pagos geralmente incluem direitos de uso comercial. Recomendamos sempre verificar os termos de serviço atualizados da MiniMax."
    },
    {
        question: "Os vídeos têm marca d'água?",
        answer: "No plano gratuito, os vídeos possuem uma pequena marca d'água da Hailuo AI. Nos planos pagos, os vídeos são gerados sem qualquer tipo de selo ou marca."
    },
    {
        question: "Como posso conseguir melhores resultados nos vídeos?",
        answer: "A dica é ser específico no prompt: descreva o cenário, a iluminação, o movimento do sujeito e o estilo artístico desejado (ex: cinematográfico, anime, realista)."
    },
    {
        question: "O Hailuo AI é melhor que o Sora ou Runway?",
        answer: "O Hailuo AI compete diretamente com essas ferramentas, destacando-se pela velocidade de geração e pela excelente compreensão de física e consistência em movimentos complexos."
    },
    {
        question: "Existe aplicativo para celular do Hailuo AI?",
        answer: "A plataforma é otimizada para uso via navegador (web), mas também oferece aplicativos em algumas regiões, facilitando a criação em dispositivos móveis."
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre Hailuo AI</h2>
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
