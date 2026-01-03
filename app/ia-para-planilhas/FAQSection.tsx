"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é IA para planilhas?",
        answer: "IA para planilhas são ferramentas que usam inteligência artificial para criar, editar e analisar planilhas automaticamente."
    },
    {
        question: "Para que serve uma IA que faz planilha?",
        answer: "Ela serve para gerar planilhas prontas a partir de comandos em texto, economizando tempo e reduzindo erros."
    },
    {
        question: "É possível criar planilha com IA sem saber Excel?",
        answer: "Sim. Basta descrever o que você precisa e a IA cria a estrutura da planilha."
    },
    {
        question: "IA para criar planilhas funciona no Excel e Google Sheets?",
        answer: "Sim. Muitas ferramentas são compatíveis com Excel e Google Sheets."
    },
    {
        question: "Existe IA para criar planilhas grátis?",
        answer: "Sim. Algumas IAs oferecem planos gratuitos ou testes limitados."
    },
    {
        question: "Criar planilha com IA é seguro?",
        answer: "Sim, desde que não sejam inseridos dados sensíveis em ferramentas não confiáveis."
    },
    {
        question: "IA para planilhas ajuda em análise de dados?",
        answer: "Sim. Ela pode criar fórmulas, gráficos e análises automaticamente."
    },
    {
        question: "IA que faz planilha cria fórmulas automaticamente?",
        answer: "Sim. A IA gera fórmulas com base no objetivo informado."
    },
    {
        question: "IA para criar planilhas substitui analistas?",
        answer: "Não. Ela acelera tarefas, mas não substitui a análise humana."
    },
    {
        question: "IA para planilhas é indicada para empresas?",
        answer: "Sim. É muito usada em finanças, vendas, marketing e operações."
    },
    {
        question: "Criar planilha com IA reduz erros manuais?",
        answer: "Sim. Automatizar fórmulas e estruturas reduz falhas comuns."
    },
    {
        question: "IA para planilhas pode criar dashboards?",
        answer: "Sim. Algumas ferramentas geram gráficos e dashboards automaticamente."
    },
    {
        question: "IA que faz planilha funciona em português?",
        answer: "Sim. Muitas ferramentas já entendem comandos em português."
    },
    {
        question: "IA para criar planilhas é útil para estudantes?",
        answer: "Sim. Ajuda em trabalhos acadêmicos, controle financeiro e organização."
    },
    {
        question: "Vale a pena usar IA para criar planilhas?",
        answer: "Sim. Ela aumenta produtividade e facilita o uso de planilhas."
    },
    {
        question: "Qual a melhor IA para criar planilhas?",
        answer: "Depende do objetivo, mas ferramentas modernas já oferecem criação automática."
    },
    {
        question: "IA consegue criar planilha financeira automaticamente?",
        answer: "Sim. Basta informar o tipo de controle desejado."
    },
    {
        question: "Dá para criar planilha no Google Sheets com IA?",
        answer: "Sim. Muitas IAs integram diretamente com o Sheets."
    },
    {
        question: "IA para planilhas cria fórmulas complexas?",
        answer: "Sim. Ela pode criar fórmulas avançadas e condicionais."
    },
    {
        question: "Criar planilha com IA é realmente gratuito?",
        answer: "Algumas ferramentas oferecem uso gratuito com limitações."
    },
    {
        question: "IA para criar planilhas funciona offline?",
        answer: "Não. Normalmente requer conexão com a internet."
    },
    {
        question: "IA que faz planilha entende dados em texto?",
        answer: "Sim. Ela converte texto em colunas e fórmulas."
    },
    {
        question: "IA pode corrigir erros em planilhas existentes?",
        answer: "Sim. Ela analisa e sugere correções."
    },
    {
        question: "IA para planilhas ajuda em controle de gastos?",
        answer: "Sim. É um dos usos mais comuns."
    },
    {
        question: "Criar planilha com IA economiza quanto tempo?",
        answer: "Em muitos casos, horas de trabalho manual."
    },
    {
        question: "IA para planilhas é melhor que templates prontos?",
        answer: "Sim. Ela cria planilhas personalizadas sob demanda."
    },
    {
        question: "IA consegue explicar fórmulas de planilhas?",
        answer: "Sim. Muitas ferramentas explicam o que cada fórmula faz."
    },
    {
        question: "IA para criar planilhas funciona para equipes?",
        answer: "Sim. Especialmente quando integrada a ferramentas colaborativas."
    },
    {
        question: "IA que faz planilha pode gerar gráficos automaticamente?",
        answer: "Sim. Gráficos são criados com base nos dados."
    },
    {
        question: "IA para planilhas vale a pena para pequenas empresas?",
        answer: "Sim. Ajuda a organizar dados sem necessidade de especialistas."
    }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(index < 5); // Primeiros 5 abertos por padrão

    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-gray-900">{question}</span>
                <ChevronDownIcon
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}

export default function FAQSection() {
    return (
        <div className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Planilhas</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
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
