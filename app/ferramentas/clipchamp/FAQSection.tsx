
"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é o Clipchamp e para que serve?",
        answer: "O Clipchamp é um editor de vídeos online da Microsoft que facilita a criação de conteúdo audiovisual. Ele serve para editar vídeos, adicionar efeitos, transições, legendas automáticas e narrações com IA, tudo diretamente no navegador ou no app do Windows, sem precisar de conhecimentos avançados."
    },
    {
        question: "Como começar a usar o Clipchamp?",
        answer: "É muito simples: se você usa Windows 11, ele já está instalado. Caso contrário, acesse clipchamp.com ou baixe na Microsoft Store. Basta fazer login com sua conta Microsoft (ou Google), clicar em 'Criar um novo vídeo' e arrastar seus arquivos para começar a editar."
    },
    {
        question: "O que posso criar com o Clipchamp?",
        answer: "Você pode criar praticamente qualquer tipo de vídeo: apresentações de trabalho, vídeos para YouTube, Reels e TikToks, tutoriais de jogos, vídeos de aniversário, anúncios para redes sociais e muito mais. Ele oferece templates prontos para todos esses formatos."
    },
    {
        question: "O Clipchamp é realmente gratuito?",
        answer: "Sim, a versão gratuita (Free) é muito completa. Ela permite exportar vídeos ilimitados em 1080p (HD) sem marca d'água e dá acesso a ferramentas de edição padrão, legendas automáticas e algumas mídias de estoque."
    },
    {
        question: "O Clipchamp coloca marca d'água?",
        answer: "Não! Se você usar apenas recursos gratuitos (ou seus próprios arquivos), pode exportar em 1080p sem nenhuma marca d'água. A marca d'água só aparece se você usar recursos Premium sem pagar."
    },
    {
        question: "O Clipchamp funciona no Windows 10?",
        answer: "Sim, você pode baixar o aplicativo na Microsoft Store. No Windows 11, ele já vem pré-instalado como o editor de vídeo padrão."
    },
    {
        question: "Posso usar o Clipchamp no Mac?",
        answer: "Sim, você pode usar a versão web completa através do navegador Chrome ou Edge no seu Mac. Não há um app desktop específico para Mac, mas a versão web funciona perfeitamente."
    },
    {
        question: "O recurso de texto em fala (TTS) é bom?",
        answer: "Excelente. Ele usa a tecnologia Azure TTS da Microsoft, que oferece algumas das vozes mais naturais e realistas do mercado, com diversas opções de idiomas e sotaques."
    },
    {
        question: "Quais formatos de arquivo ele aceita?",
        answer: "O Clipchamp aceita os formatos de vídeo, áudio e imagem mais comuns, como MP4, MOV, MP3, JPG e PNG."
    },
    {
        question: "Existe limite de duração para os vídeos?",
        answer: "Teoricamente não, mas a performance no navegador pode cair em vídeos muito longos (acima de 30 minutos ou 1 hora) dependendo do seu computador. Recomenda-se vídeos de até 10-20 minutos para melhor fluidez."
    },
    {
        question: "Posso colaborar em equipe?",
        answer: "O Clipchamp for Work (versão empresarial Microsoft 365) oferece recursos de colaboração, mas na versão pessoal o foco é individual."
    },
    {
        question: "Como funcionam as legendas automáticas?",
        answer: "A IA \"ouve\" o áudio do seu vídeo e gera um arquivo de legenda editável. Você pode corrigir palavras, mudar o estilo visual e até baixar o arquivo .SRT separadamente."
    },
    {
        question: "Qual a diferença para o plano Premium?",
        answer: "O plano Premium (pago) libera exportação em 4K, acesso ilimitado à biblioteca de estoque premium (áudio, imagem, vídeo), kits de marca (logotipo/cores) e backup de conteúdo."
    }
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre o Clipchamp</h2>
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
