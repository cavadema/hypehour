import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>inteligência artificial aplicada a planilhas</strong> funciona combinando modelos de linguagem — que interpretam instruções em texto — com capacidade de execução de código para análise de dados. Ao receber uma solicitação em linguagem natural, o sistema traduz a intenção do usuário em fórmulas, scripts ou visualizações corretas, sem exigir que a pessoa conheça a sintaxe técnica por trás da solução. O dado fornecido é analisado pelo modelo, que retorna o resultado junto com a lógica aplicada.
                </p>
                <p className="mb-4">
                    O efeito prático é a <strong>democratização da análise de dados</strong>: profissionais que antes dependiam de colegas técnicos ou de longas buscas por fórmulas em tutoriais passam a resolver por conta própria questões de análise, automação e visualização. A barreira deixou de ser o conhecimento técnico de ferramentas específicas — e passou a ser a clareza com que o profissional consegue formular o problema que quer resolver.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">O que é possível fazer com IA aplicada a planilhas</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Geração de fórmulas por descrição:</strong> Descreva o cálculo em português e receba a fórmula pronta com explicação — sem memorizar sintaxe de funções avançadas de lookup, condicional ou array.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise conversacional de dados:</strong> Faça upload da planilha e pergunte sobre os dados em linguagem natural — tendências, anomalias, comparativos e projeções gerados instantaneamente.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Automação de rotinas repetitivas:</strong> Descreva o processo manual que você repete toda semana e receba o script de automação pronto para executar, sem precisar programar do zero.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Limpeza e padronização de dados:</strong> Identificação e correção automática de duplicatas, formatos inconsistentes, células vazias e erros de entrada em bases com milhares de registros.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
