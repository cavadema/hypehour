"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ExpandableContent() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    As <strong>ferramentas de IA para RH</strong> estão transformando a gestão de pessoas e otimizando processos de recursos humanos em empresas de todos os portes. A <strong>inteligência artificial para RH</strong> oferece soluções inovadoras para recrutamento, seleção, engajamento de colaboradores e análise de dados estratégicos.
                </p>

                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="mb-4">
                        Com o uso de <strong>IA para RH</strong>, profissionais de recursos humanos podem automatizar triagens de currículos, identificar os melhores candidatos com base em análise preditiva e melhorar a experiência do colaborador desde o onboarding até o offboarding. As <strong>ferramentas de inteligência artificial para RH</strong> também auxiliam na redução de vieses inconscientes nos processos seletivos e na tomada de decisões baseadas em dados concretos.
                    </p>

                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Como o RH Pode Usar IA ao Seu Favor</h3>

                    <ul className="space-y-3 mb-4">
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Recrutamento Inteligente:</strong> As ferramentas de IA para RH analisam milhares de currículos em segundos, identificando candidatos com o perfil ideal para cada vaga e economizando tempo precioso da equipe.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Entrevistas Automatizadas:</strong> Utilize inteligência artificial para RH para conduzir entrevistas iniciais por vídeo ou chatbot, avaliando competências técnicas e comportamentais de forma objetiva.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Análise de Turnover:</strong> IA para RH pode prever quais colaboradores têm maior risco de deixar a empresa, permitindo ações preventivas de retenção de talentos.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Onboarding Personalizado:</strong> Ferramentas de inteligência artificial para RH criam jornadas de integração customizadas para cada novo colaborador, aumentando o engajamento desde o primeiro dia.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Avaliação de Desempenho:</strong> Com IA para RH, realize avaliações contínuas e objetivas, identificando pontos fortes e oportunidades de desenvolvimento de cada profissional.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Gestão de Clima Organizacional:</strong> Ferramentas de IA para RH analisam feedbacks e pesquisas de clima em tempo real, gerando insights acionáveis para melhorar o ambiente de trabalho.</span>
                        </li>
                    </ul>

                    <p className="mb-4">
                        A adoção de <strong>ferramentas de IA para RH</strong> não substitui o toque humano essencial na gestão de pessoas, mas potencializa a capacidade estratégica do departamento. Ao automatizar tarefas operacionais e repetitivas, a <strong>inteligência artificial para RH</strong> libera tempo para que profissionais de recursos humanos se concentrem no que realmente importa: desenvolvimento de cultura organizacional, estratégias de retenção e crescimento dos colaboradores.
                    </p>

                    <p>
                        Explore as melhores <strong>ferramentas de IA para RH</strong> listadas abaixo e descubra como a tecnologia pode revolucionar sua gestão de pessoas, aumentar a eficiência dos processos seletivos e criar um ambiente de trabalho mais produtivo e engajado.
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
