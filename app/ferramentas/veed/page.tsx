import Link from "next/link";
import { toolMetadata, faqs } from "./constants";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
    title: `${toolMetadata.nome} - Editor de Vídeo Profissional Online | HypeHour`,
    description: toolMetadata.description,
    alternates: {
        canonical: `https://www.hypehour.com.br/ferramentas/veed`,
    },
};

export default function VeedPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": `https://www.hypehour.com.br/ferramentas/veed#breadcrumb`,
                "itemListElement": toolMetadata.breadcrumb.map((item, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "name": item.nome,
                    "item": `https://www.hypehour.com.br${item.url}`
                }))
            },
            {
                "@type": "SoftwareApplication",
                "@id": `https://www.hypehour.com.br/ferramentas/veed#software`,
                "name": toolMetadata.nome,
                "description": toolMetadata.description,
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
                "@id": `https://www.hypehour.com.br/ferramentas/veed#faq`,
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
                        V
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">{toolMetadata.nome}</h1>
                        <p className="text-lg text-zinc-700">{toolMetadata.description}</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O VEED é uma das plataformas de edição de vídeo baseadas em nuvem mais robustas e amadas do mercado. Ele combina ferramentas de edição tradicionais com o poder da inteligência artificial para simplificar processos que antes levavam horas, como legendagem, limpeza de áudio e tradução.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Feito para criadores de conteúdo, profissionais de marketing e times corporativos, o VEED permite que qualquer pessoa produza vídeos de alta qualidade com um acabamento profissional, tudo direto no navegador, sem a necessidade de baixar softwares pesados ou ter um hardware de última geração.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o VEED?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O VEED é um estúdio de criação de vídeo 'all-in-one'. Embora sua interface seja simples, ele por trás carrega ferramentas potentes de IA generativa e processamento de linguagem natural. Ele resolve o 'trabalho chato' da edição: remove silêncios, gera legendas perfeitas, traduz diálogos e até melhora a qualidade da voz de gravações caseiras.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        É a ferramenta de escolha para quem precisa de velocidade e consistência na criação de Shorts, Reels, vídeos de treinamento e webinars, oferecendo um equilíbrio perfeito entre facilidade de uso e funcionalidades avançadas.
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
                                <h3 className="text-xl font-semibold text-black mb-2">Upload Rápido</h3>
                                <p className="text-zinc-700">Suba seus vídeos brutos ou use o gravador integrado para capturar sua tela e webcam simultaneamente.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Automatize com IA</h3>
                                <p className="text-zinc-700">Clique em 'Subtitles' para legendar automaticamente ou use o 'Clean Audio' para remover ruídos de fundo instantaneamente.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Estilize e Branle</h3>
                                <p className="text-zinc-700">Adicione textos, elementos gráficos, músicas e transições. Use seu kit de marca para manter a identidade visual.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Compartilhe e Exporte</h3>
                                <p className="text-zinc-700">Exporte em alta definição (até 4K) ou use o link de compartilhamento para revisões rápidas sem precisar baixar o arquivo.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Funcionalidades de IA */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Funcionalidades de IA Revolucionárias</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Legendas Automáticas Dinâmicas</h3>
                            <p className="text-zinc-700">Transcreva áudio para texto em segundos com mais de 95% de precisão. Suporta diversos estilos de animação populares nas redes sociais.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Voice over com IA</h3>
                            <p className="text-zinc-700">Transforme texto em fala usando vozes de IA altamente realistas, eliminando a necessidade de contratar locutores para seus vídeos.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Limpeza de Áudio (Magic Clean)</h3>
                            <p className="text-zinc-700">Remova automaticamente ruídos de fundo indesejados, ecos e estouros, garantindo que sua voz soe cristalina.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens do VEED</h2>
                    <div className="grid gap-4">
                        {[
                            "Extrema facilidade de uso mesmo para quem nunca editou vídeos",
                            "Legendagem automática mais precisa e rápida do mercado",
                            "Ferramentas de IA que resolvem problemas técnicos de áudio e imagem",
                            "Não requer instalação: tudo roda suavemente no navegador",
                            "Recursos de colaboração que facilitam o trabalho em equipe",
                            "Biblioteca gigante de mídias de estoque e efeitos integrados"
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
                    <h2 className="text-3xl font-bold text-black mb-6">Considerações importantes</h2>
                    <div className="grid gap-4">
                        {[
                            "A versão gratuita exporta vídeos com marca d'água do VEED",
                            "Arquivos muito pesados podem demorar um pouco mais para processar via nuvem",
                            "Os recursos mais potentes de tradução e IA estão nos planos pagos",
                            "Menos flexibilidade de Keyframes complexos se comparado a editores desktop de alta performance"
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o VEED?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3 text-zinc-900 border-b pb-2">Ideal para:</h3>
                            <ul className="space-y-2 mt-4">
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Criadores de Reels, TikToks e Shorts</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Times de Marketing e Social Media</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Podcasters que criam cortes de vídeo (videocasts)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Empresas criando vídeos de treinamento e RH</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3 border-b border-zinc-300 pb-2">Não é ideal para:</h3>
                            <ul className="space-y-2 mt-4">
                                <li className="flex gap-2 text-zinc-700">
                                    <span>✕</span>
                                    <span>Edição de longas-metragens cinematográficos</span>
                                </li>
                                <li className="flex gap-2 text-zinc-700">
                                    <span>✕</span>
                                    <span>Trabalho offline em locais sem conexão com a internet</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Transforme seus vídeos hoje com IA</h2>
                    <p className="text-lg mb-6 text-zinc-300">Junte-se a milhões de criadores que usam o VEED para legendar, editar e crescer.</p>
                    <a
                        href={toolMetadata.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Experimentar VEED Gratuitamente →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O VEED não é apenas um editor de vídeo; é um acelerador de produtividade. Ao focar em remover a fricção da edição — especialmente em tarefas como legendagem e áudio — ele permite que você foque no que realmente importa: a sua mensagem.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se você precisa de vídeos com aparência profissional, fáceis de produzir e prontos para as plataformas digitais modernas, o VEED é, sem dúvida, uma das ferramentas mais avançadas e confiáveis disponíveis atualmente.
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
