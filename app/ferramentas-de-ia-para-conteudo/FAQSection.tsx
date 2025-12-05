"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const faqs = [
    {
        question: "O que é uma IA para criação de conteúdo?",
        answer: "Uma IA para criação de conteúdo é um sistema capaz de gerar textos, ideias, títulos, artigos, roteiros, posts e outros formatos automaticamente, com base em comandos fornecidos pelo usuário, acelerando o processo de produção."
    },
    {
        question: "Como funciona uma IA para criar conteúdo?",
        answer: "A IA analisa o comando digitado, identifica o contexto e produz um texto coerente, estruturado e adaptado ao estilo solicitado, podendo gerar artigos completos, descrições de produtos, posts para redes sociais, roteiros e muito mais."
    },
    {
        question: "Quais são as melhores ferramentas de IA para conteúdo?",
        answer: "As melhores ferramentas de IA para criação de conteúdo atualmente são ChatGPT, Claude, Gemini, Jasper AI, Copy.ai, Writesonic, Notion AI e Grammarly, cada uma com recursos específicos para diferentes tipos de produção."
    },
    {
        question: "IA para gerar conteúdo substitui um redator humano?",
        answer: "Não totalmente. A IA acelera o processo, cria rascunhos e oferece ideias, mas o toque humano continua essencial para revisão, criatividade profunda, posicionamento estratégico e coerência com a identidade da marca."
    },
    {
        question: "É possível criar conteúdo para redes sociais usando IA?",
        answer: "Sim. A IA cria legendas, scripts de vídeo, textos curtos, calendários editoriais, ideias de reels, hashtags e até imagens, tornando o processo de criação para redes sociais muito mais rápido e consistente."
    },
    {
        question: "IA para criação de conteúdo gera textos originais?",
        answer: "Sim, a maioria das ferramentas gera textos originais e únicos com base no comando do usuário, porém é recomendado revisar para garantir autenticidade, clareza e alinhamento com o objetivo da marca."
    },
    {
        question: "IA para criar conteúdo é indicada para SEO?",
        answer: "Sim. As melhores ferramentas conseguem sugerir palavras-chave, criar estruturas otimizadas, melhorar a escaneabilidade, gerar títulos chamativos e produzir conteúdo adequado para ranqueamento no Google, desde que revisado manualmente."
    },
    {
        question: "Posso usar IA para criar artigos completos para blogs?",
        answer: "Sim. Ferramentas como ChatGPT, Jasper AI e Claude conseguem gerar artigos completos, com introdução, desenvolvimento e conclusão, porém o ideal é revisar, ajustar o tom de voz e complementar com insights humanos."
    },
    {
        question: "IA para gerar conteúdo é grátis?",
        answer: "Existem opções gratuitas como ChatGPT (versões free), Gemini, Notion AI (com limitações) e Copy.ai em modo básico, mas os planos pagos geralmente oferecem resultados melhores, maior personalização e mais recursos."
    },
    {
        question: "Quais tipos de conteúdo posso criar com IA?",
        answer: "É possível criar artigos, posts para redes sociais, roteiros, e-mails, descrições de produtos, textos para anúncios, newsletters, scripts, títulos, ideias de conteúdo e até imagens e vídeos, dependendo da ferramenta utilizada."
    },
    {
        question: "O que uma IA pode criar em termos de conteúdo?",
        answer: "Uma IA pode criar artigos, posts de redes sociais, textos para anúncios, descrições de produtos, títulos, roteiros e conteúdos longos ou curtos com base no comando do usuário."
    },
    {
        question: "A IA escreve textos iguais para todo mundo?",
        answer: "Não. A IA gera textos únicos conforme o prompt, mas quanto mais detalhado for o comando, mais personalizado e diferente será o resultado."
    },
    {
        question: "A IA é confiável para gerar conteúdo para blog?",
        answer: "Sim. Ela cria conteúdos bem estruturados e otimizados, mas é essencial revisar, ajustar o tom e incluir informações originais para garantir qualidade e autenticidade."
    },
    {
        question: "Como pedir para a IA criar conteúdo do jeito certo?",
        answer: "Basta dar prompts claros, especificando público, objetivo, tamanho do texto, formato, tom de voz e palavras-chave."
    },
    {
        question: "A IA ajuda a criar conteúdo com SEO?",
        answer: "Sim. A IA pode sugerir keywords, criar estruturas otimizadas, melhorar legibilidade e gerar títulos que aumentam o CTR, facilitando estratégias de SEO."
    },
    {
        question: "Posso usar IA para criar conteúdo para Instagram e TikTok?",
        answer: "Sim. Ela cria legendas, roteiros, ideias de vídeos, listas, posts virais e até scripts completos para reels e TikTok."
    },
    {
        question: "IA para conteúdo é paga?",
        answer: "Existem versões gratuitas, como ChatGPT free e Gemini, mas as versões pagas oferecem mais recursos, informação atualizada, melhor criatividade e maior controle de escrita."
    },
    {
        question: "A IA consegue adaptar conteúdo para diferentes públicos?",
        answer: "Sim. Basta pedir para ajustar o texto para um público específico, como jovens, profissionais, iniciantes, empresários, professores, entre outros."
    },
    {
        question: "A IA pode gerar ideias de conteúdo quando estou sem criatividade?",
        answer: "Sim. Ela é excelente para brainstorming e pode gerar listas de ideias, temas de vídeos, pautas de blog, títulos e até calendários completos."
    },
    {
        question: "A IA substitui totalmente um criador de conteúdo?",
        answer: "Não. Ela é uma ferramenta de apoio poderosa, mas a criatividade humana, a visão estratégica e o toque pessoal continuam indispensáveis."
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
                    <span className="text-black font-semibold flex-shrink-0">{index + 1}.</span>
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Conteúdo</h2>
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
