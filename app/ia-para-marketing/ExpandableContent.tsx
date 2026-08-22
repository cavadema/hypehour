import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>inteligência artificial aplicada ao marketing</strong> opera sobre dois pilares complementares: modelos generativos que produzem texto, imagem e vídeo a partir de instruções, e modelos preditivos que analisam comportamento de audiências para otimizar segmentação, timing e criativos em tempo real. Juntos, esses sistemas permitem que campanhas se adaptem continuamente com base em dados de performance — algo que antes exigia analistas e ciclos de revisão manual a cada semana.
                </p>
                <p className="mb-4">
                    A mudança estrutural que a IA trouxe para o marketing está na <strong>personalização em escala</strong>: e-mails, anúncios e conteúdos que se adaptam ao comportamento e perfil de cada pessoa deixaram de ser exclusividade de grandes empresas com orçamentos robustos. Hoje, times pequenos conseguem entregar experiências altamente segmentadas porque a IA executa a variação e o teste de forma automática — enquanto os profissionais se concentram na estratégia e na leitura criativa dos resultados.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Onde a IA está transformando o marketing digital</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Produção de conteúdo em escala:</strong> Criação de posts, artigos, roteiros e peças para múltiplos canais com consistência de voz de marca — reduzindo tempo de produção sem perder qualidade.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Gestão e otimização de mídia paga:</strong> Ajuste automático de lances, orçamentos e criativos com base em sinais de performance em tempo real, maximizando retorno sem intervenção manual constante.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>SEO e conteúdo orgânico:</strong> Identificação de oportunidades de palavras-chave, otimização semântica de conteúdo e análise de concorrentes de forma contínua e sistemática.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise e inteligência de dados:</strong> Consolidação de métricas de múltiplas plataformas, identificação de padrões de conversão e geração de relatórios executivos de forma automatizada.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
