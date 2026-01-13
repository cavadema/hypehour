import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
    title: "Speechify - Text to Speech e Voice Typing com IA | Análise e Review",
    description: "Conheça o Speechify: assistente de voz com IA para converter texto em áudio natural e digitar por voz 5x mais rápido. Veja como funciona, vantagens e se é ideal para você.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/speechify",
    },
};

export default function SpeechifyPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/speechify#breadcrumb",
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
                        "name": "Transcrever Áudio",
                        "item": "https://www.hypehour.com.br/transcrever-audio"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Speechify",
                        "item": "https://www.hypehour.com.br/ferramentas/speechify"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/speechify#software",
                "name": "Speechify",
                "description": "Speechify é um assistente de voz com IA que converte texto em áudio natural e permite digitar por voz 5x mais rápido, com mais de 50 milhões de usuários.",
                "applicationCategory": "ProductivityApplication",
                "operatingSystem": "Web, iOS, Android, Chrome Extension",
                "url": "https://speechify.com",
                "creator": {
                    "@type": "Organization",
                    "name": "Speechify"
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
                    <Link href="/transcrever-audio" className="hover:text-black transition">Transcrever Áudio</Link>
                    <span className="text-zinc-400">/</span>
                    <span className="text-black font-medium">Speechify</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        S
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Speechify</h1>
                        <p className="text-lg text-zinc-700">Assistente de voz com IA para texto e áudio</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        Speechify é uma plataforma líder em tecnologia de voz com IA, usada por mais de 50 milhões de pessoas para converter texto em áudio natural e digitar por voz com precisão. Com mais de 200 vozes humanas realistas, permite ouvir livros, PDFs, artigos e documentos em qualquer lugar, além de escrever 5x mais rápido usando ditado por voz.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Ideal para estudantes, profissionais, pessoas com ADHD, dislexia ou qualquer um que queira aumentar produtividade e absorver conteúdo de forma mais eficiente. Disponível em web, iOS, Android e como extensão do Chrome.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Speechify?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Speechify é um assistente de voz com IA que oferece três funcionalidades principais: Text-to-Speech (converter texto em áudio), Voice Typing (digitar por voz) e Voice AI (obter respostas rápidas). A plataforma usa vozes naturais e tecnologia de ponta para transformar qualquer conteúdo escrito em áudio de alta qualidade.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Como o Speechify funciona?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        O Speechify usa modelos avançados de IA para sintetizar voz natural a partir de texto e transcrever fala em texto com alta precisão. Você pode ouvir qualquer conteúdo em velocidades ajustáveis (até 4.5x mais rápido), com destaque de texto sincronizado, e digitar usando apenas sua voz em qualquer aplicativo.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">O Speechify é gratuito?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Sim, Speechify oferece um plano gratuito com funcionalidades básicas. Existe também um plano premium com acesso a vozes premium, velocidades mais altas, recursos avançados e uso ilimitado.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">O Speechify funciona em português?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Sim, Speechify funciona perfeitamente em português brasileiro e europeu, com vozes naturais e suporte completo para transcrição e leitura de textos em português.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">O Speechify é confiável?</h2>
                    <p className="text-zinc-700 leading-relaxed">
                        Sim, Speechify é amplamente confiável e usado por mais de 50 milhões de pessoas, incluindo estudantes de universidades renomadas, profissionais e pessoas com necessidades de acessibilidade. Recebeu mais de 500 mil avaliações de 5 estrelas.
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
                                <h3 className="text-xl font-semibold text-black mb-2">Escolha o conteúdo</h3>
                                <p className="text-zinc-700">Cole texto, faça upload de PDF, Word, ou abra qualquer página web que deseja ouvir ou transcrever.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Selecione a voz e velocidade</h3>
                                <p className="text-zinc-700">Escolha entre mais de 200 vozes naturais e ajuste a velocidade de leitura conforme sua preferência (até 4.5x).</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Ouça ou digite por voz</h3>
                                <p className="text-zinc-700">Aperte play para ouvir o conteúdo ou ative o voice typing para digitar 5x mais rápido usando apenas sua voz.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Sincronize em todos os dispositivos</h3>
                                <p className="text-zinc-700">Continue de onde parou em qualquer dispositivo - web, mobile ou desktop - com sincronização automática.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Ouvir livros e artigos",
                            "Estudar com áudio",
                            "Ler PDFs em movimento",
                            "Digitar por voz 5x mais rápido",
                            "Transcrever reuniões",
                            "Criar podcasts de conteúdo",
                            "Acessibilidade para dislexia",
                            "Suporte para ADHD",
                            "Revisar documentos ouvindo",
                            "Aprender idiomas",
                            "Consumir notícias",
                            "Produtividade em deslocamento",
                            "Ditado de emails",
                            "Escrever ensaios por voz",
                            "Ler páginas web",
                            "Criar notas de voz",
                            "Revisar código ouvindo",
                            "Estudar para provas",
                        ].map((item, index) => (
                            <div key={index} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition">
                                <p className="text-zinc-700 text-sm">{item}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Principais funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Mais de 200 vozes naturais</h3>
                            <p className="text-zinc-700">Escolha entre centenas de vozes realistas em diversos idiomas, incluindo vozes de celebridades e personalizadas com IA.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Voice Typing - Ditado por voz</h3>
                            <p className="text-zinc-700">Escreva 5x mais rápido usando apenas sua voz, com precisão superior e suporte para pontuação automática.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Velocidade ajustável até 4.5x</h3>
                            <p className="text-zinc-700">Aumente a velocidade de leitura para consumir conteúdo mais rápido sem perder compreensão.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Destaque de texto sincronizado</h3>
                            <p className="text-zinc-700">Acompanhe visualmente o texto sendo lido com destaque automático, facilitando a concentração.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Suporte a múltiplos formatos</h3>
                            <p className="text-zinc-700">Funciona com PDFs, Word, páginas web, emails, Google Docs e praticamente qualquer texto digital.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Speechify AI - Respostas rápidas</h3>
                            <p className="text-zinc-700">Pergunte qualquer coisa em qualquer página e receba respostas instantâneas com IA integrada.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Mais de 200 vozes naturais e realistas para escolher, incluindo vozes premium",
                            "Funciona em todos os dispositivos com sincronização automática (web, iOS, Android, Chrome)",
                            "Voice typing permite escrever 5x mais rápido do que digitando manualmente",
                            "Ideal para acessibilidade - ajuda pessoas com dislexia, ADHD e deficiências visuais",
                            "Velocidade ajustável até 4.5x para consumir conteúdo mais rapidamente",
                            "Plano gratuito disponível para testar todas as funcionalidades básicas",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
                    <div className="grid gap-4">
                        {[
                            "Plano gratuito tem limitações de uso e acesso a vozes premium",
                            "Requer conexão à internet para funcionar - não há modo offline completo",
                            "Algumas vozes premium são pagas e podem ter custo adicional",
                            "Voice typing pode ter dificuldade com sotaques muito fortes ou ambientes barulhentos",
                            "Assinatura premium pode ser cara para uso individual prolongado",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Speechify?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Estudantes que querem absorver conteúdo mais rápido</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Pessoas com dislexia ou ADHD</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Profissionais que precisam revisar documentos</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Leitores ávidos que querem ouvir livros</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Criadores de conteúdo e escritores</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem precisa de uso offline constante</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Usuários com orçamento muito limitado</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem usa apenas ocasionalmente</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Ambientes sem internet estável</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem prefere apenas leitura tradicional</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Vídeo do YouTube */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Veja o Speechify em ação</h2>
                    <div className="rounded-xl overflow-hidden shadow-lg border border-zinc-200">
                        <div className="relative pb-[56.25%] h-0">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/q14VyQqZjQA"
                                title="Speechify Demo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Pronto para ouvir e escrever com IA?</h2>
                    <p className="text-lg mb-6 text-zinc-300">Experimente o Speechify gratuitamente e transforme sua produtividade</p>
                    <a
                        href="https://speechify.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Acessar Speechify →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        Speechify é uma ferramenta poderosa e versátil para quem quer aumentar produtividade através de voz. Com mais de 50 milhões de usuários, vozes naturais de alta qualidade e funcionalidades como voice typing e text-to-speech, oferece uma solução completa para consumir e criar conteúdo de forma mais eficiente.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Seja para estudar, trabalhar ou simplesmente consumir conteúdo de forma mais conveniente, Speechify se destaca como uma das melhores opções do mercado, especialmente para pessoas com necessidades de acessibilidade ou que buscam otimizar seu tempo.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
