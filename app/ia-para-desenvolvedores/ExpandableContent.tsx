import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    As <strong>ferramentas de IA para desenvolvimento de software</strong> funcionam indexando o contexto completo de um projeto — arquivos, dependências, histórico de mudanças, padrões de código — para oferecer assistência que vai além de simples autocompletar. Modelos treinados em bilhões de linhas de código de diversas linguagens e frameworks conseguem compreender a intenção por trás de uma função, sugerir implementações inteiras com tratamento de erros e casos de borda, identificar bugs pela leitura do stack trace e propor refatorações consistentes em toda a base.
                </p>
                <p className="mb-4">
                    O impacto real está na mudança de onde o desenvolvedor investe atenção: o tempo gasto em <strong>código boilerplate, configurações repetitivas, geração de testes e documentação</strong> — tarefas de baixo valor intelectual mas alto consumo de energia — se comprime significativamente. Isso libera capacidade cognitiva para arquitetura, decisões de design e resolução dos problemas realmente complexos. Desenvolvedores que dominam essa parceria com IA não são substituídos; tornam-se exponencialmente mais produtivos e competitivos.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como desenvolvedores usam IA para ser mais produtivos</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Completions inteligentes em contexto:</strong> Sugestões de linhas e blocos inteiros de código baseadas no contexto do arquivo e do projeto, acelerando especialmente a escrita de código repetitivo e configurações de infraestrutura.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Refatoração assistida em escala:</strong> Análise de módulos inteiros com propostas de refatoração consistentes em toda a base de código — algo que levaria horas de revisão manual e concentração elevada.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Geração automática de testes:</strong> A partir de uma função existente, a IA gera testes unitários com casos de uso, casos de borda e mocks — eliminando uma das tarefas mais tediosas e frequentemente negligenciadas do desenvolvimento.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Revisão de código antes do PR:</strong> Análise do diff em busca de bugs, vulnerabilidades de segurança, oportunidades de melhoria de performance e inconsistências com padrões do projeto — antes que o problema chegue ao revisor humano.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
