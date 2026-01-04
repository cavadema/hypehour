"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é o KlingAI?",
        answer: "KlingAI é uma ferramenta de IA para criar vídeos realistas com movimentos complexos, física avançada e alta qualidade visual."
    },
    {
        question: "Para que serve o KlingAI?",
        answer: "O KlingAI serve para gerar vídeos a partir de texto ou imagens, criar animações realistas e produzir conteúdo visual para marketing, redes sociais e projetos criativos."
    },
    {
        question: "O KlingAI é uma IA para criar vídeos?",
        answer: "Sim. O KlingAI é uma IA voltada especificamente para geração de vídeos de alta qualidade."
    },
    {
        question: "O KlingAI é indicado para iniciantes?",
        answer: "Sim. A interface é intuitiva e você pode criar vídeos apenas descrevendo o que deseja em texto."
    },
    {
        question: "O KlingAI funciona para profissionais?",
        answer: "Sim. Ele é usado por agências, produtoras e criadores profissionais para acelerar produção."
    },
    {
        question: "Que tipos de vídeos o KlingAI cria?",
        answer: "O KlingAI cria vídeos cinematográficos, animações, cenas realistas, vídeos de produtos e conteúdo para redes sociais."
    },
    {
        question: "O KlingAI cria vídeos do zero?",
        answer: "Sim. Você pode descrever a cena em texto e a IA gera o vídeo completo."
    },
    {
        question: "O KlingAI anima imagens?",
        answer: "Sim. Ele pode transformar fotos estáticas em vídeos animados com movimentos naturais."
    },
    {
        question: "O KlingAI funciona via navegador?",
        answer: "Sim. A plataforma é acessível via web browser, sem necessidade de instalação."
    },
    {
        question: "O KlingAI é gratuito?",
        answer: "O KlingAI oferece plano gratuito com limitações e planos pagos com mais recursos e créditos."
    },
    {
        question: "O KlingAI é bom para marketing?",
        answer: "Sim. Ele é muito usado para criar vídeos de campanhas, anúncios e conteúdo para redes sociais."
    },
    {
        question: "O KlingAI pode criar vídeos longos?",
        answer: "Os vídeos gerados são curtos (geralmente segundos a poucos minutos), ideais para clipes e cenas."
    },
    {
        question: "O KlingAI é seguro para uso comercial?",
        answer: "Verifique os termos de uso, mas muitos planos permitem uso comercial dos vídeos gerados."
    },
    {
        question: "O KlingAI é usado profissionalmente?",
        answer: "Sim. Agências e produtoras usam para acelerar a criação de vídeos e prototipar ideias."
    },
    {
        question: "Vale a pena usar o KlingAI?",
        answer: "Sim, especialmente se você precisa criar vídeos rápidos com qualidade visual alta."
    },
    {
        question: "O KlingAI é melhor que outros geradores?",
        answer: "Depende do caso, mas o KlingAI se destaca em física realista e movimentos complexos."
    },
    {
        question: "Dá para criar vídeos profissionais com o KlingAI?",
        answer: "Sim, especialmente para conteúdo de marketing, social media e demos de produtos."
    },
    {
        question: "O KlingAI precisa de conhecimento técnico?",
        answer: "Não. A ferramenta é acessível para qualquer pessoa que saiba descrever o que deseja."
    },
    {
        question: "O KlingAI gera vídeos de qualidade?",
        answer: "Sim, a qualidade visual é alta, com física realista e movimentos naturais."
    },
    {
        question: "O KlingAI funciona para redes sociais?",
        answer: "Sim. É ideal para criar conteúdo para Instagram, TikTok, YouTube e outras plataformas."
    },
    {
        question: "O KlingAI substitui cinegrafistas?",
        answer: "Não totalmente, mas complementa ao gerar cenas que seriam caras ou difíceis de filmar."
    },
    {
        question: "O KlingAI funciona offline?",
        answer: "Não. Ele depende de conexão com a internet para processar os vídeos."
    },
    {
        question: "O KlingAI aprende com meus vídeos?",
        answer: "A IA pode se adaptar ao estilo dos prompts durante o uso, mas não treina especificamente com seu conteúdo."
    },
    {
        question: "O KlingAI é indicado para freelancers?",
        answer: "Sim. Ajuda freelancers a entregar mais projetos em menos tempo."
    },
    {
        question: "O KlingAI é bom para startups?",
        answer: "Sim. É muito usado para criar vídeos de apresentação, demos e campanhas de lançamento."
    },
    {
        question: "O KlingAI suporta estilos diferentes?",
        answer: "Sim, você pode especificar o estilo visual, tom e atmosfera desejados no prompt."
    },
    {
        question: "O KlingAI gera vídeos prontos para publicar?",
        answer: "Ele gera vídeos funcionais, mas revisão e ajustes finais são recomendados."
    },
    {
        question: "O KlingAI é uma ferramenta brasileira?",
        answer: "Não, mas é acessível globalmente e pode ser usada no Brasil."
    },
    {
        question: "O KlingAI vale a pena em relação a outras IAs?",
        answer: "Sim, especialmente se você valoriza realismo físico e qualidade cinematográfica."
    },
    {
        question: "Como começar a usar o KlingAI?",
        answer: "Acesse o site, crie uma conta, descreva o vídeo desejado e aguarde a geração."
    }
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
                <ChevronDownIcon
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}

export default function FAQSection() {
    return (
        <div className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre KlingAI</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
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
