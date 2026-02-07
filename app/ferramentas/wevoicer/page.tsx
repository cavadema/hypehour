import Link from "next/link";
import { toolMetadata, faqs } from "./constants";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
    title: `${toolMetadata.nome} - Gerador de Voz com IA Profissional | HypeHour`,
    description: toolMetadata.descricao,
    alternates: {
        canonical: `https://www.hypehour.com.br/ferramentas/wevoicer`,
    },
};

export default function WeVoicerPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": `https://www.hypehour.com.br/ferramentas/wevoicer#breadcrumb`,
                "itemListElement": toolMetadata.breadcrumb.map((item, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "name": item.nome,
                    "item": `https://www.hypehour.com.br${item.url}`
                }))
            },
            {
                "@type": "SoftwareApplication",
                "@id": `https://www.hypehour.com.br/ferramentas/wevoicer#software`,
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
                "@id": `https://www.hypehour.com.br/ferramentas/wevoicer#faq`,
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
                        W
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">{toolMetadata.nome}</h1>
                        <p className="text-lg text-zinc-700">{toolMetadata.descricao}</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O WeVoicer foca em uma das necessidades mais crescentes do marketing moderno: narrações de alta qualidade geradas instantaneamente. Utilizando tecnologia de rede neural de última geração, a plataforma transforma textos frios em áudios vibrantes, com emoção e fluidez humana.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Se você é um criador de conteúdo que prefere não aparecer, um professor preparando aulas online ou uma empresa que precisa de narrações rápidas para treinamentos, o WeVoicer oferece uma das bibliotecas de vozes mais completas e naturais do mercado global.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o WeVoicer?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O WeVoicer é um motor de Text-to-Speech (TTS) especializado em 'Vozes Humanas de IA'. Ele se diferencia de geradores de voz antigos por captar o ritmo da respiração rítmica e a entonação correta de frases complexas, evitando aquele tom metálico e robótico que muitas plataformas gratuitas ainda possuem.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        A plataforma é amplamente utilizada para criar dublagens rápidas, converter artigos em áudio para acessibilidade e gerar conteúdos dinâmicos para plataformas como YouTube, Instagram e TikTok, onde a qualidade do áudio é fundamental para a retenção do público.
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
                                <h3 className="text-xl font-semibold text-black mb-2">Insira seu Texto</h3>
                                <p className="text-zinc-700">Cole seu roteiro, artigo ou documento diretamente no editor online do WeVoicer.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Escolha a Voz Ideal</h3>
                                <p className="text-zinc-700">Explore centenas de vozes por gênero, idade e sentimento para encontrar a que melhor combina com seu projeto.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Personalize a Fala</h3>
                                <p className="text-zinc-700">Ajuste a velocidade, o tom e insira pausas manuais para garantir que a narração soe exatamente como você planejou.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Gere e Baixe</h3>
                                <p className="text-zinc-700">Processe o áudio em segundos e baixe o arquivo MP3 final pronto para ser usado em qualquer lugar.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Principais Diferenciais</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Vozes Humanizadas Reais</h3>
                            <p className="text-zinc-700">A tecnologia de IA generativa garante que a curva da fala seja suave, com ênfases naturais nas palavras certas, evitando monotonia.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Biblioteca Global</h3>
                            <p className="text-zinc-700">Acesso a centenas de vozes em mais de 70 idiomas, permitindo a globalização de conteúdos com sotaques regionais autênticos.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Editor Amigável</h3>
                            <p className="text-zinc-700">Uma interface limpa que não exige conhecimentos técnicos, focada no que importa: transformar texto em voz de forma rápida.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens do WeVoicer</h2>
                    <div className="grid gap-4">
                        {[
                            "Economia drástica de tempo comparado à gravação manual de voz",
                            "Custo muito inferior à contratação de locutores profissionais",
                            "Consistência vocal: a mesma voz para todos os seus vídeos e tutoriais",
                            "Fácil correção de erros: basta editar o texto e gerar o áudio novamente",
                            "Suporte a múltiplos idiomas para expansão internacional de negócios",
                            "Interface minimalista e focada em produtividade"
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
                    <h2 className="text-3xl font-bold text-black mb-6">Considerações e Pontos de Atenção</h2>
                    <div className="grid gap-4">
                        {[
                            "Exige conexão com a internet para funcionar (ferramenta online)",
                            "Vozes extremamente autênticas requerem planos premium",
                            "O controle de emoção ultra-granular (como choro ou riso) ainda é um desafio para a maioria das IAs",
                            "Licença comercial disponível apenas para usuários pagantes"
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o WeVoicer?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3 text-zinc-900 border-b pb-2">Ideal para:</h3>
                            <ul className="space-y-2 mt-4">
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Canais de 'Vaca Caçadora' (Canais Dark) no YouTube</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Criadores de tutoriais e treinamentos online</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Empresas que precisam de URA e mensagens de voz</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-900 font-bold">→</span>
                                    <span className="text-zinc-700">Autores convertendo livros em audiobooks</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3 border-b border-zinc-300 pb-2">Não é ideal para:</h3>
                            <ul className="space-y-2 mt-4">
                                <li className="flex gap-2 text-zinc-700">
                                    <span>✕</span>
                                    <span>Projetos cinematográficos que exigem atuação vocal extrema</span>
                                </li>
                                <li className="flex gap-2 text-zinc-700">
                                    <span>✕</span>
                                    <span>Usuários sem nenhuma conexão estável com a web</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Dê voz às suas ideias com a melhor IA</h2>
                    <p className="text-lg mb-6 text-zinc-300">Crie narrações profissionais em segundos com o WeVoicer.</p>
                    <a
                        href={toolMetadata.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Criar Voz Gratuitamente →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O WeVoicer é uma solução sólida e eficiente para um dos maiores gargalos da produção audiovisual: o áudio. Ao oferecer vozes que soam naturais e uma interface que não perde tempo, ele se torna uma ferramenta indispensável no arsenal de qualquer criador moderno.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se você busca o equilíbrio entre qualidade vocal humana e a velocidade da inteligência artificial, o WeVoicer entrega resultados que elevam o patamar de qualquer projeto visual ou educacional.
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
