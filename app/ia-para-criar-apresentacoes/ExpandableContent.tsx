import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    As <strong>ferramentas de IA para apresentações</strong> funcionam combinando modelos de linguagem com sistemas de design generativo: o modelo de linguagem estrutura o conteúdo em uma narrativa lógica — definindo hierarquia de informações, densidade por slide e progressão argumentativa — enquanto o motor de design aplica automaticamente tipografia, paleta de cores, espaçamento e layout coerentes com o contexto. O resultado é uma apresentação com estrutura editorial e visual profissional gerada a partir de um simples parágrafo de contexto.
                </p>
                <p className="mb-4">
                    O que essa tecnologia muda de forma mais profunda não é a velocidade, mas o <strong>ponto de partida</strong>: em vez de começar de uma tela em branco — o momento de maior atrito criativo — o profissional recebe uma estrutura sólida para refinar, ajustar e personalizar. Isso libera energia cognitiva para o que realmente importa: os dados específicos, os argumentos diferenciadores e o toque pessoal que transformam uma apresentação funcional em uma apresentação memorável.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Onde a criação de apresentações com IA está sendo usada</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Pitches e propostas comerciais:</strong> Estrutura de narrativa persuasiva gerada automaticamente — problema, solução, mercado, diferenciais, call to action — com design que reforça a credibilidade da marca.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Relatórios para diretoria e stakeholders:</strong> Transformação de dados e análises em apresentações executivas com visualizações coerentes, sem depender de designer ou horas de formatação manual.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Materiais de treinamento corporativo:</strong> Conversão de documentos e manuais extensos em decks didáticos com estrutura de aprendizagem, reduzindo o tempo de produção de conteúdo instrucional.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Conteúdo educacional e aulas:</strong> Professores e instrutores transformam planos de aula em apresentações visuais estruturadas, mantendo foco no conteúdo pedagógico em vez de na formatação dos slides.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
