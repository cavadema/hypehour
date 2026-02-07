import Link from "next/link";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
    title: "ScraperAPI - API de Proxy e Bypass de Bloqueios | Review",
    description: "Conheça o ScraperAPI: a solução definitiva para gerenciar proxies, rotacionar IPs e burlar CAPTCHAs em escala com uma simples chamada de API.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/scraperapi",
    },
};

export default function ScraperAPIPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/scraperapi#breadcrumb",
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
                        "name": "ScraperAPI",
                        "item": "https://www.hypehour.com.br/ferramentas/scraperapi"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/scraperapi#software",
                "name": "ScraperAPI",
                "description": "ScraperAPI é uma ferramenta de proxy que gerencia proxies, navegadores e CAPTCHAs automaticamente.",
                "applicationCategory": "DeveloperApplication",
                "operatingSystem": "Web",
                "url": "https://www.scraperapi.com/",
                "creator": {
                    "@type": "Organization",
                    "name": "ScraperAPI"
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
                    <span className="text-black font-medium">ScraperAPI</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white shadow">
                        <GlobeAltIcon className="w-10 h-10" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">ScraperAPI</h1>
                        <p className="text-lg text-zinc-700">Proxy e bypass de bloqueios com uma única chamada de API</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O <strong>ScraperAPI</strong> é o pesadelo de quem tenta bloquear scrapers e o sonho de quem precisa de dados em escala. Em um mundo onde sites usam defesas cada vez mais agressivas, o ScraperAPI atua como um escudo, gerenciando toda a infraestrutura complexa de proxies e navegadores para que você receba apenas o HTML limpo ou o dado processado.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Ao remover a fricção técnica de gerenciar IPs banidos e resolver CAPTCHAs, a plataforma permite que desenvolvedores foquem no que realmente importa: extrair inteligência dos dados, sem se preocuparem com a barreira tecnológica da coleta.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o ScraperAPI?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        ScraperAPI é uma malha de proxies inteligente. Ela não apenas fornece endereços IP, mas atua como um orquestrador que escolhe o melhor proxy, o header mais adequado e o momento certo para realizar a requisição. Ela abstrai toda a guerra fria entre scrapers e sites, entregando uma interface REST simples para coletar informações de qualquer lugar da web.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Rotação Automática e Proxies Residenciais</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        O coração do ScraperAPI é sua rede de mais de 40 milhões de IPs. Através de algoritmos avançados, a plataforma rotaciona automaticamente os proxies a cada requisição. Em sites mais resilientes, ela utiliza proxies residenciais reais, tornando praticamente impossível para o servidor destino distinguir o robô de um usuário legítimo.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Renderização de JavaScript e Bypass de CAPTCHA</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Para sites modernos construídos com React, Vue ou Angular, o ScraperAPI oferece renderização via navegadores headless integrados. Além disso, ela resolve automaticamente desafios de CAPTCHA e Cloudflare, garantindo que o seu pipeline de dados nunca pare devido a bloqueios visuais ou estruturais periféricos.
                    </p>
                </section>

                {/* Como funciona - Steps */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Como o ScraperAPI Funciona</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Configure o Endpoint</h3>
                                <p className="text-zinc-700">Passe a URL de destino para a API do ScraperAPI junto com sua chave de acesso e parâmetros desejados.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Orquestração de Proxy</h3>
                                <p className="text-zinc-700">A plataforma escolhe o IP ideal, resolve eventuais CAPTCHAs e lida com a rotação de headers automaticamente.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Renderização Opcional</h3>
                                <p className="text-zinc-700">Se habilitado, o motor renderiza o JavaScript da página para garantir que todo o conteúdo dinâmico seja carregado.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Retorno do HTML</h3>
                                <p className="text-zinc-700">Você recebe o HTML purificado da página destino pronto para ser processado pelo seu scraper ou ferramenta de análise.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Principais funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Principais Funcionalidades</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Automatic Retries</h3>
                            <p className="text-zinc-700">Se uma requisição falha ou é bloqueada, o ScraperAPI tenta automaticamente através de outros proxies até obter sucesso.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Unlimited Bandwidth</h3>
                            <p className="text-zinc-700">Diferente de outros provedores de proxy que cobram por GB, o ScraperAPI oferece planos com banda ilimitada, focando em requisições.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Geolocation</h3>
                            <p className="text-zinc-700">Capacidade de rotear o tráfego através de mais de 50 localizações globais para acessar conteúdos específicos de cada país.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Custom Session Support</h3>
                            <p className="text-zinc-700">Mantenha o mesmo endereço IP por até 10 minutos para navegar em fluxos que exigem login ou persistência de estado.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "99.9% de uptime e taxas de sucesso elevadas mesmo em sites protegidos",
                            "Simplicidade extrema: basta mudar a URL para começar a extrair dados",
                            "Rede global massiva com proxies residenciais de alta qualidade",
                            "Resolução automática de CAPTCHA e bypass de Cloudflare incluso",
                            "Cobrança baseada em requisições bem-sucedidas (você não paga por falhas)",
                            "Totalmente agnóstico a linguagem, fácil de integrar via REST ou Proxy",
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
                            "Custo pode escalar rapidamente para projetos que exigem JS e proxies residenciais",
                            "Você ainda precisa escrever a lógica de parsing (extração dos dados do HTML)",
                            "Planos gratuitos possuem limitações significativas de concorrência",
                            "Dependência de internet estável para chamadas de API de longa espera",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o ScraperAPI?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Desenvolvedores que sofrem com banimentos constantes de IP</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Empresas que realizam monitoramento de preços global</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Projetos que precisam coletar dados de sites com Cloudflare</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Equipes de ciência de dados focadas em extrair conteúdo bruto</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem busca uma ferramenta visual de point-and-click completo</span>
                                </li>
                                <li className="flex gap-2 seal:">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Projetos com orçamentos extremamente apertados (centavos por milha)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Extração local simples de sites sem defesas anti-bot</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Pare de ser bloqueado</h2>
                    <p className="text-lg mb-6 text-zinc-300">Escala seu web scraping hoje com a infraestrutura mais robusta do mercado.</p>
                    <a
                        href="https://www.scraperapi.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Criar conta grátis →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O ScraperAPI se consolidou como uma peça de infraestrutura indispensável na caixa de ferramentas de qualquer engenheiro de dados. Ao remover a imprevisibilidade técnica do scraping moderno, ele permite que a coleta de dados da web seja tão estável e confiável quanto consumir uma API interna de banco de dados.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Seja na sua versão gratuita para testes ou escalando para milhões de páginas por dia no plano enterprise, o ScraperAPI garante que as defesas dos sites não sejam um impeditivo para a inovação e o crescimento dos seus projetos orientados a dados.
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
