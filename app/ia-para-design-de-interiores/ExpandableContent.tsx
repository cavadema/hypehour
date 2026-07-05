import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>IA para design de interiores</strong> colocou o poder da visualização profissional nas mãos de qualquer pessoa. Com ferramentas como <strong>Collov AI, RoomGPT e Interior AI</strong>, você fotografa um cômodo da sua casa e em segundos vê como ele ficaria reformado em estilo escandinavo, industrial, minimalista ou contemporâneo — sem gastar um centavo em decoração ou contratar um profissional para as primeiras ideias.
                </p>
                <p className="mb-4">
                    Para o mercado imobiliário e de reforma brasileiro, o <strong>design de interiores com IA</strong> está transformando a forma como imóveis são apresentados e vendidos. Imobiliárias mostram o potencial de apartamentos vazios com dezenas de opções de decoração personalizadas para o perfil do comprador. Decoradores usam IA para acelerar a fase de apresentação e aprovar conceitos com clientes muito mais rapidamente.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">O que Você Pode Fazer com IA no Design de Interiores</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Visualização instantânea:</strong> Veja seu ambiente transformado em múltiplos estilos decorativos em segundos — escandinavo, industrial, boho, clássico — sem mock-ups físicos ou renders manuais.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Experimentação de cores:</strong> Teste diferentes paletas de tintas, revestimentos e materiais virtualmente antes de qualquer compra — evitando o arrependimento com escolhas de cores.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Layout de mobiliário:</strong> IA sugere disposições de móveis que otimizam fluxo de circulação, luz natural e aproveitamento de espaço em cômodos de qualquer tamanho.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Apresentação para clientes:</strong> Decoradores profissionais geram dezenas de variações de conceito em uma sessão para apresentar ao cliente, reduzindo ciclos de revisão e acelerando aprovações.</span></li>
                </ul>
                <p>Explore as ferramentas de IA para design de interiores listadas abaixo e comece a visualizar as possibilidades do seu espaço hoje mesmo.</p>
            </details>
        </div>
    );
}
