"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    { question: "O que é o Collov AI?", answer: "Collov AI é uma plataforma de design de interiores com inteligência artificial que redesenha ambientes a partir de fotos, com a diferença de integrar catálogos de produtos reais de lojas parceiras, permitindo visualizar e comprar os itens de decoração diretamente." },
    { question: "Para que serve o Collov AI?", answer: "O Collov AI serve para redesenhar ambientes com IA, visualizar estilos de decoração diferentes, descobrir produtos reais que combinam com o espaço e facilitar a tomada de decisão na reforma ou decoração de interiores." },
    { question: "O Collov AI é gratuito?", answer: "O Collov AI oferece plano gratuito com acesso limitado às funcionalidades de redesign. Planos pagos a partir de $29/mês liberam mais renders, estilos e acesso aos catálogos completos de produtos." },
    { question: "O Collov AI funciona com foto do meu ambiente?", answer: "Sim. Você tira uma foto do cômodo que deseja redesenhar, faz upload na plataforma e o Collov AI gera versões do espaço com diferentes estilos, móveis e decorações." },
    { question: "O Collov AI mostra produtos reais para comprar?", answer: "Sim. Este é o principal diferencial do Collov AI: o sistema sugere produtos reais de lojas parceiras que combinam com o design gerado, com link direto para compra — facilitando muito a execução do projeto." },
    { question: "Quais estilos de decoração o Collov AI oferece?", answer: "O Collov AI oferece dezenas de estilos como moderno, minimalista, escandinavo, industrial, boho, clássico, mid-century modern e outros, permitindo visualizar o mesmo ambiente em diferentes linguagens decorativas." },
    { question: "O Collov AI é bom para arquitetos e designers?", answer: "Sim. Profissionais de arquitetura e design de interiores usam o Collov AI para apresentar propostas visuais rápidas a clientes, facilitar aprovações e acelerar o processo criativo antes de partir para o projeto técnico." },
    { question: "O Collov AI funciona para qualquer tipo de ambiente?", answer: "Sim. O Collov AI funciona com salas de estar, quartos, cozinhas, banheiros, escritórios e outros ambientes residenciais e comerciais." },
    { question: "O Collov AI funciona em português?", answer: "A interface do Collov AI está principalmente em inglês, mas a plataforma é intuitiva e pode ser usada por usuários brasileiros sem dificuldade. Os resultados de design independem do idioma." },
    { question: "Qual a diferença entre Collov AI e RoomGPT?", answer: "Ambos redesenham ambientes com IA, mas o Collov AI se destaca pela integração com produtos reais de lojas parceiras, tornando-o mais útil para quem quer não apenas visualizar, mas também executar o projeto com compras diretas." },
    { question: "O Collov AI é bom para home staging?", answer: "Sim. O Collov AI é muito usado para home staging virtual — mostrar o potencial de imóveis vazios ou desatualizados com decoração virtual, facilitando vendas e locações no mercado imobiliário." },
    { question: "O Collov AI preserva a estrutura do cômodo?", answer: "Sim. O sistema mantém a estrutura arquitetônica do ambiente — paredes, janelas, proporções — e modifica apenas os elementos decorativos e mobiliário, garantindo coerência com o espaço real." },
    { question: "Posso usar o Collov AI para um projeto comercial?", answer: "Sim. O Collov AI pode ser usado para redesign de espaços comerciais como escritórios, lojas e restaurantes. Planos empresariais estão disponíveis para uso em maior escala." },
    { question: "O Collov AI tem API para integrações?", answer: "O Collov AI oferece soluções B2B para empresas do setor imobiliário, varejistas de móveis e plataformas de decoração que queiram integrar as funcionalidades de IA em seus próprios sistemas. Consulte o site para detalhes." },
    { question: "Como começar a usar o Collov AI?", answer: "Acesse collov.ai, crie uma conta, faça upload de uma foto do ambiente que deseja redesenhar, escolha o estilo desejado e aguarde o resultado gerado pela IA em segundos." },
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Collov AI</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
                ))}
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                        }))
                    })
                }}
            />
        </div>
    );
}
