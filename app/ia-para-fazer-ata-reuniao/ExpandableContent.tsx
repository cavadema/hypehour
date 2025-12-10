"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ExpandableContent() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
            <p className="mb-4">
                    As <strong>ferramentas de IA para fazer ata de reunião</strong> estão transformando a forma como profissionais documentam e acompanham suas reuniões. Ferramentas de IA para gerar atas de reunião automaticamente, economizando tempo e garantindo registros precisos. A <strong>inteligência artificial para reunião</strong> oferece soluções práticas para economizar tempo, garantir registros precisos e melhorar o acompanhamento de ações.
                </p>

                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="mb-4">
                        Com o uso de <strong>IA para transcrever reunião</strong>, profissionais podem capturar automaticamente cada detalhe importante, identificar pontos de ação e gerar atas estruturadas em minutos. As <strong>ferramentas de IA para fazer ata de reunião</strong> também auxiliam na organização de informações, permitindo buscas rápidas e compartilhamento eficiente com toda a equipe.
                    </p>

                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Como Usar IA para Otimizar Suas Reuniões</h3>

                    <ul className="space-y-3 mb-4">
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Transcrição Automática:</strong> A IA para transcrever reunião captura cada palavra, eliminando a necessidade de notas manuais e garantindo precisão total.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Geração Automática de Atas:</strong> Utilize inteligência artificial para fazer ata de reunião estruturada, com resumo, pontos-chave e ações identificadas.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Identificação de Responsáveis:</strong> A IA para reunião detecta quem é responsável por cada ação, facilitando o acompanhamento.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Resumo Executivo:</strong> Ferramentas de IA para fazer ata de reunião geram resumos curtos e objetivos para quem não pôde participar.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Busca e Recuperação:</strong> Pesquise por palavras-chave em qualquer ata passada, economizando horas procurando informações antigas.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Integração com Ferramentas de Produtividade:</strong> A IA para transcrever reunião se integra com calendários, tarefas e plataformas de comunicação.</span>
                        </li>
                    </ul>

                    <p className="mb-4">
                        A adoção de <strong>IA para fazer ata de reunião</strong> não substitui a importância de discussões produtivas e envolvimento real, mas potencializa a organização e o acompanhamento. Ao automatizar a documentação, a <strong>inteligência artificial para reunião</strong> libera tempo para participantes se focarem na discussão ao invés de tomar notas.
                    </p>

                    <p>
                        Explore as melhores <strong>ferramentas de IA para fazer ata de reunião</strong> listadas abaixo e descubra como a tecnologia pode transformar suas reuniões em processos mais eficientes, organizados e produtivos para toda a equipe.
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
