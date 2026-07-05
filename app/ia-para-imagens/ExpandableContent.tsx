import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>geração de imagens com IA</strong> democratizou a criação visual de forma sem precedentes. Com ferramentas como <strong>Midjourney, DALL-E 3, Stable Diffusion e Adobe Firefly</strong>, qualquer pessoa pode criar imagens de qualidade profissional a partir de uma descrição em texto — sem precisar de habilidades técnicas de design, câmera fotográfica ou banco de imagens pago. O resultado é uma explosão de criatividade visual acessível a todos.
                </p>
                <p className="mb-4">
                    Para designers, profissionais de marketing e criadores de conteúdo brasileiros, a <strong>IA para geração de imagens</strong> significa acelerar produção visual, reduzir custos com banco de imagens e criar conteúdo verdadeiramente único e personalizado para cada campanha. O domínio da arte de escrever bons prompts — a chamada "engenharia de prompt" — é a habilidade mais valorizada nesse novo cenário criativo.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como Escolher a Ferramenta de Imagem com IA Certa</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Para arte e criatividade:</strong> Midjourney tem a melhor estética artística e é o preferido por artistas digitais, concept artists e criadores de NFTs pelo impacto visual único das imagens.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Para uso comercial seguro:</strong> Adobe Firefly garante que todas as imagens foram geradas com dataset licenciado, eliminando risco jurídico para uso em campanhas publicitárias e materiais corporativos.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Para controle total:</strong> Stable Diffusion open source permite rodar localmente, treinar modelos personalizados e integrar em fluxos de produção automatizados sem limitações de API.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Para imagens com texto:</strong> Ideogram é a melhor opção quando você precisa de imagens que incluam palavras ou números legíveis — um ponto fraco histórico dos geradores de IA que o Ideogram resolveu.</span></li>
                </ul>
                <p>Explore os geradores de imagem com IA listados abaixo e descubra qual ferramenta melhor atende ao seu estilo, caso de uso e orçamento.</p>
            </details>
        </div>
    );
}
