import Link from "next/link";
import { MegaphoneIcon } from "@heroicons/react/24/solid";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";
import { faqs } from "./constants";

export const metadata = {
    title: "Writesonic - IA para Escrita, SEO e Automação de Conteúdo | Review",
    description: "Conheça o Writesonic: a ferramenta líder para criar artigos otimizados, cópias de anúncios e monitorar sua marca em IAs. Veja preços e recursos.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/writesonic",
    },
};

export default function WritesonicPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/writesonic#breadcrumb",
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
                        "name": "Writesonic",
                        "item": "https://www.hypehour.com.br/ferramentas/writesonic"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/writesonic#software",
                "name": "Writesonic",
                "description": "Writesonic é uma plataforma de IA para marketing que combina geração de conteúdo de alta qualidade com automação e visibilidade de SEO.",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "url": "https://writesonic.com",
                "creator": {
                    "@type": "Organization",
                    "name": "Writesonic"
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
                    <span className="text-black font-medium">Writesonic</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white shadow">
                        <MegaphoneIcon className="w-10 h-10" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Writesonic</h1>
                        <p className="text-lg text-zinc-700">A plataforma definitiva para marketing e SEO com IA</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O <strong>Writesonic</strong> consolidou-se em 2026 como a ferramenta mais completa para equipes que levam o SEO a sério. Não se trata apenas de "gerar texto", mas de criar uma infraestrutura de conteúdo inteligente que aprende com seu site, analisa a concorrência e garante que sua marca seja encontrada tanto no Google quanto nos novos assistentes de IA.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Com recursos que vão desde o <strong>AI Article Writer 6.0</strong> até o inovador rastreamento de visibilidade GEO, o Writesonic oferece a ponte perfeita entre a produção de alta escala e a precisão estratégica exigida pelo marketing moderno.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Writesonic?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Writesonic é um ecossistema de conteúdo baseado em IA que integra as tecnologias mais avançadas (como GPT-4 e Claude) em ferramentas especializadas para diferentes necessidades de marketing. Ele combina escrita de blogs, criação de anúncios, chatbots de atendimento e automação de SEO em uma única interface intuitiva.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Escrita-Prime para SEO</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        O grande diferencial do Writesonic é sua "arquitetura focada em SEO". Suas ferramentas são treinadas para incorporar automaticamente palavras-chave semânticas, estruturas de cabeçalho otimizadas e dados factuais atualizados via integração em tempo real com o Google Search, evitando os problemas comuns de desatualização de outras IAs.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Visibilidade na Era das IAs (GEO)</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Além do SEO tradicional, o Writesonic introduziu ferramentas de <strong>Generative Engine Optimization (GEO)</strong>. Isso permite que marcas monitorem como estão sendo citadas em modelos como ChatGPT e Gemini, permitindo ajustes estratégicos no conteúdo para garantir maior autoridade nas respostas geradas por IA.
                    </p>
                </section>

                {/* Como funciona - Steps */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Como utilizar o Writesonic</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Escolha seu Template</h3>
                                <p className="text-zinc-700">Selecione entre mais de 100 templates especializados: artigos, anúncios, e-mails ou posts sociais.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Defina sua Estratégia de SEO</h3>
                                <p className="text-zinc-700">Insira suas palavras-chave ou use o SEO AI Agent para descobrir oportunidades e analisar competidores em tempo real.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Gere e Refine</h3>
                                <p className="text-zinc-700">A IA produzirá uma versão completa do conteúdo. Use o Sonic Editor para fazer ajustes finos e adicionar seu toque pessoal.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Publique Automaticamente</h3>
                                <p className="text-zinc-700">Exporte diretamente para o WordPress ou outras plataformas integradas com apenas um clique.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Principais funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Funcionalidades de Destaque</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">AI Article Writer 6.0</h3>
                            <p className="text-zinc-700">Criação de artigos de 2.000+ palavras com profundidade factual, estrutura lógica e otimização total de SEO.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3"> Chatsonic com Dados ao Vivo</h3>
                            <p className="text-zinc-700">Um assistente de conversação que acessa a web em tempo real para fornecer informações precisas e atuais.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Botsonic: Chatbots Personalizados</h3>
                            <p className="text-zinc-700">Crie e integre agentes de atendimento inteligentes treinados na base de conhecimento da sua própria empresa.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Agente de SEO Automático</h3>
                            <p className="text-zinc-700">Ferramenta que cuida de toda a estratégia: de auditorias de performance até a geração de briefing de conteúdo.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            " Integração nativa com dados em tempo real do Google Search",
                            "Melhor custo-benefício para alto volume de conteúdo SEO",
                            "Ferramentas exclusivas para visibilidade em buscas de IA (GEO)",
                            "Suporte especializado para mais de 25 idiomas",
                            "Plano gratuito flexível para começar sem riscos",
                            "Exportação direta para WordPress facilitando o deploy",
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
                            "Pode exigir revisão manual para garantir o tom de voz da marca",
                            "Planos de SEO avançados podem ser caros para freelancers",
                            "Curva de aprendizado inicial devido à grande quantidade de recursos",
                            "Alguns modelos de IA de elite exigem créditos extras no plano básico",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Writesonic?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Analistas de SEO e agências de inbound marketing</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Gerentes de e-commerce (descrições e anúncios)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Criadores de conteúdo que precisam de volume e escala</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Pequenas empresas cuidando do próprio marketing digital</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Escrita literária ou criativa altamente subjetiva</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem busca apenas um chat básico sem ferramentas de marketing</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Usuários sem interesse nenhum em SEO ou ranking</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Escale seu marketing com IA</h2>
                    <p className="text-lg mb-6 text-zinc-300">Crie conteúdo que ranqueia 10x mais rápido com as ferramentas do Writesonic</p>
                    <a
                        href="https://writesonic.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Acessar Writesonic →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        Em um mundo onde a produção de conteúdo tornou-se saturada, o Writesonic destaca-se por oferecer ferramentas que não apenas escrevem, mas entendem a ciência por trás da descoberta orgânica.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Seja você uma agência buscando produtividade ou uma startup faturando via orgânico, o investimento no Writesonic oferece o retorno mais sólido para quem precisa dominar as SERPs tradicionais e as novas ferramentas de busca por IA.
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
