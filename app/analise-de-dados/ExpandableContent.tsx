"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ExpandableContent() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>IA para análise de dados</strong> está revolucionando a forma como empresas interpretam informações e tomam decisões estratégicas. Com <strong>ciência de dados e IA</strong> trabalhando juntas, é possível processar grandes volumes de informações, identificar padrões ocultos e gerar insights acionáveis em tempo real.
                </p>

                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="mb-4">
                        A <strong>análise de dados com IA</strong> democratiza o acesso a insights sofisticados, permitindo que profissionais sem conhecimento técnico avançado realizem análises complexas. Ferramentas de <strong>IA de análise de dados</strong> automatizam processos que antes levavam dias ou semanas, entregando resultados precisos em minutos.
                    </p>

                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Como Usar IA para Análise de Dados na Prática</h3>

                    <ul className="space-y-3 mb-4">
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Análise Preditiva:</strong> A <strong>IA para análise de dados</strong> permite prever tendências futuras com base em dados históricos, auxiliando no planejamento estratégico e antecipação de cenários.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Dashboards Inteligentes:</strong> Ferramentas de <strong>IA de análise de dados</strong> criam visualizações automáticas e relatórios personalizados que facilitam a compreensão de dados complexos.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Detecção de Anomalias:</strong> Com <strong>ciência de dados e IA</strong>, sistemas identificam automaticamente padrões anormais em transações, operações ou comportamentos, prevenindo fraudes e falhas.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>IA para Análise de Dados Excel:</strong> Integre inteligência artificial diretamente em planilhas com plugins que sugerem fórmulas, gráficos e insights automaticamente, tornando a <strong>IA para análise de dados Excel</strong> acessível a qualquer usuário.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Processamento de Linguagem Natural:</strong> A <strong>análise de dados com IA</strong> permite fazer perguntas em linguagem natural e obter respostas instantâneas, eliminando a necessidade de conhecimento em SQL ou programação.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>IA para Análise de Dados Gratuito:</strong> Existem diversas opções de <strong>IA para análise de dados gratuito</strong> como Google Colab, versões gratuitas do Power BI e ChatGPT, permitindo que pequenas empresas e profissionais iniciem sem investimento inicial.</span>
                        </li>
                    </ul>

                    <p className="mb-4">
                        A combinação de <strong>ciência de dados e IA</strong> não substitui analistas humanos, mas potencializa suas capacidades. Enquanto a <strong>IA para análise de dados</strong> processa volumes massivos e identifica correlações, profissionais podem focar na interpretação estratégica e na tomada de decisões baseadas nos insights gerados.
                    </p>

                    <p>
                        Explore as ferramentas de <strong>IA de análise de dados</strong> listadas abaixo e descubra como transformar dados brutos em vantagem competitiva, automatizar relatórios complexos e acelerar sua jornada de transformação digital com soluções que vão desde <strong>IA para análise de dados gratuito</strong> até plataformas corporativas avançadas.
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
