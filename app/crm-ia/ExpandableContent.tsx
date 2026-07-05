import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    Os <strong>CRMs com IA</strong> transformaram o gerenciamento de relacionamento com clientes de uma tarefa administrativa em um motor estratégico de crescimento. Com <strong>lead scoring automático, previsões de churn e recomendações de próximas ações</strong>, os vendedores sabem exatamente em qual cliente focar, o que oferecer e quando agir — sem depender de intuição ou análise manual de planilhas.
                </p>
                <p className="mb-4">
                    Para empresas brasileiras, o <strong>CRM com inteligência artificial</strong> é especialmente valioso na redução do ciclo de vendas e no aumento da taxa de retenção. Soluções como HubSpot, RD Station e Pipedrive já oferecem funcionalidades de IA acessíveis a PMEs, enquanto Salesforce Einstein atende grandes operações com análises preditivas avançadas e personalização em escala.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como a IA Transforma Cada Etapa do Funil de Vendas</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Qualificação automática:</strong> A IA avalia cada novo lead com base em dados comportamentais e demográficos, priorizando contatos com real potencial de compra antes mesmo do primeiro contato humano.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Enriquecimento de dados:</strong> Ferramentas de IA completam automaticamente perfis de clientes com informações públicas — cargo, empresa, LinkedIn, notícias recentes — sem trabalho manual da equipe.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Previsão de receita:</strong> Modelos preditivos calculam a probabilidade de fechamento de cada negociação e projetam a receita do mês com precisão muito maior do que estimativas subjetivas dos vendedores.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Alertas de churn:</strong> A IA identifica padrões de comportamento que precedem o cancelamento e alerta o time de sucesso do cliente para agir proativamente antes da perda.</span></li>
                </ul>
                <p>Confira abaixo os melhores CRMs com IA disponíveis no mercado e escolha o que melhor se adapta ao tamanho e modelo de vendas da sua empresa.</p>
            </details>
        </div>
    );
}
