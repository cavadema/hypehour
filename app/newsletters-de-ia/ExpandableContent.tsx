import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    Com a velocidade das inovações em IA, manter-se atualizado sem ser consumido pela enxurrada de informações é um desafio real. As <strong>newsletters de IA</strong> resolvem esse problema com curadoria de qualidade: publicações como <strong>TLDR AI, The Batch de Andrew Ng e The Rundown AI</strong> filtram os desenvolvimentos mais importantes e os entregam de forma digerível na sua caixa de entrada — sem precisar monitorar dezenas de fontes manualmente.
                </p>
                <p className="mb-4">
                    Para o público brasileiro, a <strong>curadoria de IA em português</strong> ainda é escassa comparada ao ecossistema anglófono. O Hypehour foi criado exatamente para preencher essa lacuna — trazendo as ferramentas, tendências e aplicações de IA mais relevantes com contexto para o mercado e profissionais brasileiros. Assinar newsletters de qualidade é um dos investimentos de tempo com maior retorno para quem quer se manter competitivo na era da IA.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como Montar sua Stack de Newsletters de IA</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Cobertura diária rápida:</strong> TLDR AI em inglês ou o Hypehour em português para um resumo de 5 minutos com os principais acontecimentos do mundo de IA — ideal para começar o dia informado.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise técnica semanal:</strong> The Batch de Andrew Ng para perspectiva de um dos maiores especialistas em IA — equilibrando avanços técnicos, impactos práticos e visão de longo prazo.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Estratégia de negócios:</strong> Stratechery ou Every para entender como IA está transformando modelos de negócio, setores específicos e criando oportunidades para empreendedores e executivos.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Novas ferramentas:</strong> There's An AI For That e The Rundown AI para descobrir as ferramentas mais novas e avaliações práticas antes de escolher o que testar.</span></li>
                </ul>
                <p>Explore as newsletters de IA listadas abaixo e monte sua curadoria personalizada para se manter atualizado sem sobrecarga de informação.</p>
            </details>
        </div>
    );
}
