import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    Os <strong>geradores de voz com IA</strong> são sistemas de síntese de fala treinados em grandes volumes de gravações humanas para aprender os padrões de entonação, ritmo, dicção e emoção que tornam uma voz natural. Ao contrário do Text-to-Speech tradicional, que concatena fonemas de forma mecânica, os modelos modernos geram áudio como uma sequência contínua — capturando pausas, ênfases e variações de tom que antes eram exclusividade de locutores profissionais. O resultado é uma qualidade que a maioria dos ouvintes não consegue distinguir de uma gravação humana real.
                </p>
                <p className="mb-4">
                    Essa tecnologia também viabilizou a <strong>clonagem de voz</strong>: a partir de uma amostra de áudio de alguns minutos, modelos conseguem replicar as características vocais únicas de uma pessoa — timbre, ritmo, sotaque — para gerar novas falas com aquele perfil. Isso mudou fundamentalmente a equação de custo da produção de conteúdo em áudio, tornando viável criar audiobooks completos, cursos narrados, URAs dinâmicas e assistentes de voz personalizados a uma fração do custo de locução profissional.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Onde a síntese de voz com IA está sendo aplicada</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>E-learning e cursos online:</strong> Narração profissional para videoaulas, exercícios de listening e materiais didáticos a uma fração do custo de locução humana — permitindo escalar produção de conteúdo sem estúdio.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Vídeos faceless para YouTube e redes sociais:</strong> Criadores narram vídeos em nichos de alto volume — notícias, finanças, tecnologia — sem aparecer na câmera, com voz sintética que mantém a identidade do canal.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Atendimento e URA dinâmica:</strong> Empresas substituem locuções estáticas de URA por vozes de IA que podem ser atualizadas instantaneamente, sem necessidade de nova gravação ou edição de áudio.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Acessibilidade e inclusão:</strong> Transformar textos em áudio de qualidade para pessoas com dislexia ou deficiência visual democratiza o acesso a conteúdo escrito em qualquer dispositivo e idioma.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
