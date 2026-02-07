import Link from "next/link";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
    title: "Firecrawl - API de Crawling e Scraping para LLMs | Review",
    description: "Descubra o Firecrawl: a API líder para transformar sites em Markdown limpo e estruturado para alimentar sua Inteligência Artificial.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/firecrawl",
    },
};

export default function FirecrawlPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/firecrawl#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.hypehour.com.br/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "IA para Web Scraping",
                        "item": "https://www.hypehour.com.br/ia-web-scraping"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Firecrawl",
                        "item": "https://www.hypehour.com.br/ferramentas/firecrawl"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/firecrawl#software",
                "name": "Firecrawl",
                "description": "Firecrawl é uma API de scraping e crawling que transforma sites em dados limpos (Markdown) puros para LLMs.",
                "applicationCategory": "DeveloperApplication",
                "operatingSystem": "Web",
                "url": "https://www.firecrawl.dev",
                "creator": {
                    "@type": "Organization",
                    "name": "Firecrawl"
                }
            }
        ]
    };

    return (
        <main className="min-h-screen bg-[#f7f8fa]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <div className="max-w-6xl mx-auto px-4 py-10">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-zinc-700 mb-8">
                    <Link href="/" className="hover:text-black transition">Home</Link>
                    <span className="text-zinc-400">/</span>
                    <Link href="/ia-web-scraping" className="hover:text-black transition">IA para Web Scraping</Link>
                    <span className="text-zinc-400">/</span>
                    <span className="text-black font-medium">Firecrawl</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white shadow">
                        <GlobeAltIcon className="w-10 h-10" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Firecrawl</h1>
                        <p className="text-lg text-zinc-700">A web inteira pronta para sua IA em formato Markdown</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O <strong>Firecrawl</strong> resolve um dos maiores gargalos para quem constrói aplicações de IA: a coleta de dados de qualidade. Ao contrário de ferramentas de scraping tradicionais, o Firecrawl é focado em entregar conteúdo limpo, sem ruídos de publicidade ou menus, otimizado especificamente para **RAG (Retrieval-Augmented Generation)**.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Seja para alimentar um chatbot, treinar um modelo ou criar uma base de conhecimento, o Firecrawl faz o "sujo" de navegar, lidar com proxies e limpar o código, para que você receba apenas o que importa em formato Markdown ou JSON estruturado.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Firecrawl?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        O Firecrawl é uma API de orquestração de scraping de nova geração. Ele funciona como uma camada inteligente entre a web desorganizada e seus modelos de linguagem. Enquanto scrapers antigos exigiam scripts complexos para cada site, o Firecrawl usa visão computacional e heurísticas para identificar onde está o texto principal e entregá-lo em Markdown puro.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">A Revolução do RAG: Dados Prontos para IA</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        O grande diferencial do Firecrawl é o seu output. Para uma IA, o Markdown é infinitamente superior ao HTML. Ele preserva a semântica (títulos, listas, tabelas) sem engolir tokens preciosos com tags de design. Isso permite que suas aplicações de RAG sejam mais precisas, pois o contexto enviado à IA é denso e relevante.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Extração Estruturada sem Seletores</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Com a funcionalidade de extração estruturada (LLM Extract), o Firecrawl elimina a necessidade de manutenção de código. Se o layout de um site muda, a IA do Firecrawl se adapta. Você apenas define o que quer (ex: "nome do produto", "preço" e "especificações") e recebe os dados prontos, independente de IDs ou classes CSS.
                    </p>
                </section>

                {/* Como funciona - Steps */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Como o Firecrawl Funciona</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Envie a URL</h3>
                                <p className="text-zinc-700">Passe a URL de uma página ou um domínio inteiro para a API do Firecrawl iniciar a captura.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Renderização e Limpeza</h3>
                                <p className="text-zinc-700">O motor renderiza o JavaScript e remove automaticamente gorduras como barras laterais e cabeçalhos fixos.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Conversão para Markdown</h3>
                                <p className="text-zinc-700">O conteúdo é transformado em Markdown semântico, ideal para ser processado por qualquer LLM moderno.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Extração e Integração</h3>
                                <p className="text-zinc-700">Os dados estruturados (JSON) são retornados para serem injetados diretamente no seu pipeline de IA ou banco de vetores.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Principais funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Principais Funcionalidades</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Recursive Crawling</h3>
                            <p className="text-zinc-700">Capacidade de explorar e capturar todas as páginas de um site a partir de uma única semente, respeitando sitemaps.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Bypass Inteligente</h3>
                            <p className="text-zinc-700">Gestão nativa de proxies e rotação de headers para contornar sistemas de segurança e detecção de bots.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">AI Vision Scraping</h3>
                            <p className="text-zinc-700">Uso de modelos multimodais para entender a estrutura visual do site e extrair dados que scrapers de código falham.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Developer SDKs</h3>
                            <p className="text-zinc-700">Bibliotecas oficiais em Python e Node.js que facilitam a integração em fluxos de trabalho de engenharia de software.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Transforma sites em dados limpos para LLMs sem setup complexo",
                            "Economia significativa de tokens devido ao output Markdown purificado",
                            "Lida com JavaScript e carregamento dinâmico nativamente",
                            "Integração de um clique com LangChain, LlamaIndex e Vercel AI SDK",
                            "Extração de metadados completa (título, descrição, autor, etc)",
                            "Opção de hospedagem própria (Open Source) para controle total",
                        ].map((advantage, index) => (
                            <div key={index} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                                <span className="text-black font-bold text-lg flex-shrink-0">✓</span>
                                <p className="text-zinc-700">{advantage}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Desvantagens (Considerações) */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Considerações</h2>
                    <div className="grid gap-4">
                        {[
                            "Uso intenso de recursos pode ser caro para crawling de milhões de páginas",
                            "Curva de aprendizado inicial para configurar esquemas de extração complexos",
                            "Dependência de APIs de terceiros se não for self-hosted",
                            "Velocidade de renderização de JS pode atrasar crawlings massivos",
                        ].map((disadvantage, index) => (
                            <div key={index} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                                <span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span>
                                <p className="text-zinc-700">{disadvantage}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Para quem é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Firecrawl?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Engenheiros de IA construindo pipelines de RAG</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Desenvolvedores de assistentes e agentes autônomos</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Equipes de ciência de dados que precisam de web data limpo</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Startups que buscam rapidez no setup de ingestão de dados</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Projetos de baixíssimo orçamento com milhões de páginas</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Simples monitoramento de mudança de preço em um só site</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem não utiliza outputs para modelos de IA/Markdown</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Pronto para alimentar sua IA?</h2>
                    <p className="text-lg mb-6 text-zinc-300">Comece a usar o Firecrawl hoje e transforme a web em sua base de dados estruturada.</p>
                    <a
                        href="https://www.firecrawl.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Experimentar Firecrawl →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Firecrawl não é apenas um luxo, mas uma necessidade estratégica para quem deseja escalar aplicações de IA com dados reais e atualizados. Ignorar a qualidade da ingestão de dados hoje é o mesmo que ignorar a indexação do Google há décadas.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Ao oferecer dados concretos, limpos e prontos para LLMs, o Firecrawl capacita desenvolvedores a saírem do 'escuro' do HTML bruto e garantirem que sua IA tenha a melhor base de conhecimento possível, moldando o futuro da automação e busca moderna.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />

                {/* Similar Tools */}
                <SimilarTools />
            </div>
        </main>
    );
}
