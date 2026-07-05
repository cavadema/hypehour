import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    As <strong>ferramentas de IA para análise de dados</strong> transformaram a forma como empresas extraem valor de suas informações. Com <strong>processamento de linguagem natural e machine learning</strong>, é possível fazer perguntas em português sobre suas planilhas e bancos de dados e receber respostas instantâneas com gráficos, tendências e previsões — sem precisar dominar SQL ou Python.
                </p>
                <p className="mb-4">
                    Essas soluções atendem desde analistas de dados que precisam acelerar seu trabalho até gestores de negócio que querem tomar decisões baseadas em dados sem depender de equipes técnicas. Se você trabalha com vendas, marketing, finanças, logística ou qualquer área que gere dados, a <strong>análise de dados com IA</strong> pode ser o maior diferencial competitivo da sua empresa em 2026.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Por que usar IA para Analisar seus Dados</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise conversacional:</strong> Pergunte "qual produto mais vendeu em março?" e receba a resposta em segundos, com gráfico incluído.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Detecção automática de padrões:</strong> A IA identifica correlações e anomalias que levariam dias para um analista humano encontrar manualmente.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Previsões e projeções:</strong> Modelos preditivos estimam vendas, churn de clientes e demanda futura com base no histórico da sua empresa.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Limpeza e preparação automática:</strong> A IA identifica e corrige inconsistências nos dados, economizando horas de trabalho manual de ETL.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo e descubra qual se adapta melhor ao seu volume de dados, stack tecnológico e nível de expertise da sua equipe.</p>
            </details>
        </div>
    );
}
