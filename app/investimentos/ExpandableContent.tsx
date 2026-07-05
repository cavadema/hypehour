import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>IA para investimentos</strong> está democratizando o acesso a análises financeiras sofisticadas que antes eram exclusivas de grandes fundos e bancos de investimento. Com <strong>robo-advisors, análise de sentimento de mercado e ferramentas de análise fundamentalista com IA</strong>, investidores brasileiros individuais podem tomar decisões mais embasadas, automatizar o rebalanceamento de carteira e identificar oportunidades com muito mais eficiência do que dependendo apenas de análise manual ou intuição.
                </p>
                <p className="mb-4">
                    No contexto do mercado financeiro brasileiro, a <strong>inteligência artificial em investimentos</strong> é usada para análise de ativos da B3, acompanhamento de FIIs, monitoramento de macroeconomia e avaliação de risco de portfólio. Ferramentas de educação financeira com IA também ajudam investidores iniciantes a entender produtos complexos como derivativos, ETFs e fundos multimercado — importante lembrar que IA é suporte à decisão, não conselho financeiro regulado.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como a IA Está Transformando a Tomada de Decisão em Investimentos</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise fundamentalista acelerada:</strong> IA processa balanços, DRE e fluxo de caixa de dezenas de empresas simultaneamente, calculando múltiplos e comparando com pares do setor em minutos.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Gestão de risco inteligente:</strong> Modelos preditivos calculam Value at Risk, correlação entre ativos e impacto de cenários macroeconômicos na carteira — antecipando vulnerabilidades antes que se materializem.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Monitoramento de notícias e sentimento:</strong> IA rastreia e analisa automaticamente notícias, atas de reunião e relatórios de analistas para avaliar o sentimento do mercado sobre ativos específicos.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Rebalanceamento automático:</strong> Robo-advisors monitoram o portfólio e executam rebalanceamentos automaticamente quando os pesos dos ativos desviam da alocação alvo definida pelo investidor.</span></li>
                </ul>
                <p>Explore as ferramentas de IA para investimentos listadas abaixo — do educacional ao profissional — e entenda como a inteligência artificial pode aprimorar sua estratégia de investimentos.</p>
            </details>
        </div>
    );
}
