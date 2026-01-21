"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é o Visme?",
        answer: "O Visme é uma plataforma multifuncional de comunicação visual que permite criar não apenas apresentações, mas também infográficos, documentos, gráficos de dados, vídeos e conteúdos para redes sociais, tudo potencializado por inteligência artificial.",
    },
    {
        question: "O Visme possui um gerador de apresentações com IA?",
        answer: "Sim, o Visme possui o 'AI Presentation Maker' que gera um rascunho completo de uma apresentação (texto, imagens e design) a partir de um prompt simples descrevendo o que você precisa.",
    },
    {
        question: "O Visme é gratuito?",
        answer: "O Visme oferece um plano básico gratuito (Free) para sempre, que inclui recursos limitados, 10 créditos de IA por mês e armazenamento restrito. Para recursos avançados e downloads sem marca d'água, é necessária uma assinatura paga.",
    },
    {
        question: "Posso criar infográficos com IA no Visme?",
        answer: "Sim, além de apresentações, a ferramenta de IA do Visme também permite gerar infográficos, relatórios e outros documentos visuais rapidamente através de comandos de texto.",
    },
    {
        question: "O Visme exporta para PowerPoint?",
        answer: "Sim, usuários dos planos Pro e superiores podem baixar suas apresentações no formato .pptx para uso no Microsoft PowerPoint.",
    },
    {
        question: "O Visme funciona em português?",
        answer: "Embora a interface principal da plataforma seja predominantemente em inglês, a inteligência artificial do Visme entende prompts em português e é capaz de gerar conteúdo textual totalmente em português.",
    },
    {
        question: "Como funcionam os créditos de IA no Visme?",
        answer: "Cada vez que você usa uma ferramenta generativa (como criar um design, uma imagem ou usar o AI Writer), você consome créditos de IA. O plano gratuito oferece 10 créditos mensais, enquanto os planos pagos oferecem limites muito maiores.",
    },
    {
        question: "O Visme é melhor que o Canva para apresentações?",
        answer: "O Visme é focado em apresentações mais ricas em dados e interativas. Ele oferece ferramentas de visualização de dados e colaboração empresarial mais robustas do que o Canva, sendo preferido por profissionais corporativos e de marketing.",
    },
    {
        question: "Posso adicionar interatividade aos slides no Visme?",
        answer: "Sim, um dos grandes diferenciais do Visme é a capacidade de adicionar botões clicáveis, pop-ups (hotspots), animações complexas e menus interativos que funcionam quando você compartilha o link online.",
    },
    {
        question: "As imagens geradas pela IA no Visme são originais?",
        answer: "Sim, as imagens são geradas sob demanda pela IA a partir do seu prompt, resultando em visuais únicos. Além disso, você tem acesso aos bancos de imagens e ícones integrados.",
    },
    {
        question: "O Visme tem ferramentas para equipes (colaboração)?",
        answer: "Sim, nos planos empresariais e Pro, o Visme permite colaboração em tempo real, comentários, fluxos de aprovação e gerenciamento de ativos de marca (Brand Kit).",
    },
    {
        question: "Posso importar dados do Excel ou Google Sheets?",
        answer: "Sim, o Visme possui integrações poderosas que permitem conectar planilhas do Excel ou Google Sheets para criar gráficos e tabelas que se atualizam automaticamente.",
    },
    {
        question: "Existe limite de armazenamento no Visme?",
        answer: "Sim, o plano gratuito oferece cerca de 100MB a 500MB. O plano Starter oferece 250MB e o Pro oferece 3GB de armazenamento na nuvem.",
    },
    {
        question: "O Visme é seguro para uso corporativo?",
        answer: "Sim, a plataforma segue padrões rigorosos de segurança de dados, oferece Single Sign-On (SSO) nos planos Enterprise e permite o controle de privacidade de cada projeto.",
    },
    {
        question: "Quais são os formatos de download disponíveis?",
        answer: "Dependendo do seu plano, você pode baixar projetos em JPG, PNG, PDF, PPTX, vídeo MP4, GIF e até mesmo HTML5 (para offline interativo).",
    },
    {
        question: "Posso criar vídeos com o Visme?",
        answer: "Sim, o Visme possui um editor de vídeo integrado que permite criar anúncios curtos, introduções, vídeos explicativos e animações para redes sociais.",
    },
    {
        question: "O Visme oferece suporte ao cliente?",
        answer: "Sim, todos os usuários têm acesso à central de ajuda. Usuários Starter e Pro têm suporte prioritário via chat e email 24/7.",
    },
    {
        question: "Como o 'Brand Wizard' do Visme funciona?",
        answer: "Você insere o URL do seu site e o Visme extrai automaticamente suas cores de marca, logotipos e fontes para criar um kit de marca personalizado instantaneamente.",
    },
    {
        question: "Posso usar minhas próprias fontes no Visme?",
        answer: "Sim, usuários dos planos Pro e Business podem fazer upload de fontes personalizadas para manter a consistência visual da marca.",
    },
    {
        question: "O Visme é difícil de aprender?",
        answer: "Por ter muitos recursos, existe uma pequena curva de aprendizado, mas a interface drag-and-drop e os tutoriais integrados facilitam muito o processo para iniciantes.",
    },
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre o Visme AI</h2>
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
