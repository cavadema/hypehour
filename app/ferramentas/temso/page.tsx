import Link from "next/link";
import { MegaphoneIcon } from "@heroicons/react/24/solid";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";
import { faqs } from "./constants";

export const metadata = {
    title: "Temso - Monitoramento de Visibilidade de Marca em IA | Review",
    description: "Descubra o Temso: a plataforma líder em AEO e GEO para garantir que sua marca seja citada no ChatGPT, Gemini e Google AI Overviews.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/temso",
    },
};

export default function TemsoPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/temso#breadcrumb",
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
                        "name": "Temso",
                        "item": "https://www.hypehour.com.br/ferramentas/temso"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/temso#software",
                "name": "Temso",
                "description": "Temso é uma plataforma de visibilidade em IA focada em Answer Engine Optimization (AEO) e Generative Engine Optimization (GEO).",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "url": "https://www.temso.ai",
                "creator": {
                    "@type": "Organization",
                    "name": "Temso"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "49",
                    "priceCurrency": "EUR",
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
                    <span className="text-black font-medium">Temso</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white shadow">
                        <MegaphoneIcon className="w-10 h-10" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Temso</h1>
                        <p className="text-lg text-zinc-700">Sua marca citada pelos novos oráculos da IA</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O <strong>Temso</strong> é uma das ferramentas pioneiras na nova fronteira do marketing digital: o **AEO (Answer Engine Optimization)** e o **GEO (Generative Engine Optimization)**. Em um mundo onde usuários estão trocando cliques no Google por respostas diretas no ChatGPT e Perplexity, o Temso garante que sua marca não seja apenas um link, mas a resposta recomendada.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Ao monitorar ativamente como os modelos de linguagem (LLMs) descrevem seu negócio, o Temso fornece a inteligência necessária para ajustar seu conteúdo e parcerias, garantindo que você seja a autoridade citada quando seu cliente busca soluções via IA.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Temso?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Temso é uma plataforma de Business Intelligence focada exclusivamente em visibilidade de IA. Ela funciona como um rastreador de ranking, mas em vez de contar posições no Google, ela analisa menções, referências e citações dentro de ecossistemas como ChatGPT, Gemini, Copilot e Perplexity.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Além do SEO: A Nova Era do AEO/GEO</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        O SEO tradicional foca em palavras-chave e cliques. O Temso introduz o conceito de **dominação de resposta**. Ele identifica quais fontes de informação as IAs estão usando para responder perguntas sobre o seu nicho. Se a IA está citando seu concorrente, o Temso mostra por que e como você pode mudar essa narrativa a seu favor.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Benchmarking de Citações</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Com as ferramentas de benchmarking do Temso, você recebe uma nota de performance comparativa. Descubra se sua marca é descrita de forma mais profissional ou técnica que o concorrente e quais atributos positivos a IA destaca sobre você.
                    </p>
                </section>

                {/* Como funciona - Steps */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Como o Temso Funciona</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Defina seus Prompts</h3>
                                <p className="text-zinc-700">Configure as perguntas mais relevantes para o seu negócio que usuários costumam fazer à IA.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Rastreamento Multimodelo</h3>
                                <p className="text-zinc-700">O Temso consulta simultaneamente ChatGPT, Gemini, Perplexity e outros em busca de menções.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Análise de Fontes</h3>
                                <p className="text-zinc-700">Identifique quais sites, blogs ou PDFs a IA está usando como fonte oficial para responder sobre sua marca.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Otimização Direcionada</h3>
                                <p className="text-zinc-700">Use os insights para preencher lacunas de conteúdo e garantir que sua marca seja a recomendação número 1 da IA.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Principais funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Principais Funcionalidades</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">AI Visibility Tracking</h3>
                            <p className="text-zinc-700">Monitoramento em tempo real de citações em voz e texto em todos os grandes modelos de linguagem.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Gap Analysis (Analise de Lacunas)</h3>
                            <p className="text-zinc-700">Descubra onde seus concorrentes estão sendo citados e receba recomendações para capturar essa visibilidade.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Narrative Insights</h3>
                            <p className="text-zinc-700">Entenda a 'personalidade' que as IAs atribuem à sua marca, permitindo ajustes de branding mais precisos.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Conversational Reporting</h3>
                            <p className="text-zinc-700">Interaja com seus próprios dados através de um assistente de IA para gerar relatórios de performance customizados.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Primeira plataforma focada 100% no novo ecossistema de busca por IA",
                            "Rastreamento unificado em múltiplos LLMs (ChatGPT, Gemini, etc)",
                            "Dashboards intuitivos para equipes de marketing e founders",
                            "Geração de insights práticos para estratégias de AEO/GEO",
                            "Benchmarking direto com concorrentes em tempo real",
                            "Monitoramento global e em diversos idiomas",
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
                            "Mercado muito novo, ainda em constante evolução tecnológica",
                            "Planos profissionais podem ter custo elevado para microempresas",
                            "Otimizar para IA exige paciência, pois depende do treino de novos modelos",
                            "Atualmente focado mais em marcas e produtos já conhecidos ou citados",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Temso?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Agências de SEO buscando inovação em AEO/GEO</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Founders de startups SaaS e tecnologia</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Diretores de Marketing de marcas globais</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Equipes de PR focadas em autoridade digital</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Comércio local sem presença digital nacional</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem busca apenas geração de texto rápida</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Usuários que não acompanham métricas avançadas</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Sua marca no centro das IA's</h2>
                    <p className="text-lg mb-6 text-zinc-300">Monitore sua visibilidade no ChatGPT e domine o futuro da busca com o Temso</p>
                    <a
                        href="https://www.temso.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Explorar o Temso →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Temso não é apenas um luxo, mas uma necessidade estratégica para a era da inteligência artificial. Ignorar como sua marca é percebida pelos grandes modelos de linguagem hoje é o mesmo que ignorar o Google há 20 anos.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Ao oferecer dados concretos sobre AEO e GEO, o Temso capacita equipes de marketing a saírem do 'escuro' e garantirem seu espaço como a solução preferida das inteligências artificiais que moldam as decisões de compra modernas.
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
