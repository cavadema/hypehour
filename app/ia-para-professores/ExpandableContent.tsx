import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>inteligência artificial aplicada à educação</strong> atua sobre uma das maiores tensões estruturais da profissão docente: o tempo gasto em tarefas de produção e administração em detrimento do tempo dedicado ao ensino em si. Modelos de linguagem de grande escala conseguem gerar planos de aula, avaliações, atividades diferenciadas e feedback textual a partir de instruções simples — comprimindo em minutos trabalhos que antes ocupavam horas do planejamento semanal de um professor.
                </p>
                <p className="mb-4">
                    A mudança de paradigma mais significativa está na <strong>possibilidade de diferenciação pedagógica em escala</strong>: adaptar o mesmo conteúdo para múltiplos níveis de compreensão, gerar versões simplificadas de textos para alunos com dificuldades específicas e criar variações de atividade por estilo de aprendizagem deixou de ser algo que exige horas de retrabalho manual. O professor continua sendo o responsável pelo julgamento pedagógico — a IA executa as variações que ele orienta.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como a IA está sendo aplicada na prática docente</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Planejamento de aulas e sequências didáticas:</strong> Geração de planos completos com objetivos, desenvolvimento, atividades e critérios de avaliação alinhados à BNCC em poucos minutos.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Elaboração de avaliações:</strong> Criação de baterias de questões em diferentes formatos e níveis de dificuldade para o mesmo conteúdo, atendendo à diversidade de aprendizagem da turma.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Feedback em escala:</strong> Análise de redações e produções com geração de comentários construtivos e específicos para cada aluno — que o professor revisa e envia sem escrever do zero.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Adaptação de materiais por nível:</strong> Reescrita automática de textos e explicações em diferentes graus de complexidade para atender alunos com ritmos e perfis de aprendizagem distintos.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
