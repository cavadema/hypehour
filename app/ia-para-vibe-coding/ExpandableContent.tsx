import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    O <strong>vibe coding</strong> representa a maior democratização do desenvolvimento de software da história. Com ferramentas como <strong>Bolt.new, Lovable, Replit Agent e v0 da Vercel</strong>, empreendedores, designers e profissionais de qualquer área podem descrever o que querem construir em português e receber uma aplicação funcional e deployada em minutos — sem escrever uma linha de código manualmente.
                </p>
                <p className="mb-4">
                    Para o ecossistema de startups e inovação no Brasil, o <strong>vibe coding com IA</strong> é um game-changer: ideias que antes precisavam de R$50 a R$200 mil em desenvolvimento agora têm um MVP testável por uma fração desse custo. A velocidade de iteração é incomparável — mudanças que levariam dias são feitas em minutos, permitindo testar hipóteses de produto com usuários reais antes de qualquer investimento significativo em desenvolvimento profissional.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">O que Você Pode Construir com Vibe Coding Hoje</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>MVPs de SaaS:</strong> Aplicações com autenticação, banco de dados, dashboard e funcionalidades core em horas — suficiente para validar o produto com primeiros clientes pagantes.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Ferramentas internas:</strong> CRMs customizados, dashboards de métricas, sistemas de gestão de tarefas e outros apps internos que fariam sentido desenvolver mas nunca chegam no topo da fila do time de TI.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Landing pages e sites:</strong> Páginas de conversão com design moderno, formulários integrados e animações — sem depender de desenvolvedor para cada ajuste de copy ou visual.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Prototipagem rápida:</strong> Transforme qualquer ideia em protótipo funcional em horas para apresentar a investidores, clientes ou parceiros com algo concreto para demonstrar.</span></li>
                </ul>
                <p>Explore as ferramentas de vibe coding listadas abaixo e comece a construir seus projetos digitais hoje — sem esperar por um desenvolvedor.</p>
            </details>
        </div>
    );
}
