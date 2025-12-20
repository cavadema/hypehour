"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ExpandableContent() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    As <strong>ferramentas de IA para desenvolvedores</strong> estão revolucionando o desenvolvimento de software. A <strong>IA para desenvolvimento de software</strong> oferece assistentes inteligentes que aceleram a codificação, automatizam testes, revisam código e aumentam a produtividade de programadores em todas as linguagens.
                </p>

                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="mb-4">
                        Encontrar a <strong>melhor IA para desenvolvedores</strong> pode transformar completamente seu fluxo de trabalho. As <strong>melhores IA para desenvolvedores</strong> incluem assistentes de código como GitHub Copilot, Cursor, Codeium e outras ferramentas especializadas que entendem contexto, sugerem soluções e até geram funções completas.
                    </p>

                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Como Usar IA para Desenvolvedores no Dia a Dia</h3>

                    <ul className="space-y-3 mb-4">
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Autocompletar Inteligente:</strong> As melhores IA para desenvolvedores oferecem sugestões de código em tempo real baseadas no contexto do projeto e padrões de programação.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Geração de Código:</strong> IA para desenvolvimento de software pode gerar funções, classes e até módulos completos a partir de descrições em linguagem natural.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Revisão Automatizada:</strong> Ferramentas de IA para desenvolvedores analisam código, identificam bugs, vulnerabilidades de segurança e sugerem melhorias de performance.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Documentação Automática:</strong> A melhor IA para desenvolvedores gera documentação clara e atualizada automaticamente a partir do código-fonte.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Testes Inteligentes:</strong> IA para desenvolvimento de software cria casos de teste, identifica edge cases e automatiza testes unitários e de integração.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Refatoração Assistida:</strong> Ferramentas de IA para desenvolvedores sugerem melhorias arquiteturais e refatoram código mantendo funcionalidade e adicionando melhores práticas.</span>
                        </li>
                    </ul>

                    <p className="mb-4">
                        A <strong>IA para desenvolvedores</strong> não substitui programadores, mas amplifica suas capacidades. Ao usar as <strong>melhores IA para desenvolvedores</strong>, você pode focar em arquitetura, lógica de negócio e inovação, enquanto a IA cuida de tarefas repetitivas e boilerplate.
                    </p>

                    <p>
                        Explore as <strong>ferramentas de IA para desenvolvedores</strong> listadas abaixo e descubra como a <strong>IA para desenvolvimento de software</strong> pode acelerar seus projetos, melhorar a qualidade do código e aumentar sua produtividade diária.
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
