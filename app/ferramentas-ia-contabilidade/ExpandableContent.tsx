"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ExpandableContent() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    As <strong>ferramentas de IA para contabilidade</strong> estão revolucionando a forma como contadores e empresas gerenciam suas finanças. A <strong>inteligência artificial para contabilidade</strong> oferece soluções inovadoras para automatizar processos, reduzir erros e otimizar a gestão fiscal e financeira.
                </p>

                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="mb-4">
                        Com o uso de <strong>IA para contabilidade</strong>, profissionais contábeis podem automatizar lançamentos, classificar transações automaticamente e gerar relatórios financeiros complexos em minutos. As <strong>ferramentas de inteligência artificial para contabilidade</strong> também auxiliam na conformidade fiscal, identificando possíveis inconsistências e sugerindo otimizações tributárias.
                    </p>

                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Como Contadores Podem Usar IA ao Seu Favor</h3>

                    <ul className="space-y-3 mb-4">
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Conciliação Bancária Automática:</strong> As ferramentas de IA para contabilidade realizam conciliações bancárias em segundos, identificando divergências e sugerindo ajustes automaticamente.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Classificação Inteligente de Despesas:</strong> Utilize inteligência artificial para contabilidade para categorizar despesas e receitas automaticamente com base em padrões históricos.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Previsão de Fluxo de Caixa:</strong> IA para contabilidade analisa dados históricos e tendências para prever fluxos de caixa futuros com precisão.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Auditoria Automatizada:</strong> Ferramentas de inteligência artificial para contabilidade identificam anomalias e possíveis fraudes em grandes volumes de transações.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Otimização Tributária:</strong> Com IA para contabilidade, identifique oportunidades de economia fiscal e garanta conformidade com a legislação vigente.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Relatórios Gerenciais Inteligentes:</strong> Ferramentas de IA para contabilidade geram dashboards e relatórios personalizados com insights acionáveis para tomada de decisão.</span>
                        </li>
                    </ul>

                    <p className="mb-4">
                        A adoção de <strong>ferramentas de IA para contabilidade</strong> não substitui o contador, mas potencializa sua capacidade analítica e estratégica. Ao automatizar tarefas repetitivas e operacionais, a <strong>inteligência artificial para contabilidade</strong> libera tempo para que profissionais se concentrem em consultoria financeira, planejamento tributário e análise estratégica de negócios.
                    </p>

                    <p>
                        Explore as melhores <strong>ferramentas de IA para contabilidade</strong> listadas abaixo e descubra como a tecnologia pode transformar sua prática contábil, aumentar a precisão dos seus serviços e oferecer mais valor aos seus clientes.
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
