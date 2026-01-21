import Link from "next/link";
import FAQSection from "./FAQSection";
import { faqs } from "./constants";

export const metadata = {
    title: "Grafana AI - Observabilidade Inteligente e Dashboards | Análise",
    description: "Conheça os recursos de IA do Grafana: detecção de anomalias, assistente inteligente e diagnóstico automatizado de incidentes.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/grafana",
    },
};

export default function GrafanaPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/grafana#breadcrumb",
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
                        "name": "IA para Desenvolvedores",
                        "item": "https://www.hypehour.com.br/ia-para-desenvolvedores"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Grafana",
                        "item": "https://www.hypehour.com.br/ferramentas/grafana"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/grafana#software",
                "name": "Grafana Cloud AI",
                "description": "Uma plataforma de observabilidade líder que integra IA e Machine Learning para detecção de anomalias, previsões e assistência inteligente em incidentes.",
                "applicationCategory": "DeveloperApplication",
                "operatingSystem": "Web, Windows, macOS, Linux",
                "url": "https://grafana.com/products/cloud/ai/",
                "creator": {
                    "@type": "Organization",
                    "name": "Grafana Labs"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "19.00",
                    "priceCurrency": "USD",
                    "category": "Paid"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map((faq: { question: string; answer: string }) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
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
                    <Link href="/ia-para-desenvolvedores" className="hover:text-black transition">IA para Desenvolvedores</Link>
                    <span className="text-zinc-400">/</span>
                    <span className="text-black font-medium">Grafana</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#F47A20] rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        Gr
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Grafana Cloud AI</h1>
                        <p className="text-lg text-zinc-700">A observabilidade moderna impulsionada por IA e Machine Learning</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O <strong>Grafana</strong> é mundialmente conhecido por ser a ferramenta padrão para visualização de dados e monitoramento. No entanto, a plataforma evoluiu muito além de simples dashboards. Com o <strong>Grafana Cloud AI</strong>, a observabilidade se torna proativa e inteligente.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Ao integrar recursos avançados de Machine Learning e Agentes de IA (como o Grafana Assistant e o Sift), a plataforma agora é capaz de descobrir sozinhas a causa raiz de incidentes, prever saturação de recursos e reduzir o ruído de alertas que sobrecarregam as equipes de infraestrutura (SRE).
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é a IA no Grafana?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Não se trata de apenas um chat; é um ecossistema de recursos inteligentes. A IA no Grafana atua em três frentes principais: detecção (encontrar problemas), diagnóstico (entender por que aconteceu) e assistência (ajudar o usuário a interagir com os dados usando linguagem natural).
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">SRE Agent: Diagnóstico Automatizado</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Imagine ter um especialista analisando centenas de logs e métricas no momento em que um erro acontece. O componente <strong>Sift</strong> faz exatamente isso: ele correlaciona sinais de diferentes fontes para identificar se um deploy recente ou um pico de demanda é o vilão, economizando horas de investigação manual (MTTR).
                    </p>
                </section>

                {/* Principais funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Funcionalidades Inteligentes</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Grafana Assistant</h3>
                            <p className="text-zinc-700">Um copiloto interativo que ajuda a escrever consultas complexas (PromQL, LogQL), criar dashboards do zero e explicar o que os gráficos estão mostrando.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Adaptive Telemetry</h3>
                            <p className="text-zinc-700">A IA monitora quais métricas são realmente usadas em alertas e dashboards e sugere a otimização ou remoção de dados inúteis, reduzindo drasticamente os custos de nuvem.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Auto-Generated Anomaly Detection</h3>
                            <p className="text-zinc-700">Sem precisar configurar limites manuais complexos, a IA aprende o ciclo semanal do seu sistema e alerta apenas quando ocorre um comportamento verdadeiramente fora do comum.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">LLM Observability</h3>
                            <p className="text-zinc-700">Ferramentas prontas para monitorar suas próprias aplicações de IA, controlando custos de tokens, latência de modelos e qualidade das respostas.</p>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Aplicações Práticas</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Monitoramento de Infraestrutura",
                            "Diagnóstico de Incidentes SRE",
                            "Previsão de Capacidade (Data Center)",
                            "Otimização de Custos de Métricas",
                            "Observabilidade de Kubernetes",
                            "Monitoramento de APIs e Microserviços",
                            "Análise de Logs com IA",
                            "Rastreamento de Erros em Tempo Real",
                            "Criação Ágil de Dashboards",
                            "Monitoramento de Performance (APM)",
                            "Gestão de Alertas Inteligentes",
                            "Auditoria de Segurança e Acessos",
                            "Visualização de Dados de IoT",
                            "Dashboards de Business Intelligence",
                            "Monitoramento de LLMs Próprios",
                            "Automação de Runbooks",
                        ].map((item, index) => (
                            <div key={index} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition">
                                <p className="text-zinc-700 text-sm">{item}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Integração perfeita com o ecossistema open-source mais usado do mundo",
                            "Redução significativa da fadiga de alertas com machine learning",
                            "Diagnóstico de causa raiz muito mais rápido com o SRE Agent",
                            "Otimização real de custos de armazenamento e ingestão de dados",
                            "Interface amigável para usuários não-técnicos usarem telemetria",
                            "Escalabilidade massiva para empresas globais",
                        ].map((advantage, index) => (
                            <div key={index} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                                <span className="text-black font-bold text-lg flex-shrink-0">✓</span>
                                <p className="text-zinc-700">{advantage}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Desvantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Considerações</h2>
                    <div className="grid gap-4">
                        {[
                            "Os recursos mais potentes de IA são exclusivos da versão Cloud (Paga)",
                            "Exige uma configuração correta de telemetria inicial para a IA ser eficaz",
                            "Curva de aprendizado pode ser íngreme para extrair o máximo das métricas",
                            "Custos podem escalar rapidamente em ambientes com milhões de métricas",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Grafana Cloud?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Equipes de SRE e DevOps que gerenciam sistemas críticos</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Empresas que precisam centralizar logs, métricas e traces</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Startups que querem automatizar o monitoramento desde o início</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Desenvolvedores de IA que precisam observar seus modelos</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Pode não ser ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Pequenas aplicações simples com pouca necessidade de monitoramento</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Empresas com restrições severas de mover dados de logs para a nuvem</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Evolua sua observabilidade com IA</h2>
                    <p className="text-lg mb-6 text-zinc-300">Comece no plano gratuito do Grafana Cloud e teste os recursos inteligentes hoje mesmo.</p>
                    <a
                        href="https://grafana.com/products/cloud/ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-[#F47A20] text-white font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Criar Conta Grátis no Grafana Cloud →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Grafana deixou de ser apenas uma 'coleção de gráficos bonitos' para se tornar o cérebro da infraestrutura moderna. A integração de IA e Machine Learning não é um luxo, mas uma necessidade para lidar com a complexidade dos sistemas atuais e a explosão de dados de telemetria.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se a sua equipe gasta muito tempo investigando por que um sistema caiu ou tentando entender dashboards confusos, o Grafana Cloud AI é a ferramenta que trará a clareza e a automação necessárias para o seu dia a dia.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
