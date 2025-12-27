"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ExpandableContent() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    Os <strong>cursos de IA</strong> estão revolucionando a forma como profissionais aprendem e aplicam inteligência artificial em suas carreiras. Com um <strong>curso de IA gratuito</strong>, qualquer pessoa pode começar a explorar o mundo da IA sem investimento inicial. Para quem está começando, um <strong>curso de IA para iniciantes</strong> oferece fundamentos sólidos e aplicações práticas desde o primeiro dia.
                </p>

                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="mb-4">
                        A demanda por <strong>cursos de IA</strong> cresceu exponencialmente nos últimos anos, com profissionais buscando capacitação para se destacar no mercado. Um bom <strong>curso de IA gratuito</strong> pode ser o ponto de partida ideal, oferecendo conhecimento teórico e prático sem barreiras financeiras. Para iniciantes, escolher um <strong>curso de IA para iniciantes</strong> adequado é fundamental para construir uma base sólida.
                    </p>

                    <h3 className="font-semibold text-lg mb-3 text-gray-900">O Que Você Aprende em Cursos de IA</h3>

                    <ul className="space-y-3 mb-4">
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Fundamentos de IA:</strong> Cursos de IA começam com conceitos básicos de machine learning, redes neurais e automação.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Ferramentas Práticas:</strong> Um curso de IA gratuito ensina a usar ChatGPT, ferramentas de análise e automação.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Aplicações Reais:</strong> Curso de IA para iniciantes foca em casos práticos do dia a dia profissional.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Análise de Dados:</strong> Cursos de IA ensinam como extrair insights de dados usando IA.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Automação de Processos:</strong> Aprenda a automatizar tarefas repetitivas com IA em qualquer curso de IA gratuito.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Ética e Responsabilidade:</strong> Um bom curso de IA para iniciantes aborda uso ético e responsável da tecnologia.</span>
                        </li>
                    </ul>

                    <p className="mb-4">
                        Escolher entre os diversos <strong>cursos de IA</strong> disponíveis pode parecer desafiador, mas começar com um <strong>curso de IA gratuito</strong> elimina o risco financeiro. Para quem nunca teve contato com a área, um <strong>curso de IA para iniciantes</strong> estruturado oferece progressão gradual e suporte adequado para o aprendizado.
                    </p>

                    <p>
                        Os melhores <strong>cursos de IA</strong> combinam teoria com prática, oferecendo exercícios reais e projetos aplicáveis. Seja através de um <strong>curso de IA gratuito</strong> ou investimento em formação completa, o conhecimento adquirido é cada vez mais valorizado pelo mercado. Um <strong>curso de IA para iniciantes</strong> bem escolhido pode ser o primeiro passo para uma carreira transformadora em tecnologia.
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
