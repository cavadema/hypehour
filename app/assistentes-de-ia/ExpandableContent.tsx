import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    Os <strong>assistentes de IA</strong> como ChatGPT, Claude e Gemini mudaram permanentemente a forma como trabalhamos, estudamos e criamos. Em 2026, esses sistemas deixaram de ser curiosidades tecnológicas e se tornaram ferramentas centrais na rotina de profissionais brasileiros — do redator que usa IA para superar o bloqueio criativo ao executivo que resume relatórios de 50 páginas em segundos.
                </p>
                <p className="mb-4">
                    Escolher o <strong>assistente de IA certo para sua necessidade</strong> faz enorme diferença em produtividade. Cada modelo tem personalidade, pontos fortes e limitações distintas. O ChatGPT brilha em versatilidade e integrações; o Claude se destaca em análise e escrita cuidadosa; o Gemini domina quando você já vive no ecossistema Google. Conhecer as diferenças ajuda a extrair o máximo de cada um.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">O que Você Pode Fazer com Assistentes de IA Hoje</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Produção de conteúdo:</strong> Redija e-mails, posts, artigos, roteiros e apresentações em minutos — com o tom e formato exatos que você precisa.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise e síntese:</strong> Envie contratos, relatórios, artigos científicos ou transcrições de reuniões e receba resumos executivos com os pontos-chave destacados.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Programação e debugging:</strong> Gere código, explique erros, refatore funções e escreva testes automatizados em qualquer linguagem de programação.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Brainstorming estratégico:</strong> Use a IA como um parceiro de ideias — para nomear produtos, estruturar estratégias, antecipar objeções e explorar cenários futuros.</span></li>
                </ul>
                <p>Explore os melhores assistentes de IA disponíveis hoje e descubra qual se encaixa melhor no seu fluxo de trabalho e objetivos profissionais.</p>
            </details>
        </div>
    );
}
