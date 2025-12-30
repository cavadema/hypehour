"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ExpandableContent() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
            <p className="mb-4">
                    As <strong>ferramentas de IA para investimentos</strong> estão revolucionando o mercado financeiro, oferecendo análises avançadas e recomendações inteligentes para investidores de todos os níveis. Com <strong>IA para investimentos gratuito</strong>, até iniciantes podem acessar tecnologias de ponta que antes eram exclusivas de grandes instituições financeiras. A <strong>melhor IA para investimentos</strong> oferece análise de mercado em tempo real, identificação de oportunidades e gestão automatizada de portfólio.
                </p>

                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="mb-4">
                        A integração de <strong>IA para investimentos financeiros</strong> permite que investidores tomem decisões mais informadas com base em análise de dados históricos, tendências de mercado e padrões de comportamento. Ferramentas de <strong>IA para análise de investimentos</strong> processam milhares de variáveis simultaneamente, identificando oportunidades que passariam despercebidas em análises tradicionais.
                    </p>

                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Como Usar IA para Potencializar Seus Investimentos</h3>

                    <ul className="space-y-3 mb-4">
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Análise Preditiva de Mercado:</strong> IA para investimentos analisa dados históricos e tendências para prever movimentos de mercado com maior precisão.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Gestão Automatizada de Portfólio:</strong> A melhor IA para investimentos rebalanceia automaticamente seu portfólio com base em objetivos e perfil de risco.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Análise de Criptomoedas:</strong> Utilize IA para investir em criptomoedas, identificando padrões e oportunidades no mercado cripto 24/7.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Alertas Inteligentes:</strong> IA para análise de investimentos envia notificações sobre oportunidades de compra, venda ou riscos identificados.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Análise de Sentimento:</strong> IA para investimentos financeiros monitora notícias, redes sociais e relatórios para avaliar sentimento do mercado.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Backtesting de Estratégias:</strong> Teste suas estratégias de investimento com dados históricos usando IA para análise de investimentos antes de aplicar capital real.</span>
                        </li>
                    </ul>

                    <p className="mb-4">
                        A adoção de <strong>IA para investimentos</strong> democratiza o acesso a análises sofisticadas, permitindo que investidores individuais tenham ferramentas comparáveis às de grandes fundos. Com <strong>IA para investimentos gratuito</strong>, qualquer pessoa pode começar a usar tecnologia de ponta para melhorar seus resultados financeiros sem investimento inicial.
                    </p>

                    <p>
                        Explore as melhores <strong>ferramentas de IA para investimentos</strong> listadas abaixo e descubra como a tecnologia pode transformar sua estratégia de investimentos, aumentar seus retornos e reduzir riscos através de análises inteligentes e automatizadas.
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
