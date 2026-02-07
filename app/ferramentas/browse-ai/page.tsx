import Link from "next/link";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
    title: "Browse AI - Web Scraping e Monitoramento sem Código | Review",
    description: "Descubra o Browse AI: a ferramenta mais fácil para extrair e monitorar dados de qualquer site sem escrever uma linha de código.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/browse-ai",
    },
};

export default function BrowseAIPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/browse-ai#breadcrumb",
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
                        "name": "Browse AI",
                        "item": "https://www.hypehour.com.br/ferramentas/browse-ai"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/browse-ai#software",
                "name": "Browse AI",
                "description": "Browse AI é uma plataforma de web scraping sem código para extração e monitoramento de dados.",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "url": "https://www.browse.ai",
                "creator": {
                    "@type": "Organization",
                    "name": "Browse AI"
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
                    <span className="text-black font-medium">Browse AI</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white shadow">
                        <GlobeAltIcon className="w-10 h-10" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Browse AI</h1>
                        <p className="text-lg text-zinc-700">Extração e monitoramento de dados em 2 minutos</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O <strong>Browse AI</strong> é a solução definitiva de democratização do web scraping. Tradicionalmente, extrair dados de sites exigia habilidades complexas de programação ou ferramentas desktop difíceis de configurar. O Browse AI muda isso ao permitir que qualquer usuário treine robôs inteligentes diretamente no navegador.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Seja para monitorar preços de concorrentes, coletar leads em massa ou acompanhar mudanças em portais de notícias, a plataforma oferece uma experiência visual intuitiva que transforma sites complexos em planilhas ou APIs prontas para uso.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Browse AI?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Browse AI é uma plataforma de automação e Business Intelligence voltada para web data. Ela funciona como um gravador de ações: você abre o site desejado através da ferramenta, clica nos dados que quer extrair e o robô aprende o padrão. A partir daí, ele pode executar essa tarefa em escala, lidando com captchas, logins e proxies por você.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Adeus ao Código: Scraping Visual</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        O coração do Browse AI é seu gravador 'no-code'. Ele utiliza heurísticas avançadas para entender a estrutura das páginas. Se você clica em um preço, ele automaticamente identifica que se trata de uma lista de produtos e sugere extrair todos os itens similares da página, economizando horas de configuração manual.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Monitoramento e Alertas Inteligentes</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Além da extração pontual, o Browse AI brilha no monitoramento. Você pode agendar robôs para 'vigiar' partes específicas de um site. Se um estoque de produto acaba ou o valor de uma ação muda, o robô detecta a diferença e dispara um alerta via e-mail ou Slack, ou integra o dado atualizado diretamente no seu banco de dados via Zapier.
                    </p>
                </section>

                {/* Como funciona - Steps */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Como o Browse AI Funciona</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Treine seu Robô</h3>
                                <p className="text-zinc-700">Acesse qualquer site através da interface do Browse AI e selecione visualmente os dados que deseja coletar.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Configure o Agendamento</h3>
                                <p className="text-zinc-700">Defina a frequência com que o robô deve rodar e se ele deve monitorar mudanças ou apenas extrair novos dados.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Execute em Larga Escala</h3>
                                <p className="text-zinc-700">A plataforma roda o robô na nuvem, lidando com proxies, captchas e rotação de IPs automaticamente.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Receba os Dados</h3>
                                <p className="text-zinc-700">Baixe os resultados em CSV/Excel ou integre-os com mais de 5.000 apps via Zapier e API.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Principais funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Principais Funcionalidades</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Bulk Run (Execução em Massa)</h3>
                            <p className="text-zinc-700">Suba uma lista de milhares de URLs e o robô executará o mesmo padrão de extração em todas elas simultaneamente.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Pre-trained Robots</h3>
                            <p className="text-zinc-700">Biblioteca de robôs prontos para sites como LinkedIn, Amazon, eBay e diversos portais imobiliários e de empregos.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Change Detection</h3>
                            <p className="text-zinc-700">Tecnologia que detecta alterações visuais ou estruturais na página e notifica você exatamente sobre o que mudou.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Geo-Location Scraping</h3>
                            <p className="text-zinc-700">Escolha o país de onde o robô deve acessar o site para extrair dados localizados, como moedas e preços regionais.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Configuração mais rápida do mercado: robôs prontos em 2 minutos",
                            "Interface totalmente sem código, acessível para marketing e vendas",
                            "Execução 100% na nuvem, sem ocupar recursos do seu computador",
                            "Ecossistema de integrações maduro (Zapier, Make, Google Sheets)",
                            "Resolução automática de CAPTCHAs e gestão de proxies inclusa",
                            "Monitoramento robusto com histórico de mudanças detalhado",
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
                            "Custo por crédito pode ser elevado para projetos de milhões de requisições",
                            "Menos flexível que scrapers programáticos para sites com lógica interna complexa",
                            "Robôs podem precisar de re-treinamento se o site mudar drasticamente",
                            "Dependência total da infraestrutura da plataforma (não é open-source)",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Browse AI?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Profissionais de Growth e Marketing para coleta de leads</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Analistas de E-commerce monitorando concorrência e preços</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Equipes de Operações automatizando fluxos de dados</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Small business que não possuem desenvolvedores dedicados</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Extrações científicas massivas de toda a web</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Desenvolvedores que preferem controle total via código</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Aplicações que requerem extração de dados locais offline</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Automatize sua coleta de dados</h2>
                    <p className="text-lg mb-6 text-zinc-300">Comece a extrair dados de qualquer site em minutos, sem precisar programar.</p>
                    <a
                        href="https://www.browse.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Criar meu robô grátis →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Browse AI não é apenas um luxo, mas uma necessidade estratégica para a era baseada em dados. Ignorar como os dados da web podem ser automatizados hoje é o mesmo que ignorar o Excel há décadas.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Ao oferecer uma plataforma visual, rápida e integrada, o Browse AI capacita empresas de todos os tamanhos a saírem do 'trabalho manual' de copiar dados e garantirem insights competitivos em tempo real, moldando decisões de negócio mais inteligentes.
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
