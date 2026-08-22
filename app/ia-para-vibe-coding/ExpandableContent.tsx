import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    O <strong>vibe coding</strong> é uma abordagem ao desenvolvimento de software em que a pessoa descreve o que quer construir em linguagem natural e a IA gera, itera e refina o código de forma autônoma. Modelos de linguagem treinados em bilhões de linhas de código conseguem traduzir intenção em implementação — compreendendo requisitos ambíguos, escolhendo a stack mais adequada e conectando componentes que antes demandavam domínio técnico profundo.
                </p>
                <p className="mb-4">
                    A habilidade central que o vibe coding requer não é programação, mas <strong>clareza na descrição do problema</strong>: saber articular o que o produto deve fazer, quais regras de negócio devem ser respeitadas e como o usuário final vai interagir com a solução. Quem domina essa comunicação com a IA consegue construir MVPs funcionais em horas, testar hipóteses antes de qualquer investimento significativo e iterar com velocidade que transforma completamente a dinâmica de desenvolvimento de produto.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">O que Você Pode Construir com Vibe Coding Hoje</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>MVPs de SaaS:</strong> Aplicações com autenticação, banco de dados, dashboard e funcionalidades core em horas — suficiente para validar o produto com primeiros clientes pagantes.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Ferramentas internas:</strong> CRMs customizados, dashboards de métricas, sistemas de gestão de tarefas e outros apps internos que fariam sentido desenvolver mas nunca chegam no topo da fila do time de TI.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Landing pages e sites:</strong> Páginas de conversão com design moderno, formulários integrados e animações — sem depender de desenvolvedor para cada ajuste de copy ou visual.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Prototipagem rápida:</strong> Transforme qualquer ideia em protótipo funcional em horas para apresentar a investidores, clientes ou parceiros com algo concreto para demonstrar.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
