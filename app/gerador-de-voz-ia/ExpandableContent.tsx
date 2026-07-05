import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    Os <strong>geradores de voz com IA</strong> revolucionaram a produção de conteúdo em áudio. Com ferramentas como <strong>ElevenLabs, Luvvoice e Speechify</strong>, qualquer pessoa pode transformar texto em narração profissional em segundos — sem estúdio, microfone ou locutor. A qualidade das vozes sintéticas atuais é tão boa que a maioria dos ouvintes não consegue distinguir de uma gravação humana real.
                </p>
                <p className="mb-4">
                    Para criadores de conteúdo, professores, empresas de e-learning e podcasters brasileiros, os <strong>geradores de voz em português</strong> abriram possibilidades antes economicamente inviáveis: audiobooks completos, cursos online com narração profissional, vídeos explicativos e até assistentes de voz personalizados para atendimento — tudo com a voz que você quiser, no volume que precisar.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Aplicações de Geração de Voz com IA no Mercado Brasileiro</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>E-learning e cursos online:</strong> Narração profissional para vídeoaulas, exercícios de listening e materiais didáticos a uma fração do custo de locução humana.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Vídeos para YouTube e Reels:</strong> Criadores usam TTS para narrar vídeos faceless (sem aparecer) em nicho de notícias, finanças, tecnologia e outros formatos de alto volume.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Atendimento e URA:</strong> Empresas substituem locuções estáticas de URA por vozes de IA que podem ser atualizadas instantaneamente sem nova gravação ou edição de áudio.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Acessibilidade:</strong> Transforma textos em áudio para pessoas com dislexia ou deficiência visual, democratizando o acesso a conteúdo escrito em qualquer dispositivo.</span></li>
                </ul>
                <p>Explore os geradores de voz com IA listados abaixo e encontre a ferramenta certa para dar voz ao seu conteúdo em português com qualidade profissional.</p>
            </details>
        </div>
    );
}
