import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>inteligência artificial no desenvolvimento de jogos</strong> atua em duas frentes distintas: no pipeline de produção, acelerando a criação de assets, código e conteúdo narrativo; e dentro do jogo em si, gerando comportamentos dinâmicos em personagens, ambientes procedurais e experiências adaptativas ao estilo do jogador. Modelos generativos treinados em grandes volumes de imagens, código e texto tornam possível produzir em horas o que antes exigia semanas de trabalho especializado por equipes inteiras.
                </p>
                <p className="mb-4">
                    O impacto mais profundo está na <strong>democratização da produção</strong>: a barreira entre ter uma ideia de jogo e conseguir executá-la caiu drasticamente. Criadores com domínio de design de mecânicas e narrativa, mas sem equipe de arte ou engenharia completa, conseguem hoje levar projetos ao mercado com qualidade visual e técnica antes exclusiva de estúdios com orçamentos significativos.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Onde a IA está sendo aplicada no desenvolvimento de jogos</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Arte e assets visuais:</strong> Geração de concept art, sprites, texturas e ambientes 3D com consistência de estilo — reduzindo drasticamente o tempo de produção visual em projetos indie.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Programação assistida:</strong> Implementação de mecânicas, sistemas de física e lógica de jogo com suporte de IA — especialmente valioso para desenvolvedores solo que precisam cobrir múltiplas disciplinas.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Narrativa e NPCs dinâmicos:</strong> Diálogos gerados contextualmente, lore de mundo, textos de missão e personagens que respondem de forma não roteirizada às ações do jogador.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>QA e testes automatizados:</strong> Agentes de IA que jogam autonomamente em busca de bugs, exploits e problemas de balanceamento, ampliando a cobertura de testes sem ampliar equipe.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
