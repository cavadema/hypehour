import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>IA aplicada à arquitetura</strong> atua em dois eixos principais: geração visual e otimização paramétrica. Na geração visual, modelos de difusão treinados em vastos acervos de projetos e referências arquitetônicas conseguem transformar descrições textuais ou esboços em imagens fotorrealistas de fachadas, ambientes e volumetrias — comprimindo em minutos um processo que antes exigia horas de modelagem e renderização manual. Na otimização paramétrica, algoritmos avaliam simultaneamente milhares de variações de planta com base em critérios de eficiência de circulação, insolação, ventilação e programa de necessidades.
                </p>
                <p className="mb-4">
                    O impacto mais significativo está na <strong>fase de conceituação</strong>, historicamente a mais sujeita a revisões custosas: com IA, é possível explorar dezenas de partidos arquitetônicos antes de qualquer comprometimento com detalhamento técnico. Escritórios que incorporam essa capacidade ao processo conseguem apresentar mais alternativas aos clientes, reduzir ciclos de revisão e tomar decisões de design embasadas em dados de desempenho energético e custo desde as fases iniciais do projeto.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como a IA está sendo usada no processo arquitetônico</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Conceituação acelerada:</strong> Em vez de horas de croquis manuais, o arquiteto descreve o conceito em texto e a IA gera dezenas de referências visuais em minutos — ampliando o repertório de alternativas antes de definir o partido.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Renders a partir de geometria existente:</strong> Tecnologias de controle de imagem convertem plantas e volumetrias em renders fotorrealistas preservando a geometria do projeto, eliminando horas de configuração em software de renderização.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Otimização generativa de plantas:</strong> Algoritmos de design generativo avaliam automaticamente configurações de planta com base em eficiência de circulação, iluminação natural e relação com o programa de necessidades definido.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise de sustentabilidade integrada ao BIM:</strong> IA simula desempenho energético, insolação e ventilação em tempo real durante o projeto, permitindo decisões de design sustentável desde o partido inicial.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
