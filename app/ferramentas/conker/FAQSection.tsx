"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é o Conker AI?",
        answer: "O Conker AI é uma ferramenta inovadora baseada em inteligência artificial que permite aos professores criar quizzes, avaliações e materiais didáticos de forma instantânea e personalizada."
    },
    {
        question: "O Conker AI é gratuito?",
        answer: "Sim, o Conker oferece um plano gratuito que permite criar e exportar quizzes. Existem planos premium para usuários que precisam de recursos avançados e maior volume de geração."
    },
    {
        question: "Como o Conker gera os quizzes?",
        answer: "Você pode gerar quizzes inserindo um tópico específico, colando um texto de referência ou selecionando padrões educacionais (como K-12). A IA processa essas informações e cria perguntas variadas em segundos."
    },
    {
        question: "Quais tipos de perguntas o Conker suporta?",
        answer: "A plataforma suporta mais de 10 tipos de questões, incluindo múltipla escolha, verdadeiro ou falso, preenchimento de lacunas, correspondência e respostas curtas."
    },
    {
        question: "O Conker está alinhado a padrões curriculares?",
        answer: "Sim, o Conker possui milhares de avaliações já alinhadas a padrões internacionais e americanos (como NGSS e TEKS), facilitando o trabalho de professores que seguem currículos estruturados."
    },
    {
        question: "Posso exportar os quizzes para onde?",
        answer: "Os quizzes podem ser exportados diretamente para o Google Forms, impressos em PDF ou compartilhados via link direto com os alunos."
    },
    {
        question: "O Conker integra com o Google Classroom?",
        answer: "Sim, ele possui integração direta com o Google Classroom e também com o Canvas LMS, permitindo atribuir tarefas facilmente."
    },
    {
        question: "Os alunos precisam de conta para fazer os quizzes?",
        answer: "Não. Os professores precisam de uma conta (Google) para criar, mas os alunos podem acessar e responder aos quizzes apenas através do link compartilhado."
    },
    {
        question: "O Conker funciona em português?",
        answer: "Sim, a ferramenta suporta múltiplos idiomas, incluindo o português, permitindo a criação de materiais didáticos para o contexto brasileiro."
    },
    {
        question: "Quanto tempo leva para criar um quiz completo?",
        answer: "Com o Conker, um quiz bem estruturado de 10 questões pode ser gerado e revisado em menos de 5 minutos."
    },
    {
        question: "Posso editar as perguntas geradas pela IA?",
        answer: "Com certeza. O professor tem controle total para editar, excluir ou adicionar novas perguntas após a geração automática da IA."
    },
    {
        question: "O Conker possui recursos de acessibilidade?",
        answer: "Sim, ele inclui uma funcionalidade de 'leitura em voz alta' integrada em todos os quizzes para apoiar alunos com diferentes necessidades de aprendizagem."
    },
    {
        question: "A IA do Conker é precisa?",
        answer: "A IA é altamente capaz, mas como qualquer ferramenta generativa, recomenda-se que o professor revise as questões e respostas para garantir a precisão pedagógica total."
    },
    {
        question: "Quais disciplinas o Conker atende?",
        answer: "Ele funciona para praticamente todas as disciplinas do ensino fundamental e médio, como Matemática, Ciências, História, Português e Línguas Estrangeiras."
    },
    {
        question: "Como os professores podem validar as respostas geradas?",
        answer: "O Conker oferece uma ferramenta de validação que permite pesquisar no Google diretamente pela interface para confirmar se os dados gerados pela IA estão corretos."
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre Conker AI</h2>
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
