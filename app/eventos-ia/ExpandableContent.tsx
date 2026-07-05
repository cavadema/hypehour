import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    Os <strong>eventos de inteligência artificial</strong> são pontos de encontro essenciais para pesquisadores, desenvolvedores, empreendedores e executivos que querem estar na fronteira do conhecimento em IA. De conferências acadêmicas como <strong>NeurIPS e ICML</strong> a hackathons práticos e meetups locais no Brasil, o calendário de eventos de IA nunca foi tão rico — e muito do conteúdo está disponível gratuitamente online.
                </p>
                <p className="mb-4">
                    Para profissionais brasileiros, participar de <strong>eventos de IA no Brasil e internacionais</strong> é uma das formas mais eficientes de acelerar o aprendizado, construir network qualificado e identificar oportunidades de negócio. Os grandes labs como OpenAI, Google DeepMind e Anthropic frequentemente anunciam suas pesquisas mais importantes nessas conferências, meses antes de chegarem ao mercado.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como Aproveitar ao Máximo Eventos de IA</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Prepare-se antes:</strong> Pesquise os palestrantes e temas com antecedência, liste as sessões prioritárias e prepare perguntas específicas para aproveitar ao máximo o tempo presencial.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Networking estratégico:</strong> Sessões de networking são tão valiosas quanto as palestras — venha com cartões de visita digitais, perfil LinkedIn atualizado e um pitch claro do que você faz e busca.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Hackathons e workshops:</strong> Prefira eventos com componentes práticos onde você sai com algo construído — projetos nascidos em hackathons de IA geram portfólio real e conexões duradouras.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Conteúdo online pós-evento:</strong> A maioria das conferências publica vídeos das palestras no YouTube — acompanhe os canais de NeurIPS, ICLR e Google DeepMind para acesso gratuito ao conteúdo de ponta.</span></li>
                </ul>
                <p>Confira abaixo os principais eventos, conferências e hackathons de IA listados na nossa curadoria — do nível iniciante ao pesquisador avançado.</p>
            </details>
        </div>
    );
}
