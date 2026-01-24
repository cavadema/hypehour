import Link from "next/link";
import { MicrophoneIcon } from "@heroicons/react/24/solid";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";
import { faqs } from "./constants";

export const metadata = {
    title: "Willow - Ditado de Voz com IA e Transcrição Inteligente | Review",
    description: "Conheça o Willow (Willowvoice): o assistente de ditado com IA que edita enquanto você fala. Veja recursos, preços, integração e se vale a pena.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/willow",
    },
};

export default function WillowPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/willow#breadcrumb",
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
                        "name": "Willow",
                        "item": "https://www.hypehour.com.br/ferramentas/willow"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/willow#software",
                "name": "Willow",
                "nameAlternative": "Willowvoice",
                "description": "Willow é um assistente de ditado por voz com IA que oferece transcrição ultra-precisa e edição automática de texto em tempo real.",
                "applicationCategory": "MultimediaApplication",
                "operatingSystem": "Mac, Windows, iOS",
                "url": "https://willowvoice.com",
                "creator": {
                    "@type": "Organization",
                    "name": "Willowvoice AI"
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
                    <span className="text-black font-medium">Willow</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white shadow overflow-hidden">
                        <MicrophoneIcon className="w-10 h-10" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Willow</h1>
                        <p className="text-lg text-zinc-700">O seu assistente de ditado com IA ultra-preciso</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O <strong>Willow</strong> (também conhecido como Willowvoice) é um assistente de voz projetado para transformar a maneira como escrevemos. Ao contrário do ditado tradicional que apenas converte sons em texto, o Willow utiliza modelos de linguagem avançados para <strong>entender o contexto</strong>, corrigir pontuação e formatar o texto exatamente como você escreveria manualmente.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Seja para responder e-mails no Slack, redigir documentos no Notion ou enviar mensagens rápidas, o Willow oferece uma experiência que muitos descrevem como "mágica". Ele permite que você recupere o tempo gasto digitando e foque apenas no que realmente importa: a clareza da sua mensagem.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Willow?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Willow é uma aplicação multiplataforma (Mac, Windows e iOS) que age como uma interface invisível de ditado. Ele substitui o ditado padrão do sistema por uma engine 50% mais precisa, capaz de lidar com termos técnicos, nomes próprios e nuances de estilo pessoal em tempo real.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Escrita em tempo real e Edição Inteligente</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        O grande diferencial do Willow é sua capacidade de edição. Enquanto você fala, a IA remove vícios de linguagem (como "humm" ou "então"), ajusta a gramática e garante que o tom da mensagem seja mantido. Se você estiver com pressa, o 'AI Mode' pode até expandir comandos curtos em mensagens completas e polidas.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Privacidade e Segurança Empresarial</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        A ferramenta foi construída com foco em segurança. Para empresas, o Willow oferece conformidade SOC 2 e HIPAA, garantindo que os dados ditados não sejam usados para treinar modelos globais e que a privacidade do usuário seja respeitada através de políticas de retenção zero de dados.
                    </p>
                </section>

                {/* Como funciona - Steps */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Como usar o Willow</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Instale o software</h3>
                                <p className="text-zinc-700">Baixe o Willow para Mac ou Windows e habilite as permissões de microfone e acessibilidade.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Ative o ditado</h3>
                                <p className="text-zinc-700">Pressione um atalho de teclado simples enquanto estiver em qualquer caixa de texto para começar a falar.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Fale naturalmente</h3>
                                <p className="text-zinc-700">Não precisa ditar pontuação se não quiser; a IA cuidará disso para que o texto soe natural e profissional.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Veja o resultado</h3>
                                <p className="text-zinc-700">Solte o atalho e o texto aparecerá instantaneamente no seu aplicativo, editado e pronto para ser enviado.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Principais funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Funcionalidades Principais</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Estilo de Escrita Personalizado</h3>
                            <p className="text-zinc-700">O Willow aprende como você escreve e aplica sua formalidade e tom em cada mensagem gerada via voz.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Correção Gramatical em Tempo Real</h3>
                            <p className="text-zinc-700">Elimina erros de digitação e gramática enquanto você fala, mantendo o fluxo criativo ininterrupto.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Acesso Global</h3>
                            <p className="text-zinc-700">Funciona em cima de qualquer aplicativo, do navegador Chrome ao terminal de desenvolvedor.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Detecção de Termos Técnicos</h3>
                            <p className="text-zinc-700">Alta inteligência para soletrar corretamente nomes próprios e vocabulário técnico de diversos nichos.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "50% mais preciso que o ditado padrão do sistema",
                            "Edição e pontuação automáticas de alta fidelidade",
                            "Suporte multiplataforma (Desktop e Mobile)",
                            "Foco extremo em privacidade e segurança de dados",
                            "Ideal para pessoas com dificuldades motoras ou RSI (LER)",
                            "Permite ditar sussurros com o 'Quiet Mode'",
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
                            "Exige conexão ativa com a internet para máxima precisão",
                            "Assinatura mensal pode ser cara para usuários casuais",
                            "Requer tempo de adaptação para confiar na edição automática",
                            "Alguns recursos de personalização exigem o plano Premium",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Willow?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Executivos e profissionais com alto volume de e-mails</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Desenvolvedores e engenheiros que precisam ditar notas</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Escritores e criadores buscando agilidade na primeira versão</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Pessoas com lesões por esforço repetitivo (LER)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Usuários que preferem digitação manual absoluta</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Ambientes públicos extremamente barulhentos</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem busca apenas transcrição de álbuns de áudio longos</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Fale em vez de digitar</h2>
                    <p className="text-lg mb-6 text-zinc-300">Recupere horas do seu dia com o assistente de voz com IA do Willow</p>
                    <a
                        href="https://willowvoice.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Acessar Willowvoice →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Willow não é apenas uma ferramenta de ditado; é um multiplicador de produtividade. Sua capacidade de transformar a fala desestruturada em texto profissional instantaneamente é um salto evolutivo em relação ao que as ferramentas nativas oferecem.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se você sente que gasta energia demais com o teclado, o Willow oferece o melhor retorno sobre investimento para quem busca fluxos de trabalho "voice-first". É a peça final do quebra-cabeça para uma produtividade moderna e sem barreiras.
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
