import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>criação de agentes de IA</strong> representa o próximo nível da automação inteligente. Com frameworks como <strong>CrewAI, LangChain e AutoGen</strong>, é possível construir sistemas autônomos que planejam, raciocinam e executam sequências de tarefas complexas — pesquisando informações, escrevendo código, analisando documentos e interagindo com APIs externas para atingir objetivos definidos por você.
                </p>
                <p className="mb-4">
                    Os <strong>agentes de IA multi-agente</strong> são especialmente poderosos: imagine um time virtual onde um agente pesquisa o mercado, outro analisa a concorrência, um terceiro escreve o relatório e um quarto formata e envia por e-mail — tudo de forma coordenada e automática. Desenvolvedores, consultores e cientistas de dados são os maiores beneficiários dessas tecnologias hoje.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Componentes Essenciais de um Agente de IA Eficaz</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Modelo base (LLM):</strong> O cérebro do agente — GPT-4o, Claude 3.5 ou Gemini — responsável pelo raciocínio, planejamento e geração de linguagem natural.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Ferramentas (Tools):</strong> Funções que o agente pode chamar para agir no mundo — busca web, execução de Python, acesso a bancos de dados, envio de e-mails.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Memória:</strong> Contexto de curto prazo (conversa atual) e longo prazo (banco vetorial) para que o agente se lembre de informações relevantes entre sessões.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Orquestração:</strong> A lógica que define como o agente planeja e decide qual ferramenta usar em cada momento — padrões como ReAct e Plan-and-Execute são os mais comuns.</span></li>
                </ul>
                <p>Explore as ferramentas e frameworks listados abaixo para começar a construir seus próprios agentes de IA, do protótipo simples ao sistema de produção robusto.</p>
            </details>
        </div>
    );
}
