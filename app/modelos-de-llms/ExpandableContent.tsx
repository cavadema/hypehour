import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    Os <strong>modelos de linguagem de grande escala (LLMs)</strong> são a base tecnológica de toda a revolução de IA generativa. Entender as diferenças entre <strong>GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro e os modelos open source como LLaMA 3 e Mistral</strong> é fundamental para escolher a ferramenta certa para cada caso de uso — seja em custo por token, capacidade de contexto, velocidade de inferência ou desempenho em tarefas específicas.
                </p>
                <p className="mb-4">
                    Para desenvolvedores e empresas brasileiras, o <strong>mercado de LLMs</strong> oferece hoje uma gama de opções que vai do acesso via API de provedores líderes (OpenAI, Anthropic, Google) até modelos open source rodando localmente sem custos de API e sem envio de dados para servidores externos. A escolha depende de fatores como privacidade de dados, latência, volume de uso, orçamento e as capacidades específicas de cada modelo.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como Escolher o LLM Certo para seu Projeto</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Custo vs. capacidade:</strong> Para alto volume com qualidade satisfatória, use GPT-4o Mini ou Claude Haiku. Para tarefas complexas que justificam custo maior, GPT-4o e Claude 3.5 Sonnet entregam melhor resultado.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Janela de contexto:</strong> Para processar documentos longos ou grandes bases de código, Gemini 1.5 Pro (1M tokens) é imbatível. Claude 3.5 Sonnet (200k) é excelente para contratos e livros.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Privacidade e controle:</strong> Para dados sensíveis, modelos open source como LLaMA 3 e Mistral rodando on-premise eliminam o risco de dados saírem da sua infraestrutura.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Benchmarks específicos:</strong> Nenhum modelo é melhor em tudo — consulte benchmarks como MMLU, HumanEval e MATH para comparar performance na tarefa específica que você precisa resolver.</span></li>
                </ul>
                <p>Explore os modelos de LLM listados abaixo com comparações de capacidade, preço e casos de uso para escolher o mais adequado ao seu projeto ou produto.</p>
            </details>
        </div>
    );
}
