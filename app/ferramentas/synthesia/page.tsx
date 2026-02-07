import Link from "next/link";
import { toolMetadata, faqs } from "./constants";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
    title: `${toolMetadata.nome} - Gerador de Vídeos com IA | Análise e Review`,
    description: toolMetadata.descricao,
    alternates: {
        canonical: `https://www.hypehour.com.br/ferramentas/synthesia`,
    },
};

export default function SynthesiaPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": `https://www.hypehour.com.br/ferramentas/synthesia#breadcrumb`,
                "itemListElement": toolMetadata.breadcrumb.map((item, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "name": item.nome,
                    "item": `https://www.hypehour.com.br${item.url}`
                }))
            },
            {
                "@type": "SoftwareApplication",
                "@id": `https://www.hypehour.com.br/ferramentas/synthesia#software`,
                "name": toolMetadata.nome,
                "description": toolMetadata.descricao,
                "applicationCategory": "MultimediaApplication",
                "operatingSystem": "Web",
                "url": toolMetadata.url,
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "category": "Freemium"
                }
            },
            {
                "@type": "FAQPage",
                "@id": `https://www.hypehour.com.br/ferramentas/synthesia#faq`,
                "mainEntity": faqs.map(faq => ({
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
                    {toolMetadata.breadcrumb.map((item, index) => (
                        <div key={item.url} className="flex items-center gap-2">
                            {index > 0 && <span className="text-zinc-400">/</span>}
                            {index < toolMetadata.breadcrumb.length - 1 ? (
                                <Link href={item.url} className="hover:text-black transition">
                                    {item.nome}
                                </Link>
                            ) : (
                                <span className="text-black font-medium">{item.nome}</span>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        S
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">{toolMetadata.nome}</h1>
                        <p className="text-lg text-zinc-700">{toolMetadata.descricao}</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O Synthesia é o pioneiro e líder global na criação de vídeos com avatares de inteligência artificial. A plataforma permite que empresas e criadores transformem roteiros de texto em vídeos de alta qualidade, apresentados por avatares realistas que falam e se expressam como seres humanos, eliminando a necessidade de filmagens complexas.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Utilizado por milhares de empresas (incluindo grandes nomes da Fortune 500), o Synthesia é a escolha ideal para treinamentos, apresentações corporativas, newsletters em vídeo e comunicações em escala que exigem um toque humano digital.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Synthesia?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        Synthesia é uma plataforma de 'AIVideo' que utiliza inteligência artificial generativa para criar apresentadores digitais. Ela combina visão computacional avançada com síntese de voz para gerar movimentos labiais e expressões faciais perfeitamente sincronizados com o roteiro fornecido pelo usuário.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        A plataforma funciona inteiramente no navegador e oferece uma experiência de edição simplificada, permitindo adicionar fundos, textos, formas e mídias de apoio, transformando a criação de vídeos em um processo tão simples quanto montar uma apresentação de slides.
                    </p>
                </section>

                {/* Como funciona */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Escreva seu roteiro</h3>
                                <p className="text-zinc-700">Cole seu texto no editor e escolha entre mais de 120 idiomas e opções de vozes naturais.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Escolha seu avatar</h3>
                                <p className="text-zinc-700">Selecione entre mais de 140 avatares de IA diversos ou crie seu próprio avatar personalizado.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Customize o cenário</h3>
                                <p className="text-zinc-700">Adicione fundos, elementos visuais, músicas e layouts para alinhar o vídeo à sua identidade visual.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Gere e compartilhe</h3>
                                <p className="text-zinc-700">Processe o vídeo e exporte em 1080p, ou compartilhe via link direto ou código de incorporação.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Principais Funcionalidades</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Avatares de IA Realistas</h3>
                            <p className="text-zinc-700">Acesso a uma biblioteca de mais de 140 avatares baseados em pessoas reais, com micro-expressões e movimentos naturais.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Dublagem e Tradução Automática</h3>
                            <p className="text-zinc-700">Traduza vídeos inteiros com um clique, mantendo a sincronia labial e a entonação da voz original em dezenas de idiomas.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Avatares Personalizados</h3>
                            <p className="text-zinc-700">Crie sua própria versão digital para apresentações pessoais, garantindo uma marca única e autoridade visual.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens do Synthesia</h2>
                    <div className="grid gap-4">
                        {[
                            "Economia de até 80% em custos de produção comparado a filmagens tradicionais",
                            "Criação de vídeos em escala global com suporte a 120+ idiomas",
                            "Facilidade de atualização: mude o roteiro e gere o vídeo novamente em minutos",
                            "Consistência visual e de áudio em todos os vídeos da empresa",
                            "Interface simples que dispensa conhecimentos técnicos de edição de vídeo",
                            "Diretrizes éticas robustas e certificação SOC2 para segurança corporativa"
                        ].map((advantage, index) => (
                            <div key={index} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                                <span className="text-black font-bold text-lg flex-shrink-0">✓</span>
                                <p className="text-zinc-700">{advantage}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Considerações */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Considerações e Desvantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Início do vale da estranheza (uncanny valley) em alguns movimentos laterais",
                            "Dependência total da qualidade das ferramentas de síntese de voz",
                            "Planos profissionais podem ter um custo elevado para uso individual",
                            "Menos controle criativo artístico comparado a uma filmagem com diretor e câmera"
                        ].map((disadvantage, index) => (
                            <div key={index} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg text-zinc-700">
                                <span className="font-bold text-lg flex-shrink-0">⚠</span>
                                <p>{disadvantage}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Ideal para */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Synthesia?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3 text-zinc-900 border-b pb-2">Ideal para:</h3>
                            <ul className="space-y-2 mt-4">
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Equipes de T&D (Treinamento e Desenvolvimento)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Times de Vendas e Sucesso do Cliente</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Comunicação Corporativa e RH</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Educadores e Escolas de idiomas</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3 border-b border-zinc-300 pb-2">Não é ideal para:</h3>
                            <ul className="space-y-2 mt-4">
                                <li className="flex gap-2 text-zinc-700">
                                    <span>✕</span>
                                    <span>Cinema e produções de alta drama</span>
                                </li>
                                <li className="flex gap-2 text-zinc-700">
                                    <span>✕</span>
                                    <span>Pessoas que preferem a autenticidade da gravação física lenta</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Crie vídeos incríveis em escala</h2>
                    <p className="text-lg mb-6 text-zinc-300">Descubra por que a Synthesia é a escolha das maiores empresas do mundo.</p>
                    <a
                        href={toolMetadata.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Criar vídeo com Synthesia →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Synthesia continua sendo o padrão ouro para produção de vídeos com avatares de IA. Sua facilidade de uso, aliada à qualidade crescente dos avatares e recursos de tradução, torna-o uma ferramenta indispensável para empresas que precisam se comunicar globalmente de forma rápida e profissional.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se o seu objetivo é criar conteúdo educativo, informacional ou corporativo com consistência e agilidade, o Synthesia deve estar no topo da sua lista de ferramentas de IA.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />

                {/* Ferramentas Similares */}
                <SimilarTools />
            </div>
        </main>
    );
}
