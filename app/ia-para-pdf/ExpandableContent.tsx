"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function ExpandableContent() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    Encontre <strong>IA que resume PDF</strong> para extrair pontos-chave em segundos, use um <strong>leitor de PDF IA</strong> para navegar por documentos extensos, aplique <strong>IA para criação de PDF</strong> a partir de texto ou formulários e escolha <strong>IA para traduzir PDF</strong> mantendo formatação e contexto.
                </p>

                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="mb-4">
                        Com um <strong>leitor de PDF IA</strong>, você faz buscas rápidas por termos, pergunta sobre tabelas e recebe respostas contextuais. Ferramentas de <strong>IA que resume PDF</strong> geram resumos executivos, listas de tópicos e insights acionáveis para estudos, jurídico ou negócios.
                    </p>

                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Como usar IA para PDFs</h3>
                    <ul className="space-y-3 mb-4">
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Resumo automático:</strong> Use <strong>IA que resume PDF</strong> para sintetizar relatórios longos em minutos.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Leitura inteligente:</strong> Um <strong>leitor de PDF IA</strong> responde perguntas sobre contratos, pesquisas e artigos.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Criação rápida:</strong> <strong>IA para criação de PDF</strong> monta documentos a partir de prompts ou formulários.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Tradução preservando layout:</strong> <strong>IA para traduzir PDF</strong> mantém formatação, gráficos e tabelas.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Anotações e insights:</strong> Gere highlights, comentários e próximos passos automaticamente.</span>
                        </li>
                    </ul>

                    <p className="mb-4">
                        Ao combinar <strong>IA que resume PDF</strong> com <strong>leitor de PDF IA</strong>, você acelera revisão de contratos, pesquisas acadêmicas e relatórios financeiros. Com <strong>IA para criação de PDF</strong> e <strong>IA para traduzir PDF</strong>, fica mais fácil gerar versões multilíngues e manter consistência visual sem trabalho manual.
                    </p>
                </div>
            </div>

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors"
                aria-expanded={isExpanded}
            >
                <span>{isExpanded ? "Ver menos" : "Ver mais"}</span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
            </button>
        </div>
    );
}
