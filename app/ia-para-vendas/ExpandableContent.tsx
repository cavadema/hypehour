import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>inteligência artificial no processo de vendas</strong> funciona transformando dados dispersos em inteligência acionável. Modelos treinados em milhões de interações comerciais conseguem identificar padrões de comportamento que indicam intenção de compra, prever a probabilidade de fechamento de cada oportunidade e personalizar comunicações no nível do indivíduo — tudo de forma automática e em escala que seria humanamente impossível.
                </p>
                <p className="mb-4">
                    A mudança mais profunda que a IA trouxe para vendas não é a automação de tarefas, mas a <strong>personalização em escala</strong>: cada prospect recebe comunicações adaptadas ao seu cargo, setor, desafios e momento da jornada de compra, sem que um vendedor precise gastar horas de pesquisa para cada contato. Equipes que adotam essa abordagem consistentemente reduzem ciclos de venda, aumentam taxas de resposta e liberam tempo dos vendedores para conversas de alto valor.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como a IA Impacta Cada Etapa do Processo Comercial</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Prospecção inteligente:</strong> IA combina dados de empresas, sinais de intenção e fit de mercado para priorizar automaticamente os prospects com maior probabilidade de conversão.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Outreach personalizado:</strong> Sequências de e-mail com personalização por IA aumentam taxas de resposta em 2x a 5x comparado a templates genéricos enviados em massa.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Coaching baseado em dados:</strong> Análise de chamadas com IA identifica os padrões de comunicação dos top performers e treina toda a equipe para replicar o que funciona.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Previsão de receita precisa:</strong> Modelos preditivos calculam a probabilidade real de fechamento de cada deal, permitindo planejamento de recursos muito mais confiável que estimativas subjetivas.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
