"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ExpandableContent() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    As <strong>ferramentas de IA para professores</strong> estão transformando a educação e revolucionando a forma como educadores planejam aulas, avaliam alunos e personalizam o ensino. A <strong>inteligência artificial para professores</strong> oferece soluções práticas para economizar tempo, aumentar o engajamento e melhorar os resultados de aprendizagem.
                </p>

                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="mb-4">
                        Com o uso de <strong>IA para professores</strong>, educadores podem criar planos de aula personalizados em minutos, gerar quizzes adaptativos e receber feedback instantâneo sobre o progresso dos alunos. As <strong>ferramentas de inteligência artificial para professores</strong> também auxiliam na diferenciação do ensino, permitindo que cada estudante aprenda no seu próprio ritmo e estilo.
                    </p>

                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Como Professores Podem Usar IA ao Seu Favor</h3>

                    <ul className="space-y-3 mb-4">
                        <li className="flex gap-2">
                            <span className="text-blue-500 font-bold">•</span>
                            <span><strong>Planejamento de Aulas Automatizado:</strong> As ferramentas de IA para professores geram planos de aula completos alinhados à BNCC em minutos, economizando horas de preparação.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-blue-500 font-bold">•</span>
                            <span><strong>Criação de Avaliações Personalizadas:</strong> Utilize inteligência artificial para professores para criar quizzes, provas e atividades adaptadas ao nível de cada turma.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-blue-500 font-bold">•</span>
                            <span><strong>Feedback Instantâneo:</strong> IA para professores corrige atividades automaticamente e fornece feedback detalhado para cada aluno, acelerando o processo de avaliação.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-blue-500 font-bold">•</span>
                            <span><strong>Diferenciação do Ensino:</strong> Ferramentas de inteligência artificial para professores adaptam conteúdos para diferentes níveis de aprendizagem, garantindo que nenhum aluno fique para trás.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-blue-500 font-bold">•</span>
                            <span><strong>Geração de Materiais Didáticos:</strong> Com IA para professores, crie apresentações, infográficos e materiais visuais envolventes em poucos cliques.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-blue-500 font-bold">•</span>
                            <span><strong>Análise de Desempenho:</strong> Ferramentas de IA para professores identificam padrões de aprendizagem, pontos fortes e áreas que precisam de reforço em cada aluno.</span>
                        </li>
                    </ul>

                    <p className="mb-4">
                        A adoção de <strong>ferramentas de IA para professores</strong> não substitui o papel fundamental do educador, mas potencializa sua capacidade de ensinar e inspirar. Ao automatizar tarefas administrativas e repetitivas, a <strong>inteligência artificial para professores</strong> libera tempo para o que realmente importa: conexão humana, mentoria e desenvolvimento socioemocional dos alunos.
                    </p>

                    <p>
                        Explore as melhores <strong>ferramentas de IA para professores</strong> listadas abaixo e descubra como a tecnologia pode transformar sua prática pedagógica, aumentar o engajamento dos alunos e tornar o ensino mais eficiente e prazeroso.
                    </p>
                </div>
            </div>

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                aria-expanded={isExpanded}
            >
                <span>{isExpanded ? 'Ver menos' : 'Ver mais'}</span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
        </div>
    );
}
