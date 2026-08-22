import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    Os <strong>agregadores e pacotes de IA</strong> surgem como resposta à fragmentação do ecossistema de inteligência artificial: com dezenas de modelos competindo — cada um com pontos fortes em domínios específicos como código, análise, criatividade ou raciocínio matemático — gerenciar múltiplas assinaturas, chaves de API e interfaces separadas tornou-se inviável para a maioria dos usuários e equipes. Plataformas de agregação centralizam esse acesso em uma única camada unificada.
                </p>
                <p className="mb-4">
                    Para desenvolvedores e empresas, a vantagem vai além da conveniência: <strong>camadas de abstração sobre múltiplas APIs</strong> permitem implementar fallback automático entre provedores, cache semântico de respostas, roteamento inteligente baseado em custo e performance, e observabilidade centralizada de cada chamada. Isso transforma um ecossistema de IA fragmentado em infraestrutura gerenciável — com controle de gastos, auditoria de uso e resiliência operacional que chamadas diretas a APIs individuais simplesmente não oferecem.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Por que Usar Agregadores em vez de Assinar Cada IA Separadamente</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Economia de custo real:</strong> Planos de agregação custam menos que a soma das assinaturas individuais de cada modelo, com créditos compartilhados entre os principais LLMs disponíveis no mercado.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Comparação de modelos para cada tarefa:</strong> Com acesso simultâneo a múltiplos LLMs, você testa qual modelo responde melhor a um prompt específico — essencial para encontrar o modelo certo para escrita criativa, código, análise jurídica ou tarefas matemáticas.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Resiliência via fallback automático:</strong> Para empresas usando APIs, camadas de agregação redirecionam automaticamente para um modelo alternativo quando um provedor cai ou está sobrecarregado — garantindo disponibilidade sem código adicional.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Controle de gastos e uso por equipe:</strong> Ferramentas de agregação permitem definir limites de custo por usuário, projeto ou departamento, visualizar o custo detalhado de cada chamada e auditar o uso — resolvendo o caos de múltiplas assinaturas de IA não controladas.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
