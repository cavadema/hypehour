import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>IA para professores</strong> chegou para resolver um dos maiores gargalos da educação: o tempo que docentes gastam em tarefas administrativas e repetitivas em vez de ensinar. Com ferramentas como <strong>ChatGPT, Claude, Conker e NotebookLM</strong>, professores brasileiros criam planos de aula, elaboram avaliações, geram atividades diferenciadas e produzem materiais didáticos em uma fração do tempo — liberando energia para o que mais importa: a relação de ensino-aprendizagem.
                </p>
                <p className="mb-4">
                    A questão não é mais "IA vai substituir professores?" — mas sim "como professores que usam IA vão superar os que não usam?" O educador que aprende a usar IA como assistente produz mais conteúdo de qualidade, oferece feedback mais personalizado e tem mais energia para inovar pedagogicamente. O desafio está em integrar eticamente, preparando os alunos para um mundo onde trabalhar com IA é habilidade fundamental.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como Professores Estão Usando IA na Prática</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Planejamento acelerado:</strong> Planos de aula completos com objetivos, desenvolvimento, atividades e avaliação em minutos — alinhados à BNCC e adaptáveis a qualquer contexto escolar.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Avaliações diferenciadas:</strong> Gere baterias de questões em múltiplos formatos e níveis de dificuldade para o mesmo conteúdo, atendendo à diversidade de aprendizagem da turma.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Feedback personalizado em escala:</strong> IA analisa redações e produções dos alunos e gera comentários construtivos e específicos — o professor revisa e envia, sem escrever do zero para cada aluno.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Materiais visuais e interativos:</strong> Canva Edu com IA e ferramentas de apresentação geram materiais visualmente atraentes para qualquer faixa etária e disciplina.</span></li>
                </ul>
                <p>Explore as ferramentas de IA para professores listadas abaixo e descubra como incorporar inteligência artificial no seu planejamento e prática pedagógica.</p>
            </details>
        </div>
    );
}
