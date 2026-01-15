
"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O ChatPDF é gratuito?",
        answer: "Sim! O plano gratuito permite analisar até 2 documentos por dia, com limite de 120 páginas por PDF. Para uso ilimitado e arquivos maiores, existe o plano Plus."
    },
    {
        question: "Funciona em português?",
        answer: "Sim, totalmente. Você pode enviar um PDF em inglês, por exemplo, e conversar com ele em português. O ChatPDF entende e responde em qualquer idioma."
    },
    {
        question: "Meus dados são seguros?",
        answer: "Sim. Seus arquivos são armazenados em nuvem segura e criptografada (SSL). Você tem total controle e pode excluir seus documentos a qualquer momento."
    },
    {
        question: "Preciso criar conta para usar?",
        answer: "Não. Você pode usar as funções básicas imediatamente sem login. Criar uma conta (gratuita) permite salvar seu histórico de conversas."
    },
    {
        question: "Aceita outros arquivos além de PDF?",
        answer: "Sim. O ChatPDF também suporta arquivos Word (.doc, .docx), apresentações PowerPoint (.ppt, .pptx) e arquivos de texto (.txt)."
    },
    {
        question: "Posso conversar com vários PDFs de uma vez?",
        answer: "Sim, no modo de pastas (Folder), você pode agrupar vários documentos e fazer perguntas que cruzem informações entre eles."
    },
    {
        question: "Qual tecnologia de IA ele usa?",
        answer: "O ChatPDF usa modelos avançados da OpenAI (como GPT-4o e GPT-4o-mini) para entregar respostas rápidas e precisas."
    },
    {
        question: "Ele inventa informações (alucinação)?",
        answer: "O ChatPDF é projetado para basear suas respostas estritamente no conteúdo do documento. As citações ajudam a verificar a veracidade, mas sempre confira informações críticas."
    },
    {
        question: "Funciona no celular?",
        answer: "Sim, o ChatPDF funciona perfeitamente no navegador de qualquer dispositivo móvel, tablet ou computador."
    },
    {
        question: "Como compartilho minha conversa?",
        answer: "Você pode gerar um link público para o seu chat e compartilhá-lo com colegas. Eles poderão ver a conversa e continuar perguntando ao documento."
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre o ChatPDF</h2>
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
