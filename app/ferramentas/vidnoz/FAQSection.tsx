
"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é o Vidnoz e para que serve?",
        answer: "O Vidnoz AI é uma plataforma online que utiliza inteligência artificial para criar vídeos. Ele serve principalmente para gerar vídeos com apresentadores virtuais (avatares) que falam seu texto de forma sincronizada, ideal para treinamentos, marketing, vendas e comunicação corporativa sem precisar de câmeras ou atores."
    },
    {
        question: "Como funciona o Vidnoz?",
        answer: "Você escolhe um avatar (personagem), digita o texto que deseja que ele fale, seleciona a voz e o idioma, e personaliza o cenário com imagens ou vídeos. A IA processa tudo e entrega um vídeo pronto onde o avatar fala exatamente o que você escreveu."
    },
    {
        question: "O Vidnoz é gratuito?",
        answer: "Sim, o Vidnoz oferece um plano gratuito que permite criar vídeos curtos todos os dias (geralmente com limite de minutos e marca d'água) para você testar a ferramenta. Para remover a marca d'água e ter mais minutos, é necessário assinar um plano pago."
    },
    {
        question: "O que é Talking Photo?",
        answer: "É um recurso divertido e útil do Vidnoz que permite fazer upload de qualquer foto de rosto (seja uma selfie, um personagem histórico ou uma pintura) e fazer com que ela 'fale' um texto com movimentos faciais animados pela IA."
    },
    {
        question: "Posso usar minha própria voz?",
        answer: "Sim! Você pode fazer upload de um áudio gravado ou usar o recurso de Clonagem de Voz para criar uma versão digital da sua própria voz para ser usada pelos avatares."
    },
    {
        question: "Quantos idiomas o Vidnoz suporta?",
        answer: "O Vidnoz suporta mais de 100 idiomas, incluindo Português do Brasil com diversas opções de vozes masculinas e femininas e diferentes tons."
    },
    {
        question: "Os vídeos têm direitos autorais?",
        answer: "Se você estiver no plano gratuito, os direitos de uso podem ser limitados. Nos planos pagos, você geralmente possui os direitos comerciais dos vídeos criados, podendo usá-los em anúncios e monetização."
    },
    {
        question: "Preciso baixar algum programa?",
        answer: "Não. O Vidnoz é totalmente baseado na nuvem (online). Você acessa, cria e baixa seus vídeos diretamente pelo navegador (Chrome, Edge, etc.) sem instalar nada."
    },
    {
        question: "Posso criar meu próprio avatar personalizado?",
        answer: "Sim, o Vidnoz oferece o serviço de Avatar Personalizado (Custom Avatar) nos planos empresariais, onde você pode se gravar e criar um avatar digital gêmeo seu para usar nos vídeos."
    }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(index < 4);

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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre o Vidnoz</h2>
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
