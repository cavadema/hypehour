import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>inteligência artificial aplicada ao design</strong> funciona a partir de modelos treinados em vastos repositórios de imagens, referências visuais e dados de estilo — o que permite ao sistema compreender relações entre conceitos visuais, paletas, composições e intenções estéticas. Ao receber uma instrução textual, a IA traduz essa descrição em elementos visuais coerentes, respeitando hierarquia, contraste e linguagem gráfica de maneira que seria impraticável reproduzir manualmente em escala.
                </p>
                <p className="mb-4">
                    O grande efeito dessa tecnologia no campo criativo é a <strong>separação entre execução técnica e pensamento estratégico</strong>: tarefas que antes consumiam horas de trabalho operacional — variações de peças, testes de conceito, adaptação de formatos — passam a ser geradas em minutos, liberando o designer para concentrar energia na direção de arte, na narrativa de marca e nas decisões que demandam julgamento humano.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Onde a IA está sendo aplicada no design gráfico</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Identidade visual e branding:</strong> Geração de conceitos e variações de elementos gráficos para explorar direções criativas antes de partir para a execução final.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Produção editorial e conteúdo digital:</strong> Adaptação automática de layouts para diferentes formatos e plataformas, mantendo consistência visual sem retrabalho manual.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Design de produto e UI:</strong> Criação de ilustrações, ícones e sistemas visuais com coerência de estilo, acelerando a entrega de assets para interfaces e aplicativos.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Embalagem e design têxtil:</strong> Geração de texturas, padrões repeat e elementos decorativos exclusivos que se tornam ativos diferenciados em projetos de produto e moda.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
