import Link from "next/link";
import { MegaphoneIcon } from "@heroicons/react/24/solid";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";
import { faqs } from "./constants";

export const metadata = {
    title: "First Answer - Visibilidade e Otimização para IA (GEO) | Review",
    description: "Descubra como o First Answer ajuda sua marca a dominar as respostas do ChatGPT, Gemini e Google AI Overviews através de monitoramento GEO e AEO.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/first-answer",
    },
};

export default function FirstAnswerPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/first-answer#breadcrumb",
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
                        "name": "First Answer",
                        "item": "https://www.hypehour.com.br/ferramentas/first-answer"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/first-answer#software",
                "name": "First Answer",
                "description": "First Answer é uma plataforma de visibilidade em IA focada em Generative Engine Optimization (GEO) e Answer Engine Optimization (AEO).",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "url": "https://firstanswer.ai/br/",
                "creator": {
                    "@type": "Organization",
                    "name": "First Answer"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "59",
                    "priceCurrency": "USD",
                    "category": "Premium"
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
                    <span className="text-black font-medium">First Answer</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white shadow">
                        <MegaphoneIcon className="w-10 h-10" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">First Answer</h1>
                        <p className="text-lg text-zinc-700">Seja a primeira e única resposta que os usuários recebem da IA</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O <strong>First Answer</strong> é uma plataforma projetada para o novo paradigma do marketing digital: um mundo onde o usuário não quer uma lista de links, mas sim uma resposta direta e confiável. O objetivo central da ferramenta é garantir que, quando as IAs responderem, elas citem a **sua marca** como a solução principal.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Ao unir métricas de visibilidade em tempo real com análises profundas de sentimento e citações, o First Answer permite que profissionais de marketing saiam das suposições e entrem em uma estratégia de **GEO (Generative Engine Optimization)** baseada em dados concretos.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o First Answer?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        First Answer AI é um hub de inteligência para visibilidade em IA. Ele rastreia interações reais dentro dos principais LLMs do mercado para identificar a frequência, o contexto e a autoridade com que uma marca é mencionada. É a ferramenta essencial para quem quer ganhar o 'Share of Voice' dentro das conversas geradas por inteligência artificial.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">A Luta pela "Primeira Resposta"</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Diferente do SEO que luta pelas primeiras posições da SERP, o First Answer luta para que você seja a base da conclusão da IA. Se um usuário pergunta 'Como resolver [Problema X]?', o First Answer ajuda sua marca a ser o exemplo usado pela IA para ilustrar a solução, gerando uma confiança e autoridade sem precedentes.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Monitoramento de Sentimento IA</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Não basta apenas ser citado; é preciso ser citado de forma positiva. O First Answer analisa o tom das IA ao falar de você versus seus competidores, permitindo correções de narrativa rápidas e precisas através de ajustes no seu conteúdo público e fontes de autoridade.
                    </p>
                </section>

                {/* Como funciona - Steps */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Como o First Answer Otimiza sua Visibilidade</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Audit de Visibilidade Inicial</h3>
                                <p className="text-zinc-700">A ferramenta analisa qual a sua presença atual nos chatbots e Answer Engines com base nos prompts configurados.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Identificação de Competidores</h3>
                                <p className="text-zinc-700">Veja quais marcas estão sendo 'as queridinhas' das IAs e descubra quais fontes de informação elas estão explorando.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Plano de Ação GEO</h3>
                                <p className="text-zinc-700">Receba recomendações de palavras-chave IA e tipos de conteúdo que têm maior probabilidade de serem citados como fonte oficial.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Loop de Monitoramento</h3>
                                <p className="text-zinc-700">Acompanhe diariamente o crescimento da sua visibilidade e o impacto das mudanças realizadas no seu share-of-voice IA.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Principais funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Funcionalidades Chave</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Multi-LLM Monitoring</h3>
                            <p className="text-zinc-700">Rastreie sua marca simultaneamente no ChatGPT, Google AI Overviews, Gemini, Bing e Perplexity.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Context & Sentiment Analysis</h3>
                            <p className="text-zinc-700">Análise granular de como a IA percebe e descreve seus produtos, revelando forças e fraquezas de percepção.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Citation Tracker</h3>
                            <p className="text-zinc-700">Descubra as fontes externas que estão alimentando as respostas da IA sobre seu setor e aprenda a dominá-las.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">AI Competitive Landscape</h3>
                            <p className="text-zinc-700">Mapeamento dinâmico da concorrência para identificar onde eles estão vulneráveis nas respostas de IA.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Especialização em capturar a 'Citation Economy' das novas IAs",
                            "Relatórios visuais e acionáveis ideais para reuniões de marketing",
                            "Planos acessíveis para startups e times de médio porte",
                            "Monitoramento preciso do Google AI Overviews (SGE)",
                            "Fácil configuração e curva de aprendizado rápida",
                            "Métricas claras de crescimento de autoridade conversacional",
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
                            "Os planos básicos possuem limitações no número total de prompts",
                            "Exige uma estratégia ativa de conteúdo para ver resultados no monitoramento",
                            "Alguns modelos mais novos (como Grok) podem ter suporte limitado conforme a versão",
                            "Dashboard focado em branding e marketing, menos foco em infraestrutura técnica",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o First Answer?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Startups SaaS querendo ganhar autoridade via IA</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Agências de Marketing de Performance e Branding</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Gerentes de Produto focados em descoberta orgânica</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Times de SEO que precisam provar ROI em novos canais</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Negócios exclusivamente baseados em tráfego local físico</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Empresas que não investem em nenhuma produção de conteúdo</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Usuários buscando apenas automação de chat de suporte interno</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Seja a primeira resposta</h2>
                    <p className="text-lg mb-6 text-zinc-300">Garanta que as IAs escolham a sua marca como solução oficial através do First Answer</p>
                    <a
                        href="https://firstanswer.ai/br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Acesse o First Answer →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        Em um futuro onde a navegação tradicional por páginas de resultados de busca será um nicho, dominar o canal conversacional não é opcional. O First Answer democratiza o acesso a dados de visibilidade de IA que antes eram restritos a grandes corporações.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Seja monitorando competidores ou refinando sua autoridade GEO, a ferramenta oferece o equilíbrio perfeito entre eficiência técnica e insights de marketing, garantindo que sua marca sobreviva e prospere na era das respostas instantâneas.
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
