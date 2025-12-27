"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ExpandableContent() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>IA para aprender inglês</strong> está transformando o ensino de idiomas ao oferecer experiências personalizadas e adaptativas. Com <strong>aprender inglês com IA</strong>, estudantes de todos os níveis podem praticar conversação, melhorar pronúncia e expandir vocabulário de forma eficiente. Um <strong>aplicativo para aprender inglês</strong> com inteligência artificial analisa erros em tempo real e adapta o conteúdo conforme o progresso do aluno.
                </p>

                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="mb-4">
                        As ferramentas de <strong>IA para aprender inglês</strong> utilizam reconhecimento de voz, processamento de linguagem natural e machine learning para criar experiências imersivas. Ao <strong>aprender inglês com IA</strong>, você tem acesso a feedback instantâneo sobre pronúncia, gramática e vocabulário, acelerando seu desenvolvimento no idioma.
                    </p>

                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Como a IA Acelera o Aprendizado de Inglês</h3>

                    <ul className="space-y-3 mb-4">
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Prática de Conversação 24/7:</strong> A IA para aprender inglês permite treinar conversação a qualquer momento, simulando diálogos reais.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Correção de Pronúncia em Tempo Real:</strong> Aplicativos para aprender inglês com IA analisam sua fala e corrigem erros imediatamente.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Conteúdo Personalizado:</strong> Ao aprender inglês com IA, você recebe exercícios adaptados ao seu nível e objetivos.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Feedback Instantâneo:</strong> A IA para aprender inglês identifica padrões de erro e explica regras gramaticais de forma clara.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Gamificação e Motivação:</strong> Aplicativos para aprender inglês usam IA para criar desafios progressivos e manter a consistência.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Treinamento de Listening:</strong> A IA para aprender inglês adapta áudios ao seu nível, melhorando compreensão auditiva.</span>
                        </li>
                    </ul>

                    <p className="mb-4">
                        Estudos mostram que <strong>aprender inglês com IA</strong> pode acelerar o progresso em até 50% comparado a métodos tradicionais. A tecnologia permite prática ilimitada, algo impossível em aulas convencionais. Um bom <strong>aplicativo para aprender inglês</strong> oferece desde lições básicas para iniciantes até preparação para provas de proficiência como TOEFL e IELTS.
                    </p>

                    <p>
                        A <strong>IA para aprender inglês</strong> não substitui professores humanos, mas complementa o aprendizado oferecendo prática constante, feedback preciso e personalização em escala. Ferramentas modernas combinam reconhecimento de voz avançado, análise de contexto e adaptação inteligente para criar a experiência de aprendizado mais eficiente disponível hoje.
                    </p>
                </div>
            </div>

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 flex items-center gap-2 text-gray-900 hover:text-gray-700 font-medium transition"
            >
                <span>{isExpanded ? 'Ver menos' : 'Ver mais'}</span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
        </div>
    );
}
