import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>inteligência artificial aplicada ao direito</strong> opera principalmente sobre linguagem: contratos, petições, acórdãos, legislação e pareceres são todos documentos de texto, e modelos de linguagem de grande escala (LLMs) são treinados exatamente para compreender, comparar e gerar texto com precisão. Isso faz do direito uma das áreas mais naturalmente beneficiadas pela IA — especialmente em tarefas que envolvem leitura intensiva de grandes volumes documentais.
                </p>
                <p className="mb-4">
                    O impacto mais imediato é na <strong>compressão do tempo intelectual</strong>: pesquisa jurisprudencial que levava horas pode ser reduzida a minutos, análise de centenas de contratos em due diligence pode ser feita em um dia em vez de semanas, e rascunhos iniciais de petições podem sair em fração do tempo de elaboração manual. O advogado permanece responsável pelo julgamento estratégico, pela ética profissional e pela qualidade do produto final — a IA acelera o trabalho técnico que antecede essas decisões.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como a IA Está Mudando a Prática Jurídica</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Pesquisa jurisprudencial acelerada:</strong> O que levava horas em bases de jurisprudência pode ser reduzido a minutos com IA que compreende conceitos jurídicos e encontra precedentes relevantes semanticamente.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise de contratos em escala:</strong> IA revisa centenas de contratos em due diligence identificando cláusulas de risco, obrigações críticas e inconsistências — comprimindo semanas de trabalho em dias.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Rascunhos iniciais de documentos:</strong> Petições, pareceres, notificações e contratos gerados por IA como ponto de partida reduzem o tempo de elaboração em 50 a 70% — o advogado refina e assina.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Gestão processual inteligente:</strong> Monitoramento automático de movimentações, alertas de prazo e classificação de urgência garantem que nenhum prazo fatal seja perdido em escritórios de alto volume.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
