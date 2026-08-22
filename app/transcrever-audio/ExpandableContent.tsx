import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>transcrição automática de áudio com IA</strong> é baseada em modelos de reconhecimento automático de fala (ASR) treinados em centenas de milhares de horas de voz humana em dezenas de idiomas. Esses modelos aprenderam não apenas a converter sons em palavras, mas a lidar com sotaques regionais, pausas naturais, sobreposição de falas e vocabulário técnico específico de domínios como medicina, direito e negócios — alcançando taxas de precisão que antes só eram possíveis com transcrição humana especializada.
                </p>
                <p className="mb-4">
                    O impacto vai além da velocidade: a <strong>transcrição como ponto de partida para processamento de linguagem</strong> transforma áudio bruto em dado estruturado e analisável. Uma reunião transcrita pode ser resumida, ter ações extraídas automaticamente e ter decisões documentadas sem que ninguém precise fazer anotações durante a conversa. Um podcast transcrito vira artigo, newsletter e posts em múltiplos formatos. A voz humana — o meio de comunicação mais natural — passa a ser aproveitável em toda sua riqueza informacional.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Casos de Uso de Transcrição de Áudio com IA no Brasil</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Podcasts e vídeos:</strong> Transcreva episódios inteiros para criar artigos de blog, newsletters, posts em redes sociais e material de SEO — reutilizando o mesmo conteúdo em múltiplos formatos sem trabalho adicional de criação.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Reuniões e entrevistas:</strong> Transcreva calls do Zoom, Google Meet e Teams automaticamente para criar atas, extrair citações e documentar decisões sem depender de notas manuais durante a conversa.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Legendas para vídeo:</strong> Gere arquivos SRT e VTT automaticamente para YouTube, Instagram e plataformas de streaming — melhorando acessibilidade e alcance do seu conteúdo em vídeo.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Pesquisa qualitativa:</strong> Pesquisadores e jornalistas transcrevem entrevistas em minutos, permitindo análise e codificação muito mais rápida do conteúdo coletado em campo.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
