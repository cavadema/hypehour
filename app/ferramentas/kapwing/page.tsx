import Link from "next/link";
import { toolMetadata, faqs } from "./constants";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
    title: `${toolMetadata.nome} - Editor de Vídeo com IA | Análise e Review`,
    description: toolMetadata.descricao,
    alternates: {
        canonical: `https://www.hypehour.com.br/ferramentas/kapwing`,
    },
};

export default function KapwingPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": `https://www.hypehour.com.br/ferramentas/kapwing#breadcrumb`,
                "itemListElement": toolMetadata.breadcrumb.map((item, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "name": item.nome,
                    "item": `https://www.hypehour.com.br${item.url}`
                }))
            },
            {
                "@type": "SoftwareApplication",
                "@id": `https://www.hypehour.com.br/ferramentas/kapwing#software`,
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
                "@id": `https://www.hypehour.com.br/ferramentas/kapwing#faq`,
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
                        K
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">{toolMetadata.nome}</h1>
                        <p className="text-lg text-zinc-700">{toolMetadata.descricao}</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O Kapwing é um dos editores de vídeo online mais populares do mundo, conhecido pela sua facilidade de uso e poderosos recursos de automação por inteligência artificial. Ele foi desenhado para criadores de conteúdo que precisam de agilidade e não querem lidar com as complexidades (e o peso) dos softwares de edição tradicionais.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Seja para legendar um vídeo automaticamente, remover o fundo de uma gravação sem chroma key ou extrair clipes virais de um conteúdo longo, o Kapwing oferece um ecossistema completo que roda direto no navegador, permitindo colaboração em tempo real entre equipes.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Kapwing?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Kapwing é um editor multimídia baseado em nuvem que simplifica a criação e edição de vídeos, GIFs e imagens. O que o diferencia é a integração fluida de ferramentas de IA que resolvem problemas comuns de edição em segundos. Ele combina uma linha do tempo intuitiva com recursos de ponta, tornando-o acessível tanto para amadores quanto para profissionais de marketing.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        A plataforma é amplamente utilizada para criar conteúdo para TikTok, Instagram e YouTube, pois permite redimensionar vídeos, adicionar elementos dinâmicos e exportar projetos rapidamente, tudo com o apoio de agentes de IA que automatizam o trabalho pesado.
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
                                <h3 className="text-xl font-semibold text-black mb-2">Upload e Linha do Tempo</h3>
                                <p className="text-zinc-700">Faça o upload dos seus arquivos ou cole um link do YouTube. Os elementos aparecem em uma linha do tempo familiar e fácil de arrastar.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Aplique Ferramentas de IA</h3>
                                <p className="text-zinc-700">Use o 'Subtitles' para legendar, o 'Smart Cut' para remover silêncios ou o 'Magic Clips' para criar cortes virais automaticamente.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Personalize o Design</h3>
                                <p className="text-zinc-700">Adicione textos, músicas de estoque, efeitos de transição e layouts dinâmicos para deixar seu vídeo com cara profissional.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Exporte e Compartilhe</h3>
                                <p className="text-zinc-700">Processe seu vídeo na nuvem e baixe o arquivo final ou compartilhe um link direto para feedback e revisão.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Principais Funcionalidades de IA</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Legendas Automáticas</h3>
                            <p className="text-zinc-700">Gere legendas sincronizadas em dezenas de idiomas com um clique. Edite o texto e a estética de forma global para garantir legibilidade.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Smart Cut e Remoção de Silêncio</h3>
                            <p className="text-zinc-700">A IA vasculha seu vídeo e remove partes mortas, silêncios longos e erros de fala, economizando horas de edição manual granular.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Geração de Voz (TTS)</h3>
                            <p className="text-zinc-700">Crie narrações profissionais a partir de roteiros escritos, escolhendo entre diversas vozes naturais de IA diretamente no editor.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens do Kapwing</h2>
                    <div className="grid gap-4">
                        {[
                            "Edição 100% online: não requer hardware potente para rodar",
                            "Interface 'Clean' e muito fácil de navegar comparada a editores clássicos",
                            "Colaboração em tempo real (estilo Google Docs) para equipes",
                            "Ferramentas de IA que resolvem problemas de 'micro-edição' em segundos",
                            "Biblioteca de templates e mídias integradas de alta qualidade",
                            "Fluxo de trabalho otimizado para produtores de conteúdo para redes sociais"
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
                            "A versão gratuita possui marca d'água e limites de tempo de exportação",
                            "Pode apresentar lentidão em vídeos extremamente longos ou com muitos elementos",
                            "Por ser cloud-based, exige conexão constante e estável com a internet",
                            "Não substitui softwares de pós-produção complexos para efeitos visuais de cinema"
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Kapwing?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3 text-zinc-900 border-b pb-2">Ideal para:</h3>
                            <ul className="space-y-2 mt-4">
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Creators focados em TikTok, Reels e Shorts</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Times de Marketing e Social Media corporativos</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Educadores criando aulas rápidas e dinâmicas</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Empreendedores que cuidam da própria comunicação</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3 border-b border-zinc-300 pb-2">Não é ideal para:</h3>
                            <ul className="space-y-2 mt-4">
                                <li className="flex gap-2 text-zinc-700">
                                    <span>✕</span>
                                    <span>Profissionais de VFX e Correção de Cor avançada</span>
                                </li>
                                <li className="flex gap-2 text-zinc-700">
                                    <span>✕</span>
                                    <span>Editores que trabalham offline em locais sem conexão</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Edite vídeos com superpoderes</h2>
                    <p className="text-lg mb-6 text-zinc-300">Junte-se a milhões de criadores e transforme seu processo de edição com o Kapwing.</p>
                    <a
                        href={toolMetadata.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Começar a Editar Grátis →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Kapwing é a prova de que a edição de vídeo não precisa ser um processo lento e solitário. Ao trazer ferramentas de IA úteis para a nuvem, ele remove as barreiras técnicas e permite que qualquer pessoa crie conteúdo visual impactante em tempo recorde.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se você valoriza seu tempo e busca uma solução colaborativa que facilite a criação de conteúdo moderno para redes sociais, o Kapwing é uma das ferramentas mais indispensáveis da atualidade.
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
