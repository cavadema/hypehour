import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>inteligência artificial para arquitetura</strong> está redefinindo cada etapa do processo projetual — da conceituação ao detalhamento técnico. Ferramentas como <strong>Midjourney, Stable Diffusion com ControlNet e Autodesk Forma</strong> permitem que arquitetos explorem dezenas de alternativas visuais em horas, gerem renders fotorrealistas sem renderização manual demorada e otimizem plantas com base em critérios de eficiência energética e custo.
                </p>
                <p className="mb-4">
                    Para escritórios de arquitetura brasileiros, a adoção de <strong>IA no processo de design</strong> está se tornando um diferencial competitivo significativo. Escritórios que dominam essas ferramentas ganham capacidade de apresentar mais alternativas para clientes, reduzir o tempo de desenvolvimento de proposta e aumentar a qualidade das apresentações — tudo isso sem aumentar proporcionalmente o custo operacional.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como a IA Transforma o Trabalho do Arquiteto</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Conceituação acelerada:</strong> Em vez de horas de croquis manuais, o arquiteto descreve o conceito em texto e a IA gera dezenas de referências visuais em minutos para exploração e discussão com o cliente.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Renders sem renderização:</strong> ControlNet converte plantas e volumetrias em renders fotorrealistas preservando a geometria do projeto, eliminando horas de configuração em V-Ray ou Lumion.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Otimização de plantas:</strong> Algoritmos de design generativo avaliam automaticamente milhares de configurações de planta com base em eficiência de circulação, iluminação e relação com o programa de necessidades.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise de sustentabilidade:</strong> IA integrada ao BIM simula desempenho energético, insolação e ventilação em tempo real durante o projeto, permitindo decisões de design sustentável desde o partido inicial.</span></li>
                </ul>
                <p>Explore as ferramentas de IA para arquitetura listadas abaixo e descubra como integrar inteligência artificial ao seu processo criativo e técnico.</p>
            </details>
        </div>
    );
}
