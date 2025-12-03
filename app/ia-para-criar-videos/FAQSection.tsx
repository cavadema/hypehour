"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é uma IA para criar vídeos?",
        answer: "É uma ferramenta que usa inteligência artificial para gerar vídeos automaticamente a partir de textos, imagens, áudios ou prompts."
    },
    {
        question: "Qual a melhor IA para fazer vídeos hoje?",
        answer: "As mais populares são Runway, Pika Labs, Luma Dream Machine e Synthesia, conhecidas pela qualidade e velocidade."
    },
    {
        question: "IA para criar vídeos funciona apenas com texto?",
        answer: "Não. Ela pode usar texto, imagens, vídeos curtos, narrações, gravações de voz e até referências de estilo."
    },
    {
        question: "Qual IA para editar vídeos automaticamente?",
        answer: "Ferramentas como Descript, Veed.io e Kapwing utilizam IA para cortes inteligentes, remoção de ruído, transições e montagem automática."
    },
    {
        question: "IA para legendar vídeos é confiável?",
        answer: "Sim. IAs como Nova AI, CapCut e Veed.io geram legendas automáticas precisas, com tradução integrada e revisão rápida."
    },
    {
        question: "Existe IA gratuita para criar vídeos?",
        answer: "Sim. CapCut, Pika Labs (limitado), Veed.io Free e invideo.io oferecem planos gratuitos com funcionalidades básicas."
    },
    {
        question: "IA para fazer vídeos deixa marcas d’água?",
        answer: "Depende da ferramenta. A maioria das versões gratuitas inclui marca d’água."
    },
    {
        question: "IA para criar vídeos é boa para conteúdo de redes sociais?",
        answer: "Sim. A maioria das IAs gera vídeos otimizados para TikTok, Reels, YouTube Shorts e anúncios."
    },
    {
        question: "Qual IA transforma texto em vídeo automaticamente?",
        answer: "Runway, Pika Labs, Luma AI e Synthesia permitem criar vídeos completos apenas com prompts."
    },
    {
        question: "IA para editar vídeos substitui um editor humano?",
        answer: "Não totalmente. Ela acelera tarefas repetitivas, mas não substitui a criatividade profissional."
    },
    {
        question: "IA para legendar vídeos suporta vários idiomas?",
        answer: "Sim. Muitas oferecem legendagem e tradução automática em dezenas de idiomas."
    },
    {
        question: "É possível criar vídeos longos com IA?",
        answer: "Sim, mas algumas ferramentas têm limites de duração dependendo do plano."
    },
    {
        question: "IA para criar vídeos funciona em celular?",
        answer: "Sim, apps como CapCut e Veed.io têm versões mobile com IA integrada."
    },
    {
        question: "Quais são os tipos de vídeos criados por IA?",
        answer: "A IA pode gerar vídeos animados, realistas, institucionais, narrados, educativos ou publicitários."
    },
    {
        question: "IA para fazer vídeos pode criar pessoas artificiais (avatars)?",
        answer: "Sim. Plataformas como Synthesia e HeyGen criam apresentadores digitais realistas."
    },
    {
        question: "Como funciona uma IA que cria vídeos a partir de texto?",
        answer: "Ela interpreta o prompt, identifica estilos visuais compatíveis e gera cenas baseadas em modelos de difusão ou vídeo-to-video."
    },
    {
        question: "Qual IA gratuita é melhor para criar vídeos rapidamente?",
        answer: "CapCut e InVideo são opções populares por oferecer recursos robustos sem custo inicial."
    },
    {
        question: "Qual IA é boa para fazer vídeos de marketing?",
        answer: "Runway e Synthesia são amplamente usadas por empresas para criar vídeos institucionais e promocionais."
    },
    {
        question: "Dá para fazer vídeos realistas com IA?",
        answer: "Sim. Ferramentas como Luma Dream Machine e Pika Labs criam movimentos realistas e cenas cinematográficas."
    },
    {
        question: "Qual IA é mais usada para editar vídeos automaticamente?",
        answer: "Descript e Veed.io são referência em edição automatizada baseada em texto."
    },
    {
        question: "IA para legendar vídeos pode traduzir automaticamente?",
        answer: "Sim. A maioria suporta tradução instantânea para dezenas de idiomas."
    },
    {
        question: "Existe IA para transformar um vídeo simples em algo mais profissional?",
        answer: "Sim. Runway e Kapwing aplicam filtros, correções de cor, cortes e ajustes automáticos."
    },
    {
        question: "IA para fazer vídeos usa modelos prontos?",
        answer: "Sim. A maioria oferece templates para acelerar criação de conteúdo."
    },
    {
        question: "É possível criar vídeos com avatar digital usando IA?",
        answer: "Sim. HeyGen e Synthesia permitem criar apresentadores virtuais realistas."
    },
    {
        question: "IA para criar vídeos precisa de computador potente?",
        answer: "Não. Como o processamento ocorre na nuvem, até celulares dão conta do uso."
    },
    {
        question: "Quais ferramentas de IA são boas para transformar áudio em vídeo?",
        answer: "Pika, Runway, Veed.io e Luma AI convertem narrações em vídeos automáticos."
    },
    {
        question: "Como a IA ajuda iniciantes na edição de vídeo?",
        answer: "Ela automatiza cortes, ritmo, legenda, trilha e transições."
    },
    {
        question: "IA para editar vídeos pode remover objetos da cena?",
        answer: "Sim. Runway e CapCut possuem recursos de object removal via IA."
    },
    {
        question: "IA para criar vídeos é boa para criadores de conteúdo?",
        answer: "Sim. Ela acelera produção, reduz custos e permite criar vídeos diariamente."
    },
    {
        question: "IA para vídeos pode gerar animações completas?",
        answer: "Sim. Várias ferramentas geram animações 2D e 3D baseadas apenas em prompts."
    }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(index < 5); // Primeiros 5 abertos por padrão

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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Vídeos</h2>
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
