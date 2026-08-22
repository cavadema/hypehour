import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>geração de imagens com IA</strong> funciona por meio de modelos de difusão: redes neurais treinadas em bilhões de imagens que aprenderam a relação entre descrições em texto e elementos visuais. Na prática, você escreve o que quer ver — estilo, composição, iluminação, atmosfera — e o modelo sintetiza uma imagem pixel a pixel a partir desse contexto. É uma tecnologia que passou de experimento de laboratório a ferramenta de produção em menos de três anos.
                </p>
                <p className="mb-4">
                    Para profissionais criativos, isso representa uma mudança de paradigma: a habilidade central deixou de ser "saber executar tecnicamente" e passou a ser <strong>saber descrever com precisão</strong>. Quem domina a escrita de prompts — especificando estilo artístico, referências visuais, paleta, ponto de vista e nível de detalhe — consegue resultados que antes exigiriam horas de trabalho manual ou orçamento de banco de imagens premium.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Onde a geração de imagens com IA está sendo usada</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Marketing e publicidade:</strong> criação de visuais para anúncios, posts em redes sociais e materiais de campanha sem depender de sessão fotográfica ou banco de imagens — com total controle sobre estilo e identidade visual.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>E-commerce e produto:</strong> geração de fotos de produto em diferentes cenários, fundos e contextos a partir de uma única imagem original, reduzindo custo de produção fotográfica significativamente.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Concept art e entretenimento:</strong> criação rápida de referências visuais para personagens, cenários e universos ficcionais em games, filmes e quadrinhos — acelerando a fase de ideação antes da execução final.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Design editorial e conteúdo:</strong> ilustrações para artigos, thumbnails de vídeos, capas de podcasts e materiais didáticos criados sob demanda, sem necessidade de ilustrador para cada peça.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
