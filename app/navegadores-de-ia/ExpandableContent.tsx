import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    Os <strong>navegadores e buscadores de IA</strong> estão redefinindo como nos relacionamos com a informação na web. Ferramentas como <strong>Perplexity AI, Arc Browser com Max e Microsoft Edge com Copilot</strong> transformam a pesquisa online de uma atividade de coleta manual de informações em um processo de síntese inteligente — onde a IA lê, compara e resume múltiplas fontes para você, com citações verificáveis.
                </p>
                <p className="mb-4">
                    Para profissionais do conhecimento brasileiros — pesquisadores, jornalistas, analistas, advogados e estudantes — a <strong>pesquisa assistida por IA</strong> representa uma mudança de paradigma: em vez de abrir 15 abas e passar horas sintetizando manualmente, você faz uma pergunta e recebe uma resposta fundamentada em minutos. O Google ainda domina para buscas pontuais, mas para pesquisa complexa e síntese, os buscadores de IA estão muito à frente.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como Navegar de Forma mais Inteligente com IA</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Pesquisa com citações:</strong> Perplexity cita cada fonte usada na resposta — você pode verificar a informação diretamente, diferente dos LLMs que podem alucinar referências inexistentes.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Resumo de páginas longas:</strong> Abra qualquer artigo, relatório ou documento e peça à IA integrada ao navegador para resumir os pontos principais — leia em 30 segundos o que levaria 15 minutos.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Deep Research autônomo:</strong> Para pesquisas extensas, o modo de pesquisa profunda do Perplexity conduz uma investigação multi-passo e entrega um relatório completo com dezenas de fontes verificadas.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Comparação inteligente:</strong> "Compare os planos de internet fibra disponíveis no meu CEP" — a IA coleta, estrutura e compara informações de múltiplos sites automaticamente.</span></li>
                </ul>
                <p>Explore os navegadores e buscadores de IA listados abaixo e transforme sua experiência de pesquisa e navegação com inteligência artificial integrada.</p>
            </details>
        </div>
    );
}
