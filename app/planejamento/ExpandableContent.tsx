import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>IA aplicada ao planejamento e produtividade</strong> atua em duas frentes complementares: ferramentas que aprendem seus padrões de trabalho para otimizar agenda e prioridades automaticamente, e modelos de linguagem que funcionam como interlocutores para estruturar projetos complexos, quebrar metas em etapas e identificar gargalos antes que se tornem problemas. A combinação dessas duas abordagens representa uma mudança significativa na forma como profissionais gerenciam tempo e energia.
                </p>
                <p className="mb-4">
                    O principal ganho não é velocidade, mas <strong>qualidade de decisão</strong>: quando você verbaliza um objetivo ou desafio de planejamento para uma IA, o processo de articulação já clarifica o problema. A IA devolve estrutura, perguntas e frameworks que transformam intenções vagas em planos com sequência lógica, responsabilidades definidas e critérios claros de conclusão — sem depender de reuniões ou consultorias externas para chegar a esse nível de organização.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Onde a IA está sendo aplicada em planejamento e produtividade</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Gestão de agenda:</strong> sistemas que analisam tarefas, compromissos e padrões de energia para alocar automaticamente blocos de trabalho focado, reuniões e pausas — eliminando a fragmentação do dia sem esforço manual.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Estruturação de projetos:</strong> transformar um objetivo vago em plano detalhado com etapas, dependências, prazos e marcos de revisão — comprimindo em minutos um trabalho que antes exigia horas de planejamento ou workshops de equipe.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Priorização sob pressão:</strong> quando tudo parece urgente, a IA aplica frameworks objetivos — Matriz de Eisenhower, MoSCoW, RICE — para ordenar a fila de trabalho com base em impacto real e não em pressão emocional do momento.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Revisão periódica:</strong> análise semanal ou mensal do que foi concluído, o que travou e por quê — gerando aprendizado sistemático sobre os próprios padrões de produtividade ao longo do tempo.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
