import Link from "next/link";
import { toolMetadata, faqs } from "./constants";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
    title: `${toolMetadata.nome} - Gerador de Vídeos com IA | Análise e Review`,
    description: toolMetadata.descricao,
    alternates: {
        canonical: `https://www.hypehour.com.br/ferramentas/invideo`,
    },
};

export default function InvideoPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": `https://www.hypehour.com.br/ferramentas/invideo#breadcrumb`,
                "itemListElement": toolMetadata.breadcrumb.map((item, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "name": item.nome,
                    "item": `https://www.hypehour.com.br${item.url}`
                }))
            },
            {
                "@type": "SoftwareApplication",
                "@id": `https://www.hypehour.com.br/ferramentas/invideo#software`,
                "name": toolMetadata.nome,
                "description": toolMetadata.descricao,
                "applicationCategory": "MultimediaApplication",
                "operatingSystem": "Web, iOS, Android",
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
                "@id": `https://www.hypehour.com.br/ferramentas/invideo#faq`,
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
                        I
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">{toolMetadata.nome}</h1>
                        <p className="text-lg text-zinc-700">{toolMetadata.descricao}</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O Invideo é uma das plataformas mais robustas para criação de vídeos assistida por inteligência artificial. Com o lançamento do Invideo AI, a ferramenta elevou o nível, permitindo que qualquer pessoa gere vídeos completos — com narração, clips de estoque e legendas — apenas digitando um prompt de texto.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Seja para YouTube, Instagram, TikTok ou apresentações corporativas, o Invideo simplifica o processo de edição, permitindo que você foque na mensagem enquanto a IA cuida da montagem visual e técnica.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Invideo?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Invideo é um editor de vídeo baseado na nuvem que combina ferramentas de edição tradicionais com recursos de inteligência artificial generativa. Ele oferece dois fluxos principais: o <strong>Invideo AI</strong>, que gera vídeos automaticamente a partir de prompts, e o <strong>Invideo Studio</strong>, que fornece milhares de templates customizáveis para um controle mais granular.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        A plataforma se destaca pela sua vasta biblioteca de mídias de estoque (iStock, Shutterstock) e por um motor de IA de texto para vídeo que consegue interpretar roteiros complexos para criar cenas coerentes e visualmente atraentes em segundos.
                    </p>
                </section>

                {/* Como funciona */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Como funciona o Invideo AI</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Insira um prompt ou roteiro</h3>
                                <p className="text-zinc-700">Diga à IA sobre o que é o vídeo, o tom da narração e a plataforma de destino (ex: um Short para YouTube sobre produtividade).</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Geração Automática</h3>
                                <p className="text-zinc-700">A IA gera o roteiro, escolhe os clips de estoque, adiciona a narração e as legendas automaticamente.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Refinamento via Chat</h3>
                                <p className="text-zinc-700">Você pode pedir à IA para "mudar a música", "trocar o clip da cena 2" ou "deixar o vídeo mais engraçado" usando comandos de chat.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Exportação e Publicação</h3>
                                <p className="text-zinc-700">Revise o resultado final e exporte o vídeo na resolução desejada pronto para ser publicado.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Principais Funcionalidades</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Gerador de Vídeo via Prompt</h3>
                            <p className="text-zinc-700">Crie vídeos completos apenas descrevendo sua ideia. A IA cuida de tudo: do roteiro à montagem final.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Vozes de IA Realistas</h3>
                            <p className="text-zinc-700">Narração automática com vozes humanas em diversos idiomas, eliminando a necessidade de contratar locutores.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Biblioteca de Mídia Gigante</h3>
                            <p className="text-zinc-700">Acesso a milhões de clips e imagens premium integrados diretamente no fluxo de trabalho para um acabamento profissional.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens do Invideo</h2>
                    <div className="grid gap-4">
                        {[
                            "Velocidade absurda na produção de conteúdo para redes sociais",
                            "Interface intuitiva que dispensa curva de aprendizado pesada",
                            "Qualidade profissional sem necessidade de hardware potente (roda no navegador)",
                            "Suporte a múltiplos formatos (horizontal, vertical, quadrado) num clique",
                            "Ferramentas de IA que economizam horas de busca manual por mídias",
                            "Excelente custo-benefício comparado à contratação de editores profissionais"
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
                            "A marca d'água na versão gratuita pode ser restritiva para uso comercial",
                            "Dependência de conexão estável com a internet por ser cloud-based",
                            "Algumas gerações de IA podem precisar de ajustes manuais no roteiro",
                            "Os créditos de IA nos planos pagos podem acabar rápido se usados intensamente"
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Invideo?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3 text-zinc-900 border-b pb-2">Ideal para:</h3>
                            <ul className="space-y-2 mt-4">
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Criadores de conteúdo e YouTubers</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Social Media e Gestores de Tráfego</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Pequenas e médias empresas (PMEs)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Educadores e produtores de cursos online</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3 border-b border-zinc-300 pb-2">Não é ideal para:</h3>
                            <ul className="space-y-2 mt-4">
                                <li className="flex gap-2 text-zinc-700">
                                    <span>✕</span>
                                    <span>Editores de cinema que precisam de controle frame-a-frame absoluto</span>
                                </li>
                                <li className="flex gap-2 text-zinc-700">
                                    <span>✕</span>
                                    <span>Empresas com restrições rigorosas de uso de IA generativa</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Revolucione sua edição de vídeo</h2>
                    <p className="text-lg mb-6 text-zinc-300">Comece a criar vídeos profissionais com IA hoje mesmo com o Invideo.</p>
                    <a
                        href={toolMetadata.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Experimentar Invideo Gratuitamente →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Invideo é uma ferramenta essencial no arsenal de qualquer criador moderno. Ao combinar o poder da IA com um editor flexível, ele democratiza a produção de vídeos de alta qualidade, permitindo que a criatividade flua sem as barreiras técnicas da edição complexa.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se você busca consistência e velocidade para alimentar seus canais digitais, o Invideo é, sem dúvida, uma das melhores opções disponíveis no mercado atualmente.
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
