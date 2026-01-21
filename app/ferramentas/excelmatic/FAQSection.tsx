"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é o Excelmatic AI?",
        answer: "O Excelmatic AI é uma ferramenta baseada em inteligência artificial que transforma comandos em linguagem natural em fórmulas complexas, scripts VBA e análises de dados para Excel e Google Sheets."
    },
    {
        question: "O Excelmatic AI é gratuito?",
        answer: "A plataforma oferece um plano gratuito limitado (cerca de 10 mensagens por mês). Existem planos pagos como o Essential e o Professional para usuários que precisam de maior volume e recursos avançados."
    },
    {
        question: "Ele gera fórmulas para o Google Sheets também?",
        answer: "Sim, o Excelmatic suporta tanto o Microsoft Excel quanto o Google Sheets, adaptando as fórmulas e scripts conforme a plataforma escolhida."
    },
    {
        question: "Como o Excelmatic cria fórmulas a partir de texto?",
        answer: "Você descreve o que deseja realizar (ex: 'calcule a média da coluna B se o valor na coluna A for maior que 100') e a IA traduz isso instantaneamente na sintaxe correta da planilha."
    },
    {
        question: "O Excelmatic consegue criar macros e scripts VBA?",
        answer: "Sim, uma das funcionalidades mais potentes é a geração de scripts VBA para Excel e Google Apps Script para Google Sheets, permitindo automações complexas sem precisar saber programar."
    },
    {
        question: "Posso converter uma foto de tabela em Excel?",
        answer: "Sim, a ferramenta possui um recurso de 'Imagem para Excel' que utiliza OCR (Reconhecimento Óptico de Caracteres) para transformar fotos ou capturas de tela em tabelas editáveis."
    },
    {
        question: "O Excelmatic ajuda a limpar dados?",
        answer: "Sim, ele oferece recursos de limpeza automática, como remoção de duplicatas, preenchimento de valores ausentes e padronização de formatos através de comandos simples."
    },
    {
        question: "É seguro enviar meus arquivos para o Excelmatic?",
        answer: "A empresa afirma utilizar criptografia de ponta a ponta e estar em conformidade com o GDPR, garantindo que os dados não sejam armazenados permanentemente ou compartilhados com terceiros."
    },
    {
        question: "O Excelmatic funciona em português?",
        answer: "Sim, você pode enviar comandos em português e a ferramenta entenderá a lógica para gerar as fórmulas corretas, embora a interface possa ter partes em inglês."
    },
    {
        question: "Como o Excelmatic ajuda na visualização de dados?",
        answer: "A IA pode sugerir e gerar automaticamente diversos tipos de gráficos (barras, pizza, dispersão, etc.) e dashboards interativos com base nos dados que você fornece."
    },
    {
        question: "Preciso ser um especialista em Excel para usar?",
        answer: "Não, o objetivo principal da ferramenta é democratizar o uso avançado de planilhas, permitindo que iniciantes realizem tarefas complexas apenas descrevendo-as."
    },
    {
        question: "O Excelmatic detecta erros em fórmulas existentes?",
        answer: "Sim, você pode colar uma fórmula que não está funcionando e a IA ajudará a depurar, explicando o erro e sugerindo a correção adequada."
    },
    {
        question: "Dá para converter PDF para Excel com ele?",
        answer: "Sim, ele possui um conversor de PDF para Excel que ajuda a extrair tabelas de relatórios estáticos em formato PDF para planilhas dinâmicas."
    },
    {
        question: "O Excelmatic oferece templates prontos?",
        answer: "Sim, a plataforma disponibiliza centenas de modelos prontos para diversas áreas como finanças, vendas, RH e marketing."
    },
    {
        question: "Como o Excelmatic integra com outras ferramentas?",
        answer: "A ferramenta pode ser integrada via plugins ou APIs com o ecossistema Microsoft 365, Slack e Microsoft Teams para facilitar o fluxo de trabalho em equipe."
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre Excelmatic AI</h2>
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
