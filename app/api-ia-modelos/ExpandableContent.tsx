"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ExpandableContent() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    As <strong>ferramentas de IA para api ia modelos</strong> estão revolucionando a maneira como profissionais e empresas lidam com processos complexos. A <strong>inteligência artificial aplicada a api ia modelos</strong> permite automatizar tarefas repetitivas, aumentar a precisão dos resultados e liberar tempo criativo para o que realmente importa. Explore nossa curadoria de ferramentas e descubra como a tecnologia pode elevar seu patamar de produtividade.
                </p>

                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="mb-4">
                        Ao escolher uma <strong>IA para api ia modelos</strong>, é fundamental observar a integração com seus fluxos atuais e a facilidade de uso. As melhores soluções do mercado oferecem não apenas automação, mas também insights estratégicos que ajudam na tomada de decisão. Com o avanço constante dos modelos de linguagem e visão computacional, as possibilidades para <strong>api ia modelos com IA</strong> são praticamente ilimitadas.
                    </p>

                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Benefícios de usar IA para Api Ia Modelos</h3>

                    <ul className="space-y-3 mb-4">
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Produtividade Aumentada:</strong> Execute em minutos o que antes levava horas através de processamento inteligente.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Redução de Erros:</strong> A IA mantém a consistência em tarefas de api ia modelos, minimizando falhas humanas.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Customização Total:</strong> Adapte as ferramentas às necessidades específicas do seu negócio ou projeto pessoal.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Vantagem Competitiva:</strong> Esteja à frente no mercado utilizando as tecnologias mais avançadas de inteligência artificial.</span>
                        </li>
                    </ul>

                    <p className="mb-4">
                        Lembre-se que a <strong>IA para api ia modelos</strong> deve ser vista como um copiloto que potencializa suas habilidades. A revisão humana e o direcionamento estratégico continuam sendo os diferenciais de um trabalho de excelência.
                    </p>

                    <p>
                        Abaixo, você encontrará uma lista completa com as melhores <strong>ferramentas de IA para Api Ia Modelos</strong>, selecionadas para ajudar você a transformar seus desafios em resultados concretos.
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
