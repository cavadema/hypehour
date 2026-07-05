import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>IA para vendas</strong> está elevando o desempenho de equipes comerciais brasileiras de forma mensurável. Com ferramentas como <strong>Clay para prospecção inteligente, Gong para análise de chamadas e HubSpot AI para CRM</strong>, vendedores chegam a cada conversa com muito mais contexto sobre o prospect, sabem exatamente o que funcionou em negociações anteriores e automatizam as tarefas administrativas que consumiam horas da semana.
                </p>
                <p className="mb-4">
                    O diferencial da <strong>IA no processo comercial</strong> é a capacidade de personalização em escala: e-mails que parecem escritos à mão para cada prospect, propostas adaptadas ao contexto específico de cada empresa e follow-ups disparados no momento exato em que o sinal de interesse é detectado. Empresas que adotam IA em vendas consistentemente relatam ciclos mais curtos, taxas de conversão mais altas e previsões de receita mais precisas.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como a IA Impacta Cada Etapa do Processo Comercial</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Prospecção inteligente:</strong> IA combina dados de empresas, sinais de intenção e fit de mercado para priorizar automaticamente os prospects com maior probabilidade de conversão.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Outreach personalizado:</strong> Sequências de e-mail com personalização por IA aumentam taxas de resposta em 2x a 5x comparado a templates genéricos enviados em massa.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Coaching baseado em dados:</strong> Análise de chamadas com IA identifica os padrões de comunicação dos top performers e treina toda a equipe para replicar o que funciona.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Previsão de receita precisa:</strong> Modelos preditivos calculam a probabilidade real de fechamento de cada deal, permitindo planejamento de recursos muito mais confiável que estimativas subjetivas.</span></li>
                </ul>
                <p>Explore as ferramentas de IA para vendas listadas abaixo e descubra como automatizar a prospecção, melhorar conversões e dar mais velocidade ao seu funil comercial.</p>
            </details>
        </div>
    );
}
