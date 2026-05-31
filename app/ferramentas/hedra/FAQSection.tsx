"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    { question: "O que é o Hedra?", answer: "Hedra é uma plataforma de criação de vídeos com IA especializada em gerar avatares falantes com sincronização labial realista, transformando imagens estáticas e arquivos de áudio em vídeos expressivos e naturais." },
    { question: "Para que serve o Hedra?", answer: "O Hedra serve para criar vídeos com personagens falantes a partir de uma foto e um arquivo de áudio, ideal para apresentações, conteúdo educacional, marketing digital, avatares virtuais e criação de personagens com voz." },
    { question: "O Hedra é gratuito?", answer: "O Hedra oferece plano gratuito com créditos mensais para geração de vídeos. Planos pagos liberam mais créditos, maior resolução e acesso prioritário a novos recursos." },
    { question: "Como o Hedra funciona?", answer: "Você envia uma imagem de um rosto e um arquivo de áudio com a fala desejada, e o Hedra gera automaticamente um vídeo do personagem falando com sincronização labial e expressões faciais realistas." },
    { question: "O Hedra funciona com qualquer foto?", answer: "O Hedra funciona melhor com fotos frontais nítidas de rostos humanos ou personagens. Fotos com boa iluminação e foco no rosto produzem os melhores resultados de sincronização." },
    { question: "O Hedra suporta português?", answer: "Sim. O Hedra sincroniza o movimento labial com qualquer idioma, incluindo o português. Basta gravar ou enviar o áudio em português e o personagem falará no idioma." },
    { question: "O Hedra é bom para criar avatares?", answer: "Sim. É uma das ferramentas mais usadas para criar avatares digitais falantes, personas virtuais e personagens para conteúdo de vídeo sem necessidade de filmagem real." },
    { question: "Posso usar o Hedra para criar vídeos de apresentação?", answer: "Sim. O Hedra é muito usado para criar vídeos de apresentação com porta-vozes virtuais, tutoriais narrados com personagens e conteúdo explicativo com avatares." },
    { question: "O Hedra é bom para marketing?", answer: "Sim. Marcas e criadores usam o Hedra para produzir vídeos de campanhas, anúncios com personagens e conteúdo para redes sociais com avatares falantes de alta qualidade." },
    { question: "O Hedra é melhor que o HeyGen?", answer: "O Hedra e o HeyGen têm propostas similares, mas com diferenças no fluxo de trabalho e estilo de resultados. O Hedra se destaca pela facilidade de uso com uma imagem qualquer, enquanto o HeyGen tem foco em avatares corporativos e mais opções de personalização." },
    { question: "O Hedra funciona no celular?", answer: "Sim. A plataforma é acessível via navegador em dispositivos móveis, sem necessidade de instalação de aplicativo." },
    { question: "Qual formato de áudio o Hedra aceita?", answer: "O Hedra aceita os formatos de áudio mais comuns como MP3 e WAV. Você pode gravar o áudio em qualquer ferramenta e fazer upload diretamente na plataforma." },
    { question: "O Hedra permite uso comercial?", answer: "Os planos pagos geralmente permitem uso comercial dos vídeos gerados. Verifique os termos de uso para confirmar as permissões do seu plano específico." },
    { question: "O Hedra mantém a expressão facial do personagem?", answer: "Sim. O Hedra gera expressões faciais coerentes com o conteúdo do áudio, incluindo movimentos labiais sincronizados e expressões naturais durante a fala." },
    { question: "Como começar a usar o Hedra?", answer: "Acesse hedra.com, crie uma conta gratuita, faça upload de uma imagem frontal e de um arquivo de áudio, e aguarde o vídeo ser gerado com o personagem falando." },
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Hedra</h2>
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
