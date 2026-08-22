import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    O <strong>web scraping com IA</strong> combina técnicas tradicionais de extração de dados com modelos de linguagem capazes de compreender o contexto semântico de uma página. Em vez de depender de seletores CSS ou XPath rígidos que quebram a cada mudança de layout, a IA identifica a informação desejada pelo seu significado — extraindo preços, contatos, textos ou dados estruturados mesmo quando o HTML muda completamente.
                </p>
                <p className="mb-4">
                    A grande virada dessa tecnologia está em lidar com a <strong>variabilidade real da web</strong>: páginas dinâmicas carregadas por JavaScript, conteúdo protegido por CAPTCHAs, layouts inconsistentes entre versões mobile e desktop e dados que aparecem apenas após interação do usuário. Essas barreiras que tornavam scrapers tradicionais frágeis e caros de manter passaram a ser contornáveis com abordagens baseadas em modelos de linguagem e automação de navegadores inteligentes.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Casos de Uso de Web Scraping com IA para Empresas</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Monitoramento de concorrência:</strong> Acompanhe preços, lançamentos de produtos e mudanças de estratégia de concorrentes automaticamente — recebendo alertas quando algo relevante muda.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Geração de leads B2B:</strong> Extraia contatos, cargos e informações de empresas-alvo de sites públicos, LinkedIn e diretórios setoriais para alimentar seu CRM com prospects qualificados.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Alimentação de bases de conhecimento:</strong> Converta conteúdo da web em texto limpo e estruturado para treinar chatbots, alimentar sistemas de RAG e construir bases de conhecimento internas.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Pesquisa de mercado:</strong> Colete avaliações de clientes, menções em redes sociais e dados de plataformas de e-commerce para análise de sentimento e mapeamento do mercado.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
