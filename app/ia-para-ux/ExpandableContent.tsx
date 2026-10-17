import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>IA para UX</strong> encurtou o caminho entre uma ideia e uma interface testável. Ferramentas como <strong>UX Pilot, Banani, Uizard e Visily</strong> geram telas, wireframes e fluxos a partir de um texto, de uma screenshot ou de um esboço, e permitem editar o resultado depois, sem partir de uma tela em branco.
                </p>
                <p className="mb-4">
                    O ganho aparece principalmente nas primeiras etapas do projeto: explorar direções, montar protótipos para validar com usuários e levar o resultado para o <strong>Figma</strong> ou para o código. Ferramentas como <strong>Relume</strong> e <strong>Locofy</strong> cobrem as pontas do processo, do site de marketing ao front-end. As decisões de pesquisa, estratégia e experiência continuam sendo de quem projeta.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Onde a IA ajuda no processo de UX</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Wireframes e primeiras telas:</strong> UX Pilot, Banani e Visily geram telas e wireframes a partir de uma descrição, para explorar alternativas em minutos.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>De screenshot ou esboço para tela editável:</strong> Uizard (Screenshot Scanner e Wireframe Scanner) e Banani transformam imagens e esboços em interfaces que podem ser ajustadas.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Do design ao código:</strong> Locofy converte designs em código de front-end, e UX Pilot e Banani oferecem exportação de código ou HTML e CSS.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Sites de marketing:</strong> Relume gera sitemap, wireframes e site a partir de um briefing, com exportação para Figma, Webflow ou React.</span></li>
                </ul>
                <p>Compare as ferramentas de IA para UX listadas abaixo e escolha a que melhor se encaixa no seu fluxo de trabalho.</p>
            </details>
        </div>
    );
}
