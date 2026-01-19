"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é o FlowGPT?",
        answer: "O FlowGPT é uma plataforma e marketplace focado em prompts de Inteligência Artificial. Ele permite que usuários descubram, compartilhem e executem prompts e 'Flows' (aplicativos leves de IA) baseados em diversos modelos como ChatGPT, Claude, Gemini e Llama."
    },
    {
        question: "O FlowGPT é gratuito?",
        answer: "O FlowGPT oferece um plano gratuito generoso que permite usar centenas de prompts e modelos básicos. Ele utiliza um sistema de 'créditos' e moedas virtuais (Flux) para acesso a modelos premium e funcionalidades avançadas."
    },
    {
        question: "Quais modelos de IA estão disponíveis no FlowGPT?",
        answer: "A plataforma agrega uma enorme variedade de modelos, incluindo OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Google Gemini, Meta Llama 3, além de modelos de código aberto e variantes customizadas pela comunidade."
    },
    {
        question: "Como funcionam os 'Flows'?",
        answer: "Os Flows são essencialmente mini-aplicativos de IA criados pela comunidade. Eles combinam prompts estruturados e interfaces simplificadas para tarefas específicas, como criar roteiros de vídeo, gerenciar anúncios ou criar personagens de RPG."
    },
    {
        question: "O FlowGPT suporta português?",
        answer: "Sim, embora a interface principal seja majoritariamente em inglês, a plataforma possui uma vasta biblioteca de prompts em português e os modelos de IA respondem perfeitamente no nosso idioma."
    },
    {
        question: "Posso criar meus próprios prompts e ganhar dinheiro?",
        answer: "Sim! O FlowGPT incentiva criadores de prompts. Você pode publicar suas criações, ganhar reconhecimento da comunidade e até participar de competições (hackathons) com prêmios em dinheiro para os melhores prompts."
    },
    {
        question: "O FlowGPT é seguro para minha privacidade?",
        answer: "O FlowGPT atua como uma interface entre você e os provedores de modelos. Seus dados de chat são protegidos, mas como em qualquer ferramenta de IA, recomenda-se não compartilhar informações sensíveis ou segredos corporativos nos chats."
    },
    {
        question: "Existe um aplicativo oficial para celular?",
        answer: "Sim, o FlowGPT possui aplicativos oficiais para iOS e Android, permitindo que você acesse seus prompts favoritos e converse com modelos de IA de qualquer lugar."
    },
    {
        question: "O que são 'Tokens' e 'Flux'?",
        answer: "Flux é a moeda premium do FlowGPT usada para desbloquear modelos avançados (como GPT-4). Tokens referem-se à capacidade de processamento da IA. Você pode ganhar Flux participando da comunidade ou comprando pacotes."
    },
    {
        question: "O FlowGPT é melhor que o ChatGPT Plus?",
        answer: "Não é necessariamente 'melhor', mas oferece uma proposta diferente. Enquanto o ChatGPT Plus foca em um único provedor, o FlowGPT é um agregador que permite trocar entre diferentes IAs e usar bibliotecas de prompts prontas sem precisar saber 'prompt engineering'."
    },
    {
        question: "Posso exportar os prompts para usar em outros lugares?",
        answer: "Sim, um dos grandes benefícios do FlowGPT é ser uma biblioteca aberta. Você pode copiar os prompts detalhados para usá-los diretamente no ChatGPT, Claude ou em suas próprias aplicações via API."
    },
    {
        question: "Como posso encontrar prompts de alta qualidade?",
        answer: "A plataforma possui um sistema de ranking, categorias (Marketing, Coding, Academic) e badges de 'Top Picks', ajudando a identificar quais prompts foram testados e aprovados por milhares de usuários."
    },
    {
        question: "O FlowGPT oferece suporte para desenvolvedores?",
        answer: "Sim, a plataforma permite testes rápidos de modelos via chat sandbox, o que é excelente para desenvolvedores que desejam comparar a performance de diferentes LLMs para seus projetos."
    },
    {
        question: "Existem limites de uso no plano grátis?",
        answer: "Sim, o plano gratuito tem limites diários de 'palavras' e acesso a modelos básicos. Modelos muito potentes geralmente exigem créditos Flux que podem ser repostos periodicamente."
    },
    {
        question: "O FlowGPT possui filtros de conteúdo?",
        answer: "A plataforma possui orientações de comunidade, mas alguns modelos e bots (especialmente personagens) podem ter filtros mais flexíveis que as interfaces oficiais, dependendo das configurações do criador do bot."
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre o FlowGPT</h2>
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
