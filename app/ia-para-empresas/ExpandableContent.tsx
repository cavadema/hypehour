"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ExpandableContent() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
            <p className="mb-4">
                    As <strong>ferramentas de IA para empresas</strong> estão transformando a forma como organizações operam, automatizam processos e tomam decisões estratégicas. <strong>Inteligência artificial para empresas</strong> oferece soluções que aumentam produtividade, reduzem custos operacionais e melhoram a competitividade no mercado. Com <strong>IA empresarial</strong>, negócios de todos os portes podem escalar operações e otimizar recursos de forma inteligente.
                </p>

                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="mb-4">
                        A implementação de <strong>soluções de IA para empresas</strong> permite automatizar tarefas repetitivas, analisar grandes volumes de dados e identificar oportunidades de melhoria que passariam despercebidas em análises manuais. <strong>IA para negócios</strong> vai além da simples automação, oferecendo insights estratégicos que impulsionam crescimento e inovação.
                    </p>

                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Como Usar IA para Transformar Sua Empresa</h3>

                    <ul className="space-y-3 mb-4">
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Automação de Processos Empresariais:</strong> IA para empresas automatiza tarefas repetitivas, liberando equipes para atividades estratégicas de maior valor.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Análise de Dados Inteligente:</strong> Utilize inteligência artificial para empresas para processar dados e gerar insights acionáveis em tempo real.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Atendimento ao Cliente Otimizado:</strong> IA empresarial melhora experiência do cliente com chatbots, respostas automáticas e personalização.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Gestão Documental Automatizada:</strong> Soluções de IA para empresas organizam, classificam e recuperam documentos automaticamente.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Previsão e Planejamento:</strong> IA para negócios analisa tendências e prevê cenários futuros para melhor tomada de decisão.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Otimização de Recursos:</strong> Inteligência artificial para empresas identifica desperdícios e sugere melhorias operacionais contínuas.</span>
                        </li>
                    </ul>

                    <p className="mb-4">
                        A adoção de <strong>IA para empresas</strong> não é mais um diferencial, mas uma necessidade competitiva. Organizações que implementam <strong>soluções de IA para empresas</strong> ganham agilidade, reduzem custos e melhoram a qualidade de seus produtos e serviços, posicionando-se à frente da concorrência.
                    </p>

                    <p>
                        Explore as melhores <strong>ferramentas de IA para empresas</strong> listadas abaixo e descubra como a tecnologia pode transformar suas operações, aumentar eficiência e impulsionar o crescimento do seu negócio de forma sustentável e escalável.
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
