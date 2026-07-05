import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    As <strong>APIs de modelos de IA</strong> são a infraestrutura que permite a desenvolvedores, startups e empresas construir produtos inteligentes sem treinar seus próprios modelos. Com uma chamada de API, você acessa o poder do <strong>GPT-4o, Claude 3.5 Sonnet ou Gemini 1.5 Pro</strong> diretamente no seu sistema, app ou automação — pagando apenas pelo que usar.
                </p>
                <p className="mb-4">
                    O mercado de <strong>APIs de LLMs</strong> cresceu exponencialmente e hoje oferece opções para todos os perfis: desde desenvolvedores indie buscando o melhor custo-benefício até empresas enterprise que precisam de SLA garantido, conformidade com LGPD e contratos dedicados. Comparar preços, limites de contexto e capacidades multimodais é essencial antes de comprometer sua stack com um único provedor.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como Escolher a API de IA Ideal para seu Projeto</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Custo por token:</strong> Compare o preço de input e output de cada modelo — diferenças de 10x entre provedores são comuns e impactam muito o custo em produção.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Janela de contexto:</strong> Para processar documentos longos, contratos ou bases de conhecimento, priorize APIs com contexto de 128k tokens ou mais.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Latência e velocidade:</strong> Groq e Together AI oferecem inferência ultra-rápida com modelos open source, ideal para chatbots em tempo real.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Multimodalidade:</strong> Se precisar processar imagens, áudio ou vídeo além de texto, verifique quais modelos suportam inputs multimodais nativamente.</span></li>
                </ul>
                <p>Explore as APIs e plataformas listadas abaixo para encontrar a combinação certa de performance, custo e conformidade para o seu produto ou automação.</p>
            </details>
        </div>
    );
}
