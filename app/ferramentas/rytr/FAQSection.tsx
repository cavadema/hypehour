"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O Rytr é gratuito?",
        answer: "Sim, o Rytr possui um plano 'Free Forever' que permite gerar até 10.000 caracteres por mês gratuitamente. Para uso ilimitado e recursos extras, existem planos pagos a partir de $9/mês."
    },
    {
        question: "O conteúdo gerado pelo Rytr é original?",
        answer: "Sim, o Rytr gera conteúdo original na maioria das vezes. Além disso, ele possui um verificador de plágio nativo (integrado com Copyscape) para que você possa garantir a unicidade do texto antes de usar."
    },
    {
        question: "Quais idiomas o Rytr suporta?",
        answer: "O Rytr suporta mais de 30 idiomas, incluindo Português, Inglês, Espanhol, Francês, Alemão, entre outros. Ele também permite escolher variações regionais para alguns idiomas."
    },
    {
        question: "Posso usar o Rytr para escrever longos artigos?",
        answer: "O Rytr é excelente para gerar seções de artigos, introduções e outlines. Para artigos longos completos, recomenda-se usar a funcionalidade 'Blog Section Writing' passo a passo, pois gerar textos muito longos de uma só vez pode perder a coerência."
    },
    {
        question: "O Rytr tem extensão para navegador?",
        answer: "Sim, o Rytr oferece uma extensão para Google Chrome que permite usar a IA diretamente no Gmail, WordPress, Slack, redes sociais e qualquer outro lugar onde você escreva na web."
    },
    {
        question: "Quais são os limites dos planos?",
        answer: "O plano Gratuito limita a 10.000 caracteres/mês. O plano Saver (Econômico) permite até 100.000 caracteres/mês. O plano Unlimited oferece caracteres ilimitados."
    },
    {
        question: "O Rytr gera imagens também?",
        answer: "Sim, o Rytr possui um gerador de imagens integrado que cria artes visuais baseadas nas suas descrições de texto, útil para ilustrar posts de blog e redes sociais."
    }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(index < 3); // Primeiros 3 abertos por padrão

    return (
        <div className="border-b border-zinc-200 last:border-0">
            <button
                className="flex w-full items-center justify-between py-4 text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-black group-hover:text-zinc-600 transition-colors">{question}</span>
                <ChevronDownIcon
                    className={`h-5 w-5 text-zinc-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-48 opacity-100 mb-4" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="text-zinc-600 leading-relaxed text-sm">{answer}</p>
            </div>
        </div>
    );
}

export default function FAQSection() {
    return (
        <section className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre o Rytr</h2>
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
        </section>
    );
}
