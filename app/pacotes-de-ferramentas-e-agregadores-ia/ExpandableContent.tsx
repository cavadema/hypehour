import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    Os <strong>pacotes e agregadores de ferramentas de IA</strong> resolvem um dos principais desafios de quem trabalha com inteligência artificial: o excesso de assinaturas dispersas. Plataformas como <strong>Poe, Perplexity Pro e You.com</strong> centralizam acesso a múltiplos modelos de IA — GPT-4o, Claude, Gemini, Llama — em uma única interface e assinatura, permitindo escolher o melhor modelo para cada tarefa sem trocar de aba ou pagar individualmente por cada um.
                </p>
                <p className="mb-4">
                    Para equipes e empresas, <strong>agregadores de IA como Portkey, OpenRouter e AI Gateway da Vercel</strong> oferecem uma camada unificada sobre múltiplas APIs — com fallback automático entre provedores, controle de custos por equipe, logging centralizado e cache de respostas. Isso transforma o ecossistema fragmentado de LLMs em uma infraestrutura única, confiável e gerenciável, economizando horas de integração e reduzindo significativamente os custos de API.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Por que Usar Agregadores em vez de Assinar Cada IA Separadamente</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Economia de custo real:</strong> Poe e You.com Pro custam menos de US$20/mês e incluem créditos para GPT-4o, Claude 3.5, Gemini 1.5 Pro e outros — em vez de pagar US$20/mês por cada um separadamente, você acessa o melhor de cada por uma fração do custo total.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Comparação de modelos para cada tarefa:</strong> Com acesso simultâneo a múltiplos LLMs, você testa qual modelo responde melhor a um prompt específico — essencial para encontrar o modelo certo para escrita criativa, código, análise jurídica ou tarefas matemáticas.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Resiliência via fallback automático:</strong> Para empresas usando APIs, agregadores como OpenRouter e Portkey redirecionam automaticamente para um modelo alternativo quando um provedor cai ou está sobrecarregado — garantindo disponibilidade sem código adicional.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Controle de gastos e uso por equipe:</strong> Ferramentas de API aggregation permitem definir limites de custo por usuário, projeto ou departamento, visualizar o custo detalhado de cada chamada e auditar o uso — resolvendo o caos de cartões corporativos com múltiplas assinaturas de IA não controladas.</span></li>
                </ul>
                <p>Explore os pacotes e agregadores de IA listados abaixo e descubra como simplificar seu stack de inteligência artificial, reduzir custos com assinaturas múltiplas e ter acesso ao melhor de cada modelo em uma única plataforma.</p>
            </details>
        </div>
    );
}
