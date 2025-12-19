"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    { question: "O que é um detector de IA?", answer: "Um detector de IA é uma ferramenta que analisa textos para identificar se eles foram escritos por inteligência artificial ou por um humano." },
    { question: "Como funciona um detector de texto IA?", answer: "Ele avalia padrões linguísticos, previsibilidade, estrutura e probabilidade estatística do texto para estimar se foi gerado por IA." },
    { question: "Qual é o melhor detector de IA atualmente?", answer: "Alguns dos mais conhecidos são GPTZero, Originality.ai, Copyleaks e Turnitin AI Detector." },
    { question: "Detector de IA é confiável?", answer: "É parcialmente confiável. Ele fornece probabilidades, mas não garante 100% de precisão." },
    { question: "Verificador de IA funciona para textos em português?", answer: "Sim. Muitos detectores já analisam textos em português com boa precisão." },
    { question: "Detector de IA consegue identificar textos do ChatGPT?", answer: "Sim, ele tenta identificar padrões comuns em textos gerados por modelos como ChatGPT, mas não é infalível." },
    { question: "Identificador de IA funciona em textos longos?", answer: "Sim. Quanto maior o texto, maior tende a ser a precisão da análise." },
    { question: "Existe detector de IA gratuito?", answer: "Sim. GPTZero, Copyleaks (limitado) e outras ferramentas oferecem versões gratuitas." },
    { question: "Detector de IA pode errar?", answer: "Sim. Textos humanos podem ser marcados como IA e vice-versa." },
    { question: "Verificador de IA é usado em escolas e universidades?", answer: "Sim. Instituições usam detectores para verificar possíveis usos indevidos de IA em trabalhos acadêmicos." },
    { question: "Detector de texto IA identifica plágio?", answer: "Não necessariamente. Detector de IA e verificador de plágio são ferramentas diferentes, embora alguns combinem ambos." },
    { question: "Detector de IA funciona para artigos de blog?", answer: "Sim. Ele analisa artigos, redações, descrições e qualquer texto escrito." },
    { question: "Identificador de IA consegue detectar textos editados por humanos?", answer: "Quanto mais um texto é revisado manualmente, mais difícil fica a detecção." },
    { question: "Detector de IA é aceito como prova definitiva?", answer: "Não. Ele serve como indício, não como prova absoluta." },
    { question: "Verificar se o texto foi feito por IA é possível com 100% de certeza?", answer: "Não. Atualmente, nenhum detector garante precisão total." },
    { question: "Como detectar se um texto foi feito por IA?", answer: "Usando um detector de IA que analisa padrões linguísticos e previsibilidade do texto." },
    { question: "Detector de IA funciona mesmo?", answer: "Funciona como estimativa, mas pode cometer erros em textos bem escritos." },
    { question: "Qual detector de IA é mais confiável?", answer: "Originality.ai e Turnitin são considerados entre os mais consistentes." },
    { question: "Detector de IA identifica textos curtos?", answer: "Identifica, mas com menor precisão do que em textos longos." },
    { question: "Como verificar se um texto foi feito por IA gratuitamente?", answer: "Ferramentas como GPTZero oferecem análises gratuitas com limitações." },
    { question: "Detector de IA detecta textos parafraseados?", answer: "Depende do nível de reescrita. Parafrasear reduz a precisão da detecção." },
    { question: "Detector de IA funciona para ChatGPT em português?", answer: "Sim, mas a taxa de acerto pode variar conforme o texto." },
    { question: "Verificador de IA pode acusar texto humano como IA?", answer: "Sim. Esse é um dos principais problemas dos detectores atuais." },
    { question: "Detector de IA é usado pelo Google?", answer: "O Google não confirma o uso direto de detectores de IA para penalizações." },
    { question: "Detector de IA consegue identificar textos híbridos?", answer: "É mais difícil, pois textos parcialmente editados confundem o modelo." },
    { question: "Identificador de IA funciona para redações escolares?", answer: "Sim. É um dos usos mais comuns dessas ferramentas." },
    { question: "Detector de texto IA funciona para conteúdo SEO?", answer: "Funciona, mas textos bem otimizados podem parecer humanos." },
    { question: "Detector de IA pode ser enganado?", answer: "Sim. Revisões manuais e ajustes de estilo podem reduzir a detecção." },
    { question: "Verificador de IA analisa gramática e estilo?", answer: "Indiretamente. Ele observa padrões estatísticos e previsibilidade linguística." },
    { question: "Vale a pena usar detector de IA?", answer: "Sim, como ferramenta de apoio — não como julgamento final." }
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
                <ChevronDownIcon className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                <p className="text-gray-600 leading-relaxed">{answer}</p>
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Detector de IA</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
                ))}
            </div>
        </div>
    );
}
