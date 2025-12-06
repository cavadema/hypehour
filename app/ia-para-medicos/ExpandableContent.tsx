"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ExpandableContent() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200 mt-12">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>inteligência artificial para médicos</strong> está transformando o cenário da saúde, oferecendo ferramentas poderosas para auxiliar no diagnóstico, tratamento e gestão clínica. O uso de <strong>ia para medicos</strong> permite que profissionais de saúde analisem grandes volumes de dados, identifiquem padrões complexos e tomem decisões mais precisas e rápidas.
                </p>

                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="mb-4">
                        Com o avanço da tecnologia, surgiram diversas opções de <strong>app de inteligencia artificial para medicos</strong>, que vão desde assistentes virtuais para agendamento de consultas até sistemas avançados de suporte à decisão clínica. O uso de <strong>chat ia para medicos</strong> também tem crescido, facilitando a comunicação com pacientes e o acesso rápido a informações médicas atualizadas.
                    </p>

                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Benefícios da IA na Medicina</h3>

                    <ul className="space-y-3 mb-4">
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Diagnóstico Preciso:</strong> Ferramentas de <strong>inteligencia artificial para medicos</strong> auxiliam na detecção precoce de doenças através da análise de exames de imagem e dados clínicos.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Otimização do Tempo:</strong> A automação de tarefas administrativas e a transcrição de consultas liberam tempo para que o médico se dedique mais ao paciente.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Medicina Personalizada:</strong> Algoritmos de IA ajudam a identificar tratamentos mais eficazes com base no perfil genético e histórico do paciente.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Atualização Constante:</strong> Plataformas de IA processam milhares de artigos científicos diariamente, mantendo o profissional atualizado com as últimas descobertas.</span>
                        </li>
                    </ul>

                    <p className="mb-4">
                        É importante ressaltar que a <strong>ia para medicos</strong> não substitui o julgamento clínico humano, mas serve como uma ferramenta complementar indispensável na medicina moderna. A integração dessas tecnologias nos hospitais e clínicas representa um salto de qualidade no atendimento e na segurança do paciente.
                    </p>

                    <p>
                        Explore as soluções listadas nesta página e descubra como a <strong>inteligencia artificial para medicos</strong> pode revolucionar a sua prática clínica, trazendo mais eficiência e precisão para o seu dia a dia.
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
