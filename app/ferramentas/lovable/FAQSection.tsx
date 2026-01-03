"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é o Lovable?",
        answer: "Lovable é uma ferramenta de vibe coding que usa inteligência artificial para ajudar a criar código de forma rápida, intuitiva e criativa."
    },
    {
        question: "Para que serve o Lovable?",
        answer: "O Lovable serve para gerar, editar e melhorar código a partir de linguagem natural, focando em produtividade e fluxo criativo."
    },
    {
        question: "O Lovable é uma IA para programação?",
        answer: "Sim. É uma IA voltada para programação, com foco em vibe coding e desenvolvimento assistido."
    },
    {
        question: "O Lovable é indicado para iniciantes?",
        answer: "Sim. Ele facilita a criação de código mesmo para quem está começando a programar."
    },
    {
        question: "O Lovable funciona para desenvolvedores experientes?",
        answer: "Sim. Ele acelera tarefas repetitivas e ajuda na prototipação rápida."
    },
    {
        question: "Quais linguagens o Lovable suporta?",
        answer: "O Lovable suporta múltiplas linguagens populares, dependendo do contexto do projeto."
    },
    {
        question: "O Lovable cria código do zero?",
        answer: "Sim. Você pode descrever o que deseja e a IA gera o código inicial."
    },
    {
        question: "O Lovable ajuda a corrigir bugs?",
        answer: "Sim. Ele analisa trechos de código e sugere correções e melhorias."
    },
    {
        question: "O Lovable funciona via navegador ou IDE?",
        answer: "Geralmente funciona via interface web, com foco em simplicidade e fluxo."
    },
    {
        question: "O Lovable é gratuito?",
        answer: "O Lovable pode oferecer plano gratuito ou testes, além de planos pagos."
    },
    {
        question: "O Lovable é bom para vibe coding?",
        answer: "Sim. Ele é projetado justamente para manter o fluxo criativo enquanto você programa."
    },
    {
        question: "O Lovable pode substituir um programador?",
        answer: "Não. Ele é uma ferramenta de apoio, não um substituto humano."
    },
    {
        question: "O Lovable é seguro para projetos reais?",
        answer: "Sim, desde que o código seja revisado antes do uso em produção."
    },
    {
        question: "O Lovable é usado em projetos profissionais?",
        answer: "Sim. Pode ser usado para protótipos, MVPs e até partes de projetos reais."
    },
    {
        question: "Vale a pena usar o Lovable para programar?",
        answer: "Sim. Ele aumenta produtividade e reduz fricção no desenvolvimento."
    },
    {
        question: "O Lovable é melhor que ChatGPT para programar?",
        answer: "Depende do uso, mas o Lovable é mais focado em vibe coding e fluxo criativo."
    },
    {
        question: "O Lovable substitui o GitHub Copilot?",
        answer: "Não exatamente. Ele oferece uma experiência diferente, mais conversacional."
    },
    {
        question: "Dá para criar projetos completos com o Lovable?",
        answer: "Sim, especialmente MVPs e protótipos rápidos."
    },
    {
        question: "O Lovable precisa de conhecimento técnico?",
        answer: "Não necessariamente. Ele aceita comandos em linguagem natural."
    },
    {
        question: "O Lovable gera código limpo?",
        answer: "Na maioria dos casos, sim, mas revisão humana é recomendada."
    },
    {
        question: "O Lovable funciona para front-end e back-end?",
        answer: "Sim. Ele pode auxiliar em ambos os contextos."
    },
    {
        question: "O Lovable é bom para vibe coding diário?",
        answer: "Sim. Ele foi pensado para manter fluidez no desenvolvimento."
    },
    {
        question: "O Lovable funciona offline?",
        answer: "Não. Ele depende de conexão com a internet."
    },
    {
        question: "O Lovable aprende com meu código?",
        answer: "Ele pode se adaptar ao contexto do projeto durante a sessão."
    },
    {
        question: "O Lovable é indicado para freelancers?",
        answer: "Sim. Ajuda a entregar projetos mais rápido."
    },
    {
        question: "O Lovable é bom para startups?",
        answer: "Sim. É muito usado para prototipação rápida e MVPs."
    },
    {
        question: "O Lovable suporta frameworks modernos?",
        answer: "Sim, conforme o stack solicitado pelo usuário."
    },
    {
        question: "O Lovable gera código pronto para produção?",
        answer: "Ele gera código funcional, mas ajustes finais são recomendados."
    },
    {
        question: "O Lovable é uma ferramenta de vibe coding brasileira?",
        answer: "Depende da origem da empresa, mas é usada globalmente."
    },
    {
        question: "O Lovable vale a pena em comparação com outras IAs?",
        answer: "Sim, especialmente se o foco for vibe coding e rapidez."
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre Lovable</h2>
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
