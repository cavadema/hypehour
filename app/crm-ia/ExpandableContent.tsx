"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ExpandableContent() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
            <p className="mb-4">
                    As <strong>ferramentas de CRM com IA</strong> estão revolucionando a forma como empresas gerenciam relacionamentos com clientes e otimizam seus processos de vendas. <strong>IA para CRM</strong> oferece soluções inteligentes que automatizam tarefas repetitivas, aumentam a produtividade das equipes e melhoram significativamente as taxas de conversão. Com <strong>automação de CRM com IA</strong>, as organizações conseguem acompanhar cada interação com clientes de forma mais eficiente e estratégica.
                </p>

                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="mb-4">
                        A integração de <strong>inteligência artificial em CRM</strong> permite que os sistemas aprendam padrões de comportamento dos clientes, identifiquem oportunidades de venda e gerem insights valiosos para a tomada de decisão. <strong>CRM com IA</strong> não é apenas sobre guardar contatos, mas sobre criar uma visão 360° de cada cliente e otimizar cada ponto de contato na jornada de compra.
                    </p>

                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Como Usar IA para Potencializar Seu CRM</h3>

                    <ul className="space-y-3 mb-4">
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Qualificação Automática de Leads:</strong> A IA para CRM identifica e classifica leads com maior potencial de conversão, economizando tempo da equipe de vendas.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Automação de Comunicação:</strong> Utilize automação de CRM com IA para enviar mensagens personalizadas em tempo ideal, aumentando engagement e taxas de resposta.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Previsão de Vendas:</strong> IA para CRM analisa dados históricos e prevê receita futura com precisão, auxiliando no planejamento estratégico.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Insights de Cliente:</strong> Ferramentas de CRM com IA geram relatórios inteligentes sobre preferências e comportamentos dos clientes.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Recomendações de Próximos Passos:</strong> A inteligência artificial em CRM sugere as melhores ações a tomar em cada etapa do pipeline de vendas.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Integração com Ferramentas de Negócio:</strong> CRM com IA se conecta facilmente com email, telefone, redes sociais e outros canais de atendimento.</span>
                        </li>
                    </ul>

                    <p className="mb-4">
                        A adoção de <strong>IA para CRM</strong> transforma a forma como empresas constroem relacionamentos com clientes, criando processos mais eficientes e personalizados. Ao automatizar tarefas operacionais através da <strong>automação de CRM com IA</strong>, os vendedores podem focar no que realmente importa: fechar negócios e construir relacionamentos de longo prazo.
                    </p>

                    <p>
                        Explore as melhores <strong>ferramentas de CRM com IA</strong> listadas abaixo e descubra como a tecnologia pode transformar sua estratégia de vendas, aumentar a produtividade da equipe e melhorar a satisfação dos clientes.
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
