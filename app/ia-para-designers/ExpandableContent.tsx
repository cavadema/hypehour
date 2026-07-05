import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>IA para designers gráficos</strong> não veio para substituir o criativo — veio para amplificar seu poder de produção. Com <strong>Adobe Firefly, Midjourney, Recraft e Canva Magic Studio</strong>, designers brasileiros conseguem gerar dezenas de conceitos visuais em horas, automatizar tarefas técnicas repetitivas e focar no que realmente agrega valor: a estratégia criativa, a relação com o cliente e a direção de arte que diferencia uma marca.
                </p>
                <p className="mb-4">
                    O <strong>designer que domina IA como ferramenta</strong> em 2026 entrega mais em menos tempo, cobra melhor pelo trabalho estratégico e compite em igualdade com studios grandes mesmo trabalhando de forma independente. A curva de aprendizado das ferramentas principais é curta — em dias você já incorpora IA no seu fluxo de trabalho e sente o impacto na produtividade.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como Designers Usam IA no Dia a Dia</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Ideação acelerada:</strong> Em vez de horas de pesquisa de referências, gere 30 variações de conceito visual em minutos para apresentar ao cliente e validar a direção criativa antes de executar.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Produção de assets em escala:</strong> Crie variações de banners, posts e peças para múltiplos formatos e plataformas automaticamente, mantendo consistência de marca sem trabalho manual repetitivo.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Retoque e edição avançada:</strong> Adobe Firefly e Photoshop AI realizam inpainting, remoção de objetos, expansão de imagens e substituição de fundos com qualidade profissional em segundos.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Geração de texturas e padrões:</strong> Crie texturas únicas, padrões repeat e elementos gráficos exclusivos com IA que se tornam ativos diferenciados para projetos de branding e embalagem.</span></li>
                </ul>
                <p>Descubra as melhores ferramentas de IA para designers listadas abaixo e encontre as que melhor complementam seu processo criativo e stack de trabalho.</p>
            </details>
        </div>
    );
}
