"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const faqs = [
    {
        question: "O que é IA para música?",
        answer: "IA para música é tecnologia que usa inteligência artificial para gerar melodias, letras, arranjos e vozes automaticamente. Ela aprende padrões musicais e cria composições originais com base em prompts textuais, estilos específicos ou referências sonoras fornecidas pelo usuário."
    },
    {
        question: "Para que serve a inteligência artificial para música?",
        answer: "Inteligência artificial para música serve para criar composições, gerar letras, produzir vocais, montar arranjos, criar trilhas sonoras e acelerar processos de produção musical. Ela auxilia músicos, criadores de conteúdo, produtores e pessoas sem conhecimento técnico."
    },
    {
        question: "Como funciona a IA para criar música?",
        answer: "IA para criar música funciona analisando grandes bases de dados musicais e usando modelos generativos para produzir melodias, harmonias e letras. O usuário descreve o estilo em um prompt e a ferramenta transforma essa descrição em uma música completa."
    },
    {
        question: "Como usar IA para fazer música?",
        answer: "Para usar IA para fazer música, basta escrever um prompt com estilo, ritmo e tema. A IA gera letra, melodia, voz e arranjo automaticamente. Plataformas como Suno e Udio permitem criar músicas completas sem conhecimento de produção musical."
    },
    {
        question: "Quais são as melhores IAs para música?",
        answer: "As melhores IAs para música incluem Suno, Udio, AIVA, Soundraw e Amper Music. Elas geram músicas completas, vocais, trilhas instrumentais e até mixagens automáticas. A escolha depende do tipo de projeto e do uso comercial desejado."
    },
    {
        question: "IA para criar música é boa?",
        answer: "IA para criar música é eficaz porque gera composições completas com qualidade profissional, incluindo letra, voz, harmonia e mixagem automática. Ela é usada tanto por amadores quanto por músicos profissionais para acelerar processos criativos."
    },
    {
        question: "IA substitui músicos?",
        answer: "IA não substitui músicos, porque depende de direção artística humana. Ela automatiza tarefas repetitivas e ajuda na criatividade, mas conceitos como interpretação, emoção e escolha estética continuam sendo responsabilidade dos artistas."
    },
    {
        question: "É possível criar músicas completas com IA?",
        answer: "Sim. É possível criar músicas completas com IA, incluindo letra, melodia, instrumentos, arranjos e vocais sintéticos. Ferramentas modernas geram faixas finalizadas prontas para uso em vídeos, jogos, publicidade e plataformas de streaming."
    },
    {
        question: "IA para música pode imitar estilos de artistas famosos?",
        answer: "IA para música pode gerar músicas inspiradas em estilos específicos, mas sem copiar vozes ou melodias protegidas por direitos autorais. Ela recria características gerais, como ritmo, harmonia e atmosfera."
    },
    {
        question: "Posso usar músicas criadas com IA comercialmente?",
        answer: "Sim, mas depende da plataforma usada. Algumas IAs liberam uso comercial total, enquanto outras exigem licenciamento. É essencial verificar os termos de uso antes de publicar ou monetizar músicas geradas por IA."
    },
    {
        question: "IA para fazer música é gratuita?",
        answer: "IA para fazer música pode ser gratuita em planos básicos, mas normalmente com limites de geração. Ferramentas pagas oferecem mais qualidade, velocidade e direitos comerciais. Suno, Udio e AIVA têm versões free e versões premium."
    },
    {
        question: "Como a IA cria letras de música?",
        answer: "A IA cria letras de música analisando padrões linguísticos e estruturais de milhares de composições. Ela usa prompts para definir tema, estilo e emoção, gerando letras completas em poucos segundos."
    },
    {
        question: "IA para música funciona em português?",
        answer: "IA para música funciona em português e consegue gerar letras e vocais em PT-BR. Ferramentas modernas entendem prompts em português e são capazes de cantar com boa pronúncia e prosódia."
    },
    {
        question: "Como escolher a melhor IA para criar música?",
        answer: "Para escolher a melhor IA para criar música, defina o objetivo: músicas completas (Suno, Udio), trilhas instrumentais (AIVA, Soundraw), vocais (Kits.AI), ou mixagem e edição (iZotope). Também verifique direitos comerciais e limitações do plano."
    },
    {
        question: "IA para música é segura em relação a direitos autorais?",
        answer: "IA para música é segura quando a plataforma garante que as obras são originais. Porém, cada serviço possui regras próprias de copyright. É importante conferir se a música pode ser usada comercialmente e se há restrições de distribuição."
    }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 last:border-b-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-4 px-6 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={isOpen}
            >
                <div className="flex gap-3 flex-1">
                    <span className="text-blue-600 font-semibold flex-shrink-0">{index + 1}.</span>
                    <span className="font-semibold text-gray-900">{question}</span>
                </div>
                <ChevronDownIcon
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Conteúdo sempre no DOM para SEO, apenas visualmente escondido */}
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="px-6 pb-4 pl-14 text-gray-700 leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
}

export default function FAQSection() {
    return (
        <div className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Música</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
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
