"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ExpandableContent() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
            <p className="mb-4">
                    As <strong>ferramentas de automação com IA</strong> estão transformando a forma como empresas otimizam seus processos operacionais. <strong>IA para automação</strong> oferece soluções inteligentes que eliminam tarefas manuais repetitivas, aumentam a eficiência das equipes e reduzem erros humanos significativamente. Com <strong>automação inteligente com IA</strong>, as organizações conseguem executar fluxos de trabalho complexos de forma automática e otimizada.
                </p>

                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="mb-4">
                        A integração de <strong>IA para processos de automação</strong> permite que sistemas inteligentes aprendam padrões operacionais, tomem decisões autônomas e adaptem-se a mudanças em tempo real. <strong>Automação com IA</strong> vai além da simples automação tradicional, adicionando capacidades cognitivas que aumentam a flexibilidade e a inteligência dos fluxos de trabalho.
                    </p>

                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Como Usar IA para Potencializar Sua Automação</h3>

                    <ul className="space-y-3 mb-4">
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Automação de Processos Repetitivos:</strong> IA para automação identifica e executa tarefas rotineiras, liberando tempo para atividades estratégicas de maior valor.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Decisões Inteligentes:</strong> Utilize automação com IA para processos que requerem análise de dados e tomada de decisão contextualizada e relevante.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Integração de Múltiplos Sistemas:</strong> IA para automação conecta diferentes plataformas e bases de dados, criando fluxos de trabalho unificados.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Detecção e Tratamento de Erros:</strong> Ferramentas de automação com IA identificam inconsistências e erros, corrigindo-os automaticamente.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Otimização Contínua:</strong> A inteligência artificial em automação aprende com cada execução e sugere melhorias incrementais nos processos.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Escalabilidade sem Limite:</strong> Automação inteligente com IA permite que processos cresçam sem aumento proporcional de custos ou recursos humanos.</span>
                        </li>
                    </ul>

                    <p className="mb-4">
                        A adoção de <strong>IA para automação</strong> redefinir a eficiência operacional, permitindo que equipes dediquem-se a tarefas criativas e estratégicas. Ao implementar <strong>automação com IA</strong>, as empresas não apenas economizam tempo e recursos, mas também melhoram a qualidade dos resultados e a consistência dos processos.
                    </p>

                    <p>
                        Explore as melhores <strong>ferramentas de automação com IA</strong> listadas abaixo e descubra como a tecnologia pode transformar seus fluxos de trabalho, aumentar a produtividade da equipe e impulsionar o crescimento do seu negócio.
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
