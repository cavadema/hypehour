import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>IA para design de interiores</strong> combina modelos de visão computacional com sistemas de geração de imagem para transformar fotos de ambientes reais em visualizações de como o mesmo espaço ficaria com diferentes estilos, mobiliário e acabamentos. O modelo analisa a estrutura do cômodo — geometria, fontes de luz, proporções — e regenera o ambiente preservando as dimensões originais enquanto aplica o estilo decorativo solicitado. O resultado é uma antecipação visual fiel que antes exigia dias de trabalho de um profissional com software especializado.
                </p>
                <p className="mb-4">
                    A mudança de paradigma que essa tecnologia provoca está no <strong>momento da decisão</strong>: escolhas de cores, estilos de mobiliário e combinações de materiais que historicamente eram feitas sob incerteza — ou com amostras físicas limitadas — podem agora ser visualizadas de forma realista antes de qualquer investimento. Isso reduz drasticamente o risco de arrependimento em reformas e acelera o processo de aprovação de conceito entre clientes e profissionais de design.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">O que você pode fazer com IA no design de interiores</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Visualização de estilos em segundos:</strong> Veja o mesmo ambiente transformado em múltiplos estilos decorativos — escandinavo, industrial, minimalista, clássico — sem mock-ups físicos ou renders manuais demorados.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Experimentação de cores e materiais:</strong> Teste diferentes paletas de tintas, revestimentos e texturas virtualmente antes de qualquer compra — eliminando o risco de escolhas de cores que não funcionam no ambiente real.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Sugestão de layout de mobiliário:</strong> Sistemas de IA propõem disposições de móveis que otimizam fluxo de circulação, aproveitamento de luz natural e uso do espaço disponível em cômodos de qualquer tamanho.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Apresentação de conceito para clientes:</strong> Profissionais de decoração geram dezenas de variações de conceito em uma sessão para apresentar ao cliente, reduzindo ciclos de revisão e acelerando aprovações.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
