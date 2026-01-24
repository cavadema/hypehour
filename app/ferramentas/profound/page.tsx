import Link from "next/link";
import { MegaphoneIcon } from "@heroicons/react/24/solid";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";
import { faqs } from "./constants";

export const metadata = {
    title: "Profound - Visibilidade de IA e GEO para Empresas | Review",
    description: "Conheça o Profound: a plataforma enterprise líder em monitorar citações de marca no ChatGPT, Grok, Meta AI e Google Gemini. Veja recursos e planos.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/profound",
    },
};

export default function ProfoundPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/profound#breadcrumb",
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
                        "name": "IA para Marketing",
                        "item": "https://www.hypehour.com.br/ia-para-marketing"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Profound",
                        "item": "https://www.hypehour.com.br/ferramentas/profound"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/profound#software",
                "name": "Profound",
                "description": "Profound é uma plataforma enterprise de visibilidade em IA focada em Generative Engine Optimization (GEO) e monitoramento de marca em Answer Engines.",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "url": "https://tryprofound.com",
                "creator": {
                    "@type": "Organization",
                    "name": "Profound"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "category": "Freemium"
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
                    <Link href="/ia-para-marketing" className="hover:text-black transition">IA para Marketing</Link>
                    <span className="text-zinc-400">/</span>
                    <span className="text-black font-medium">Profound</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white shadow">
                        <MegaphoneIcon className="w-10 h-10" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Profound</h1>
                        <p className="text-lg text-zinc-700">Dominando o marketing na era da Superinteligência</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O <strong>Profound</strong> posiciona-se em 2026 como a plataforma de referência para empresas que buscam visibilidade total no novo ecossistema de busca por IA. Com um foco agressivo no mercado enterprise, a ferramenta vai além do SEO tradicional, oferecendo o que chamam de "marketing para Superinteligência".
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Seja monitorando menções no Grok e Meta AI ou analisando como sua marca é recomendada em experiências de compra integradas (ChatGPT Shopping), o Profound fornece a segurança e os dados necessários para que grandes organizações não percam relevância na transição para a web generativa.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Profound?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Profound (tryprofound.com) é uma plataforma de monitoramento e otimização de IA (GEO/AEO) projetada para orquestrar a presença de uma marca em múltiplos agentes de IA. Diferente de ferramentas mais simples, o Profound oferece dashboards consolidados para CEOs e diretores de marketing acompanharem o "Sentiment Analysis" e o volume de citações em tempo real nos principais LLMs do mercado.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Monitoramento Multimodelo de Elite</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Um dos maiores destaques do Profound é sua capacidade de monitorar modelos que muitas ferramentas ignoram, como o **Grok (xAI)** e a **Meta AI**. Isso garante uma visão 360º de como a marca está sendo discutida em redes sociais, chats de suporte e assistentes de voz integrados.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">O Módulo de Shopping via IA</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Para o varejo, o Profound oferece um módulo exclusivo de **Shopping Analytics**. Ele revela como as IAs estão posicionando e classificando produtos de consumo, permitindo que marcas de e-commerce ajustem seus dados estruturados e reviews parceiros para aparecerem como a "melhor escolha" nas recomendações de compra automatizadas.
                    </p>
                </section>

                {/* Como funciona - Steps */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Como o Profound Implementa GEO</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Escaneamento Global</h3>
                                <p className="text-zinc-700">A plataforma realiza milhões de consultas mensais em mais de 10 Answer Engines para mapear a presença da sua marca.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Análise de Sentiment & Narrativa</h3>
                                <p className="text-zinc-700">A IA do Profound analisa o tom de voz das respostas dos chatbots para garantir que a percepção da marca seja positiva.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Engenharia de Citação</h3>
                                <p className="text-zinc-700">Identifique quais blogs e publishers estão alimentando os LLMs e foque seu PR e SEO nessas fontes específicas.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Otimização de Conversão em IA</h3>
                                <p className="text-zinc-700">Acompanhe métricas de 'clicabilidade' e CTR dentro de citações de IA para converter buscas em vendas reais.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Principais funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Funcionalidades de Classe Enterprise</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Answer Engine Tracking</h3>
                            <p className="text-zinc-700">Monitoramento nativo em ChatGPT, Perplexity, Gemini, Grok, Meta AI, Copilot e AI Overviews.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Conversation Explorer</h3>
                            <p className="text-zinc-700">Entenda as perguntas reais que milhões de pessoas estão fazendo para otimizar seu Answer Engine Optimization.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">AI Shopping Placement</h3>
                            <p className="text-zinc-700">Módulo exclusivo para e-commerce analisar o posicionamento de produtos em assistentes de compra inteligentes.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Enterprise Security (SOC 2)</h3>
                            <p className="text-zinc-700">Conformidade total, suporte a SSO e ferramentas de backup automatizado para grandes orçamentos de marketing.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Cobertura única de mais de 10 modelos de IA (incluindo Grok e Meta AI)",
                            "Foco total em segurança e compliance para grandes empresas (Fortune 500)",
                            "Capacidades avançadas de sentiment analysis e rastreamento de narrativa",
                            "Módulo de shopping especializado para dominar o e-commerce em IA",
                            "Planos iniciais gratuitos para testes rápidos de visibilidade",
                            "Integração premium com suporte a SSO e account management dedicado",
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
                            "Preços de nível enterprise podem ser proibitivos para freelancers",
                            "O plano 'Growth' possui custo por prompt significativamente mais alto que a média",
                            "Atualmente menos configurável para agências que gerenciam dezenas de contas pequenas",
                            "Dashboard focado em insights macro, podendo faltar detalhamento micro para SEOs",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Profound?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Diretores de Marketing de grandes empresas globais</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Equipes de e-commerce focadas em dominar o shopping por IA</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Especialistas em reputação digital e brand equity</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Organizações que exigem SOC 2 e SSO para suas ferramentas</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Consultores de SEO independentes com orçamentos baixos</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem busca apenas monitorar citações no Google tradicional</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Pequenas agências locais sem foco em tecnologia enterprise</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Domine o comércio em IA</h2>
                    <p className="text-lg mb-6 text-zinc-300">Monitore sua marca em escala enterprise com o poder da plataforma Profound</p>
                    <a
                        href="https://tryprofound.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Acesse o Profound →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        Em um mundo onde as decisões de consumo estão sendo delegadas a assistentes inteligentes, o Profound oferece a transparência necessária para que as marcas saibam exatamente onde estão e como estão sendo percebidas.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se para o SEO tradicional o Google era a única peça do quebra-cabeça, para o GEO o tabuleiro é muito maior. O Profound fornece os dados precisos para grandes marcas jogarem esse jogo em alto nível e garantirem seu espaço na 'preferência' das máquinas.
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
