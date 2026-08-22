import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>geração de vídeo com IA</strong> funciona a partir de modelos treinados em vastas coleções de material audiovisual que aprenderam a relação entre descrição textual e sequência visual. Ao receber um prompt, o modelo sintetiza quadro a quadro levando em conta movimento de câmera, física dos objetos, iluminação, continuidade temporal e coerência de estilo — produzindo clipes que antes exigiam equipe de produção, equipamento especializado e horas de edição. A barreira de entrada para criação audiovisual profissional caiu de forma radical.
                </p>
                <p className="mb-4">
                    Além da geração pura de vídeo a partir de texto, a IA também está redefinindo as etapas de <strong>pós-produção e adaptação de conteúdo</strong>: avatares digitais realistas que apresentam roteiros em qualquer idioma, ferramentas que recortam automaticamente os momentos mais engajantes de vídeos longos para formatos curtos, e sistemas que adicionam legendas, narração e trilha sonora de forma automática. O resultado é uma capacidade de produção em escala antes acessível apenas a grandes operações de mídia.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Tipos de vídeo que você pode criar com IA hoje</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Vídeos faceless para YouTube e redes sociais:</strong> Roteiro, narração sintetizada, imagens em movimento e edição final integrados num pipeline totalmente automatizado — canal completo sem aparecer na câmera.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Apresentadores digitais com sincronização labial:</strong> Avatares realistas que leem qualquer roteiro em português com entonação natural, viabilizando vídeos de treinamento, vendas e onboarding em escala.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Clipes curtos para Reels e TikTok:</strong> Sistemas de IA recortam automaticamente os melhores momentos de vídeos longos, adicionam legendas animadas e adaptam para o formato vertical — otimizados para engajamento.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Vídeos de produto para e-commerce:</strong> IA anima produtos a partir de fotos estáticas, gerando vídeos demonstrativos para catálogos e anúncios sem necessidade de filmagem ou equipe de produção.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
