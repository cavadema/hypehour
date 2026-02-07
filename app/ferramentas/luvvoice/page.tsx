import Link from "next/link";
import { toolMetadata, faqs } from "./constants";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
    title: `${toolMetadata.nome} - Gerador de Voz com IA Gratuito | HypeHour`,
    description: toolMetadata.descricao,
    alternates: {
        canonical: `https://www.hypehour.com.br/ferramentas/luvvoice`,
    },
};

export default function LuvvoicePage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": `https://www.hypehour.com.br/ferramentas/luvvoice#breadcrumb`,
                "itemListElement": toolMetadata.breadcrumb.map((item, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "name": item.nome,
                    "item": `https://www.hypehour.com.br${item.url}`
                }))
            },
            {
                "@type": "SoftwareApplication",
                "@id": `https://www.hypehour.com.br/ferramentas/luvvoice#software`,
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
                "@id": `https://www.hypehour.com.br/ferramentas/luvvoice#faq`,
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
                        L
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">{toolMetadata.nome}</h1>
                        <p className="text-lg text-zinc-700">{toolMetadata.descricao}</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O Luvvoice se destaca no competitivo mercado de geradores de voz por IA como uma solução extremamente poderosa, versátil e, acima de tudo, acessível. Ele oferece um dos maiores catálogos de vozes gratuitas do mercado, permitindo que criadores independentes tenham acesso a narrações de alta fidelidade sem grandes investimentos.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Seja para narrar um vídeo do YouTube em Português do Brasil com naturalidade ou globalizar um conteúdo para outros 70 idiomas, o Luvvoice entrega resultados profissionais direto no navegador, equilibrando tecnologia de ponta com uma experiência de uso simplificada.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Luvvoice?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Luvvoice é uma plataforma especializada em Texto para Fala (TTS - Text to Speech) baseada em inteligência artificial. O diferencial da ferramenta é a sua enorme biblioteca — com mais de 500 vozes — e o uso de redes neurais profundas que garantem que as narrações não soem robóticas, mas sim com a fluidez e a emoção da fala humana rítmica.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Muito popular entre produtores de conteúdos para TikTok e canais 'dark' (onde o criador não aparece), o Luvvoice permite transformar roteiros inteiros em arquivos MP3 prontos para uso em segundos, suportando uma vasta gama de idiomas e sotaques regionais autênticos.
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
                                <h3 className="text-xl font-semibold text-black mb-2">Entrada de Texto</h3>
                                <p className="text-zinc-700">Cole seu roteiro ou texto diretamente na área de transferência central do site.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Seleção de Voz e Idioma</h3>
                                <p className="text-zinc-700">Escolha entre Português e outros 70 idiomas. Filtre as vozes por tom (grave, agudo), gênero e estilo.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Processamento de IA</h3>
                                <p className="text-zinc-700">Clique em converter. A IA processa o texto em tempo real, aplicando as nuances vocais selecionadas.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Download Imediato</h3>
                                <p className="text-zinc-700">Ouça a prévia do áudio e faça o download gratuito no formato MP3 de alta qualidade.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Diferenciais */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Principais Diferenciais</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Vozes Humanizadas</h3>
                            <p className="text-zinc-700">Diferente de geradores tradicionais, o Luvvoice entende pontuação e entonação, gerando áudios que 'respiram' naturalmente.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Biblioteca Massiva</h3>
                            <p className="text-zinc-700">São mais de 500 opções vocais, garantindo que você encontre o timbre perfeito para qualquer tipo de vídeo ou apresentação.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Totalmente Online</h3>
                            <p className="text-zinc-700">Tudo funciona direto no seu navegador de forma rápida, sem exigir downloads pesados ou processamento local do seu PC.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens do Luvvoice</h2>
                    <div className="grid gap-4">
                        {[
                            "Serviço gratuito generoso para novos criadores",
                            "Vozes realistas em Português do Brasil com excelente pronúncia",
                            "Suporte a mais de 70 idiomas para expansão de conteúdo",
                            "Interface minimalista focada em rapidez: escolha, converta e baixe",
                            "Áudios baixados em MP3 compatíveis com qualquer software de edição",
                            "Ideal para narrações de YouTube, TikTok, Reels e Cursos Online"
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
                    <h2 className="text-3xl font-bold text-black mb-6">Considerações e Limites</h2>
                    <div className="grid gap-4">
                        {[
                            "A versão gratuita possui limites de caracteres por sessão de conversão",
                            "O uso comercial pleno e sem restrições é reservado aos planos pagos",
                            "Por ser uma ferramenta online, depende 100% de conexão estável com a web",
                            "Para projetos cinematográficos ultra-vividos, pode exigir pequenos ajustes de velocidade"
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Luvvoice?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3 text-zinc-900 border-b pb-2">Ideal para:</h3>
                            <ul className="space-y-2 mt-4">
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Canais de YouTube sem rosto (Canais Dark)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Criadores de vídeos curtos para TikTok e Instagram</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Professores criando narrações para aulas EAD</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Pequenos negócios gerando áudios promocionais</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3 border-b border-zinc-300 pb-2">Não é ideal para:</h3>
                            <ul className="space-y-2 mt-4">
                                <li className="flex gap-2 text-zinc-700">
                                    <span>✕</span>
                                    <span>Dublagens de cinema com múltiplas camadas de emoção</span>
                                </li>
                                <li className="flex gap-2 text-zinc-700">
                                    <span>✕</span>
                                    <span>Ambientes de trabalho sem acesso constante à internet</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Transforme seu texto em uma narração profissional</h2>
                    <p className="text-lg mb-6 text-zinc-300">Escolha entre centenas de vozes reais e comece no Luvvoice agora.</p>
                    <a
                        href={toolMetadata.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Criar Voz Grátis Agora →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Luvvoice se posiciona como uma ponte essencial para criadores de conteúdo que buscam qualidade sem complexidade. Sua vasta biblioteca de vozes e a precisão da sua inteligência artificial garantem que o usuário tenha em mãos uma "locutor virtual" de alto nível pronto 24h por dia.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Pela sua facilidade, versatilidade de idiomas e modelo acessível, o Luvvoice é sem dúvida uma das ferramentas mais interessantes para quem deseja escalar a produção de conteúdos audiovisuais de forma inteligente e econômica.
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
