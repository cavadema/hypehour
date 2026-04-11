"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "O que é IA para modelos de llms?",
        "a": "IA para modelos de llms são ferramentas que utilizam inteligência artificial para automatizar, otimizar e escalar tarefas relacionadas a modelos de llms."
    },
    {
        "q": "Para que serve a inteligência artificial em modelos de llms?",
        "a": "Ela serve para aumentar a produtividade, reduzir erros humanos e oferecer insights baseados em dados para profissionais de modelos de llms."
    },
    {
        "q": "Como funciona uma IA voltada para modelos de llms?",
        "a": "Ela funciona processando grandes volumes de dados através de algoritmos de aprendizado de máquina adaptados para as necessidades específicas de modelos de llms."
    },
    {
        "q": "Qual a melhor IA para modelos de llms em 2026?",
        "a": "Existem diversas opções líderes no mercado, variando conforme a necessidade específica de cada projeto de modelos de llms."
    },
    {
        "q": "IA para modelos de llms é gratuita?",
        "a": "Muitas ferramentas oferecem versões gratuitas (freemium) com limites de uso, além de planos premium para uso profissional."
    },
    {
        "q": "Funciona em português?",
        "a": "Sim, a maioria das ferramentas modernas de IA para modelos de llms já oferece suporte completo ou parcial ao idioma português."
    },
    {
        "q": "É seguro usar IA para modelos de llms?",
        "a": "Sim, desde que você escolha ferramentas confiáveis que sigam protocolos de segurança e privacidade de dados."
    },
    {
        "q": "Inteligência artificial substitui profissionais de modelos de llms?",
        "a": "Não. Ela atua como um copiloto que potencializa o trabalho humano, automatizando tarefas repetitivas."
    },
    {
        "q": "Preciso saber programar para usar essas ferramentas?",
        "a": "Na maioria das vezes não. O foco das novas IAs para modelos de llms é a facilidade de uso via interface intuitiva."
    },
    {
        "q": "Vale a pena investir em ferramentas de IA para modelos de llms?",
        "a": "Sim, o ganho de tempo e a melhoria na qualidade das entregas compensam o investimento na tecnologia."
    },
    {
        "q": "Principais vantagens da IA em modelos de llms",
        "a": "As vantagens incluem economia de tempo, redução de custos operacionais e maior capacidade analítica em projetos de modelos de llms."
    },
    {
        "q": "Desvantagens de usar IA para modelos de llms",
        "a": "As principais limitações podem incluir a necessidade de revisão humana e a dependência de conexão com a internet."
    },
    {
        "q": "Como escolher a ferramenta ideal de modelos de llms?",
        "a": "Avalie o custo-benefício, a integração com sua rotina atual e se os recursos atendem às suas metas em modelos de llms."
    },
    {
        "q": "IA para modelos de llms para iniciantes",
        "a": "Existem plataformas com interface simplificada ideais para quem está começando a explorar IA em modelos de llms."
    },
    {
        "q": "Ferramentas de modelos de llms para empresas",
        "a": "Soluções corporativas focam em segurança, colaboração em equipe e integração com sistemas existentes."
    },
    {
        "q": "Tendências de IA para modelos de llms para o futuro",
        "a": "O futuro reserva maior autonomia, personalização extrema e integração nativa entre diferentes IAs de modelos de llms."
    },
    {
        "q": "Diferença entre IA tradicional e IA Generativa para modelos de llms",
        "a": "A IA tradicional analisa dados existentes, enquanto a IA Generativa pode criar novos conteúdos e soluções para modelos de llms."
    },
    {
        "q": "Como aprender a usar IA para modelos de llms?",
        "a": "Acompanhe portais como o Hypehour, faça cursos práticos e pratique o uso das ferramentas listadas na nossa curadoria."
    },
    {
        "q": "Melhor custo-benefício em ferramentas de modelos de llms",
        "a": "Avaliamos diversas opções para que você encontre a ferramenta de modelos de llms que cabe no seu bolso sem sacrificar a qualidade."
    },
    {
        "q": "Onde encontrar novidades sobre IA para modelos de llms?",
        "a": "O Hypehour é atualizado diariamente com os lançamentos mais relevantes do mundo da inteligência artificial para modelos de llms."
    },
    {
        "q": "Existe IA gratuita para modelos de llms?",
        "a": "Sim, existem várias opções de código aberto e planos gratuitos excelentes disponíveis hoje."
    },
    {
        "q": "Qual o impacto da IA no mercado de modelos de llms?",
        "a": "A IA está democratizando o acesso a recursos avançados, permitindo que pequenos times realizem grandes feitos em modelos de llms."
    },
    {
        "q": "Como automatizar processos de modelos de llms com IA?",
        "a": "Você pode usar fluxos de trabalho que conectam diferentes ferramentas de IA para criar automações completas."
    },
    {
        "q": "IA para modelos de llms funciona no celular?",
        "a": "Muitas ferramentas possuem aplicativos dedicados ou interfaces web totalmente responsivas."
    },
    {
        "q": "Melhores prompts para IA de modelos de llms",
        "a": "A qualidade do resultado depende da clareza do prompt. Oferecemos guias para ajudar você a dominar essa arte."
    },
    {
        "q": "IA para modelos de llms é uma moda passageira?",
        "a": "Pelo contrário, é uma mudança estrutural na forma como o trabalho de modelos de llms é realizado globalmente."
    },
    {
        "q": "Quais dados as ferramentas de modelos de llms coletam?",
        "a": "Geralmente coletam dados de uso para melhoria do modelo. Sempre leia a política de privacidade da ferramenta selecionada."
    },
    {
        "q": "Dá para ganhar dinheiro usando IA para modelos de llms?",
        "a": "Sim, ao aumentar sua produtividade e oferecer serviços melhores e mais rápidos em modelos de llms."
    },
    {
        "q": "Existe suporte em português para essas ferramentas?",
        "a": "Algumas ferramentas já possuem comunidades e suporte oficiais em português."
    },
    {
        "q": "Como o Hypehour seleciona as IAs de modelos de llms?",
        "a": "Nossa equipe testa e avalia as ferramentas com base em utilidade, acessibilidade e inovação técnica."
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
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"}`}
            >
                <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}

export default function FAQSection() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <div className="mt-12 mb-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Modelos De Llms</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.q}
                        answer={faq.a}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}
