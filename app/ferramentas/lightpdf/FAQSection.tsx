
"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O LightPDF é gratuito?",
        answer: "O LightPDF oferece muitas ferramentas gratuitas, incluindo conversão e edição básica. No entanto, recursos avançados, processamento em lote e uso ilimitado da IA podem exigir uma assinatura VIP."
    },
    {
        question: "É seguro usar o LightPDF?",
        answer: "Sim. O LightPDF garante a privacidade dos seus arquivos. Eles são excluídos automaticamente dos servidores após o processamento, e ninguém mais tem acesso a eles."
    },
    {
        question: "Preciso baixar algum programa?",
        answer: "Não necessariamente. A versão Web funciona direto no navegador. Mas se preferir trabalhar offline ou com arquivos muito pesados, existe o software para Windows, iOS e Android."
    },
    {
        question: "O LightPDF suporta OCR?",
        answer: "Sim! Ele possui uma tecnologia OCR (Reconhecimento Óptico de Caracteres) excelente que converte imagens e PDFs digitalizados em texto editável (Word, TXT, Excel)."
    },
    {
        question: "Quais formatos ele converte?",
        answer: "Ele converte PDF para Word, Excel, PPT, TXT, PNG, JPG e vice-versa. Também suporta conversão de CAD e outros formatos específicos."
    },
    {
        question: "Posso editar o texto original do PDF?",
        answer: "Sim. O editor do LightPDF permite modificar o texto existente, alterar fontes, cores e tamanhos, como se estivesse usando um processador de texto."
    },
    {
        question: "O recurso de IA funciona em português?",
        answer: "Sim, o assistente de IA para leitura de PDF entende e responde perguntas em português, além de poder resumir e traduzir conteúdos."
    },
    {
        question: "Posso usar no celular?",
        answer: "Sim. O LightPDF tem aplicativos dedicados para Android e iOS, permitindo escanear, editar e assinar documentos direto do smartphone."
    },
    {
        question: "Tem limite de tamanho de arquivo?",
        answer: "Na versão gratuita, existem limites de tamanho e número de páginas. A versão VIP remove essas restrições."
    },
    {
        question: "Posso assinar documentos com validade?",
        answer: "O LightPDF permite criar e inserir assinaturas digitais e eletrônicas nos seus documentos de forma rápida e segura."
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre o LightPDF</h2>
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
