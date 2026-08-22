import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>inteligência artificial em investimentos</strong> processa em segundos o volume de dados que analistas humanos levariam semanas para examinar: balanços patrimoniais, demonstrações de resultado, variáveis macroeconômicas, fluxo de notícias e sinais de sentimento de mercado. Modelos de machine learning encontram correlações e padrões nesses dados que escapam da análise manual — identificando oportunidades e riscos antes que se tornem evidentes ao mercado geral.
                </p>
                <p className="mb-4">
                    Para o investidor individual, a mudança mais relevante é o <strong>acesso democratizado à análise sofisticada</strong>: ferramentas que antes eram exclusivas de grandes fundos e bancos de investimento — análise quantitativa, backtesting de estratégias, monitoramento de sentimento e rebalanceamento automático — passaram a estar acessíveis a qualquer pessoa. É fundamental, porém, compreender que IA é um instrumento de apoio à decisão, não um oráculo: mercados são sistemas complexos influenciados por fatores imprevisíveis, e nenhum modelo substitui a compreensão do investidor sobre seu próprio perfil de risco e objetivos financeiros.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como a IA Está Transformando a Tomada de Decisão em Investimentos</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise fundamentalista acelerada:</strong> IA processa balanços, DRE e fluxo de caixa de dezenas de empresas simultaneamente, calculando múltiplos e comparando com pares do setor em minutos.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Gestão de risco inteligente:</strong> Modelos preditivos calculam Value at Risk, correlação entre ativos e impacto de cenários macroeconômicos na carteira — antecipando vulnerabilidades antes que se materializem.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Monitoramento de notícias e sentimento:</strong> IA rastreia e analisa automaticamente notícias, atas de reunião e relatórios de analistas para avaliar o sentimento do mercado sobre ativos específicos.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Rebalanceamento automático:</strong> Robo-advisors monitoram o portfólio e executam rebalanceamentos automaticamente quando os pesos dos ativos desviam da alocação alvo definida pelo investidor.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
