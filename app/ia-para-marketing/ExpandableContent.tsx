import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>IA para marketing</strong> está redefinindo o que pequenas equipes conseguem executar. Com ferramentas como <strong>Jasper para copy, Canva Magic Studio para design, Surfer SEO para conteúdo orgânico e Meta Advantage+ para anúncios</strong>, profissionais de marketing brasileiros conseguem criar, testar e otimizar campanhas em uma velocidade e escala que antes exigiria uma agência completa. A IA não substitui a estratégia — ela executa com uma eficiência impossível para humanos.
                </p>
                <p className="mb-4">
                    O maior impacto da <strong>IA no marketing digital</strong> está na personalização em escala: e-mails com conteúdo adaptado ao comportamento de cada contato, anúncios que testam automaticamente dezenas de variações criativas e conteúdo de blog otimizado semanticamente para ranquear nos mecanismos de busca — tudo acontecendo simultaneamente, 24 horas por dia, sem intervenção manual constante.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Aplicações de IA que Transformam o Marketing de uma Empresa</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Produção de conteúdo acelerada:</strong> Crie posts para redes sociais, artigos de blog, roteiros de vídeo e newsletters em minutos — com a voz da sua marca e otimizados para SEO.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Otimização de anúncios em tempo real:</strong> IA ajusta automaticamente lances, orçamentos e criativos com base em performance — maximizando ROAS sem gerenciamento manual constante de campanha.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Segmentação avançada de audiência:</strong> Modelos preditivos identificam os perfis de cliente com maior probabilidade de converter, permitindo concentrar budget onde o retorno é maior.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise de performance automatizada:</strong> IA consolida dados de múltiplas plataformas, identifica as campanhas com melhor ROI e gera relatórios executivos semanais sem trabalho manual.</span></li>
                </ul>
                <p>Explore as ferramentas de IA para marketing listadas abaixo e descubra como automatizar e escalar sua estratégia de marketing digital com inteligência artificial.</p>
            </details>
        </div>
    );
}
