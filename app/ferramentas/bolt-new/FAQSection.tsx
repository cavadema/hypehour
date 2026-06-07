"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    { question: "O que é o Bolt.new?", answer: "Bolt.new é uma plataforma de desenvolvimento full-stack no navegador com inteligência artificial integrada que gera, executa e deploya aplicações completas a partir de um prompt de texto, sem necessidade de configuração local." },
    { question: "Para que serve o Bolt.new?", answer: "O Bolt.new serve para criar aplicações web completas — frontend e backend — apenas descrevendo o que quer em texto. É muito usado para vibe coding, prototipagem rápida e criação de MVPs sem precisar configurar ambiente de desenvolvimento." },
    { question: "O Bolt.new é gratuito?", answer: "O Bolt.new oferece plano gratuito com tokens mensais para geração de código. Planos pagos liberam mais tokens, projetos ilimitados e acesso a modelos de IA mais avançados." },
    { question: "O Bolt.new cria frontend e backend?", answer: "Sim. O Bolt.new gera aplicações full-stack completas, incluindo frontend em React/Next.js, backend com APIs e lógica de servidor, tudo executando em um ambiente sandbox no próprio navegador." },
    { question: "O Bolt.new faz deploy automático?", answer: "Sim. O Bolt.new integra com Netlify para deploy automático das aplicações criadas, permitindo publicar um projeto com URL pública em segundos." },
    { question: "Qual a diferença entre Bolt.new e Lovable?", answer: "Ambos criam aplicações com IA, mas o Bolt.new se destaca por executar o código em tempo real no navegador (via WebContainers), dando mais controle sobre o ambiente de desenvolvimento. O Lovable tem foco maior em UX e facilidade para não-técnicos." },
    { question: "Preciso saber programar para usar o Bolt.new?", answer: "Não necessariamente. O Bolt.new é feito para vibe coding — você descreve o que quer e a IA constrói. Mas ter noção básica de desenvolvimento ajuda a orientar a IA com mais precisão." },
    { question: "O Bolt.new usa quais tecnologias?", answer: "O Bolt.new usa principalmente React, Next.js, Vite e Node.js para as aplicações geradas, com Tailwind CSS para estilização. O ambiente roda com WebContainers diretamente no navegador." },
    { question: "O Bolt.new funciona em português?", answer: "Sim. O Bolt.new aceita prompts em português e cria as aplicações descritas, embora a interface da plataforma esteja em inglês." },
    { question: "O Bolt.new é bom para criar MVPs?", answer: "Sim. É uma das ferramentas mais populares para criar MVPs rapidamente — em horas em vez de dias — sem precisar de equipe técnica dedicada." },
    { question: "Posso importar projetos existentes no Bolt.new?", answer: "Sim. O Bolt.new permite importar projetos do GitHub e continuar o desenvolvimento com assistência da IA, além de criar do zero." },
    { question: "O Bolt.new tem limitação de tamanho de projeto?", answer: "Projetos muito grandes e complexos podem ter limitações na geração de contexto. O Bolt.new funciona melhor para aplicações de tamanho médio e protótipos funcionais." },
    { question: "O Bolt.new é bom para startups?", answer: "Sim. Startups usam o Bolt.new para validar ideias rapidamente, criar demos para investidores e construir MVPs sem custo elevado de desenvolvimento." },
    { question: "O Bolt.new é da StackBlitz?", answer: "Sim. O Bolt.new é desenvolvido pela StackBlitz, empresa conhecida pelo WebContainers — tecnologia que permite rodar Node.js diretamente no navegador." },
    { question: "Como começar a usar o Bolt.new?", answer: "Acesse bolt.new, descreva a aplicação que quer criar no campo de prompt, aguarde a IA gerar o código e a aplicação já estará rodando ao vivo no navegador para você testar e ajustar." },
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Bolt.new</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
                ))}
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />
        </div>
    );
}
