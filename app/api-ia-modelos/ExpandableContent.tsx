import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    As <strong>APIs de modelos de linguagem</strong> são a infraestrutura que permite a desenvolvedores, startups e empresas construir produtos inteligentes sem treinar seus próprios modelos do zero. Com uma chamada de API, você acessa capacidades de raciocínio, geração de texto, análise de código e processamento multimodal diretamente no seu sistema, aplicativo ou automação — pagando apenas pelo volume processado.
                </p>
                <p className="mb-4">
                    O mercado de <strong>APIs de IA</strong> se diversificou rapidamente: hoje existem opções para todos os perfis, desde desenvolvedores independentes que buscam o melhor custo por token até empresas que precisam de <strong>SLA garantido, conformidade com LGPD e contratos dedicados</strong>. Comparar janela de contexto, latência, capacidades multimodais e preço é essencial antes de comprometer sua arquitetura com um único provedor.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Onde APIs de IA São Aplicadas no Desenvolvimento de Produtos</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Chatbots e assistentes internos:</strong> Empresas integram modelos de linguagem via API para criar assistentes que respondem perguntas sobre documentação, processos e base de conhecimento interna sem exposição de dados sensíveis.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise de documentos em escala:</strong> APIs com grande janela de contexto processam contratos, relatórios e prontuários inteiros em uma única chamada, extraindo informações estruturadas e gerando resumos automaticamente.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Automação de conteúdo:</strong> Plataformas de marketing e e-commerce usam APIs de IA para gerar descrições de produto, textos de anúncio e e-mails personalizados em volume, com custo por peça muito inferior à produção manual.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Ferramentas de código e DevOps:</strong> IDEs, revisores de pull request e plataformas de CI/CD incorporam modelos via API para sugerir correções, detectar vulnerabilidades e gerar documentação automaticamente durante o ciclo de desenvolvimento.</span></li>
                </ul>
                <p>Explore as APIs e plataformas listadas abaixo para encontrar a combinação certa de performance, custo e conformidade para o seu produto ou automação.</p>
            </details>
        </div>
    );
}
