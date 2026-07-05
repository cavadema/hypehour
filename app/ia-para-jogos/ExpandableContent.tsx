import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>IA para desenvolvimento de jogos</strong> está democratizando uma indústria que historicamente exigia grandes equipes e orçamentos milionários. Com ferramentas como <strong>Leonardo AI para assets, Meshy para modelos 3D, Convai para NPCs inteligentes e GitHub Copilot para código de jogo</strong>, um desenvolvedor solo ou pequeno estúdio indie brasileiro pode produzir jogos com qualidade visual e profundidade de gameplay antes restritos a grandes publishers.
                </p>
                <p className="mb-4">
                    Além do desenvolvimento, a <strong>IA está transformando a experiência dentro dos jogos</strong>: NPCs que respondem em linguagem natural, mundos gerados proceduralmente que nunca se repetem, dificuldade que se adapta ao estilo de cada jogador e trilhas sonoras que evoluem conforme a ação na tela. Para game developers brasileiros, entender e dominar essas ferramentas é cada vez mais essencial para competir no mercado global.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Onde a IA está Gerando mais Impacto no Game Dev</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Arte e assets:</strong> Geração de concept art, sprites, texturas e ambientes com consistência de estilo — reduzindo em horas o trabalho de art direção e produção visual.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Codificação assistida:</strong> Cursor e GitHub Copilot aceleram a implementação de mecânicas, sistemas de física e lógica de jogo — especialmente para desenvolvedores que trabalham sozinhos.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Narrativa e diálogos:</strong> LLMs geram diálogos de NPC contextualmente relevantes, lore de mundo, textos de missão e ramificações narrativas em escala muito maior do que roteiristas humanos conseguem produzir.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Playtesting automatizado:</strong> Agentes de IA jogam o jogo autonomamente em busca de bugs, exploits e problemas de balanceamento — complementando o QA humano com cobertura muito maior.</span></li>
                </ul>
                <p>Explore as ferramentas de IA para desenvolvimento de jogos listadas abaixo e descubra como incorporar IA no seu pipeline de produção de games.</p>
            </details>
        </div>
    );
}
