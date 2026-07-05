import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    As <strong>ferramentas de IA para criar apresentações</strong> eliminaram uma das tarefas mais demoradas do mundo corporativo: montar slides do zero. Com plataformas como <strong>Gamma, Tome e Beautiful.ai</strong>, você descreve o tema em um parágrafo e recebe uma apresentação completa com estrutura lógica, design profissional e conteúdo organizado — em menos de 2 minutos. O que antes levava horas agora é questão de segundos.
                </p>
                <p className="mb-4">
                    Para profissionais brasileiros que precisam de <strong>apresentações no PowerPoint, Google Slides ou PDF</strong>, essas ferramentas de IA são especialmente valiosas. Seja um pitch para investidores, relatório trimestral para a diretoria, material de treinamento para a equipe ou proposta comercial para um cliente, a IA entrega a estrutura e o visual — e você adiciona os dados específicos e o toque pessoal que fazem a diferença.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Vantagens de Criar Apresentações com IA</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Velocidade sem precedentes:</strong> Do prompt à apresentação completa em menos de 2 minutos — deixe de perder horas em formatação e foco em conteúdo estratégico.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Design profissional automático:</strong> IA garante consistência visual, hierarquia tipográfica e paletas de cores coerentes — mesmo para quem não tem habilidade em design gráfico.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Estrutura lógica inteligente:</strong> A IA organiza o conteúdo em fluxo persuasivo — problema, solução, dados, call to action — adaptando a estrutura ao objetivo da apresentação.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Iteração rápida:</strong> Ajuste o tom, a profundidade do conteúdo ou o estilo visual com um clique — experimentar diferentes abordagens visuais nunca foi tão fácil.</span></li>
                </ul>
                <p>Explore as ferramentas de IA para criar apresentações listadas abaixo e nunca mais passe horas formatando slides manualmente.</p>
            </details>
        </div>
    );
}
