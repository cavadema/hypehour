import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    Os <strong>assistentes de IA baseados em grandes modelos de linguagem</strong> mudaram permanentemente a forma como trabalhamos, estudamos e criamos. Em vez de apenas recuperar informações, esses sistemas raciocinam, sintetizam e geram conteúdo contextualizado — funcionando como um colaborador disponível a qualquer hora, capaz de adaptar o tom, o formato e o nível de profundidade de acordo com o que você precisa.
                </p>
                <p className="mb-4">
                    O que diferencia os assistentes de IA modernos das ferramentas de busca tradicionais é a capacidade de <strong>manter contexto ao longo de uma conversa</strong> e tratar tarefas complexas de forma iterativa. Você descreve o objetivo, o assistente propõe uma abordagem, você refina — e o resultado final é co-construído. Essa interação fluida reduziu drasticamente o tempo necessário para produzir texto, analisar documentos, escrever código e estruturar raciocínios.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">O que Você Pode Fazer com Assistentes de IA Hoje</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Produção de conteúdo:</strong> Redija e-mails, posts, artigos, roteiros e apresentações em minutos — com o tom e formato exatos que você precisa, ajustando a cada iteração da conversa.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise e síntese:</strong> Envie contratos, relatórios, artigos científicos ou transcrições de reuniões e receba resumos executivos com os pontos-chave destacados e perguntas respondidas.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Programação e debugging:</strong> Gere código, explique erros, refatore funções e escreva testes automatizados em qualquer linguagem de programação, com explicações linha a linha.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Brainstorming estratégico:</strong> Use a IA como um parceiro de ideias — para nomear produtos, estruturar estratégias, antecipar objeções e explorar cenários futuros com profundidade.</span></li>
                </ul>
                <p>Explore os melhores assistentes de IA disponíveis hoje e descubra qual se encaixa melhor no seu fluxo de trabalho e objetivos profissionais.</p>
            </details>
        </div>
    );
}
