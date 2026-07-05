import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    As <strong>ferramentas de IA para criar vídeos</strong> estão redefinindo a produção audiovisual. Com modelos como <strong>Sora, Kling AI e HeyGen</strong>, qualquer pessoa pode transformar um roteiro de texto em vídeo profissional — sem câmera, iluminação, edição manual ou aparecendo na tela. A barreira de entrada para criação de conteúdo em vídeo caiu dramaticamente, abrindo oportunidades imensas para criadores, empresas e educadores brasileiros.
                </p>
                <p className="mb-4">
                    Para profissionais de marketing e criadores de conteúdo no Brasil, a <strong>criação de vídeos com IA</strong> significa escalar produção sem escalar custos: um canal de YouTube faceless, vídeos de produto para e-commerce, treinamentos corporativos com avatares e Reels automatizados — tudo possível com uma fração do custo de produção tradicional. O diferencial competitivo está em dominar essas ferramentas antes da concorrência.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Tipos de Vídeos que Você Pode Criar com IA Hoje</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Vídeos faceless para YouTube:</strong> Roteiro com ChatGPT, narração com ElevenLabs, imagens em movimento com Kling AI e edição com CapCut — canal completo sem aparecer na câmera.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Avatares apresentadores:</strong> HeyGen e Synthesia criam apresentadores digitais realistas que leem qualquer roteiro em português com sincronização labial perfeita.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Clipes curtos para Reels e TikTok:</strong> OpusClip recorta automaticamente os melhores momentos de vídeos longos e adiciona legendas animadas — otimizado para formato vertical.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Vídeos de produto para e-commerce:</strong> Ferramentas de IA geram vídeos demonstrativos de produtos a partir de fotos estáticas, animando os produtos para catálogos e anúncios.</span></li>
                </ul>
                <p>Explore as ferramentas de IA para criar vídeos listadas abaixo e descubra como começar a produzir conteúdo audiovisual profissional com muito menos esforço e custo.</p>
            </details>
        </div>
    );
}
