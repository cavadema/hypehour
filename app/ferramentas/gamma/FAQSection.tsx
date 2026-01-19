"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O Gamma AI é gratuito?",
        answer: "Sim, o Gamma oferece um plano gratuito que utiliza um sistema de créditos. Você recebe créditos iniciais para criar apresentações, documentos e sites. Para uso ilimitado e recursos avançados, existem os planos Plus, Pro e Ultra."
    },
    {
        question: "O Gamma suporta português?",
        answer: "Sim, a ferramenta possui suporte completo ao português, tanto na interface quanto na geração de conteúdo por IA. Você pode digitar prompts em português e receberá slides perfeitamente escritos no idioma."
    },
    {
        question: "Posso exportar para PowerPoint e PDF?",
        answer: "Sim, o Gamma permite exportar suas criações para os formatos PDF e PPTX (PowerPoint). Além disso, você pode compartilhar um link direto para visualização online ou incorporar em outros sites."
    },
    {
        question: "Como funcionam os créditos de IA?",
        answer: "O Gamma utiliza créditos para tarefas de IA, como gerar uma apresentação completa ou criar imagens. No plano gratuito, você recebe uma quantidade finita de créditos. Planos pagos oferecem mais créditos mensais ou até uso ilimitado em alguns níveis."
    },
    {
        question: "É possível personalizar o design após a geração?",
        answer: "Com certeza. O Gamma é um editor flexível. Você pode alterar temas, layouts, adicionar mídias, mudar fontes e até usar o chat de IA para solicitar modificações específicas em slides já criados."
    },
    {
        question: "O Gamma cria sites também?",
        answer: "Sim, uma das grandes vantagens do Gamma é a versatilidade. Ele pode transformar um prompt em uma página web (landing page) funcional e responsiva em segundos, sem que você precise tocar em uma linha de código."
    },
    {
        question: "Posso incorporar vídeos e GIFs?",
        answer: "Sim, o Gamma suporta a incorporação de vídeos do YouTube, Vimeo, GIFs, gráficos interativos e diversos outros tipos de mídia rica para tornar sua apresentação mais dinâmica."
    },
    {
        question: "O Gamma é melhor que o PowerPoint tradicional?",
        answer: "O Gamma não substitui necessariamente o PowerPoint, mas oferece uma abordagem muito mais rápida e focada em design moderno. Enquanto o PowerPoint exige formatação manual, o Gamma automatiza o layout e a hierarquia visual por você."
    },
    {
        question: "Como funciona o sistema de 'cartões' do Gamma?",
        answer: "Diferente dos slides tradicionais com tamanho fixo, o Gamma usa cartões que se expandem conforme o conteúdo. Isso permite uma leitura mais fluida, similar a um documento moderno ou página web, mantendo a organização de uma apresentação."
    },
    {
        question: "O Gamma AI pode gerar imagens originais?",
        answer: "Sim, o Gamma possui um gerador de imagens por IA integrado. Você pode descrever o que precisa e a IA criará imagens exclusivas para compor seus slides, sem preocupações com direitos autorais."
    },
    {
        question: "Posso importar arquivos do PowerPoint para o Gamma?",
        answer: "Sim, você pode importar seus arquivos PPTX existentes para o Gamma. A IA ajudará a transformar o conteúdo estático em um formato mais dinâmico e moderno seguindo os temas da plataforma."
    },
    {
        question: "Existe um aplicativo mobile do Gamma?",
        answer: "Atualmente o Gamma é focado na experiência via navegador, mas o site é totalmente responsivo. Isso significa que você pode visualizar e até fazer edições rápidas diretamente pelo celular ou tablet."
    },
    {
        question: "O Gamma oferece análises de visualização?",
        answer: "Sim, nos planos pagos você tem acesso a analytics detalhados. Pode ver quantas pessoas abriram seu link, quanto tempo passaram em cada slide e de onde vieram os acessos."
    },
    {
        question: "É possível colaborar em tempo real com outras pessoas?",
        answer: "Com certeza. O Gamma suporta edição colaborativa simultânea, permitindo que várias pessoas trabalhem no mesmo projeto ao mesmo tempo, com sistema de comentários e histórico de alterações."
    },
    {
        question: "O Gamma é seguro para dados corporativos?",
        answer: "O Gamma leva a privacidade a sério e utiliza criptografia de ponta. Nos planos empresariais, existem controles adicionais de segurança e governança de dados para garantir que suas informações estratégicas estejam protegidas."
    }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(index < 5); // Primeiros 5 abertos por padrão

    return (
        <div className="border-b border-zinc-200 last:border-0">
            <button
                className="flex w-full items-center justify-between py-4 text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-black group-hover:text-zinc-600 transition-colors">{question}</span>
                <ChevronDownIcon
                    className={`h-5 w-5 text-zinc-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 mb-4" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="text-zinc-600 leading-relaxed text-sm">{answer}</p>
            </div>
        </div>
    );
}

export default function FAQSection() {
    return (
        <section className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre o Gamma AI</h2>
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
        </section>
    );
}
