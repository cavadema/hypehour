"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é o Smallppt AI?",
        answer: "O Smallppt AI é uma plataforma avançada que utiliza inteligência artificial para automatizar a criação de apresentações profissionais, permitindo gerar slides a partir de temas, documentos, URLs e até áudio.",
    },
    {
        question: "Como funciona a criação de slides no Smallppt?",
        answer: "Você pode inserir um comando de texto (prompt), fazer upload de um arquivo Word/PDF, colar um link de site ou enviar um áudio. A IA processa essas informações, estrutura o roteiro, redige o conteúdo e aplica um design completo em segundos.",
    },
    {
        question: "O Smallppt é gratuito?",
        answer: "Sim, o Smallppt oferece um plano gratuito que permite criar até 4 apresentações e utilizar recursos básicos de IA. Para uso frequente e recursos premium, é necessário assinar um dos planos pagos.",
    },
    {
        question: "Quais são os formatos de exportação suportados?",
        answer: "O Smallppt permite baixar suas apresentações diretamente nos formatos .PPTX (totalmente editável no Microsoft PowerPoint) e PDF de alta qualidade.",
    },
    {
        question: "O Smallppt suporta o idioma português?",
        answer: "Sim, tanto a interface quanto a inteligência artificial suportam totalmente o português (Brasil e Portugal), garantindo textos naturais e contextualmente corretos.",
    },
    {
        question: "O que é a função 'Mapa Mental para PPT'?",
        answer: "É um recurso exclusivo que permite criar um mapa mental visual e, com um clique, transformá-lo automaticamente em uma apresentação de slides estruturada hierarquicamente.",
    },
    {
        question: "Posso transformar um PDF ou arquivo Word em apresentação?",
        answer: "Sim, o Smallppt possui ferramentas de importação poderosas que 'leem' seus documentos e convertem o conteúdo em slides organizados e visualmente atraentes.",
    },
    {
        question: "O que está incluído no plano Vitalício (Lifetime)?",
        answer: "O plano Vitalício oferece acesso ilimitado a todas as ferramentas de IA, gerações de slides sem limites e atualizações futuras por um pagamento único, sem mensalidades.",
    },
    {
        question: "Quais modelos de IA o Smallppt utiliza?",
        answer: "A plataforma integra os modelos mais avançados do mercado, como GPT-4o da OpenAI e o modelo Gemini da Google, para garantir a melhor qualidade de texto e lógica.",
    },
    {
        question: "Posso editar os slides gerados pela IA?",
        answer: "Totalmente. O Smallppt possui um editor online intuitivo onde você pode alterar textos, trocar imagens, mudar layouts, adicionar animações e reorganizar todos os elementos.",
    },
    {
        question: "Como o AI Writer ajuda no processo?",
        answer: "O assistente de escrita integrado permite expandir seus parágrafos, resumir textos longos, mudar o tom da linguagem ou até mesmo traduzir slides instantaneamente.",
    },
    {
        question: "Existe limite de gerações no plano mensal?",
        answer: "O plano Básico Mensal geralmente inclui 30 gerações de slides por mês. Já os planos Mensal Ilimitado e Anual Ilimitado não possuem restrições de quantidade.",
    },
    {
        question: "O Smallppt oferece banco de imagens?",
        answer: "Sim, a IA sugere e insere automaticamente imagens, ícones e ilustrações relevantes de alta qualidade baseadas no contexto de cada slide.",
    },
    {
        question: "Posso colaborar com minha equipe?",
        answer: "Sim, os planos para Times permitem que vários usuários colaborem em tempo real nos mesmos projetos, com compartilhamento facilitado e ferramentas de gestão de grupo.",
    },
    {
        question: "O Smallppt funciona no celular?",
        answer: "Sim, a plataforma é totalmente responsiva e funciona através do navegador no mobile, facilitando criações rápidas em qualquer lugar.",
    },
    {
        question: "Como funciona a criação de slides por URL?",
        answer: "Basta colar o link de um artigo ou página da web e a IA irá extrair as informações principais do site para criar uma apresentação resumida e visual sobre o assunto.",
    },
    {
        question: "O Smallppt é seguro?",
        answer: "Sim, a plataforma utiliza criptografia SSL para proteger seus dados e documentos. Os pagamentos são processados via Stripe para máxima segurança financeira.",
    },
    {
        question: "Posso inserir vídeos e áudios nos slides?",
        answer: "Sim, o editor permite a inserção de elementos multimídia para tornar suas apresentações mais dinâmicas e interativas.",
    },
    {
        question: "Consigo cancelar minha assinatura facilmente?",
        answer: "Sim, você pode gerenciar e cancelar sua assinatura a qualquer momento diretamente nas configurações da sua conta, sem burocracia.",
    },
    {
        question: "Existe extensão para navegador?",
        answer: "Sim, o Smallppt oferece uma extensão para Google Chrome que facilita o acesso rápido às ferramentas de IA e produtividade diretamente no browser.",
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre o Smallppt AI</h2>
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
