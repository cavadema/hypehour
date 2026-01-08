"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é o Leonardo AI?",
        answer: "Leonardo AI é uma ferramenta de IA que cria imagens, ilustrações e arte digital de alta qualidade a partir de descrições em texto."
    },
    {
        question: "Para que serve o Leonardo AI?",
        answer: "Serve para gerar imagens personalizadas para jogos, marketing, design, ilustrações e projetos criativos."
    },
    {
        question: "O Leonardo AI é gratuito?",
        answer: "Sim, oferece plano gratuito com créditos limitados, além de planos pagos com mais recursos."
    },
    {
        question: "O Leonardo AI é bom para iniciantes?",
        answer: "Sim. A interface é intuitiva e não requer conhecimento técnico em design."
    },
    {
        question: "Quais estilos o Leonardo AI suporta?",
        answer: "Suporta realismo, anime, fantasia, sci-fi, pixel art, ilustração e muitos outros estilos."
    },
    {
        question: "O Leonardo AI cria imagens do zero?",
        answer: "Sim. Você descreve o que deseja e a IA gera a imagem completa."
    },
    {
        question: "Posso editar imagens existentes no Leonardo AI?",
        answer: "Sim. A ferramenta AI Canvas permite editar partes específicas de imagens."
    },
    {
        question: "O Leonardo AI gera texto nas imagens?",
        answer: "Ainda tem limitações com texto legível, mas está melhorando constantemente."
    },
    {
        question: "Posso usar as imagens comercialmente?",
        answer: "Depende do plano contratado. Verifique os termos de uso para uso comercial."
    },
    {
        question: "O Leonardo AI funciona em português?",
        answer: "Sim, aceita prompts em português, mas inglês tende a dar melhores resultados."
    },
    {
        question: "Quanto tempo leva para gerar uma imagem?",
        answer: "Geralmente de 10 a 30 segundos, dependendo da complexidade e resolução."
    },
    {
        question: "Posso treinar meu próprio modelo no Leonardo AI?",
        answer: "Sim. Você pode treinar modelos customizados com suas próprias imagens."
    },
    {
        question: "O Leonardo AI substitui designers?",
        answer: "Não. É uma ferramenta de apoio que acelera o processo criativo."
    },
    {
        question: "Posso aumentar a resolução das imagens?",
        answer: "Sim. A ferramenta oferece upscaling para melhorar a qualidade."
    },
    {
        question: "O Leonardo AI funciona offline?",
        answer: "Não. Requer conexão com internet para processar as gerações."
    },
    {
        question: "Quantas imagens posso gerar no plano gratuito?",
        answer: "O plano gratuito oferece créditos limitados que se renovam diariamente."
    },
    {
        question: "O Leonardo AI é melhor que o Midjourney?",
        answer: "Ambos têm pontos fortes. Leonardo oferece mais controle e ferramentas de edição."
    },
    {
        question: "Posso gerar múltiplas imagens de uma vez?",
        answer: "Sim. Você pode gerar várias variações simultaneamente."
    },
    {
        question: "O Leonardo AI funciona para criar NFTs?",
        answer: "Sim. Muitos artistas usam para criar arte digital e NFTs."
    },
    {
        question: "As imagens têm marca d'água?",
        answer: "Imagens geradas não têm marca d'água, mesmo no plano gratuito."
    },
    {
        question: "Posso baixar as imagens em alta resolução?",
        answer: "Sim, especialmente em planos pagos que oferecem resoluções maiores."
    },
    {
        question: "O Leonardo AI é indicado para game design?",
        answer: "Sim. É muito usado para criar assets, personagens e cenários de jogos."
    },
    {
        question: "Preciso de conhecimento técnico para usar?",
        answer: "Não. A interface é amigável e intuitiva para qualquer pessoa."
    },
    {
        question: "O Leonardo AI aprende com minhas criações?",
        answer: "Modelos customizados aprendem, mas o modelo base não usa suas imagens."
    },
    {
        question: "Posso criar personagens consistentes?",
        answer: "Sim, especialmente usando modelos customizados treinados com seus personagens."
    },
    {
        question: "O Leonardo AI é bom para redes sociais?",
        answer: "Sim. Perfeito para criar posts, banners e conteúdo visual rapidamente."
    },
    {
        question: "Posso exportar em diferentes formatos?",
        answer: "Sim, geralmente em PNG de alta qualidade."
    },
    {
        question: "O Leonardo AI funciona para ilustração editorial?",
        answer: "Sim. Muitos editores e jornalistas usam para ilustrar artigos."
    },
    {
        question: "Vale a pena pagar pelo Leonardo AI?",
        answer: "Sim, se você usa regularmente. O plano pago oferece mais créditos e recursos avançados."
    },
    {
        question: "O Leonardo AI é indicado para freelancers?",
        answer: "Sim. Acelera muito a produção e entrega de projetos visuais."
    },
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre Leonardo AI</h2>
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
