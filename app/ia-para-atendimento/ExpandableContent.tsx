"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ExpandableContent() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>automação de atendimento com IA</strong> está transformando a forma como empresas se relacionam com seus clientes. As soluções de <strong>IA para atendimento</strong> oferecem recursos avançados para personalizar interações, reduzir tempo de resposta e aumentar a satisfação do cliente em todos os canais de comunicação.
                </p>

                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="mb-4">
                        Com <strong>IA para atendimento no WhatsApp</strong> e outros canais digitais, empresas podem atender clientes 24/7 de forma automatizada e inteligente. O <strong>atendimento com IA</strong> permite resolver dúvidas frequentes, qualificar leads e direcionar casos complexos para atendentes humanos de forma eficiente.
                    </p>

                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Como Usar IA para Atendimento ao Cliente</h3>

                    <ul className="space-y-3 mb-4">
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Atendimento Multicanal Integrado:</strong> Use IA para atendimento no WhatsApp, Instagram, Telegram e outros canais simultaneamente com respostas consistentes e personalizadas.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Respostas Automáticas Inteligentes:</strong> A automação de atendimento com IA entende o contexto das perguntas e oferece respostas precisas baseadas em histórico e base de conhecimento.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Qualificação de Leads:</strong> Agente de IA para atendimento identifica oportunidades comerciais, qualifica leads e encaminha para o time de vendas no momento certo.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Atendimento por Voz:</strong> IA para atendimento ao cliente também funciona em ligações telefônicas, compreendendo linguagem natural e oferecendo respostas humanizadas.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Análise de Sentimento:</strong> O atendimento com IA detecta emoções e urgência nas mensagens, priorizando casos que exigem atenção imediata.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Integração com CRM:</strong> Agente de IA para atendimento registra interações automaticamente em sistemas CRM, mantendo histórico completo do cliente.</span>
                        </li>
                    </ul>

                    <p className="mb-4">
                        A <strong>IA para atendimento</strong> não substitui o atendimento humano, mas potencializa a capacidade da equipe ao automatizar tarefas repetitivas. Com <strong>automação de atendimento com IA</strong>, sua equipe pode focar em casos complexos que realmente exigem empatia e expertise humana.
                    </p>

                    <p>
                        Explore as melhores ferramentas de <strong>IA para atendimento ao cliente</strong> listadas abaixo e descubra como a tecnologia pode melhorar a experiência do seu cliente, reduzir custos operacionais e aumentar a eficiência do seu time de suporte.
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
