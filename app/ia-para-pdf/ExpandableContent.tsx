import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>análise de documentos por inteligência artificial</strong> funciona a partir de modelos de linguagem com janelas de contexto extensas — capazes de processar dezenas, às vezes centenas de páginas de uma só vez. O sistema não apenas extrai texto do PDF: ele compreende a estrutura do documento, identifica relações entre seções, reconhece entidades como partes contratuais, datas e valores, e responde a perguntas específicas com citação precisa do trecho de origem.
                </p>
                <p className="mb-4">
                    O salto de produtividade está na mudança do modo de leitura: em vez de percorrer linearmente um documento de 200 páginas em busca de uma informação específica, o profissional passa a <strong>conversar com o documento</strong> — fazendo perguntas diretas e recebendo respostas com referência ao parágrafo exato. Isso transforma horas de leitura minuciosa em minutos de consulta dirigida, sem sacrificar a rastreabilidade da fonte.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Onde a análise de PDF com IA está sendo mais usada</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise jurídica e contratual:</strong> Identificação de cláusulas de risco, penalidades, prazos e obrigações das partes em contratos longos — sem leitura página a página.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Revisão financeira e regulatória:</strong> Consulta a relatórios de resultados, demonstrações contábeis e documentos regulatórios com perguntas diretas sobre métricas e riscos específicos.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Pesquisa acadêmica e científica:</strong> Síntese de achados de múltiplos artigos, comparação de metodologias e mapeamento de lacunas na literatura a partir de dezenas de PDFs simultaneamente.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Preparação para concursos e estudos:</strong> Criação de resumos, questões simuladas e mapas conceituais a partir de editais, legislação e apostilas extensas.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
