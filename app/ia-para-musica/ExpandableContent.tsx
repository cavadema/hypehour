import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>IA para música</strong> abriu uma nova fronteira criativa: qualquer pessoa pode agora criar trilhas sonoras profissionais, compor músicas originais em estilos variados e produzir faixas completas com vocais — sem saber ler partitura, tocar instrumento ou ter acesso a um estúdio. Com ferramentas como <strong>Suno AI, Udio e Soundraw</strong>, uma descrição em texto se transforma em uma composição completa com letra, vocal, arranjo e mixagem em segundos.
                </p>
                <p className="mb-4">
                    Para o mercado brasileiro, o impacto da <strong>IA na criação musical</strong> é especialmente relevante: criadores de conteúdo no YouTube e TikTok usam IA para gerar trilhas sem risco de copyright, artistas independentes produzem demos e jingles sem estúdio, e profissionais de vídeo e podcasting encontram nas ferramentas de IA uma fonte inesgotável de música personalizada para cada projeto.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como Músicos e Criadores Usam IA na Produção Musical</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Geração de músicas completas:</strong> Do prompt à faixa finalizada com letra, vocal e produção — ideal para trilhas de vídeo, jogos, podcasts e experimentação criativa rápida.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Separação de stems:</strong> Ferramentas como Lalal.ai e Moises isolam vocais e instrumentos de qualquer música, permitindo remixes, karaokês e análises de arranjo profissionais.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Masterização automática:</strong> LANDR e eMastered entregam masterização profissional em minutos — acessível para artistas independentes que não têm orçamento para engenheiro de masterização.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Composição assistida:</strong> Para músicos, a IA sugere progressões de acordes, melodias de contra-canto e variações de arranjo — funcionando como um colaborador criativo disponível 24 horas.</span></li>
                </ul>
                <p>Explore as ferramentas de IA para música listadas abaixo e descubra como integrar inteligência artificial na sua criação, produção ou consumo musical.</p>
            </details>
        </div>
    );
}
