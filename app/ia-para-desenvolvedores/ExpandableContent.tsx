import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    As <strong>ferramentas de IA para desenvolvedores</strong> transformaram o desenvolvimento de software — de autocompletar código a agentes que implementam features inteiras autonomamente. Com <strong>Cursor, GitHub Copilot e Claude como pair programmer</strong>, desenvolvedores brasileiros aumentam produtividade em 30 a 55%, reduzem tempo em debugging e geração de boilerplate, e conseguem navegar em bases de código desconhecidas com muito mais confiança.
                </p>
                <p className="mb-4">
                    O <strong>desenvolvedor que domina IA como ferramenta</strong> em 2026 não é substituído — ele se torna exponencialmente mais produtivo. A chave está em saber quando confiar na sugestão da IA, quando questionar e quando reescrever do zero. Desenvolvedores seniores usam IA para multiplicar seu output; os que ignoram essas ferramentas ficam progressivamente em desvantagem competitiva no mercado.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como Desenvolvedores Usam IA para Ser mais Produtivos</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Completions inteligentes:</strong> GitHub Copilot e Cursor sugerem linhas e blocos de código em contexto, acelerando a escrita especialmente em código repetitivo e boilerplate.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Refatoração assistida:</strong> Cursor em modo Agent pode analisar um arquivo ou módulo inteiro e propor refatorações consistentes em toda a base de código, algo que levaria horas manualmente.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Geração de testes:</strong> Cole uma função e peça ao Claude para gerar testes unitários com casos de borda — economiza uma das tarefas mais tediosas do desenvolvimento.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Revisão de código:</strong> Antes de criar um PR, peça ao Claude para revisar o diff buscando bugs, vulnerabilidades de segurança e oportunidades de melhoria de performance.</span></li>
                </ul>
                <p>Explore as ferramentas de IA para desenvolvedores listadas abaixo e escolha as que melhor se encaixam no seu stack, fluxo de trabalho e objetivos de carreira.</p>
            </details>
        </div>
    );
}
