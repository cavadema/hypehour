import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    As <strong>ferramentas de IA para criação de conteúdo</strong> transformaram radicalmente a produção textual para criadores, agências e times de marketing no Brasil. Com plataformas como <strong>Jasper, Copy.ai, Writesonic e Claude</strong>, é possível gerar artigos de blog, posts para redes sociais, roteiros de vídeo, e-mails de nutrição e copy de vendas em português de alta qualidade — acelerando a produção sem sacrificar autenticidade ou voz de marca.
                </p>
                <p className="mb-4">
                    Além da geração de texto, o ecossistema de <strong>IA para conteúdo</strong> abrange ferramentas especializadas em SEO como Surfer SEO e Clearscope, edição e reescrita com Hemingway e QuillBot, criação de thumbnails e visuais com Canva AI e Leonardo AI, e planejamento editorial com Notion AI — permitindo que um único criador produza o volume de conteúdo que antes demandaria toda uma equipe.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como IA Acelera Cada Etapa da Produção de Conteúdo</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Pesquisa e pauta:</strong> Ferramentas como Perplexity AI e ChatGPT identificam lacunas de conteúdo, sugerem ângulos editoriais e pesquisam dados atualizados — eliminando horas de pesquisa manual antes de escrever a primeira palavra.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Redação e SEO integrados:</strong> Surfer SEO e Jasper combinam geração de texto com análise de palavras-chave em tempo real, criando artigos otimizados para ranquear no Google desde o primeiro rascunho.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Repurposing automático:</strong> Transforme um artigo em thread do Twitter, post de LinkedIn, roteiro de Reels e newsletter com um clique — maximizando o ROI de cada peça de conteúdo produzida.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Revisão e tom de voz:</strong> Ferramentas de reescrita como QuillBot e o modo de edição do Claude ajustam tom, formalidade e estilo para manter consistência com a voz da marca em todos os canais.</span></li>
                </ul>
                <p>Explore as ferramentas de IA para criação de conteúdo listadas abaixo e encontre as que melhor se encaixam no seu fluxo de produção, volume de publicações e objetivos de crescimento de audiência.</p>
            </details>
        </div>
    );
}
