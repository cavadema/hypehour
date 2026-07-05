import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>IA para planilhas</strong> eliminou a barreira das fórmulas complexas e da programação de macros. Com ferramentas como <strong>Julius AI, Excelmatic e o Copilot para Microsoft 365</strong>, qualquer pessoa pode descrever em português o que precisa — "some os valores de venda por região e crie um gráfico de barras" — e receber a solução completa sem precisar conhecer PROCV, SOMASES ou VBA.
                </p>
                <p className="mb-4">
                    Para profissionais brasileiros que trabalham com Excel e Google Sheets no dia a dia, a <strong>IA para planilhas</strong> representa uma economia de horas semanais: análise de dados por chat em linguagem natural, limpeza automática de bases com erros, geração de dashboards sob demanda e criação de scripts de automação a partir de simples descrições do que você quer. O conhecimento técnico profundo deixa de ser obstáculo para usar o verdadeiro poder das planilhas.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">O que Você Pode Fazer com IA em Planilhas</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Fórmulas em português:</strong> Descreva o cálculo desejado e a IA escreve a fórmula correta para Excel ou Sheets — sem precisar memorizar sintaxe de ÍNDICE, CORRESP, SOMASE ou PROCV.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise conversacional:</strong> Faça upload da planilha e pergunte em linguagem natural sobre os dados — insights, tendências, anomalias e comparativos gerados instantaneamente.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Automação sem código:</strong> Descreva a rotina que você faz manualmente toda semana e a IA gera o script VBA ou Apps Script para automatizá-la completamente.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Limpeza de dados:</strong> Identifique e corrija automaticamente duplicatas, formatações inconsistentes, células vazias e erros de entrada de dados em planilhas com milhares de linhas.</span></li>
                </ul>
                <p>Explore as ferramentas de IA para planilhas listadas abaixo e transforme sua relação com Excel e Google Sheets — de ferramenta trabalhosa para parceiro inteligente de análise.</p>
            </details>
        </div>
    );
}
