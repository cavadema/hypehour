import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    As <strong>ferramentas de IA para transcrição de áudio</strong> revolucionaram a conversão de voz em texto para brasileiros. Com o <strong>Whisper da OpenAI (open source e gratuito), TurboScribe, Speechma e Descript</strong>, qualquer arquivo de áudio ou vídeo — seja um podcast, reunião, entrevista, aula ou áudio do WhatsApp — pode ser transcrito em português com alta precisão em minutos, não horas. O que antes exigia transcrição manual demorada é agora automatizado pela IA.
                </p>
                <p className="mb-4">
                    Para jornalistas, podcasters, criadores de conteúdo, pesquisadores e profissionais que gravam reuniões, a <strong>transcrição automática com IA</strong> é um multiplicador de produtividade imediato. Além da transcrição pura, as melhores ferramentas oferecem identificação de falantes, geração de legendas para vídeo, resumo do conteúdo e exportação em múltiplos formatos — transformando áudio bruto em conteúdo estruturado e utilizável em minutos.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Casos de Uso de Transcrição de Áudio com IA no Brasil</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Podcasts e vídeos:</strong> Transcreva episódios inteiros para criar artigos de blog, newsletters, posts em redes sociais e material de SEO — reutilizando o mesmo conteúdo em múltiplos formatos sem trabalho adicional de criação.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Reuniões e entrevistas:</strong> Transcreva calls do Zoom, Google Meet e Teams automaticamente para criar atas, extrair citações e documentar decisões sem depender de notas manuais durante a conversa.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Legendas para vídeo:</strong> Gere arquivos SRT e VTT automaticamente para YouTube, Instagram e plataformas de streaming — melhorando acessibilidade e alcance do seu conteúdo em vídeo.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Pesquisa qualitativa:</strong> Pesquisadores e jornalistas transcrevem entrevistas em minutos, permitindo análise e codificação muito mais rápida do conteúdo coletado em campo.</span></li>
                </ul>
                <p>Explore as ferramentas de transcrição de áudio com IA listadas abaixo e escolha a que melhor atende ao seu volume, idioma e requisitos de privacidade.</p>
            </details>
        </div>
    );
}
