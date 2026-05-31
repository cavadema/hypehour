"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    { question: "O que é o ClipDrop?", answer: "ClipDrop é uma suite de ferramentas de edição de imagens com inteligência artificial desenvolvida pela Stability AI. Oferece recursos como remoção de fundo, limpeza de objetos, upscaling, remoção de texto e geração de imagens, tudo em uma única plataforma." },
    { question: "Para que serve o ClipDrop?", answer: "O ClipDrop serve para editar e aprimorar imagens com IA de forma rápida: remover fundos, apagar objetos indesejados, aumentar resolução, remover texto sobreposto, trocar fundos e gerar novas imagens com Stable Diffusion." },
    { question: "O ClipDrop é gratuito?", answer: "O ClipDrop oferece plano gratuito com acesso às ferramentas principais, com limites de uso. O plano pago remove marcas d'água, libera mais processamentos mensais e acesso a recursos avançados como geração ilimitada de imagens." },
    { question: "O ClipDrop remove fundo de imagens?", answer: "Sim. A ferramenta de remoção de fundo do ClipDrop usa IA para detectar e remover o fundo de qualquer foto em segundos, com alta precisão em cabelos, bordas detalhadas e objetos complexos." },
    { question: "O ClipDrop faz upscaling de imagens?", answer: "Sim. O ClipDrop possui um upscaler com IA que aumenta a resolução de imagens em até 16x sem perda de qualidade, ideal para ampliar fotos de baixa resolução para uso profissional." },
    { question: "O ClipDrop remove objetos de fotos?", answer: "Sim. A ferramenta Cleanup do ClipDrop permite selecionar qualquer objeto, pessoa ou elemento indesejado na foto e removê-lo com IA, preenchendo o espaço de forma natural e coerente." },
    { question: "O ClipDrop gera imagens com IA?", answer: "Sim. O ClipDrop integra o Stable Diffusion XL para geração de imagens a partir de texto, permitindo criar imagens realistas, artísticas ou conceituais diretamente na plataforma." },
    { question: "O ClipDrop remove texto de imagens?", answer: "Sim. O recurso de remoção de texto identifica e apaga automaticamente textos sobrepostos em fotos, marcas d'água simples e letreiros, preenchendo a área removida de forma limpa." },
    { question: "O ClipDrop é bom para e-commerce?", answer: "Sim. A remoção de fundo e a troca de cenário são muito usadas por lojas online para criar fotos de produtos com fundo branco ou em ambientes específicos, sem necessidade de estúdio fotográfico." },
    { question: "O ClipDrop funciona no celular?", answer: "Sim. O ClipDrop possui aplicativo para iOS e Android além da versão web, permitindo editar imagens diretamente pelo smartphone com todas as ferramentas disponíveis." },
    { question: "O ClipDrop pertence à Stability AI?", answer: "Sim. O ClipDrop foi adquirido pela Stability AI, criadora do Stable Diffusion, o que explica a integração nativa com os modelos de geração de imagens da empresa." },
    { question: "O ClipDrop tem API?", answer: "Sim. O ClipDrop oferece uma API robusta que permite integrar as ferramentas de remoção de fundo, upscaling e outras funcionalidades diretamente em aplicativos e fluxos de trabalho automatizados." },
    { question: "O ClipDrop substitui o Photoshop?", answer: "Para tarefas específicas como remoção de fundo, limpeza de objetos e upscaling, o ClipDrop é muito mais rápido e acessível. Para edição avançada com camadas, efeitos e composição complexa, o Photoshop ainda é mais completo." },
    { question: "O ClipDrop é bom para designers?", answer: "Sim. Designers usam o ClipDrop para acelerar tarefas repetitivas de edição de imagem, preparar assets para projetos, fazer recortes rápidos e testar composições com IA." },
    { question: "Como começar a usar o ClipDrop?", answer: "Acesse clipdrop.co, escolha a ferramenta desejada (remoção de fundo, upscaler, cleanup etc.), faça upload da imagem e aguarde o processamento com IA. Não é necessário criar conta para usar as ferramentas básicas." },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(index < 5);
    return (
        <div className="border-b border-gray-200 last:border-0">
            <button className="flex w-full items-center justify-between py-4 text-left focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                <span className="font-medium text-gray-900">{question}</span>
                <ChevronDownIcon className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}

export default function FAQSection() {
    return (
        <div className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre ClipDrop</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
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
                            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                        }))
                    })
                }}
            />
        </div>
    );
}
