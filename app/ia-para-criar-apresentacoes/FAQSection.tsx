"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const faqs = [
    {
        question: "O que é uma IA para fazer slides?",
        answer: "Uma IA para fazer slides é uma ferramenta capaz de gerar automaticamente apresentações completas, criando textos, layouts e imagens a partir de um tema ou prompt digitado pelo usuário, simplificando totalmente o processo de produção de slides."
    },
    {
        question: "Qual é a melhor IA para criar apresentações?",
        answer: "As melhores IAs para criar apresentações atualmente são Gamma, Beautiful.ai, Tome, Canva com IA, Pitch, PowerPoint Copilot, Google Slides com Gemini e Zoho Show AI, variando conforme o objetivo do usuário, como velocidade, personalização, design ou uso corporativo."
    },
    {
        question: "Existem IAs para criar apresentações de slides grátis?",
        answer: "Sim. Existem opções gratuitas como Canva, Gamma, Tome, Google Slides com Gemini, Beautiful.ai (versão limitada) e alguns recursos gratuitos do PowerPoint Copilot, todas com funcionalidades suficientes para criar apresentações completas sem custo."
    },
    {
        question: "Como funciona uma ferramenta de IA para criar apresentações?",
        answer: "A ferramenta recebe um tema, texto ou documento e, com base nisso, gera automaticamente a estrutura dos tópicos, os textos principais, o design visual, o layout dos slides, imagens complementares e até infográficos, permitindo edição manual caso o usuário deseje ajustar."
    },
    {
        question: "Qual é a IA mais rápida para fazer slides automaticamente?",
        answer: "As IAs mais rápidas para gerar apresentações completas em poucos segundos são Gamma e Tome, que criam slides com textos, imagens, design e estrutura praticamente prontos para uso."
    },
    {
        question: "Existe IA que cria apresentação a partir de texto, artigo ou PDF?",
        answer: "Sim. Ferramentas como Gamma, Canva, PowerPoint Copilot, Beautiful.ai e Google Gemini conseguem transformar textos longos, PDFs, artigos, documentos e resumos em apresentações prontas automaticamente."
    },
    {
        question: "Posso usar IA para criar apresentações profissionais?",
        answer: "Sim. A maioria dessas ferramentas gera apresentações com qualidade profissional, sendo usadas para reuniões empresariais, propostas comerciais, pitches, aulas, treinamentos, trabalhos acadêmicos e eventos corporativos. Entre as mais indicadas para uso profissional estão Pitch, Beautiful.ai e Canva."
    },
    {
        question: "Qual IA cria apresentações com melhor design?",
        answer: "As IAs que se destacam no design são Beautiful.ai, Gamma, Tome e Pitch, que oferecem modelos modernos, animações elegantes e ajustes automáticos que deixam os slides visualmente equilibrados e profissionais."
    },
    {
        question: "IA para criar apresentação é melhor que usar PowerPoint manualmente?",
        answer: "Para quem prioriza rapidez, sim. A IA cria automaticamente a estrutura, organiza os textos, ajusta o design e gera imagens, economizando horas de trabalho. Depois, o usuário ainda pode exportar e finalizar tudo no PowerPoint, se desejar."
    },
    {
        question: "Tem IA que cria slides com imagens e gráficos automaticamente?",
        answer: "Sim. Plataformas como Gamma, Tome, Canva e Beautiful.ai geram gráficos, tabelas, ilustrações e imagens automaticamente com base no conteúdo inserido pelo usuário."
    },
    {
        question: "Posso baixar a apresentação criada pela IA em PowerPoint (PPT)?",
        answer: "Sim. A maioria das ferramentas permite exportar os slides em formatos como PPTX, PDF ou imagens, especialmente Canva, Gamma e Beautiful.ai."
    },
    {
        question: "IA para criar apresentações funciona para estudar e fazer trabalhos?",
        answer: "Sim. Estudantes usam essas ferramentas para criar resumos, apresentações de livros, seminários, TCCs e trabalhos escolares com rapidez. As opções mais populares para estudos são Canva, Google Slides e Gamma."
    },
    {
        question: "IA para criar slides é segura?",
        answer: "Sim, desde que você utilize plataformas confiáveis. Ferramentas como Canva, Microsoft Copilot, Google Gemini, Gamma e Beautiful.ai seguem padrões de segurança e privacidade que protegem os dados enviados pelos usuários."
    },
    {
        question: "Qual IA cria apresentação no estilo PowerPoint tradicional?",
        answer: "As melhores opções para quem prefere o estilo tradicional do PowerPoint são PowerPoint Copilot, Canva (com exportação para PPT) e Google Slides, que mantêm layouts mais clássicos e fáceis de editar."
    },
    {
        question: "Qual IA é melhor para apresentações em português?",
        answer: "As ferramentas que melhor compreendem e geram conteúdo em português são Gamma, Canva, Tome, Microsoft Copilot e Google Gemini, garantindo textos mais naturais e bem estruturados no idioma."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Apresentações</h2>
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
