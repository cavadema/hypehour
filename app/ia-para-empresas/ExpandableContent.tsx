import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>inteligência artificial aplicada a negócios</strong> funciona por meio de modelos que processam linguagem natural, dados estruturados e padrões de comportamento — permitindo que sistemas automatizem decisões rotineiras, gerem conteúdo em escala e extraiam insights de grandes volumes de informação com uma velocidade impossível para equipes humanas. A diferença em relação a sistemas de automação tradicionais está na capacidade de lidar com variabilidade: a IA responde a situações novas sem precisar de regras explícitas programadas para cada caso.
                </p>
                <p className="mb-4">
                    Para organizações de qualquer porte, o impacto mais imediato está na <strong>redistribuição de trabalho</strong>: atividades repetitivas de alto volume — triagem de documentos, respostas a perguntas frequentes, geração de relatórios, entrada de dados — passam a ser executadas por IA, enquanto as equipes se concentram em tarefas que exigem julgamento, criatividade e relacionamento. Esse deslocamento não elimina funções, mas transforma o perfil de entrega de cada área do negócio.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Áreas da empresa onde a IA gera impacto mensurável</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Atendimento e suporte:</strong> Resolução automática de solicitações recorrentes, triagem inteligente de tickets e escalonamento contextualizado — reduzindo tempo de resposta sem ampliar equipe.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Marketing e comunicação:</strong> Produção de conteúdo em múltiplos formatos, personalização de mensagens por segmento e análise de performance de campanhas em tempo real.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Operações e processos internos:</strong> Extração de dados de documentos, geração automática de relatórios e eliminação de etapas manuais em fluxos administrativos recorrentes.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Vendas e inteligência comercial:</strong> Qualificação preditiva de leads, sugestão de próximas ações por conta e apoio à elaboração de propostas com base no histórico do cliente.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
