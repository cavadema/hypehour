"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ExpandableContent() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>inteligência artificial para arquitetura</strong> está revolucionando a forma como projetamos e construímos o mundo ao nosso redor. As ferramentas de <strong>ia para arquitetos</strong> oferecem soluções inovadoras para otimizar fluxos de trabalho, desde a concepção inicial até a renderização final e análise de dados construtivos.
                </p>

                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="mb-4">
                        Com o uso de <strong>inteligencia artificial para arquitetura</strong>, profissionais podem gerar variações de design em segundos, criar renderizações fotorrealistas a partir de esboços simples e automatizar tarefas repetitivas como o planejamento de layouts. A <strong>ia para arquitetura</strong> também auxilia na análise de eficiência energética e na viabilidade de projetos, garantindo construções mais sustentáveis e econômicas.
                    </p>

                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Como Arquitetos Podem Usar IA ao Seu Favor</h3>

                    <ul className="space-y-3 mb-4">
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Design Generativo:</strong> Ferramentas de <strong>inteligencia artificial para arquitetos</strong> permitem explorar milhares de opções de design baseadas em parâmetros específicos, expandindo a criatividade e encontrando soluções inovadoras.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Renderização Instantânea:</strong> Transforme modelos 3D ou desenhos à mão em imagens realistas em questão de segundos com o poder da <strong>ia para arquitetos</strong>, agilizando a apresentação de projetos aos clientes.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Otimização de Plantas:</strong> Utilize algoritmos inteligentes para gerar plantas baixas otimizadas, aproveitando ao máximo o espaço disponível e atendendo aos requisitos do programa de necessidades.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Análise de Sustentabilidade:</strong> A <strong>inteligencia artificial para arquitetura</strong> pode simular o desempenho energético de edifícios, ajudando a tomar decisões projetuais que reduzam o impacto ambiental.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Viabilidade Urbana:</strong> Analise rapidamente as restrições de zoneamento e o potencial construtivo de terrenos com assistentes de IA, economizando horas de pesquisa e cálculos manuais.</span>
                        </li>
                    </ul>

                    <p className="mb-4">
                        A incorporação de <strong>ferramentas de ia para arquitetura</strong> no escritório não visa substituir o arquiteto, mas sim potencializar sua visão e eficiência. Ao delegar tarefas técnicas e repetitivas para a <strong>inteligencia artificial para arquitetos</strong>, você ganha mais tempo para se dedicar aos aspectos artísticos, humanos e estratégicos de cada projeto.
                    </p>

                    <p>
                        Explore as soluções de <strong>ia para arquitetura</strong> listadas nesta página e descubra como integrar essas tecnologias ao seu fluxo de trabalho para entregar projetos melhores, mais rápidos e com maior valor agregado.
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
