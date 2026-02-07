import Link from "next/link";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
    title: "Crawl4AI - Crawler Open-Source de Alta Performance para IA | Review",
    description: "Descubra o Crawl4AI: a biblioteca Python de código aberto definitiva para crawling e scraping otimizado para RAG e modelos de linguagem.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/crawl4ai",
    },
};

export default function Crawl4AIPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/crawl4ai#breadcrumb",
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
                        "name": "Crawl4AI",
                        "item": "https://www.hypehour.com.br/ferramentas/crawl4ai"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/crawl4ai#software",
                "name": "Crawl4AI",
                "description": "Crawl4AI é uma biblioteca Python open-source de web crawling dedicada a aplicações de IA e RAG.",
                "applicationCategory": "DeveloperApplication",
                "operatingSystem": "Linux, macOS, Windows",
                "url": "https://docs.crawl4ai.com/",
                "creator": {
                    "@type": "Organization",
                    "name": "Crawl4AI Open Source"
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
                    <span className="text-black font-medium">Crawl4AI</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white shadow">
                        <GlobeAltIcon className="w-10 h-10" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Crawl4AI</h1>
                        <p className="text-lg text-zinc-700">Crawler open-source de ultra performance para pipelines de IA</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O <strong>Crawl4AI</strong> emergiu como a ferramenta favorita dos desenvolvedores que buscam independência e performance. Diferente de APIs pagas, ele é uma biblioteca Python open-source que coloca o controle total do crawling e scraping nas mãos do engenheiro, sendo otimizado nativamente para cenários de **RAG (Retrieval-Augmented Generation)**.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Ao combinar a robustez do Playwright com algoritmos inteligentes de limpeza de dados, o Crawl4AI entrega Markdown de alta qualidade, pronto para ser processado por qualquer modelo de linguagem, sem as taxas recorrentes de serviços gerenciados.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Crawl4AI?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Crawl4AI é um framework de crawling focado em aplicações de inteligência artificial. Ele foi desenhado para resolver o problema da 'internet barulhenta', transformando páginas web complexas e dinâmicas em texto estruturado e limpo. Por ser open-source, ele oferece uma flexibilidade sem precedentes para customização de headers, proxies e comportamentos de navegação.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Alta Performance e Concorrência</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Enquanto ferramentas tradicionais sofrem para escalar, o Crawl4AI é construído sobre bases assíncronas. Ele pode gerenciar centenas de conexões simultâneas e renderizar JavaScript de forma eficiente, permitindo que você construa bases de dados imensas para treinamento de modelos ou busca semântica em questão de horas.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Focado em RAG: O Poder do Fit Markdown</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Uma das funcionalidades mais elogiadas é o 'Fit Markdown'. O Crawl4AI não apenas converte tags HTML, ele analisa a estrutura da página para garantir que o Markdown gerado contenha apenas o conteúdo central. Isso resulta em chunks de texto mais coesos e economiza milhares de tokens ao enviar o contexto para o GPT-4 ou Claude.
                    </p>
                </section>

                {/* Como funciona - Steps */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Como o Crawl4AI Funciona</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Instale e Configure</h3>
                                <p className="text-zinc-700">Adicione a biblioteca ao seu projeto Python e configure os drivers de navegador necessários (Playwright).</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Defina o Crawler</h3>
                                <p className="text-zinc-700">Crie scripts assíncronos para definir como o crawler deve se comportar, incluindo rotação de proxies e tratamento de JS.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Extração e Limpeza</h3>
                                <p className="text-zinc-700">O motor processa a página, remove ruídos visuais e gera um output Markdown otimizado para o seu pipeline de IA.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Alimente sua IA</h3>
                                <p className="text-zinc-700">Os dados limpos são injetados diretamente em bancos de vetores ou usados para alimentar agentes inteligentes.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Principais funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Principais Funcionalidades</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Headless Browser Support</h3>
                            <p className="text-zinc-700">Integração nativa com navegadores headless para garantir a extração de dados em sites modernos baseados em JavaScript.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Custom Data Layouts</h3>
                            <p className="text-zinc-700">Permite definir layouts de extração específicos para capturar dados altamente estruturados de domínios complexos.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Async Processing</h3>
                            <p className="text-zinc-700">Arquitetura assíncrona que permite realizar scraping de milhares de páginas simultaneamente com alta eficiência.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Smart Cleaning</h3>
                            <p className="text-zinc-700">Algoritmos inteligentes que removem tags HTML repetitivas, scripts e estilos, focando apenas no texto semântico puro.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Open-source e 100% gratuito: sem custos ocultos ou limites de API",
                            "Fácil integração com ecossistemas Python (Pandas, LangChain, OpenAI)",
                            "Controle total sobre a infraestrutura de scraping e proxies",
                            "Output em Markdown otimizado para economia drástica de tokens",
                            "Comunidade ativa e constante evolução guiada por feedback real",
                            "Alta performance comprovada em cenários de larga escala",
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
                            "Exige conhecimento de Python para configuração e deploy",
                            "Você é responsável por gerenciar a infraestrutura de proxies e IPs",
                            "Curva de aprendizado para otimizar crawls recursivos muito grandes",
                            "Não possui interface visual integrada (dashboard) nativamente",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Crawl4AI?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Desenvolvedores de IA que buscam controle total e baixo custo</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Equipes de Dados que precisam escalar ingestão de web data</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Projetos open-source que não podem depender de APIs pagas</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Pesquisadores que precisam garantir a reprodutibilidade dos dados</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Profissionais de marketing sem conhecimento técnico</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem busca uma solução de interface visual (no-code)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Empresas que preferem suporte enterprise gerenciado 24/7</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Potencialize seu pipeline de IA</h2>
                    <p className="text-lg mb-6 text-zinc-300">Comece a usar o Crawl4AI gratuitamente e tenha controle total sobre seus dados.</p>
                    <a
                        href="https://docs.crawl4ai.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Ver Documentação (GitHub) →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Crawl4AI representa o espírito da inovação aberta na era da inteligência artificial. Ele quebra as barreiras de custo e controle das APIs proprietárias, permitindo que a engenharia de dados seja tão flexível quanto o desenvolvimento de modelos.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Ao entregar uma solução gratuita, poderosa e focada na linguagem franca da IA (Markdown), o Crawl4AI se consolida como uma peça fundamental do stack tecnológico moderno, garantindo que o acesso ao conhecimento da web continue democrático e escalável.
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
