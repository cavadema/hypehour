"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const faqs = [
    {
        question: "O que é vibe coding com IA?",
        answer: "Vibe coding é a prática de programar acompanhado de uma IA que auxilia em tempo real, sugerindo código, corrigindo erros, otimizando funções e acelerando o fluxo criativo do desenvolvedor."
    },
    {
        question: "Qual é a melhor IA para vibe coding hoje?",
        answer: "As principais IAs usadas em vibe coding são Cursor, GitHub Copilot, Codeium, Windsurf, Cline, Aider e Warp AI, variando conforme linguagem, velocidade e profundidade de análise."
    },
    {
        question: "IA pode realmente melhorar a produtividade na programação?",
        answer: "Sim. Ferramentas de IA reduzem tempo de debug, geram código completo e automatizam tarefas repetitivas, aumentando a produtividade em até 3–5x dependendo do fluxo de trabalho."
    },
    {
        question: "Qual a melhor IA para criar códigos do zero?",
        answer: "As melhores para gerar código do zero são Cursor, Cline, Copilot e Windsurf, pois entendem projetos completos e escrevem arquivos inteiros com coerência."
    },
    {
        question: "IA para programar é indicada para iniciantes?",
        answer: "Sim. IAs ajudam iniciantes a aprender a sintaxe, explicar erros, sugerir melhorias e ensinar boas práticas de forma orientada."
    },
    {
        question: "IA substitui um programador?",
        answer: "Não. A IA acelera a escrita de código, mas não substitui o raciocínio, arquitetura, análise e decisões técnicas que dependem de um profissional."
    },
    {
        question: "Quais IAs são compatíveis com múltiplas linguagens de programação?",
        answer: "Cursor, Copilot, Codeium e Windsurf suportam dezenas de linguagens como Python, JavaScript, C#, Java, Go, SQL e frameworks modernos."
    },
    {
        question: "Qual IA é melhor para projetos grandes e complexos?",
        answer: "Cursor e Windsurf são líderes nesse cenário, pois analisam repositórios completos, entendem dependências e geram novas features dentro da estrutura existente."
    },
    {
        question: "IA pode ajudar no debug de código?",
        answer: "Sim. As melhores IAs identificam erros, simulam possíveis cenários e sugerem correções corretamente estruturadas."
    },
    {
        question: "IA para programação funciona offline?",
        answer: "A maioria funciona online, mas algumas ferramentas começam a oferecer modelos locais via GPU ou quantizados, permitindo uso offline parcial."
    },
    {
        question: "Como escolher a melhor IA para vibe coding?",
        answer: "Considere: linguagem usada, tamanho dos projetos, velocidade de resposta, recursos de automação, custo e integração com IDEs."
    },
    {
        question: "Qual IA para programar é mais barata ou gratuita?",
        answer: "Codeium, Aider e Cline oferecem planos gratuitos robustos, com ótima relação custo-benefício."
    },
    {
        question: "IA pode criar interfaces e front-end automaticamente?",
        answer: "Sim. IAs como Cursor e Copilot geram componentes React, estilos, Tailwind, HTML e até páginas completas com responsividade."
    },
    {
        question: "IA consegue ler e entender meu repositório inteiro?",
        answer: "Ferramentas como Cursor e Windsurf analisam a árvore de arquivos completa, aprendem o contexto e escrevem novas funções sem quebrar o projeto."
    },
    {
        question: "IA para vibe coding é segura para projetos privados?",
        answer: "Sim, desde que use ferramentas com políticas de privacidade adequadas, modelos locais ou planos enterprise com isolamento de dados."
    },
    {
        question: "O que uma IA para programar faz?",
        answer: "Ela sugere código, corrige erros, explica funções e automatiza tarefas de desenvolvimento."
    },
    {
        question: "IA para vibe coding ajuda no aprendizado?",
        answer: "Sim. Ela explica conceitos e mostra caminhos mais eficientes para resolver problemas."
    },
    {
        question: "Qual IA gera código mais rápido?",
        answer: "Cursor e Codeium são conhecidas pela velocidade em sugestões e geração de arquivos completos."
    },
    {
        question: "IA pode escrever uma aplicação inteira?",
        answer: "Sim, dependendo da complexidade. Ela pode criar arquivos, rotas, funções e módulos completos."
    },
    {
        question: "Qual IA é melhor para quem usa JavaScript?",
        answer: "Cursor e Copilot têm alta precisão em JS, TS, Node e React."
    },
    {
        question: "Existe IA para programar de graça?",
        answer: "Sim. Codeium, Cline e Aider oferecem uso gratuito com recursos avançados."
    },
    {
        question: "IA ajuda a organizar código bagunçado?",
        answer: "Sim. Ela refatora, limpa funções e melhora a estrutura do projeto."
    },
    {
        question: "IA de vibe coding funciona para backend?",
        answer: "Sim. Ela cria APIs, bancos de dados, rotas, testes e documentação."
    },
    {
        question: "Qual IA entende melhor o contexto do repositório?",
        answer: "Cursor é uma das mais eficientes em análise profunda de projetos inteiros."
    },
    {
        question: "IA pode escrever testes automatizados?",
        answer: "Sim. Ela gera testes unitários, mocks e cenários completos."
    },
    {
        question: "Dá para usar IA para programar direto no navegador?",
        answer: "Sim. Codeium Web, Replit e Windsurf oferecem interfaces web."
    },
    {
        question: "IA consegue converter código de uma linguagem para outra?",
        answer: "Sim. Ela traduz funções e módulos entre linguagens como Python, Java e C#."
    },
    {
        question: "Qual IA é melhor para quem gosta de vibe coding visual?",
        answer: "Windsurf e Cursor são as mais populares para fluxos visuais e fluidos."
    },
    {
        question: "IA consegue explicar código linha por linha?",
        answer: "Sim. Ela detalha cada parte da função e a lógica utilizada."
    },
    {
        question: "IA ajuda a documentar projetos?",
        answer: "Sim. Ela gera documentação automática, comentários e README completos."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Vibe Coding</h2>
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
