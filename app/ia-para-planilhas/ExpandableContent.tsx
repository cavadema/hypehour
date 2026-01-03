"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ExpandableContent() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
            <p className="mb-4">
                    As <strong>ferramentas de IA para criar planilhas</strong> estão revolucionando a forma como profissionais trabalham com dados e planilhas. Com a ajuda de <strong>IA que faz planilha</strong>, você pode automatizar tarefas complexas, gerar fórmulas inteligentes e organizar dados em segundos. A <strong>IA para criar planilhas grátis</strong> oferece soluções acessíveis para economizar tempo e evitar erros manuais.
                </p>

                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="mb-4">
                        Com o uso de <strong>criar planilha com IA</strong>, profissionais podem automatizar análises complexas, gerar relatórios estruturados e criar dashboards em minutos. As <strong>ferramentas de IA para criar planilhas</strong> também auxiliam na limpeza de dados, identificação de padrões e geração automática de fórmulas otimizadas para seus cálculos.
                    </p>

                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Como Usar IA para Otimizar Suas Planilhas</h3>

                    <ul className="space-y-3 mb-4">
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Geração Automática de Fórmulas:</strong> <strong>IA que faz planilha</strong> cria fórmulas complexas a partir de descrições em linguagem natural, eliminando a necessidade de codificação manual.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Limpeza de Dados:</strong> Use <strong>criar planilha com IA</strong> para remover duplicatas, preencher lacunas e padronizar informações automaticamente.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Análise Inteligente:</strong> <strong>IA para criar planilhas</strong> identifica tendências, outliers e padrões nos seus dados em segundos.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Geração de Gráficos e Visualizações:</strong> Crie representações visuais dos seus dados com apenas um comando usando <strong>IA para criar planilhas grátis</strong>.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Automação de Relatórios:</strong> Gere relatórios profissionais e atualizáveis automaticamente com <strong>IA que faz planilha</strong>.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Integração com Ferramentas Externas:</strong> <strong>criar planilha com IA</strong> se integra com APIs e bancos de dados para dados sempre atualizados.</span>
                        </li>
                    </ul>

                    <p className="mb-4">
                        A adoção de <strong>IA para criar planilhas grátis</strong> permite que profissionais se dediquem a análises estratégicas ao invés de tarefas repetitivas. Ao automatizar a manipulação de dados, <strong>IA que faz planilha</strong> libera tempo valioso e reduz significativamente o risco de erros humanos.
                    </p>

                    <p>
                        Explore as melhores <strong>ferramentas de IA para criar planilhas</strong> listadas abaixo e descubra como <strong>criar planilha com IA</strong> pode transformar sua produtividade, economizar horas de trabalho e permitir que você tome decisões baseadas em dados mais rapidamente.
                    </p>
                </div>
            </div>

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors"
                aria-expanded={isExpanded}
            >
                <span>{isExpanded ? 'Ver menos' : 'Ver mais'}</span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
        </div>
    );
}
