import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>criação de agentes de IA</strong> representa o próximo nível da automação inteligente. Diferente de um chatbot que responde perguntas, um agente é um sistema autônomo que <strong>planeja, raciocina e executa sequências de tarefas</strong> de forma independente — pesquisando informações, escrevendo código, analisando documentos e interagindo com APIs externas para atingir objetivos definidos por você.
                </p>
                <p className="mb-4">
                    Os <strong>sistemas multi-agente</strong> amplificam esse poder: imagine um time virtual onde cada agente tem um papel especializado — um pesquisa o mercado, outro analisa a concorrência, um terceiro escreve o relatório e um quarto formata e envia por e-mail — tudo de forma coordenada e automática. Essa arquitetura distribui a complexidade e permite abordar problemas que nenhum agente único conseguiria resolver com eficiência.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Componentes Essenciais de um Agente de IA Eficaz</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Modelo base (LLM):</strong> O cérebro do agente — um modelo de linguagem de grande escala responsável pelo raciocínio, planejamento e geração de linguagem natural em cada etapa da tarefa.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Ferramentas (Tools):</strong> Funções que o agente pode chamar para agir no mundo — busca web, execução de código, acesso a bancos de dados, envio de e-mails e consulta a APIs externas.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Memória:</strong> Contexto de curto prazo (conversa atual) e longo prazo (banco vetorial) para que o agente se lembre de informações relevantes entre sessões e tome decisões mais coerentes ao longo do tempo.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Orquestração:</strong> A lógica que define como o agente planeja e decide qual ferramenta usar em cada momento — padrões como ReAct e Plan-and-Execute são os mais adotados em produção.</span></li>
                </ul>
                <p>Explore as ferramentas e frameworks listados abaixo para começar a construir seus próprios agentes de IA, do protótipo simples ao sistema de produção robusto.</p>
            </details>
        </div>
    );
}
