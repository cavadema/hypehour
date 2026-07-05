import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    O <strong>web scraping com IA</strong> revolucionou a coleta e processamento de dados da web. Com ferramentas como <strong>Firecrawl, Browse AI e Crawl4AI</strong>, é possível extrair informações de qualquer site em formato estruturado, monitorar mudanças de preço automaticamente, alimentar bases de conhecimento para RAG e coletar dados de concorrência — sem escrever seletores CSS frágeis para cada página ou gerenciar infraestrutura complexa de proxies.
                </p>
                <p className="mb-4">
                    O diferencial da <strong>IA no web scraping</strong> está em lidar com a variabilidade da web: páginas com layouts diferentes, conteúdo dinâmico carregado por JavaScript e formatos de dados inconsistentes. Modelos de linguagem entendem o contexto da página e extraem a informação certa mesmo quando a estrutura HTML muda — eliminando a manutenção constante que scrapers tradicionais exigem.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Casos de Uso de Web Scraping com IA para Empresas</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Monitoramento de concorrência:</strong> Acompanhe preços, lançamentos de produtos e mudanças de estratégia de concorrentes automaticamente — recebendo alertas quando algo relevante muda.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Geração de leads B2B:</strong> Extraia contatos, cargos e informações de empresas-alvo de sites públicos, LinkedIn e diretórios setoriais para alimentar seu CRM com prospects qualificados.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Alimentação de RAG:</strong> Use Firecrawl ou Crawl4AI para converter conteúdo da web em base de conhecimento estruturada para chatbots e assistentes de IA da sua empresa.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Pesquisa de mercado:</strong> Colete avaliações de clientes, menções em redes sociais e dados de plataformas de e-commerce para análise de sentimento e mapeamento do mercado.</span></li>
                </ul>
                <p>Explore as ferramentas de IA para web scraping listadas abaixo e descubra como extrair, processar e usar dados da web de forma inteligente e escalável.</p>
            </details>
        </div>
    );
}
