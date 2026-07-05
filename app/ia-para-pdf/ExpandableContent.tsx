import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    As <strong>ferramentas de IA para PDF</strong> transformaram a forma como profissionais lidam com documentos longos. Com plataformas como <strong>ChatPDF, NotebookLM e Claude</strong>, é possível fazer upload de contratos, relatórios, artigos científicos ou livros e simplesmente conversar com o documento em português: fazer perguntas específicas, pedir resumos por seção, comparar versões ou extrair dados de tabelas — sem precisar ler o documento inteiro linha por linha.
                </p>
                <p className="mb-4">
                    Para advogados que precisam analisar contratos, pesquisadores que revisam artigos, gestores que recebem relatórios extensos e estudantes com pilhas de material para estudar, a <strong>análise de PDF com IA</strong> é um multiplicador de produtividade imediato. O que antes levava horas de leitura minuciosa agora pode ser processado em minutos — com citações precisas do texto original para verificação.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Casos de Uso de IA para PDF no Mundo Profissional Brasileiro</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise jurídica:</strong> Advogados fazem upload de contratos e pedem identificação de cláusulas de risco, penalidades, obrigações das partes e pontos de negociação — em minutos, não horas.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Revisão financeira:</strong> Analistas consultam relatórios de resultados, prospectus de IPO e demonstrações financeiras com perguntas diretas sobre métricas, riscos e projeções.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Pesquisa acadêmica:</strong> Pesquisadores carregam dezenas de artigos e pedem síntese dos achados, comparação de metodologias e identificação de lacunas na literatura.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Concursos e estudos:</strong> Candidatos a concursos fazem upload de editais, legislação e apostilas para criar resumos, questões simuladas e mapas mentais personalizados.</span></li>
                </ul>
                <p>Explore as ferramentas de IA para PDF listadas abaixo e descubra qual se adapta melhor ao tipo de documento que você precisa analisar e ao seu fluxo de trabalho.</p>
            </details>
        </div>
    );
}
