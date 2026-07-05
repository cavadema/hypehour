import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>adoção de IA por empresas</strong> deixou de ser tendência e se tornou imperativo competitivo. Em 2026, empresas que não incorporam <strong>inteligência artificial nos seus processos</strong> — seja no atendimento, marketing, operações ou tomada de decisão — enfrentam desvantagem crescente frente a concorrentes que operam com mais velocidade, menos custo e maior capacidade analítica. A boa notícia é que nunca foi tão acessível começar.
                </p>
                <p className="mb-4">
                    Para <strong>empresas brasileiras de todos os tamanhos</strong>, a IA oferece oportunidades concretas: automação de tarefas repetitivas que libera talentos para trabalho de maior valor, análise de dados que transforma informação em decisões mais rápidas e embasadas, e personalização em escala que antes era privilégio apenas de grandes corporações. O retorno sobre o investimento em IA bem implementada costuma se materializar em meses, não anos.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Áreas da Empresa onde a IA Gera mais Impacto</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Atendimento ao cliente:</strong> Chatbots com IA resolvem 40 a 70% dos tickets de nível 1 automaticamente, reduzindo custo e tempo de resposta sem sacrificar a qualidade do suporte.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Marketing e conteúdo:</strong> IA gera copy, imagens, vídeos e relatórios de campanha em escala — reduzindo custo de produção e permitindo testes A/B muito mais ágeis.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Operações e processos:</strong> Automação inteligente elimina trabalho manual em processamento de documentos, geração de relatórios, triagem de e-mails e entrada de dados em sistemas.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Vendas e CRM:</strong> Lead scoring, previsão de receita, sugestão de próximas ações e personalização de propostas — a IA torna cada vendedor mais eficiente e informado.</span></li>
                </ul>
                <p>Explore as soluções de IA para empresas listadas abaixo e encontre as ferramentas certas para começar a transformação digital inteligente do seu negócio.</p>
            </details>
        </div>
    );
}
