"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ExpandableContent() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>inteligência artificial para advogados</strong> está revolucionando a prática jurídica no Brasil e no mundo. As <strong>ferramentas de IA para advogados</strong> oferecem soluções especializadas para aumentar a produtividade, otimizar pesquisas jurídicas e automatizar tarefas repetitivas do dia a dia.
                </p>

                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="mb-4">
                        Com o uso de <strong>IA para advogados</strong>, profissionais do direito podem realizar análises de jurisprudência em segundos, identificar padrões em milhares de decisões judiciais e gerar minutas contratuais personalizadas com precisão. A <strong>inteligência artificial para advogados</strong> também auxilia na gestão de prazos processuais, reduzindo significativamente o risco de perda de prazos e melhorando a organização do escritório.
                    </p>

                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Como Advogados Podem Usar IA ao Seu Favor</h3>

                    <ul className="space-y-3 mb-4">
                        <li className="flex gap-2">
                            <span className="text-blue-500 font-bold">•</span>
                            <span><strong>Pesquisa Jurisprudencial Inteligente:</strong> As ferramentas de IA para advogados permitem buscar decisões relevantes usando linguagem natural, economizando horas de pesquisa manual.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-blue-500 font-bold">•</span>
                            <span><strong>Análise Preditiva:</strong> Utilize jurimetria e inteligência artificial para advogados para prever resultados de processos com base em dados históricos e aumentar suas chances de sucesso.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-blue-500 font-bold">•</span>
                            <span><strong>Automação de Documentos:</strong> Gere contratos, petições e pareceres jurídicos em minutos com IA para advogados, mantendo a qualidade e reduzindo erros.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-blue-500 font-bold">•</span>
                            <span><strong>Revisão de Contratos:</strong> Ferramentas de inteligência artificial para advogados podem analisar cláusulas contratuais, identificar riscos e sugerir melhorias automaticamente.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-blue-500 font-bold">•</span>
                            <span><strong>Atendimento ao Cliente:</strong> Chatbots jurídicos com IA para advogados podem fazer triagem de casos, responder dúvidas frequentes e agendar consultas 24/7.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-blue-500 font-bold">•</span>
                            <span><strong>Gestão de Processos:</strong> Acompanhe automaticamente a movimentação processual e receba alertas inteligentes sobre prazos e atualizações importantes.</span>
                        </li>
                    </ul>

                    <p className="mb-4">
                        A adoção de <strong>ferramentas de IA para advogados</strong> não substitui o profissional jurídico, mas potencializa suas capacidades. Ao automatizar tarefas operacionais, a <strong>inteligência artificial para advogados</strong> libera tempo para que você se concentre no que realmente importa: estratégia jurídica, relacionamento com clientes e argumentação em casos complexos.
                    </p>

                    <p>
                        Explore as melhores <strong>ferramentas de IA para advogados</strong> listadas abaixo e descubra como a tecnologia pode transformar sua prática jurídica, aumentar sua competitividade no mercado e oferecer um serviço de excelência aos seus clientes.
                    </p>
                </div>
            </div>

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                aria-expanded={isExpanded}
            >
                <span>{isExpanded ? 'Ver menos' : 'Ver mais'}</span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
        </div>
    );
}
