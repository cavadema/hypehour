import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>geração musical por inteligência artificial</strong> funciona a partir de modelos treinados em vastos acervos de composições — aprendendo padrões de harmonia, progressões melódicas, estruturas rítmicas e relações tímbricas entre instrumentos. Ao receber uma instrução em texto descrevendo estilo, humor ou referência sonora, o sistema sintetiza áudio original que respeita as convenções do gênero pedido, incluindo letra, arranjo e produção em uma única etapa.
                </p>
                <p className="mb-4">
                    O efeito mais relevante dessa tecnologia está na <strong>remoção da barreira técnica entre ter uma ideia musical e concretizá-la</strong>: dominar teoria musical, tocar instrumentos ou ter acesso a um estúdio deixou de ser pré-requisito para criar trilhas sonoras funcionais e composições originais. Para músicos experientes, a IA funciona como um colaborador que gera variações de arranjo e ideias de contra-melodia em segundos, acelerando o processo criativo sem substituí-lo.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Onde a IA está sendo usada na criação e produção musical</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Trilhas para vídeo e conteúdo digital:</strong> Geração de música original sob demanda para projetos audiovisuais sem risco de restrições de direitos autorais em plataformas de streaming.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Composição e arranjo assistidos:</strong> Sugestão de progressões harmônicas, variações de melodia e ideias de arranjo que músicos podem incorporar, adaptar e desenvolver no seu processo criativo.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Separação e edição de stems:</strong> Isolamento de vocais e instrumentos em gravações existentes para remixes, estudos de arranjo, karaokê e reaproveitamento de material sonoro.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Masterização e finalização:</strong> Processamento automático de mixagens com EQ, compressão e normalização para distribuição em plataformas de streaming, acessível sem engenheiro de masterização.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
